# Implementation Standardization — Tracking Log

> Last updated: 2026-03-24  
> Phase: 1 — Audit Complete

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
| P01 | task-01-bootstrap | Min | ⚠️ | ✅ | ⚠️ no groupId | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Full | ⬜ |
| P01 | task-02-create-project | Min | ✅ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ⬜ |
| P01 | task-03-configure-project | Min | ⚠️ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ⬜ |
| P01 | task-04-create-environments | Min | ⚠️ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ⬜ |
| P01 | task-05-configure-variables | Min | ✅ | ✅ | ⚠️ scm-platform | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full | ⬜ |
| P01 | task-06-deploy-runners | Min | ✅ | ✅ | ⚠️ scm-platform | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Full | ⬜ |

**Part 1 Summary**: All 6 files need FM expansion (3→13), missing sections (Vars, Val, Nav, VC). Tab groupId `scm-platform` is approved override for CI/CD. No toolkit scripts directory exists.

---

## Part 2: Azure Foundation

### Phase 01 — Landing Zones (Full + Simplified = 6 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P01-F | task-01-mgmt-groups | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ❌ | Fmt | ⬜ |
| P01-F | task-02-subscriptions | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | Fmt | ⬜ |
| P01-F | task-03-resource-groups | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P01-S | task-01-mgmt-group | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ❌ | Fmt | ⬜ |
| P01-S | task-02-subscription | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ❌ | Fmt | ⬜ |
| P01-S | task-03-resource-groups | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ⬜ |

### Phase 02 — Resource Providers (2 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P02 | task-01-register-providers | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P02 | task-02-verify-registration | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H4 | ✅ | ❌ | ✅ | Fmt | ⬜ |

### Phase 03 — RBAC Permissions (2 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P03 | task-01-deployment-spn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P03 | task-02-assign-rbac | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |

### Phase 04 — Management Infrastructure

#### 02-manual-deployment (11 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04-M | task-01-vnet | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-02-vpn-gateway | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-03-s2s-vpn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-04-p2s-vpn | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ❌ | Fmt+Script | ⬜ |
| P04-M | task-05-bastion | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-06-nsgs | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-07-nat-gateway | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-08-arc-gateway | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-09-log-analytics | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-10-key-vault | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-M | task-11-mgmt-vms | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ❌ | Fmt+Script | ⬜ |

#### 03-vm-configuration (5 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04-VM | task-01-adds | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-VM | task-02-utility | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-VM | task-03-ndm | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-VM | task-04-lighthouse | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P04-VM | task-05-wac | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ❌ | ❌ | Fmt+Script | ⬜ |

#### 01-cicd-pipeline (12 tasks across 3 sub-phases)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| Cfg | task-01-core-vars | Min | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | N/A | Full | ⬜ |
| Cfg | task-02-mgmt-mode | Min | ⚠️ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | N/A | Full | ⬜ |
| Cfg | task-03-cluster-mode | Min | ⚠️ | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | N/A | Full | ⬜ |
| Exec | task-01-commit-push | Min | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ⬜ |
| Exec | task-02-monitor-validate | Min | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ⬜ |
| Exec | task-03-review-plan | Min | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ⬜ |
| Exec | task-04-approve-deploy | Min | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ⬜ |
| Exec | task-05-monitor-apply | Min | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ⬜ |
| Exec | task-06-verify-test | Min | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | N/A | Full | ⬜ |
| Val | task-01-verify-resources | Min | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | N/A | Full | ⬜ |
| Val | task-02-test-connectivity | Min | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ | ❌ | N/A | Full | ⬜ |
| Val | task-03-validate-config | Min | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | N/A | Full | ⬜ |

### Phase 05 — Identity & Security (1 task)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P05 | task-01-pim-conditional | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | Fmt | ⬜ |

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
| P02 | task-04-validation-signoff | Full | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ✅ | ✅ | ✅ | Fmt | ⬜ |

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
| P01 | task-01-dhcp-idrac | Full | ✅ | ✅ | ⚠️ device-type | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | None | ⬜ |
| P01 | task-02-redfish-discovery | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ⚠️ H3 | ✅ | ✅ | ✅ | Fmt | ⬜ |
| P01 | task-03-mgmt-nic-dhcp | Full | ✅ | ✅ | ⚠️ device-type | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | None | ⬜ |
| P01 | task-04-bios-validation | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ⬜ |
| P01 | task-05-bios-remediation | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ⬜ |

### Phase 02 — OS Installation (4 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P02 | task-01-boss-card | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | N/A | Fmt | ⬜ |
| P02 | task-02-gold-image | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | N/A | Fmt | ⬜ |
| P02 | task-03-manual-install | Full | ✅ | ✅ | ⚠️ no groupId | ❌ | ✅ | ✅ | ✅ | ✅ | N/A | Fmt | ⬜ |
| P02 | task-04-verify-os | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ✅ | ✅ | ✅ | Fmt | ⬜ |

### Phase 03 — OS Configuration (13 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P03 | task-01 to task-08 | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | Fmt | ⬜ |
| P03 | task-09 to task-13 | Min | ❌ | ✅ | ✅ std | ❌ | ✅ | ✅ | ✅ | ❌ | ✅ | Full | ⬜ |

### Phase 04 — Arc Registration (4 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04 | task-01 to task-03 | Min | ❌ | ✅ | ✅ std | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | Full | ⬜ |
| P04 | task-04-verify | Min | ❌ | ⚠️ span | ⚠️ no groupId | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |

