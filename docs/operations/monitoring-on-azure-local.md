---
title: Monitoring and Observability on Azure Local
sidebar_position: 13
---

# Monitoring and Observability on Azure Local

The Azure Local Monitoring solution delivers a comprehensive observability stack for Azure Local clusters and workloads. It integrates Azure Monitor, Prometheus, Grafana, and Log Analytics to provide real-time dashboards, alerting, and historical trend analysis across compute, storage, and network layers.

## Service Details

### What It Enables

Out-of-the-box Azure Local monitoring covers basic cluster health, but production environments need workload-aware dashboards, alert rules calibrated to SLO thresholds, and centralized log collection across all nodes and VMs. This solution provides templated monitoring deployments that are repeatable, auditable, and integrated with Azure Monitor.

### Key Use Cases

- **Cluster health dashboards** — Visualize CPU, memory, storage I/O, and network across all cluster nodes
- **Workload monitoring** — Per-VM and per-application metrics for AVD sessions, SQL workloads, and custom VMs
- **Alert management** — Pre-built alert rules for critical thresholds (disk saturation, node failure, high latency)
- **Log aggregation** — Centralized Log Analytics workspace with structured query support
- **Capacity planning** — Historical trend data for right-sizing and capacity forecasting

### Architecture

```
Cluster Nodes
     │
     ├──▶ Azure Monitor Agent (AMA)
     │         │
     │         ├──▶ Log Analytics Workspace (centralized)
     │         └──▶ Metrics (Azure Monitor Metrics)
     │
     ├──▶ Prometheus (workload metrics)
     │         │
     │         └──▶ Grafana (dashboards)
     │
     └──▶ Azure Monitor Alerts ──▶ Action Groups (email/webhook)
```

## Built-in Azure Local monitoring

Use the platform capabilities first and add the solution below on top of them. Microsoft documents four alert types for Azure Local:

| Alert type | What it gives you | Cost and setup |
|------------|-------------------|----------------|
| **Health alerts** | The OS health service watches for more than 80 health issues (storage capacity, disks, network adapters, CPU and memory, cluster configuration). They are forwarded to Azure Monitor alerts in near real time. | No extra cost. No Log Analytics workspace or alert rules to author. Configure alert processing rules and action groups to route them. |
| **Recommended alerts** | Predefined metric alerts: percentage CPU (greater than 80), available memory (less than 1 GB), volume read and write latency (greater than 500 ms), and network in and out per second. | Enable from **Monitoring** > **Alerts** > **View + set up** on the Azure Local resource. Thresholds and severity can be changed. |
| **Metric alerts** | Customer-defined alerts on Azure Local system metrics. | Set up in Azure Monitor. |
| **Log alerts** | Customer-defined Log Analytics queries with predefined templates. | Needs a Log Analytics workspace. |

Prerequisites: a registered system with the `AzureEdgeTelemetryAndDiagnostics` extension installed. Since release 2605 you can also monitor GPU metrics for GPUs configured with GPU partitioning. For disconnected operations, see [Disconnected operations](./disconnected-operations-on-azure-local.md).

## Supported Features

- Azure Monitor Agent deployment across all cluster nodes
- Pre-built Grafana dashboards for Azure Local cluster health
- Prometheus scrape configuration for Kubernetes and VM workloads
- Log Analytics workspace with custom KQL query library
- Alert rules for critical infrastructure thresholds
- Integration with Azure Monitor Workbooks
- Cost-optimized log retention policies

## Deployment Notes

- Requires Log Analytics Workspace in target Azure subscription
- Azure Monitor Agent replaces the legacy MMA/OMS agents
- Grafana can be deployed as Azure-managed Grafana or self-hosted on the cluster
- Refer to the [azurelocal-monitoring](https://github.com/AzureLocal/azurelocal-monitoring) repo for deployment scripts and dashboards

## Resources

- **Repository**: [azurelocal-monitoring](https://github.com/AzureLocal/azurelocal-monitoring)
- **Microsoft Docs**: [What is Azure Local monitoring?](https://learn.microsoft.com/en-us/azure/azure-local/concepts/monitoring-overview?view=azloc-2609)
- **Health alerts**: [Respond to Azure Local health alerts](https://learn.microsoft.com/en-us/azure/azure-local/manage/health-alerts-via-azure-monitor-alerts?view=azloc-2609)
- **Recommended alerts**: [Enable recommended alert rules](https://learn.microsoft.com/en-us/azure/azure-local/manage/set-up-recommended-alert-rules?view=azloc-2609)
- **Metrics**: [Monitor with metrics](https://learn.microsoft.com/en-us/azure/azure-local/manage/monitor-cluster-with-metrics?view=azloc-2609)
- **Azure Monitor Agent**: [Overview](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview)

> Data verified with Microsoft Azure Local documentation, October 2026.

:::note Work in Progress
Full dashboards and deployment scripts are tracked in [azurelocal-monitoring](https://azurelocal.cloud/azurelocal-monitoring/).
:::
