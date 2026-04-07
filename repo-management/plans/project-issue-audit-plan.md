# Project Issue Audit & Discovery Plan

**Date:** 2026-04-04  
**Project:** AzureLocal — Azure Local Solutions (Org Project #3)  
**Total Items Inventoried:** 215  
**Scope:** All open issues across all repositories in the organization  

---

## Executive Summary

A full scan of all 215 items in org project #3 was performed. Key findings:

1. **Significant duplicate issues exist** — most AVD sub-tasks were created twice (original + re-baselined), and several cross-repo issues are redundant.
2. **Several "Todo" issues are fully or partially complete** based on actual repo content.
3. **Some "Done" issues have unfulfilled acceptance criteria** still outstanding.
4. **Several open issues are legitimate, scoped, and distinct** — these need planned work.

---

## Section 1 — Duplicate Issues to Consolidate or Close

These issues have the same title and/or cover the same work. Recommended action is to close the older/weaker version and update the surviving issue with any additional context.

### 1.1 — AVD Sub-Task Pairs (Original + Re-Baselined)

Each AVD sub-task was created twice: once with full original specification and once with a shorter re-baselined scope. ALL are currently marked **Done**. The project board is cluttered with dead doubles.

| Surviving Issue | Duplicate to Close | Sub-Task |
|---|---|---|
| AVD-8 (re-baselined epic) | **AVD-7** | Epic: AVD Full Automation Build-Out |
| AVD-10 (re-baselined) | **AVD-9** | Sub-Task 1: Config & Schema Expansion |
| AVD-12 (re-baselined) | **AVD-11** | Sub-Task 2: PowerShell Automation Scripts |
| AVD-14 (re-baselined) | **AVD-13** | Sub-Task 3: Terraform + AVM |
| AVD-16 (re-baselined) | **AVD-15** | Sub-Task 4: Ansible End-to-End Playbooks |
| AVD-18 (re-baselined) | **AVD-17** | Sub-Task 5: Bicep + AVM |
| AVD-24 (re-baselined) | **AVD-22, AVD-23** | Sub-Task 7: Monitoring (3 issues → 1) |
| AVD-26 (re-baselined) | **AVD-25** | Sub-Task 8: Identity & RBAC Automation |
| AVD-28 (re-baselined) | **AVD-27** | Sub-Task 9: Image Management & FSLogix |
| AVD-30 (re-baselined) | **AVD-29** | Sub-Task 10: Documentation + Diagrams |
| AVD-32 (re-baselined) | **AVD-31** | Sub-Task 11: CI/CD Pipelines |
| AVD-34 (re-baselined) | **AVD-33** | Sub-Task 12: End-to-End Validation Matrix |

**Action:** Close the duplicate issues listed in the "Duplicate to Close" column with comment linking to the surviving issue. This removes 14 noise items from the board.

---

### 1.2 — DOCS Standards Issues (All Done)

| Surviving Issue | Duplicate to Close | Reason |
|---|---|---|
| DOCS-14 | **DOCS-17** | Both "[INFRA] Establish unified project-wide standards" — same work |
| DOCS-5 | **DOCS-25** | Both "Brainstorm additional Azure Local solutions" — both Done |

---

### 1.3 — SOFS Sizing Guide Duplicate

| Issue | Status | Notes |
|---|---|---|
| SOFS-83 | Done | "FSLogix profile container sizing guide" |
| SOFS-84 | **Todo** | "FSLogix profile container sizing guide (single vs. multi-share decision framework)" |

**Action:** Review SOFS-83 content. If it covers the single vs. multi-share decision framework already, close SOFS-84 as duplicate. If the decision framework content is genuinely absent from SOFS-83, keep SOFS-84 open and update its title to be more specific.

---

### 1.4 — TKT-6 Appears Twice with Different Titles

Two distinct issues are both labeled `TKT-6` in the project:

- "Research: Azure Deployment Stacks for ARM/Bicep Deployments Across All Repositories"
- "Create standards replication mechanism from docs site to all repos"

**Action:** Verify in the `azurelocal-toolkit` repo which issues these map to and ensure they have unique project IDs on the board. Add the second as a new project item if missing.

---

## Section 2 — Issues Marked "Todo" That Are Already Complete

These issues are still open on the project board but the work has been done in the repo.

### 2.1 — DOCS-6: Create CONTRIBUTING.md

**Claim:** Issue requests creation of `CONTRIBUTING.md` and community governance docs.  
**Finding:** `E:\git\azurelocal.github.io\CONTRIBUTING.md` **exists**.  
**Verification Steps:**
- [ ] Open `CONTRIBUTING.md` and confirm it covers community governance (code of conduct, PR process, issue templates)
- [ ] Confirm all solution repos also have `CONTRIBUTING.md` linking to org standards
- [ ] If complete → close DOCS-6

---

### 2.2 — DOCS-33: Create High-Level Design (HLD) Document

**Claim:** Issue requests creation of an HLD document.  
**Finding:** `docs/design/hld.mdx` **exists**.  
**Verification Steps:**
- [ ] Open `hld.mdx` and confirm it contains real content (not a placeholder)
- [ ] Confirm the HLD is linked in the MkDocs nav
- [ ] Confirm the HLD accurately reflects current architecture
- [ ] If complete → close DOCS-33

---

### 2.3 — DOCS-34: Create Low-Level Design (LLD) Document

**Claim:** Issue requests creation of an LLD document.  
**Finding:** `docs/design/lld.mdx` **exists**, along with `lld-document-hierarchy.drawio`, `lld-network-topology.drawio`, and `lld-storage-architecture.drawio`.  
**Verification Steps:**
- [ ] Open `lld.mdx` and confirm it contains real content (not a placeholder)
- [ ] Confirm all three drawio diagrams render correctly in the site
- [ ] Confirm the LLD sections match the architecture described in implementation docs
- [ ] If complete → close DOCS-34

---

### 2.4 — DOCS-8: Vale Linting

**Claim:** Issue requests fixing existing Vale warnings and enforcing Vale in CI.  
**Finding:** `.vale.ini` **exists** at repo root.  
**Verification Steps:**
- [ ] Check `.github/workflows/` for a Vale linting step in any CI workflow
- [ ] Run Vale locally against docs to check for remaining warnings: `vale docs/`
- [ ] If CI enforces Vale and warnings are resolved → close DOCS-8; otherwise keep open

---

## Section 3 — Issues Marked "Done" with Unfinished Acceptance Criteria

These issues are marked Done on the board but their acceptance criteria are **not fully checked**.

### 3.1 — DOCS-24: [EPIC] Rewrite org-wide standards — remove all TierPoint references

**Project Status:** Todo (not Done — confirmed re-checked)  
**Actual State:**
- ✅ `grep` across all `docs/standards/` returns 0 TierPoint/ProdTech/PCS refs
- ✅ `grep` across all `docs/` returns 0 TierPoint refs
- ❌ Variable management suite (#15 acceptance criteria) — remaining checkbox unchecked in issue
- ❌ "Every repo's README/CONTRIBUTING links to the clean standards" — unchecked

**Verification Steps:**
- [ ] Confirm `docs/standards/variable-management/` exists and has IIC-only examples with no TierPoint refs
- [ ] Check 5 solution repos each have README and CONTRIBUTING with link to `azurelocal.cloud/standards/`
  - [ ] azurelocal-avd
  - [ ] azurelocal-sofs-fslogix
  - [ ] azurelocal-toolkit
  - [ ] azurelocal-loadtools
  - [ ] azurelocal-vm-conversion-toolkit
- [ ] If all pass → close DOCS-24

---

## Section 4 — Confirmed Bugs / Regressions in "Done" Repos

These issues are open and the bug has been **confirmed present** via grep.

### 4.1 — SOFS-81: Typo in companion repo URL (aurelocal-avd → azurelocal-avd)

**Status:** Todo  
**Confirmed:** `README.md` in `azurelocal-sofs-fslogix`:
- Line 13: `https://github.com/AzureLocal/aurelocal-avd` (missing `z`)
- Line 107: `https://github.com/AzureLocal/aurelocal-avd` (missing `z`)

**Fix Required:** Change `aurelocal-avd` → `azurelocal-avd` on both lines in `README.md`.  
**Effort:** XS — 2 line change.  
**Priority:** Fix immediately — these are 404 links to the sister repo.

---

### 4.2 — SOFS-15: Replace all contoso/fabrikam references with IIC naming

**Status:** Todo  
**Confirmed:** 32 occurrences of "contoso" or "fabrikam" remain in `azurelocal-sofs-fslogix/docs/`.  
**Effort:** M — systematic find/replace across docs, then verify IIC context is correct.  
**Verification Steps:**
- [ ] Run: `Get-ChildItem E:\git\azurelocal-sofs-fslogix\docs -Recurse -Include "*.md","*.mdx" | Select-String -Pattern "contoso|fabrikam" -CaseSensitive:$false`
- [ ] Replace each occurrence with the IIC fictional company equivalent
- [ ] Verify the replacement makes semantic sense in context (not just a blind replace)
- [ ] Re-run grep to confirm 0 results

---

## Section 5 — Open Issues: Cross-Repo Alignment (AVD × SOFS)

These issues span two repos and require coordination. None should be merged — they are distinct cross-cutting concerns.

### 5.1 — AVD-36: Align FSLogix topology terminology between AVD and SOFS repos

**Problem:** AVD uses `single`/`split`/`cloud_cache` enum; SOFS docs use "Option A"/"Option B".  
**Verification:** Check current state of both repos' terminology before starting work:
- [ ] Confirm `azurelocal-avd/config/variables.example.yml` uses `single`/`split`/`cloud_cache`
- [ ] Confirm `azurelocal-sofs-fslogix/docs/` uses "Option A"/"Option B" language
- [ ] Decide canonical terminology (recommend: `single`/`split`/`cloud_cache`)  
- [ ] Determine whether SOFS should adopt the same enum values or document a mapping table

---

### 5.2 — AVD-37: Research FSLogix profile sizing and standardize recommendations

**Problem:** Three different size recommendations across repos (5–50 GB, 10–20 GB, 30 GB default).  
**Verification Before Starting:**
- [ ] Check `azurelocal-avd/docs/guides/fslogix.md` for current default and assumption
- [ ] Check `azurelocal-sofs-fslogix/docs/architecture/capacity-planning.md`
- [ ] Check `azurelocal-sofs-fslogix/docs/architecture/avd-considerations.md`
- [ ] Research: Document Microsoft official sizing guidance with source URLs
- [ ] Produce one canonical sizing table used by both repos

---

### 5.3 — AVD-38: Align Cloud Cache scope — SOFS=DR only, AVD=alternative profile storage

**Problem:** SOFS repo treats Cloud Cache as a DR/HA overlay only; AVD repo offers it as a general alternative.  
**Verification Steps:**
- [ ] Review SOFS Cloud Cache documentation for stated scope
- [ ] Review AVD FSLogix guide for Cloud Cache framing
- [ ] Agree on canonical scope guidance
- [ ] Update both repos to reflect aligned scope

---

### 5.4 — AVD-39 + AVD-40: Cross-repo profile share validation

**AVD-39:** Cross-repo validation that share config matches AVD expectations.  
**AVD-40:** Storage-agnostic SMB pre-flight validation in AVD deployment.  
**Note:** These are related but distinct. AVD-39 is a cross-repo validation script; AVD-40 is a deployment-time pre-flight check. Do not merge.  
**Verification Steps:**
- [ ] Confirm neither script exists yet in `azurelocal-avd/src/`
- [ ] Define the interface between the two scripts to avoid redundant checks

---

### 5.5 — AVD-41: Research all viable profile storage options for AVD on Azure Local

**Problem:** Currently only SOFS is documented as the profile storage backend.  
**Verification Steps:**
- [ ] Check if `azurelocal-avd/docs/` already has a storage options page
- [ ] Research and document alternatives: Azure Files, Azure NetApp Files, local disk, third-party
- [ ] Note Azure Local constraints (no public internet access for Azure Files without PE)

---

## Section 6 — Open Issues: SOFS Repository Cleanup

These are lower-priority repository hygiene issues for `azurelocal-sofs-fslogix`. Most are structural or content items.

| Issue | Task | Verification Before Starting |
|---|---|---|
| SOFS-5 | Remove `sofs/` from git tracking | Check if `sofs/` directory is tracked: `git -C E:\git\azurelocal-sofs-fslogix ls-files sofs/` |
| SOFS-6 | Migrate legacy root folders to phase-oriented structure | List current root folders and compare to target structure in issue |
| SOFS-7 | Consolidate `scripts/` into `configure/` | Check if `configure/` exists already: `Test-Path E:\git\azurelocal-sofs-fslogix\configure` |
| SOFS-8 | Set up Pester test structure in `tests/` | Check if `tests/` has any `.Tests.ps1` files already |
| SOFS-9 | Populate `examples/` with sample configs | Check if `examples/` is empty or partial |
| SOFS-11 | Rewrite `README.md` | Review current README for completeness and IIC branding |
| SOFS-12 | Flesh out `architecture.md` with SOFS topology diagrams | Check current word count / diagram count |
| SOFS-13 | Create architecture diagrams (draw.io) | Check `docs/assets/diagrams/` for existing drawio files |
| SOFS-14 | Update `getting-started.md` with end-to-end walkthrough | Check if walkthrough covers all 5 IaC tools |
| SOFS-16 | Add variable reference to MkDocs site | Confirm `reference/variables.md` is in `mkdocs.yml` nav |
| SOFS-17 | Add troubleshooting guide | Check if `docs/troubleshooting.md` exists |
| SOFS-19 | Validate Bicep templates end-to-end | Run `az bicep build` against all `src/bicep/*.bicep` |
| SOFS-51 | Add Azure Local host storage provisioning guidance | Confirm no existing coverage in `docs/` |
| SOFS-80 | Research AV exclusion best practices per repo | Check if any AV exclusion docs already exist in any repo |

**Note:** Several SOFS issues have no `iD` (no project ID field) — these need to be triaged and assigned IDs or linked to the existing numbered issues above.

---

## Section 7 — Open Issues: DOCS Site (azurelocal.github.io)

### 7.1 — DOCS-2: Evaluate Docusaurus → MkDocs Migration

**Status:** Todo  
**Confirmed:** The site **still uses Docusaurus** (`docusaurus.config.js` present, `mkdocs.yml` absent).  
**Note:** All solution repos use MkDocs. The main docs site is the only one still on Docusaurus.  
**Verification Steps Before Starting:**
- [ ] Review all solution repos to confirm all use MkDocs Material
- [ ] Assess migration effort: count active `.mdx` files that would need MDX-to-MD conversion
- [ ] Check if the Docusaurus-specific features (versioned docs, MDX components) are actively used
- [ ] Create a migration cost/benefit analysis before committing

---

### 7.2 — DOCS-7: Cross-Repo CI/CD Standardization — Reusable Workflows

**Status:** Todo  
**Confirmed:** Only 5 workflows exist in `.github/workflows/` (add-to-project, deploy, release-please, sync-labels, validate-repo-structure). No reusable `workflow_call` templates.  
**Verification Steps:**
- [ ] Audit each solution repo's `.github/workflows/` to catalog all existing workflows
- [ ] Identify common patterns (lint, test, deploy, release) across repos
- [ ] Design reusable workflow templates using `workflow_call`
- [ ] Determine hosting location (likely `azurelocal.github.io/.github/workflows/`)

---

### 7.3 — DOCS-24: Standards Rewrite — Remaining Two Criteria

See Section 3.1 above. The standards content is clean — only the variable management integration and cross-repo README linking remain.

---

### 7.4 — DOCS-26: Create and Integrate 10 New Azure Local Solution Repos

**Status:** Todo  
**Current State:** The following Azure Local solution repos already exist in the org:
- azurelocal-avd ✅
- azurelocal-sofs-fslogix ✅
- azurelocal-toolkit ✅
- azurelocal-loadtools ✅
- azurelocal-vm-conversion-toolkit ✅
- azurelocal-training ✅
- azurelocal-nutanix-migration ✅
- azurelocal-copilot ✅

**Verification Steps:**
- [ ] Review the DOCS-26 issue body to see which 10 repos were planned
- [ ] Count how many have been created vs planned
- [ ] Update the issue body with current status per repo
- [ ] Determine if remaining repos are still needed given current scope

---

### 7.5 — DOCS-27: Automate Standards Sync from Docs Repo to All Repos

**Status:** Todo  
**Related:** TKT-6 "Create standards replication mechanism from docs site to all repos" covers the same goal from the toolkit side.  
**Verification Steps:**
- [ ] Confirm these two issues are tracking the same initiative from different perspectives (docs vs toolkit)
- [ ] Consolidate into one issue or add explicit cross-references between DOCS-27 and TKT-6

---

### 7.6 — DOCS-30: Implementation Guide End-to-End Review

**Status:** Todo  
**Verification Steps:**
- [ ] Open `docs/implementation/` and list all pages
- [ ] Cross-reference each doc page against actual scripts in solution repos
- [ ] Check all variable names and script paths for accuracy
- [ ] Confirm all links (internal and external) resolve

---

### 7.7 — DOCS-31: Automation Section Review — Restructure and Align with Toolkit

**Status:** Todo  
**Confirmed:** `docs/automation/` folder exists.  
**Verification Steps:**
- [ ] List all files in `docs/automation/`
- [ ] Check if `azurelocal-toolkit` repo is linked/referenced
- [ ] Determine if CI/CD docs are in the right location vs. individual solution repos

---

### 7.8 — DOCS-32: Add 'Advanced Scenarios' Section

**Status:** Todo  
**Verification Steps:**
- [ ] Confirm no `docs/advanced-scenarios/` folder exists yet
- [ ] Review the DOCS-32 issue for the 4 scenarios: S2S VPN, Opengear OOB, Dell hardware, Azure management hub
- [ ] Check if any of these are already covered in existing docs

---

## Section 8 — Open Issues: Toolkit (azurelocal-toolkit)

| Issue | Task | Verification |
|---|---|---|
| TKT-4 | Master variables registry | Confirm `config/registry/variables-registry.yml` does not yet exist |
| TKT-5 | IaC tool maturity tracking | Confirm no maturity tracking dashboard exists |
| TKT-6a | Research Azure Deployment Stacks | Check if any research doc exists in `repo-management/` |
| TKT-6b | Create standards replication mechanism | Cross-ref with DOCS-27 (same initiative) |
| TKT-7 | IaC Tool Maturity Lifecycle Standard | Confirm not already in `docs/standards/` |
| TKT-8 | Add all sites to Google Search Console | Check if `sitemap.xml` is properly configured in all repos |
| TKT-17 | Azure CLI and Bash variants for all tasks | Verify what PowerShell tasks exist without CLI equivalents |
| TKT-18 | Evaluate Spectre.Console for live monitoring | Check if any monitoring scripts exist already |

---

## Section 9 — Open Issues: Load Tools (azurelocal-loadtools)

All load tool issues are in the backlog (Todo). The Epic LOAD-8 is the parent.

**Verification Order — Run these checks before starting any LOAD work:**

1. **LOAD-9 (Config & Schema)** — Check if `config/variables.example.yml` and `config/schema/` exist at all
2. **LOAD-10 (Core Framework)** — Check `tools/` and `src/` for any existing loader modules
3. **LOAD-11 (Infrastructure)** — Check `common/bicep/` and `common/ansible/` for existing infra scripts
4. **LOAD-12 (FIO)** — Already Done — verify `FIO` integration exists in `tools/`
5. **LOAD-13 (HammerDB)** — Already Done — verify `HammerDB` integration exists in `tools/`
6. **LOAD-14 (iPerf3)** — Already Done — verify `iPerf3` and `stress-ng` exist in `tools/`
7. **LOAD-15 (VMFleet)** — Verify VMFleet S2D wrapper does not already exist in `tools/`
8. **LOAD-16 (Monitoring)** — Check if any dashboard JSON/bicep templates exist
9. **LOAD-17 (Reports)** — Check `src/` for any existing report generation logic
10. **LOAD-18 (CI/CD)** — Check `.github/workflows/` in `azurelocal-loadtools`
11. **LOAD-19 (Docs)** — Check `docs/` completeness against tool count
12. **LOAD-20 (E2E Validation)** — Verify `tests/` structure

---

## Section 10 — Open Issues: VM Conversion Toolkit (azurelocal-vm-conversion-toolkit)

**Verification Order:**

1. **VMCT-6 (Script Refinement — Azure Local path)** — Check `scripts/` for 01-05 scripts existence and state
2. **Unnamed: Hyper-V standalone conversion path** — Check if separate Hyper-V scripts exist
3. **Unnamed: Linux + additional VM config** — Check if Linux conversion scripts exist
4. **Unnamed: Error handling & staged rollback** — Check scripts for try/catch and rollback logic
5. **Unnamed: Pester test coverage** — Check `tests/` for existing `.Tests.ps1` files
6. **Unnamed: Shared logging + Azure Monitor** — Check for common logging module
7. **Unnamed: E2E validation matrix** — Check for any existing validation matrix
8. **Unnamed: CI/CD pipelines** — Check `.github/workflows/`
9. **Unnamed: Documentation expansion** — Check `docs/` completeness for all conversion paths

---

## Section 11 — Open Issues: Training (azurelocal-training)

All training phase issues are Todo. Before starting any work, verify:

- [ ] **Phase 1 (Infrastructure):**
  - Check if `mkdocs.yml` nav has been updated (`Phase 1: Update mkdocs.yml navigation`)
  - Check if `docs/` folder structure matches the planned module layout (`Phase 1: Create docs folder structure`)
  - Check if `docs/index.md` landing page has been rewritten (`Phase 1: Rewrite docs/index.md`)

- [ ] **Phase 2 (Modules 00–10):**
  - Check `docs/00-introduction/` through `docs/10-cloud-deployment/` for content vs. placeholders
  - Each module issue should only be opened/started once the placeholder is confirmed empty

- [ ] **Phases 3–6:** Verify no cross-dependencies with Phase 2 modules before starting

---

## Section 12 — Issues Without Project IDs (Unnamed Items)

Several items in the project have no `iD` field assigned (visible as blank in the table). These are tracked in the project but have not been assigned a solution-repo prefix. All are concentrated in:

- `azurelocal-sofs-fslogix` (~20 items)
- `azurelocal-toolkit` (~6 items)
- `azurelocal-vm-conversion-toolkit` (~8 items)
- `azurelocal-training` (~20 items)

**Action:** For each repo, assign the `iD` custom field so items appear in the project board with a unique identifier.

---

## Recommended Action Sequence

### Phase 1 — Quick Wins (< 1 day total)

| Priority | Action | Issue(s) |
|---|---|---|
| 1 | Fix typo `aurelocal-avd` → `azurelocal-avd` in SOFS README (2 lines) | SOFS-81 |
| 2 | Close 14 AVD duplicate Done issues with cross-reference comment | AVD-7,9,11,13,15,17,22,23,25,27,29,31,33 |
| 3 | Close DOCS-14 or DOCS-17 (duplicate standards issues, both Done) | DOCS-17 |
| 4 | Close DOCS-5 or DOCS-25 (duplicate brainstorm, both Done) | DOCS-25 |
| 5 | Assign project `iD` field to all unnamed items | All repos |

### Phase 2 — Verification & Closure of "Likely Done" Issues

| Priority | Action | Issue(s) |
|---|---|---|
| 1 | Open CONTRIBUTING.md and confirm completeness → close DOCS-6 if done | DOCS-6 |
| 2 | Open `docs/design/hld.mdx` and `lld.mdx` → close DOCS-33/34 if real content | DOCS-33, DOCS-34 |
| 3 | Check Vale CI enforcement → close DOCS-8 if active | DOCS-8 |
| 4 | Verify DOCS-24 last two criteria (variable mgmt + README links) → close if met | DOCS-24 |
| 5 | Review SOFS-83 sizing guide → close SOFS-84 if duplicate | SOFS-84 |
| 6 | Clarify TKT-6 duplication on board | TKT-6 |

### Phase 3 — Active Bug Fixes

| Priority | Action | Issue(s) |
|---|---|---|
| 1 | Replace 32 contoso/fabrikam refs in SOFS docs with IIC | SOFS-15 |

### Phase 4 — Cross-Repo Alignment Work

| Priority | Action | Issue(s) |
|---|---|---|
| 1 | Align FSLogix topology terminology (AVD ↔ SOFS) | AVD-36 |
| 2 | Research and standardize FSLogix profile sizing | AVD-37 |
| 3 | Align Cloud Cache scope documentation | AVD-38 |
| 4 | Design SMB pre-flight validation scripts | AVD-39, AVD-40 |

### Phase 5 — New Development (Backlog)

Work in priority order within each repo:

1. **SOFS cleanup** (SOFS-5, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 19, 51, 80)
2. **Toolkit foundation** (TKT-4, TKT-5, TKT-7)
3. **Load tools build-out** (LOAD-8 epic → LOAD-9 through LOAD-20 in order)
4. **VM Conversion Toolkit** (VMCT-5 epic → sub-tasks in order)
5. **Training curriculum** (Phase 1 → 2 → 3 → 4 → 5 → 6)
6. **Docs site** (DOCS-2 migration audit, DOCS-27/TKT-6 standards automation, DOCS-30, DOCS-31, DOCS-32, DOCS-7)

---

## Appendix A — Full Issue Inventory by Repo

### azurelocal.github.io

| ID | Title | Status |
|---|---|---|
| DOCS-1 | chore: release 1.0.0 | Done |
| DOCS-2 | Audit Docusaurus → MkDocs migration | Todo |
| DOCS-3 | MkDocs footer customization | Done |
| DOCS-4 | Dev tracker: azurelocal.cloud community portal | Todo |
| DOCS-5 | Brainstorm: additional Azure Local solutions | Done |
| DOCS-6 | Create CONTRIBUTING.md and governance docs | Todo |
| DOCS-7 | Cross-repo CI/CD standardization — reusable workflows | Todo |
| DOCS-8 | Vale linting — fix warnings and enforce in CI | Todo |
| DOCS-9 | Add 'Under Active Development' warning to all MkDocs repos | Done |
| DOCS-10 | Epic: Migrate TierPoint Azure Local content to org | Done |
| DOCS-11 | Migrate Azure Local Anywhere docs | Done |
| DOCS-12 | Create azurelocal-toolkit repo and migrate content | Done |
| DOCS-13 | Project board custom fields not auto-populated on new issues | Done |
| DOCS-14 | [INFRA] Establish unified project-wide standards | Done |
| DOCS-15 | [INFRA] Standardize variable management | Done |
| DOCS-16 | Add central Variable Management Standard page | Done |
| DOCS-17 | [INFRA] Establish unified project-wide standards (**DUPLICATE of DOCS-14**) | Done |
| DOCS-18 | Enrich "Azure Services on Azure Local" pages | Done |
| DOCS-19 | Remove "Azure Local Anywhere" legacy directory | Done |
| DOCS-20 | chore: release 1.0.1 | Done |
| DOCS-21 | Fix: remove Azure Local Anywhere legacy branding | Done |
| DOCS-22 | chore: release 1.1.0 (PR) | Todo |
| DOCS-23 | Fix: merge intro.md into index.mdx | Done |
| DOCS-24 | [EPIC] Rewrite org-wide standards — remove TierPoint refs | Todo |
| DOCS-25 | [WIP] Brainstorm additional Azure Local solutions (**DUPLICATE of DOCS-5**) | Done |
| DOCS-26 | Create and integrate 10 new Azure Local solution repos | Todo |
| DOCS-27 | Automate standards sync from canonical docs to downstream repos | Todo |
| DOCS-28 | Create and populate 'More' dropdown pages | Done |
| DOCS-29 | Fix corrupted 'Azure Local Cloud' terminology | Done |
| DOCS-30 | Implementation Guide end-to-end review | Todo |
| DOCS-31 | Automation section review — restructure and align with toolkit | Todo |
| DOCS-32 | Add 'Advanced Scenarios' section | Todo |
| DOCS-33 | Create High-Level Design (HLD) document | Todo |
| DOCS-34 | Create Low-Level Design (LLD) document | Todo |

### azurelocal-avd

| ID | Title | Status | Note |
|---|---|---|---|
| AVD-4 | Dev tracker: AVD on Azure Local | Todo | |
| AVD-5 | [INFRA] Standardize variable management | Done | |
| AVD-6 | [INFRA] Establish unified project-wide standards | Done | |
| AVD-7 | Epic: AVD Full Automation Build-Out | Done | **DUPLICATE of AVD-8** |
| AVD-8 | Epic: AVD Full Automation Build-Out (re-baselined) | Done | Surviving |
| AVD-9 | Sub-Task 1: Config & Schema Expansion | Done | **DUPLICATE of AVD-10** |
| AVD-10 | Sub-Task 1: Config & Schema Expansion (re-baselined) | Done | Surviving |
| AVD-11 | Sub-Task 2: PowerShell Automation Scripts | Done | **DUPLICATE of AVD-12** |
| AVD-12 | Sub-Task 2: PowerShell Automation Scripts (re-baselined) | Done | Surviving |
| AVD-13 | Sub-Task 3: Terraform + AVM | Done | **DUPLICATE of AVD-14** |
| AVD-14 | Sub-Task 3: Terraform + AVM (re-baselined) | Done | Surviving |
| AVD-15 | Sub-Task 4: Ansible Playbooks | Done | **DUPLICATE of AVD-16** |
| AVD-16 | Sub-Task 4: Ansible Playbooks (re-baselined) | Done | Surviving |
| AVD-17 | Sub-Task 5: Bicep + AVM | Done | **DUPLICATE of AVD-18** |
| AVD-18 | Sub-Task 5: Bicep + AVM (re-baselined) | Done | Surviving |
| AVD-21 | Sub-Task 6: ARM Templates (from Bicep) | Done | |
| AVD-22 | Sub-Task 7: Monitoring, Defender & Diagnostics | Done | **DUPLICATE** |
| AVD-23 | Sub-Task 7: Monitoring, Defender & Diagnostics | Done | **DUPLICATE** |
| AVD-24 | Sub-Task 7: Monitoring (re-baselined) | Done | Surviving |
| AVD-25 | Sub-Task 8: Identity & RBAC Automation | Done | **DUPLICATE of AVD-26** |
| AVD-26 | Sub-Task 8: Identity & RBAC (re-baselined) | Done | Surviving |
| AVD-27 | Sub-Task 9: Image Management & FSLogix | Done | **DUPLICATE of AVD-28** |
| AVD-28 | Sub-Task 9: Image Management & FSLogix (re-baselined) | Done | Surviving |
| AVD-29 | Sub-Task 10: Documentation + Diagrams | Done | **DUPLICATE of AVD-30** |
| AVD-30 | Sub-Task 10: Docs + Diagrams (re-baselined) | Done | Surviving |
| AVD-31 | Sub-Task 11: CI/CD Pipelines | Done | **DUPLICATE of AVD-32** |
| AVD-32 | Sub-Task 11: CI/CD Pipelines (re-baselined) | Done | Surviving |
| AVD-33 | Sub-Task 12: End-to-End Validation Matrix | Done | **DUPLICATE of AVD-34** |
| AVD-34 | Sub-Task 12: E2E Validation (re-baselined) | Done | Surviving |
| AVD-35 | Fix: Private Endpoints docs/IaC inaccurate for Azure Local | Done | |
| AVD-36 | Align FSLogix topology terminology (AVD ↔ SOFS) | **Todo** | Open |
| AVD-37 | Research FSLogix profile sizing best practices | **Todo** | Open |
| AVD-38 | Align Cloud Cache scope (SOFS=DR, AVD=alternative) | **Todo** | Open |
| AVD-39 | Cross-repo profile share validation | **Todo** | Open |
| AVD-40 | SMB share pre-flight validation — storage-agnostic | **Todo** | Open |
| AVD-41 | Research all viable profile storage options for AVD | **Todo** | Open |
| AVD-42 | feat: complete AVD full automation build-out (PR) | Done | |
| AVD-43 | docs: complete Epic #8 AVD documentation plan (PR) | Done | |

### azurelocal-sofs-fslogix (selected key items)

| ID | Title | Status |
|---|---|---|
| SOFS-5 | Remove `sofs/` from git tracking | Todo |
| SOFS-6 | Migrate legacy root folders to phase-oriented structure | Todo |
| SOFS-7 | Consolidate `scripts/` into `configure/` | Todo |
| SOFS-8 | Set up Pester test structure in `tests/` | Todo |
| SOFS-9 | Populate `examples/` with sample configs | Todo |
| SOFS-11 | Rewrite README.md | Todo |
| SOFS-12 | Flesh out architecture.md with topology diagrams | Todo |
| SOFS-13 | Create architecture diagrams (draw.io) | Todo |
| SOFS-14 | Update getting-started.md end-to-end | Todo |
| SOFS-15 | Replace all contoso/fabrikam with IIC naming | Todo |
| SOFS-16 | Add variable reference to MkDocs | Todo |
| SOFS-17 | Add troubleshooting guide | Todo |
| SOFS-19 | Validate Bicep templates end-to-end | Todo |
| SOFS-45 through SOFS-82 | Epic build-out (most Done) | Done/Todo |
| SOFS-80 | Research AV exclusion best practices | Todo |
| SOFS-81 | Bug: Typo in companion URL (`aurelocal-avd`) | **Todo — CONFIRMED** |
| SOFS-83 | FSLogix profile container sizing guide | Done |
| SOFS-84 | FSLogix sizing guide (single vs multi-share) | Todo — verify vs SOFS-83 |

### azurelocal-toolkit

| ID | Title | Status |
|---|---|---|
| TKT-2 | [INFRA] Standardize variable management | Done |
| TKT-3 | [INFRA] Establish unified project-wide standards | Done |
| TKT-4 | Create master variables registry | Todo |
| TKT-5 | Track IaC tool maturity status across all repos | Todo |
| TKT-6 | Research: Azure Deployment Stacks | Todo |
| TKT-6 | Create standards replication mechanism | Todo (**Possible duplicate iD on board**) |
| TKT-7 | IaC Tool Maturity Lifecycle Standard | Todo |
| TKT-8 | Add all Azure Local sites to Google Search Console / Analytics | Todo |
| TKT-17 | Create Azure CLI and Bash variants for all tasks | Todo |
| TKT-18 | Research: Spectre.Console for live monitoring scripts | Todo |
| TKT-19 | Build reusable QA/testing tools | Done |

### azurelocal-loadtools

| ID | Title | Status |
|---|---|---|
| LOAD-5 | Dev tracker: Load testing toolkit | Todo |
| LOAD-6 | [INFRA] Standardize variable management | Done |
| LOAD-7 | [INFRA] Establish unified project-wide standards | Done |
| LOAD-8 | [Epic] Load Testing Toolkit Full Build-Out | Todo |
| LOAD-9 | Config & schema expansion | Todo |
| LOAD-10 | Core framework modules | Todo |
| LOAD-11 | Infrastructure provisioning for load test environments | Todo |
| LOAD-12 | FIO storage I/O benchmarking integration | Done |
| LOAD-13 | HammerDB database load testing (TPC-C/TPC-H) | Done |
| LOAD-14 | iPerf3 network + stress-ng CPU/memory | Done |
| LOAD-15 | VMFleet S2D fleet storage testing | Todo |
| LOAD-16 | Monitoring dashboards + alerting for test run telemetry | Todo |
| LOAD-17 | Multi-format report generation (JSON, CSV, HTML, Markdown) | Todo |
| LOAD-18 | CI/CD pipelines (lint, test, release) | Todo |
| LOAD-19 | Documentation and operational runbooks | Todo |
| LOAD-20 | End-to-end validation matrix (all load testing tools) | Todo |

### azurelocal-vm-conversion-toolkit

| ID | Title | Status |
|---|---|---|
| VMCT-2 | Dev tracker: VM Gen1-to-Gen2 conversion toolkit | Todo |
| VMCT-3 | [INFRA] Standardize variable management | Done |
| VMCT-4 | [INFRA] Establish unified project-wide standards | Done |
| VMCT-5 | [Epic] VM Conversion Toolkit Full Build-Out | Todo |
| VMCT-6 | feat: script refinement — Azure Local conversion path (01–05 scripts) | Todo |
| *(unnamed)* | feat: script refinement — Hyper-V standalone conversion path | Todo |
| *(unnamed)* | feat: Linux and additional VM config support | Todo |
| *(unnamed)* | feat: error handling and staged rollback | Todo |
| *(unnamed)* | feat: Pester test coverage for all conversion scripts | Todo |
| *(unnamed)* | feat: shared logging + Azure Monitor forwarding | Todo |
| *(unnamed)* | infra: CI/CD pipelines | Todo |
| *(unnamed)* | docs: documentation expansion for all conversion paths | Todo |
| *(unnamed)* | feat: end-to-end validation matrix | Todo |

---

*Plan created by GitHub Copilot — 2026-04-04*  
*Source: AzureLocal org project #3 (ID: PVT_kwDOCxeiOM4BR2KZ), 215 total items*
