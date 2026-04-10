# New Repository Setup Runbook

> **Applies to:** All AzureLocal repositories  
> **Companion reading:** [Repository Management Standard](./repository-management.mdx)

This runbook walks through every step required to set up a new AzureLocal repository from scratch, in order. Complete each step before proceeding to the next.

---

## Prerequisites

- GitHub organisation admin or write access to the `AzureLocal` organisation
- `gh` CLI installed and authenticated (`gh auth status`)
- Maintainer access to the [Azure Local Solutions project board](https://github.com/orgs/AzureLocal/projects/3)

---

## Step 1 — Create the Repository

1. Go to [github.com/organizations/AzureLocal/repositories/new](https://github.com/organizations/AzureLocal/repositories/new).
2. Set **Repository name** using the `azurelocal-<solution>` convention (e.g. `azurelocal-monitoring`).
3. Set **Visibility** to **Public**.
4. **Do not** initialise with a README, .gitignore, or licence — you will add these in Step 3.
5. Click **Create repository**.

---

## Step 2 — Clone and Initialise Locally

```bash
git clone https://github.com/AzureLocal/<repo-name>.git
cd <repo-name>
```

---

## Step 3 — Add Required Root Files

All AzureLocal repositories must contain the following files in the root:

| File | Purpose |
|------|---------|
| `README.md` | Project overview, prerequisites, and quickstart |
| `CONTRIBUTING.md` | Local contribution guidelines (can reference org defaults) |
| `LICENSE` | MIT licence |
| `CHANGELOG.md` | Release history, starting with `## [Unreleased]` heading |
| `.gitignore` | Language/tool-appropriate ignore rules |

Copy `CONTRIBUTING.md` and `LICENSE` from any existing AzureLocal repo, or use the [org-level templates](https://github.com/AzureLocal/.github).

---

## Step 4 — Create the Directory Structure

Minimum required directories:

```
<repo>/
├── docs/          # Documentation source
├── .github/
│   └── workflows/ # GitHub Actions workflows (see Step 6)
└── repo-management/
    ├── setup.md       # Repo-specific setup notes
    └── automation.md  # CI/CD and workflow documentation
```

If the solution uses infrastructure configuration, also add:

```
├── config/
│   ├── variables.example.yml
│   └── schema/
│       └── variables.schema.json
```

---

## Step 5 — Add the Solution Label to the Project Board

Each repo's issues are tagged with a solution label so the shared project board can route them. Check whether a label for this solution already exists:

```bash
gh label list --repo AzureLocal/.github
```

If a `solution/<name>` label does not already exist, create it across all repos where needed using the org label sync workflow, or add it manually:

```bash
gh label create "solution/<name>" --color "#0075ca" --repo AzureLocal/<repo-name>
```

---

## Step 6 — Add the Three Shared Workflows

Create `.github/workflows/` and add slim callers for the three reusable org workflows.

### `add-to-project.yml`

Replace `<PREFIX>` with the repo's issue prefix (e.g. `MON`, `BCDR`) and `<SOLUTION_OPTION_ID>` with the project board option ID for this solution (look these up in `AzureLocal/.github/.github/workflows/reusable-add-to-project.yml`).

```yaml
name: Add to Project

on:
  issues:
    types: [opened, labeled]
  pull_request:
    types: [opened, labeled]

jobs:
  call-shared:
    uses: AzureLocal/.github/.github/workflows/reusable-add-to-project.yml@main
    with:
      id-prefix: <PREFIX>
      solution-option-id: '<SOLUTION_OPTION_ID>'
    secrets: inherit
```

### `release-please.yml`

```yaml
name: Release Please

on:
  push:
    branches:
      - main

jobs:
  call-shared:
    uses: AzureLocal/.github/.github/workflows/reusable-release-please.yml@main
    secrets: inherit
```

### `validate-repo-structure.yml`

```yaml
name: Validate Repo Structure

on:
  pull_request:
    branches: [main]

jobs:
  call-shared:
    uses: AzureLocal/.github/.github/workflows/reusable-validate-structure.yml@main
```

---

## Step 7 — Add `release-please-config.json`

```json
{
  "$schema": "https://raw.githubusercontent.com/googleapis/release-please/main/schemas/config.json",
  "release-type": "simple",
  "bump-minor-pre-major": true,
  "changelog-sections": [
    { "type": "feat", "section": "Features" },
    { "type": "fix", "section": "Bug Fixes" },
    { "type": "docs", "section": "Documentation" },
    { "type": "chore", "section": "Chores", "hidden": false }
  ]
}
```

---

## Step 8 — Add Repository Topics

Topics make the repository discoverable on GitHub and signal at a glance what the solution covers. Set them in **Settings → General → Topics**, or via the `gh` CLI:

```bash
gh api --method PUT repos/AzureLocal/<repo-name>/topics \
  --input - <<'EOF'
{"names":["azure-local","azure-stack-hci","azurelocal","azure-arc","powershell","infrastructure-as-code","<solution-specific-tag>"]}
EOF
```

**Required topics for every AzureLocal repo:**

| Topic | Purpose |
|-------|---------|
| `azure-local` | Primary product name |
| `azure-stack-hci` | Legacy/alias for discoverability |
| `azurelocal` | Org tag |
| `azure-arc` | Platform dependency |
| `powershell` | Primary scripting language |
| `infrastructure-as-code` | Deployment model |

**Add solution-specific topics** on top of the required set. Examples:

| Repo | Additional topics |
|------|-------------------|
| azurelocal-avd | `avd`, `azure-virtual-desktop`, `virtual-desktop`, `fslogix` |
| azurelocal-sofs-fslogix | `sofs`, `scale-out-file-server`, `fslogix`, `storage` |
| azurelocal-ranger | `discovery`, `assessment`, `readiness` |
| azurelocal-nutanix-migration | `nutanix`, `migration`, `hyper-v` |
| azurelocal-training | `training`, `lab`, `learning` |
| azurelocal-loadtools | `load-testing`, `performance-testing`, `benchmarking` |
| azurelocal-vm-conversion-toolkit | `vm-migration`, `gen1`, `gen2`, `hyper-v` |
| azurelocal-copilot | `github-copilot`, `ai`, `copilot-instructions`, `developer-tools` |

---

## Step 9 — Configure Branch Protection

In **Settings → Branches**, add a protection rule for `main`:

| Setting | Value |
|---------|-------|
| Require a pull request before merging | ✅ (1 approval) |
| Require CODEOWNERS review | ✅ |
| Dismiss stale reviews on push | ✅ |
| Require status checks to pass | ✅ — add repo-specific check |
| Require branches to be up to date | ✅ |
| Do not allow bypassing the above settings | ❌ (admins can bypass) |
| Allow force pushes | ❌ |
| Allow deletions | ❌ |

---

## Step 10 — Add the `ADD_TO_PROJECT_PAT` Secret

The add-to-project workflow requires a PAT with `project` scope.

```bash
gh secret set ADD_TO_PROJECT_PAT --repo AzureLocal/<repo-name>
```

Paste the shared org PAT when prompted. This token is managed by org admins — contact them if you do not have it.

---

## Step 11 — Add the Repository to This Standards Page

Open a PR on `azurelocal.github.io` to:

1. Add a row for the new repository in the [Repository Management Standard](./repository-management.mdx) portfolio table.
2. If the solution has a dedicated page on the docs site, add a navigation entry in `docusaurus.config.js`.

---

## Checklist

```
[ ] Repository created under AzureLocal org
[ ] Required root files present (README, CONTRIBUTING, LICENSE, CHANGELOG, .gitignore)
[ ] docs/ and .github/workflows/ directories created
[ ] repo-management/setup.md and automation.md created
[ ] solution/<name> label created
[ ] add-to-project.yml slim caller added (correct prefix and solution-option-id)
[ ] release-please.yml slim caller added
[ ] validate-repo-structure.yml slim caller added
[ ] release-please-config.json added
[ ] Repository topics set (required + solution-specific)
[ ] Branch protection configured for main
[ ] ADD_TO_PROJECT_PAT secret set
[ ] Repository listed in repository-management.mdx
```
