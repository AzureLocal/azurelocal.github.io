# Plan: Cross-Repo GitHub Project & Repository Standardization

## TL;DR

Create an org-level GitHub Project (V2) for the AzureLocal organization to track work across all solution repos. Standardize every repo with consistent labels, issue/PR templates, release-please automation, CHANGELOG, CODEOWNERS, CONTRIBUTING, and LICENSE. Store master plans centrally in `azurelocal.github.io/project_management/` with local copies in each repo's own `project_management/` folder. Designed for 5 current repos and extensible for future repos.

---

## Current State Audit

### What exists today (inconsistencies highlighted)

| Asset | sofs-fslogix | avd | loadtools | vm-toolkit | github.io |
|-------|:---:|:---:|:---:|:---:|:---:|
| release-please-config.json | YES | -- | -- | -- | -- |
| .release-please-manifest.json | YES | -- | -- | -- | -- |
| release-please.yml workflow | YES | -- | -- | -- | -- |
| CHANGELOG.md | YES | -- | -- | YES (manual) | -- |
| CODEOWNERS | root | root | .github/ | .github/ | -- |
| CONTRIBUTING.md | -- | -- | -- | YES | -- |
| LICENSE | -- | -- | MIT | MIT | -- |
| Issue templates | -- | -- | -- | YES (bug+feature) | -- |
| PR template | -- | -- | -- | YES | -- |
| GitHub Actions workflows | 2 | 1 | 5 | -- | 1 |
| MkDocs site | YES | YES | -- (AsciiDoc) | -- | -- |
| Docusaurus site | -- | -- | -- | -- | YES |
| project_management/ | -- | -- | -- | -- | empty |

### Key gaps:
- 4 of 5 repos missing release-please automation
- 4 of 5 repos missing issue templates
- 4 of 5 repos missing PR template
- 3 of 5 repos missing CONTRIBUTING.md
- 3 of 5 repos missing LICENSE
- 1 repo has CODEOWNERS at root, others in .github/ (inconsistent)
- No org-level GitHub Project exists
- No consistent label taxonomy across repos
- No naming convention for issues, branches, or commits

---

## Phase 1: GitHub Project Setup (Org-Level)

### 1.1 — Create the Project

- Location: `github.com/orgs/AzureLocal/projects/` → New project
- Name: **Azure Local Solutions**
- Description: Cross-repo project tracking for all Azure Local solution repositories
- Visibility: Organization-wide (all repos can feed into it)

### 1.2 — Custom Fields

| Field | Type | Values | Purpose |
|-------|------|--------|---------|
| **Status** | Single select | Backlog, Todo, In Progress, In Review, Done | Standard Kanban |
| **Solution** | Single select | Workspace, Docs Site, SOFS/FSLogix, AVD, Load Tools, VM Conversion, *(extensible)* | Which repo/area |
| **Priority** | Single select | P0-Critical, P1-High, P2-Medium, P3-Low | Triage priority |
| **Category** | Single select | Feature, Bug Fix, Documentation, Infrastructure, Refactor, Security | Complements conventional commit types |
| **Sprint** | Iteration | 2-week iterations | Time-boxing |
| **Effort** | Single select | XS, S, M, L, XL | T-shirt sizing |

### 1.3 — Views

| View | Type | Filter/Group | Purpose |
|------|------|-------------|---------|
| **All Work** | Table | Group by Status | Master view |
| **Board** | Board | Columns = Status | Kanban for daily standups |
| **By Solution** | Table | Group by Solution | See all work for one repo |
| **Roadmap** | Roadmap | Group by Solution, date by Sprint | Timeline planning |
| **Bugs** | Table | Filter: Category = Bug Fix | Bug triage view |
| **Docs** | Table | Filter: Category = Documentation | Docs work across all repos |

### 1.4 — Auto-Add Workflows

Configure the project to auto-add new issues and PRs from all AzureLocal repos:
- When issue is opened → add to project, set Status = Backlog
- When PR is opened → add to project, set Status = In Review
- When issue/PR is closed → set Status = Done

---

