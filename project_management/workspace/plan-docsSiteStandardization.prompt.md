# Plan: Documentation Site Standardization Across AzureLocal Repos

## TL;DR

Standardize all AzureLocal solution repos on MkDocs Material with an identical theme, shared configuration baseline, and GitHub Pages deployment. Migrate the two AsciiDoc repos (loadtools, vm-conversion-toolkit) to MkDocs. Keep the Docusaurus site (azurelocal.github.io) for now as the community portal, but include a detailed Docusaurus vs. MkDocs comparison to inform the future decision. Establish a "golden" mkdocs.yml baseline and deploy-docs.yml workflow that every repo inherits.

---

## Current State

| Repo | Framework | Theme | GitHub Pages | Deploy Workflow | Linting |
|------|-----------|-------|:---:|:---:|:---:|
| sofs-fslogix | MkDocs Material | blue/light blue | YES | deploy-docs.yml | -- |
| avd | MkDocs Material | indigo/indigo | YES | deploy-docs.yml | -- |
| loadtools | AsciiDoc (book) | custom PDF theme | -- | build-docs.yml (artifact only) | -- |
| vm-conversion-toolkit | AsciiDoc (loose) | GitHub-native rendering | -- | -- | -- |
| azurelocal.github.io | Docusaurus 3.7.0 | default green (Infima) | YES (CNAME: azurelocal.cloud) | deploy.yml | Vale (Microsoft) |

### Inconsistencies between the two MkDocs repos:

| Setting | sofs-fslogix | avd |
|---------|-------------|-----|
| primary color | blue | indigo |
| accent color | light blue | indigo |
| site_url | set | not set |
| repo_name | set | not set |
| navigation.top | YES | -- |
| navigation.footer | YES | -- |
| search.suggest | YES | -- |
| search.highlight | YES | -- |
| repo icon | set (github) | -- |
| Mermaid support | YES (custom_fences) | -- |
| pymdownx.inlinehilite | YES | -- |
| pymdownx.snippets | YES | -- |
| attr_list | YES | -- |
| md_in_html | YES | -- |
| Python version | 3.12 | 3.x |
| plugins | search | none declared |

### Docusaurus site state:
- Version-managed docs (versions 1.0.0, 2.0.0) but minimal content (intro.md = one line)
- Blog section with 1 placeholder post
- 6 "coming soon" feature cards on homepage
- Navbar: Docs, Blog, Demos, Training, News, Events — most link to /working placeholder
- Custom pages: about.js, working.js, news.js — all placeholder content
- Vale linting with 40+ Microsoft style rules
- Frontmatter CMS integration
- Default Infima green color scheme — not Azure-branded
- Author bio references old employer (TierPoint)

---

## Phase 1: Define the Golden MkDocs Configuration

### 1.1 — Standard mkdocs.yml Baseline

Every solution repo uses this as the starting point. Repo-specific values (site_name, site_description, site_url, repo_url, repo_name, nav) are customized per repo; everything else is identical.

**Theme settings (shared):**
- `name: material`
- Primary color: `blue` (Azure brand alignment)
- Accent color: `light blue`
- Both light/dark mode with toggle icons
- Features: `navigation.tabs`, `navigation.sections`, `navigation.top`, `navigation.footer`, `content.code.copy`, `content.code.annotate`, `search.suggest`, `search.highlight`
- Repo icon: `fontawesome/brands/github`

**Markdown extensions (shared):**
- `admonition` — callout boxes (note, warning, tip, etc.)
- `pymdownx.details` — collapsible admonitions
- `pymdownx.superfences` with Mermaid custom fence
- `pymdownx.highlight` with anchor_linenums
- `pymdownx.inlinehilite` — inline code highlighting
- `pymdownx.tabbed` with alternate_style — tabbed content blocks
- `pymdownx.snippets` — include external files
- `tables` — extended table support
- `toc` with permalink
- `attr_list` — add HTML attributes to markdown
- `md_in_html` — markdown inside HTML blocks

**Plugins (shared):**
- `search`
- `drawio` — render `.drawio` files directly in MkDocs pages (via `mkdocs-drawio` plugin)

