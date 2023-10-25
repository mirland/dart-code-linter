"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[8449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="Lines of Code",l={unversionedId:"metrics/lines-of-code",id:"metrics/lines-of-code",title:"Lines of Code",description:"The lines of code are the total number of lines in a method (or function). The comment lines, and the blank lines are also counted. A longer method is often difficult to maintain, tend to do a lot of things and can make it hard following what's going on.",source:"@site/docs/metrics/lines-of-code.md",sourceDirName:"metrics",slug:"/metrics/lines-of-code",permalink:"/es/docs/metrics/lines-of-code",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/metrics/lines-of-code.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Halstead Volume",permalink:"/es/docs/metrics/halstead-volume"},next:{title:"Maintainability Index",permalink:"/es/docs/metrics/maintainability-index"}},c={},s=[{value:"Config example",id:"config-example",level:2},{value:"Example",id:"example",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lines-of-code"},"Lines of Code"),(0,r.kt)("p",null,"The lines of code are the total number of lines in a method (or ",(0,r.kt)("i",null,"function"),"). The comment lines, and the blank lines are also counted. A longer method is often difficult to maintain, tend to do a lot of things and can make it hard following what's going on."),(0,r.kt)("h2",{id:"config-example"},"Config example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  metrics:\n    ...\n    lines-of-code: 100\n    ...\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"  MetricComputationResult<int> computeImplementation(\n    Declaration node,\n    Iterable<ScopedClassDeclaration> classDeclarations,\n    Iterable<ScopedFunctionDeclaration> functionDeclarations,\n    InternalResolvedUnitResult source,\n  ) =>\n      MetricComputationResult(\n        value: 1 +\n            source.lineInfo.getLocation(node.endToken.offset).lineNumber -\n            source.lineInfo.getLocation(node.beginToken.offset).lineNumber,\n      );\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lines of Code")," for the example function is ",(0,r.kt)("strong",{parentName:"p"},"11"),"."))}m.isMDXComponent=!0}}]);