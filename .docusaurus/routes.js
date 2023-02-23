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
    component: ComponentCreator('/iCons3/blog', 'e96'),
    exact: true
  },
  {
    path: '/iCons3/blog/archive',
    component: ComponentCreator('/iCons3/blog/archive', 'a28'),
    exact: true
  },
  {
    path: '/iCons3/blog/first-blog-post',
    component: ComponentCreator('/iCons3/blog/first-blog-post', '64c'),
    exact: true
  },
  {
    path: '/iCons3/blog/long-blog-post',
    component: ComponentCreator('/iCons3/blog/long-blog-post', '66b'),
    exact: true
  },
  {
    path: '/iCons3/blog/mdx-blog-post',
    component: ComponentCreator('/iCons3/blog/mdx-blog-post', 'f99'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags',
    component: ComponentCreator('/iCons3/blog/tags', '14c'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/docusaurus',
    component: ComponentCreator('/iCons3/blog/tags/docusaurus', '269'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/facebook',
    component: ComponentCreator('/iCons3/blog/tags/facebook', '84d'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/hello',
    component: ComponentCreator('/iCons3/blog/tags/hello', 'ef8'),
    exact: true
  },
  {
    path: '/iCons3/blog/tags/hola',
    component: ComponentCreator('/iCons3/blog/tags/hola', '534'),
    exact: true
  },
  {
    path: '/iCons3/blog/welcome',
    component: ComponentCreator('/iCons3/blog/welcome', '7ef'),
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