**Diagram Strategy — draw.io + Mermaid (use both):**

| Use Case | Tool | Rationale |
|----------|------|----------|
| Architecture / infrastructure diagrams | **draw.io** | Full visual control, Azure icon set, professional appearance, customer-facing quality |
| Flowcharts, decision trees, sequences | **Mermaid** | Text-based, lives inline in markdown, fast to author, clean diffs in PRs |
| Network topology / port diagrams | **draw.io** | Complex layouts with grouped elements, icons, custom positioning |
| Troubleshooting decision flows | **Mermaid** | Quick inline flows, easy to maintain |
| Deployment sequences | **Mermaid** | Sequence diagrams render well, easy to update |

**draw.io conventions:**
- Source `.drawio` files stored in `docs/assets/diagrams/`
- Export SVG (preferred) or PNG alongside the source for fallback rendering
- Use the Azure icon set within draw.io for infrastructure diagrams
- The `mkdocs-drawio` plugin renders `.drawio` files directly — use `![](assets/diagrams/architecture.drawio)` syntax
- For Docusaurus pages, embed the exported SVG/PNG since there is no native draw.io plugin

**Mermaid conventions:**
- Inline in markdown using fenced code blocks (` ```mermaid `)
- Rendered natively via `pymdownx.superfences` custom fence (MkDocs) or `@docusaurus/theme-mermaid` (Docusaurus)
- Keep diagrams simple — if it needs custom positioning or icons, switch to draw.io

**Rationale for each extension:**
- Mermaid (superfences): Inline flowcharts, sequence diagrams, and decision trees
- draw.io (mkdocs-drawio): Architecture and infrastructure diagrams with Azure icons
- Tabbed: Tool-picker sections (Terraform/Bicep/ARM/PowerShell tabs)
- Snippets: Include shared content or code samples from src/
- Admonition + details: Consistent callout patterns across repos

### 1.2 — Standard Color Palette

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Scheme | default | slate |
| Primary | blue | blue |
| Accent | light blue | light blue |

Blue aligns with Azure branding. All repos use the same palette — no per-repo color customization.

### 1.3 — Repo-Specific Overrides (the only things that differ)

| Field | Per-repo value |
|-------|---------------|
| `site_name` | e.g., "Azure Local SOFS for FSLogix" |
| `site_description` | One-line description |
| `site_url` | `https://azurelocal.github.io/<repo-name>/` |
| `repo_url` | `https://github.com/AzureLocal/<repo-name>` |
| `repo_name` | `AzureLocal/<repo-name>` |
| `nav` | Repo-specific navigation tree |

---

## Phase 2: Standard Deploy Workflow

### 2.1 — Golden deploy-docs.yml

All repos use this identical workflow:

```yaml
name: Deploy Documentation

on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'mkdocs.yml'
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install MkDocs Material
        run: pip install mkdocs-material

      - name: Build site
        run: mkdocs build --strict

      - uses: actions/upload-pages-artifact@v3
        with:
          path: site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 2.2 — GitHub Pages Configuration

Each repo needs:
1. Settings → Pages → Source: GitHub Actions (not branch-based)
2. The deploy-docs.yml workflow above
3. No CNAME on solution repos — they use `azurelocal.github.io/<repo-name>/`

The Docusaurus site (azurelocal.github.io) keeps its custom domain CNAME (`azurelocal.cloud`).

### 2.3 — URL Structure

| Repo | Site URL |
|------|----------|
| azurelocal.github.io | `https://azurelocal.cloud` (custom domain) |
| sofs-fslogix | `https://azurelocal.github.io/azurelocal-sofs-fslogix/` |
| avd | `https://azurelocal.github.io/aurelocal-avd/` |
| loadtools | `https://azurelocal.github.io/azurelocal-loadtools/` |
| vm-conversion-toolkit | `https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/` |

---

## Phase 3: Update Existing MkDocs Repos

### 3.1 — azurelocal-sofs-fslogix

Already the closest to the golden config. Changes needed:
- None for theme/extensions (it IS the golden config source)
- Minor: Confirm Python version is pinned to 3.12 in workflow (already is)

### 3.2 — aurelocal-avd

Align mkdocs.yml to golden config. Specific changes:
- Add `site_url`
- Add `repo_name`
- Change primary color: indigo → blue
- Change accent color: indigo → light blue
- Add missing features: `navigation.top`, `navigation.footer`, `search.suggest`, `search.highlight`
- Add repo icon: `fontawesome/brands/github`
- Add Mermaid support (superfences custom_fences)
- Add missing extensions: `pymdownx.inlinehilite`, `pymdownx.snippets`, `attr_list`, `md_in_html`
- Add plugins: `search`
- Pin Python version to 3.12 in deploy workflow (currently `3.x`)

---

## Phase 4: Migrate loadtools from AsciiDoc to MkDocs

### 4.1 — Scope Assessment

The loadtools repo has the most extensive AsciiDoc content:
- `docs/index.adoc` — master TOC
- `docs/main.adoc` — book-format document with PDF theme
- 5 getting-started pages
- 7 VMFleet tool pages
- 4 additional tool overviews (fio, iperf, hammerdb, stress-ng)
- 2 operations pages
- 3 reference pages
- 4 standards pages
- draw.io diagrams → exported PNGs
- Custom PDF theme (`docs/themes/azurelocal-theme.yml`)

### 4.2 — Migration Strategy

1. **Create mkdocs.yml** using the golden config with loadtools-specific nav
2. **Convert .adoc → .md** for each file:
   - AsciiDoc tables (`|===`) → Markdown tables
   - AsciiDoc admonitions (`NOTE:`, `WARNING:`) → MkDocs admonitions (`!!! note`)
   - AsciiDoc source blocks → fenced code blocks
   - AsciiDoc cross-references (`xref:`) → Markdown links
   - AsciiDoc attributes (`:project-name:`) → hardcode or use snippets
   - AsciiDoc image macro (`image::`) → Markdown image syntax
   - AsciiDoc includes → pymdownx.snippets or inline
3. **Preserve directory structure** — the current `getting-started/`, `tools/`, `operations/`, `reference/`, `standards/` maps cleanly to MkDocs nav sections
4. **Keep AsciiDoc for PDF generation** — the `build-docs.yml` workflow continues to exist alongside `deploy-docs.yml`. The .adoc files can remain as the "book format" source if PDF output is still needed, or be archived
5. **Migrate diagrams** — draw.io source `.drawio` files move to `docs/assets/diagrams/`. Export SVG alongside each source file. Use `mkdocs-drawio` plugin to render `.drawio` files directly in pages, with exported SVG as fallback

### 4.3 — Nav Structure (proposed)

```yaml
nav:
  - Home: index.md
  - Getting Started:
      - Introduction: getting-started/introduction.md
      - Architecture: getting-started/architecture.md
      - Prerequisites: getting-started/prerequisites.md
      - Installation: getting-started/installation.md
      - Configuration: getting-started/configuration.md
  - Tools:
      - VMFleet:
          - Overview: tools/vmfleet/overview.md
          - Prerequisites: tools/vmfleet/prerequisites.md
          - Deployment: tools/vmfleet/deployment.md
          - Workload Profiles: tools/vmfleet/workload-profiles.md
          - Monitoring: tools/vmfleet/monitoring.md
          - Reporting: tools/vmfleet/reporting.md
          - Troubleshooting: tools/vmfleet/troubleshooting.md
      - fio: tools/fio/overview.md
      - iPerf3: tools/iperf/overview.md
      - HammerDB: tools/hammerdb/overview.md
      - stress-ng: tools/stress-ng/overview.md
  - Operations:
      - CI/CD Pipelines: operations/ci-cd.md
      - Credential Management: operations/credential-management.md
  - Reference:
      - Variable Reference: reference/variable-reference.md
      - Cmdlet Reference: reference/cmdlet-reference.md
      - Glossary: reference/glossary.md
  - Standards:
      - Documentation: standards/documentation-standards.md
      - Scripting: standards/scripting-standards.md
      - Variables: standards/variables-environment-standards.md
  - Contributing: contributing.md
```

### 4.4 — PDF Consideration

Options:
- **A) Keep dual-format**: AsciiDoc stays for PDF via `build-docs.yml`, MkDocs serves the web. Maintenance overhead grows.
- **B) MkDocs-only + mkdocs-pdf plugin**: Use `mkdocs-with-pdf` or `mkdocs-pdf-export-plugin` for PDF. Less control than AsciiDoc but single source.
- **C) MkDocs-only, drop PDF**: Web docs are the primary deliverable. Archive AsciiDoc files.
- **Recommendation**: Option C for now. PDF generation can be added later via plugin if needed. AsciiDoc source files move to `docs/_archived_adoc/` for reference during migration.

