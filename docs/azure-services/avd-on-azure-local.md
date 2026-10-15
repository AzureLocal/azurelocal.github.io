---
title: Azure Virtual Desktop (AVD) on Azure Local
sidebar_position: 2
---

# Azure Virtual Desktop (AVD) on Azure Local

Azure Virtual Desktop (AVD) on Azure Local enables organizations to deliver full Windows desktops and RemoteApp sessions from their own datacenter, edge, or sovereign locations — without routing user traffic through the public cloud. Session hosts run as VMs on Azure Local clusters, while the AVD control plane in Azure handles brokering, diagnostics, and gateway services.

## Service Details

### What It Enables

AVD on Azure Local brings cloud-managed virtual desktops to on-premises infrastructure. User sessions run locally on Azure Local cluster nodes, keeping desktop compute and data within the physical boundary of the organization while still leveraging Azure for identity, management, and monitoring.

### Key Use Cases

- **Data sovereignty and compliance** — Keep user sessions and profile data on-premises to satisfy regulatory requirements (healthcare, government, finance)
- **Low-latency desktops** — Deliver responsive desktop experiences for users co-located with the infrastructure, eliminating round-trip latency to cloud regions
- **Branch office and edge** — Provide managed desktops at remote sites without dedicated VDI infrastructure at each location
- **Hybrid workforce** — Combine cloud-hosted and on-premises session hosts in a single AVD host pool for flexible capacity

### Architecture

AVD on Azure Local uses a hybrid architecture:

- **Control plane** — Hosted in Azure; handles connection brokering, gateway, diagnostics, and web client access
- **Session hosts** — Windows VMs running on Azure Local cluster nodes, registered to AVD host pools via Azure Arc
- **User profiles** — Stored on local SMB shares (typically a Scale-Out File Server with FSLogix profile containers)
- **Identity** — Microsoft Entra ID (Azure AD) with optional hybrid join for on-premises Active Directory integration
- **Networking** — User traffic flows directly to session hosts on the local network; only control-plane signaling traverses the internet

## Supported Features

- Multi-session Windows 10/11 Enterprise
- Single-session personal desktops
- RemoteApp streaming
- FSLogix profile containers on local storage
- Microsoft Entra ID and hybrid AD join
- Azure Monitor and Log Analytics integration
- Conditional Access and MFA
- Multimedia redirection and Teams optimization

## Repository: azurelocal-avd

The [`AzureLocal/azurelocal-avd`](https://github.com/AzureLocal/azurelocal-avd) repository provides infrastructure-as-code templates and automation for deploying AVD session hosts on Azure Local.

**What's in the repo:**

- **Bicep, ARM, Terraform, PowerShell, and Ansible** templates for deploying AVD infrastructure
- Centralized variable configuration (`config/variables.yml`)
- Pipeline examples for GitHub Actions and Azure DevOps
- Validation and test scripts

**Getting started:** Clone the repo, copy `config/variables.example.yml` to `config/variables.yml`, configure your environment values, and deploy with your preferred tooling. See the repo [README](https://github.com/AzureLocal/azurelocal-avd#readme) for full instructions.

### Documentation Site

Full deployment documentation, architecture guides, and scenario walkthroughs are published at:
**[azurelocal.cloud/azurelocal-avd](https://azurelocal.cloud/azurelocal-avd/)**

### Companion: SOFS for FSLogix

AVD session hosts need a performant storage layer for user profiles. The companion repository [`AzureLocal/azurelocal-sofs-fslogix`](https://github.com/AzureLocal/azurelocal-sofs-fslogix) automates deployment of a three-node Scale-Out File Server cluster on Azure Local to host FSLogix profile containers.

- Docs site: [azurelocal.cloud/azurelocal-sofs-fslogix](https://azurelocal.cloud/azurelocal-sofs-fslogix/)

## Deployment Notes

- Requires Azure Local registered with Azure and running 23H2 or later. 23H2 (OS 25398) reached end of support in April 2026, so target the current 12.x release (12.2609)
- Supported session host images: Windows 11 and Windows 10 Enterprise (single and multi-session), and Windows Server 2025, 2022, and 2019. Check the AVD prerequisites for the licensing method per OS
- Activate Windows 10 and 11 Enterprise multi-session and Windows Server 2022 Datacenter: Azure Edition with Azure verification for VMs. Use existing activation methods for other images
- A host pool contains session hosts on Azure or on Azure Local, never both
- To add session hosts from the Azure portal you need an Azure Local logical network (DHCP or static with automatic IP allocation) and at least one Windows image on the instance
- Session hosts must be Arc-enabled and registered to an AVD host pool
- FSLogix profile storage should be provisioned on local SMB shares (see SOFS companion above)
- Azure subscription required for the AVD control plane

## Limitations

- Cloud-only features such as Azure Files–backed profiles require connectivity to Azure storage
- Start VM on Connect requires persistent Azure connectivity for the control plane
- GPU-accelerated sessions depend on physical GPU passthrough or DDA support on cluster nodes
- Licensing: Windows Enterprise multi-session requires Microsoft 365 or per-user AVD access rights

## External References

- [Azure Virtual Desktop on Azure Local — Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-desktop/azure-local-overview)
- [Prerequisites for Azure Virtual Desktop — Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-desktop/prerequisites)
- [Add session hosts to a host pool — Microsoft Learn](https://learn.microsoft.com/en-us/azure/virtual-desktop/add-session-hosts-host-pool)
- [Azure Virtual Desktop for Azure Local architecture — Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/hybrid/azure-local-workload-virtual-desktop)
- [Deploy AVD session hosts on Azure Local — Microsoft Learn](https://learn.microsoft.com/azure/virtual-desktop/deploy-azure-virtual-desktop)
- [FSLogix profile containers — Microsoft Learn](https://learn.microsoft.com/fslogix/overview-what-is-fslogix)

> Data verified with Microsoft Azure Local documentation, October 2026.
