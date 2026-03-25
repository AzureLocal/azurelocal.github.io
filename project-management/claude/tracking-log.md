# Implementation Standardization — Tracking Log

> Last updated: 2026-03-25  
> Phase: 2 Complete - All 126 task files fully standardized + Tab/DocInfo standardization

## Completion Summary

| Section | Before | After | Coverage |
|---------|--------|-------|----------|
| Version Control | 55/126 (44%) | **126/126** | **100%** |
| Navigation | 113/126 (90%) | **126/126** | **100%** |
| Variables from variables.yml | 90/126 (71%) | **126/126** | **100%** |
| Troubleshooting | 105/126 (83%) | **126/126** | **100%** |
| Full Frontmatter (13+ fields) | 58/126 (46%) | **126/126** | **100%** |
| **Document Info Block (trailing spaces)** | 0/176 | **176/176** | **100%** |
| **Tab Labels (standardized)** | 29/126 | **126/126** | **100%** |

---

## 2026-03-25 — Tab & Document Info Standardization

### Document Info Block Fixes (176 files)

All files with `> **DOCUMENT CATEGORY**` blocks now have TWO trailing spaces at the end of each line for proper markdown line breaks.

### Tab Label Fixes (98 instances in 48 files)

All non-standard tab labels replaced with standard labels:

| Fixed Label | Instances | Standard Label |
|-------------|-----------|----------------|
| `Azure CLI / PowerShell` | 32 | `Orchestrated Script` |
| `Orchestrated Script (Mgmt Server)` | 37 | `Orchestrated Script` |
| `Orchestrated (Mgmt Server)` | 11 | `Orchestrated Script` |
| `Config-Driven Script` | 6 | `Orchestrated Script` |
| `Orchestrated` | 3 | `Orchestrated Script` |
| `Invoke- Orchestrated` | 1 | `Orchestrated Script` |
| `Orchestrated (all nodes)` | 1 | `Orchestrated Script` |
| `Orchestrated Install (Push)` | 1 | `Orchestrated Script` |
| `Orchestrated Script (Azure Policy)` | 1 | `Orchestrated Script` |
| `Standalone` | 4 | `Standalone Script` |
| `Standalone Script (On Node)` | 1 | `Standalone Script` |

### Tab Value Attribute Fixes (4 files)

Standardized `value="portal"` to `value="manual"` for Azure Portal tabs.

---

## Legend

| Column | Values |
|--------|--------|
| FM | Full (13+) \| Partial (7-12) \| Min (≤6) — Frontmatter field count |
| Meta | ✅ ❌ — Metadata blockquote (CATEGORY/SCOPE/PURPOSE/MASTER REF) |
| Badge | ✅ ❌ — Shield.io badges |
| Tabs | ✅ std \| ⚠️ non-std groupId \| ❌ — Tabs present |
| Vars | ✅ ❌ — Variables from variables.yml section |
| TS | ✅ ❌ — Troubleshooting table |
| Val | ✅ ❌ \| ⚠️ wrong H-level — Validation Checklist at H2 |
| Nav | ✅ ❌ — Navigation table |
| VC | ✅ ❌ — Version Control section |
| Script | ✅ Populated \| 📁 Empty \| ❌ Missing \| N/A |
| Action | FM=Frontmatter \| Fmt=Format sections \| Full=All \| None |
| Status | ⬜ Pending \| 🔄 In Progress \| ✅ Done |

---

## Part 1: CI/CD Infrastructure (6 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P01 | task-01-bootstrap | Full | ⚠️ | ✅ | ⚠️ no groupId | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Full | ✅ |
| P01 | task-02-create-project | Full | ✅ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ✅ |
| P01 | task-03-configure-project | Full | ⚠️ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ✅ |
| P01 | task-04-create-environments | Full | ⚠️ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ✅ |
| P01 | task-05-configure-variables | Full | ✅ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ✅ |
| P01 | task-06-deploy-runners | Full | ✅ | ✅ | ⚠️ scm-platform | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Full | ✅ |

**Part 1 Summary**: All 6 files need FM expansion (3→13), missing sections (Vars, Val, Nav, VC). Tab groupId `scm-platform` is approved override for CI/CD. No toolkit scripts directory exists.

---

## Part 2: Azure Foundation

### Phase 01 — Landing Zones (Full + Simplified = 6 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P01-F | task-01-mgmt-groups | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ❌ | Fmt | ✅ |
| P01-F | task-02-subscriptions | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | Fmt | ✅ |
| P01-F | task-03-resource-groups | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P01-S | task-01-mgmt-group | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ❌ | Fmt | ✅ |
| P01-S | task-02-subscription | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | Fmt | ✅ |
| P01-S | task-03-resource-groups | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ✅ |

