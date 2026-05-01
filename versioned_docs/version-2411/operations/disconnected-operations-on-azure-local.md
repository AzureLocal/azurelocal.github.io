---
title: Disconnected Operations on Azure Local
sidebar_position: 9
---

# Disconnected Operations on Azure Local

Azure Local supports fully disconnected and intermittently connected operations, enabling organizations to run Azure-managed infrastructure in environments where persistent cloud connectivity is not available, not permitted, or unreliable. Workloads continue to run locally with full functionality while the cluster operates independently of Azure.

## Service Details

### What It Enables

Disconnected operations mode allows Azure Local clusters to function without a persistent connection to Azure. The local control plane manages VMs, containers, storage, and networking independently. When connectivity is restored (or during scheduled sync windows), telemetry, billing, and management data synchronize with Azure.

### Key Use Cases

- **Classified and sovereign environments** — Run Azure-managed infrastructure in air-gapped networks where no internet connectivity is permitted (defense, intelligence, critical government systems)
- **Remote and austere locations** — Operate clusters at sites with unreliable or no network connectivity (mining, maritime, oil rigs, field hospitals)
- **Regulatory compliance** — Meet data residency requirements that mandate all compute, storage, and management remain within a physical boundary
- **Disaster resilience** — Ensure workloads continue operating during extended network outages without degradation
- **Edge retail and manufacturing** — Run store or factory clusters that must operate independently when WAN links are unavailable

### Architecture

- **Local control plane** — Azure Local retains a fully functional local management stack; Hyper-V, S2D, failover clustering, and SDN operate independently of Azure
- **Azure Arc (when connected)** — Arc agents report health, sync policy, and upload telemetry during connectivity windows
- **Identity** — Local Active Directory provides authentication when Entra ID is unreachable; hybrid join resumes when connectivity is restored
- **Updates** — Managed locally via WSUS or SCCM; Azure Update Management synchronizes when connected
- **Billing** — Usage data is cached locally and reported to Azure during the next sync window

## Supported Features

- Full VM and container workload execution without cloud connectivity
- Local failover clustering and high availability
- Storage Spaces Direct with local resilience (mirror, parity)
- SDN-based networking and micro-segmentation
- Local monitoring and alerting (Windows Admin Center, SCOM)
- Periodic Azure Arc synchronization when connectivity is available
- Cached billing and compliance reporting
- Support for intermittently connected and fully air-gapped deployment models

## Deployment Notes

- Initial cluster deployment and Arc registration require temporary connectivity to Azure
- Plan for local identity infrastructure (Active Directory domain controllers on-site)
- Configure local update infrastructure (WSUS/SCCM) for patching in disconnected mode
- Define sync windows and procedures for periodic Azure connectivity (unless fully air-gapped)
- Consider Windows Admin Center for local cluster management when Azure portal is unreachable

## Limitations

- Azure portal management is unavailable when disconnected; local tools (Windows Admin Center, PowerShell) must be used
- Azure Arc policy enforcement and compliance reporting pause until connectivity is restored
- Some Azure services that require constant cloud connectivity (e.g., Azure Monitor real-time streaming) are unavailable while disconnected
- Extended disconnection periods may affect license validation and Azure subscription status
- Hardware and licensing requirements apply

## External References

- [Azure Local overview — Microsoft Learn](https://learn.microsoft.com/azure-stack/hci/overview)
- [Azure Arc connectivity modes — Microsoft Learn](https://learn.microsoft.com/azure/azure-arc/servers/network-requirements)
- [Azure Local overview — Microsoft Learn](https://learn.microsoft.com/azure-stack/hci/overview)

> Data verified with Microsoft Azure Local documentation, March 2026.
