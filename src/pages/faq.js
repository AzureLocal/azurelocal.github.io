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

const faqItemStyle = {
  marginBottom: '28px',
  paddingBottom: '28px',
  borderBottom: '1px solid var(--ifm-color-emphasis-200)',
};

const faqs = [
  {
    q: 'What is Azure Local Cloud?',
    a: 'Azure Local Cloud is an open-source project that publishes practical deployment guides, runbooks, and automation scripts for Azure Local (formerly Azure Stack HCI) infrastructure. All content is written by engineers who deploy Azure Local in production environments.',
  },
  {
    q: 'Who maintains this documentation?',
    a: 'The documentation is created and maintained by Hybrid Cloud Solutions, a specialist Microsoft hybrid cloud consultancy. See the About page for more details.',
  },
  {
    q: 'Is this documentation official Microsoft content?',
    a: 'No. This is a community project, not official Microsoft documentation. For Microsoft\'s official Azure Local documentation, visit learn.microsoft.com/azure/azure-local/. Our guides complement the official docs by providing opinionated, step-by-step deployment runbooks based on real-world deployments.',
  },
  {
    q: 'What version of Azure Local does this documentation cover?',
    a: 'Documentation targets the current Generally Available version of Azure Local. The site is versioned — you can switch between documentation versions using the version selector in the navigation bar. See the Changelog for release history.',
  },
  {
    q: 'Where can I find deployment scripts and templates?',
    a: 'The companion azurelocal-toolkit repository contains all PowerShell scripts, Bicep templates, and configuration files referenced in the guides. Every manual step documented here has a corresponding script in the toolkit.',
  },
  {
    q: 'Can I contribute to the documentation?',
    a: 'Yes — contributions are welcome. The project accepts Pull Requests for error corrections, improvements, and new topics. See the Contributing guide and the standards documentation for the style guide, frontmatter requirements, and review process.',
  },
  {
    q: 'How do I report an error or outdated content?',
    a: 'Open a GitHub Issue in the relevant repository. The azurelocal.github.io repository handles documentation issues. Use GitHub Discussions for questions rather than Issues, which are reserved for actionable bugs and content corrections.',
  },
  {
    q: 'Does the documentation cover third-party hardware vendors?',
    a: 'The primary implementation guide uses Dell-branded hardware (iDRAC, BOSS cards, Redfish API), as that is the hardware platform used in the reference deployments underpinning the guides. The Azure foundation and cluster configuration sections are hardware-vendor neutral.',
  },
  {
    q: 'Are there alternative deployment approaches documented?',
    a: 'Yes. Most tasks include tabbed execution options covering Portal, Azure CLI, PowerShell, and ARM Template approaches where applicable. The CI/CD pipeline deployment path (using Terraform and Azure DevOps) is documented separately from the manual deployment path.',
  },
  {
    q: 'Where can I find training material?',
    a: 'The azurelocal-training repository contains structured learning paths and training curriculum for Azure Local. The Links page also lists Microsoft Learn paths and other external resources.',
  },
  {
    q: 'Can I use these scripts and templates in my own deployments?',
    a: 'Yes. All scripts and templates are published under open-source licences. Review the LICENCE file in each repository. Scripts should be reviewed and tested in a non-production environment before use in production.',
  },
  {
    q: 'How often is the documentation updated?',
    a: 'The documentation is updated as Azure Local receives new features, as deployment best practices evolve, and as issues are reported. Follow the GitHub repository or check the Changelog for updates.',
  },
];

export default function FAQ() {
  return (
    <Layout title="FAQ" description="Frequently asked questions about Azure Local Cloud documentation.">
      <div style={pageStyle}>
        <h1>Frequently Asked Questions</h1>
        <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '40px' }}>
          Can&apos;t find an answer here?{' '}
          <a href="https://github.com/AzureLocal/azurelocal.github.io/discussions" target="_blank" rel="noopener noreferrer">
            Open a GitHub Discussion
          </a>
          .
        </p>

        <div style={sectionStyle}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={faqItemStyle}>
              <h3 style={{ marginTop: 0 }}>{faq.q}</h3>
              <p style={{ marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