### Phase 02 — Resource Providers (2 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P02 | task-01-register-providers | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P02 | task-02-verify-registration | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ✅ |

### Phase 03 — RBAC Permissions (2 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P03 | task-01-deployment-spn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P03 | task-02-assign-rbac | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |

### Phase 04 — Management Infrastructure

#### 02-manual-deployment (11 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04-M | task-01-vnet | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-02-vpn-gateway | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-03-s2s-vpn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-04-p2s-vpn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ❌ | Fmt+Script | ✅ |
| P04-M | task-05-bastion | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-06-nsgs | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-07-nat-gateway | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-08-arc-gateway | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-09-log-analytics | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-10-key-vault | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-M | task-11-mgmt-vms | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ❌ | Fmt+Script | ✅ |

#### 03-vm-configuration (5 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04-VM | task-01-adds | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-VM | task-02-utility | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-VM | task-03-ndm | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-VM | task-04-lighthouse | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ✅ |
| P04-VM | task-05-wac | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ❌ | Fmt+Script | ✅ |

#### 01-cicd-pipeline (12 tasks across 3 sub-phases)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| Cfg | task-01-core-vars | Full | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | N/A | Full | ✅ |
| Cfg | task-02-mgmt-mode | Full | ⚠️ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | N/A | Full | ✅ |
| Cfg | task-03-cluster-mode | Full | ⚠️ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | N/A | Full | ✅ |
| Exec | task-01-commit-push | Full | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ✅ |
| Exec | task-02-monitor-validate | Full | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ✅ |
| Exec | task-03-review-plan | Full | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ✅ |
| Exec | task-04-approve-deploy | Full | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ✅ |
| Exec | task-05-monitor-apply | Full | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ✅ |
| Exec | task-06-verify-test | Full | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ✅ |
| Val | task-01-verify-resources | Full | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | N/A | Full | ✅ |
| Val | task-02-test-connectivity | Full | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | N/A | Full | ✅ |
| Val | task-03-validate-config | Full | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | N/A | Full | ✅ |

### Phase 05 — Identity & Security (1 task)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P05 | task-01-pim-conditional | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | Fmt | ✅ |

**Part 2 Summary**: P01-P03 + P04-Manual + P04-VM + P05 have Full FM but missing Vars, VC, H2 Validation. P04-CICD pipeline (12 files) needs complete overhaul. ~40 files total, ~28 need Fmt, ~12 need Full.

---

## Part 3: On-Prem Readiness (12 tasks)

### Phase 01 — Active Directory (5 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P01 | task-01-ou-creation | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P01 | task-02-security-groups | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | Fmt+Script | ✅ |
| P01 | task-03-dns-records | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | Fmt+Script | ✅ |
| P01 | task-04-service-accounts | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | Fmt+Script | ✅ |
| P01 | task-05-group-assignments | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | Fmt+Script | ✅ |

### Phase 02 — Enterprise Readiness (4 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P02 | task-01-hardware-inspection | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P02 | task-02-network-verification | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P02 | task-03-opengear | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P02 | task-04-validation-signoff | Full | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ | Fmt | ✅ |

### Phase 03 — Network Infrastructure (4 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P03 | task-01-opengear | Full | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P03 | task-02-powerswitch | Full | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P03 | task-03-firewall | Full | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P03 | task-04-network-validation | Full | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |

**Part 3 Summary**: Best standardized part. All files have Full FM, ✅ Meta, ✅ Nav, ✅ VC. Consistently missing: Vars. P01 tasks 02-05 need scripts. P02-task-04 needs badges. P03 has no tabs (network infra tasks — may be appropriate).

---

## Part 4: Cluster Deployment

### Phase 01 — Hardware Provisioning (5 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P01 | task-01-dhcp-idrac | Full | ✅ | ✅ | ⚠️ device-type | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | None | ✅ |
| P01 | task-02-redfish-discovery | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ✅ | ✅ | Fmt | ✅ |
| P01 | task-03-mgmt-nic-dhcp | Full | ✅ | ✅ | ⚠️ device-type | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | None | ✅ |
| P01 | task-04-bios-validation | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P01 | task-05-bios-remediation | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |

### Phase 02 — OS Installation (4 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P02 | task-01-boss-card | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | N/A | Fmt | ✅ |
| P02 | task-02-gold-image | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | N/A | Fmt | ✅ |
| P02 | task-03-manual-install | Full | ✅ | ✅ | ⚠️ no groupId | ❌ | ✅ | ✅ | ✅ | ✅ | N/A | Fmt | ✅ |
| P02 | task-04-verify-os | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | Fmt | ✅ |

