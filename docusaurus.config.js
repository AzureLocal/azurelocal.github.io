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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AzureLocal/',
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
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
            //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
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
          { to: '/working', label: 'Training', position: 'left' },
          { to: '/working', label: 'News', position: 'left' },
          { to: '/working', label: 'Events', position: 'left' },
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
            href: 'https://github.com/AzuerLocal/',
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
                label: 'Azure Local Docs',
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
        copyright: `Copyright © ${new Date().getFullYear()} Azure Local. Designed by <a href="https://x.com/CountryCloudBoy" target="_blank">@CountryCloudBoy</a> and built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
