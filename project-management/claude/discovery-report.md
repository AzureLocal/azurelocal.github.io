# Discovery Report — Implementation Docs & Toolkit Alignment

> Generated: 2026-03-24  
> Based on: Full audit of docs/implementation/ (201 files) and scripts/deploy/ (200+ scripts)

## Summary

The implementation docs span 8 parts with ~137 task pages. The azurelocal-toolkit has ~200 PowerShell scripts organized to mirror the docs structure. Parts 1-5 have mostly good content but inconsistent formatting. Parts 6-8 have thin content and almost no scripts.

## Docs Repo Structure (azurelocal.github.io)

```
docs/implementation/
├── 01-cicd-infrastructure/         6 tasks, 1 phase
├── 02-azure-foundation/            30+ tasks, 5 phases
├── 03-onprem-readiness/            12 tasks, 3 phases
├── 04-cluster-deployment/          37 tasks, 6 phases
├── 05-operational-foundations/      21 tasks, 5 phases
├── 06-testing-validation/          6 tasks, no phases
├── 07-validation-handover/         7 tasks, 2 phases
├── 08-lifecycle-operations/        3 docs
└── appendices/                     15 files
```

## Toolkit Repo Structure (azurelocal-toolkit)

```
scripts/deploy/
├── 01-cicd-automation/
├── 02-azure-foundation/
├── 03-on-prem-readiness/
├── 04-cluster-deployment/
├── 05-operational-foundations/
├── 06-testing-validation/
├── 07-validation-handover/
└── (08 lifecycle lives in scripts/lifecycle/)
```

## Format Compliance Matrix

### Reference Examples (Gold Standard)

| File | Score | Notes |
|------|-------|-------|
| 04/phase-01/task-01-dhcp-reservations | 🟢 Full | All sections present — best task reference |
| 02/phase-02/task-01-register-providers | 🟢 Full | All sections present — best Azure task reference |
| 04/phase-01/index.mdx | 🟢 Full | Best phase index reference |
| 02/phase-02/index.mdx | 🟢 Full | Alternative phase index style |

### Format Deviation Patterns

| Pattern | Affected Files (approx) |
|---------|------------------------|
| Missing full frontmatter (only 4 fields) | ~30 files (mostly Parts 5-8) |
| Missing metadata blockquote | ~25 files |
| Missing Variables Used table | ~40 files |
| Missing Troubleshooting table | ~35 files |
| Missing Validation Checklist | ~20 files |
| Missing Version Control section | ~30 files |
| Wrong/missing tab groupId | ~10 files |
| Tab labels non-standard | ~15 files |
| No tabs at all (inline code) | ~16 files (Parts 6-8) |

## Script Alignment Gaps

### Critical Gaps (Docs exist, scripts missing)

| Part/Phase | Tasks | Gap Type | Priority |
|------------|-------|----------|----------|
| 03/phase-01 (Active Directory) | tasks 02-05 | No scripts | High |
| 04/phase-01 (Hardware) | tasks 01,03,04,05 | Empty folders (.gitkeep) | High |
| 04/phase-06 (Post-Deployment) | ALL 8 tasks | 0 scripts in deploy/ | Critical |
| 05/phase-02 (Monitoring) | task-03 HCI Insights | Missing | Medium |
| 05/phase-03 (Backup/DR) | task-02 Site Recovery | Missing | Medium |
| 05/phase-04 (Security) | tasks 01,04,05 | Missing | Medium |
| 05/phase-05 (Licensing) | task-01 Hybrid Benefit | Missing | Medium |
| 06 (Testing) | ALL 6 tasks | 0 scripts | High |
| 07 (Go-Live) | ALL 7 tasks | 0 scripts | High |
| 08 (Lifecycle) | ALL 3 docs | No deploy scripts | Medium |

### Well-Aligned Areas (No Gaps)

| Part/Phase | Tasks | Alignment |
|------------|-------|-----------|
| 04/phase-03 (OS Configuration) | 13/13 | 100% ✓ |
| 04/phase-04 (Arc Registration) | 4/4 | 100% ✓ |
| 03/phase-02 (Enterprise Readiness) | 4/4 | 100% ✓ |
| 03/phase-03 (Network Infrastructure) | 4/4 | 100% ✓ |
| 05/phase-01 (SDN Deployment) | 3/3 | 100% ✓ |

### Partial Alignment

| Part/Phase | Aligned | Total | Notes |
|------------|---------|-------|-------|
| 02/phase-04 (Mgmt Infra) | 13 | 15 | Missing P2S VPN, mgmt VMs |
| 05/phase-02 (Monitoring) | 6 | 7 | Missing HCI Insights |

## Tab Standard Deviations Found

| File Pattern | Current Tab Labels | Should Be |
|-------------|-------------------|-----------|
| 04/phase-01/task-01 | FortiGate / Windows / Customer (device-type) | Approved override ✓ |
| 04/phase-03/* | Direct / Orchestrated | Manual (RDP/Console) / Orchestrated / Standalone |
| 01-cicd/* | GitHub / GitLab / Azure DevOps (platform) | Approved override ✓ |
| 02/phase-02/task-01 | Azure Portal / Azure CLI PowerShell / Standalone | Portal label OK, CLI label needs fix |

## Approved Tab GroupId Overrides

These contexts justify a non-standard groupId or tab 1 label:

| GroupId | Tab 1 Label | Context |
|---------|-------------|---------|
| `device-type` | FortiGate DHCP / Windows DHCP / Customer | Hardware-specific DHCP tasks |
| `platform` | GitHub / GitLab / Azure DevOps | CI/CD pipeline tasks |

All other tasks should use `groupId="deployment-method"`.

## Content Quality Assessment

| Part | Content Quality | Format Quality | Scripts | Overall |
|------|----------------|----------------|---------|---------|
| 1 — CI/CD | Good | Medium | N/A | 🟡 |
| 2 — Azure Foundation | Good | Good (recently updated) | Mostly aligned | 🟢 |
| 3 — On-Prem Readiness | Good | Medium | Partial gaps | 🟡 |
| 4 — Cluster Deployment | Good | Variable | Phase-06 critical gap | 🟡 |
| 5 — Operational | Medium | Low-Medium | Multiple gaps | 🟡 |
| 6 — Testing | Poor (thin) | Poor (no standard format) | None | 🔴 |
| 7 — Go-Live | Poor (thin) | Poor | None | 🔴 |
| 8 — Lifecycle | Poor (thin) | Poor | None | 🔴 |
