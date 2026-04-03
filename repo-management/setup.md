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

## Replication Checklist

Steps to apply the same configuration to a new repo in the org:

- [ ] Copy `.github/labels.yml` or allow `sync-labels.yml` to push labels automatically
- [ ] Add `ADD_TO_PROJECT_PAT` secret (org-level PAT, `project` scope, org-owner role)
- [ ] Enable branch protection on `main` using settings above
- [ ] Add `.github/CODEOWNERS` for the new team
- [ ] Add `.github/PULL_REQUEST_TEMPLATE.md`
- [ ] Copy `add-to-project.yml` and update Solution field option IDs if needed
- [ ] Copy `release-please.yml` and add `release-please-config.json` at repo root
- [ ] Copy `validate-repo-structure.yml` and adjust required dirs for the new repo type
- [ ] Add `deploy.yml` if the repo has a docs site (adjust paths for MkDocs vs Docusaurus)
