# Automation Plan: Azure Local IaC Deployment

> **Status**: Active | **Last Updated**: 2026-04-03
> **Owner**: AzureLocal Cloud Team

---

## Executive Summary

Create a comprehensive, repeatable IaC automation for Azure Local deployments using three parallel deployment paths:

1. **Terraform + PowerShell** — Terraform provisions Azure resources; PowerShell handles on-premises and guest OS configuration
2. **Terraform + Ansible** — Terraform provisions Azure resources; Ansible handles on-premises and guest OS configuration
3. **Ansible-only** — Ansible `azure.azcollection` for Azure resources; Ansible roles for on-premises configuration

All paths consume the same `variables.yml` single source of truth. Samples are hosted in the `azurelocal-toolkit` repository (`src/` and `pipelines/`). Documentation updates go to `azurelocal.github.io/docs/automation/`.

---

## Architecture Decision: Why Three Paths?

Terraform **cannot** manage:

- On-premises Active Directory (OU creation, security groups, DNS records)
- OS-level configuration on bare-metal nodes (NIC naming, domain join, NTP)
- Dell iDRAC/BIOS settings (Redfish API)
- Network switch configuration (Dell PowerSwitch CLI)
- Azure Arc registration (agent bootstrapping on nodes)
- SDN deployment (Network Controller VMs)
- Guest OS monitoring agent installation

| Path | Azure Resources | On-Prem/Guest Config | Best For |
|------|:-:|:-:|---------|
| **Terraform + PowerShell** | Terraform | PowerShell scripts | Teams with existing PS expertise |
| **Terraform + Ansible** | Terraform | Ansible playbooks | Teams wanting cross-platform config mgmt |
| **Ansible-only** | `azure.azcollection` | Ansible playbooks | Teams standardizing on Ansible |

---

## Phase 1: Foundation — Variable Bridge & Terraform Backend

### Step 1: Implement `Export-TerraformTfvars` in config-loader.ps1

- **File**: `azurelocal-toolkit/scripts/common/utilities/helpers/config-loader.ps1`
- **What**: Add `Export-TerraformTfvars` function that reads `variables.yml` and outputs `terraform.tfvars` (HCL format) — matching the pattern of `Export-BicepParams` and `Export-AnsibleVars`
- **Key mapping**: `azure_platform.*` → TF variables, `networking.*` → TF variables, `identity.*` → TF variables, `tags.*` → default_tags

### Step 2: Terraform Backend Module

- **Directory**: `azurelocal-toolkit/src/terraform/backend/`
- **Resources**: Azure Storage Account + container for `.tfstate`, Resource Group
- **Naming**: `st{org}tfstate{env}` (e.g., `stiictfstateprod`), container `tfstate`
- **State locking**: Enabled via Azure blob lease

### Step 3: Terraform Module Structure

```
src/terraform/
├── backend/                    # State bootstrap
├── modules/                    # Reusable child modules
│   ├── landing-zone/           # Management groups, subscriptions, RGs
│   ├── networking/             # VNet, subnets, NSGs, NAT GW, VPN, Bastion
│   ├── identity/               # Key Vault, managed identities, RBAC
│   ├── monitoring/             # Log Analytics, diagnostic settings
│   ├── security/               # Azure Policy, Defender for Cloud
│   └── compute/                # Management VMs (DC, jumpbox, WAC, syslog)
├── environments/               # Root modules per environment
│   └── azure-local/
│       ├── main.tf             # Orchestrates all modules
│       ├── variables.tf        # All input variables
│       ├── outputs.tf          # Key outputs
│       ├── providers.tf        # azurerm, azuread providers
│       ├── backend.tf          # Remote state config
│       └── terraform.tfvars.example
└── README.md
```

---

## Phase 2: Terraform Modules — Azure Foundation

### Step 4: Landing Zone Module (`modules/landing-zone/`)

- **Resources**: Management group hierarchy, resource groups (by function)
- **Azure Verified Module**: `Azure/avm-ptn-managementgroup`
- **Variables consumed**: `azure_platform.management_groups.*`, `azure_platform.resource_groups.*`

### Step 5: Networking Module (`modules/networking/`)

- **Resources**: VNet (hub), subnets, NSGs with dynamic rules, NAT Gateway, VPN Gateway, VPN Connection, Bastion Host, Public IPs
- **Azure Verified Modules**: `Azure/avm-res-network-virtualnetwork`, `Azure/avm-res-network-bastionhost`
- **Variables consumed**: `networking.azure.*`, `network.azure_vnets.*`, `network.vpn.*`

### Step 6: Identity Module (`modules/identity/`)

- **Resources**: Key Vault + access policies, Managed Identities, Service Principal role assignments
- **Azure Verified Module**: `Azure/avm-res-keyvault-vault`
- **RBAC roles**: Contributor, User Access Administrator, Azure Stack HCI Administrator, Reader

### Step 7: Monitoring Module (`modules/monitoring/`)

- **Resources**: Log Analytics Workspace, Diagnostic Settings, Action Groups
- **Azure Verified Module**: `Azure/avm-res-operationalinsights-workspace`

### Step 8: Security Module (`modules/security/`)

- **Resources**: Azure Policy assignments, Defender for Cloud plans, Security contacts

### Step 9: Compute Module (`modules/compute/`)

- **Resources**: VMs (DC x2, Jumpbox, WAC, Syslog/NDM), NICs, Disks
- **Azure Verified Module**: `Azure/avm-res-compute-virtualmachine`
- **Note**: Provisions VM shells only — guest OS configuration handled by PowerShell/Ansible

