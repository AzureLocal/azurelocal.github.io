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
};

const repoIssueLinks = [
  {
    name: 'azurelocal.github.io',
    label: 'Documentation, guides, runbooks',
    url: 'https://github.com/AzureLocal/azurelocal.github.io/issues',
  },
  {
    name: 'azurelocal-toolkit',
    label: 'Deployment scripts and templates',
    url: 'https://github.com/AzureLocal/azurelocal-toolkit/issues',
  },
  {
    name: 'azurelocal-avd',
    label: 'Azure Virtual Desktop on Azure Local',
    url: 'https://github.com/AzureLocal/azurelocal-avd/issues',
  },
  {
    name: 'azurelocal-sofs-fslogix',
    label: 'SOFS and FSLogix configuration',
    url: 'https://github.com/AzureLocal/azurelocal-sofs-fslogix/issues',
  },
  {
    name: 'azurelocal-vm-conversion-toolkit',
    label: 'VM migration and conversion',
    url: 'https://github.com/AzureLocal/azurelocal-vm-conversion-toolkit/issues',
  },
  {
    name: 'azurelocal-training',
    label: 'Training curriculum and learning paths',
    url: 'https://github.com/AzureLocal/azurelocal-training/issues',
  },
];

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Contact Azure Local Cloud and Hybrid Cloud Solutions."
    >
      <div style={pageStyle}>
        <h1>Contact</h1>

        <div style={sectionStyle}>
          <h2>GitHub Discussions</h2>
          <p>
            The best place to ask questions, share ideas, or start a
            conversation about Azure Local Cloud content is{' '}
            <a
              href="https://github.com/AzureLocal/azurelocal.github.io/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Discussions
            </a>
            . Discussions are open to everyone and are indexed publicly, making
            your question useful to others who may have the same query.
          </p>
          <p>Use Discussions for:</p>
          <ul>
            <li>Questions about deployment steps or scripts</li>
            <li>Requests for new topics or scenarios to be documented</li>
            <li>Sharing your own deployment experiences or variations</li>
            <li>General Azure Local questions</li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2>Report Issues</h2>
          <p>
            Found a bug in a guide, an error in a script, or outdated
            information? Please open a GitHub Issue in the appropriate
            repository:
          </p>
          <div style={cardGridStyle}>
            {repoIssueLinks.map((repo) => (
              <div key={repo.name} style={cardStyle}>
                <strong>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </strong>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: '14px',
                    color: 'var(--ifm-color-emphasis-700)',
                  }}
                >
                  {repo.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={sectionStyle}>
          <h2>Contributing</h2>
          <p>
            Want to fix an error, improve a guide, or add a new section?
            Contributions via Pull Request are welcome. See the{' '}
            <a href="/docs/contributing">Contributing guide</a> for standards,
            branching conventions, and review process.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2>Hybrid Cloud Solutions</h2>
          <p>
            Azure Local Cloud is maintained by{' '}
            <strong>Hybrid Cloud Solutions</strong>, a specialist consultancy
            focused on Microsoft hybrid cloud infrastructure. For professional
            services enquiries — including Azure Local design, deployment, and
            managed services — visit:
          </p>
          <ul>
            <li>
              <strong>Website:</strong>{' '}
              <a
                href="https://www.hybridsolutions.cloud"
                target="_blank"
                rel="noopener noreferrer"
              >
                hybridsolutions.cloud
              </a>
            </li>
          </ul>
          <p
            style={{ fontSize: '14px', color: 'var(--ifm-color-emphasis-600)' }}
          >
            Note: Community questions should be directed to GitHub Discussions
            rather than to Hybrid Cloud Solutions directly. This ensures answers
            are visible to the whole community.
          </p>
        </div>
      </div>
    </Layout>
  );
}
