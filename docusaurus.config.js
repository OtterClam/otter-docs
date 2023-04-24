// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OtterClam Docs',
  tagline: 'A DAO-governed Land Where NFTs Make Finance Fun',
  url: 'https://docs.ottopia.app',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'otterclam',
  projectName: 'otter-docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/about',
          sidebarPath: require.resolve('./sidebarsAbout.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/otterclam/otter-docs/tree/main',
          routeBasePath: '/',
        },
        // blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ottopia',
        path: 'docs/ottopia',
        routeBasePath: 'ottopia',
        sidebarPath: require.resolve('./sidebarsOttopia.js'),
        editUrl: 'https://github.com/otterclam/otter-docs/tree/main',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OtterClam Docs',
        logo: {
          alt: 'OtterClam Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: 'About',
          },
          {
            type: 'doc',
            docsPluginId: 'ottopia',
            docId: 'README',
            position: 'left',
            label: 'Ottopia',
          },
          {
            href: 'https://github.com/otterclam/otter-docs',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'DOCS',
            items: [
              {
                label: 'About',
                to: '/',
              },
              {
                label: 'Ottopia',
                to: '/ottopia',
              },
            ],
          },
          {
            title: 'COMMUNITY',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/otterclam',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/otterclam',
              },
            ],
          },
          {
            title: 'MORE',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/@otterclam',
              },
              {
                label: 'Github',
                href: 'https://github.com/otterclam',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCDDMx916FeqHmCilGr5WuQw/videos',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OtterClam All Rights Reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
