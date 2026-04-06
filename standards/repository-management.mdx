# Repository Management Standard

> **Canonical reference:** [Repository Management Standard (full)](https://azurelocal.cloud/standards/repository-management/)  
> **Applies to:** All AzureLocal repositories  
> **Last Updated:** 2026-04-03

---

## Overview

This standard defines how the AzureLocal repositories are managed as a coordinated portfolio.

Each repository is a **standalone deliverable** with its own README, issues, releases, workflows, and branch protections. At the same time, each repository participates in a shared governance model where `azurelocal.github.io` acts as the central source for standards, portfolio-level guidance, and shared repository management practices.

The intent is to avoid two failure modes:

1. treating every repo as completely independent and allowing standards drift
2. treating every repo as if it were just a subfolder of the docs repo

The correct model is: **independent repositories, centrally governed standards**.

---

## Portfolio Model

### Repository Roles

| Repository Type | Role | Notes |
|-----------------|------|-------|
| `azurelocal.github.io` | Central standards, documentation portal, and governance source | Holds canonical standards and shared repo governance references |
| `azurelocal-toolkit` | Reference implementation and shared automation toolkit | Primary implementation repo for deployment, validation, and automation assets |
| Solution repositories | Standalone solution delivery repos | Must be independently usable while following org-wide standards |
| Supporting repositories | Utilities, training, migration, demos, or experiments | May have lighter content, but still follow the governance baseline |

### Governance Principle

All repositories must be understandable and usable on their own, but they must not invent their own governance model.

The central repository governance source is:

- standards and governance guidance in `azurelocal.github.io`
- shared labels and repo rules in `.github/`
- portfolio-level planning and cross-repo coordination in `repo-management/`

---

## Repo Management Contract

Every repository must have a root-level `repo-management/` folder.

This folder is for **repository operations and planning**, not published product documentation.

### Standard Layout

| Path | Purpose |
|------|---------|
| `repo-management/README.md` | Overview of the folder and links to key docs |
| `repo-management/setup.md` | How this repo is configured: branch protection, labels, secrets, CODEOWNERS, and how to replicate it |
| `repo-management/automation.md` | Every GitHub Actions workflow documented: what it does, why it exists, triggers, secrets required |
| `repo-management/scripts/` | Helper scripts used for repo-management or governance tasks |

### Allowed Content

The `repo-management/` folder documents **how the repo works** — its configuration, automation, and operational setup. It is the reference a maintainer needs to understand, operate, or replicate this repository.

The `repo-management/` folder must not become a replacement for:

- `README.md` at the repo root
- canonical standards under `standards/`
- published user-facing documentation in repos that use GitHub Pages
- work-item tracking (use GitHub Projects for that)

---

## Standards vs Repo Management

Use the following split consistently:

| Location | Purpose |
|----------|---------|
| `standards/` | Canonical rules and standards that multiple repos are expected to follow |
| `repo-management/` | Planning, governance operations, scripts, roadmaps, checklists, and repo-local execution artifacts |
| `README.md` | Primary entry point for humans using the repo |
| `docs/` | Published documentation only, when the repo actually uses a docs site |

If a document describes rules that all repos should follow, it belongs in `standards/`.

If a document describes how a specific repo is being organized, tracked, migrated, or improved, it belongs in `repo-management/`.

---

## Baseline Requirements For All Repositories

Unless explicitly exempted, every repository should follow the baseline below.

### Core Repo Files

- `README.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`
- `LICENSE`
- `.github/CODEOWNERS`
- `.github/pull_request_template.md` or equivalent PR template
- `.github/ISSUE_TEMPLATE/` set
- `release-please-config.json`
- `.release-please-manifest.json`
- `repo-management/README.md`

### GitHub Governance

- `main` branch protected
- admins allowed to bypass when needed for urgent maintenance or portfolio management
- required review and status checks configured where appropriate
- CODEOWNERS aligned to the shared ownership model
- labels synchronized to the central label set

### Release Automation

- release-please configured
- changelog generated from conventional commits
- tags and releases consistent with org conventions

### Pages / Documentation Expectations

| Repo Type | Expectation |
|-----------|-------------|
| `azurelocal.github.io` | Docusaurus-based central portal |
| `azurelocal-toolkit` | No repo-local docs site; root README is primary documentation |
| Most solution repos | MkDocs + GitHub Pages enabled |
| Minimal/supporting repos | May omit docs site if a docs site adds no value, but must still have a complete README |

### Workflow Expectations

Most repositories should include automation for:

- release-please
- docs deployment when the repo has a docs site
- linting or validation workflows appropriate to the repo type
- repo structure validation where useful

---

## Exceptions And Special Cases

### `azurelocal.github.io`

This repo is not just another solution repo. It is the central docs and standards authority.

Special responsibilities:

- maintain canonical standards
- maintain shared label and repo governance references
- host central docs and portfolio guidance
- drive cross-repo governance changes

### `azurelocal-toolkit`

This repo is the implementation and automation reference repo.

Special responsibilities:

- hold shared automation assets
- act as the primary implementation reference
- keep the root README as the primary user-facing entry point
- avoid carrying a repo-local docs site just for symmetry

---

## Documentation Responsibilities

The following rules apply to repo documentation:

1. The root `README.md` must explain the repo clearly on its own.
2. User-facing published docs belong in `docs/` only if that repo actually operates a docs site.
3. Governance and planning artifacts belong in `repo-management/`.
4. Cross-repo rules belong in `standards/`.
5. A repo must not depend on hidden tribal knowledge from another repo to be understandable.

---

## Branch Protection Model

The standard default for AzureLocal repositories is:

- protect `main`
- require reviews where appropriate
- require status checks where appropriate
- prevent casual direct pushes
- allow administrator bypass for controlled maintenance and portfolio management work

This balances governance with operational reality for a small centrally managed portfolio.

---

## CODEOWNERS Model

All repositories should use a substantially similar CODEOWNERS structure unless there is a real reason to diverge.

The objective is consistency of ownership, not needless uniqueness.

At minimum:

- every repo must have a `.github/CODEOWNERS`
- ownership should reflect the actual maintainers
- shared governance repos should not use a radically different ownership pattern without justification

---

## Repo Management Scripts

`repo-management/scripts/` is the approved place for scripts that support repository governance and maintenance, for example:

- repo audit scripts
- branch protection validation helpers
- label sync helpers
- documentation sync helpers
- migration scripts for folder structure or standards adoption

These scripts should not be mixed into product/runtime automation folders unless they are actually part of the solution runtime.

---

## Issue Management Model

Issues are the primary unit of planned work across the AzureLocal portfolio. Labels alone are not the planning model. Labels, project board fields, milestones, tracker issues, and dependencies each serve a distinct purpose.

### Labels

Labels classify **what kind of work** an issue represents. They are defined centrally in `.github/labels.yml` and synced to all repos.

Every issue should have:

- exactly one `type/*` label (mutually exclusive — what kind of work)
- exactly one `priority/*` label
- one `solution/*` label where applicable (which repo or solution area)

Labels do not replace project board fields, milestones, or relationship tracking. They exist for filtering, automation, and consistent classification.

The `type/*` labels are the canonical work categories:

| Label | Meaning |
|-------|---------|
| `type/feature` | New feature or capability |
| `type/bug` | Something isn't working |
| `type/docs` | Documentation only |
| `type/infra` | CI/CD, workflows, repo config |
| `type/refactor` | Code improvement, no behavior change |
| `type/security` | Security fix or hardening |
| `type/question` | Question or discussion |

The `priority/*` labels are the canonical priority levels:

| Label | Meaning |
|-------|---------|
| `priority/critical` | Must fix immediately |
| `priority/high` | Next sprint |
| `priority/medium` | Planned |
| `priority/low` | Nice to have |

The `status/*` labels are supplementary. The project board is the primary status tracker:

| Label | Meaning |
|-------|---------|
| `status/blocked` | Blocked by dependency |
| `status/needs-info` | Waiting for more information |
| `status/wontfix` | Declined |

GitHub's default labels (`bug`, `enhancement`, `documentation`, etc.) are tolerated but not used as the primary classification. Use `type/*` labels instead.

### GitHub Project Board

All AzureLocal repos participate in the shared org-level project board: [AzureLocal Projects #3](https://github.com/orgs/AzureLocal/projects/3).

The project board tracks portfolio-wide status and provides custom fields:

| Field | Populated From | Purpose |
|-------|---------------|---------|
| **ID** | Auto-set by workflow | Repo-prefixed issue number (e.g. `DOCS-14`, `RANGER-5`) |
| **Solution** | `solution/*` label | Which solution area the issue belongs to |
| **Priority** | `priority/*` label | Priority level |
| **Category** | `type/*` label | Work category |

The `add-to-project.yml` workflow automatically adds issues and PRs to the project board and maps labels to project fields. Every repo that participates in the shared board must have this workflow and the `ADD_TO_PROJECT_PAT` secret.

### Milestones

Milestones group issues by **delivery phase** within a single repo. They answer "when does this land?" rather than "what kind of work is this?"

Milestones are per-repo. They are not shared across repos.

Each repo should define milestones that match its delivery phases. Examples:

- `Planning` — planning, architecture, and design work
- `Documentation Foundation` — core docs and public story
- `V1` — first release
- `Post-V1` — extensions, future scope, and backlog

Rules for milestones:

- every issue that represents planned delivery work should have a milestone
- governance and housekeeping issues may omit milestones if they are not tied to a release phase
- do not create milestones for abstract categories — milestones represent delivery phases, not work types

### Tracker Issues

Tracker issues are umbrella issues that group related child issues for rollup and visibility. They answer "what is the overall status of this workstream?"

Rules for tracker issues:

- a tracker issue should contain a tasklist of child issue references
- tracker issues do not replace real child issues — each child issue must be independently actionable
- tracker issues should not carry their own implementation work
- use tracker issues for workstreams like "documentation rollout" or "v1 collector delivery" that span multiple concrete issues

### Dependencies and Relationships

When issues must be completed in a specific order, express that dependency explicitly.

Rules for dependencies:

- if issue B depends on issue A being done first, say so in the body of issue B: `Depends on #A`
- if an issue is blocked, add the `status/blocked` label and note what it is blocked on
- cross-repo dependencies use the full reference format: `AzureLocal/other-repo#N`
- do not rely on issue ordering or numbering to imply sequencing — make it explicit in the issue body

### Minimum Issue Metadata

When creating a new issue, provide at minimum:

- a clear title
- one `type/*` label
- one `priority/*` label
- a `solution/*` label if the issue is solution-specific
- a milestone if the issue represents planned delivery work
- a body that explains what the issue is, what the scope is, and what done looks like

---

## Release and Changelog Model

All AzureLocal repositories use [release-please](https://github.com/googleapis/release-please) for automated release management and changelog generation.

### Required Files

Every repo that uses release-please must have:

- `CHANGELOG.md` — maintained by release-please, do not edit manually
- `release-please-config.json` — release-please configuration
- `.release-please-manifest.json` — version tracking manifest
- `.github/workflows/release-please.yml` — the workflow that runs release-please

### How It Works

1. Contributors use [conventional commits](https://www.conventionalcommits.org/) when committing to `main`.
2. Release-please reads commit messages and maintains an open release PR that updates `CHANGELOG.md` and bumps the version.
3. When the release PR is merged, release-please creates a GitHub release and tag.

### Conventional Commit Types

| Commit Prefix | Changelog Section | Release-Please Label |
|---------------|------------------|---------------------|
| `feat:` | Features | `feat` |
| `fix:` | Bug Fixes | `fix` |
| `docs:` | Documentation | `docs` |
| `chore:` | Miscellaneous | `chore` |
| `infra:` | Infrastructure | `infra` |

### Maintainer Responsibilities

- use conventional commit prefixes consistently
- do not manually edit `CHANGELOG.md` — let release-please manage it
- review and merge release PRs when they appear
- if a release PR is stale or incorrect, close it and let release-please regenerate on next push

### Exceptions

Repos that are purely documentation, experimental, or have no versioned release artifact may omit release-please with a documented justification in `repo-management/README.md`.

---

## Workflow Patterns

AzureLocal repositories share a common set of GitHub Actions workflows. Some are canonical patterns that every applicable repo should use. Others are repo-local adaptations.

### Canonical Workflows

These workflows should be present in every qualifying repo:

| Workflow | Required When | Purpose |
|----------|--------------|---------|
| `release-please.yml` | All repos with versioned releases | Automated changelog and release management |
| `add-to-project.yml` | All repos participating in the shared project board | Adds issues/PRs to the org project and sets custom fields |

### Standard Patterns

These workflows follow a standard pattern but are adapted per repo type:

| Workflow | Required When | Adaptation |
|----------|--------------|-----------|
| Docs deployment (`deploy-docs.yml` or `deploy.yml`) | Repos with a docs site | MkDocs vs Docusaurus, path filters, Python vs Node.js |
| Validation (`validate.yml` or `validate-repo-structure.yml`) | Recommended for all repos | Adjusted for repo type: MkDocs build, module manifest, structure checks |
| Label sync (`sync-labels.yml`) | Central repo only | Applies `.github/labels.yml` to this repo; downstream repos receive labels via sync or manual application |

### Repo-Local Workflows

Repos may have additional workflows specific to their solution type (e.g., PowerShell module validation, test execution). These are valid but should be documented in the repo's `repo-management/automation.md`.

### Required Secrets

| Secret | Used By | How To Provision |
|--------|---------|-----------------|
| `ADD_TO_PROJECT_PAT` | `add-to-project.yml` | Classic PAT with `project` scope, org-owner role. Set as a repo secret. |
| `GITHUB_TOKEN` | All other workflows | Built-in. No provisioning needed. |

---

## New Repository Onboarding

When creating a new repository in the AzureLocal organization, follow this sequence:

### 1. Create the repository

- create the repo under the `AzureLocal` org
- initialize with `main` as the default branch

### 2. Add core files

- `README.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`
- `LICENSE`
- `.gitignore`

### 3. Add GitHub governance files

- `.github/CODEOWNERS`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/ISSUE_TEMPLATE/` set (bug, feature, docs templates at minimum)

### 4. Add release automation

- `release-please-config.json`
- `.release-please-manifest.json`
- `.github/workflows/release-please.yml`

### 5. Add project integration

- `.github/workflows/add-to-project.yml` — copy from an existing repo and update the ID prefix in the `Set ID field` step
- add the `ADD_TO_PROJECT_PAT` secret to the repo settings
- if the repo needs a new `solution/*` label, add it to the central `.github/labels.yml` first, then add the mapping to the `add-to-project.yml` workflow

### 6. Add labels

- allow `sync-labels.yml` to push labels from the central repo, or manually apply labels from `.github/labels.yml`

### 7. Add validation

- add a validation workflow appropriate to the repo type
- for MkDocs repos: validate MkDocs build
- for PowerShell module repos: validate module manifest and import
- for structure validation: check required files and directories

### 8. Add docs deployment (if applicable)

- add a docs deployment workflow for MkDocs or Docusaurus
- enable GitHub Pages in repo settings (source: GitHub Actions)

### 9. Enable branch protection

- protect `main`
- require PR reviews
- require status checks where applicable
- allow admin bypass

### 10. Add repo-management documentation

- `repo-management/README.md`
- `repo-management/setup.md` — document the actual configuration applied in steps 1–9
- `repo-management/automation.md` — document every workflow in the repo

### 11. Create milestones

- create milestones matching the repo's delivery phases
- assign existing issues to appropriate milestones

---

## Design Rule For Future Changes

When adding a new repo-level practice, ask:

1. Is this a rule all repos should follow?
2. Is this a planning or operational artifact for one repo?
3. Is this user-facing documentation?

Then place it accordingly:

- org-wide rule: `standards/`
- repo operations artifact: `repo-management/`
- end-user content: `README.md` or published `docs/`

---

## Related References

- [Infrastructure Standards](infrastructure)
- [Automation Interoperability](automation)
- [Documentation Standards](documentation)
- [Variable Standards](variables)
- [Solution Development Standards](solutions)
