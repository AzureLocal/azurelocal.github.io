# azurelocal.github.io — Claude Code Context

## What this repo is

[![Deploy](https://github.com/AzureLocal/azurelocal.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/AzureLocal/azurelocal.github.io/actions/workflows/deploy.yml)

---

## ADO project details

- **ADO org:** https://dev.azure.com/hybridcloudsolutions
- **ADO project:** Azure Local
- **Area path:** Platform Engineering\Onboarding
- **Work item format:** `AB#<id>` in commit messages and PR descriptions

---

## Standards

This repo follows all HCS platform standards defined in the Platform Engineering repo:

| Standard | Reference |
|---|---|
| Governance | [docs/standards/governance.md](https://dev.azure.com/hybridcloudsolutions/Platform%20Engineering/_git/Platform%20Engineering?path=/docs/standards/governance.md) |
| Scripting (PowerShell 7) | [docs/standards/scripting.md](https://dev.azure.com/hybridcloudsolutions/Platform%20Engineering/_git/Platform%20Engineering?path=/docs/standards/scripting.md) |
| Automation | [docs/standards/automation.md](https://dev.azure.com/hybridcloudsolutions/Platform%20Engineering/_git/Platform%20Engineering?path=/docs/standards/automation.md) |
| Variables and naming | [docs/standards/variables.md](https://dev.azure.com/hybridcloudsolutions/Platform%20Engineering/_git/Platform%20Engineering?path=/docs/standards/variables.md) |
| Documentation | [docs/standards/documentation.md](https://dev.azure.com/hybridcloudsolutions/Platform%20Engineering/_git/Platform%20Engineering?path=/docs/standards/documentation.md) |
| Claude Code | [docs/standards/claude-code.md](https://dev.azure.com/hybridcloudsolutions/Platform%20Engineering/_git/Platform%20Engineering?path=/docs/standards/claude-code.md) |

Key rules:
- All scripts: PowerShell 7+ only. `#Requires -Version 7.0`, `Set-StrictMode -Version Latest`, ` $ErrorActionPreference = 'Stop'`.
- All docs: Markdown only. No Word documents in any repo.
- Commit format: `type(scope): short description` — types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`
- No secrets, tokens, or credentials committed to any file.

---

## Key facts

| Fact | Value |
|---|---|
| Primary language | Markdown / HTML |
| GitHub org | AzureLocal |
| Azure login | kris@hybridsolutions.cloud |
| Key Vault | kv-hcs-vault-01 |

### Environment variables expected

| Variable | Source | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | kv-hcs-vault-01 via Load-HCSEnvironment.ps1 | GitHub CLI and git operations |
| `AZURE_DEVOPS_EXT_PAT` | kv-hcs-vault-01 via Load-HCSEnvironment.ps1 | ADO CLI (`az boards`, `az devops`) |
Load before starting a session:
```powershell
. E:\git\platform\scripts\Load-HCSEnvironment.ps1
```

### Build and test commands

```
npm install
npm run build
npm run dev
```

---

## Repo structure

```
azurelocal.github.io/
├── .claude/
    └── settings.json
├── .frontmatter/
    └── database/
├── .github/
    ├── workflows/
    ├── CODEOWNERS
    ├── labels.yml
    └── repo-standard.md
├── blog/
    ├── 2025-04-01-welcome/
    ├── authors.yml
    └── tags.yml
├── demos/
    └── 2025-04-01-welcome/
├── docs/
    ├── assets/
    ├── automation/
    ├── azure-services/
    ├── design/
    └── implementation/
├── repo-management/
    ├── plans/
    ├── scripts/
    ├── automation.md
    ├── README.md
    └── setup.md
├── src/
    ├── components/
    ├── css/
    └── pages/
├── standards/
    ├── automation.mdx
    ├── documentation.mdx
    ├── examples.mdx
    ├── index.mdx
    └── infrastructure.mdx
├── static/
    ├── img/
    ├── .nojekyll
    ├── BingSiteAuth.xml
    ├── CNAME
    └── robots.txt
├── styles/
    └── Microsoft/
├── versioned_docs/
    └── version-2411/
├── versioned_sidebars/
    └── version-2411-sidebars.json
├── .gitignore
├── .prettierrc
├── .release-please-manifest.json
├── .vale.ini
├── azurelocal-github-io.code-workspace
└── ...
```

---

## Claude Code actions

**Run autonomously:**
- Read, search, and grep any file in this repo
- Write and edit files in this repo
- `git add`, `git commit`, `git push`
- `gh issue`, `gh pr`, `gh run` CLI commands
- `npm` or `bundle` commands for local preview

**Always confirm before:**
- Creating or deleting Azure resources
- Any `az` CLI write operation that modifies Azure state
- Running destructive operations
- Making API calls to external services


---

## Subagents available in this repo

- `azurelocal.github.io-engineer` (model: sonnet) — Expert in `azurelocal.github.io`: deep knowledge of this repo's structure, conventions, and development workflow.

User-level agents (available in every repo session): `triage-lookup`, `markdown-prose-editor`, `azurelocal-domain-expert`, `mkdocs-material-doctor`, `turner-module-scaffold-engineer`, `mms-2026-demo-presenter`.

---

## Owner

**Kristopher Turner**
kris@hybridsolutions.cloud
Senior Product Technology Architect, TierPoint | Microsoft MVP (Azure) | MCT
Owner, Hybrid Cloud Solutions LLC — hybridsolutions.cloud
Country Cloud Boy — thisismydemo.cloud