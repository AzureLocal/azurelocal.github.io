---
title: Custom VM Images on Azure Local
sidebar_position: 20
---

# Custom VM Images on Azure Local

The Azure Local Custom Images solution provides an automated pipeline for building, validating, and publishing hardened VM images to Azure Local clusters. It uses Azure Image Builder (or Packer) to produce VHDX-format golden images with pre-installed agents, security baselines, and organizational configurations baked in — ensuring that every new VM starts from a trusted, consistent baseline.

## Service Details

### What It Enables

Rather than deploying generic OS images and then configuring VMs post-deployment, the custom images solution produces pre-hardened, pre-configured image artifacts that can be used directly for provisioning. This reduces deployment time, eliminates configuration drift, and ensures security baselines are enforced from day one.

### Key Use Cases

- **Golden image pipeline** — Automated image build pipeline producing versioned VHDX artifacts
- **Security hardening** — Apply CIS benchmarks, Windows Server security baselines, and organizational policies at image build time
- **Agent pre-installation** — Bake in Azure Monitor Agent, Arc Connected Machine Agent, and custom tooling
- **Image versioning** — Maintain a library of versioned images with changelog tracking
- **Multi-OS support** — Build images for Windows Server 2022, 2019, and Linux (Ubuntu, RHEL)
- **Azure Local gallery** — Publish images to the Azure Local image gallery for self-service VM provisioning

### Architecture

```
Image Build Pipeline
     │
     ├── Source: Marketplace OS image or ISO
     │
     ├── Customization Layer:
     │   ├── Windows Updates / Patching
     │   ├── Security hardening (CIS / Azure Security Benchmark)
     │   ├── Agent installation (AMA, Arc Agent, custom tooling)
     │   └── Organizational configuration (DNS, NTP, certificates)
     │
     ├── Validation:
     │   ├── Pester tests (Windows) / InSpec (Linux)
     │   └── Security scan (SCAP / Defender)
     │
     └── Publish:
         ├── Azure Local Image Gallery (VHDX artifact)
         └── Version catalog with changelog
```

## Supported Features

- Automated image build pipeline (Azure Image Builder or HashiCorp Packer)
- CIS Level 1/2 hardening for Windows Server and Linux
- Pre-installed Azure Monitor Agent and Arc Connected Machine Agent
- Image versioning with semantic version tagging
- Pester / InSpec validation test suites
- Azure Local image gallery integration
- Multi-OS support: Windows Server 2019/2022, Ubuntu 20.04/22.04, RHEL 8/9
- Integration with azurelocal-toolkit variable registry for consistent configuration

## Deployment Notes

- Azure Image Builder requires an Azure subscription with Image Builder service registered
- Packer-based pipeline can run on-premises without Azure Image Builder dependency
- Published VHDX images must be imported into the Azure Local image gallery before use
- Refer to the [azurelocal-custom-images](https://github.com/AzureLocal/azurelocal-custom-images) repo for pipeline definitions and image specs

## Resources

- **Repository**: [azurelocal-custom-images](https://github.com/AzureLocal/azurelocal-custom-images)
- **Microsoft Docs**: [Custom images for Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/manage/virtual-machine-image-local-share)
- **Azure Image Builder**: [Overview](https://learn.microsoft.com/en-us/azure/virtual-machines/image-builder-overview)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-custom-images](https://github.com/AzureLocal/azurelocal-custom-images).
:::