## Phase 2: Label Taxonomy (All Repos)

### 2.1 — Standard Labels

Every AzureLocal repo MUST have these labels. Labels are synced manually or via a GitHub Action (`EndBug/label-sync`).

**Type labels** (mutually exclusive — what kind of work):
| Label | Color | Description |
|-------|-------|-------------|
| `type/feature` | `#0E8A16` (green) | New feature or capability |
| `type/bug` | `#D73A4A` (red) | Something isn't working |
| `type/docs` | `#0075CA` (blue) | Documentation only |
| `type/infra` | `#5319E7` (purple) | CI/CD, workflows, repo config |
| `type/refactor` | `#FBCA04` (yellow) | Code improvement, no behavior change |
| `type/security` | `#B60205` (dark red) | Security fix or hardening |
| `type/question` | `#D876E3` (pink) | Question or discussion |

**Solution labels** (which repo/area — auto-applied via templates):
| Label | Color | Description |
|-------|-------|-------------|
| `solution/sofs` | `#1D76DB` | SOFS / FSLogix |
| `solution/avd` | `#1D76DB` | Azure Virtual Desktop |
| `solution/loadtools` | `#1D76DB` | Load & performance testing |
| `solution/vmconvert` | `#1D76DB` | VM conversion toolkit |
| `solution/docs-site` | `#1D76DB` | Docusaurus docs site |
| `solution/workspace` | `#1D76DB` | Cross-repo / org-wide |

**Priority labels**:
| Label | Color | Description |
|-------|-------|-------------|
| `priority/critical` | `#B60205` | Must fix immediately |
| `priority/high` | `#D93F0B` | Next sprint |
| `priority/medium` | `#FBCA04` | Planned |
| `priority/low` | `#0E8A16` | Nice to have |

**Status labels** (optional — project board is primary, but useful in repos without project access):
| Label | Color | Description |
|-------|-------|-------------|
| `status/blocked` | `#E4E669` | Blocked by dependency |
| `status/needs-info` | `#E4E669` | Waiting for more information |
| `status/wontfix` | `#FFFFFF` | Declined |

**Release-please labels** (used by release-please for CHANGELOG categories):
| Label | Color | Description |
|-------|-------|-------------|
| `feat` | `#0E8A16` | Maps to Features in CHANGELOG |
| `fix` | `#D73A4A` | Maps to Bug Fixes |
| `docs` | `#0075CA` | Maps to Documentation |
| `infra` | `#5319E7` | Maps to Infrastructure |
| `chore` | `#EDEDED` | Maps to Miscellaneous |

### 2.2 — Label Sync Workflow

Create a shared workflow or GitHub Action that syncs labels from a central definition file. Store the master label list in the docs repo at `project_management/labels.yml` and use `EndBug/label-sync` or a simple script to push to all repos.

---

## Phase 3: Naming Conventions

### 3.1 — Issue Titles

Format: `[TYPE] Short description`

Examples:
- `[FEATURE] Add Cloud Cache support to FSLogix configuration`
- `[BUG] S2D pool creation fails on 3-node cluster`
- `[DOCS] Add troubleshooting guide for NTFS permissions`
- `[INFRA] Add release-please workflow to avd repo`

The `[TYPE]` prefix aligns with conventional commit types and label taxonomy.

### 3.2 — Branch Names

Format: `<type>/<short-description>`

| Type | When |
|------|------|
| `feat/` | New feature |
| `fix/` | Bug fix |
| `docs/` | Documentation |
| `infra/` | CI/CD, workflows, config |
| `refactor/` | Code improvement |
| `release/` | Release branch (auto by release-please) |

Examples:
- `feat/cloud-cache-support`
- `fix/s2d-pool-creation`
- `docs/troubleshooting-guide`

### 3.3 — Commit Messages (Conventional Commits)

Format: `<type>(<scope>): <description>`

