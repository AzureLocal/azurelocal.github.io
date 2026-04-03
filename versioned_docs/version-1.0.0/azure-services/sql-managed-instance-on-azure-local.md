---
title: Azure SQL Managed Instance on Azure Local
sidebar_position: 5
---

# Azure SQL Managed Instance on Azure Local

Azure SQL Managed Instance on Azure Local delivers a managed relational database service that runs on-premises with near-full SQL Server compatibility. Deployed through Azure Arc data services, it provides automated patching, backup, high availability, and monitoring while keeping data within the local infrastructure boundary.

## Service Details

### What It Enables

SQL Managed Instance on Azure Local provides a cloud-managed database engine on-premises. Arc-enabled data services deploy and manage the instance on a Kubernetes cluster (AKS on Azure Local), giving DBAs and developers the SQL Managed Instance experience without migrating data to the cloud.

### Key Use Cases

- **Data residency and compliance** — Run managed SQL databases on-premises where regulations prohibit cloud data storage (financial services, healthcare, government)
- **Low-latency database access** — Keep the database tier close to application servers running on the same Azure Local infrastructure, eliminating network hops to cloud regions
- **Hybrid data estate** — Manage on-premises and cloud SQL instances from a single Azure portal with consistent monitoring and policy
- **Modernize without migrate** — Move from self-managed SQL Server to a managed instance model while keeping data on-premises

### Architecture

- **Azure Arc data services** — The data controller runs on AKS on Azure Local and manages the lifecycle of SQL Managed Instance pods
- **Kubernetes** — SQL MI runs as containers orchestrated by AKS, with persistent volumes backed by S2D storage
- **High availability** — Built-in Always On availability groups for automatic failover within the cluster
- **Monitoring** — Metrics and logs exported to Azure Monitor and Log Analytics via the Arc data controller
- **Connectivity modes** — Supports both direct (always-connected) and indirect (periodically-connected) modes for Arc registration

## Supported Features

- Near-100% SQL Server surface area compatibility
- Automated backups with point-in-time restore
- Automated patching and version upgrades
- Built-in high availability (Always On)
- Azure Monitor and Grafana dashboards integration
- Azure RBAC for instance management
- Elastic pools for multi-database resource sharing
- Direct and indirect connectivity modes

## Deployment Notes

- Requires AKS on Azure Local with the Azure Arc data services extension
- Azure subscription required for Arc data services control plane
- Minimum 16 GB RAM and 4 vCPUs recommended per SQL MI instance
- Persistent storage volumes required for data, logs, and backups

## Limitations

- Some SQL Managed Instance cloud features (e.g., link to Azure SQL) may have reduced functionality in indirect connectivity mode
- Cross-instance distributed transactions require manual configuration
- Performance governed by local hardware resources; no elastic scale-out to cloud
- Licensing: SQL Server license required (pay-as-you-go through Arc or bring-your-own)

## External References

- [Azure SQL Managed Instance enabled by Azure Arc — Microsoft Learn](https://learn.microsoft.com/azure/azure-arc/data/managed-instance-overview)
- [Deploy Azure Arc data services — Microsoft Learn](https://learn.microsoft.com/azure/azure-arc/data/plan-azure-arc-data-services)
- [SQL Managed Instance connectivity modes — Microsoft Learn](https://learn.microsoft.com/azure/azure-arc/data/connectivity)

> Data verified with Microsoft Azure Local documentation, March 2026.
