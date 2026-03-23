---
title: VMware to Azure Local Migration
sidebar_position: 19
---

# VMware to Azure Local Migration

The Azure Local VMware Migration solution provides runbooks, scripts, and tooling to migrate VMware vSphere virtual machines to Azure Local. It automates the conversion of VMDK-format disks to VHDX, handles Arc enrollment, and validates workload health after migration — providing a repeatable, low-risk migration path away from VMware.

## Service Details

### What It Enables

Organizations looking to exit VMware licensing can migrate existing vSphere VMs to Azure Local without rebuilding workloads from scratch. This solution automates the VMDK → VHDX conversion, network remapping, and Arc registration steps that traditionally require significant manual effort.

### Key Use Cases

- **Bulk VM migration** — Migrate large numbers of VMs from vSphere to Azure Local with minimal downtime
- **VMDK to VHDX conversion** — Automated disk format conversion preserving VM data and configurations
- **Network remapping** — Map vSphere port groups to Azure Local logical networks
- **Arc enrollment** — Register migrated VMs with Azure Arc for unified management
- **Wave-based migration** — Organize VMs into migration waves with dependency tracking
- **Validation runbooks** — Post-migration validation of networking, storage, and application health

### Architecture

```
VMware vSphere (Source)
     │
     ├── Export VMs (OVA/VMDK via export)
     │
     └── Convert VMDK → VHDX ──▶ Azure Local Cluster (Target)
                                        │
                                        ├── Import VHDX as Arc VM
                                        ├── Network remapping
                                        ├── Arc enrollment
                                        └── Post-migration validation
```

**Supported migration approaches:**
- **Offline (cold) migration** — Shut down VM, export, convert, import
- **Azure Migrate integration** — Use Azure Migrate as the migration engine with Azure Local as the target

## Supported Features

- VMDK to VHDX disk conversion (single and multi-disk VMs)
- VMware Tools removal and Hyper-V guest agent installation
- Network port group to Azure Local logical network mapping
- Bulk migration orchestration with wave sequencing
- Arc VM enrollment post-migration
- Pre-migration compatibility checks (VM hardware version, OS support)
- Post-migration validation scripts (network, storage, app health)
- Azure Migrate integration for VMware vSphere source inventory

## Deployment Notes

- Requires access to VMware vSphere environment (read access for export)
- Cold migration requires a maintenance window (VM downtime during export/import)
- Azure Migrate integration requires Azure Migrate appliance in the vSphere environment
- Refer to the [azurelocal-vmware-migration](https://github.com/AzureLocal/azurelocal-vmware-migration) repo for migration runbooks and scripts

## Resources

- **Repository**: [azurelocal-vmware-migration](https://github.com/AzureLocal/azurelocal-vmware-migration)
- **Microsoft Docs**: [Migrate VMware VMs to Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/migrate/migration-options-overview)
- **Azure Migrate**: [VMware assessment](https://learn.microsoft.com/en-us/azure/migrate/migrate-appliance-architecture)

:::note Work in Progress
This page is a placeholder. Full documentation is tracked in [azurelocal-vmware-migration](https://github.com/AzureLocal/azurelocal-vmware-migration).
:::
