# Automation

Documents every GitHub Actions workflow in this repository.

---

## Workflow Summary

| File | Name | Trigger | Purpose |
|------|------|---------|---------|
| `add-to-project.yml` | Add to Project | Issues/PRs opened or labeled | Adds items to the org project board and sets custom fields |
| `deploy.yml` | Deploy Azure Local Docs to GitHub Pages | Push to `main` | Builds Docusaurus site and deploys to GitHub Pages |
| `release-please.yml` | Release Please | Push to `main` | Automates CHANGELOG and release tags from conventional commits |
| `sync-labels.yml` | Sync Labels | Push to `main` touching `.github/labels.yml` | Applies label definitions to this repo |
| `validate-repo-structure.yml` | Validate Repo Structure | PR to `main` | Checks required files and directories are present |

---

## add-to-project.yml

**Trigger:** `issues` (opened, labeled) and `pull_request` (opened, labeled)  
**Permissions required:** `ADD_TO_PROJECT_PAT` — classic PAT with `project` scope

**What it does:**

1. **Add to Project** — uses `actions/add-to-project` to add the issue or PR to org project board (`AzureLocal/projects/3`). Outputs the created item ID.
2. **Set Fields** (issues only, on success of step 1) — calls `gh project item-edit` to set three custom fields on the project board item:
   - **ID** — sets a text field to `DOCS-{number}`
   - **Solution** — maps a `solution/*` label to a single-select option (e.g. `solution/docs-site` → option ID `409662e1`)
   - **Priority** — maps a `priority/*` label to a single-select option (`critical` → `74334e8d`, etc.)
   - **Category** — maps a `type/*` label to a single-select option (`type/feature` → `7a4fa8ea`, etc.)

**Notes:**
- Field IDs and option IDs are project-board-specific constants — do not change unless the project board is re-created.
- PRs are added to the board but fields are not set (the `set-fields` job has `if: github.event_name == 'issues'`).

---

## deploy.yml

**Trigger:** Push to `main` (any path except `Readme.md`); manual via `workflow_dispatch`  
**Permissions:** `contents: write`, `pages: write`, `id-token: write`

**What it does:**

1. Checks out code
2. Sets up Node.js 22
3. Runs `npm install`
4. Checks formatting with Prettier (`src/**/*.{js,jsx,json,css,md}`)
5. Runs Vale prose linting on `docs/` — `continue-on-error: true` so failures are annotations not blockers
6. Builds the Docusaurus site (`npm run build` → `build/` directory)
7. Deploys to GitHub Pages using `peaceiris/actions-gh-pages`, publishing `build/` to the `gh-pages` branch

**Notes:**
- The `gh-pages` branch is fully managed by this workflow. Never commit to it directly.
- Vale linting is informational — it will annotate PRs but not block the deploy.
- Prettier failures **do** block the deploy. Run `npx prettier --write` locally before pushing.

---

## release-please.yml

**Trigger:** Push to `main`  
**Permissions:** `contents: write`, `pull-requests: write`

**What it does:**

Uses `googleapis/release-please-action@v4` to maintain an automated release PR. When conventional commits (`feat:`, `fix:`, `chore:`, etc.) land on `main`, Release Please:
1. Creates or updates a release PR updating `CHANGELOG.md` and bumping the version
2. When that PR is merged, creates a GitHub release and tag

Configuration is in `release-please-config.json` at the repo root.

---

## sync-labels.yml

**Trigger:** Push to `main` touching `.github/labels.yml`; manual via `workflow_dispatch`  
**Permissions:** `contents: read`, `issues: write`

**What it does:**

Uses `EndBug/label-sync@v2` to apply the label definitions in `.github/labels.yml` to this repository. `delete-other-labels: false` means existing labels not in the file are left alone.

**This repo is the label source of truth.** When `labels.yml` changes, this workflow applies labels to the current repo only. To push labels to other repos in the org, run the workflow with a PAT that has repo access to other repos, or trigger equivalent workflows in each downstream repo.

---

## validate-repo-structure.yml

**Trigger:** PR to `main`

**What it does:**

Checks that required files and directories are present on the PR branch. Fails the PR if any are missing.

| Check | Required Items |
|-------|---------------|
| Root files | `README.md`, `CONTRIBUTING.md`, `LICENSE`, `CHANGELOG.md`, `.gitignore` |
| Directories | `docs/`, `.github/` |
| PR template | `.github/PULL_REQUEST_TEMPLATE.md` |
| Config structure (if `config/` exists) | `config/variables.example.yml`, `config/schema/variables.schema.json` |

**Notes:**
- This repo does not have a `config/` directory, so the config check is always skipped here.
- Failures show as GitHub Annotations in the PR checks panel.
