# Plan: Implementation Docs & Toolkit Standardization

> Project start: 2026-03-24  
> Status: **Phase 2 Complete — Phases 3, 5, 6 Remaining**

## TL;DR

Standardize ~137 task pages across the implementation docs (azurelocal.github.io) and align ~200 toolkit scripts (azurelocal-toolkit) to match. Create a documented page standard, fix formatting across Parts 1-5, create deep content for Parts 6-8, and ensure every doc task has corresponding scripts in the toolkit.

## Decisions (Confirmed)

| Decision | Value |
|----------|-------|
| Azure primary script | Azure PowerShell (Az module) |
| On-prem primary script | PowerShell 7 (pwsh) |
| Alternate script | Azure CLI for PowerShell (az commands in .ps1) — appendix/alternate tab only |
| Azure task tabs | `Azure Portal` \| `Orchestrated Script` \| `Standalone Script` (groupId="deployment-method") |
| On-prem task tabs | `Manual (RDP/Console)` \| `Orchestrated Script` \| `Standalone Script` (groupId="deployment-method") |
| Context-specific tab 1 | When task targets specific hardware/software, tab 1 label adapts but groupId stays "deployment-method" |
| Backup branches | `backup/implementation-standardization-20260324` in both repos |
| Priority | Parts 1-5 format alignment + toolkit sync FIRST, then Parts 6-8 content |
| Example company | Infinite Azure Local Corp (IIC), eastus region |
| Author | AzureLocal Cloud Team Team |

---

## Standards (Mandatory)

### Tab Naming Standard

All task pages MUST use these exact tab labels — no variations with parenthetical context:

| Tab Position | Azure Tasks | On-Prem Tasks | value= |
|--------------|-------------|---------------|--------|
| Tab 1 (default) | `Azure Portal` | `Manual (RDP/Console)` | `manual` |
| Tab 2 | `Orchestrated Script` | `Orchestrated Script` | `orchestrated` |
| Tab 3 | `Standalone Script` | `Standalone Script` | `standalone` |

**Approved Override — CI/CD Tasks (Part 1):**

| Tab 1 | Tab 2 | Tab 3 | groupId |
|-------|-------|-------|---------|
| `GitHub` | `GitLab` | `Azure DevOps` | `scm-platform` |

**FORBIDDEN Labels (replaced 2026-03-25):**

- ~~`Azure CLI / PowerShell`~~ → use `Orchestrated Script`
- ~~`Orchestrated Script (Mgmt Server)`~~ → use `Orchestrated Script`
- ~~`Orchestrated (Mgmt Server)`~~ → use `Orchestrated Script`
- ~~`Config-Driven Script`~~ → use `Orchestrated Script`
- ~~`Orchestrated`~~ → use `Orchestrated Script`
- ~~`Invoke- Orchestrated`~~ → use `Orchestrated Script`
- ~~`Orchestrated (all nodes)`~~ → use `Orchestrated Script`
- ~~`Orchestrated Install (Push)`~~ → use `Orchestrated Script`
- ~~`Orchestrated Script (Azure Policy)`~~ → use `Orchestrated Script`
- ~~`Standalone`~~ → use `Standalone Script`
- ~~`Standalone Script (On Node)`~~ → use `Standalone Script`

### Document Info Block Standard

The metadata blockquote MUST have **two trailing spaces** at the end of each line for proper markdown line breaks:

```markdown
> **DOCUMENT CATEGORY**: Runbook  
> **SCOPE**: [scope text]  
> **PURPOSE**: [purpose text]  
> **MASTER REFERENCE**: [Link](url)

**Status**: Active
```

**Rules:**
- Each line ends with TWO SPACES before the newline
- All four fields are required
- MASTER REFERENCE links to authoritative external docs (Microsoft Learn, vendor docs)
- Status line is OUTSIDE the blockquote, bolded

---

## Phases

### Phase 0: Setup & Standards

- [x] 0.1 Create backup branches in both repos
- [x] 0.2 Create project-management/claude/ folder with plan, tracking, discovery, standards
- [x] 0.3 Create Task Page Standard template
- [x] 0.4 Create Phase Index Page Standard template

### Phase 1: Audit & Gap Analysis

- [x] 1.1 Generate complete alignment matrix (doc vs toolkit per task)
- [x] 1.2 Identify formatting deviations from standard across Parts 1-5
- [x] 1.3 Identify content gaps in Parts 6-8

### Phase 2: Parts 1-5 Format Standardization

- [x] 2.1 Part 1: CI/CD Infrastructure (6 tasks)
- [x] 2.2 Part 2: Azure Foundation (30+ tasks, 5 phases)
- [x] 2.3 Part 3: On-Prem Readiness (12 tasks, 3 phases)
- [x] 2.4 Part 4: Cluster Deployment (37 tasks, 6 phases)
- [x] 2.5 Part 5: Operational Foundations (21 tasks, 5 phases)

### Phase 3: Parts 6-8 Content Creation

- [ ] 3.1 Part 6: Testing & Validation (6 tasks) — deep content + scripts
- [ ] 3.2 Part 7: Go-Live (7 tasks, 2 phases) — verification + handover
- [ ] 3.3 Part 8: Lifecycle Operations (3 docs) — complete content creation

### Phase 4: Appendices Update

- [x] 4.1 Update appendix-d-script-index.mdx
- [ ] 4.2 Review other appendices for format consistency

### Phase 5: Toolkit Script Creation

- [x] 5.1 Create missing scripts for documented tasks (20 scripts created)
- [ ] 5.2 Relocate misplaced scripts (04/phase-06 post-deployment)

### Phase 6: Content Verification

- [ ] 6.1 Verify Azure content against current Microsoft docs
- [ ] 6.2 Verify on-prem content (Dell, Windows Server, AD)
- [ ] 6.3 Run Docusaurus build to catch broken links

## Script Gap Summary

| Area | Gap |
|------|-----|
| 03/phase-01 AD tasks 02-05 | Docs exist, no scripts |
| 04/phase-01 tasks 01,03,04,05 | Empty script folders (.gitkeep only) |
| 04/phase-06 ALL 8 tasks | Docs exist, 0 scripts in deploy folder |
| 05 scattered | ~7 tasks missing scripts |
| 06 ALL 6 tasks | Thin docs + 0 scripts |
| 07 ALL 7 tasks | 0 scripts |
| 08 ALL 3 docs | Thin content, no scripts |

## Well-Aligned Areas (No Script Gaps)

- 04/phase-03-os-configuration: 13/13 tasks ✓
- 04/phase-04-arc-registration: 4/4 tasks ✓
- 03/phase-02-enterprise-readiness: 4/4 tasks ✓
- 03/phase-03-network-infrastructure: 4/4 tasks ✓
- 05/phase-01-sdn-deployment: 3/3 tasks ✓
