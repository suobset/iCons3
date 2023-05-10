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
    path: '/iCons3/docs',
    component: ComponentCreator('/iCons3/docs', '6f0'),
    routes: [
      {
        path: '/iCons3/docs/category/poster-session-resources',
        component: ComponentCreator('/iCons3/docs/category/poster-session-resources', '634'),
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
        path: '/iCons3/docs/poster_session/',
        component: ComponentCreator('/iCons3/docs/poster_session/', 'd02'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/poster_session/acknowledgements_references',
        component: ComponentCreator('/iCons3/docs/poster_session/acknowledgements_references', '7d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/poster_session/discussion',
        component: ComponentCreator('/iCons3/docs/poster_session/discussion', 'c58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/poster_session/future_works',
        component: ComponentCreator('/iCons3/docs/poster_session/future_works', 'a70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/poster_session/key',
        component: ComponentCreator('/iCons3/docs/poster_session/key', '950'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/poster_session/methods',
        component: ComponentCreator('/iCons3/docs/poster_session/methods', '7c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/poster_session/simulation',
        component: ComponentCreator('/iCons3/docs/poster_session/simulation', 'ba0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/poster_session/tables_and_figures',
        component: ComponentCreator('/iCons3/docs/poster_session/tables_and_figures', 'a8f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/simulation',
        component: ComponentCreator('/iCons3/docs/simulation', '8e7'),
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
