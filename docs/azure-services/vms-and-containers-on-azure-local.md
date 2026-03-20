---
title: VMs and Containers on Azure Local
sidebar_position: 8
---

# VMs and Containers on Azure Local

Azure Local supports running traditional virtual machines and Linux/Windows containers side-by-side on the same infrastructure. VMs are managed through Azure Arc as `Microsoft.AzureStackHCI/virtualMachineInstances` resources, while containers run on AKS clusters — giving teams the flexibility to choose the right compute model for each workload.

## Service Details

### What It Enables

Azure Local provides a converged platform where organizations can run VMs for traditional workloads alongside Kubernetes containers for cloud-native applications. Both compute types share the same Storage Spaces Direct (S2D) storage and networking infrastructure, managed through Azure Arc and the Azure portal.

### Key Use Cases

- **Mixed workload consolidation** — Run Windows Server VMs (Active Directory, file servers, SQL Server) alongside containerized microservices on the same cluster
- **Application modernization** — Migrate legacy VM-based applications incrementally, running some components as containers and others as VMs during the transition
- **Development and test** — Provision VMs and Kubernetes clusters on-demand for development teams using Azure Arc self-service
- **VM lifecycle management** — Create, resize, snapshot, and manage VMs through the Azure portal with the same experience as Azure cloud VMs
- **Gen 1 to Gen 2 VM conversion** — Convert existing Hyper-V Gen 1 VMs to Gen 2 for Secure Boot, vTPM, and Trusted Launch capabilities

### Architecture

- **Arc VM management** — VMs on Azure Local are projected into Azure as Arc resources, enabling portal-based management, Azure Policy, and RBAC
- **Hyper-V** — The underlying hypervisor providing VM isolation, live migration, and hardware passthrough
- **AKS on Azure Local** — Kubernetes clusters for container workloads, running alongside VMs on the same physical nodes
- **Storage** — Both VMs and containers use S2D for persistent storage; VMs use VHDX disks, containers use CSI-provisioned persistent volumes
- **Networking** — Software-defined networking (SDN) provides network isolation, load balancing, and micro-segmentation for both VMs and containers

## Supported Features

- Windows and Linux VM support (Gen 1 and Gen 2)
- VM live migration between cluster nodes
- Azure portal–based VM lifecycle management (create, resize, delete, snapshot)
- GPU passthrough and DDA for VMs and containers
- AKS container orchestration
- Azure Policy and RBAC for both VMs and Kubernetes
- Integration with Azure Monitor, Defender for Cloud, and Update Management
- Storage Spaces Direct for shared persistent storage

## Repository: azurelocal-vm-conversion-toolkit

The [`AzureLocal/azurelocal-vm-conversion-toolkit`](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit) provides a PowerShell toolkit for converting Hyper-V Gen 1 VMs to Gen 2 on Azure Local while preserving Azure Arc management.

**What's in the repo:**

- PowerShell scripts for inventory, MBR-to-GPT conversion, VM rebuild, and Arc re-registration
- Two conversion paths: Azure Local VM (portal-managed) and Hyper-V Cluster (workload-preserving)
- Prerequisites guide and troubleshooting documentation

**Getting started:** Review the [prerequisites](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit/blob/main/docs/prerequisites.md), back up your VMs, and follow the runbook for your conversion path. See the repo [README](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit#readme) for details.

### Documentation Site

Conversion guides, decision trees, and troubleshooting docs are published at:
**[azurelocal.github.io/azurelocal-vm-conversion-toolkit](https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/)**

## Repository: azurelocal-toolkit

The [`AzureLocal/azurelocal-toolkit`](https://github.com/AzureLocal/azurelocal-toolkit) provides platform automation for the entire Azure Local deployment lifecycle — including VM provisioning, cluster validation, and operational management.

**What's in the repo:**

- 200+ PowerShell scripts organized by deployment stage (Azure Foundation, On-Prem Readiness, Cluster Deployment, Operational Foundations, Testing, Handover, Lifecycle)
- Master infrastructure configuration template (`config/variables.yml`)
- Planning utilities (S2D capacity calculator)

**Getting started:** See the repo [README](https://github.com/AzureLocal/azurelocal-toolkit#readme) for deployment stage guides.

### Documentation Site

Full deployment documentation, configuration guides, and roadmap are published at:
**[azurelocal.github.io/azurelocal-toolkit](https://azurelocal.github.io/azurelocal-toolkit/)**

## Deployment Notes

- Requires Azure Local infrastructure (Azure Stack HCI 23H2+ recommended)
- Arc VM management requires Azure subscription and Arc resource bridge
- AKS clusters provisioned separately via Azure Arc
- Gen 1 to Gen 2 VM conversion is a destructive operation — always back up first

## Limitations

- VM live migration requires shared storage and compatible processor generations across nodes
- GPU passthrough limits VM live migration for GPU-enabled VMs
- Some Azure VM extensions may not be available for Arc-connected VMs
- Gen 1 to Gen 2 conversion is one-way and requires VM downtime
- Hardware and licensing requirements apply

## External References

- [Manage VMs on Azure Local — Microsoft Learn](https://learn.microsoft.com/azure-stack/hci/manage/manage-virtual-machines-in-azure-portal)
- [Create Arc VMs on Azure Local — Microsoft Learn](https://learn.microsoft.com/azure-stack/hci/manage/create-arc-virtual-machines)
- [AKS on Azure Local — Microsoft Learn](https://learn.microsoft.com/azure/aks/hybrid/aks-hybrid-options-overview)

> Data verified with Microsoft Azure Local documentation, March 2026.
