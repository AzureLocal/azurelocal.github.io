---
title: Server Hydration on Azure Local
sidebar_position: 18
---

# Server Hydration on Azure Local

The Azure Local Hydration solution automates the end-to-end provisioning of new Azure Local clusters from bare-metal hardware — from BIOS/firmware configuration through OS deployment, cluster formation, Arc registration, and initial workload readiness. It eliminates the manual steps that traditionally make Azure Local deployments slow and error-prone.

## Service Details

### What It Enables

"Hydration" refers to the process of taking bare-metal hardware and fully configuring it to a known, production-ready state. This solution automates the entire lifecycle from initial OS installation through Azure Arc registration, removing the need for manual node-by-node configuration.

### Key Use Cases

- **Bare-metal to cluster** — Automated path from raw hardware to a fully configured, Arc-registered Azure Local cluster
- **BIOS/firmware configuration** — Standardized iDRAC/iLO configuration for consistent hardware settings across all nodes
- **OS deployment** — Scripted Windows Server deployment with consistent partition layouts and driver packages
- **Cluster formation** — Automated WSFC creation, networking, and Storage Spaces Direct configuration
- **Arc registration** — Automatic enrollment of all cluster nodes and resources into Azure Arc
- **Repeatable builds** — Idempotent provisioning scripts for consistent cluster rebuilds

### Architecture

```
Bare Metal Hardware
     │
     ├── Step 1: BIOS/Firmware Configuration (iDRAC/iLO)
     │
     ├── Step 2: OS Deployment (WinPE / PXE boot / scripted WIM)
     │
     ├── Step 3: Network Configuration (storage, mgmt, compute VLANs)
     │
     ├── Step 4: Cluster Formation (WSFC + Storage Spaces Direct)
     │
     ├── Step 5: Azure Arc Registration (nodes + resources)
     │
     └── Step 6: Baseline Configuration (updates, monitoring agents, policy)

Result: Production-ready Azure Local cluster
```

## Supported Features

- BIOS/iDRAC/iLO configuration templates (Dell, HPE, Lenovo)
- WIM-based OS deployment with answer file automation
- Network switch configuration validation
- Automated cluster creation and validation
- Storage Spaces Direct pool and volume initialization
- Azure Arc registration for all nodes
- Post-deployment health validation checks
- Integration with azurelocal-toolkit variable registry

## Deployment Notes

- Hardware vendor BMC access required for firmware configuration steps
- Network infrastructure (DHCP, DNS, PXE) must be pre-configured
- Refer to the [azurelocal-hydration](https://github.com/AzureLocal/azurelocal-hydration) repo for deployment scripts and hardware profiles

## Resources

- **Repository**: [azurelocal-hydration](https://github.com/AzureLocal/azurelocal-hydration)
- **Microsoft Docs**: [Deploy Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/deploy/deployment-introduction)
- **Arc Registration**: [Connect machines to Arc](https://learn.microsoft.com/en-us/azure/azure-arc/servers/onboard-portal)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-hydration](https://github.com/AzureLocal/azurelocal-hydration).
:::
