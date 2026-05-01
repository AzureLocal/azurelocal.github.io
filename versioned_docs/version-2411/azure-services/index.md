---
title: Azure Services on Azure Local
sidebar_position: 6
---

# Azure Services on Azure Local

This section covers Azure services that run natively on Azure Local infrastructure (Azure Stack HCI, Hub, Edge, and related platforms). Only services that execute workloads locally are included — cloud-only services managed through the Azure portal are not covered here.

## Service Overview

Only Microsoft-published, named Azure services with an Arc-enabled or Azure Local-native deployment mode are listed here. For operational tooling and day-2 solutions, see the [Operations](../operations/) section.

| Service | Description | AzureLocal Repo | Docs Site |
|---------|-------------|-----------------|-----------|
| [Azure Virtual Desktop (AVD)](./avd-on-azure-local.md) | Cloud-managed virtual desktops and RemoteApp on-premises | [azurelocal-avd](https://github.com/AzureLocal/azurelocal-avd) | [Docs](https://azurelocal.github.io/azurelocal-avd/) |
| [Azure Kubernetes Service (AKS)](./aks-on-azure-local.md) | Managed Kubernetes on-premises via Azure Arc | [azurelocal-aks](https://github.com/AzureLocal/azurelocal-aks) | — |
| [Azure App Services](./app-services-on-azure-local.md) | PaaS web app and API hosting on AKS via Arc | [azurelocal-app-services](https://github.com/AzureLocal/azurelocal-app-services) | — |
| [Azure SQL Managed Instance](./sql-managed-instance-on-azure-local.md) | Managed SQL databases on-premises via Arc data services | [azurelocal-sql-mi](https://github.com/AzureLocal/azurelocal-sql-mi) | — |
| [Machine Learning / AI](./ml-ai-on-azure-local.md) | ML inference and AI workloads at the edge | [azurelocal-ml-ai](https://github.com/AzureLocal/azurelocal-ml-ai) | — |
| [IoT Operations](./iot-operations-on-azure-local.md) | Edge IoT data processing, MQTT broker, and device management | [azurelocal-iot](https://github.com/AzureLocal/azurelocal-iot) | — |

## Supporting Repositories

In addition to service-specific repos, the AzureLocal organization maintains cross-cutting platform tooling:

| Repository | Purpose | Docs Site |
|------------|---------|-----------|
| [azurelocal-toolkit](https://github.com/AzureLocal/azurelocal-toolkit) | Platform automation, variable registry, and IaC lifecycle governance | [Docs](https://azurelocal.github.io/azurelocal-toolkit/) |

For the full list of operational and day-2 solution repositories, see the [Operations](../operations/) section.

## How Services Run on Azure Local

All services in this section share a common pattern:

1. **Infrastructure** — Azure Local provides the physical compute, storage (S2D), and networking layer
2. **Azure Arc** — Projects local resources into Azure for unified management, policy, and RBAC
3. **Local execution** — Workloads (VMs, containers, databases, AI models) run on the local cluster
4. **Cloud management** — The Azure portal, CLI, and APIs manage lifecycle and configuration
5. **Hybrid connectivity** — Control-plane traffic flows to Azure; data and user traffic stays local

Refer to each service page for specific architecture details, deployment notes, and external references.

> Data verified with Microsoft Azure Local documentation, March 2026.
