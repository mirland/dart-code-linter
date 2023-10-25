"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[144],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const a={},i="avoid-nested-conditional-expressions",s={unversionedId:"rules/dart/avoid-nested-conditional-expressions",id:"rules/dart/avoid-nested-conditional-expressions",title:"avoid-nested-conditional-expressions",description:"added in: 1.6.0 style",source:"@site/docs/rules/dart/avoid-nested-conditional-expressions.mdx",sourceDirName:"rules/dart",slug:"/rules/dart/avoid-nested-conditional-expressions",permalink:"/docs/rules/dart/avoid-nested-conditional-expressions",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/dart/avoid-nested-conditional-expressions.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"avoid-missing-enum-constant-in-map",permalink:"/docs/rules/dart/avoid-missing-enum-constant-in-map"},next:{title:"avoid-non-ascii-symbols",permalink:"/docs/rules/dart/avoid-non-ascii-symbols"}},l={},d=[{value:"Config example",id:"config-example",level:2},{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],c={toc:d},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"avoid-nested-conditional-expressions"},"avoid-nested-conditional-expressions"),(0,o.kt)("p",null,"added in: 1.6.0 ",(0,o.kt)("span",{style:{color:"green"}},"style")),(0,o.kt)("p",null,"Checks for nested conditional expressions."),(0,o.kt)("h2",{id:"config-example"},"Config example"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"acceptable-level")," (default is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),") to configure the acceptable nesting level."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - avoid-nested-conditional-expressions:\n        acceptable-level: 2\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"bad"},"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final str = '';\n\nfinal oneLevel = str.isEmpty ? 'hi' : '1';\n\nfinal twoLevels = str.isEmpty\n    ? str.isEmpty // LINT\n        ? 'hi'\n        : '1'\n    : '2';\n\nfinal threeLevels = str.isEmpty\n    ? str.isEmpty // LINT\n        ? str.isEmpty // LINT\n            ? 'hi'\n            : '1'\n        : '2'\n    : '3';\n")),(0,o.kt)("h3",{id:"good"},"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"final str = '';\n\nfinal oneLevel = str.isEmpty ? 'hi' : '1';\n\nfinal twoLevels = _getStr(str);\n\nString _getStr(String str) {\n    if (str.isEmpty) {\n        return 'hi';\n    }\n\n    ...\n}\n")))}u.isMDXComponent=!0}}]);