| Type | When | CHANGELOG Category |
|------|------|-------------------|
| `feat` | New feature | Features |
| `fix` | Bug fix | Bug Fixes |
| `docs` | Documentation | Documentation |
| `infra` | CI/CD, workflows | Infrastructure |
| `chore` | Maintenance | Miscellaneous |
| `refactor` | Code improvement | Miscellaneous |
| `test` | Tests | Miscellaneous |

Scope is optional but recommended — use the module/area name:
- `feat(terraform): add Cloud Cache variables`
- `fix(ansible): correct S2D timeout handling`
- `docs(architecture): add capacity planning section`

This directly feeds release-please's CHANGELOG generation.

### 3.4 — PR Titles

Same as commit messages (conventional commits). Release-please uses the PR title as the squash-merge commit message, which drives the CHANGELOG entry.

### 3.5 — Milestone Names

Format: `v<major>.<minor>` or descriptive name for cross-repo efforts.

Per-repo milestones: `v0.1`, `v0.2`, `v1.0`
Cross-repo milestones tracked via Sprint iterations on the GitHub Project.

---

## Phase 4: `project_management/` Folder Structure

### 4.1 — Centralized (Docs Repo)

```
azurelocalcloud-azurelocal.github.io/
  project_management/
    README.md                         # How this folder works, conventions
    labels.yml                        # Master label definitions (synced to all repos)
    repo-standard.md                  # "Gold standard" repo checklist
    workspace/                        # Cross-repo / org-wide plans
      plan-githubProjectAndRepoStandardization.prompt.md
    sofs/                             # SOFS/FSLogix repo plans
      plan-automationInteroperabilityStandard.prompt.md
      plan-documentationOverhaul.prompt.md
    avd/                              # AVD repo plans
    loadtools/                        # Load Tools repo plans
    vmconvert/                        # VM Conversion Toolkit plans
    docs-site/                        # Docusaurus site plans
```

### 4.2 — Local (Each Repo)

Each repo gets a `project_management/` folder with repo-specific plans only:

```
<repo>/
  project_management/
    README.md                         # Points to centralized location, explains local scope
    plan-*.md                         # Repo-specific plans (copies of centralized versions)
```

### 4.3 — Sync Strategy

- **Source of truth**: `azurelocalcloud-azurelocal.github.io/project_management/<solution>/`
- **Local copies**: Each repo's `project_management/` contains copies of its own plans for offline/standalone access
- **Cross-repo plans** (in `workspace/`) do NOT get copied to individual repos — they exist only centrally
- Plans are markdown files, not tracked in CI — manual sync is acceptable since these are planning documents

### 4.4 — Plan File Naming Convention

Format: `plan-<camelCaseName>.prompt.md`

The `.prompt.md` extension signals these are refinable prompt-style documents. Examples:
- `plan-automationInteroperabilityStandard.prompt.md`
- `plan-documentationOverhaul.prompt.md`
- `plan-repoStandardization.prompt.md`

---

## Phase 5: Repository Standardization

