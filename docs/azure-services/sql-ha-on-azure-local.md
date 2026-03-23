---
title: SQL Server High Availability on Azure Local
sidebar_position: 14
---

# SQL Server High Availability on Azure Local

The Azure Local SQL HA solution automates the deployment of SQL Server in a high-availability configuration on Azure Local clusters. It provisions Always On Availability Groups (AG) or Failover Cluster Instances (FCI) with witness-based quorum, enabling automatic failover for mission-critical SQL workloads running on-premises.

## Service Details

### What It Enables

SQL Server HA on Azure Local eliminates manual failover procedures and reduces RTO for on-premises SQL workloads. The solution handles the full configuration lifecycle — from Windows Server Failover Cluster (WSFC) provisioning to AG creation, listener setup, and monitoring integration.

### Key Use Cases

- **Always On Availability Groups** — Synchronous replication across Azure Local cluster nodes with automatic failover
- **Failover Cluster Instances** — Shared-nothing FCI using Cluster Shared Volumes (CSV) for legacy SQL deployments
- **Witness configuration** — Cloud witness using Azure Blob Storage for quorum without requiring a third node
- **AG listener** — DNS/IP listener for transparent connection failover in application connection strings
- **Monitoring integration** — SQL health alerts and AG sync state monitoring via Azure Monitor

### Architecture

```
Azure Local Cluster
├── Node 1 (Primary)
│   └── SQL Server Instance
│       └── AG Primary Replica
│
├── Node 2 (Secondary)
│   └── SQL Server Instance
│       └── AG Secondary Replica (Synchronous)
│
└── Cloud Witness (Azure Blob Storage)

AG Listener ──▶ Application Connection String
```

## Supported Features

- Windows Server Failover Cluster (WSFC) provisioning
- Always On Availability Group creation and configuration
- Automatic failover with configurable health thresholds
- Cloud Witness using Azure Blob Storage
- AG listener with static IP configuration
- SQL Agent job monitoring and alerting
- Azure Monitor integration for SQL health metrics
- Backup to Azure Blob Storage (Azure Backup integration)

## Deployment Notes

- Requires Windows Server 2019/2022 VMs on Azure Local
- SQL Server Enterprise or Developer edition required for AG features
- Cloud witness requires outbound internet access to Azure Storage
- Refer to the [azurelocal-sql-ha](https://github.com/AzureLocal/azurelocal-sql-ha) repo for deployment runbooks

## Resources

- **Repository**: [azurelocal-sql-ha](https://github.com/AzureLocal/azurelocal-sql-ha)
- **Microsoft Docs**: [SQL Server on Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/deploy/sql-on-azure-local)
- **Always On AG**: [Overview](https://learn.microsoft.com/en-us/sql/database-engine/availability-groups/windows/overview-of-always-on-availability-groups-sql-server)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-sql-ha](https://github.com/AzureLocal/azurelocal-sql-ha).
:::
