"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},s="Poster Session Introduction",a={unversionedId:"poster_session/poster_session",id:"poster_session/poster_session",title:"Poster Session Introduction",description:"The following are some extra materials and references to help better understand the poster. Feel free to ask us for more info as well :D",source:"@site/docs/poster_session/poster_session.md",sourceDirName:"poster_session",slug:"/poster_session/",permalink:"/iCons3/docs/poster_session/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Poster Session Resources",permalink:"/iCons3/docs/category/poster-session-resources"},next:{title:"Key and Definitions",permalink:"/iCons3/docs/poster_session/key"}},l={},u=[{value:"Definitions",id:"definitions",level:2},{value:"HVAC",id:"hvac",level:3},{value:"Demand",id:"demand",level:3},{value:"Preprocessing Demand Handling",id:"preprocessing-demand-handling",level:3},{value:"PRAC+",id:"prac",level:3},{value:"Other thing",id:"other-thing",level:2},{value:"Simulations",id:"simulations",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"poster-session-introduction"},"Poster Session Introduction"),(0,i.kt)("p",null,"The following are some extra materials and references to help better understand the poster. Feel free to ask us for more info as well :D"),(0,i.kt)("h2",{id:"definitions"},"Definitions"),(0,i.kt)("p",null,"Below are some of the definitions used throughout our research, for reference purposes. This page is mainly intended for the ",(0,i.kt)("b",null,"Poster Sessions"),", and each term will be referenced in detail in the main research part of the website. For further information on any of the same, any of the team members may be contacted. "),(0,i.kt)("h3",{id:"hvac"},"HVAC"),(0,i.kt)("p",null,"Heating, Ventilation, and Air Conditioning Systems is a technology used to regulate the indoor temperature, humidity, and air quality of a building, such as a home, office, or industrial facility. HVAC systems typically consist of equipment such as furnaces, air conditioners, heat pumps, air handlers, and ductwork. The system works by circulating air through the building and conditioning it according to the desired temperature and humidity levels, while also filtering out pollutants and maintaining proper ventilation."),(0,i.kt)("p",null,"HVAC Systems generally consist of a Heating Chamber, a cooling chamber, and multiple sensors to regulate temperature. There are humidity sensors inside and outside the HVAC unit itself to minimize room humidity, thermostats which help users set the desired temperature and help report the current temperature of the room to the HVAC system, and the Controller, which takes inputs from different sensors to activate the heating or the cooling chamber as required."),(0,i.kt)("h3",{id:"demand"},"Demand"),(0,i.kt)("p",null,"For the purposes of this study, Demand refers to the values that the building manager has set the HVAC units to, for certain times. For example, the building manager may set the HVAC unit to keep the room at a constant temperature of 70 Degrees Farenheit from 5PM-9AM. "),(0,i.kt)("p",null,"Different setpoints can be set of different times of the day, and different seasons. In some cases, this aspect can also be given to the end-user (by having them set desired temperature on the thermostat), but we will not be considering the same for the sake of simplicity on our simulations."),(0,i.kt)("h3",{id:"preprocessing-demand-handling"},"Preprocessing Demand Handling"),(0,i.kt)("p",null,"Preprocessing Demand Handling refers to the specific type of filtering that occurs on the demand signal in order to minimize energy consumption for the controller to meet the setpoints. Essentially, what this refers to is the way the curves are handled on the controller, such that the HVAC unit operates in an energy efficient manner, while maintaining optimal occupant comfort."),(0,i.kt)("h3",{id:"prac"},"PRAC+"),(0,i.kt)("p",null,"PRAC+ stands for Pattern Recognition Adaptive Control. "),(0,i.kt)("h2",{id:"other-thing"},"Other thing"),(0,i.kt)("p",null,"blah blah"),(0,i.kt)("h2",{id:"simulations"},"Simulations"),(0,i.kt)("p",null,"Here is a link to the simulations: insert link"))}p.isMDXComponent=!0}}]);