### Phase 05 — Cluster Deployment (6 files)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P05-AD | portal-instructions | Full | ✅ | ✅ | ⚠️ post-deployment-ad | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Fmt | ⬜ |
| P05-AD | arm-template | Min | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P05-LI | portal-instructions | Full | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Fmt | ⬜ |
| P05-LI | arm-template | Min | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P05 | monitor-deployment | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Fmt | ⬜ |
| P05 | monitor-validation | Full | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Fmt | ⬜ |

### Phase 06 — Post-Deployment (8 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P06 | task-01-deploy-sdn | Min | ✅ | ✅ | ✅ std | ❌ | ❌ | ⚠️ H3 | ✅ | ❌ | ✅ | Full | ⬜ |
| P06 | task-02-cluster-quorum | Min | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ⬜ |
| P06 | task-03-security-groups | Full | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Fmt | ⬜ |
| P06 | task-04-ssh-connectivity | Min | ✅ | ❌ | ✅ std | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ⬜ |
| P06 | task-05-storage-config | Min | ✅ | ❌ | ⚠️ csv-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ⬜ |
| P06 | task-06-image-downloads | Min | ✅ | ✅ | ⚠️ image-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ⬜ |
| P06 | task-07-logical-networks | Min | ✅ | ✅ | ⚠️ lnet-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ⬜ |
| P06 | task-08-verification | Min | ✅ | ✅ | ⚠️ verify-method | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ | Full | ⬜ |

**Part 4 Summary**: Ph01 is gold standard. Ph02-03 mostly good but tasks 09-13 need FM. Ph04 needs overhaul. Ph05-06 have significant gaps. Phase 06 tab groupIds need standardization.

---

## Part 5: Operational Foundations

### Phase 01 — SDN Deployment (3 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P01 | task-01-validate-sdn | Min | ✅ | ✅ | ✅ std | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | Full | ⬜ |
| P01 | task-02-enable-sdn | Min | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P01 | task-03-configure-nsgs | Min | ✅ | ✅ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |

### Phase 02 — Monitoring (7 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P02 | task-01-log-analytics | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P02 | task-02-azure-monitor | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P02 | task-03-hci-insights | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | Full+Script | ⬜ |
| P02 | task-04-alerting | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P02 | task-05-omimswac | Min | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P02 | task-06-network-logging | Min | ✅ | ✅ | ⚠️ device-type | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P02 | task-07-datadog | Min | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ✅ | Full | ⬜ |

### Phase 03 — Backup & DR (3 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P03 | task-01-azure-backup | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H3 | ❌ | ❌ | ✅ | Full | ⬜ |
| P03 | task-02-site-recovery | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H3 | ❌ | ❌ | ❌ | Full+Script | ⬜ |
| P03 | task-03-test-dr | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H4 | ❌ | ❌ | ✅ | Full | ⬜ |

### Phase 04 — Security (5 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P04 | task-01-defender | Min | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full+Script | ⬜ |
| P04 | task-02-azure-policy | Min | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P04 | task-03-security-baselines | Min | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P04 | task-04-security-logging | Min | ✅ | ✅ | ✅ std | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Full+Script | ⬜ |
| P04 | task-05-update-manager | Min | ✅ | ✅ | ✅ std | ✅ | ✅ | ⚠️ H3 | ❌ | ❌ | ❌ | Full+Script | ⬜ |

### Phase 05 — Licensing (3 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|--------|--------|
| P05 | task-01-hybrid-benefit | Min | ❌ | ❌ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | Full+Script | ⬜ |
| P05 | task-02-windows-sub | Min | ❌ | ❌ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |
| P05 | task-03-telemetry | Min | ❌ | ❌ | ✅ std | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | Full | ⬜ |

**Part 5 Summary**: All files have Min FM. Most have Meta + Badges + Tabs. Consistently missing: Nav, VC. Phase 02 has best Variables coverage. Multiple script gaps.

---

## Part 6: Testing & Validation (6 tasks)

| Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Script | Content | Action | Status |
|------|-----|------|-------|------|------|-----|-----|-----|-----|--------|---------|--------|--------|
| task-01-infra-health | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ⬜ |
| task-02-vmfleet | Min | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ⬜ |
| task-03-rdma | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ⬜ |
| task-04-ha-testing | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ⬜ |
| task-05-security-compliance | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ⬜ |
| task-06-backup-dr | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | Rich | Full | ⬜ |

**Part 6 Summary**: Rich content with inline PS scripts. All need FM, Tabs, Nav, VC, TS. Scripts need extraction to toolkit.

---

## Part 7: Go-Live (7 tasks)

| Phase | Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Content | Action | Status |
|-------|------|-----|------|-------|------|------|-----|-----|-----|-----|---------|--------|--------|
| P01 | task-01-network-confirm | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ⬜ |
| P01 | task-02-storage-confirm | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ⬜ |
| P01 | task-03-backup-confirm | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ⬜ |
| P01 | task-04-migration-confirm | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Thin | Full | ⬜ |
| P02 | task-01-handover-docs | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ⬜ |
| P02 | task-02-knowledge-transfer | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ⬜ |
| P02 | task-03-handover-checklist | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ⬜ |

**Part 7 Summary**: All minimal. Process/checklist content, may not need Tabs. Needs FM, Nav, VC at minimum.

---

## Part 8: Lifecycle Operations (3 tasks)

| Task | FM | Meta | Badge | Tabs | Vars | TS | Val | Nav | VC | Content | Action | Status |
|------|-----|------|-------|------|------|-----|-----|-----|-----|---------|--------|--------|
| cmdb-creation | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ⬜ |
| client-training | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Rich | Full | ⬜ |
| deprovision-steps | Min | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | Medium | Full | ⬜ |

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
| Script gaps | ~35 tasks |

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
