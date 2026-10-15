// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Azure Local',
  tagline:
    'Cloud Infrastructure for distributed locations enabled by Azure Arc',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://azurelocal.cloud',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AzureLocal', // Usually your GitHub org/user name.
  projectName: 'azurelocal.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          numberPrefixParser: false,
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/AzureLocal/',
          exclude: ['**/*.drawio'],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AzureLocal/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-2D9XDHSXJW',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/azure-local-social-card.jpg',
      navbar: {
        title: 'Azure Local',
        logo: {
          alt: 'Azure Local Logo',
          src: 'img/azurelocal.png',
        },
        items: [
          {
            to: '/docs/',
            position: 'left',
            label: 'Docs',
          },
          { to: '/working', label: 'Blog', position: 'left' },
          { to: '/working', label: 'Demos', position: 'left' },
          { href: 'https://azurelocal.cloud/azurelocal-training/', label: 'Training', position: 'left', title: 'Azure Local training and learning paths' },
          { to: '/working', label: 'News', position: 'left' },
          { to: '/working', label: 'Events', position: 'left' },
          {
            type: 'dropdown',
            label: 'Tools',
            position: 'left',
            items: [
              { type: 'html', value: '<strong>Plan and assess</strong>' },
              { label: 'Surveyor', href: 'https://azurelocal.cloud/azurelocal-surveyor/', title: 'Discover and assess existing estates before moving to Azure Local' },
              { label: 'Trailwright', href: 'https://labs.hybridsolutions.cloud/azurelocal-trailwright/', title: 'Browser-driven validation and test runs for Azure Local' },
              { label: 'Hyper-V Surveyor', href: 'https://labs.hybridsolutions.cloud/hyperv-surveyor/', title: 'Hyper-V estate discovery and assessment' },
              { label: 'Hyper-V Trailwright', href: 'https://labs.hybridsolutions.cloud/hyperv-trailwright/', title: 'Hyper-V validation and test automation' },
              { label: 'Ranger', href: 'https://azurelocal.cloud/azurelocal-ranger/', title: 'As-built documentation and reporting for Azure Local clusters' },
              { type: 'html', value: '<strong>Deploy</strong>' },
              { label: 'Zero Touch Provisioning (ZTP)', href: 'https://azurelocal.cloud/azurelocal-ztp/', title: 'Automated, hands-off Azure Local node and cluster provisioning' },
              { label: 'Beacon', href: 'https://azurelocal.cloud/azurelocal-beacon/', title: 'Deployment readiness and bootstrap helper' },
              { label: 'Toolkit', href: 'https://azurelocal.cloud/azurelocal-toolkit/', title: 'Platform automation, variable registry and IaC lifecycle' },
              { label: 'Sonar', href: 'https://azurelocal.cloud/azurelocal-sonar/', title: 'Pre- and post-deployment environment checks' },
              { label: 'Custom Images', href: 'https://azurelocal.cloud/azurelocal-custom-images/', title: 'Build and publish custom VM images for Azure Local' },
              { type: 'html', value: '<strong>Operate and test</strong>' },
              { label: 'Load Testing Framework', href: 'https://azurelocal.cloud/azurelocal-loadtools/', title: 'FIO, HammerDB, iPerf and VMFleet benchmarking' },
              { label: 'S2D Cartographer', href: 'https://azurelocal.cloud/azurelocal-s2d-cartographer/', title: 'Storage Spaces Direct capacity and layout mapping' },
              { label: 'Hybrid Health Monitoring', href: 'https://labs.hybridsolutions.cloud/hybrid-health-monitoring/', title: 'Hybrid infrastructure health monitoring' },
              { type: 'html', value: '<strong>Migrate</strong>' },
              { label: 'VMware Migration', href: 'https://azurelocal.cloud/azurelocal-vmware-migration/', title: 'Move VMware workloads to Azure Local' },
              { label: 'Nutanix Migration', href: 'https://azurelocal.cloud/azurelocal-nutanix-migration/', title: 'Move Nutanix workloads to Azure Local' },
              { label: 'VM Conversion Toolkit', href: 'https://azurelocal.cloud/azurelocal-vm-conversion-toolkit/', title: 'Convert VM disks and configurations for Azure Local' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Solutions',
            position: 'left',
            items: [
              { type: 'html', value: '<strong>Workloads and services</strong>' },
              { label: 'Azure Virtual Desktop', href: 'https://azurelocal.cloud/azurelocal-avd/', title: 'Azure Virtual Desktop on Azure Local' },
              { label: 'AKS on Azure Local', href: 'https://azurelocal.cloud/azurelocal-aks/', title: 'Kubernetes with AKS enabled by Azure Arc' },
              { label: 'IoT Operations', href: 'https://azurelocal.cloud/azurelocal-iot/', title: 'Azure IoT Operations on Azure Local' },
              { label: 'Azure App Services', to: '/docs/azure-services/app-services-on-azure-local', title: 'App Service on Azure Arc-enabled Kubernetes' },
              { label: 'Machine Learning and AI', to: '/docs/azure-services/ml-ai-on-azure-local', title: 'ML and AI workloads on Azure Local' },
              { label: 'SQL Managed Instance', to: '/docs/azure-services/sql-managed-instance-on-azure-local', title: 'SQL Managed Instance enabled by Azure Arc' },
              { label: 'SQL High Availability', href: 'https://azurelocal.cloud/azurelocal-sql-ha/', title: 'SQL Server high availability patterns on Azure Local' },
              { label: 'SOFS and FSLogix', href: 'https://azurelocal.cloud/azurelocal-sofs-fslogix/', title: 'Scale-Out File Server for FSLogix profile containers' },
              { type: 'html', value: '<strong>Operations and governance</strong>' },
              { label: 'Monitoring', href: 'https://azurelocal.cloud/azurelocal-monitoring/', title: 'Monitoring and alerting for Azure Local' },
              { label: 'Business continuity and DR', href: 'https://azurelocal.cloud/azurelocal-bcdr/', title: 'Backup and disaster recovery for Azure Local' },
              { label: 'Cost Management', href: 'https://azurelocal.cloud/azurelocal-cost/', title: 'Cost visibility and optimization' },
              { label: 'Governance', href: 'https://azurelocal.cloud/azurelocal-governance/', title: 'Policy, security and compliance baselines' },
              { label: 'Disconnected Operations', to: '/docs/operations/disconnected-operations-on-azure-local', title: 'Running Azure Local with limited or no connectivity' },
            ],
          },
          {
                type: 'dropdown',
                label: 'More',
                position: 'right',
                items: [
                  {
                label: 'About',
                to: '/about',  // Links to /about page
              },
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'FAQ',
                to: '/faq',
              },
              {
                label: 'Links',
                to: '/links',
              },
              {
                label: 'Resources',
                to: '/resources',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                to: 'https://my-site.com/help-us-translate',
                label: 'Help us translate',
              },
            ],
          },
          {
            href: 'https://github.com/AzureLocal/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
              {
                label: 'X',
                href: 'https://x.com/',
              },
              {
                label: 'Community Days',
                href: 'https://www.communitydays.org/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/working',
              },
              {
                label: 'Demos',
                to: '/working',
              },
              {
                label: 'News and Updates',
                to: '/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AzureLocal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Azure Local. Designed by <a href="https://www.hybridsolutions.cloud" target="_blank">Hybrid Cloud Solutions</a> and built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
