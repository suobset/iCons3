// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iCons 3: Team Thermo Titans',
  tagline: 'Anvitha, Emily, Frank, Kush',
  favicon: 'img/favicon.png',

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
          // editUrl:
          //   'https://github.com/suobset/iCons3',
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
      image: 'img/iCons-nogo.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Site Logo',
          src: 'img/iCons-nogo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'welcome',
            position: 'left',
            label: 'Project',
          },
          {to: '/simulation', label: 'Simulation', position: 'left'},
          {to: '/docs/report', label: 'Report', position: 'left'},
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
                to: '/docs/welcome',
              },
              {
                label: 'Simulation',
                to: '/simulation',
              },
              {
                label: 'Report',
                to: '/docs/report',
              },
              {
                label: 'Archive [soon]',
                to: '/archive',
              }
            ],
          },
          {
            title: 'Technologies',
            items: [
              {
                label: 'Simulink',
                href: 'https://www.mathworks.com/products/simulink.html',
              },
              {
                label: 'MATLAB',
                href: 'https://www.mathworks.com/products/matlab.html',
              },
              {
                label: 'React',
                href: 'https://react.dev/',
              },
              {
                label: 'LaTeX',
                href: 'https://www.latex-project.org/',
              }
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
                href: 'https://icons.cns.umass.edu/innovation-portal',
              },
              {
                label: 'GNU GPL v2.0',
                href: 'https://github.com/suobset/iCons3/blob/main/LICENSE',
              }
            ],
          },
        ],
        copyright: 'Anvitha, Emily, Frank, Kush | iCons 3 Spring 2023',

      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
