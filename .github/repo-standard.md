# AzureLocal Repository Audit Standard

Actionable audit and onboarding checklist for repositories in the [AzureLocal](https://github.com/AzureLocal) organization.

This file is intentionally shorter than the canonical standards. Use it as a practical repo review checklist, not as the primary place where portfolio-wide governance is defined.

---

## Canonical Sources

Use these as the source of truth:

- Repository management standard: `standards/repository-management.mdx`
- Label definitions: [labels.yml](labels.yml)
- Repo-management contract: `repo-management/README.md`

---

## Portfolio Model

AzureLocal repositories are managed as a coordinated portfolio.

- Each repo is a standalone repository with its own README, releases, issues, workflows, and branch protection.
- `azurelocal.github.io` is the central governance and standards source.
- `azurelocal-toolkit` is the implementation and automation reference repo.
- Solution and supporting repos follow the shared baseline, with documented exceptions where needed.

---

## Baseline Requirements

### Core Files

Every repo should have:

- `README.md`
- `CONTRIBUTING.md`
- `CHANGELOG.md`
- `LICENSE`
- `.github/CODEOWNERS`
- `.github/pull_request_template.md` or equivalent
- `.github/ISSUE_TEMPLATE/` set
- `release-please-config.json`
- `.release-please-manifest.json`
- `repo-management/README.md`

### Governance

Every repo should have:

- protected `main`
- administrator bypass allowed for controlled maintenance
- review and status checks configured as appropriate
- CODEOWNERS aligned with actual maintainers
- labels aligned to [labels.yml](labels.yml)

### Release Automation

Every repo should have:

- release-please configured
- conventional commits in use
- changelog and release flow aligned to org conventions

---

## Documentation Expectations

Documentation requirements vary by repo type.

| Repo Type | Expectation |
|----------|-------------|
| `azurelocal.github.io` | Docusaurus-based central portal |
| `azurelocal-toolkit` | No repo-local docs site; root README is the primary documentation entry point |
| Most solution repos | MkDocs and GitHub Pages enabled |
| Minimal or supporting repos | May omit a docs site if it adds no value, but must still have a complete README |

---

## Workflow Expectations

Use workflows appropriate to the repo type.

| Workflow | Expectation |
|----------|-------------|
| `release-please.yml` | Required |
| docs deployment workflow | Required only when the repo actually has a docs site |
| validation or lint workflow | Recommended |
| repo structure validation | Recommended where useful |

---

## CODEOWNERS Expectation

There must be a `.github/CODEOWNERS` file.

The ownership model should be broadly consistent across the portfolio, but it does not need to be byte-for-byte identical if a repo has a justified reason to differ.

---

## Repo-Management Expectation

Every repo must have a root-level `repo-management/` folder with a `README.md`.

Use `repo-management/` to document **how the repo works**:

- `setup.md` — branch protection, labels, secrets, CODEOWNERS, replication guide
- `automation.md` — every GitHub Action: what it does, why, triggers, secrets
- `scripts/` — repo-management helper scripts

Do not use `repo-management/` for work tracking (use GitHub Projects), standards (use `standards/`), or user-facing docs.

---

## Per-Repo Audit Checklist

Use this when auditing or onboarding a repo:

- [ ] `README.md` exists and clearly explains the repo
- [ ] `CONTRIBUTING.md` exists
- [ ] `CHANGELOG.md` exists
- [ ] `LICENSE` exists
- [ ] `.github/CODEOWNERS` exists
- [ ] PR template exists
- [ ] issue templates exist
- [ ] `release-please-config.json` exists
- [ ] `.release-please-manifest.json` exists
- [ ] release-please workflow exists
- [ ] `repo-management/README.md` exists
- [ ] labels are aligned to [labels.yml](labels.yml)
- [ ] `main` is protected
- [ ] administrator bypass is configured as intended
- [ ] docs deployment exists only if the repo actually uses a docs site
- [ ] root README is treated as the primary repo entry point
