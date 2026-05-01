---
title: Governance and Compliance on Azure Local
sidebar_position: 17
---

# Governance and Compliance on Azure Local

The Azure Local Governance solution automates policy enforcement, security baseline application, and compliance reporting for Azure Local clusters and Arc-enrolled workloads. It leverages Azure Policy, Microsoft Defender for Cloud, and Azure Security Benchmark to ensure consistent governance across on-premises and hybrid environments.

## Service Details

### What It Enables

Enterprises running Azure Local need the same governance controls they apply in Azure — resource locking, policy assignments, RBAC boundaries, and compliance dashboards — extended to on-premises clusters. This solution automates governance at the cluster, host, and VM level through Arc.

### Key Use Cases

- **Azure Policy** — Assign and audit policies across all Arc-enrolled Azure Local resources
- **Security baselines** — Apply Azure Security Benchmark and CIS hardening to cluster nodes and VMs
- **RBAC governance** — Enforce role-based access control boundaries for cluster administration and workload management
- **Compliance reporting** — Automated compliance status reports against industry frameworks (CIS, NIST, ISO 27001)
- **Resource locks** — Prevent accidental deletion of critical cluster components
- **Defender for Cloud** — Enable security posture management and threat detection for Arc-enrolled VMs

### Architecture

```
Azure Arc
     │
     ├──▶ Azure Policy (assignments → audit/enforce)
     │         │
     │         ├──▶ Cluster Nodes (OS configuration, update compliance)
     │         └──▶ Arc VMs (security baseline, network policies)
     │
     ├──▶ Microsoft Defender for Cloud
     │         │
     │         └──▶ Secure Score + Recommendations
     │
     └──▶ RBAC / Entra ID ──▶ Subscription / Resource Group scopes
```

## Supported Features

- Azure Policy initiatives for Azure Local (custom + built-in)
- Security baseline deployment via Azure Policy Guest Configuration
- Microsoft Defender for Cloud integration (Arc-enabled servers)
- Azure Security Benchmark compliance mapping
- RBAC role assignments automation (custom roles for cluster operators)
- Resource lock deployment for critical components
- Compliance report export (PDF/CSV) for audit teams
- Microsoft Sentinel integration for SIEM log forwarding

## Deployment Notes

- Requires Arc enrollment of all cluster nodes and managed VMs
- Azure Policy assignment may have up to 30-minute enforcement delay
- Refer to the [azurelocal-governance](https://github.com/AzureLocal/azurelocal-governance) repo for policy definitions and deployment scripts

## Resources

- **Repository**: [azurelocal-governance](https://github.com/AzureLocal/azurelocal-governance)
- **Microsoft Docs**: [Governance overview for Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/manage/manage-arc-virtual-machines)
- **Azure Policy**: [Overview](https://learn.microsoft.com/en-us/azure/governance/policy/overview)
- **Defender for Cloud**: [Arc support](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-governance](https://github.com/AzureLocal/azurelocal-governance).
:::
