# Plan: Documentation Overhaul — SOFS for FSLogix on Azure Local

## TL;DR

Redesign the entire `docs/` site from scratch to serve the repo's primary purpose: **provide automation tools and deep technical guidance for deploying a production-ready SOFS on Azure Local for FSLogix profile containers.** The docs split into four areas: (1) pure design/architecture with zero script references, (2) per-tool automation deployment guides, (3) post-deployment configuration, and (4) operations/CI/CD. The standalone deployment guide (`reference/sofs-deployment-guide.md`) is a framework/resource for writing the docs — it is never linked to or surfaced to users.

---

## Core Principles

1. **Architecture = pure design.** No scripts. No tool names. No `config/variables.yml` references. Design rationale, decision criteria, capacity math, scenarios, and the "why" behind every choice.
2. **Deployment = automation-focused.** Separate page per tool (Terraform, Bicep, ARM, PowerShell, Ansible). Every tool produces a production-ready SOFS. Everything variable-driven, no hardcoded values.
3. **The deployment guide is invisible to users.** It is source material for writing the docs. Never link to it. Never tell users to read it. If content belongs in a docs page, put it there — duplication is fine.
4. **Variables are critical.** `reference/variables.md` and `config/variables.example.yml` must be 100% in sync. Deep coverage of how variables drive every decision and every phase.
5. **Real-world scenarios.** Small shop (5 users, personal VMs) vs. mid-size (200 users) vs. enterprise (2000 users, 50 pooled session hosts) — these drive different design decisions and different sizing.
6. **No thin provisioning.** Stressed everywhere — Azure Local host volumes AND guest S2D volumes.
7. **Azure Local storage is design, not automation.** The architecture docs cover storage volume creation in depth as a design decision. The automation tools assume storage is already carved out. Future automation for storage creation is planned.
8. **Badges.** Use shields.io badges for tool status (tested/untested/in-progress), run-on targets (Cluster Node, SOFS VM, Mgmt Workstation, Session Host), and tool identification — following the pattern from the standalone deployment guide.
9. **Follow the standards.** All content follows `docs/standards/` — IIC fictional identity, no contoso, script conventions, documentation formatting, etc.

---

## Existing Diagrams

Six draw.io architecture diagrams already exist in `docs/assets/diagrams/`. These must be used throughout the documentation — **do not recreate them**.

### Diagram Inventory

| File | Description | Used In |
|------|-------------|---------|
| `sofs-arch-1vol-base.drawio` | Base architecture: single host volume, 3 SOFS VMs, guest S2D pool | `architecture/overview.md`, `architecture/storage-design.md` |
| `sofs-arch-1vol-option-a.drawio` | Single host volume + Option A (single SMB share) | `architecture/storage-design.md`, `architecture/scenarios.md` |
| `sofs-arch-1vol-option-b.drawio` | Single host volume + Option B (three SMB shares: Profiles, ODFC, AppData) | `architecture/storage-design.md`, `architecture/scenarios.md` |
| `sofs-arch-3vol-base.drawio` | Base architecture: three host volumes (one per VM), guest S2D pool | `architecture/overview.md`, `architecture/storage-design.md` |
| `sofs-arch-3vol-option-a.drawio` | Three host volumes + Option A (single SMB share) | `architecture/storage-design.md`, `architecture/scenarios.md` |
| `sofs-arch-3vol-option-b.drawio` | Three host volumes + Option B (three SMB shares) | `architecture/storage-design.md`, `architecture/scenarios.md` |

### PNG Export Status

| File | PNG Exported? |
|------|---------------|
| `sofs-arch-3vol-option-b.drawio` | YES — `docs/assets/images/sofs-arch-3vol-option-b.png` |
| `sofs-arch-1vol-base.drawio` | **NO — needs export** |
| `sofs-arch-1vol-option-a.drawio` | **NO — needs export** |
| `sofs-arch-1vol-option-b.drawio` | **NO — needs export** |
| `sofs-arch-3vol-base.drawio` | **NO — needs export** |
| `sofs-arch-3vol-option-a.drawio` | **NO — needs export** |

### Diagram Usage in Documentation

- **`architecture/overview.md`** — Use both `*-base` diagrams (`sofs-arch-1vol-base` and `sofs-arch-3vol-base`) to show the two volume layout architectures side by side. The base diagrams show the end-to-end flow: Azure Local cluster → host volume(s) → SOFS VMs → guest S2D pool → SOFS role without committing to a specific share layout.
- **`architecture/storage-design.md`** — All 6 diagrams. The base pair illustrates host volume layout choice (single vs. three). The four option variants (1vol-option-a, 1vol-option-b, 3vol-option-a, 3vol-option-b) illustrate the host-volume × share-layout decision matrix.
- **`architecture/scenarios.md`** — Reference specific diagrams per scenario:
  - Scenario A (5-user): `sofs-arch-1vol-option-a` (single volume, single share)
  - Scenario B (200-user): `sofs-arch-3vol-option-a` (three volumes, single share)
  - Scenario C (2000-user): `sofs-arch-3vol-option-b` (three volumes, three shares)
