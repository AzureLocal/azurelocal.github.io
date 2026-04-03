---
title: Business Continuity and Disaster Recovery on Azure Local
sidebar_position: 15
---

# Business Continuity and Disaster Recovery on Azure Local

The Azure Local BCDR solution provides automated backup and disaster recovery configuration for workloads running on Azure Local clusters. It integrates Azure Site Recovery (ASR), Azure Backup, and stretch cluster capabilities to meet RPO/RTO requirements for mission-critical on-premises workloads.

## Service Details

### What It Enables

Azure Local clusters run business-critical workloads that require protection against both node-level failures (covered by clustering) and site-level disasters (covered by BCDR). This solution automates the replication configuration, failover runbooks, and backup schedules needed to meet enterprise recovery objectives.

### Key Use Cases

- **VM replication with ASR** — Replicate Azure Arc VMs to Azure for site-level disaster recovery
- **Azure Backup integration** — Backup VMs, SQL databases, and file shares to Azure Backup vault
- **Stretch cluster** — Active-active or active-passive Azure Local stretch clusters across two sites
- **Failover runbooks** — Automated ASR recovery plans for ordered workload failover
- **BCDR testing** — Non-disruptive failover tests with automated validation

### Architecture

```
Primary Site (Azure Local Cluster)
     │
     ├──▶ Azure Site Recovery Agent ──▶ Azure (Replication Target)
     │                                      │
     │                                      └──▶ Recovery Services Vault
     │                                               │
     ├──▶ Azure Backup Agent ──────────────▶ Backup Vault (same or different region)
     │
     └──▶ Stretch Cluster (optional)
              │
              └──▶ Secondary Site (Azure Local Cluster 2)
```

## Supported Features

- Azure Site Recovery for VM replication to Azure
- Azure Backup for VM, SQL, and file share protection
- Recovery Services Vault management and policy configuration
- ASR recovery plans with ordered failover sequencing
- Stretch cluster configuration (Active-Active / Active-Passive)
- Automated BCDR drill scheduling and reporting
- RPO/RTO dashboard and health alerting

## Deployment Notes

- ASR requires connectivity from Azure Local nodes to Azure
- Backup vault and recovery vault can be co-located or in separate regions for geo-redundancy
- Refer to the [azurelocal-bcdr](https://github.com/AzureLocal/azurelocal-bcdr) repo for deployment scripts and runbooks

## Resources

- **Repository**: [azurelocal-bcdr](https://github.com/AzureLocal/azurelocal-bcdr)
- **Microsoft Docs**: [BCDR for Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/manage/azure-site-recovery)
- **Azure Site Recovery**: [Overview](https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview)
- **Azure Backup**: [Overview](https://learn.microsoft.com/en-us/azure/backup/backup-overview)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-bcdr](https://github.com/AzureLocal/azurelocal-bcdr).
:::
