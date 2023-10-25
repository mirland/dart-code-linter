"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},l="prefer-correct-identifier-length",o={unversionedId:"rules/dart/prefer-correct-identifier-length",id:"rules/dart/prefer-correct-identifier-length",title:"prefer-correct-identifier-length",description:"added in: 1.6.0 style",source:"@site/docs/rules/dart/prefer-correct-identifier-length.mdx",sourceDirName:"rules/dart",slug:"/rules/dart/prefer-correct-identifier-length",permalink:"/es/docs/rules/dart/prefer-correct-identifier-length",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/dart/prefer-correct-identifier-length.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prefer-conditional-expressions",permalink:"/es/docs/rules/dart/prefer-conditional-expressions"},next:{title:"prefer-correct-test-file-name",permalink:"/es/docs/rules/dart/prefer-correct-test-file-name"}},c={},s=[{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],d={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prefer-correct-identifier-length"},"prefer-correct-identifier-length"),(0,i.kt)("p",null,"added in: 1.6.0 ",(0,i.kt)("span",{style:{color:"green"}},"style")),(0,i.kt)("p",null,"The rule checks the length of variable names in classes, functions, extensions, mixins, and also checks the value of enum."),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"min-identifier-length")," (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),") to configure the minimum allowed identifier length."),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"max-identifier-length")," (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"300"),") to configure the maximum allowed identifier length."),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"exceptions")," (default is ",(0,i.kt)("inlineCode",{parentName:"p"},"none"),") to ignore specific identifier names."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - prefer-correct-identifier-length:\n        exceptions: [ 'a' ]\n        max-identifier-length: 30\n        min-identifier-length: 4\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"bad"},"Bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var x = 0; // length equals 1\nvar multiplatformConfigurationPoint = 0; // length equals 31\n\nfinal declarations = <({int f, String s})>{}; // LINT\n\nfinal value = switch (declarations) {\n  Set s => s.single, // LINT\n  _ => 0,\n};\n\nif (declarations case Set(length: final l)) {  // LINT\n  print(l);\n}\n")),(0,i.kt)("h3",{id:"good"},"Good:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"var property = 0; // length equals 8\nvar multiplatformConfiguration = 0; // length equals 26\n\nfinal declarations = <({int first, String second})>{};\n\nfinal value = switch (declarations) {\n  Set someSet => someSet.single,\n  _ => 0,\n};\n\nif (declarations case Set(: final length)) {\n  print(l);\n}\n")))}f.isMDXComponent=!0}}]);