- **`docs/index.md`** — Use `sofs-arch-3vol-option-b` as the hero diagram (most complete view of the architecture).

### Additional Diagrams to Create

Only create NEW diagrams for content that existing diagrams don't cover:

| # | File | Purpose | Used In |
|---|------|---------|---------|
| 1 | `sofs-deployment-phases.drawio` | 11 deployment phases with tool coverage overlay | `deployment/prerequisites.md`, `docs/index.md` |

All other architecture visualization needs are covered by the existing 6 diagrams.

---

## Gap Analysis: Current Docs vs. What's Needed

### What the deployment guide covers that the current docs DO NOT:

1. **Design decision framework** — host volume layout (single vs. three), guest volume layout (Option A vs. B), S2D resiliency choices, capacity planning with raw-to-usable ratios
2. **Detailed storage capacity planning** — stacked mirror math, per-layer calculations, raw footprint warnings, thin-provisioning dangers
3. **Complete 11-phase implementation walkthrough** — current `getting-started.md` has 5 generic steps with no real commands
4. **NTFS permissions model** — CREATOR OWNER, Domain Users modify-this-folder-only, full ACE breakdown
5. **Anti-affinity rules** — modern (`New-ClusterAffinityRule`) and legacy (`AntiAffinityClassNames`)
6. **S2D guest tuning** — HwTimeout, auto-replace disable
7. **Firewall requirements** — port tables for inter-SOFS and SOFS-to-session-host
8. **Cloud witness setup** — storage account creation, cluster quorum configuration
9. **FSLogix configuration detail** — Option A vs. B registry keys, ODFC containers, Cloud Cache, identity model
10. **Antivirus exclusions** — SOFS-side and session-host-side exclusions
11. **Validation and failover testing** — SMB CA verification, live migration failover test, anti-affinity verification
12. **Automation script inventory** — full mapping of each tool to phases

### What the current docs DO have that should be KEPT:

- CI/CD pipeline guide (`cicd-pipelines.md`) — good, move to new location
- Runner & agent setup (`runner-setup.md`) — good, move to new location
- Secrets management (`secrets-management.md`) — good, move to new location
- Contributing guidelines — keep
- Standards section — keep as-is
- Reference section — keep as-is

### What's MISSING entirely:

- AVD deployment considerations (identity model, personal vs. pooled, session host density impact on SOFS design)
- Real-world deployment scenarios with worked sizing examples
- Per-tool implementation guides
- Deep variable management documentation
- Antivirus exclusions as a standalone topic

---

## New Docs Site Structure

The current flat structure (`docs/architecture.md`, `docs/getting-started.md`, `docs/guides/*`) is replaced with a purpose-built hierarchy:

```
docs/
├── index.md                              # Home — what this repo does, quick nav
│
├── architecture/                         # ALL design — zero scripts, zero tools
│   ├── overview.md                       #   High-level architecture, stacked resiliency
│   ├── storage-design.md                 #   Host volumes, guest volumes, no thin provisioning
│   ├── capacity-planning.md              #   S2D mirror math, raw-to-usable calculations
│   ├── avd-considerations.md             #   Identity model, personal vs pooled, density, Cloud Cache
│   └── scenarios.md                      #   5-user, 200-user, 2000-user worked examples
│
├── deployment/                           # ALL automation — getting deployed
│   ├── prerequisites.md                  #   Infrastructure, licensing, AD/DNS, tooling
│   ├── variables.md                      #   Deep variable management — how config drives everything
│   ├── terraform.md                      #   Full Terraform implementation guide
│   ├── bicep.md                          #   Full Bicep implementation guide
│   ├── arm.md                            #   ARM implementation guide
│   ├── powershell.md                     #   PowerShell implementation guide
│   ├── ansible.md                        #   Ansible implementation guide
│   └── validation.md                     #   Post-deployment validation & testing
│
├── configuration/                        # Post-deploy config (session host side)
│   ├── fslogix.md                        #   Registry keys, GPO, Cloud Cache, profile sizing
│   ├── permissions.md                    #   NTFS ACL model, SMB share permissions
│   └── antivirus.md                      #   AV exclusions — SOFS nodes + session hosts
│
├── operations/                           # Day-2 / CI/CD / ops
│   ├── troubleshooting.md                #   Symptom → Diagnosis → Resolution by phase
│   ├── cicd-pipelines.md                 #   (keep existing content, move from guides/)
│   ├── runner-setup.md                   #   (keep existing content, move from guides/)
│   └── secrets-management.md             #   (keep existing content, move from guides/)
│
├── reference/                            # KEEP — standalone reference material
│   ├── variables.md                      #   Variable reference (must sync with variables.example.yml)
│   └── sofs-deployment-guide.md          #   Standalone deployment guide (unchanged)
│
├── standards/                            # KEEP as-is — no changes
│   ├── index.md
│   ├── scripts.md
│   ├── documentation.md
│   ├── solutions.md
│   ├── variables.md
│   └── examples.md
│
├── assets/
│   ├── diagrams/                         #   .drawio source files (6 existing + 1 new)
│   └── images/                           #   Exported PNGs (1 existing + 6 new exports)
│
├── contributing.md                       # KEEP as-is
└── roadmap.md                            # KEEP as-is
```

