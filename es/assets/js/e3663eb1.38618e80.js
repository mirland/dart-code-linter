"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[9992],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8073:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(7462),a=(t(7294),t(3905));const o={},i="arguments-ordering",l={unversionedId:"rules/dart/arguments-ordering",id:"rules/dart/arguments-ordering",title:"arguments-ordering",description:"Enforces named argument order in function and constructor invocations to be the same as corresponding named parameter declaration order.",source:"@site/docs/rules/dart/arguments-ordering.md",sourceDirName:"rules/dart",slug:"/rules/dart/arguments-ordering",permalink:"/es/docs/rules/dart/arguments-ordering",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/dart/arguments-ordering.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dart",permalink:"/es/docs/rules/dart/"},next:{title:"avoid-banned-imports",permalink:"/es/docs/rules/dart/avoid-banned-imports"}},s={},d=[{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],u={toc:d},c="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arguments-ordering"},"arguments-ordering"),(0,a.kt)("p",null,"Enforces named argument order in function and constructor invocations to be the same as corresponding named parameter declaration order."),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"Set child-last (default is false) to keep the child property last."),(0,a.kt)("p",null,"This option allows you to use this rule together with ",(0,a.kt)("a",{parentName:"p",href:"https://dart.dev/tools/linter-rules/sort_child_properties_last"},"sort_child_properties_last"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart:"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - arguments-ordering:\n        child-last: true\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"bad"},"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart:"},"Person buildPerson({ String name, String surname, String age });\n\n// LINT\nfinal person = buildPerson(age: 42, surname: 'The Pooh', name: 'Winnie');\n")),(0,a.kt)("h3",{id:"good"},"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart:"},"Person buildPerson({ String name, String surname, String age });\n\nfinal person = buildPerson(name: 'Winnie', surname: 'The Pooh', age: 42);\n")))}p.isMDXComponent=!0}}]);