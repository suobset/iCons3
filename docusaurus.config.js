// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iConS 3: Team Library',
  tagline: 'Anvitha, Frank, Kush, Emily',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://suobset.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/iCons3/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'suobset', // Usually your GitHub org/user name.
  projectName: 'iCons3', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/suobset/iCons3',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/suobset/iCons3',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/apollo11big.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/apollo11.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Project',
          },
          {to: '/blog', label: 'Weekly Reports', position: 'left'},
          {
            href: 'https://github.com/suobset/iCons3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Works',
            items: [
              {
                label: 'Project',
                to: '/docs/intro',
              },
              {
                label: 'Weekly Reports',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Technologies',
            items: [
              {
                label: 'MATLAB',
                href: 'https://www.mathworks.com/products/matlab.html',
              },
              {
                label: 'React',
                href: 'https://reactjs.org/',
              },
            ],
          },
          {
            title: 'Open Source',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/suobset/iCons',
              },
              {
                label: 'iCons Innovation Portal [soon]',
                href: 'https://icons.cns.umass.edu',
              }
            ],
          },
        ],
        copyright: 'Anvitha, Emily, Frank, and Kush |  iCons 3: Spring 2023',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