### MkDocs Nav

```yaml
nav:
  - Home: index.md
  - Architecture:
      - Overview: architecture/overview.md
      - Storage Design: architecture/storage-design.md
      - Capacity Planning: architecture/capacity-planning.md
      - AVD Considerations: architecture/avd-considerations.md
      - Deployment Scenarios: architecture/scenarios.md
  - Deployment:
      - Prerequisites: deployment/prerequisites.md
      - Variables: deployment/variables.md
      - Terraform: deployment/terraform.md
      - Bicep: deployment/bicep.md
      - ARM Templates: deployment/arm.md
      - PowerShell: deployment/powershell.md
      - Ansible: deployment/ansible.md
      - Validation: deployment/validation.md
  - Configuration:
      - FSLogix: configuration/fslogix.md
      - Permissions: configuration/permissions.md
      - Antivirus Exclusions: configuration/antivirus.md
  - Operations:
      - Troubleshooting: operations/troubleshooting.md
      - CI/CD Pipelines: operations/cicd-pipelines.md
      - Runner & Agent Setup: operations/runner-setup.md
      - Secrets Management: operations/secrets-management.md
  - Reference:
      - Variables: reference/variables.md
      - SOFS Deployment Guide: reference/sofs-deployment-guide.md
  - Standards:
      - Overview: standards/index.md
      - Scripts: standards/scripts.md
      - Documentation: standards/documentation.md
      - Solutions: standards/solutions.md
      - Variables: standards/variables.md
      - Examples: standards/examples.md
  - Roadmap: roadmap.md
  - Contributing: contributing.md
```

---

## File Inventory

### CREATE (14 new content files)

| # | File | Purpose |
|---|------|---------|
| 1 | `docs/architecture/overview.md` | High-level architecture, stacked resiliency, key components, design points. Embeds `sofs-arch-1vol-base` and `sofs-arch-3vol-base` diagrams. |
| 2 | `docs/architecture/storage-design.md` | Host volume layout (single vs. three), guest volume layout (Option A vs. B), no thin provisioning, guest S2D resiliency (two-way vs. three-way mirror). Embeds all 6 existing diagrams. |
| 3 | `docs/architecture/capacity-planning.md` | S2D mirror math methodology, raw-to-usable ratios, stacked calculation walkthrough, Azure Local Sizer reference |
| 4 | `docs/architecture/avd-considerations.md` | Identity model (AD domain join required), personal vs. pooled host pools impact, session host density, Cloud Cache for DR, network placement, sister repo cross-reference |
| 5 | `docs/architecture/scenarios.md` | Worked deployment scenarios: 5-user small shop, 200-user mid-size, 2000-user enterprise — each with design choices, sizing, variable values. Each scenario references its matching diagram. |
| 6 | `docs/deployment/prerequisites.md` | Infrastructure, licensing (critical), AD/DNS, tooling requirements, Azure RBAC. References `sofs-deployment-phases` diagram. |
| 7 | `docs/deployment/variables.md` | Deep variable management — how `config/variables.yml` drives every phase, how design decisions map to variables, tool-specific parameter file mapping |
| 8 | `docs/deployment/terraform.md` | Full Terraform implementation guide with badges |
| 9 | `docs/deployment/bicep.md` | Full Bicep implementation guide with badges |
| 10 | `docs/deployment/arm.md` | ARM implementation guide with badges |
| 11 | `docs/deployment/powershell.md` | PowerShell implementation guide with badges |
| 12 | `docs/deployment/ansible.md` | Ansible implementation guide with badges |
| 13 | `docs/deployment/validation.md` | Post-deployment validation, failover testing, anti-affinity verification |
| 14 | `docs/configuration/antivirus.md` | Antivirus exclusions — SOFS nodes (ClusterStorage, VHD/VHDX, cluster processes) + session hosts (FSLogix processes, mount points) |

### CREATE (1 new diagram)

| # | File | Purpose |
|---|------|---------|
| 15 | `docs/assets/diagrams/sofs-deployment-phases.drawio` | 11 phases with which tools cover which phases |

### EXPORT PNGs (5 existing diagrams need exports)

