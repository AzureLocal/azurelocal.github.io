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
- **Microsoft Docs**: [Monitor Azure Local with Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-local/manage/monitor-cluster)
- **Azure Monitor Agent**: [Overview](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/azure-monitor-agent-overview)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-monitoring](https://github.com/AzureLocal/azurelocal-monitoring).
:::
