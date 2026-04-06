# Repository Setup

Documents how this repository is configured. Use this as the reference when setting up a new repo or auditing existing settings.

---

## Branch Protection

**Protected branch:** `main`

| Setting | Value |
|---------|-------|
| Require pull request before merging | Yes |
| Required approvals | 1 |
| Dismiss stale reviews on new commits | Yes |
| Require status checks to pass | Yes |
| Required checks | `check-structure` (validate-repo-structure) |
| Require branches to be up to date | Yes |
| Restrict force pushes | Yes |
| Allow admins to bypass | Yes |

---

## Labels

Labels are defined in `.github/labels.yml` and synced to this repo via the `sync-labels.yml` workflow.

**This is the source of truth for all repos.** The label set is intentionally kept flat — no nesting beyond one `/` separator.

| Group | Prefix | Labels |
|-------|--------|--------|
| Type | `type/` | `feature`, `bug`, `docs`, `infra`, `refactor`, `security`, `question` |
| Solution | `solution/` | `sofs`, `avd`, `loadtools`, `vmconvert`, `docs-site`, `workspace` + more |
| Priority | `priority/` | `critical`, `high`, `medium`, `low` |
| Status | `status/` | `blocked`, `needs-info`, `wontfix` |

Labels are synced on push to `main` when `.github/labels.yml` changes, or manually via workflow dispatch. The `sync-labels.yml` workflow uses `EndBug/label-sync` with `delete-other-labels: false` — it adds/updates but does not remove labels in other repos.

> **Note:** This repo's labels are also pushed to other repos in the org via the `sync-labels` workflow when `labels.yml` changes on main.

---

## Secrets

| Secret | Used By | Description |
|--------|---------|-------------|
| `ADD_TO_PROJECT_PAT` | `add-to-project.yml` | Classic PAT with `project` scope. Required to add issues/PRs to GitHub Projects (org-level project boards require a PAT — `GITHUB_TOKEN` lacks org project scope). |
| `GITHUB_TOKEN` | All other workflows | Built-in GitHub token. Read/write to contents, pages, pull requests, issues. |

---

## CODEOWNERS

Defined in `.github/CODEOWNERS`. All paths default to the org team that owns this repo. Review and update if team membership changes.

---

## GitHub Pages

| Setting | Value |
|---------|-------|
| Source | `gh-pages` branch, root |
| Custom domain | Configured via `CNAME` file at repo root |
| Deploy workflow | `deploy.yml` — builds Docusaurus and publishes to `gh-pages` branch using `peaceiris/actions-gh-pages` |

The `gh-pages` branch is managed entirely by the deploy workflow. Do not manually edit it.

---

## Project Board

All repos in the AzureLocal org participate in the shared org-level project board: [AzureLocal Projects #3](https://github.com/orgs/AzureLocal/projects/3).

| Setting | Value |
|---------|-------|
| Project | `AzureLocal/projects/3` |
| Project ID | `PVT_kwDOCxeiOM4BR2KZ` |
| Integration | `add-to-project.yml` workflow |

### Custom Fields

| Field | Type | Field ID | Purpose |
|-------|------|----------|---------|
| ID | Text | `PVTF_lADOCxeiOM4BR2KZzhADImQ` | Repo-prefixed issue number (e.g. `DOCS-14`) |
| Solution | Single Select | `PVTSSF_lADOCxeiOM4BR2KZzg_jXuY` | Maps from `solution/*` label |
| Priority | Single Select | `PVTSSF_lADOCxeiOM4BR2KZzg_jXvs` | Maps from `priority/*` label |
| Category | Single Select | `PVTSSF_lADOCxeiOM4BR2KZzg_jXxA` | Maps from `type/*` label |

These IDs are constants in the project board. Each repo's `add-to-project.yml` references them.

### Adding a New Solution to the Project Board

1. Open the project board settings and add a new option to the **Solution** single-select field.
2. Copy the option ID from the project board API or URL.
3. Add the mapping to the `add-to-project.yml` workflow in the relevant repo.
4. Add the corresponding `solution/*` label to `.github/labels.yml` in the central repo.

---

## Milestones

Milestones are per-repo. The central docs site uses milestones to track documentation phases.

Milestones should be created for each delivery phase the repo intends to ship (e.g., `V1`, `Documentation Foundation`, etc.). See [Repository Management Standards — Milestones](../standards/repository-management#milestones) for the full convention.

---

## Issue Metadata Requirements

Every issue in this repo should have at minimum:

- one `type/*` label
- one `priority/*` label
- a `solution/*` label if solution-specific
- a milestone if it represents planned delivery work
- a clear title and body describing the scope and acceptance criteria

This ensures the `add-to-project.yml` workflow can correctly populate the project board fields and all issues are filterable by type, priority, and solution.

---

## Replication Checklist

Steps to apply the same configuration to a new repo in the org. See [Repository Management Standards — New Repository Onboarding](../standards/repository-management#new-repository-onboarding) for the full sequence.

- [ ] Create the repo under the `AzureLocal` org with `main` as default branch
- [ ] Add core files: `README.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `LICENSE`, `.gitignore`
- [ ] Add `.github/CODEOWNERS` for the new team
- [ ] Add `.github/PULL_REQUEST_TEMPLATE.md`
- [ ] Add `.github/ISSUE_TEMPLATE/` set (bug, feature, docs templates)
- [ ] Copy `.github/labels.yml` or allow `sync-labels.yml` to push labels automatically
- [ ] Add any new `solution/*` labels to the central `.github/labels.yml` first
- [ ] Add `ADD_TO_PROJECT_PAT` secret (org-level PAT, `project` scope, org-owner role)
- [ ] Copy `add-to-project.yml` and update:
  - [ ] ID prefix (e.g. `RANGER-`, `AVD-`)
  - [ ] Solution option ID mappings for this repo's solution label
- [ ] Copy `release-please.yml` and add `release-please-config.json` + `.release-please-manifest.json`
- [ ] Copy `validate-repo-structure.yml` and adjust required dirs for the repo type
- [ ] Add docs deployment workflow if the repo has a docs site (MkDocs or Docusaurus)
- [ ] Enable branch protection on `main` using settings above
- [ ] Enable GitHub Pages (source: GitHub Actions) if the repo has a docs site
- [ ] Create milestones matching the repo's delivery phases
- [ ] Create `repo-management/README.md`, `setup.md`, and `automation.md`
- [ ] Assign existing issues to milestones