| # | Source | Export To |
|---|--------|-----------|
| 16 | `docs/assets/diagrams/sofs-arch-1vol-base.drawio` | `docs/assets/images/sofs-arch-1vol-base.png` |
| 17 | `docs/assets/diagrams/sofs-arch-1vol-option-a.drawio` | `docs/assets/images/sofs-arch-1vol-option-a.png` |
| 18 | `docs/assets/diagrams/sofs-arch-1vol-option-b.drawio` | `docs/assets/images/sofs-arch-1vol-option-b.png` |
| 19 | `docs/assets/diagrams/sofs-arch-3vol-base.drawio` | `docs/assets/images/sofs-arch-3vol-base.png` |
| 20 | `docs/assets/diagrams/sofs-arch-3vol-option-a.drawio` | `docs/assets/images/sofs-arch-3vol-option-a.png` |

(Item `sofs-arch-3vol-option-b.png` already exported.)

### MOVE + REWRITE (4 files)

| # | From | To | Changes |
|---|------|----|---------|
| 21 | — (new) | `docs/index.md` | Complete rewrite — hero diagram (`sofs-arch-3vol-option-b`), what this repo does, deployment workflow, links to all sections |
| 22 | — (new) | `docs/configuration/fslogix.md` | FSLogix registry keys (Option A/B), GPO deployment path, Cloud Cache configuration, ODFC containers, profile sizing, link to Ansible playbook |
| 23 | — (new) | `docs/configuration/permissions.md` | NTFS ACL model (each ACE explained), SMB share permissions, CA shares, SMB encryption, Option A vs. B differences |
| 24 | — (new) | `docs/operations/troubleshooting.md` | Symptom → Diagnosis → Resolution organized by deployment phase |

### MOVE (keep existing content, 3 files)

| # | From | To | Changes |
|---|------|----|---------|
| 25 | `docs/guides/cicd-pipelines.md` | `docs/operations/cicd-pipelines.md` | Move only, keep content |
| 26 | `docs/guides/runner-setup.md` | `docs/operations/runner-setup.md` | Move only, keep content |
| 27 | `docs/guides/secrets-management.md` | `docs/operations/secrets-management.md` | Move only, keep content |

### UPDATE (3 files)

| # | File | Changes |
|---|------|---------|
| 28 | `mkdocs.yml` | Replace nav with new structure |
| 29 | `docs/reference/variables.md` | Full sync with `config/variables.example.yml` — every variable documented, types, descriptions, defaults, phase consumption |
| 30 | `README.md` | Badges, updated documentation links, quick start pointing to new docs structure, sister repo links |

### SYNC (1 pair)

| # | Files | Action |
|---|-------|--------|
| 31 | `config/variables.example.yml` ↔ `docs/reference/variables.md` | Audit both, ensure 100% match. Add any missing design-decision variables (volume layout choice, mirror type, share model) to `variables.example.yml` if absent |

### DELETE (old structure)

| # | File/Folder | Reason |
|---|-------------|--------|
| 32 | `docs/architecture.md` | Replaced by `docs/architecture/` directory |
| 33 | `docs/getting-started.md` | Replaced by `docs/deployment/` directory |
| 34 | `docs/guides/` | Contents moved to `operations/`, `configuration/`, or `deployment/` |
| 35 | `docs/architecture.md.bak` | Cleanup working backup |
| 36 | `docs/getting-started.md.bak` | Cleanup working backup |

**Total: ~36 file operations (14 new content + 1 new diagram + 5 PNG exports + 4 rewrite + 3 move + 3 update + 1 sync + 5 delete)**

---

## Phase-by-Phase Implementation

### Phase 1: Architecture — `architecture/overview.md`

**Source material:** Deployment guide Part I introduction, Architecture Overview section. Microsoft S2D and SOFS documentation.

**Diagrams:** Embed `sofs-arch-1vol-base.png` and `sofs-arch-3vol-base.png` side by side (or stacked with comparison) to show both volume layout options at a glance. These are the "base" views — they show the full stack without committing to a share layout.

**Content — pure design, zero scripts:**

