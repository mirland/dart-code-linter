"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[4317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l="prefer-async-await",i={unversionedId:"rules/dart/prefer-async-await",id:"rules/dart/prefer-async-await",title:"prefer-async-await",description:"added in: 1.6.0 style",source:"@site/docs/rules/dart/prefer-async-await.mdx",sourceDirName:"rules/dart",slug:"/rules/dart/prefer-async-await",permalink:"/es/docs/rules/dart/prefer-async-await",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/dart/prefer-async-await.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"no-object-declaration",permalink:"/es/docs/rules/dart/no-object-declaration"},next:{title:"prefer-commenting-analyzer-ignores",permalink:"/es/docs/rules/dart/prefer-commenting-analyzer-ignores"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prefer-async-await"},"prefer-async-await"),(0,a.kt)("p",null,"added in: 1.6.0 ",(0,a.kt)("span",{style:{color:"green"}},"style")),(0,a.kt)("p",null,"Recommends to use async/await syntax to handle Futures result instead of ",(0,a.kt)("inlineCode",{parentName:"p"},".then()")," invocation. Also can help prevent errors with mixed await and ",(0,a.kt)("inlineCode",{parentName:"p"},".then()")," usages, since awaiting the result of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," with ",(0,a.kt)("inlineCode",{parentName:"p"},".then()")," invocation awaits the completion of ",(0,a.kt)("inlineCode",{parentName:"p"},".then()"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"bad"},"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> main() async {\n  someFuture.then((result) => handleResult(result)); // LINT\n\n  await (foo.asyncMethod()).then((result) => handleResult(result)); // LINT\n}\n")),(0,a.kt)("h3",{id:"good"},"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"Future<void> main() async {\n  final result = await someFuture;\n  handleResult(result);\n\n  final anotherResult = await foo.asyncMethod();\n  handleResult(anotherResult);\n}\n")))}d.isMDXComponent=!0}}]);