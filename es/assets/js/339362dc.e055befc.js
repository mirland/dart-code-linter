"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[6803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l="prefer-moving-to-variable",i={unversionedId:"rules/dart/prefer-moving-to-variable",id:"rules/dart/prefer-moving-to-variable",title:"prefer-moving-to-variable",description:"added in: 1.6.0 warning",source:"@site/docs/rules/dart/prefer-moving-to-variable.mdx",sourceDirName:"rules/dart",slug:"/rules/dart/prefer-moving-to-variable",permalink:"/es/docs/rules/dart/prefer-moving-to-variable",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/dart/prefer-moving-to-variable.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prefer-match-file-name",permalink:"/es/docs/rules/dart/prefer-match-file-name"},next:{title:"prefer-static-class",permalink:"/es/docs/rules/dart/prefer-static-class"}},c={},s=[{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prefer-moving-to-variable"},"prefer-moving-to-variable"),(0,a.kt)("p",null,"added in: 1.6.0 ",(0,a.kt)("span",{style:{color:"orange"}},"warning")),(0,a.kt)("p",null,"Warns when a property access or a method invocation start with duplicated chains of other invocations / accesses inside a single function or method block."),(0,a.kt)("p",null,"For instance, you have a function ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser()")," that returns a class instance with two fields: ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"age"),". If you call this function twice inside another function body, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final name = getUser().name;\nfinal age = getUser().age;\n")),(0,a.kt)("p",null,"the rule will suggest to move ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser()")," call to a single variable."),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed-duplicated-chains")," (default is ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),") to configure a threshold after which the rule should trigger on duplicated lines."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - prefer-moving-to-variable:\n        allowed-duplicated-chains: 3\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"bad"},"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"return Container(\n  color: Theme.of(context).colorScheme.secondary, // LINT\n  child: Text(\n    'Text with a background color',\n    style: Theme.of(context).textTheme.headline6, // LINT\n  ),\n);\n")),(0,a.kt)("h3",{id:"good"},"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final theme = Theme.of(context);\n\nreturn Container(\n  color: theme.colorScheme.secondary,\n  child: Text(\n    'Text with a background color',\n    style: theme.textTheme.headline6,\n  ),\n);\n")))}u.isMDXComponent=!0}}]);