- What this solution is — 3-node SOFS guest cluster on Azure Local for FSLogix
- Architecture diagram section — embed the base diagrams with captions: "Figure 1: Single host volume layout" / "Figure 2: Three host volume layout (recommended)"
- Key design points table (VM specs, resiliency model, access point)
- Stacked resiliency concept — host-layer mirror + guest-layer mirror, defense in depth
- Component relationships — Azure Local cluster → host volumes → SOFS VMs → guest S2D pool → SOFS role → SMB shares → AVD session hosts
- Why a guest cluster (not using the Azure Local cluster's own SOFS)
- Anti-affinity — why each VM must be on a separate physical node
- Cloud witness — why Azure Storage Account is the right quorum model for a 3-node cluster
- Network architecture — port tables (inter-SOFS, SOFS-to-session-host), VLAN placement, SMB encryption
- Identity and authentication — AD domain join requirement, Kerberos auth flow, Hybrid Entra ID Join

### Phase 2: Architecture — `architecture/storage-design.md`

**Source material:** Deployment guide Host Volume Layout, Guest Volume Layout sections. Microsoft S2D documentation.

**Diagrams:** This page uses ALL 6 existing diagrams. Layout:

- Host volume section: `sofs-arch-1vol-base` vs. `sofs-arch-3vol-base` — side-by-side comparison showing single vs. three volume approach
- Guest share section — the 4 option variants organized as a 2×2 matrix:
  - Row 1: `sofs-arch-1vol-option-a` | `sofs-arch-1vol-option-b`
  - Row 2: `sofs-arch-3vol-option-a` | `sofs-arch-3vol-option-b`
- Each diagram gets a caption explaining the combination (e.g., "Three host volumes, Option B — recommended for 200+ users")

**Content — pure design:**

- **Azure Local host volume layout** — the first critical decision
  - Three volumes (one per VM) — recommended, fault isolation rationale. Reference `sofs-arch-3vol-base` diagram.
  - Single volume — when and why you'd choose this. Reference `sofs-arch-1vol-base` diagram.
  - Volume sizing tables
  - **No thin provisioning** — full explanation: pool full = all volumes die, defeats fault isolation, write-time allocation overhead during logon storms, misleading capacity reporting
- **Guest S2D resiliency** — the second critical decision
  - Two-way mirror — recommended, rationale
  - Three-way mirror — when maximum resiliency is required, the cost in raw capacity
  - Why `-NumberOfDataCopies 2` must be explicit (default is three-way on a 3-node cluster)
  - **No thin provisioning on guest S2D volumes either** — same reasons apply
- **Guest volume layout** — the third critical decision
  - Option A — single volume/share: when to use. Reference `*-option-a` diagrams.
  - Option B — three volumes/shares (Profiles, ODFC, AppData): when to use, NTFS metadata isolation, logon storm resilience, FSRM quotas, monitoring granularity, future migration path. Reference `*-option-b` diagrams.
  - Decision table by user count and density
  - 2×2 matrix diagram showing all four host-volume × share-layout combinations
- **S2D guest tuning** — HwTimeout increase for VM-hosted S2D, auto-replace disable

### Phase 3: Architecture — `architecture/capacity-planning.md`

**Source material:** Deployment guide Storage Capacity Design section. Azure Local Sizer.

**Content — pure design:**

- Stacked mirror math methodology — how to calculate from usable space → guest S2D raw → per-VM disks → Azure Local volumes → Azure Local raw physical
- Two-way mirror calculation walkthrough
- Three-way mirror calculation walkthrough
- Comparison table
- Raw-to-usable ratios (4.5:1 for two-way, 6.2:1 for three-way)
- Data disk dynamic provisioning — day-one vs. ceiling consumption
- Growth headroom planning (10% buffer recommendation)
- Link to Azure Local Sizer (Odin) for customer-specific calculations
- Guidance on how to apply this to different user counts (feeds into scenarios.md)

### Phase 4: Architecture — `architecture/avd-considerations.md`

**Source material:** Deployment guide "Considerations for AVD Deployment" section. Microsoft AVD documentation.

**Content — pure design:**

- **What you're designing for** — this SOFS exists to serve FSLogix profiles to AVD session hosts running on Azure Local
- **Identity model** — AD domain join required for Azure Local. Pure Entra ID join not supported for Arc VMs. Kerberos auth flow: session host → SOFS. Hybrid Entra ID Join for AVD gateway SSO
- **Personal vs. pooled host pools** — how this affects SOFS design:
  - Personal desktops: persistent profiles, larger VHDs, fewer users per host, low logon storm risk
  - Pooled: non-persistent, FSLogix is critical, smaller VHDs but more churn, high logon storm risk
- **Session host density impact** — 20-50 users per pooled session host = massive concurrent logon storms. Drives the case for Option B (split shares)
- **How FSLogix maps users to shares** — VHDLocations, filter driver, per-user VHDX creation, SID folder naming. Explains why the NTFS permissions model matters
- **Cloud Cache for DR** — SOFS as primary, Azure Blob/Files as secondary. Local cache on session host. Session continuity during SOFS outage. Connection string format
- **Profile sizing guidance** — 30 GB default, Outlook OST impact, OneDrive cache, Teams cache. How this feeds back into capacity planning
- **Network placement** — session hosts and SOFS on same VLAN for latency
- **Sister repo** — [AzureLocal/aurelocal-avd](https://github.com/AzureLocal/aurelocal-avd) handles session host deployment. That repo will cross-reference back here for SOFS-based FSLogix profile storage

### Phase 5: Architecture — `architecture/scenarios.md`

**Source material:** Calculated from capacity planning methodology. Research needed for FSLogix profile sizing in real-world workloads.

**Diagrams:** Each scenario references its matching architecture diagram so users can see exactly what their deployment will look like:

- Scenario A → embed `sofs-arch-1vol-option-a.png`
- Scenario B → embed `sofs-arch-3vol-option-a.png`
- Scenario C → embed `sofs-arch-3vol-option-b.png`

**Content — pure design:**

- **Scenario A: Small shop** — 5 users, personal VMs, all on 1 host pool
  - Architecture diagram: `sofs-arch-1vol-option-a` (single host volume, single share)
  - Do you even need a full 3-node SOFS? (Answer: for HA, yes, but with simpler design choices)
  - Single host volume, two-way mirror, Option A single share
  - Target usable capacity, worked calculation, raw physical footprint
  - Variable values summary for this scenario
- **Scenario B: Mid-size** — 200 users, pooled session hosts, ~10 session hosts
  - Architecture diagram: `sofs-arch-3vol-option-a` (three host volumes, single share)
  - Three host volumes, two-way mirror, Option A or B depending on Outlook/Teams usage
  - Worked sizing
- **Scenario C: Enterprise** — 2000 users, 20-50 pooled session hosts, multiple host pools
  - Architecture diagram: `sofs-arch-3vol-option-b` (three host volumes, three shares)
  - Three host volumes, two-way mirror, Option B split shares
  - Logon storm analysis, IOPS considerations
  - Worked sizing showing the full capacity stack
- Each scenario: design choices → reasoning → capacity math → expected `variables.yml` values

### Phase 6: Deployment — `deployment/prerequisites.md`

**Source material:** Deployment guide Prerequisites section.

**Diagrams:** Reference `sofs-deployment-phases.drawio` (new) to show the 11-phase deployment workflow and where prerequisites fit.

**Content:**

- Infrastructure requirements (Azure Local cluster, 3+ physical nodes, raw capacity)
- **Licensing** — critical section currently missing from docs entirely. Windows Server 2025 Datacenter: Azure Edition Core required. Guest licensing rights nuance.
- Active Directory and DNS requirements, pre-staging cluster CNO and SOFS access point
- Tooling requirements per automation tool
- Azure RBAC permissions
- Azure Local storage volumes must already be provisioned (link back to architecture/storage-design.md for the design, note that future automation for volume creation is planned)

### Phase 7: Deployment — `deployment/variables.md`

**Source material:** `config/variables.example.yml`, `reference/variables.md`, `standards/variables.md`.

**Content:**

- Central config model — `config/variables.yml` is the single source of truth
- How to create your config: `cp config/variables.example.yml config/variables.yml`
- Section-by-section walkthrough of every variable group with explanation of how design decisions map to variable values
- Key Vault URI pattern for secrets — `keyvault://` format, resolution, never hardcode
- How each automation tool maps from central config to its own parameter file (Terraform tfvars, Bicep bicepparam, ARM parameters.json, Ansible inventory)
- Compatibility shim for legacy config format
- Which variables must change per the design decisions (volume layout, mirror type, share model) — cross-referenced to architecture sections

### Phase 8: Deployment — Per-tool implementation guides (5 files)

**Source material:** Each `src/<tool>/README.md`, deployment guide Part II, actual automation code.

**Each guide follows the same structure:**

1. Badge bar (tool, status: tested/untested/in-progress, run-on target)
2. Overview — what this tool creates/configures
3. Prerequisites specific to this tool
4. Resources created (table)
5. File inventory (table)
6. Variable/parameter file setup — how central config maps to this tool's params
7. Step-by-step deployment (dry run → plan → apply/deploy)
8. Post-deployment — what to do after this tool finishes (link to next phase or guest configuration tool)
9. All deployment decision combinations supported (single/three volumes, two/three-way mirror, Option A/B) driven by variables
10. Common issues specific to this tool

**Files:**

- `deployment/terraform.md` — `azapi` + `azurerm` providers, auto-generated Ansible inventory, end-to-end with `Deploy-SOFS.ps1`
- `deployment/bicep.md` — subscription-scope deployment, `Deploy-SOFS-Azure.ps1` wrapper
- `deployment/arm.md` — legacy JSON templates, `az deployment sub create`
- `deployment/powershell.md` — Azure CLI wrapper scripts + guest configuration via `Configure-SOFS-Cluster.ps1`
- `deployment/ansible.md` — `deploy-azure-resources.yml` + `configure-sofs-cluster.yml`, WinRM/Kerberos

### Phase 9: Deployment — `deployment/validation.md`

**Source material:** Deployment guide Phase 11, `Test-SOFSDeployment.ps1`.

**Content:**

- Automated validation — `Test-SOFSDeployment.ps1` with actual parameters
- Manual validation steps:
  - SOFS share accessibility (`Test-Path`)
  - SMB share settings verification (CA, CachingMode, ScopeName)
  - Failover testing — drain a node, verify session continuity
  - Anti-affinity rule verification
  - S2D health check
- Interpreting validation script output
- What to do if validation fails (link to troubleshooting)

### Phase 10: Configuration (3 files)

**Source material:** Deployment guide Phase 9 (NTFS), Phase 10 (AV), "Considerations for AVD Deployment" (FSLogix).

- `configuration/fslogix.md` — How FSLogix maps users to shares, Option A registry keys, Option B registry keys (Profile + ODFC + AppData), GPO deployment path, Cloud Cache configuration with connection strings, profile sizing guidance, link to Ansible playbook `configure-fslogix.yml`
- `configuration/permissions.md` — SMB share permissions (Full Access admins, Change for Domain Users, ABE), NTFS ACL model with each ACE explained and WHY, Option A vs. B application, SMB encryption, CA share requirement
- `configuration/antivirus.md` — SOFS node exclusions (ClusterStorage path, VHD/VHDX extensions, cluster processes), session host exclusions (FSLogix processes, mount points, VHD/VHDX), why AV interference causes profile corruption

### Phase 11: Operations — `operations/troubleshooting.md`

**Source material:** Deployment guide troubleshooting content scattered across all phases.

**Content organized by phase:**

- Phase 1 failures (volume creation, storage path errors)
- Phase 2 failures (VM provisioning, disk attachment)
- Phase 3 failures (anti-affinity rule issues)
- Cluster validation failures
- S2D enable/tuning failures (timeout, disk not clean)
- SOFS role failures (AD permissions, DNS)
- SMB share failures (CA not enabled, wrong scope)
- Permission failures (NTFS ACL wrong, SMB access denied)
- FSLogix profile issues (VHD mount fails, profile corruption, slow logon)
- Network/firewall issues (SMB not reachable, WinRM timeouts)
- Antivirus interference
- Capacity issues (volume full, S2D pool degraded)
- Each entry: Symptom → Diagnosis steps → Resolution

### Phase 12: Move existing operations guides

Move without content changes:

- `docs/guides/cicd-pipelines.md` → `docs/operations/cicd-pipelines.md`
- `docs/guides/runner-setup.md` → `docs/operations/runner-setup.md`
- `docs/guides/secrets-management.md` → `docs/operations/secrets-management.md`

### Phase 13: Variables sync

- Audit `config/variables.example.yml` section by section against `docs/reference/variables.md`
- Ensure every variable is documented: name, type, description, default, which phases use it
- Ensure variable names match exactly
- Add missing design-decision variables if absent from `variables.example.yml`:
  - `azure_local.volume_layout` (single / three)
  - `s2d.data_copies` (already exists, verify)
  - `sofs.share_layout` (single / split — if not present)
- Update phase consumption matrix in `reference/variables.md`

### Phase 14: `index.md`, `README.md`, `mkdocs.yml`

**Diagrams:** `index.md` uses `sofs-arch-3vol-option-b.png` as the hero/overview diagram — it shows the most complete architecture (three volumes, three shares) and gives users an immediate visual understanding of what this repo deploys.

- `index.md` — Hero diagram (`sofs-arch-3vol-option-b`), "What This Repo Does", two-phase deployment workflow, links to Architecture → Deployment → Configuration → Operations, "New to SOFS?" callout, sister repo link
- `README.md` — Badges (build, MkDocs, license), overview, quick start pointing to docs site, documentation section with links to all major pages, sister repo link, fix any broken paths
- `mkdocs.yml` — Full nav with all new pages (as shown above)

### Phase 15: Diagram work

**Export PNGs from existing draw.io files:**

1. `sofs-arch-1vol-base.drawio` → `sofs-arch-1vol-base.png`
2. `sofs-arch-1vol-option-a.drawio` → `sofs-arch-1vol-option-a.png`
3. `sofs-arch-1vol-option-b.drawio` → `sofs-arch-1vol-option-b.png`
4. `sofs-arch-3vol-base.drawio` → `sofs-arch-3vol-base.png`
5. `sofs-arch-3vol-option-a.drawio` → `sofs-arch-3vol-option-a.png`

(`sofs-arch-3vol-option-b.png` already exists.)

**Create new diagram:**

6. `sofs-deployment-phases.drawio` — 11 deployment phases as a flow, with tool coverage overlay (Terraform covers phases X-Y, Ansible covers phases A-B, etc.)

Export to `sofs-deployment-phases.png`.

> **Note:** PNG exports can be done via draw.io desktop app or VS Code draw.io extension. This is a manual step unless CI/CD exports are configured.

### Phase 16: Cleanup

- Delete old `docs/architecture.md`, `docs/getting-started.md`
- Delete `docs/guides/` directory (all contents moved)
- Delete `.bak` files
- Verify no broken links remain

---

## Relevant Source Material

### Primary source (framework only — never link to):
- `docs/reference/sofs-deployment-guide.md` — 1,482 lines covering design, 11-phase implementation, and reference tables

### Existing diagrams (USE — do not recreate):
- `docs/assets/diagrams/sofs-arch-1vol-base.drawio` — Single-volume base architecture
- `docs/assets/diagrams/sofs-arch-1vol-option-a.drawio` — Single-volume, Option A
- `docs/assets/diagrams/sofs-arch-1vol-option-b.drawio` — Single-volume, Option B
- `docs/assets/diagrams/sofs-arch-3vol-base.drawio` — Three-volume base architecture
- `docs/assets/diagrams/sofs-arch-3vol-option-a.drawio` — Three-volume, Option A
- `docs/assets/diagrams/sofs-arch-3vol-option-b.drawio` — Three-volume, Option B
- `docs/assets/images/sofs-arch-3vol-option-b.png` — Exported PNG (only one currently)

### Standards (must follow):
- `docs/standards/index.md` — IIC fictional identity, naming conventions
- `docs/standards/documentation.md` — MkDocs formatting, style guide
- `docs/standards/scripts.md` — PowerShell, Ansible, Azure CLI conventions
- `docs/standards/solutions.md` — IaC template conventions
- `docs/standards/variables.md` — Central config structure, naming rules, Key Vault patterns

### Existing automation tool READMEs (reference for deployment guides):
- `src/terraform/README.md` — Status: Tested
- `src/bicep/README.md` — Status: In Progress
- `src/arm/README.md` — Status: Untested
- `src/powershell/readme.md`
- `src/ansible/README.md` — Status: Untested

### Existing good content to KEEP (move only):
- `docs/guides/cicd-pipelines.md`
- `docs/guides/runner-setup.md`
- `docs/guides/secrets-management.md`

### Configuration files:
- `config/variables.example.yml` — central config template
- `docs/reference/variables.md` — variable reference (must sync)

### CI/CD examples:
- `examples/pipelines/github-actions/` — 4 deploy examples
- `examples/pipelines/azure-devops/` — 4 deploy examples
- `examples/pipelines/gitlab/` — 4 deploy examples
- `examples/configs/` — production + staging example configs
- `examples/secrets/` — per-platform secrets management guides

---

## Verification

1. `mkdocs build --strict` passes — no broken links, no orphaned pages, no missing nav entries
2. **`architecture/` contains zero script references, zero tool names, zero `config/` paths** — pure design
3. Every automation tool in `src/` has its own deployment guide under `deployment/`
4. `reference/variables.md` and `config/variables.example.yml` are 100% in sync
5. Scenarios cover small (5 users), mid (200 users), and enterprise (2000 users) with worked capacity math
6. No docs page links to or references the standalone deployment guide as user-facing content
7. All 6 existing draw.io diagrams have exported PNGs in `docs/assets/images/`
8. Each architecture page references the correct diagrams with proper image embeds and captions
9. The new `sofs-deployment-phases.drawio` diagram exists and is embedded in prerequisites and index pages
10. Badges used consistently across deployment guides (status, tool, run-on target)
11. User journey works: Home → Architecture → Scenarios → Prerequisites → Variables → Pick Your Tool → Deploy → Configuration → Validation → Operations
12. All design decision combinations (volume layout × mirror type × share model) are represented in the docs and supported by variable configuration
13. No thin provisioning warnings appear in both `architecture/storage-design.md` and anywhere volumes are discussed
14. Every `examples/` directory is referenced from the docs
15. Standards compliance — IIC fictional identity used everywhere, no contoso

---

## Decisions

- **Complete docs restructure** — The old flat `docs/guides/` structure is replaced entirely. Only `reference/` and `standards/` are kept.
- **Deployment guide is a framework** — Content is extracted and rewritten for the docs. The guide stays in `reference/` as a standalone document but is not linked from user-facing pages.
- **Content duplication is fine** — If content from the deployment guide belongs in a docs page, put it there. Self-contained pages are more valuable than cross-references.
- **Per-tool deployment guides** — One page per tool (Terraform, Bicep, ARM, PowerShell, Ansible) rather than a single tabbed page. Each tool's guide is comprehensive enough to stand alone.
- **Architecture is sacred** — Zero implementation details. A reader should be able to understand the entire design without knowing which automation tool they'll use.
- **Azure Local storage = prerequisite, not automated (yet)** — Storage volume creation is design content in `architecture/storage-design.md`. The automation assumes volumes are already provisioned. Future scripts for volume creation are planned but out of scope for this overhaul.
- **Use existing draw.io diagrams** — Six architecture diagrams already exist covering all host-volume × share-layout combinations. Use them; don't recreate. Only create one new diagram for deployment phases.
- **draw.io for diagrams** — Source files in `.drawio` format, exported PNGs for embedding. Not Mermaid (except existing Mermaid in kept files).

---

## Future Considerations (Out of Scope)

1. **Azure Local storage automation** — Scripts to create host volumes based on design decisions. Planned for future, not part of this documentation overhaul.
2. **Day-2 operations guide** — Monitoring, alerting, capacity expansion, disk replacement, cluster maintenance. Valuable addition after core docs are complete.
3. **Per-tool README audit** — Each `src/<tool>/README.md` should be reviewed to link back to the MkDocs site. Follow-on task.
4. **Sister repo cross-link** — `aurelocal-avd` docs should link to SOFS for FSLogix configuration. Track separately.

---

## Git Workflow

1. Work on branch `docs/issue-46-documentation-overhaul` (already exists)
2. Phase-by-phase commits with descriptive messages
3. Push branch when all phases complete
4. Create PR for review
5. After merge, switch to `main` and sync
