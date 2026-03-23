---
title: SOFS & FSLogix on Azure Local
sidebar_position: 9
---

# Scale-Out File Server & FSLogix on Azure Local

Scale-Out File Server (SOFS) on Azure Local provides highly available SMB file shares for workloads that require shared storage — most notably FSLogix profile containers for Azure Virtual Desktop session hosts. SOFS is built on top of Storage Spaces Direct (S2D) and provides continuous availability with no single point of failure.

## Service Details

### What It Enables

SOFS on Azure Local delivers enterprise-grade SMB 3.x shared storage directly from the Azure Local cluster nodes. Combined with FSLogix, it provides persistent, roaming user profile containers that follow AVD users across session hosts.

### Key Use Cases

- **FSLogix profile containers** — Store VHD/VHDX profile containers on SOFS shares for AVD session hosts
- **High availability file shares** — Continuously available SMB shares for applications requiring shared access
- **Multi-session AVD** — Enable multiple session hosts to access the same user profile container simultaneously via FSLogix Cloud Cache or single-session models
- **Profile portability** — Users get consistent profiles and data regardless of which session host they connect to

### Architecture

- **Storage layer** — S2D volumes on Azure Local cluster nodes provide the underlying block storage
- **SOFS cluster role** — Windows Server Failover Clustering exposes S2D volumes as continuously available SMB shares
- **FSLogix agent** — Installed on each AVD session host; mounts the user's VHD/VHDX container at login
- **Profile container types** — Profile Container (full profile) and Office Container (M365 cache only)
- **Share topology** — Single share (small deployments) or multi-share (large scale, fault isolation)

## Supported Features

- FSLogix Profile Container and Office Container
- Single-share and multi-share topologies
- Cloud Cache for multi-region redundancy
- Entra Kerberos authentication (passwordless, no legacy AD required)
- SMB encryption and signing
- Azure Monitor integration for share health
- Automated cleanup policies via FSRM

## Deployment Notes

- Requires Azure Local cluster with S2D enabled
- SOFS role requires Windows Server Failover Clustering
- FSLogix agent is installed on each AVD session host
- Refer to the [azurelocal-sofs-fslogix](https://github.com/AzureLocal/azurelocal-sofs-fslogix) repo for IaC templates and automation

## Resources

- **Repository**: [azurelocal-sofs-fslogix](https://github.com/AzureLocal/azurelocal-sofs-fslogix)
- **Docs Site**: [azurelocal.github.io/azurelocal-sofs-fslogix](https://azurelocal.github.io/azurelocal-sofs-fslogix/)
- **Microsoft Docs**: [FSLogix profile containers on Azure Local](https://learn.microsoft.com/en-us/azure/virtual-desktop/fslogix-profile-container-configure-azure-files)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-sofs-fslogix](https://github.com/AzureLocal/azurelocal-sofs-fslogix).
:::
