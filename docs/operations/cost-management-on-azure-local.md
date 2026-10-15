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

## Azure Local billing basics

- Azure Local is billed through your Azure subscription at a flat rate per physical processor core. The number of virtual cores does not change the price, and other Azure services you use are billed as usual.
- Hyperconverged deployments without external storage use the L1 host service rate. Disaggregated deployments and hyperconverged deployments with external storage use the L2 rate.
- AKS enabled by Azure Arc on Azure Local is included with Azure Local release 2402 and later. Do not add separate Azure Arc-enabled server charges for the Azure Local machines.
- Azure Hybrid Benefit can waive the host service fee and the Windows Server subscription fee for eligible L1 deployments. See the [licensing task](../implementation/05-operational-foundations/phase-05-licensing-telemetry/task-01-enable-azure-hybrid-benefit.mdx).
- Disconnected operations is licensed per physical core on an annual term, including the cores that run the control plane.
- Budget for consumption-based services separately: Azure Monitor log ingestion and retention, Defender for Cloud plans, backup capacity, Key Vault operations, and data transfer.

## Deployment Notes

- Requires Arc enrollment of all resources to be tracked
- Cost data is available ~24 hours after resource deployment
- Refer to the [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost) repo for report templates and deployment scripts

## Resources

- **Repository**: [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost)
- **Microsoft Docs**: [Azure Cost Management overview](https://learn.microsoft.com/en-us/azure/cost-management-billing/cost-management-billing-overview)
- **Azure Local billing**: [Billing and payment](https://learn.microsoft.com/en-us/azure/azure-local/concepts/billing?view=azloc-2609)
- **Disconnected operations billing**: [Billing for disconnected operations](https://learn.microsoft.com/en-us/azure/azure-local/manage/disconnected-operations-billing?view=azloc-2609)
- **Pricing**: [Azure Local pricing](https://azure.microsoft.com/pricing/details/azure-local/)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost).
:::
