---
title: Business Continuity and Disaster Recovery on Azure Local
sidebar_position: 15
---

# Business Continuity and Disaster Recovery on Azure Local

The Azure Local BCDR solution provides automated backup and disaster recovery configuration for workloads running on Azure Local clusters. It combines the Microsoft-supported recovery options for Azure Local (Azure Site Recovery, Hyper-V Replica, rack aware clustering, and backup products) so you can meet RPO and RTO targets for mission-critical on-premises workloads.

## Service Details

### What It Enables

Azure Local clusters run business-critical workloads that need protection against node-level failures (covered by failover clustering), rack-level failures (covered by rack aware clustering), and site-level disasters (covered by replication and backup). This solution automates the replication configuration, failover runbooks, and backup schedules needed to meet your recovery objectives.

### Choose a recovery option

| Need | Option | Notes |
|------|--------|-------|
| Survive loss of a node | Failover clustering with Storage Spaces Direct | Built in. |
| Survive loss of a rack or room | [Rack aware cluster](../planning/09-rack-aware-clustering.mdx) | GA since 2601. Two zones, 1 ms or less between racks, new deployments only. |
| Recover VMs in Azure after a site loss | Azure Site Recovery | The Azure Local extension is in **preview** and Microsoft limits it to test environments. For production, configure Site Recovery manually with the Hyper-V to Azure option. RPO can be as low as 30 seconds. Failed-over VMs run as Azure VMs. Incurs Azure usage cost. |
| Recover VMs on a second Azure Local cluster | Hyper-V Replica | Configured with PowerShell or Failover Cluster Manager, not the Azure portal. Replication every 30 seconds, 5 minutes, or 15 minutes. No Azure control plane needed. |
| Restore files, VMs, or applications from a point in time | Backup | Azure Backup, Veeam, Commvault, Cohesity, Rubrik, and other products that support Azure Local. |

Azure Site Recovery and Hyper-V Replica can be used together, for example Site Recovery for remote single-cluster sites and Hyper-V Replica for larger hub locations.

:::warning Trusted launch VMs
Azure Site Recovery replication is not supported for Trusted launch VMs on Azure Local. From release 2609 you can also point the instance at a backup key vault (preview) so system-level secrets such as Trusted launch VM keys and BitLocker recovery keys are backed up automatically.
:::

### Key Use Cases

- **VM replication** — Replicate Azure Local VMs to Azure with Azure Site Recovery, or to a second cluster with Hyper-V Replica
- **Backup integration** — Back up VMs, SQL databases, and file shares with the backup product of your choice (Azure Backup, Veeam, Commvault, Cohesity, Rubrik)
- **Rack-level resilience** — Rack aware clusters across two rooms
- **Failover runbooks** — Recovery plans for ordered workload failover (Azure Site Recovery recovery plans)
- **BCDR testing** — Non-disruptive test failovers with automated validation

### Backup approaches

| Approach | Agent location | Restore | Application aware |
|----------|----------------|---------|-------------------|
| Host-level VM backup | Every cluster node | Whole VM, to the same or another cluster | No (VSS consistency only) |
| Guest-level backup | Inside each VM | Application data and individual files | Yes |

Many organizations use both: guest-level backup for critical applications and host-level backup for fast whole-VM recovery. A VM restored to a different Azure Local cluster comes back as an unmanaged VM until you register it and reconnect it to its Azure resource. A VM restored in place on the same cluster stays managed as long as it is within the Azure Arc 45-day reconnection window.

### Architecture

```
Primary Site (Azure Local Cluster)
     │
     ├──▶ Azure Site Recovery (Hyper-V to Azure) ──▶ Recovery Services Vault ──▶ Azure
     │
     ├──▶ Hyper-V Replica ──▶ Secondary Azure Local Cluster
     │
     ├──▶ Backup product (host or guest level) ──▶ Backup target (vault or repository)
     │
     └──▶ Rack aware cluster (optional): Zone 1 and Zone 2 in two rooms
```

## Supported Features

- Azure Site Recovery replication, test failover, failover, re-protect, and failback
- Hyper-V Replica between Azure Local clusters
- Backup of VMs, SQL databases, and file shares with partner or Azure backup products
- Recovery plans with ordered failover sequencing
- Rack aware cluster planning and VM placement (strict and non-strict)
- BCDR drill scheduling and reporting
- RPO and RTO dashboard and health alerting

## Deployment Notes

- Azure Site Recovery requires connectivity from Azure Local nodes to Azure.
- Backup vault and recovery vault can be co-located or in separate regions for geo-redundancy.
- Test failovers and failbacks regularly. Planned failovers shut the VM down gracefully so no data is lost. Unplanned failovers start from the last replicated state and lose in-memory state.
- Refer to the [azurelocal-bcdr](https://azurelocal.cloud/azurelocal-bcdr/) site for deployment scripts and runbooks.

## Resources

- **Repository**: [azurelocal-bcdr](https://github.com/AzureLocal/azurelocal-bcdr)
- **Docs site**: [azurelocal-bcdr](https://azurelocal.cloud/azurelocal-bcdr/)
- **Microsoft Docs**: [Disaster recovery for Azure Local VMs](https://learn.microsoft.com/en-us/azure/azure-local/manage/disaster-recovery-overview?view=azloc-2609)
- **VM resiliency**: [Virtual machine resiliency for Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/manage/disaster-recovery-vm-resiliency?view=azloc-2609)
- **Azure Site Recovery**: [Protect VM workloads with Azure Site Recovery on Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/manage/azure-site-recovery?view=azloc-2609)
- **Azure Backup**: [Overview](https://learn.microsoft.com/en-us/azure/backup/backup-overview)

> Data verified with Microsoft Azure Local documentation, October 2026.

:::note Work in Progress
Full runbooks are tracked in [azurelocal-bcdr](https://azurelocal.cloud/azurelocal-bcdr/).
:::
