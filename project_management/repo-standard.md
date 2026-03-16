# AzureLocal Repository Standard

Gold-standard checklist for every repository in the [AzureLocal](https://github.com/AzureLocal) organization. Use this as both documentation and an audit tool when onboarding new repos or reviewing existing ones.

---

## Required Files

Every AzureLocal repo **must** have the following files:

| File | Location | Notes |
|------|----------|-------|
| `LICENSE` | root | MIT license |
| `README.md` | root | Project overview, badges, quick start |
| `CODEOWNERS` | `.github/CODEOWNERS` | Always in `.github/`, not root |
| `CONTRIBUTING.md` | root | PowerShell style section shared; adapt per repo |
| `CHANGELOG.md` | root | [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format |
| `release-please-config.json` | root | Standard categories (see below) |
| `.release-please-manifest.json` | root | Version tracking |
| `release-please.yml` | `.github/workflows/` | Release automation workflow |
| `bug_report.md` | `.github/ISSUE_TEMPLATE/` | Bug report template |
| `feature_request.md` | `.github/ISSUE_TEMPLATE/` | Feature request template |
| `docs_issue.md` | `.github/ISSUE_TEMPLATE/` | Documentation issue template |
| `config.yml` | `.github/ISSUE_TEMPLATE/` | Template chooser with external links |
| `pull_request_template.md` | `.github/` | PR template |
| `project_management/README.md` | `project_management/` | Points to central plans |

## Labels

Every repo must have the labels defined in [labels.yml](labels.yml). See that file for the full list including type, solution, priority, status, and release-please labels.

## Naming Conventions

### Issue Titles

Format: `[TYPE] Short description`

- `[FEATURE] Add Cloud Cache support to FSLogix configuration`
- `[BUG] S2D pool creation fails on 3-node cluster`
- `[DOCS] Add troubleshooting guide for NTFS permissions`
- `[INFRA] Add release-please workflow to avd repo`

### Branch Names

Format: `<type>/<short-description>`

| Type | When |
|------|------|
| `feat/` | New feature |
| `fix/` | Bug fix |
| `docs/` | Documentation |
| `infra/` | CI/CD, workflows, config |
| `refactor/` | Code improvement |
| `release/` | Release branch (auto by release-please) |

### Commit Messages (Conventional Commits)

Format: `<type>(<scope>): <description>`

| Type | CHANGELOG Category |
|------|-------------------|
| `feat` | Features |
| `fix` | Bug Fixes |
| `docs` | Documentation |
| `infra` | Infrastructure |
| `chore` | Miscellaneous |
| `refactor` | Miscellaneous |
| `test` | Miscellaneous |

Scope is optional but recommended — use the module/area name:

- `feat(terraform): add Cloud Cache variables`
- `fix(ansible): correct S2D timeout handling`
- `docs(architecture): add capacity planning section`

### PR Titles

Same as commit messages (conventional commits). Release-please uses the PR title as the squash-merge commit message.

## Release-Please Configuration

Standard `release-please-config.json` for all repos:

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

## GitHub Actions Workflows

| Workflow | Purpose | Required? |
|----------|---------|:---------:|
| `release-please.yml` | Automates releases and CHANGELOG | YES |
| `deploy-docs.yml` | Builds and deploys MkDocs site | YES (solution repos) |
| `lint-docs.yml` | Vale linting on PR | Recommended |

## Documentation Site

All solution repos use **MkDocs Material** with the golden configuration. See [plan-docsSiteStandardization.prompt.md](workspace/plan-docsSiteStandardization.prompt.md) for details.

The community portal (`azurelocal.cloud`) uses **Docusaurus**.

## CODEOWNERS

Standard `.github/CODEOWNERS`:

```
# Default owner for everything
* @kristopherjturner
```

Always place in `.github/`, never at the repo root.

---

## Per-Repo Audit Checklist

Use this when onboarding a new repo or auditing an existing one:

- [ ] `LICENSE` (MIT) exists at root
- [ ] `README.md` has badges, description, quick start
- [ ] `.github/CODEOWNERS` exists (not at root)
- [ ] `CONTRIBUTING.md` exists at root
- [ ] `CHANGELOG.md` exists (Keep a Changelog format)
- [ ] `release-please-config.json` exists with standard categories
- [ ] `.release-please-manifest.json` exists
- [ ] `.github/workflows/release-please.yml` exists
- [ ] `.github/ISSUE_TEMPLATE/bug_report.md` exists
- [ ] `.github/ISSUE_TEMPLATE/feature_request.md` exists
- [ ] `.github/ISSUE_TEMPLATE/docs_issue.md` exists
- [ ] `.github/ISSUE_TEMPLATE/config.yml` exists
- [ ] `.github/pull_request_template.md` exists
- [ ] `project_management/README.md` points to central plans
- [ ] All labels from `labels.yml` are applied
- [ ] GitHub Pages configured (source: GitHub Actions)
- [ ] `mkdocs.yml` uses golden config baseline
- [ ] `.github/workflows/deploy-docs.yml` exists