### Step 10: Root Module (`environments/azure-local/`)

- **Orchestrates**: All modules in dependency order
- **Providers**: azurerm, azuread, random

---

## Phase 3: Ansible Playbooks — On-Prem & Guest Configuration

### Step 11: Ansible Project Structure

```
src/ansible/
├── ansible.cfg
├── inventory/
│   ├── hosts.yml.example
│   └── group_vars/all.yml
├── roles/
│   ├── ad-preparation/        # OU creation, security groups, DNS
│   ├── os-configuration/      # Hostname, NIC, NTP, domain join
│   ├── arc-registration/      # Azure Arc agent bootstrap
│   ├── monitoring-agents/     # AMA, HCI Insights
│   ├── domain-controller/     # AD DS promotion
│   ├── wac-server/            # Windows Admin Center
│   └── syslog-receiver/       # rsyslog + SNMP
├── playbooks/
│   ├── 01-ad-preparation.yml
│   ├── 02-os-configuration.yml
│   ├── 03-arc-registration.yml
│   ├── 04-monitoring-setup.yml
│   ├── 05-management-vms.yml
│   └── site.yml
├── collections/requirements.yml
└── README.md
```

**Validated Collections**: `azure.azcollection`, `microsoft.ad`, `ansible.windows`, `community.windows`

### Step 12: Role — AD Preparation

Mirrors Implementation Part 3, Phase 1: OU structure, 7 security groups, DNS A records, LCM service account

### Step 13: Role — OS Configuration

Mirrors Implementation Part 4, Phase 3: Hostname, NIC config, domain join, NTP, ICMP, disable unused adapters

### Step 14: Role — Arc Registration

Mirrors Implementation Part 4, Phase 4: Install Arc agent, register with Azure, validate connectivity

### Step 15: Role — Monitoring Agents

Mirrors Implementation Part 5, Phase 2: Azure Monitor Agent, HCI Insights

### Step 16: Roles — Management VM Configuration

- `domain-controller` — AD DS promotion
- `wac-server` — WAC install and configuration
- `syslog-receiver` — rsyslog + SNMP configuration

---

## Phase 4: PowerShell Orchestration (Path 1)

### Step 17: Master Orchestration Script

- **File**: `scripts/deploy/common/Invoke-PostTerraformConfiguration.ps1`
- **Purpose**: Runs all PowerShell steps in order after Terraform completes
- **Uses**: `DeploymentScaffold.psm1` framework, `Get-Config` for variable access

### Step 18: Resource Provider Registration

- **Existing**: `scripts/deploy/02-azure-foundation/phase-02-resource-providers/`
- **Verify**: Reads 12 providers from `variables.yml`, idempotent

---

## Phase 5: CI/CD Pipeline Samples

### Step 19-22: Pipeline Structure

```
pipelines/
├── gitlab/
│   ├── .gitlab-ci.yml
│   └── stages/ (validate, deploy-foundation, configure-onprem, deploy-cluster, configure-operations, validate-deployment)
├── github-actions/azure-local-deploy.yml
├── azure-devops/azure-local-deploy.yml
└── README.md
```

**Stages**: validate → plan → deploy-foundation → configure-onprem → deploy-cluster → configure-operations → validate-deployment

**Features**: Manual approval gates, Terraform state locking, artifact passing, environment-specific variables

---

## Phase 6: Documentation Updates

| Step | File | Changes |
|:----:|------|---------|
| 23 | `docs/automation/index.mdx` | Architecture diagram, decision matrix, status → Active |
| 24 | `docs/automation/terraform.mdx` | All modules documented, AVM references, IIC examples |
| 25 | `docs/automation/ansible.mdx` | All roles/playbooks, collections, usage examples |
| 26 | `docs/automation/gitlab-cicd.mdx` | Full pipeline architecture, stage breakdown |
| 27 | `docs/automation/github-actions.mdx` | Workflow documentation, secrets setup |
| 28 | `docs/automation/azure-devops-pipelines.mdx` | Pipeline documentation, service connections |

---

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| Terraform as primary IaC | User preference + multi-cloud portability |
| Azure Verified Modules (AVM) | Microsoft recommended patterns |
| Ansible validated collections | `azure.azcollection`, `microsoft.ad`, `ansible.windows` |
| Samples in `azurelocal-toolkit` | Not in documentation repo |
| ARM template for cluster deployment | Only supported programmatic method for Azure Local clusters |
| GitLab as primary CI/CD | Matches existing standards; GitHub Actions + Azure DevOps as alternatives |
| IIC naming throughout | Mandatory per standards |
| Secrets from Key Vault at runtime | Never stored in pipeline variables |

---

## Scope

### Included

- Terraform modules for Azure Foundation (Part 2)
- Ansible roles for On-Prem Readiness (Part 3), OS Configuration (Part 4, Phase 3), Arc Registration (Part 4, Phase 4), Operational Foundations (Part 5, Phases 2-3)
- CI/CD pipeline samples for GitLab, GitHub Actions, Azure DevOps
- Full documentation updates for all automation pages
- PowerShell orchestration script for Terraform + PS path

### Excluded

- Bicep templates (future addition)
- Network switch configuration automation (OEM-specific)
- BIOS/iDRAC remediation (covered by existing PS scripts)
- OS installation automation (hardware-specific)
- SDN deployment (environment-specific)