---

## Phase 5: Migrate vm-conversion-toolkit from AsciiDoc to MkDocs

### 5.1 — Scope Assessment

Much smaller — 6 .adoc files:
- `gen1-vs-gen2.adoc` — decision guide
- `getting-started.adoc` — path chooser + quick start
- `prerequisites.adoc` — requirements
- `runbook-azurelocal.adoc` — Azure Local conversion steps
- `runbook-hyperv.adoc` — Hyper-V conversion steps
- `troubleshooting.adoc` — common issues

### 5.2 — Migration Strategy

Same AsciiDoc → Markdown conversion as loadtools but much simpler (no book format, no PDF theme, no diagrams).

1. Create mkdocs.yml using golden config
2. Convert 6 .adoc files → .md
3. Add deploy-docs.yml workflow
4. Enable GitHub Pages

### 5.3 — Nav Structure (proposed)

```yaml
nav:
  - Home: index.md
  - Getting Started: getting-started.md
  - Gen 1 vs Gen 2: gen1-vs-gen2.md
  - Prerequisites: prerequisites.md
  - Runbooks:
      - Azure Local Path: runbook-azurelocal.md
      - Hyper-V Path: runbook-hyperv.md
  - Troubleshooting: troubleshooting.md
  - Contributing: contributing.md
```

