---
title: Disconnected Operations on Azure Local
sidebar_position: 9
---

# Disconnected Operations on Azure Local

Disconnected operations let you deploy and manage Azure Local instances without a connection to the Azure public cloud. You run a local control plane that gives you a familiar Azure portal, Azure Resource Manager, and Azure CLI experience for virtual machines and containerized applications, with data, operations, and control inside your own boundary.

:::note Not the same as intermittent connectivity
A standard, cloud-connected Azure Local cluster keeps running workloads when the link to Azure is down for a while. Disconnected operations is a different deployment mode with its own local control plane (a virtual appliance), its own hardware requirements, and an approval process. Plan it from the start.
:::

## Service Details

### What It Enables

- A local Azure portal and Azure Resource Manager endpoint, hosted by a virtual appliance on a dedicated management cluster
- Local role-based access control for subscriptions and resource groups, and system-assigned managed identity
- Azure Local VMs, Arc-enabled servers, and device management (including adding and removing nodes) from the local control plane
- Select services from the local control plane: AKS on Azure Local, Arc-enabled Kubernetes (preview), Azure Container Registry, Azure Key Vault, and Azure Policy

### Key Use Cases

- **Sovereign requirements and compliance** in government, healthcare, and finance, where data residency and control must stay inside the organization
- **Remote or isolated locations** such as oil rigs and manufacturing sites with limited network infrastructure
- **High-security environments** that reduce the attack surface by not exposing systems to external networks

### Connectivity options

When you create the virtual appliance resource in Azure, you choose one of two models:

| Option | Behavior |
|--------|----------|
| **Limited connectivity** | The appliance can optionally connect to Azure for support and easier updates. Azure Local node traffic and Arc agent traffic stay on your network. |
| **Air-gapped** | The appliance never connects to Azure. You import and export data, such as update packages and support logs, across the boundary yourself. |

## Eligibility

Microsoft qualifies each customer before you can acquire disconnected operations:

1. An eligible agreement with Microsoft. The Microsoft online subscription program (MOSA) is not eligible.
2. An active support plan (Standard or higher), directly or through a partner.
3. A valid business need to operate disconnected (connectivity limits or regulatory restrictions).
4. Staff, or a partner, able to deploy and operate it, and workloads identified up front.
5. Supported hardware: Premier Solutions for Azure Local that you own, with a dedicated management cluster. A proof of concept uses a four-node configuration. If you already have workload clusters, a three-node dedicated management cluster is used.

To get access, work with your Microsoft account team or submit the prequalification form. Microsoft responds within 10 business days.

## Planning topics

| Topic | What to plan |
|-------|--------------|
| Network | Reserve a management IP pool. Assign an ingress IP inside the management subnet that does not overlap the deployment range. Make sure DNS resolves the ingress endpoints and external clients can reach the ingress IP on port 443. The container network range must not conflict with your external network. |
| Identity | An identity provider that the appliance can reach from the management network. |
| PKI | Certificates from an enterprise or private certificate authority (self-signed certificates are not supported), one per exposed endpoint, sharing one trust chain, valid for at least two years from deployment. For fully disconnected sites use a private CA and make the CRL endpoint reachable internally. A public CA fails because it needs internet access for CRL and OCSP. |
| Capacity | The management cluster hosts the control plane appliance, so minimum hardware is higher than a standard Azure Local deployment. |
| Rack aware | A rack aware workload cluster in disconnected operations needs a file share witness and a dedicated storage network intent. See [Rack aware clustering](../planning/09-rack-aware-clustering.mdx). |

## Deployment flow

1. Review the known issues and the eligibility criteria.
2. Plan network, identity, security controls, PKI, and the dedicated management cluster.
3. Acquire disconnected operations: create the virtual appliance resource in the Azure portal, then download the installation files and ISO. Azure CLI is not supported for this step. Use the REST API for automation.
4. Prepare the Azure Local nodes, deploy the management cluster with the appliance, and register.
5. Deploy workload clusters and manage VMs, Kubernetes, container registries, policy, and monitoring from the local control plane. Use on-demand or fallback log collection to troubleshoot.

## Limitations

- Access requires approval. If a subscription is not approved, create actions in the acquire flow fail.
- Only the services Microsoft lists as supported are available in the local control plane. Check the supported services table before you design a workload.
- Updates, billing data, and support logs cross the boundary by your own process in air-gapped mode.
- Review the known issues article for your release before you plan a deployment.

## Resources

- **Repository**: [azurelocal-disconnected](https://github.com/AzureLocal/azurelocal-disconnected)
- **Plan updates**: [Update management and Solution Builder Extension](./update-management-and-sbe.mdx)

## External References

- [Disconnected operations for Azure Local — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-local/manage/disconnected-operations-overview?view=azloc-2609)
- [Plan your network for disconnected operations — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-local/manage/disconnected-operations-network?view=azloc-2609)
- [PKI for disconnected operations — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-local/manage/disconnected-operations-pki?view=azloc-2609)
- [Dedicated management cluster for disconnected operations — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-local/manage/disconnected-operations-control-plane-appliance?view=azloc-2609)
- [Acquire disconnected operations — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-local/manage/disconnected-operations-acquire?view=azloc-2609)
- [Deploy disconnected operations and the management cluster — Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-local/manage/disconnected-operations-deploy?view=azloc-2609)
- [AKS on Azure Local with disconnected operations — Microsoft Learn](https://learn.microsoft.com/en-us/azure/aks/aksarc/disconnected-operations-aks)

> Data verified with Microsoft Azure Local documentation, October 2026.
