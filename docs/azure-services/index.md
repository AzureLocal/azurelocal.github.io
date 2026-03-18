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
| [Azure Kubernetes Service (AKS)](./aks-on-azure-local.md) | Managed Kubernetes on-premises via Azure Arc | — | — |
| [Azure App Services](./app-services-on-azure-local.md) | PaaS web app and API hosting on AKS via Arc | — | — |
| [Azure SQL Managed Instance](./sql-managed-instance-on-azure-local.md) | Managed SQL databases on-premises via Arc data services | — | — |
| [Machine Learning / AI](./ml-ai-on-azure-local.md) | ML inference and AI workloads at the edge | — | — |
| [IoT Operations](./iot-operations-on-azure-local.md) | Edge IoT data processing, MQTT broker, and device management | — | — |
| [VMs and Containers](./vms-and-containers-on-azure-local.md) | Arc-managed VMs and AKS containers side-by-side | [azurelocal-vm-conversion-toolkit](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit) | [Docs](https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/) |
| [Disconnected Operations](./disconnected-operations-on-azure-local.md) | Air-gapped and intermittently connected cluster operations | — | — |

## Supporting Repositories

In addition to service-specific repos, the AzureLocal organization maintains cross-cutting tooling:

| Repository | Purpose | Docs Site |
|------------|---------|-----------|
| [azurelocal-avd](https://github.com/AzureLocal/azurelocal-avd) | IaC templates and automation for AVD on Azure Local | [Docs](https://azurelocal.github.io/azurelocal-avd/) |
| [azurelocal-sofs-fslogix](https://github.com/AzureLocal/azurelocal-sofs-fslogix) | Scale-Out File Server for FSLogix profile containers (AVD companion) | [Docs](https://azurelocal.github.io/azurelocal-sofs-fslogix/) |
| [azurelocal-toolkit](https://github.com/AzureLocal/azurelocal-toolkit) | Platform automation for the full Azure Local deployment lifecycle | [Docs](https://azurelocal.github.io/azurelocal-toolkit/) |
| [azurelocal-vm-conversion-toolkit](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit) | Hyper-V Gen 1 → Gen 2 VM conversion with Arc preservation | [Docs](https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/) |
| [azurelocal-loadtools](https://github.com/AzureLocal/azurelocal-loadtools) | Load testing and benchmarking framework for Azure Local clusters | [Docs](https://azurelocal.github.io/azurelocal-loadtools/) |

## How Services Run on Azure Local

All services in this section share a common pattern:

1. **Infrastructure** — Azure Local provides the physical compute, storage (S2D), and networking layer
2. **Azure Arc** — Projects local resources into Azure for unified management, policy, and RBAC
3. **Local execution** — Workloads (VMs, containers, databases, AI models) run on the local cluster
4. **Cloud management** — The Azure portal, CLI, and APIs manage lifecycle and configuration
5. **Hybrid connectivity** — Control-plane traffic flows to Azure; data and user traffic stays local

Refer to each service page for specific architecture details, deployment notes, and external references.

> Data verified with Microsoft Azure Local documentation, March 2026.
