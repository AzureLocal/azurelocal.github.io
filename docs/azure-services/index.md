---
title: Azure Services on Azure Local
sidebar_position: 6
---

# Azure Services on Azure Local

This section covers Azure services that run natively on Azure Local infrastructure (Azure Stack HCI, Hub, Edge, and related platforms). Only services that execute workloads locally are included — cloud-only services managed through the Azure portal are not covered here.

## Service Overview

| Service | Description | AzureLocal Repo | Docs Site |
|---------|-------------|-----------------|-----------|
| [Azure Virtual Desktop (AVD)](./avd-on-azure-local.md) | Cloud-managed virtual desktops and RemoteApp on-premises | [azurelocal-avd](https://github.com/AzureLocal/azurelocal-avd) | [Docs](https://azurelocal.github.io/azurelocal-avd/) |
| [SOFS / FSLogix Profile Containers](./sofs-fslogix-on-azure-local.md) | Scale-Out File Server for FSLogix profile containers (AVD companion) | [azurelocal-sofs-fslogix](https://github.com/AzureLocal/azurelocal-sofs-fslogix) | [Docs](https://azurelocal.github.io/azurelocal-sofs-fslogix/) |
| [Azure Kubernetes Service (AKS)](./aks-on-azure-local.md) | Managed Kubernetes on-premises via Azure Arc | — | — |
| [Azure App Services](./app-services-on-azure-local.md) | PaaS web app and API hosting on AKS via Arc | — | — |
| [Azure SQL Managed Instance](./sql-managed-instance-on-azure-local.md) | Managed SQL databases on-premises via Arc data services | — | — |
| [SQL Server High Availability](./sql-ha-on-azure-local.md) | Always On Availability Groups and FCI for SQL Server on Azure Local | [azurelocal-sql-ha](https://github.com/AzureLocal/azurelocal-sql-ha) | — |
| [Machine Learning / AI](./ml-ai-on-azure-local.md) | ML inference and AI workloads at the edge | — | — |
| [IoT Operations](./iot-operations-on-azure-local.md) | Edge IoT data processing, MQTT broker, and device management | — | — |
| [VMs and Containers](./vms-and-containers-on-azure-local.md) | Arc-managed VMs and AKS containers side-by-side | — | — |
| [VM Gen1 to Gen2 Conversion](./vm-conversion-on-azure-local.md) | Convert Hyper-V Gen1 VMs to Gen2 with Arc enrollment preserved | [azurelocal-vm-conversion-toolkit](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit) | [Docs](https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/) |
| [VMware to Azure Local Migration](./vmware-migration-on-azure-local.md) | Migrate VMware vSphere VMs to Azure Local (VMDK → VHDX) | [azurelocal-vmware-migration](https://github.com/AzureLocal/azurelocal-vmware-migration) | — |
| [Load Testing and Benchmarking](./load-testing-on-azure-local.md) | FIO, HammerDB, iPerf, stress-ng, and VMFleet benchmarking framework | [azurelocal-loadtools](https://github.com/AzureLocal/azurelocal-loadtools) | [Docs](https://azurelocal.github.io/azurelocal-loadtools/) |
| [Monitoring and Observability](./monitoring-on-azure-local.md) | Azure Monitor, Prometheus, Grafana dashboards, and alerting | [azurelocal-monitoring](https://github.com/AzureLocal/azurelocal-monitoring) | — |
| [Business Continuity and DR](./bcdr-on-azure-local.md) | Azure Site Recovery, Azure Backup, and stretch cluster BCDR | [azurelocal-bcdr](https://github.com/AzureLocal/azurelocal-bcdr) | — |
| [Cost Management and Chargeback](./cost-management-on-azure-local.md) | Showback and chargeback reporting via Azure Cost Management | [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost) | — |
| [Governance and Compliance](./governance-on-azure-local.md) | Azure Policy, security baselines, RBAC, and compliance reporting | [azurelocal-governance](https://github.com/AzureLocal/azurelocal-governance) | — |
| [Server Hydration](./hydration-on-azure-local.md) | Bare-metal to Arc-registered cluster automated provisioning | [azurelocal-hydration](https://github.com/AzureLocal/azurelocal-hydration) | — |
| [Custom VM Images](./custom-images-on-azure-local.md) | Hardened golden image build pipeline for Azure Local VMs | [azurelocal-custom-images](https://github.com/AzureLocal/azurelocal-custom-images) | — |
| [Platform Automation Toolkit](./toolkit-on-azure-local.md) | Cross-cutting platform automation, variable registry, and IaC lifecycle | [azurelocal-toolkit](https://github.com/AzureLocal/azurelocal-toolkit) | [Docs](https://azurelocal.github.io/azurelocal-toolkit/) |
| [Disconnected Operations](./disconnected-operations-on-azure-local.md) | Air-gapped and intermittently connected cluster operations | — | — |

## Supporting Repositories

In addition to service-specific repos, the AzureLocal organization maintains cross-cutting tooling:

| Repository | Purpose | Docs Site |
|------------|---------|-----------|
| [azurelocal-toolkit](https://github.com/AzureLocal/azurelocal-toolkit) | Platform automation, variable registry, and IaC lifecycle governance | [Docs](https://azurelocal.github.io/azurelocal-toolkit/) |
| [azurelocal-avd](https://github.com/AzureLocal/azurelocal-avd) | IaC templates and automation for AVD on Azure Local | [Docs](https://azurelocal.github.io/azurelocal-avd/) |
| [azurelocal-sofs-fslogix](https://github.com/AzureLocal/azurelocal-sofs-fslogix) | Scale-Out File Server for FSLogix profile containers (AVD companion) | [Docs](https://azurelocal.github.io/azurelocal-sofs-fslogix/) |
| [azurelocal-vm-conversion-toolkit](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit) | Hyper-V Gen 1 → Gen 2 VM conversion with Arc enrollment preservation | [Docs](https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/) |
| [azurelocal-loadtools](https://github.com/AzureLocal/azurelocal-loadtools) | Load testing and benchmarking framework for Azure Local clusters | [Docs](https://azurelocal.github.io/azurelocal-loadtools/) |
| [azurelocal-monitoring](https://github.com/AzureLocal/azurelocal-monitoring) | Azure Monitor, Prometheus/Grafana, dashboards, and alerting | — |
| [azurelocal-sql-ha](https://github.com/AzureLocal/azurelocal-sql-ha) | SQL Server Always On AG and FCI deployment automation | — |
| [azurelocal-bcdr](https://github.com/AzureLocal/azurelocal-bcdr) | Azure Site Recovery, Azure Backup, and BCDR runbooks | — |
| [azurelocal-cost](https://github.com/AzureLocal/azurelocal-cost) | Cost management, chargeback, and showback reporting | — |
| [azurelocal-governance](https://github.com/AzureLocal/azurelocal-governance) | Azure Policy, Defender for Cloud, compliance, and RBAC automation | — |
| [azurelocal-hydration](https://github.com/AzureLocal/azurelocal-hydration) | Bare-metal to Arc-registered cluster automated provisioning | — |
| [azurelocal-vmware-migration](https://github.com/AzureLocal/azurelocal-vmware-migration) | VMware vSphere to Azure Local VM migration runbooks and tooling | — |
| [azurelocal-custom-images](https://github.com/AzureLocal/azurelocal-custom-images) | Hardened golden VM image build pipeline for Azure Local | — |

## How Services Run on Azure Local

All services in this section share a common pattern:

1. **Infrastructure** — Azure Local provides the physical compute, storage (S2D), and networking layer
2. **Azure Arc** — Projects local resources into Azure for unified management, policy, and RBAC
3. **Local execution** — Workloads (VMs, containers, databases, AI models) run on the local cluster
4. **Cloud management** — The Azure portal, CLI, and APIs manage lifecycle and configuration
5. **Hybrid connectivity** — Control-plane traffic flows to Azure; data and user traffic stays local

Refer to each service page for specific architecture details, deployment notes, and external references.

> Data verified with Microsoft Azure Local documentation, March 2026.
