import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/iCons3/__docusaurus/debug',
    component: ComponentCreator('/iCons3/__docusaurus/debug', '57b'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/config',
    component: ComponentCreator('/iCons3/__docusaurus/debug/config', 'b68'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/content',
    component: ComponentCreator('/iCons3/__docusaurus/debug/content', 'ceb'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/globalData',
    component: ComponentCreator('/iCons3/__docusaurus/debug/globalData', 'e2a'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/metadata',
    component: ComponentCreator('/iCons3/__docusaurus/debug/metadata', '041'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/registry',
    component: ComponentCreator('/iCons3/__docusaurus/debug/registry', 'a48'),
    exact: true
  },
  {
    path: '/iCons3/__docusaurus/debug/routes',
    component: ComponentCreator('/iCons3/__docusaurus/debug/routes', 'b2f'),
    exact: true
  },
  {
    path: '/iCons3/blog',
    component: ComponentCreator('/iCons3/blog', '12f'),
    exact: true
  },
  {
    path: '/iCons3/blog/archive',
    component: ComponentCreator('/iCons3/blog/archive', 'a28'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags',
    component: ComponentCreator('/iCons3/blog/tags', '14c'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/weekly-reports',
    component: ComponentCreator('/iCons3/blog/tags/weekly-reports', '29b'),
    exact: true
  },
  {
    path: '/iCons3/blog/Week 1',
    component: ComponentCreator('/iCons3/blog/Week 1', 'ca2'),
    exact: true
  },
  {
    path: '/iCons3/markdown-page',
    component: ComponentCreator('/iCons3/markdown-page', '3ca'),
    exact: true
  },
  {
    path: '/iCons3/docs',
    component: ComponentCreator('/iCons3/docs', '841'),
    routes: [
      {
        path: '/iCons3/docs/category/heat-map',
        component: ComponentCreator('/iCons3/docs/category/heat-map', '56d'),
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
        path: '/iCons3/docs/tutorial-basics/Qualitative-Data-HeatMap',
        component: ComponentCreator('/iCons3/docs/tutorial-basics/Qualitative-Data-HeatMap', '5a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/iCons3/',
    component: ComponentCreator('/iCons3/', 'bce'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
