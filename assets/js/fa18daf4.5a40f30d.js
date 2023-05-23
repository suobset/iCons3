"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},i="Methods",s={unversionedId:"methods",id:"methods",title:"Methods",description:"Data Collection and Simulation Construction",source:"@site/docs/methods.md",sourceDirName:".",slug:"/methods",permalink:"/iCons3/docs/methods",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/iCons3/docs/intro"},next:{title:"Tables and Figures",permalink:"/iCons3/docs/tables_and_figures"}},l={},u=[{value:"Data Collection and Simulation Construction",id:"data-collection-and-simulation-construction",level:2},{value:"Assumptions",id:"assumptions",level:3},{value:"Equations",id:"equations",level:2},{value:"Simulation Block Diagram",id:"simulation-block-diagram",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"methods"},"Methods"),(0,o.kt)("h2",{id:"data-collection-and-simulation-construction"},"Data Collection and Simulation Construction"),(0,o.kt)("p",null,"Our plan is to simulate a standard office building's controller, using the Johnson Control PRAC+",(0,o.kt)("sup",null,"1")," model as a reference. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We spoke with the controls engineer at the Central Heating Plant, Peter Volpe, and the UMass Campus Energy Engineer, Fidele Mazimpaka to get an idea of what controllers were widely used for HVAC control across UMass.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Almost all newer buildings use the FX20/FX60 Controllers, hence we are taking that as our reference.")))),(0,o.kt)("h3",{id:"assumptions"},"Assumptions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"No heat loss through ducts"),(0,o.kt)("li",{parentName:"ol"},"Constant air velocity through ducts"),(0,o.kt)("li",{parentName:"ol"},"Building can be modeled with no windows or doors")),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/suobset/iCons3/main/assets/diag1.png"}),(0,o.kt)("h2",{id:"equations"},"Equations"),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/suobset/iCons3/main/assets/diag3.png"}),(0,o.kt)("h2",{id:"simulation-block-diagram"},"Simulation Block Diagram"),(0,o.kt)("p",null,"The block diagram demonstrates the processing pipeline to go from a demand curve to the resultant temperature as a result of the PRAC+ controller."),(0,o.kt)("img",{src:"https://raw.githubusercontent.com/suobset/iCons3/main/assets/diag2.png"}))}p.isMDXComponent=!0}}]);