---
title: Cost Management and Chargeback on Azure Local
sidebar_position: 16
---

# Cost Management and Chargeback on Azure Local

The Azure Local Cost Management solution provides showback and chargeback reporting for workloads running on Azure Local clusters. It integrates Azure Cost Management, Arc-enabled billing telemetry, and custom reporting to give organizations visibility into per-workload, per-team, and per-project infrastructure costs.

## Service Details

### What It Enables

Azure Local clusters consume infrastructure resources that need to be tracked and allocated back to the teams or projects using them. This solution automates cost data collection, enriches it with resource tagging, and produces chargeback reports consumable by finance and FinOps teams.

### Key Use Cases

- **Showback reporting** — Visibility into resource consumption per team, project, or business unit without billing
- **Chargeback** — Formal cost allocation back to cost centers based on actual resource usage
- **Tag governance** — Enforce consistent resource tagging across all Azure Local workloads for accurate cost attribution
- **Budget alerting** — Notify teams when projected costs approach defined budgets
- **Arc billing integration** — Leverage Azure Arc-enabled resource billing for unified cost view across cloud and on-premises

### Architecture

```
Azure Local Cluster
     │
     ├──▶ Azure Arc (resource enrollment)
     │         │
     │         └──▶ Azure Cost Management ──▶ Cost Analysis + Budgets
     │
     ├──▶ Resource Tags (workload/team/project)
     │
     └──▶ Custom Cost Reports ──▶ Power BI / CSV Export ──▶ Finance Teams
```

## Supported Features

- Arc-enabled resource cost visibility in Azure Cost Management
- Resource tagging policy enforcement for cost attribution
- Budget creation and alert configuration per team/project
- Automated showback report generation (daily/weekly/monthly)
- Power BI dashboard templates for cost visualization
- Chargeback export to CSV/Excel for finance integration
- Multi-tenant cost view across multiple Azure Local clusters

## Deployment Notes

- Requires Arc enrollment of all resources to be tracked
- Cost data is available ~24 hours after resource deployment
- Refer to the [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost) repo for report templates and deployment scripts

## Resources

- **Repository**: [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost)
- **Microsoft Docs**: [Azure Cost Management overview](https://learn.microsoft.com/en-us/azure/cost-management-billing/cost-management-billing-overview)
- **Azure Arc billing**: [Arc-enabled billing](https://learn.microsoft.com/en-us/azure/azure-local/conceptual-billing)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost).
:::