---

## Phase 6: Docusaurus vs. MkDocs Comparison

### 6.1 — Feature Comparison

| Capability | Docusaurus | MkDocs Material | Verdict |
|-----------|-----------|----------------|---------|
| **Static site generation** | React/MDX | Python/Jinja2 | Both excellent |
| **Versioned docs** | Built-in (versions.json) | mkdocs-versioning plugin (less mature) | Docusaurus wins |
| **Blog engine** | Built-in with RSS/Atom | mkdocs-blog plugin (community) | Docusaurus wins |
| **Search** | Algolia DocSearch or local | Built-in lunr.js | Both good |
| **Mermaid diagrams** | Plugin required (`@docusaurus/theme-mermaid`) | Built-in via superfences | MkDocs easier |
| **draw.io diagrams** | Embed as SVG/PNG (no native plugin) | `mkdocs-drawio` plugin renders `.drawio` directly | MkDocs wins |
| **Tabbed content** | MDX components | pymdownx.tabbed | Both good |
| **Admonitions** | Built-in | Built-in | Tie |
| **Dark mode** | Built-in toggle | Built-in toggle | Tie |
| **Custom pages (React)** | Native JSX/React | Not supported (Jinja2 only) | Docusaurus wins |
| **Internationalization** | Built-in i18n | mkdocs-i18n plugin | Docusaurus wins |
| **Navbar/footer customization** | Highly flexible (React) | Config-driven (limited) | Docusaurus wins |
| **Content authoring** | Markdown + MDX | Markdown only | Docusaurus more flexible |
| **Build speed** | Slower (webpack/React) | Faster (Python) | MkDocs wins |
| **Hosting complexity** | Node.js build chain | Python pip install | MkDocs simpler |
| **Learning curve** | Higher (React, MDX, npm) | Lower (YAML + Markdown) | MkDocs wins |
| **Community themes** | Fewer (React-based) | Material is dominant | MkDocs Material wins |
| **Plugin ecosystem** | Large (npm) | Smaller but sufficient | Docusaurus wins |
| **Code annotation** | Via MDX | Built-in | MkDocs easier |

