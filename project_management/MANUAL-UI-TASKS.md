# Manual UI Tasks — GitHub Project Setup

These tasks require the GitHub web UI and cannot be automated via `gh` CLI.

## Project URL

**Azure Local Solutions** — [https://github.com/orgs/AzureLocal/projects/3](https://github.com/orgs/AzureLocal/projects/3)

---

## 1. Add Sprint Iteration Field

The `gh` CLI does not support `ITERATION` data type — only TEXT, SINGLE_SELECT, DATE, NUMBER.

1. Go to [Project Settings → Custom Fields](https://github.com/orgs/AzureLocal/projects/3/settings)
2. Click **New field**
3. Name: `Sprint`
4. Type: **Iteration**
5. Duration: **2 weeks**
6. Start date: pick the current Monday

---

## 2. Create Project Views

| View | Type | Configuration |
|------|------|---------------|
| **All Work** | Table | Group by Status |
| **Board** | Board | Columns = Status (Backlog → Todo → In Progress → In Review → Done) |
| **By Solution** | Table | Group by Solution field |
| **Roadmap** | Roadmap | Group by Solution, date range by Sprint |
| **Bugs** | Table | Filter: `Category = Bug Fix` |
| **Docs** | Table | Filter: `Category = Documentation` |

For each view:
1. Click **+ New view** (top of project)
2. Select view type (Table, Board, or Roadmap)
3. Rename the view
4. Apply grouping/filtering per the table above
5. Save the view

---

## 3. Configure Auto-Add Workflows

1. Go to [Project Settings → Workflows](https://github.com/orgs/AzureLocal/projects/3/workflows)
2. Enable **Auto-add to project**:
   - Issues: When opened → add to project, set Status = **Backlog**
   - Pull requests: When opened → add to project, set Status = **In Review**
3. Enable **Auto-archive**:
   - When issue/PR is closed → set Status = **Done**
4. Add all 5 repos as sources:
   - `azurelocal-sofs-fslogix`
   - `aurelocal-avd`
   - `azurelocal-loadtools`
   - `azurelocal-vm-conversion-toolkit`
   - `azurelocal.github.io`

---

## 4. Create Label Sync PAT (for sync-labels.yml workflow)

The `sync-labels.yml` workflow in the docs-site repo needs a PAT with `repo` scope that can write labels across all 5 repos.

1. Go to [GitHub Settings → Developer settings → Personal Access Tokens](https://github.com/settings/tokens)
2. Create a **Fine-grained token** scoped to the AzureLocal organization
3. Permissions: **Issues → Read and write** (includes labels)
4. Save the token
5. Add it as a repository secret named `LABEL_SYNC_TOKEN` in the `azurelocal.github.io` repo:
   - Go to repo Settings → Secrets and variables → Actions → New repository secret

---

## 5. Clean Up Default GitHub Labels (Optional)

Each repo still has 5 default GitHub labels (bug, documentation, duplicate, enhancement, good first issue, etc.) that overlap with our custom taxonomy. Consider deleting them to avoid confusion:

- `bug` → replaced by `type/bug`
- `documentation` → replaced by `type/docs`
- `enhancement` → replaced by `type/feature`
- `duplicate` → no replacement (close as duplicate)
- `good first issue` → keep or delete
- `help wanted` → keep or delete
- `invalid` → replaced by `status/wontfix`
- `question` → replaced by `type/question`
- `wontfix` → replaced by `status/wontfix`
