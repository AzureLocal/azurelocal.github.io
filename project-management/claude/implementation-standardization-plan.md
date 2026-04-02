# Plan: Implementation Docs & Toolkit Standardization

> Project start: 2026-03-24  
> Last revised: 2026-04-02  
> Status: **In Progress**

## TL;DR

This project is not complete. The implementation directory contains ~181 `.mdx` files total: 114 task files, ~38 index/phase-index files, 14 appendices, 8 special non-task pages, and 7 root intro pages. The toolkit contains 525 verified scripts. The standards below define the target state for every file type. The current repo does not yet meet that target.

Audited counts below are for the **114 task files only**. Non-task file compliance has not been audited yet.

Current audited counts from the 114 task files:

| Item | Actual Count | Missing | Status |
|------|-------------:|--------:|--------|
| Frontmatter (13+ fields) | 23/114 | 91 | Not done |
| Document Info Block present | 93/114 | 21 | Not done |
| Tab Labels standardized | TBD | TBD | Not audited |
| Variables section present | 113/114 | 1 | Near done |
| Troubleshooting section present | 113/114 | 1 | Near done |
| Navigation section present | 114/114 | 0 | Done |
| Version Control section present | 113/114 | 1 | Near done |
| All toolkit scripts verified on disk | 525/525 | 0 | Done |
| Orchestrated Script tab present | 65/114 | 49 | Not done |
| Standalone Script tab present | 62/114 | 52 | Not done |
| Toolkit path reference in tabs | 53/114 | 61 | Not done |
| Alternatives section present | 0/114 | 114 | Not done |

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
| Example company | Infinite Improbability Corp (IIC), eastus region |
| Author | AzureLocal Cloud Team |
| Script path format | Relative from toolkit root: `scripts/deploy/<phase>/<task>/<subfolder>/<script>` |
| Subfolder names | `powershell/`, `azurecli/`, `bash/` |
| GitHub URL base | `https://github.com/AzureLocal/azurelocal-toolkit/blob/main/` |

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

## Workstreams

### Workstream 0: PM Scaffolding

Status: Done

- Create and maintain `project-management/claude/`
- Keep plan, templates, notes, and tracking in sync with the actual repo state

### Workstream 1: Standards Definition

Status: In progress

- Define the canonical task page structure
- Define the canonical phase index structure
- Define exact tab labels, script-link format, alternatives-table format, and appendix expectations

### Workstream 2: Structural Remediation Across All Implementation Files

Status: In progress

The implementation directory contains more than just task files. Every `.mdx` file must be in scope. Full file inventory:

| File Type | Count | Standard Applies |
|-----------|------:|-----------------|
| Task files (`task-*.mdx`) | 114 | page-standard-template — full treatment: frontmatter, doc info block, tabs, scripts, alternatives, vars, TS, nav, VC |
| Phase/section index files (`index.mdx` inside parts/phases) | ~38 | phase-index-standard-template — frontmatter, doc info block, task list table, nav, VC; NO script tabs |
| Root runbook intro pages (`01-purpose-and-scope.mdx`, `02-how-to-use-this-runbook.mdx`, `03-key-inputs-and-variables.mdx`, `04-prerequisites-and-assumptions.mdx`, `04-variable-management-standard.mdx`, `05-authentication.mdx`, root `index.mdx`) | 7 | Frontmatter, doc info block, nav, VC — no script tabs; content review for accuracy |
| Special non-task pages (deployment-methods pages, ARM/portal instruction pages, monitoring pages) | ~8 | Frontmatter, doc info block, nav, VC — script tabs only if directly executable steps are present |
| Appendices (`appendix-*.mdx`, `appendices/index.mdx`) | 14 | Frontmatter, doc info block, nav, VC — appendix-d requires full script index rewrite per Workstream 4 |

**Total in-scope files: ~181**

Work for this workstream:
- Bring frontmatter, document info block, variables, troubleshooting, navigation, and version control into compliance across ALL file types above
- Re-audit every claim before marking anything done
- The audited counts in the TL;DR table cover task files only — non-task file compliance is not yet audited

### Workstream 3: Script Integration Across Task Files

Status: Not started

- Add missing Orchestrated Script tabs
- Add missing Standalone Script tabs
- Add toolkit `Script` references to both tabs
- Add `## Alternatives` sections to all applicable task files
- Embed actual script content from the toolkit

Gap status (audited 2026-04-02):

| Check | Files Compliant | Files Needing Fix |
|-------|----------------:|------------------:|
| Orchestrated Script tab present | 65/114 | 49 |
| Standalone Script tab present | 62/114 | 52 |
| Toolkit script path reference in tabs | 53/114 | 61 |
| Alternatives section present | 0/114 | 114 |
| Tab labels standardized | TBD | TBD |

### Workstream 4: Appendix D

Status: Not started

- Rewrite `docs/implementation/appendices/appendix-d-script-index.mdx`
- Ensure the appendix reflects the real script set from `deploy-script-coverage.md`

### Workstream 5: Content Verification

Status: Not started

- Verify Azure guidance against Microsoft Learn
- Verify on-prem guidance against vendor and Windows documentation
- Run site validation after content changes

### Workstream 6: Tracking

Status: In progress

- Keep tracking data aligned with actual audited counts only
- Do not mark items done based on assumptions or historical notes

