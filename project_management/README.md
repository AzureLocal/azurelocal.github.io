# Project Management — Azure Local Solutions

Central hub for planning and tracking work across all [AzureLocal](https://github.com/AzureLocal) repositories.

## Folder Structure

```
project_management/
  README.md               ← You are here
  labels.yml              ← Master label definitions (synced to all repos)
  repo-standard.md        ← Gold-standard repo checklist
  workspace/              ← Cross-repo / org-wide plans
  sofs/                   ← SOFS for FSLogix plans
  avd/                    ← Azure Virtual Desktop plans
  loadtools/              ← Load & Performance Testing plans
  vmconvert/              ← VM Conversion Toolkit plans
  docs-site/              ← Docusaurus community site plans
```

## How It Works

- **Cross-repo plans** live in `workspace/` — they affect multiple repos or the org as a whole.
- **Solution-specific plans** live in their solution folder (e.g., `sofs/`, `avd/`).
- Each solution repo also has a local `project_management/` folder with copies of its own plans for standalone access.
- The **source of truth** is this centralized location in the docs repo.

## Plan File Convention

- **Naming**: `plan-<camelCaseName>.prompt.md`
- **Format**: Markdown with phases, file inventories, and implementation waves.
- **No frontmatter**: Plans are plain Markdown — no YAML frontmatter.

## Creating a New Plan

1. Determine scope: cross-repo → `workspace/`, single repo → `<solution>/`
2. Create a file following the naming convention above
3. Include at minimum: TL;DR, Current State, Phases, Relevant Files, Implementation Order
4. Create a matching GitHub issue on the project board linking to the plan

## GitHub Project

All work is tracked on the org-level [Azure Local Solutions](https://github.com/orgs/AzureLocal/projects/) GitHub Project (V2).

### Custom Fields

| Field | Type | Values |
|-------|------|--------|
| Status | Single select | Backlog, Todo, In Progress, In Review, Done |
| Solution | Single select | Workspace, Docs Site, SOFS/FSLogix, AVD, Load Tools, VM Conversion |
| Priority | Single select | P0-Critical, P1-High, P2-Medium, P3-Low |
| Category | Single select | Feature, Bug Fix, Documentation, Infrastructure, Refactor, Security |
| Sprint | Iteration | 2-week iterations |
| Effort | Single select | XS, S, M, L, XL |

## Label Taxonomy

See [labels.yml](labels.yml) for the full label definitions. Labels are synced to all repos.

## Repo Standard

See [repo-standard.md](repo-standard.md) for the required files and conventions every AzureLocal repo must follow.