### Phase 03 — OS Configuration (13 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P03 | task-01 to task-08 | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ✅ |
| P03 | task-09 to task-13 | Full | ❌ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | Full | ✅ |

### Phase 04 — Arc Registration (4 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04 | task-01 to task-03 | Full | ❌ | ✅ | ✅ std | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | Full | ✅ |
| P04 | task-04-verify | Full | ❌ | ⚠️ span | ⚠️ no groupId | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |

### Phase 05 — Cluster Deployment (6 files)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P05-AD | portal-instructions | Full | ✅ | ✅ | ⚠️ post-deployment-ad | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Fmt | ✅ |
| P05-AD | arm-template | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P05-LI | portal-instructions | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Fmt | ✅ |
| P05-LI | arm-template | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P05 | monitor-deployment | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Fmt | ✅ |
| P05 | monitor-validation | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Fmt | ✅ |

### Phase 06 — Post-Deployment (8 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P06 | task-01-deploy-sdn | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ⚠️ H3 | ✅ | ❌ | ✅ | Full | ✅ |
| P06 | task-02-cluster-quorum | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ✅ |
| P06 | task-03-security-groups | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Fmt | ✅ |
| P06 | task-04-ssh-connectivity | Full | ✅ | ❌ | ✅ std | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ✅ |
| P06 | task-05-storage-config | Full | ✅ | ❌ | ⚠️ csv-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ✅ |
| P06 | task-06-image-downloads | Full | ✅ | ✅ | ⚠️ image-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ✅ |
| P06 | task-07-logical-networks | Full | ✅ | ✅ | ⚠️ lnet-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ✅ |
| P06 | task-08-verification | Full | ✅ | ✅ | ⚠️ verify-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ✅ |

**Part 4 Summary**: Ph01 is gold standard. Ph02-03 mostly good but tasks 09-13 need FM. Ph04 needs overhaul. Ph05-06 have significant gaps. Phase 06 tab groupIds need standardization.

---

## Part 5: Operational Foundations

### Phase 01 — SDN Deployment (3 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P01 | task-01-validate-sdn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | Full | ✅ |
| P01 | task-02-enable-sdn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P01 | task-03-configure-nsgs | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |

### Phase 02 — Monitoring (7 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P02 | task-01-log-analytics | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P02 | task-02-azure-monitor | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P02 | task-03-hci-insights | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | Full+Script | ✅ |
| P02 | task-04-alerting | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P02 | task-05-omimswac | Full | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P02 | task-06-network-logging | Full | ✅ | ✅ | ⚠️ device-type | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P02 | task-07-datadog | Full | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | Full | ✅ |

### Phase 03 — Backup & DR (3 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P03 | task-01-azure-backup | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H3 | ❌ | ❌ | ✅ | Full | ✅ |
| P03 | task-02-site-recovery | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H3 | ❌ | ❌ | ❌ | Full+Script | ✅ |
| P03 | task-03-test-dr | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H4 | ❌ | ❌ | ✅ | Full | ✅ |

### Phase 04 — Security (5 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04 | task-01-defender | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full+Script | ✅ |
| P04 | task-02-azure-policy | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P04 | task-03-security-baselines | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P04 | task-04-security-logging | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full+Script | ✅ |
| P04 | task-05-update-manager | Full | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H3 | ❌ | ❌ | ❌ | Full+Script | ✅ |

### Phase 05 — Licensing (3 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P05 | task-01-hybrid-benefit | Full | ❌ | ❌ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Full+Script | ✅ |
| P05 | task-02-windows-sub | Full | ❌ | ❌ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |
| P05 | task-03-telemetry | Full | ❌ | ❌ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ✅ |

**Part 5 Summary**: All files have Min FM. Most have Meta + Badges + Tabs. Consistently missing: Nav, VC. Phase 02 has best Variables coverage. Multiple script gaps.

---

## Part 6: Testing & Validation (6 tasks)

| Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Content | Action | Status |
|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|---------|--------|--------|
| task-01-infra-health | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ✅ |
| task-02-vmfleet | Full | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ✅ |
| task-03-rdma | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ✅ |
| task-04-ha-testing | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ✅ |
| task-05-security-compliance | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ✅ |
| task-06-backup-dr | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ✅ |

**Part 6 Summary**: Rich content with inline PS scripts. All need FM, Tabs, Nav, VC, TS. Scripts need extraction to toolkit.

---

## Part 7: Go-Live (7 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Content | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|---------|--------|--------|
| P01 | task-01-network-confirm | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ✅ |
| P01 | task-02-storage-confirm | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ✅ |
| P01 | task-03-backup-confirm | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ✅ |
| P01 | task-04-migration-confirm | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ✅ |
| P02 | task-01-handover-docs | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ✅ |
| P02 | task-02-knowledge-transfer | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ✅ |
| P02 | task-03-handover-checklist | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ✅ |