### 6.2 — For azurelocal.cloud Specifically

**What the site currently uses that needs Docusaurus:**
- Versioned docs (2.0.0, 1.0.0) — but content is nearly empty
- Blog with RSS — but 1 placeholder post
- Custom React pages (about, news, working) — all are placeholder
- Feature card grid on homepage — custom React component
- Frontmatter CMS integration

**What the site would gain from MkDocs:**
- Consistency with all solution repos — same theme, same experience
- Simpler contributor workflow — no React/JSX knowledge needed
- Faster builds
- Built-in Mermaid, tabs, annotations without plugins

**What the site would lose from MkDocs:**
- Versioned docs (not critical yet — content is minimal)
- Blog engine (would need external blog or mkdocs-blog plugin)
- Custom React pages/components
- Frontmatter CMS integration (can be replaced with VS Code + markdown editing)

### 6.3 — Recommendation

**Keep Docusaurus for now. Revisit when content matures.**

Rationale:
- The site serves a different purpose than solution repos — it's a community portal (blog, events, news, training), not technical docs
- Blog and versioned docs are Docusaurus strengths that MkDocs can't match
- The current content is so minimal that migrating now means migrating placeholders
- The real work is building actual content, not switching frameworks
- Once the content strategy is clear (how much blog? how much docs? events?), the framework decision becomes obvious

**However**: The Docusaurus theme MUST be updated to match the Azure branding used across MkDocs repos (blue primary, consistent header/footer). The current green Infima default looks disconnected.

### 6.4 — Docusaurus Theme Alignment

Even while keeping Docusaurus, align the visual identity:
- Change primary color from `#2e8555` (green) to `#0078D4` (Azure blue)
- Update dark mode primary from `#25c2a0` (teal) to a complementary Azure blue
- Update navbar to link to each solution repo's docs site
- Add a "Solutions" dropdown in navbar pointing to each MkDocs site
- Fix GitHub link URL typo (`AzuerLocal` → `AzureLocal`)
- Update author bio (remove TierPoint reference)
- Replace placeholder pages with actual "under construction" messaging or remove from nav
- Add solution repo links to footer

---

## Phase 7: Cross-Site Navigation

### 7.1 — Solution Repos → Main Site

Every MkDocs solution repo links back to the main site. Add to the golden mkdocs.yml `extra` section:

```yaml
extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/AzureLocal
  homepage: https://azurelocal.cloud
```

Consider adding a "Back to azurelocal.cloud" link in the footer or header of each MkDocs site.

### 7.2 — Main Site → Solution Repos

The Docusaurus navbar gets a "Solutions" dropdown:

| Label | URL |
|-------|-----|
| SOFS for FSLogix | https://azurelocal.github.io/azurelocal-sofs-fslogix/ |
| Azure Virtual Desktop | https://azurelocal.github.io/aurelocal-avd/ |
| Load Testing Framework | https://azurelocal.github.io/azurelocal-loadtools/ |
| VM Conversion Toolkit | https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/ |

### 7.3 — Cross-Linking Between Solution Repos

Where solutions overlap (e.g., SOFS fslogix config is relevant to AVD session hosts), add explicit cross-links. These are content decisions, not structural — handled during docs writing.

---

## Phase 8: Vale Linting Standardization

### 8.1 — Current State

Only azurelocal.github.io has Vale configured:
- `.vale.ini` at repo root
- `styles/Microsoft/` with 40+ rules
- Runs in deploy workflow via `errata-ai/vale-action@v2`

### 8.2 — Standardization

Add Vale to all MkDocs repos:
1. Copy `.vale.ini` and `styles/Microsoft/` from the Docusaurus repo
2. Adjust `.vale.ini` paths to point to `docs/` (MkDocs content dir)
3. Add a `vale` step to the deploy-docs.yml workflow (non-blocking initially — `continue-on-error: true`)
4. Optionally add a standalone `lint-docs.yml` workflow that runs on PR for docs changes

### 8.3 — Shared Vale Config

Store the canonical Vale rules and config in the docs repo (`azurelocal.github.io`) and document how to copy them. Or create a shared `.vale/` directory pattern.

