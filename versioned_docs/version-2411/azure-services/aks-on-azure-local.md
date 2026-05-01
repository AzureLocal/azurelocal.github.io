---
title: Azure Kubernetes Service (AKS) on Azure Local
sidebar_position: 3
---

# Azure Kubernetes Service (AKS) on Azure Local

Azure Kubernetes Service (AKS) on Azure Local delivers a fully managed Kubernetes experience on-premises. Clusters are provisioned and managed through Azure Arc, giving teams cloud-consistent container orchestration while keeping workloads, data, and compute within the local infrastructure boundary.

## Service Details

### What It Enables

AKS on Azure Local allows organizations to run production Kubernetes clusters on their own hardware with the same Azure management experience used for cloud-hosted AKS. Cluster lifecycle management — creation, scaling, upgrades, and monitoring — is handled through the Azure portal, CLI, or ARM/Bicep templates via Azure Arc.

### Key Use Cases

- **Cloud-native apps on-premises** — Run containerized microservices architectures in datacenters or edge locations where cloud connectivity is limited or data must remain local
- **Regulated workloads** — Deploy Kubernetes workloads that must comply with data residency, sovereignty, or air-gapped operation requirements
- **Edge computing** — Run lightweight Kubernetes clusters at edge sites for real-time processing, analytics, or IoT data aggregation
- **Developer consistency** — Give development teams the same Kubernetes APIs and tooling (kubectl, Helm, Flux) regardless of whether clusters are in Azure or on-premises
- **Application modernization** — Containerize legacy workloads and run them on Kubernetes without migrating to the public cloud

### Architecture

- **Azure Arc integration** — AKS clusters on Azure Local are projected into Azure as Arc-connected resources, enabling unified management across cloud and on-premises
- **Control plane** — Runs locally on Azure Local cluster nodes (no dependency on Azure for workload scheduling)
- **Networking** — Supports Azure CNI and Calico for pod networking; integrates with existing datacenter networks via load balancers and VLANs
- **Storage** — Persistent volumes backed by Storage Spaces Direct (S2D) on the Azure Local cluster
- **Identity** — Microsoft Entra Workload ID and Azure RBAC for cluster access control

## Supported Features

- Standard Kubernetes APIs (CNCF-conformant)
- Multi-node and single-node cluster topologies
- Cluster autoscaling and node pool management
- Azure Monitor and Container Insights integration
- Azure Policy for Kubernetes (Gatekeeper)
- GitOps with Flux v2 (Azure Arc)
- GPU workload scheduling (where hardware available)
- Windows and Linux node pools

## Deployment Notes

- Requires Azure Local infrastructure (Azure Stack HCI 23H2+ recommended)
- Clusters are provisioned via Azure Arc; an Azure subscription is required
- Minimum 8 GB RAM and 4 vCPUs per worker node recommended
- Storage classes map to S2D volumes on the Azure Local cluster

## Limitations

- Some AKS cloud add-ons (e.g., Virtual Nodes, KEDA with Azure Event sources) may not be available on-premises
- Azure Container Registry integration requires network connectivity to Azure
- Cluster upgrades follow the Arc-connected Kubernetes lifecycle, which may lag behind cloud AKS versions
- Hardware and licensing requirements apply

## External References

- [AKS on Azure Local overview — Microsoft Learn](https://learn.microsoft.com/azure/aks/hybrid/aks-hybrid-options-overview)
- [Deploy AKS clusters on Azure Local — Microsoft Learn](https://learn.microsoft.com/azure/aks/hybrid/aks-create-clusters-portal)
- [Azure Arc-enabled Kubernetes — Microsoft Learn](https://learn.microsoft.com/azure/azure-arc/kubernetes/overview)

> Data verified with Microsoft Azure Local documentation, March 2026.
