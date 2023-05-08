import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/iCons3/__docusaurus/debug',
    component: ComponentCreator('/iCons3/__docusaurus/debug', '36a'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/config',
    component: ComponentCreator('/iCons3/__docusaurus/debug/config', '173'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/content',
    component: ComponentCreator('/iCons3/__docusaurus/debug/content', '652'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/globalData',
    component: ComponentCreator('/iCons3/__docusaurus/debug/globalData', 'a60'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/metadata',
    component: ComponentCreator('/iCons3/__docusaurus/debug/metadata', '643'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/registry',
    component: ComponentCreator('/iCons3/__docusaurus/debug/registry', '721'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/routes',
    component: ComponentCreator('/iCons3/__docusaurus/debug/routes', '1b2'),
    exact: true
  },
  {
    path: '/iCons3/blog',
    component: ComponentCreator('/iCons3/blog', '6ed'),
    exact: true
  },
  {
    path: '/iCons3/blog/archive',
    component: ComponentCreator('/iCons3/blog/archive', 'c4f'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags',
    component: ComponentCreator('/iCons3/blog/tags', 'e74'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/weekly-reports',
    component: ComponentCreator('/iCons3/blog/tags/weekly-reports', '04a'),
    exact: true
  },
  {
    path: '/iCons3/blog/Week 1',
    component: ComponentCreator('/iCons3/blog/Week 1', '414'),
    exact: true
  },
  {
    path: '/iCons3/blog/Week 1',
    component: ComponentCreator('/iCons3/blog/Week 1', 'b0d'),
    exact: true
  },
  {
    path: '/iCons3/markdown-page',
    component: ComponentCreator('/iCons3/markdown-page', 'adb'),
    exact: true
  },
  {
    path: '/iCons3/docs',
    component: ComponentCreator('/iCons3/docs', '119'),
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
    component: ComponentCreator('/iCons3/', '051'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