Every AzureLocal repo MUST have these files at a baseline. Use the vm-conversion-toolkit as the template for templates (it's the most complete), and sofs-fslogix as the template for release-please.

### 5.1 — Required Files Checklist

| File | Location | Source Template | Notes |
|------|----------|----------------|-------|
| `LICENSE` | root | MIT (from loadtools) | All repos MIT |
| `CODEOWNERS` | `.github/CODEOWNERS` | vm-toolkit pattern | Standardize to `.github/` |
| `CONTRIBUTING.md` | root | vm-toolkit (adapt per repo) | PowerShell style section shared |
| `CHANGELOG.md` | root | sofs-fslogix format | Keep a Changelog format |
| `release-please-config.json` | root | sofs-fslogix | Same category structure |
| `.release-please-manifest.json` | root | sofs-fslogix | Start at `"0.0.0"` |
| `.github/workflows/release-please.yml` | .github/workflows/ | sofs-fslogix | Identical across repos |
| `.github/ISSUE_TEMPLATE/bug_report.md` | .github/ISSUE_TEMPLATE/ | vm-toolkit (adapt env table) | Adapt "which script" per repo |
| `.github/ISSUE_TEMPLATE/feature_request.md` | .github/ISSUE_TEMPLATE/ | vm-toolkit | Reusable as-is |
| `.github/ISSUE_TEMPLATE/config.yml` | .github/ISSUE_TEMPLATE/ | new | Adds blank issue + external links |
| `.github/pull_request_template.md` | .github/ | vm-toolkit (generalize) | Remove vm-toolkit-specific fields |
| `project_management/README.md` | project_management/ | new | Points to central location |

### 5.2 — Per-Repo Adaptation Matrix

What gets customized per repo vs. copied as-is:

| File | Identical? | What changes |
|------|-----------|-------------|
| LICENSE | Yes | None |
| CODEOWNERS | Yes | None (all @kristopherjturner) |
| CONTRIBUTING.md | ~70% shared | "Which script" section, testing instructions, toolchain |
| CHANGELOG.md | Format shared | Content is repo-specific |
| release-please-config.json | Yes | None (same categories work for all) |
| .release-please-manifest.json | Yes | Version number |
| release-please.yml | Yes | None |
| bug_report.md | ~60% shared | Environment table, "which script" checklist |
| feature_request.md | Yes | None |
| config.yml | ~90% shared | Contact link URLs |
| pull_request_template.md | ~80% shared | Testing checklist, repo-specific fields |

### 5.3 — Standardization Order (by repo)

1. **azurelocal-sofs-fslogix** — Already closest to standard. Needs: LICENSE, CONTRIBUTING.md, issue templates, PR template, move CODEOWNERS to `.github/`
2. **aurelocal-avd** — Needs: LICENSE, CONTRIBUTING.md, CHANGELOG.md, release-please, issue templates, PR template, move CODEOWNERS to `.github/`
3. **azurelocal-loadtools** — Needs: CONTRIBUTING.md, CHANGELOG.md, release-please, issue templates, PR template (CODEOWNERS already in `.github/`)
4. **azurelocal-vm-conversion-toolkit** — Needs: release-please, release-please workflow (has everything else already)
5. **azurelocalcloud-azurelocal.github.io** — Needs: LICENSE, CODEOWNERS, CONTRIBUTING.md, CHANGELOG.md, release-please, issue templates, PR template

### 5.4 — CODEOWNERS Migration

Repos with CODEOWNERS at root (sofs-fslogix, avd) → move to `.github/CODEOWNERS`. GitHub supports both locations but `.github/` is the conventional location and keeps the repo root cleaner.

---

## Phase 6: Release-Please & CHANGELOG Automation

### 6.1 — Standard release-please-config.json

All repos use this identical config:

```json
{
  "$schema": "https://raw.githubusercontent.com/googleapis/release-please/main/schemas/config.json",
  "release-type": "simple",
  "packages": {
    ".": {
      "changelog-path": "CHANGELOG.md",
      "include-component-in-tag": false,
      "categories": [
        { "title": "Features", "labels": ["feat"] },
        { "title": "Bug Fixes", "labels": ["fix"] },
        { "title": "Documentation", "labels": ["docs"] },
        { "title": "Infrastructure", "labels": ["infra"] },
        { "title": "Miscellaneous", "labels": ["chore", "ci", "refactor", "style", "test"] }
      ]
    }
  }
}
```

### 6.2 — Standard release-please.yml Workflow

```yaml
name: Release Please
on:
  push:
    branches: [main]
permissions:
  contents: write
  pull-requests: write
jobs:
  release-please:
    runs-on: ubuntu-latest
    steps:
      - uses: googleapis/release-please-action@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
```

### 6.3 — CHANGELOG Bootstrap

For repos without a CHANGELOG (avd, loadtools, github.io), create one with this format:

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Features

- <retroactive entry for existing work>
```

### 6.4 — Conventional Commits → CHANGELOG Flow

```
Developer commits → conventional commit message ("feat(terraform): add X")
  → PR with conventional title
    → merge to main
      → release-please detects commits
        → creates/updates Release PR
          → merge Release PR
            → CHANGELOG.md auto-updated
              → Git tag + GitHub Release created
```

---

## Phase 7: Issue & PR Templates (Shared Templates)

### 7.1 — Generalized Bug Report

Adapt from vm-toolkit's template. Replace the script-specific checklist with a repo-agnostic section + repo-specific `ISSUE_TEMPLATE/config.yml` for context.

### 7.2 — Generalized Feature Request

The vm-toolkit version is already generic — reuse as-is.

### 7.3 — Documentation Issue Template (New)

Add a third template for docs-only issues:

```markdown
---
name: Documentation
about: Report missing, incorrect, or unclear documentation
title: '[DOCS] '
labels: type/docs
assignees: ''
---

## Page or Section

<!-- URL or path to the doc page with the issue -->

## What's Wrong or Missing?

<!-- Describe the documentation gap or error -->

## Suggested Improvement

<!-- Optional: how would you improve it? -->
```

### 7.4 — config.yml (Issue Template Chooser)

```yaml
blank_issues_enabled: true
contact_links:
  - name: Azure Local Documentation
    url: https://azurelocal.cloud
    about: Visit the main Azure Local documentation site
```

### 7.5 — Generalized PR Template

Adapt from vm-toolkit. Keep: Summary, Related Issue, Type of Change, Checklist. Generalize: Testing section becomes repo-agnostic.

---

## Phase 8: Docs Repo as Project Hub

### 8.1 — project_management/README.md

Create a README that explains:
- How the folder structure works (workspace/ vs. solution-specific)
- Naming convention for plan files
- How plans relate to GitHub Project issues
- How to create a new plan
- Link to the org-level GitHub Project

### 8.2 — repo-standard.md

A "gold standard" checklist document that describes what every AzureLocal repo must have. Used as both documentation and an audit tool. Contains:
- File checklist (Phase 5.1)
- Label requirements (Phase 2.1)
- Naming conventions (Phase 3)
- Workflow requirements
- When to add new entries (new repo onboarding)

### 8.3 — labels.yml

Machine-readable label definitions that can be consumed by a sync tool:

```yaml
- name: type/feature
  color: "0E8A16"
  description: New feature or capability
- name: type/bug
  color: "D73A4A"
  description: Something isn't working
# ... etc
```

---

## Phase 9: Move Existing Plans

### 9.1 — Move SOFS Plans to Central Location

Move the two existing plan files from the sofs-fslogix repo root:
- `plan-automationInteroperabilityStandard.prompt.md` → `project_management/sofs/`
- `plan-documentationOverhaul.prompt.md` → `project_management/sofs/`

Also copy them into `azurelocal-sofs-fslogix/project_management/` for local access.

### 9.2 — Create This Plan in Central Location

Save this plan as:
- `project_management/workspace/plan-githubProjectAndRepoStandardization.prompt.md`

---

## Relevant Files

### CREATE (centralized — docs repo):
- `project_management/README.md` — Hub documentation
- `project_management/repo-standard.md` — Gold standard checklist
- `project_management/labels.yml` — Master label definitions
- `project_management/workspace/plan-githubProjectAndRepoStandardization.prompt.md` — This plan
- `project_management/sofs/plan-automationInteroperabilityStandard.prompt.md` — Moved from sofs root
- `project_management/sofs/plan-documentationOverhaul.prompt.md` — Moved from sofs root

### CREATE (per repo — 5 repos × ~8 files each):
- `.github/CODEOWNERS` — Standardized location (some repos: move from root)
- `.github/workflows/release-please.yml` — Release automation
- `.github/ISSUE_TEMPLATE/bug_report.md` — Bug report template
- `.github/ISSUE_TEMPLATE/feature_request.md` — Feature request template
- `.github/ISSUE_TEMPLATE/docs_issue.md` — Documentation issue template
- `.github/ISSUE_TEMPLATE/config.yml` — Template chooser config
- `.github/pull_request_template.md` — PR template
- `CONTRIBUTING.md` — Contributing guidelines
- `LICENSE` — MIT license
- `CHANGELOG.md` — Keep a Changelog format
- `release-please-config.json` — Release-please config
- `.release-please-manifest.json` — Version manifest
- `project_management/README.md` — Local pointer to central plans

### MODIFY:
- `azurelocal-sofs-fslogix/CODEOWNERS` — Move to `.github/`
- `aurelocal-avd/CODEOWNERS` — Move to `.github/`

### REFERENCE (no changes):
- `azurelocal-vm-conversion-toolkit/CONTRIBUTING.md` — Template source for other repos
- `azurelocal-vm-conversion-toolkit/.github/` — Template source for templates
- `azurelocal-sofs-fslogix/release-please-config.json` — Template source for release-please

---

## Implementation Order

### Wave 1: Foundation (do first, unblocks everything else)
1. Create `project_management/` structure in docs repo (Phase 4, Phase 8)
2. Create `labels.yml` master definition (Phase 2)
3. Create `repo-standard.md` checklist (Phase 8.2)
4. Create org-level GitHub Project with fields and views (Phase 1)

### Wave 2: Template Files (can parallelize across repos)
5. Create shared issue templates (Phase 7) — write once, copy to each repo
6. Create shared PR template (Phase 7.5) — write once, copy to each repo
7. Create shared CONTRIBUTING.md base (Phase 5.1) — adapt per repo

### Wave 3: Release Automation (per repo, parallelizable)
8. Add release-please to avd, loadtools, vm-toolkit, github.io (Phase 6)
9. Bootstrap CHANGELOG.md in repos that lack one (Phase 6.3)
10. Add LICENSE to repos missing it (Phase 5.1)

### Wave 4: Cleanup & Sync
11. Move CODEOWNERS to `.github/` in sofs-fslogix and avd (Phase 5.4)
12. Sync labels to all repos from labels.yml (Phase 2.2)
13. Move existing SOFS plans to central location (Phase 9)
14. Configure GitHub Project auto-add workflows (Phase 1.4)

---

## Verification

1. **Repo audit**: Run the Phase 5.1 checklist against all 5 repos — every box checked
2. **Label sync**: Every repo has the exact same label set (compare via `gh label list` across repos)
3. **Release-please test**: Make a conventional commit to each repo, verify release-please creates a Release PR with correct CHANGELOG entries
4. **GitHub Project**: Create a test issue in each repo, verify it auto-appears on the project board with correct Solution field
5. **Template test**: Open a new issue in each repo, verify all 3 templates appear in the chooser
6. **PR template test**: Open a PR in each repo, verify the template pre-fills
7. **project_management/ structure**: Verify both centralized and local folders exist with correct README pointers
8. **Naming convention test**: Verify a sample issue, branch, commit, and PR all follow the conventions from Phase 3

---

## Decisions

- **Org-level project** — Not repo-level. Gives cross-repo visibility.
- **Centralized + local plans** — Central in docs repo is source of truth; local copies in each repo for convenience.
- **MIT license everywhere** — Consistent with existing repos that have licenses.
- **CODEOWNERS in `.github/`** — Standardize to the conventional location.
- **release-please `simple` type** — These aren't npm/pypi packages; `simple` with conventional commits is the right fit.
- **Same release-please categories everywhere** — feat/fix/docs/infra/chore covers all repos.
- **vm-toolkit templates as base** — They're the most complete; generalize from there.
- **Labels prefixed by namespace** — `type/`, `solution/`, `priority/`, `status/` prevents collision and aids filtering.

---

## Further Considerations

1. **Label sync automation** — A GitHub Action in the docs repo that runs `EndBug/label-sync` against all repos on push to `labels.yml`. Keeps labels consistent without manual work. Recommend adding this as a follow-on once the baseline is established.

2. **Repo naming inconsistency** — `aurelocal-avd` is missing the `z` in `azure`. Renaming a repo is disruptive (breaks clones, forks, links), so this is a "fix later" item. Note it in repo-standard.md.

3. **Docs site subpath** — Currently the docs site (`azurelocal.cloud`) doesn't link to individual solution repo docs sites. Consider adding a "Solutions" section to the Docusaurus site that links to each MkDocs site. Follow-on plan, not in scope here.
