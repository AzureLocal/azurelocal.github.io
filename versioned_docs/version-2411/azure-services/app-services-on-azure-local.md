---
title: Azure App Services on Azure Local
sidebar_position: 4
---

# Azure App Services on Azure Local

Azure App Services on Azure Local extends the platform-as-a-service (PaaS) experience to on-premises infrastructure. Organizations can host web applications, REST APIs, and background services using the same App Service programming model and deployment workflows used in Azure — while keeping application compute and data within their local environment.

## Service Details

### What It Enables

App Services on Azure Local runs on a Kubernetes cluster (AKS on Azure Local) with the App Service extension installed via Azure Arc. This provides a fully managed application hosting platform on-premises, with built-in scaling, deployment slots, and CI/CD integration.

### Key Use Cases

- **Internal line-of-business apps** — Host corporate web applications on-premises with cloud-grade management and deployment automation
- **Data-sensitive APIs** — Run APIs that process regulated or sensitive data without sending it to the cloud
- **Hybrid app modernization** — Migrate legacy IIS/.NET workloads to the App Service model while keeping them on-premises during the transition
- **Edge-hosted applications** — Deploy lightweight web frontends or API gateways at edge sites that serve local users or devices

### Architecture

- **App Service Kubernetes environment** — An Arc-enabled AKS cluster with the App Service extension deployed
- **Control plane** — Azure manages the App Service configuration; the Kubernetes extension handles local orchestration
- **Scaling** — Built-in horizontal scaling within the AKS cluster resource limits
- **Networking** — Applications are exposed via Kubernetes ingress on the local network; external access configurable through network infrastructure
- **Storage** — Persistent storage backed by the AKS cluster's storage classes (S2D on Azure Local)

## Supported Features

- .NET, Java, Node.js, PHP, Python, and custom container runtimes
- Deployment slots for staged rollouts
- CI/CD integration with GitHub Actions and Azure DevOps
- Custom domains and TLS certificates
- App settings and connection string management
- Built-in authentication (Easy Auth)
- Application Insights integration

## Deployment Notes

- Requires AKS on Azure Local with the App Service extension installed via Azure Arc
- Azure subscription required for the Arc-connected App Service environment
- DNS and ingress configuration needed for application endpoints
- Minimum cluster sizing depends on the number and resource requirements of hosted applications

## Limitations

- Some cloud App Service features (e.g., Azure Functions Consumption plan, some managed integrations) are not available on-premises
- Custom domains require manual DNS configuration on the local network
- Auto-scaling is limited to the available compute capacity on the AKS cluster
- Hardware and licensing requirements apply

## External References

- [App Service on Azure Arc — Microsoft Learn](https://learn.microsoft.com/azure/app-service/overview-arc-integration)
- [Set up Azure App Service on Azure Arc — Microsoft Learn](https://learn.microsoft.com/azure/app-service/manage-create-arc-environment)
- [AKS on Azure Local — Microsoft Learn](https://learn.microsoft.com/azure/aks/hybrid/aks-hybrid-options-overview)

> Data verified with Microsoft Azure Local documentation, March 2026.
