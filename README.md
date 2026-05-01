# Azure Local Cloud Documentation

[![Deploy](https://github.com/AzureLocal/azurelocal.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/AzureLocal/azurelocal.github.io/actions/workflows/deploy.yml)

Community documentation for [Azure Local](https://learn.microsoft.com/en-us/azure/azure-local/) — Microsoft's hybrid cloud infrastructure platform enabled by Azure Arc.

**Live site:** [https://azurelocal.cloud](https://azurelocal.cloud)

## What's Here

- **Implementation Guide** — End-to-end deployment runbook covering CI/CD infrastructure, Azure foundation, on-prem readiness, cluster deployment, operational foundations, and testing/validation
- **Planning** — Naming standards, discovery checklists, site assessment, hardware requirements, landing zone strategy
- **Design** — High-level and low-level design documents
- **Operations** — Day-2 operational procedures
- **Automation** — IaC patterns and pipeline guidance
- **Azure Services** — Running Azure services on Azure Local (AVD, AKS, SQL MI, App Services, ML/AI)
- **Lab Environment** — Lab setup and access

## Versioning

Documentation versions align with Azure Local build releases:

| Version | Description |
|---------|-------------|
| **2604** | Current — includes Simplified Provisioning (Preview), SAN (Disaggregated) deployment, Local Identity GA |
| **2411** | Previous release baseline |

## Local Development

```bash
npm install
npm run start    # Dev server at http://localhost:3000
npm run build    # Production build
```

Built with [Docusaurus](https://docusaurus.io/).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

See [LICENSE](LICENSE).
