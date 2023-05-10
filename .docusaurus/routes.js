import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/iCons3/__docusaurus/debug',
    component: ComponentCreator('/iCons3/__docusaurus/debug', '94b'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/config',
    component: ComponentCreator('/iCons3/__docusaurus/debug/config', 'c17'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/content',
    component: ComponentCreator('/iCons3/__docusaurus/debug/content', 'dc2'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/globalData',
    component: ComponentCreator('/iCons3/__docusaurus/debug/globalData', '96f'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/metadata',
    component: ComponentCreator('/iCons3/__docusaurus/debug/metadata', '164'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/registry',
    component: ComponentCreator('/iCons3/__docusaurus/debug/registry', 'e1a'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/routes',
    component: ComponentCreator('/iCons3/__docusaurus/debug/routes', 'bed'),
    exact: true
  },
  {
    path: '/iCons3/archive',
    component: ComponentCreator('/iCons3/archive', 'dec'),
    exact: true
  },
  {
    path: '/iCons3/blog',
    component: ComponentCreator('/iCons3/blog', '45f'),
    exact: true
  },
  {
    path: '/iCons3/blog/archive',
    component: ComponentCreator('/iCons3/blog/archive', 'cc2'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags',
    component: ComponentCreator('/iCons3/blog/tags', 'c21'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/weekly-reports',
    component: ComponentCreator('/iCons3/blog/tags/weekly-reports', 'c99'),
    exact: true
  },
  {
    path: '/iCons3/blog/Week 1',
    component: ComponentCreator('/iCons3/blog/Week 1', '9ae'),
    exact: true
  },
  {
    path: '/iCons3/markdown-page',
    component: ComponentCreator('/iCons3/markdown-page', 'ee7'),
    exact: true
  },
  {
    path: '/iCons3/simulation',
    component: ComponentCreator('/iCons3/simulation', 'e5f'),
    exact: true
  },
  {
    path: '/iCons3/docs',
    component: ComponentCreator('/iCons3/docs', 'd16'),
    routes: [
      {
        path: '/iCons3/docs/acknowledgements_references',
        component: ComponentCreator('/iCons3/docs/acknowledgements_references', '82d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/discussion',
        component: ComponentCreator('/iCons3/docs/discussion', 'bd0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/equations',
        component: ComponentCreator('/iCons3/docs/equations', 'b7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/future_works',
        component: ComponentCreator('/iCons3/docs/future_works', '8d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/intro',
        component: ComponentCreator('/iCons3/docs/intro', 'f06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/methods',
        component: ComponentCreator('/iCons3/docs/methods', 'bb3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/tables_and_figures',
        component: ComponentCreator('/iCons3/docs/tables_and_figures', 'bb0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/welcome',
        component: ComponentCreator('/iCons3/docs/welcome', '2c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/iCons3/',
    component: ComponentCreator('/iCons3/', 'c38'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
