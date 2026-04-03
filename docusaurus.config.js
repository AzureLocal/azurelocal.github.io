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
  onBrokenMarkdownLinks: 'warn',

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
          lastVersion: '1.0.0',
          versions: {
            current: {
              label: 'Next',
              path: 'next',
            },
            '1.0.0': {
              label: '1.0.0',
              badge: true,
            },
          },
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
            type: 'docsVersionDropdown',
            position: 'left',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docsVersion',
            position: 'left',
            to: '/docs/intro',
            label: 'Docs',
          },
          { to: '/working', label: 'Blog', position: 'left' },
          { to: '/working', label: 'Demos', position: 'left' },
          { href: 'https://azurelocal.cloud/azurelocal-training/', label: 'Training', position: 'left' },
          { to: '/working', label: 'News', position: 'left' },
          { to: '/working', label: 'Events', position: 'left' },
          {
                type: 'dropdown',
                label: 'Solutions',
                position: 'left',
                items: [
                  { type: 'html', value: '<strong>Azure Services</strong>' },
                  {
                    label: 'Azure Virtual Desktop',
                    href: 'https://azurelocal.github.io/azurelocal-avd/',
                  },
                  {
                    label: 'AKS on Azure Local',
                    href: 'https://azurelocal.github.io/azurelocal-aks/',
                  },
                  {
                    label: 'IoT on Azure Local',
                    href: 'https://azurelocal.github.io/azurelocal-iot/',
                  },
                  {
                    label: 'Azure App Services',
                    href: '/docs/next/azure-services/app-services-on-azure-local',
                  },
                  {
                    label: 'Machine Learning and AI',
                    href: '/docs/next/azure-services/ml-ai-on-azure-local',
                  },
                  {
                    label: 'SQL Managed Instance',
                    href: '/docs/next/azure-services/sql-managed-instance-on-azure-local',
                  },
                  { type: 'html', value: '<strong>Operations</strong>' },
                  {
                    label: 'SOFS / FSLogix',
                    href: 'https://azurelocal.github.io/azurelocal-sofs-fslogix/',
                  },
                  {
                    label: 'Load Testing Framework',
                    href: 'https://azurelocal.github.io/azurelocal-loadtools/',
                  },
                  {
                    label: 'BCDR',
                    href: 'https://azurelocal.github.io/azurelocal-bcdr/',
                  },
                  {
                    label: 'Monitoring',
                    href: 'https://azurelocal.github.io/azurelocal-monitoring/',
                  },
                  {
                    label: 'Governance',
                    href: 'https://azurelocal.github.io/azurelocal-governance/',
                  },
                  {
                    label: 'Cost Management',
                    href: 'https://azurelocal.github.io/azurelocal-cost/',
                  },
                  { type: 'html', value: '<strong>Migration</strong>' },
                  {
                    label: 'VMware Migration',
                    href: 'https://azurelocal.github.io/azurelocal-vmware-migration/',
                  },
                  {
                    label: 'Nutanix Migration',
                    href: 'https://azurelocal.github.io/azurelocal-nutanix-migration/',
                  },
                  {
                    label: 'VM Conversion Toolkit',
                    href: 'https://azurelocal.github.io/azurelocal-vm-conversion-toolkit/',
                  },
                  { type: 'html', value: '<strong>Platform</strong>' },
                  {
                    label: 'Custom Images',
                    href: 'https://azurelocal.github.io/azurelocal-custom-images/',
                  },
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
                to: '/working',  // Links to /contact page
              },
              {
                label: 'FAQ',
                to: '/working',  // Links to /faq page
              },
              {
                label: 'Links',
                to: '/working',  // Links to /faq page
              },
              {
                label: 'Resources',
                to: '/working',  // Links to /faq page
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
                to: '/docs/intro',
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
