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

const linkListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkItemStyle = {
  padding: '8px 0',
  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
};

function LinkSection({ title, links }) {
  return (
    <div style={sectionStyle}>
      <h2>{title}</h2>
      <ul style={linkListStyle}>
        {links.map((link) => (
          <li key={link.url} style={linkItemStyle}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {link.desc && (
              <span style={{ marginLeft: '8px', color: 'var(--ifm-color-emphasis-600)', fontSize: '14px' }}>
                — {link.desc}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const microsoftLinks = [
  { label: 'Azure Local documentation', url: 'https://learn.microsoft.com/azure/azure-local/', desc: 'Official Microsoft docs' },
  { label: 'Azure Local overview', url: 'https://learn.microsoft.com/azure/azure-local/overview', desc: 'Product overview and key concepts' },
  { label: 'Azure Local sizing tool', url: 'https://azurelocalsizetool.azurewebsites.net/', desc: 'Hardware sizing calculator' },
  { label: 'Azure Local catalog', url: 'https://azurestackhcisolutions.azure.microsoft.com/', desc: 'Validated hardware solutions catalog' },
  { label: 'Azure Arc documentation', url: 'https://learn.microsoft.com/azure/azure-arc/', desc: 'Azure Arc overview and management' },
  { label: 'Microsoft Learn — Azure Stack HCI admin', url: 'https://learn.microsoft.com/training/paths/azure-stack-hci-administrator/', desc: 'Microsoft Learn training path' },
  { label: 'Azure Local release notes', url: 'https://learn.microsoft.com/azure/azure-local/whats-new', desc: 'Latest features and updates' },
  { label: 'Azure Local known issues', url: 'https://learn.microsoft.com/azure/azure-local/known-issues-2505', desc: 'Known issues by release' },
];

const communityLinks = [
  { label: 'AzureLocal GitHub Organisation', url: 'https://github.com/AzureLocal', desc: 'All Azure Local Cloud repositories' },
  { label: 'GitHub Discussions — azurelocal.github.io', url: 'https://github.com/AzureLocal/azurelocal.github.io/discussions', desc: 'Community Q&A and announcements' },
  { label: 'Hybrid Cloud Solutions', url: 'https://www.hybridsolutions.cloud', desc: 'Project maintainer website' },
  { label: 'Tech Community — Azure Stack HCI', url: 'https://techcommunity.microsoft.com/category/AzureStackHCI', desc: 'Microsoft Tech Community forum' },
  { label: 'Reddit — r/HyperV', url: 'https://www.reddit.com/r/HyperV/', desc: 'Includes Azure Local/HCI discussions' },
];

const solutionLinks = [
  { label: 'azurelocal-toolkit', url: 'https://github.com/AzureLocal/azurelocal-toolkit', desc: 'Deployment scripts and templates' },
  { label: 'azurelocal-avd', url: 'https://github.com/AzureLocal/azurelocal-avd', desc: 'Azure Virtual Desktop on Azure Local' },
  { label: 'azurelocal-sofs-fslogix', url: 'https://github.com/AzureLocal/azurelocal-sofs-fslogix', desc: 'SOFS and FSLogix profile containers' },
  { label: 'azurelocal-loadtools', url: 'https://github.com/AzureLocal/azurelocal-loadtools', desc: 'Load testing and benchmarking tools' },
  { label: 'azurelocal-vm-conversion-toolkit', url: 'https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit', desc: 'VM migration to Azure Local' },
  { label: 'azurelocal-nutanix-migration', url: 'https://github.com/AzureLocal/azurelocal-nutanix-migration', desc: 'Nutanix to Azure Local migration' },
  { label: 'azurelocal-training', url: 'https://github.com/AzureLocal/azurelocal-training', desc: 'Training curriculum and learning paths' },
];

const ecosystemLinks = [
  { label: 'Windows Admin Center', url: 'https://learn.microsoft.com/windows-server/manage/windows-admin-center/overview', desc: 'Web-based management for Azure Local' },
  { label: 'Dell OpenManage Integration for WAC', url: 'https://www.dell.com/support/kbdoc/en-us/000125614/openmanage-integration-with-windows-admin-center', desc: 'OMIMSWAC hardware monitoring' },
  { label: 'Pester — PowerShell test framework', url: 'https://pester.dev/', desc: 'Used in azurelocal-toolkit tests' },
  { label: 'PSScriptAnalyzer', url: 'https://github.com/PowerShell/PSScriptAnalyzer', desc: 'PowerShell static analysis linter' },
  { label: 'Azure Bicep', url: 'https://learn.microsoft.com/azure/azure-resource-manager/bicep/', desc: 'Azure infrastructure-as-code language' },
  { label: 'Terraform Azure Provider', url: 'https://registry.terraform.io/providers/hashicorp/azurerm/', desc: 'Used for management infrastructure automation' },
  { label: 'Docusaurus', url: 'https://docusaurus.io/', desc: 'Static site generator powering this docs site' },
];

export default function Links() {
  return (
    <Layout title="Links" description="Curated links for Azure Local — Microsoft documentation, community resources, and ecosystem tools.">
      <div style={pageStyle}>
        <h1>Links</h1>
        <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '40px' }}>
          Curated links to Microsoft documentation, community resources, Azure Local Cloud repositories, and ecosystem tooling.
        </p>

        <LinkSection title="Microsoft Documentation" links={microsoftLinks} />
        <LinkSection title="Community" links={communityLinks} />
        <LinkSection title="Azure Local Cloud Repositories" links={solutionLinks} />
        <LinkSection title="Ecosystem Tools" links={ecosystemLinks} />
      </div>
    </Layout>
  );
}
