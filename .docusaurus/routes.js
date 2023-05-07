import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/iCons3/__docusaurus/debug',
    component: ComponentCreator('/iCons3/__docusaurus/debug', '1ae'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/config',
    component: ComponentCreator('/iCons3/__docusaurus/debug/config', '9ee'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/content',
    component: ComponentCreator('/iCons3/__docusaurus/debug/content', '782'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/globalData',
    component: ComponentCreator('/iCons3/__docusaurus/debug/globalData', '707'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/metadata',
    component: ComponentCreator('/iCons3/__docusaurus/debug/metadata', 'b1d'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/registry',
    component: ComponentCreator('/iCons3/__docusaurus/debug/registry', '5bc'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/routes',
    component: ComponentCreator('/iCons3/__docusaurus/debug/routes', 'd44'),
    exact: true
  },
  {
    path: '/iCons3/blog',
    component: ComponentCreator('/iCons3/blog', '443'),
    exact: true
  },
  {
    path: '/iCons3/blog/archive',
    component: ComponentCreator('/iCons3/blog/archive', '8ba'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags',
    component: ComponentCreator('/iCons3/blog/tags', '706'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/weekly-reports',
    component: ComponentCreator('/iCons3/blog/tags/weekly-reports', '102'),
    exact: true
  },
  {
    path: '/iCons3/blog/Week 1',
    component: ComponentCreator('/iCons3/blog/Week 1', 'c65'),
    exact: true
  },
  {
    path: '/iCons3/blog/Week 1',
    component: ComponentCreator('/iCons3/blog/Week 1', '1cc'),
    exact: true
  },
  {
    path: '/iCons3/markdown-page',
    component: ComponentCreator('/iCons3/markdown-page', '6d2'),
    exact: true
  },
  {
    path: '/iCons3/docs',
    component: ComponentCreator('/iCons3/docs', 'c14'),
    routes: [
      {
        path: '/iCons3/docs/definitions',
        component: ComponentCreator('/iCons3/docs/definitions', 'ea1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/iCons3/docs/intro',
        component: ComponentCreator('/iCons3/docs/intro', 'f06'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/iCons3/',
    component: ComponentCreator('/iCons3/', '142'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
