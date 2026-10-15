---
title: Azure Kubernetes Service (AKS) on Azure Local
sidebar_position: 3
---

# Azure Kubernetes Service (AKS) on Azure Local

Azure Kubernetes Service (AKS) on Azure Local runs Kubernetes on your own Azure Local hardware, managed from Azure through Azure Arc. It is one of the AKS Hybrid and Edge deployment options (formerly "AKS enabled by Azure Arc" and "AKS hybrid"), which also include AKS on bare metal (preview), AKS Edge Essentials, and AKS on Windows Server. Teams get cloud-consistent container orchestration while workloads, data, and compute stay inside the local infrastructure boundary.

## Service Details

### What It Enables

AKS on Azure Local allows organizations to run production Kubernetes clusters on their own hardware with the same Azure management experience used for cloud-hosted AKS. Cluster lifecycle management (creation, scaling, upgrades, and monitoring) is handled through the Azure portal, Azure CLI, or ARM and Bicep templates via Azure Arc.

AKS on Azure Local is included with Azure Local release 2402 and later. Microsoft's pricing guidance says not to add a separate AKS on Azure Local line item for release 2402 or later.

### Key Use Cases

- **Cloud-native apps on-premises** — Run containerized microservices architectures in datacenters or edge locations where cloud connectivity is limited or data must remain local
- **Regulated workloads** — Deploy Kubernetes workloads that must comply with data residency or sovereignty requirements. For fully disconnected sites see [AKS with disconnected operations](../operations/disconnected-operations-on-azure-local.md)
- **Edge computing** — Run Kubernetes clusters at edge sites for real-time processing, analytics, or IoT data aggregation
- **Developer consistency** — Give development teams the same Kubernetes APIs and tooling (kubectl, Helm, Flux) regardless of whether clusters are in Azure or on-premises
- **Application modernization** — Containerize legacy workloads and run them on Kubernetes without migrating to the public cloud

### Architecture

- **Azure Arc integration** — AKS clusters on Azure Local are projected into Azure as Arc-connected resources, enabling unified management across cloud and on-premises
- **Nodes** — Control plane and worker nodes run as VMs on the Azure Local cluster. Defaults are 4 vCPU and 8 GB for control plane and Linux workers, and 4 vCPU and 6 GB for Windows workers. Since release 2509 the default OS disk for AKS node VMs is 200 GB, dynamically expanding, so size physical capacity accordingly
- **Storage** — Persistent volumes backed by Storage Spaces Direct (S2D) on the Azure Local cluster
- **Operating systems** — Azure Linux for Linux node pools. Windows node pools are supported, but the Windows Server 2019 SKU ended in March 2026 and Azure Advisor lists the Windows Server 2022 SKU on AKS enabled by Azure Arc as retiring on 31 October 2026. Check the retirement list before you plan Windows node pools

## Supported Features

- Standard Kubernetes APIs (CNCF-conformant)
- Node pool management with manual scaling or the cluster autoscaler
- Azure Monitor, Azure Policy, and Microsoft Defender for Cloud integration
- GitOps with Flux v2 (Azure Arc)
- Azure Container Registry integration
- GPU node pools on Linux (NVIDIA A2, A16, T4, L4, L40, L40S, and RTX Pro 6000 in the supported release versions; some SKUs are in preview). GPUs are not supported on Windows node pools
- Control plane high availability is not supported in rack aware clusters. See [Rack aware clustering](../planning/09-rack-aware-clustering.mdx)

## Deployment Notes

- Requires Azure Local (the 12.x release train, currently 12.2609). Azure Stack HCI 23H2 reached end of support in April 2026, so move to 24H2 builds first
- Clusters are provisioned via Azure Arc. An Azure subscription is required
- Check the Kubernetes versions supported by your Azure Local release before you update Azure Local. Release 2604 supports 1.31.12, 1.31.13, 1.32.8, 1.32.9, 1.33.4, and 1.33.5. Kubernetes 1.30 is no longer supported
- KMS v1 is deprecated soon and KMS v2 is included. Plan to redeploy clusters that use KMS v1
- With the autoscaler enabled, a maximum of 12 AKS clusters per Azure Local environment is supported
- Storage classes map to S2D volumes on the Azure Local cluster

## Limitations

- Private clusters, availability zones, proximity placement groups, and node pool snapshots (available in Azure) are not available on Azure Local
- Some AKS cloud add-ons might not be available on-premises
- Azure Container Registry integration requires network connectivity to Azure unless you use disconnected operations
- Hardware and licensing requirements apply

## External References

- [What is AKS Hybrid and Edge? — Microsoft Learn](https://learn.microsoft.com/en-us/azure/aks/aksarc/aks-overview)
- [Compare AKS features across cloud, edge, and on-premises — Microsoft Learn](https://learn.microsoft.com/en-us/azure/aks-hybrid-edge/aks-platforms-compare)
- [Scale requirements for AKS on Azure Local — Microsoft Learn](https://learn.microsoft.com/en-us/azure/aks-hybrid-edge/local/hyperconverged/scale-requirements)
- [What's new in AKS Hybrid and Edge on Azure Local — Microsoft Learn](https://learn.microsoft.com/en-us/azure/aks-hybrid-edge/local/aks-whats-new-local)
- [What's new in Azure Local, release 2604 — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-local/whats-new?view=azloc-2609)
- [Azure Arc-enabled Kubernetes — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-arc/kubernetes/overview)
- **Docs site**: [azurelocal-aks](https://azurelocal.cloud/azurelocal-aks/)

> Data verified with Microsoft Azure Local documentation, October 2026.