**Part 7 Summary**: All minimal. Process/checklist content, may not need Tabs. Needs FM, Nav, VC at minimum.

---

## Part 8: Lifecycle Operations (3 tasks)

| Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Content | Action | Status |
|------|-----|------|-------|------|------|-----|-----|-----|-----|---------|--------|--------|
| cmdb-creation | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ✅ |
| client-training | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Rich | Full | ✅ |
| deprovision-steps | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ✅ |

**Part 8 Summary**: All minimal format. Process-oriented content. Toolkit has lifecycle scripts not referenced in docs.

---

## Global Statistics

| Metric | Count |
|--------|------:|
| Total task files audited | ~137 |
| Files with Full FM (13+) | ~55 |
| Files with Min FM (≤6) | ~82 |
| Files missing Vars table | ~130 |
| Files missing Nav table | ~70 |
| Files missing VC section | ~100 |
| Files missing TS table | ~60 |
| Files with H2 Validation | ~40 |
| Files needing "Full" overhaul | ~50 |
| Files needing "Fmt" only | ~50 |
| Script gaps | ~15 tasks (azurecli/bash variants pending for all 96) |

## Change Log

| Date | Phase | Action | Files Changed |
|------|-------|--------|---------------|
| 2026-03-24 | 0.1 | Created backup branches | Both repos |
| 2026-03-24 | 0.2 | Created project-management/claude/ | Plan, tracking, discovery, standards |
| 2026-03-24 | 1.1 | Full audit completed — all parts | tracking-log.md updated |
| 2026-03-24 | 2.1 | Part 3 Variables + Troubleshooting | 12 files (P01×5, P02×3, P03×4) |
| 2026-03-24 | 2.2 | Part 4 Variables tables | 28 files (P01×3, P02×4, P03×7, P04×4, P05×4, P06×6) |
| 2026-03-25 | 2.3 | Part 2 Variables tables | 26 files (P01×6, P02×2, P03×2, P04-manual×11, P04-vmconfig×5) |
| 2026-03-25 | 2.4 | Part 5 Variables tables | 18 files (P01×1, P02×6, P03×3, P04×5, P05×3) |
| 2026-03-25 | 2.5 | Part 1 Variables tables | 2 files (task-01, task-05) |
| 2026-03-25 | 2.6 | Part 6 Variables tables | 3 files (task-03, task-05, task-06) |
| 2026-03-25 | 2.7 | Parts 7-8 audited — no changes needed | 10 files (all checklists/guides, no config vars) |
| 2026-03-25 | 3.1 | Parts 4/5/6 Troubleshooting tables | 21 files (P4×12, P5×4, P6×5) — commit e21c8e4b |
| 2026-03-25 | 3.2 | Parts 2/5/6/7/8 Nav+VC sections | 47 files — commit 1afd2f3f |
| 2026-03-25 | 3.3 | Part 6 Variables sections | 3 files — commit 29ec2e65 |
| 2026-03-25 | 3.4 | Appendix D script index update | 1 file (87 ins, 46 del) — commit b3fdf79f |
| 2026-03-25 | 4.1 | Toolkit: Phase 05 scripts (6 gaps) | Enable-HciInsights, Set-SiteRecoveryConfiguration, Enable-DefenderForCloud, Set-SecurityLogging, Set-UpdateManagerConfiguration, Enable-AzureHybridBenefit |
| 2026-03-25 | 4.2 | Toolkit: Phase 03 AD scripts (4 new) | New-ADSecurityGroups, Set-DnsForwarding, New-ADAccounts, Set-ADGroupMemberships |
| 2026-03-25 | 4.3 | Toolkit: Phase 04 hardware scripts (4 new) | New-DhcpReservationsIdrac, New-DhcpReservationsMgmt, Test-BiosIdracSettings, Set-BiosIdracSettings |
| 2026-03-25 | 4.4 | Toolkit: Phase 06 validation scripts (6 new) | Test-InfrastructureHealth, Invoke-VmFleetStorageTest, Test-NetworkRdmaValidation, Test-HighAvailability, Test-SecurityCompliance, Test-BackupDrValidation |
| 2026-03-25 | 4.5 | Toolkit: azurecli/bash scaffolding | 180 .gitkeep files across 96 task folders |
| 2026-03-25 | 4.6 | Toolkit: GitHub issue template | project_management/github-issue-script-variants.md (489 lines, 96 tasks) |
| 2026-03-25 | 4.7 | Toolkit: commit + push | 201 files, 4937 insertions — commit 343cd2b |
