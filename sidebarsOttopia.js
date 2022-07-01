/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  ottopiaSidebar: [
    'README',
    {
      type: 'category',
      label: 'Gameplay',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Gameplay in Ottopia',
        description: 'Learn about the gaming ecosystem in Ottopia!',
        slug: '/gameplay',
        keywords: ['gameplay'],
        image: '/static/img/favicon-96x96.png',
      },
      items: [
        'gameplay/getting-started',
        'gameplay/portals',
        'gameplay/otto-nft',
        'gameplay/traits',
        'gameplay/attributes',
        'gameplay/rarity-farming',
        'gameplay/store',
        'gameplay/leaderboard',
      ],
    },
    {
      type: 'category',
      label: 'DAO',
      collapsed: false,
      items: [{ type: 'autogenerated', dirName: 'dao' }],
    },
  ],
}

module.exports = sidebars