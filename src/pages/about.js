import React from 'react';
import Layout from '@theme/Layout';

const pageStyle = {
  maxWidth: '860px',
  margin: '0 auto',
  padding: '48px 24px',
  fontSize: '16px',
  lineHeight: '1.7',
};

const sectionStyle = {
  marginBottom: '40px',
};

const repoGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: '16px',
  marginTop: '16px',
};

const repoCardStyle = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  borderRadius: '8px',
  padding: '16px',
  background: 'var(--ifm-background-surface-color)',
};

const repos = [
  { name: 'azurelocal.github.io', desc: 'This documentation site — implementation guides, automation runbooks, and standards.', url: 'https://github.com/AzureLocal/azurelocal.github.io' },
  { name: 'azurelocal-toolkit', desc: 'PowerShell scripts and Bicep templates for deploying and validating Azure Local infrastructure.', url: 'https://github.com/AzureLocal/azurelocal-toolkit' },
  { name: 'azurelocal-avd', desc: 'Azure Virtual Desktop on Azure Local — deployment guides and automation.', url: 'https://github.com/AzureLocal/azurelocal-avd' },
  { name: 'azurelocal-sofs-fslogix', desc: 'Scale-Out File Server and FSLogix profile container configuration for Azure Local.', url: 'https://github.com/AzureLocal/azurelocal-sofs-fslogix' },
  { name: 'azurelocal-loadtools', desc: 'Load testing and benchmarking tools for Azure Local clusters.', url: 'https://github.com/AzureLocal/azurelocal-loadtools' },
  { name: 'azurelocal-vm-conversion-toolkit', desc: 'Tools and guides for migrating VMs to Azure Local from other platforms.', url: 'https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit' },
  { name: 'azurelocal-training', desc: 'Structured training curriculum and learning paths for Azure Local.', url: 'https://github.com/AzureLocal/azurelocal-training' },
  { name: 'azurelocal-copilot', desc: 'GitHub Copilot customisation and AI-assisted authoring standards for the org.', url: 'https://github.com/AzureLocal/azurelocal-copilot' },
  { name: 'azurelocal-nutanix-migration', desc: 'Guidance and automation for migrating from Nutanix to Azure Local.', url: 'https://github.com/AzureLocal/azurelocal-nutanix-migration' },
];

export default function About() {
  return (
    <Layout title="About" description="About the Azure Local Cloud community project and its maintainer Hybrid Cloud Solutions.">
      <div style={pageStyle}>
        <h1>About Azure Local Cloud</h1>

        <div style={sectionStyle}>
          <h2>What is Azure Local Cloud?</h2>
          <p>
            Azure Local Cloud is an open-source community project that publishes practical, field-tested
            guidance for deploying and operating <a href="https://learn.microsoft.com/azure/azure-local/" target="_blank" rel="noopener noreferrer">Azure Local</a> (formerly Azure Stack HCI) infrastructure.
            The project covers the full deployment lifecycle — from Azure foundation and on-premises readiness
            through cluster deployment, operational foundations, and advanced solutions.
          </p>
          <p>
            Every guide is written by engineers who deploy Azure Local in production environments.
            Content is structured as step-by-step runbooks with multiple execution options (Portal, CLI,
            PowerShell, ARM template) so engineers can follow the approach that matches their tooling and
            automation maturity.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2>Maintained by Hybrid Cloud Solutions</h2>
          <p>
            Azure Local Cloud is created and maintained by <strong>Hybrid Cloud Solutions</strong>, a
            specialist consultancy focused on Microsoft hybrid cloud infrastructure. Hybrid Cloud Solutions
            engineers deploy, validate, and document Azure Local in real customer environments — the guides
            here reflect that hands-on experience.
          </p>
          <p>
            The project is published under an open-source licence. Contributions from the broader community
            are welcome — see the <a href="/docs/contributing">Contributing guide</a> for details.
          </p>
          <ul>
            <li><strong>Website:</strong> <a href="https://www.hybridsolutions.cloud" target="_blank" rel="noopener noreferrer">hybridsolutions.cloud</a></li>
            <li><strong>GitHub Org:</strong> <a href="https://github.com/AzureLocal" target="_blank" rel="noopener noreferrer">github.com/AzureLocal</a></li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2>Project Repositories</h2>
          <p>The Azure Local Cloud project is organised across the following GitHub repositories:</p>
          <div style={repoGridStyle}>
            {repos.map((repo) => (
              <div key={repo.name} style={repoCardStyle}>
                <strong>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                </strong>
                <p style={{ margin: '6px 0 0', fontSize: '14px', color: 'var(--ifm-color-emphasis-700)' }}>{repo.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={sectionStyle}>
          <h2>Design Principles</h2>
          <ul>
            <li><strong>Field-tested:</strong> All content reflects real deployments, not hypothetical scenarios.</li>
            <li><strong>Opinionated where it matters:</strong> We recommend specific approaches based on production experience, while documenting alternatives.</li>
            <li><strong>Automation-first:</strong> Every manual step has a scripted equivalent. Scripts live in the companion <a href="https://github.com/AzureLocal/azurelocal-toolkit" target="_blank" rel="noopener noreferrer">azurelocal-toolkit</a> repository.</li>
            <li><strong>Open:</strong> All guides, scripts, and templates are published under open-source licences.</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2>Get Involved</h2>
          <p>
            Found an error? Have a better approach? Want to document a scenario we haven&apos;t covered yet?
            Contributions are welcome. Start with the{' '}
            <a href="/docs/contributing">Contributing guide</a> or open a{' '}
            <a href="https://github.com/AzureLocal/azurelocal.github.io/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussion</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
