---
title: VM Gen1 to Gen2 Conversion on Azure Local
sidebar_position: 11
---

# VM Generation 1 to Generation 2 Conversion on Azure Local

The Azure Local VM Conversion Toolkit provides a PowerShell-based approach to converting Hyper-V Generation 1 virtual machines to Generation 2 in place — preserving Azure Arc enrollment, disk layout, and workload state. This eliminates the need to rebuild or redeploy existing Gen1 VMs to take advantage of UEFI boot, Secure Boot, and modern device drivers.

## Service Details

### What It Enables

Converting Gen1 VMs to Gen2 unlocks modern boot firmware (UEFI), Secure Boot support, improved device performance, and compatibility with Azure-native features (like Trusted Launch) that require Gen2. The toolkit automates the conversion process on both Azure Local clusters and standalone Hyper-V environments.

### Key Use Cases

- **Azure Local migration** — Convert Arc-enrolled Gen1 VMs to Gen2 without losing Arc registration
- **Hyper-V modernization** — Upgrade Gen1 VMs on standalone Hyper-V hosts to Gen2 before migrating to Azure Local
- **Compliance readiness** — Meet organizational policies requiring UEFI/Secure Boot on all VMs
- **Feature enablement** — Unlock features unavailable to Gen1: vTPM, Secure Boot, Trusted Launch
- **Batch conversion** — Convert multiple VMs systematically with logging and rollback support

### Architecture

The toolkit follows a staged conversion process:

1. **Pre-flight checks** — Validate OS, disk layout, boot configuration, and Arc state
2. **MBR → GPT conversion** — Convert the system disk from MBR to GUID Partition Table
3. **Gen1 → Gen2** — Re-provision the VM with UEFI firmware while preserving disks and Arc enrollment
4. **Post-conversion validation** — Confirm boot success, Arc connectivity, and workload availability

**Conversion Paths:**
- **Azure Local** — `scripts/azurelocal/` — for Arc-enrolled VMs on Azure Local clusters
- **Hyper-V** — `scripts/hyperv/` — for standalone Hyper-V Gen1 VMs

## Supported Features

- MBR to GPT disk conversion
- Gen1 to Gen2 firmware conversion
- Azure Arc enrollment preservation
- Batch VM conversion with parallel processing
- Pre-flight validation and rollback support
- Pester-based test coverage for all scripts
- Support for Windows Server 2016, 2019, 2022

## Deployment Notes

- Requires PowerShell 7+ and administrative access to the Hyper-V host or Azure Local cluster
- VMs must be powered off for conversion
- Full backup recommended before conversion
- Refer to the [azurelocal-vm-conversion-toolkit](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit) repo for runbooks and scripts

## Resources

- **Repository**: [azurelocal-vm-conversion-toolkit](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit)
- **Docs Site**: [azurelocal.github.io/azurelocal-vm-conversion-toolkit](https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/)
- **Microsoft Docs**: [Generation 2 VM overview](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/plan/should-i-create-a-generation-1-or-2-virtual-machine-in-hyper-v)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-vm-conversion-toolkit](https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit).
:::