---

## Phase 9: Standard docs/ Folder Structure

### 9.1 — Minimum docs structure every repo should have:

```
docs/
  index.md              # Home page
  architecture.md       # Solution architecture
  getting-started.md    # Quick start guide
  guides/               # How-to guides
  reference/            # Reference material
  standards/            # (if applicable)
  assets/               # Images, diagrams
    diagrams/           # draw.io source (.drawio) + exported SVG/PNG; Mermaid stays inline in .md files
  contributing.md       # (or at repo root, linked here)
  roadmap.md            # (optional)
```

### 9.2 — Shared nav pattern

While the nav content differs per repo, the top-level structure should be recognizable:

```yaml
nav:
  - Home: index.md
  - Architecture: architecture.md
  - Getting Started: getting-started.md
  - Guides: ...
  - Reference: ...
  - Standards: ...          # where applicable
  - Roadmap: roadmap.md     # where applicable
  - Contributing: contributing.md
```

---

## Relevant Files

### CREATE:
- `azurelocal-loadtools/mkdocs.yml` — Golden config for loadtools
- `azurelocal-loadtools/.github/workflows/deploy-docs.yml` — Standard deploy workflow
- `azurelocal-loadtools/docs/*.md` — Converted from .adoc (25+ files)
- `azurelocal-vm-conversion-toolkit/mkdocs.yml` — Golden config for vm-toolkit
- `azurelocal-vm-conversion-toolkit/.github/workflows/deploy-docs.yml` — Standard deploy workflow
- `azurelocal-vm-conversion-toolkit/docs/*.md` — Converted from .adoc (6 files) + index.md
- All repos: `.vale.ini`, `styles/Microsoft/` (copy from github.io)

### MODIFY:
- `aurelocal-avd/mkdocs.yml` — Align to golden config (colors, features, extensions)
- `aurelocal-avd/.github/workflows/deploy-docs.yml` — Pin Python 3.12
- `azurelocalcloud-azurelocal.github.io/src/css/custom.css` — Azure blue palette
- `azurelocalcloud-azurelocal.github.io/docusaurus.config.js` — Fix GitHub typo, add Solutions dropdown, update navbar
- `azurelocalcloud-azurelocal.github.io/blog/authors.yml` — Update author bio

### ARCHIVE:
- `azurelocal-loadtools/docs/*.adoc` → `docs/_archived_adoc/` (keep for reference)
- `azurelocal-vm-conversion-toolkit/docs/*.adoc` → `docs/_archived_adoc/`

### REFERENCE (no changes):
- `azurelocal-sofs-fslogix/mkdocs.yml` — Source for golden config
- `azurelocal-sofs-fslogix/.github/workflows/deploy-docs.yml` — Source for golden workflow

---

## Implementation Order

### Wave 1: Foundation (define standards first)
1. Document the golden mkdocs.yml baseline (this plan serves as Phase 1 spec)
2. Document the golden deploy-docs.yml workflow
3. Add this to `project_management/` as the docs site standard

### Wave 2: Align existing MkDocs repos (quick wins)
4. Update `aurelocal-avd/mkdocs.yml` to golden config — *parallel with step 5*
5. Update `aurelocal-avd/.github/workflows/deploy-docs.yml` — pin Python 3.12

### Wave 3: Migrate AsciiDoc repos (larger effort)
6. Convert `azurelocal-vm-conversion-toolkit` docs to MkDocs — *smaller, do first as pilot*
7. Convert `azurelocal-loadtools` docs to MkDocs — *larger, use lessons from step 6*
8. Enable GitHub Pages on both repos

### Wave 4: Docusaurus theme update
9. Update custom.css with Azure blue palette
10. Fix docusaurus.config.js (GitHub URL typo, Solutions dropdown, author bio)
11. Remove or replace placeholder pages

### Wave 5: Cross-site integration
12. Add Vale linting to all MkDocs repos
13. Add cross-site navigation links (MkDocs → Docusaurus, Docusaurus → MkDocs)
14. Verify all sites build and deploy correctly