---

## Script Integration Per-Task Checklist

For every one of the 114 task files, verify and fix the following. Script names per task come from `project-management/deploy-script-coverage.md`.

#### Per-Task Checklist

For each task file, complete all of the following:

**a — Tab 1: Manual/Portal tab**
- [ ] Label is `Azure Portal` (Azure tasks), `Manual (RDP/Console)` (on-prem tasks), or an approved task-specific hardware label (e.g., `SConfig Utility`, `iDRAC Console`)
- [ ] `value=` attribute matches label (e.g., `value="manual"`, `value="sconfig"`)
- [ ] Content: step-by-step manual instructions are present

**b — Tab 2: Orchestrated Script tab**
- [ ] Label is exactly `Orchestrated Script` — no variations
- [ ] `value="orchestrated"`
- [ ] First line of tab content: `**Script**: [\`<relative-path>\`](<github-url>)` — link to the `Invoke-*-Orchestrated.ps1` script in the toolkit
- [ ] Embedded PowerShell content from the actual `.ps1` file in the toolkit

Toolkit path format for the reference line:
```
**Script**: [`scripts/deploy/<part>/<phase>/<task-folder>/powershell/<Invoke-*-Orchestrated.ps1>`](https://github.com/AzureLocal/azurelocal-toolkit/blob/main/scripts/deploy/<part>/<phase>/<task-folder>/powershell/<Invoke-*-Orchestrated.ps1>)
```

**c — Tab 3: Standalone Script tab**
- [ ] Label is exactly `Standalone Script` — no variations
- [ ] `value="standalone"`
- [ ] First line of tab content: `**Script**: [\`<relative-path>\`](<github-url>)` — link to the standalone `.ps1` script in the toolkit
- [ ] Embedded PowerShell content from the actual `.ps1` file in the toolkit

Toolkit path format:
```
**Script**: [`scripts/deploy/<part>/<phase>/<task-folder>/powershell/<ScriptName.ps1>`](https://github.com/AzureLocal/azurelocal-toolkit/blob/main/scripts/deploy/<part>/<phase>/<task-folder>/powershell/<ScriptName.ps1>)
```

**d — Alternatives section**
- [ ] Section heading `## Alternatives` is present (or a blockquote block `> **Alternatives:**`)
- [ ] Table listing AzCLI and Bash script alternatives from the toolkit

Required Alternatives table format:
```markdown
## Alternatives

> The following alternative script formats are available in the toolkit for this task:
>
> | Format | Script | Toolkit Path |
> |--------|--------|-------------|
> | Azure CLI (PowerShell) | `az-<task-name>.ps1` | [`scripts/deploy/<path>/azurecli/az-<task-name>.ps1`](https://github.com/AzureLocal/azurelocal-toolkit/blob/main/scripts/deploy/<path>/azurecli/az-<task-name>.ps1) |
> | Bash | `az-<task-name>.sh` | [`scripts/deploy/<path>/bash/az-<task-name>.sh`](https://github.com/AzureLocal/azurelocal-toolkit/blob/main/scripts/deploy/<path>/bash/az-<task-name>.sh) |
```

**e — Appendix D**
- [ ] `docs/implementation/appendices/appendix-d-script-index.mdx` updated with accurate per-task script entries covering all 114 tasks and all script types

---

#### Script Source of Truth

All script names are defined in `project-management/deploy-script-coverage.md`.

| Coverage Column | Script | Subfolder | Tab |
|-----------------|--------|-----------|-----|
| `Standalone PS` | `<ScriptName.ps1>` | `powershell/` | Standalone Script tab |
| `Orch PS` | `Invoke-*-Orchestrated.ps1` | `powershell/` | Orchestrated Script tab |
| `Standalone AzCLI` | `az-*-*.ps1` | `azurecli/` | Alternatives table |
| `Standalone Bash` | `az-*-*.sh` | `bash/` | Alternatives table |
| `Other` | Additional `.ps1` files | `powershell/` | Alternatives table |

GitHub URL base: `https://github.com/AzureLocal/azurelocal-toolkit/blob/main/`

---

## Work Order

1. Update PM files to reflect actual repo state
2. Re-audit the remaining structure claims that are still marked TBD or Near done
3. Fix standards/templates before touching task pages
4. Update task files in controlled batches
5. Rewrite Appendix D after task-page updates are in place

## Known Script Gap Summary

| Area | Gap |
|------|-----|
| 03/phase-01 AD tasks 02-05 | Docs exist, no scripts |
| 04/phase-01 tasks 01,03,04,05 | Empty script folders (.gitkeep only) |
| 04/phase-06 ALL 8 tasks | Docs exist, 0 scripts in deploy folder |
| 05 scattered | ~7 tasks missing scripts |
| 06 ALL 6 tasks | Thin docs + 0 scripts |
| 07 ALL 7 tasks | 0 scripts |
| 08 ALL 3 docs | Thin content, no scripts |

## Areas With Good Script Coverage

- 04/phase-03-os-configuration: 13/13 tasks ✓
- 04/phase-04-arc-registration: 4/4 tasks ✓
- 03/phase-02-enterprise-readiness: 4/4 tasks ✓
- 03/phase-03-network-infrastructure: 4/4 tasks ✓
- 05/phase-01-sdn-deployment: 3/3 tasks ✓
