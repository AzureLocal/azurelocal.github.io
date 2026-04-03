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

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '16px',
  marginTop: '16px',
};

const cardStyle = {
  border: '1px solid var(--ifm-color-emphasis-300)',
  borderRadius: '8px',
  padding: '20px',
  background: 'var(--ifm-background-surface-color)',
  display: 'flex',
  flexDirection: 'column',
};

const badgeStyle = {
  display: 'inline-block',
  fontSize: '11px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  padding: '2px 8px',
  borderRadius: '4px',
  marginBottom: '8px',
  background: 'var(--ifm-color-primary)',
  color: '#fff',
};

const resources = [
  {
    category: 'Guide',
    title: 'Azure Local Implementation Guide',
    desc: 'End-to-end deployment runbook covering Azure foundation, on-premises readiness, cluster deployment, and operational foundations.',
    link: '/docs/implementation/',
    linkLabel: 'Read the guide →',
  },
  {
    category: 'Guide',
    title: 'Automation Guide',
    desc: 'CI/CD pipeline deployment of Azure Local infrastructure using Terraform, Azure DevOps, and GitHub Actions.',
    link: '/docs/automation/',
    linkLabel: 'Read the guide →',
  },
  {
    category: 'Repository',
    title: 'azurelocal-toolkit',
    desc: 'PowerShell scripts and Bicep templates for every deployment task documented in the implementation guide.',
    link: 'https://github.com/AzureLocal/azurelocal-toolkit',
    linkLabel: 'View on GitHub →',
    external: true,
  },
  {
    category: 'Solution',
    title: 'Azure Virtual Desktop on Azure Local',
    desc: 'Deployment guide and automation for hosting AVD session hosts on your Azure Local cluster.',
    link: 'https://github.com/AzureLocal/azurelocal-avd',
    linkLabel: 'View on GitHub →',
    external: true,
  },
  {
    category: 'Solution',
    title: 'Scale-Out File Server with FSLogix',
    desc: 'SOFS configuration and FSLogix profile container setup for Azure Local, including Entra ID Kerberos.',
    link: 'https://github.com/AzureLocal/azurelocal-sofs-fslogix',
    linkLabel: 'View on GitHub →',
    external: true,
  },
  {
    category: 'Tool',
    title: 'VM Conversion Toolkit',
    desc: 'Tooling and step-by-step guides for migrating virtual machines to Azure Local from VMware, Hyper-V, and other platforms.',
    link: 'https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit',
    linkLabel: 'View on GitHub →',
    external: true,
  },
  {
    category: 'Tool',
    title: 'Load Testing Tools',
    desc: 'Azure Local cluster benchmarking and load testing toolset — VMFleet, CrystalDiskMark, and network performance tests.',
    link: 'https://github.com/AzureLocal/azurelocal-loadtools',
    linkLabel: 'View on GitHub →',
    external: true,
  },
  {
    category: 'Migration',
    title: 'Nutanix to Azure Local Migration',
    desc: 'Assessment, planning, and automation for migrating Nutanix AHV workloads to Azure Local.',
    link: 'https://github.com/AzureLocal/azurelocal-nutanix-migration',
    linkLabel: 'View on GitHub →',
    external: true,
  },
  {
    category: 'Training',
    title: 'Azure Local Training Curriculum',
    desc: 'Structured learning paths for Azure Local — covering fundamentals through advanced cluster management topics.',
    link: 'https://github.com/AzureLocal/azurelocal-training',
    linkLabel: 'View on GitHub →',
    external: true,
  },
  {
    category: 'Reference',
    title: 'Variable Management Standard',
    desc: 'Organisation-wide standard for config/variables.yml structure, naming conventions, and schema validation across all repos.',
    link: '/docs/implementation/04-variable-management-standard',
    linkLabel: 'Read the standard →',
  },
  {
    category: 'Reference',
    title: 'Documentation Standards',
    desc: 'Standards for authoring MDX documentation — frontmatter schema, file naming, and content structure.',
    link: '/standards/documentation',
    linkLabel: 'Read the standards →',
  },
  {
    category: 'Reference',
    title: 'Scripting Standards',
    desc: 'PowerShell scripting conventions, naming rules, header templates, and logging patterns for all toolkit scripts.',
    link: '/standards/scripting',
    linkLabel: 'Read the standards →',
  },
];

const categoryColors = {
  Guide: '#0078d4',
  Repository: '#107c10',
  Solution: '#5c2d91',
  Tool: '#d83b01',
  Migration: '#a80000',
  Training: '#dc8800',
  Reference: '#505050',
};

export default function Resources() {
  return (
    <Layout
      title="Resources"
      description="Azure Local Cloud resources — guides, tools, repositories, and reference material."
    >
      <div style={pageStyle}>
        <h1>Resources</h1>
        <p
          style={{
            color: 'var(--ifm-color-emphasis-600)',
            marginBottom: '40px',
          }}
        >
          Guides, automation tools, solution repositories, and reference
          material from the Azure Local Cloud project.
        </p>

        <div style={sectionStyle}>
          <div style={cardGridStyle}>
            {resources.map((resource) => (
              <div key={resource.title} style={cardStyle}>
                <span
                  style={{
                    ...badgeStyle,
                    background: categoryColors[resource.category] || '#0078d4',
                  }}
                >
                  {resource.category}
                </span>
                <strong style={{ fontSize: '15px', marginBottom: '6px' }}>
                  {resource.title}
                </strong>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--ifm-color-emphasis-700)',
                    flex: 1,
                    margin: '0 0 12px',
                  }}
                >
                  {resource.desc}
                </p>
                <a
                  href={resource.link}
                  target={resource.external ? '_blank' : undefined}
                  rel={resource.external ? 'noopener noreferrer' : undefined}
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {resource.linkLabel}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div style={sectionStyle}>
          <h2>Standards &amp; Conventions</h2>
          <p>
            All repositories in the Azure Local Cloud org follow shared
            standards for documentation, scripting, variable management, and
            examples. These standards are published in the{' '}
            <a href="/standards">Standards section</a> of this documentation
            site and in the <code>standards/</code> directory of each
            repository.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2>Contributing Resources</h2>
          <p>
            Want to add a tool, guide, or template to the project? Contributions
            are welcome. Start with the{' '}
            <a href="/docs/contributing">Contributing guide</a> or open a{' '}
            <a
              href="https://github.com/AzureLocal/azurelocal.github.io/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Discussion
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
}
