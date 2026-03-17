# Contributing

Thank you for your interest in contributing to the Azure Local documentation site. Contributions are welcome — especially around content, tutorials, and community resources.

## Before You Start

- Read the [README](README.md) for an overview of the project
- This is the [azurelocal.cloud](https://azurelocal.cloud) community portal built with Docusaurus
- Check open issues and pull requests to avoid duplicate work

## How to Contribute

### Reporting Bugs

Use the [bug report issue template](.github/ISSUE_TEMPLATE/bug_report.md) for site issues (broken links, rendering problems, build failures).

### Suggesting Features

Use the [feature request issue template](.github/ISSUE_TEMPLATE/feature_request.md). Describe the use case, not just the solution.

### Documentation Issues

Use the [documentation issue template](.github/ISSUE_TEMPLATE/docs_issue.md) for content that is missing, incorrect, or unclear.

### Submitting Pull Requests

1. Fork the repo and create a branch from `main`
2. Name branches using conventional types: `feat/solutions-page`, `fix/broken-link`, `docs/getting-started`
3. Keep changes focused — one logical change per PR
4. Fill out the pull request template completely

## Commit Messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>
```

| Type | When |
|------|------|
| `feat` | New feature or page |
| `fix` | Bug fix |
| `docs` | Documentation content |
| `infra` | CI/CD, workflows, config |
| `chore` | Maintenance |
| `refactor` | Code improvement, no behavior change |
| `test` | Tests |

Examples:
- `feat(blog): add monthly update post`
- `fix(nav): correct solutions dropdown links`
- `docs(guides): add AVD deployment overview`

## Development Guidelines

### Local Development

```bash
npm install
npm run start
```

This starts a local development server at `http://localhost:3000/`.

### Content Guidelines

- Follow [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) conventions
- Vale linting enforces style rules — run locally with `vale docs/` before submitting
- Use sentence case for headings
- Use Markdown (not MDX) for docs content where possible

### Blog Posts

- Place in `blog/YYYY-MM-DD-slug/` directory
- Include `authors` and `tags` frontmatter referencing `blog/authors.yml` and `blog/tags.yml`

## Standards

This project follows the **org-wide AzureLocal standards** documented at [azurelocal.cloud/standards](https://azurelocal.cloud/standards/). Key references:

- [Repository Structure](https://azurelocal.cloud/standards/repo-structure) — Required files, directories, labels, branch naming
- [Documentation Standards](https://azurelocal.cloud/standards/documentation/documentation-standards) — Writing and formatting
- [Naming Conventions](https://azurelocal.cloud/standards/documentation/naming-conventions) — Files, variables, resources
- [Fictional Company Policy](https://azurelocal.cloud/standards/fictional-company-policy) — Use IIC, never Contoso

## Code of Conduct

Be respectful and constructive. Keep discussions on-topic and collaborative.
