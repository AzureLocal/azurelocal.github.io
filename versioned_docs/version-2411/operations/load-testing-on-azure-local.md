---
title: Load Testing & Benchmarking on Azure Local
sidebar_position: 10
---

# Load Testing & Benchmarking on Azure Local

The Azure Local Load Testing Toolkit provides a multi-tool framework for benchmarking storage I/O, database throughput, network performance, and CPU/memory stress on Azure Local clusters. It integrates FIO, HammerDB, iPerf, stress-ng, and VMFleet into a unified configuration-driven framework with built-in monitoring and report generation.

## Service Details

### What It Enables

The toolkit gives Azure Local operators a repeatable, evidence-based methodology for validating cluster performance before production workload onboarding and after infrastructure changes. All tests are driven from a central config, with outputs captured for comparison and reporting.

### Key Use Cases

- **Pre-production validation** — Verify cluster storage and network performance meets workload SLAs before going live
- **Capacity planning** — Establish baseline metrics to model workload growth and resource headroom
- **Change validation** — Confirm performance characteristics after firmware updates, driver changes, or hardware additions
- **Regression testing** — Detect performance degradation between cluster states
- **Competitive benchmarking** — Compare configurations (all-flash vs hybrid, node counts, network topologies)

### Architecture

- **Core framework** — `src/core/` PowerShell modules for test orchestration, config loading, and output normalization
- **Infrastructure** — `src/infrastructure/` scripts for deploying test VMs on Azure Local
- **Tool integrations** — Per-tool wrappers: FIO (storage), HammerDB (SQL), iPerf (network), stress-ng (CPU/memory), VMFleet (fleet storage)
- **Config** — `config/profiles/` for test profiles, `config/clusters/` for cluster-specific parameters
- **Monitoring** — Prometheus/Grafana collectors and Azure Monitor dashboards
- **Reports** — Templated Markdown/HTML output from captured test results

## Supported Tools

| Tool | Purpose |
|------|---------|
| FIO | Storage I/O — IOPS, throughput, latency across random/sequential patterns |
| HammerDB | Database load — SQL Server and PostgreSQL transaction benchmarking |
| iPerf | Network — TCP/UDP throughput, latency, jitter between nodes |
| stress-ng | CPU & Memory — stress test compute resources under load |
| VMFleet | Storage Fleet — Microsoft's VM fleet storage benchmarking for S2D |

## Deployment Notes

- Tests run on Azure Local cluster nodes via deployed test VMs
- Config-driven: all parameters in `config/variables.yml`
- Requires PowerShell 7+ and appropriate tool binaries on test VMs
- Refer to the [azurelocal-loadtools](https://github.com/AzureLocal/azurelocal-loadtools) repo for full setup

## Resources

- **Repository**: [azurelocal-loadtools](https://github.com/AzureLocal/azurelocal-loadtools)
- **Docs Site**: [azurelocal.github.io/azurelocal-loadtools](https://azurelocal.github.io/azurelocal-loadtools/)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-loadtools](https://github.com/AzureLocal/azurelocal-loadtools).
:::
