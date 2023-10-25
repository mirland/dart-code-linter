"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[4159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,b=p["".concat(i,".").concat(m)]||p[m]||s[m]||l;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:n,o[1]=d;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const l={},o="double-literal-format",d={unversionedId:"rules/dart/double-literal-format",id:"rules/dart/double-literal-format",title:"double-literal-format",description:"added in: 1.5.0 style",source:"@site/docs/rules/dart/double-literal-format.mdx",sourceDirName:"rules/dart",slug:"/rules/dart/double-literal-format",permalink:"/docs/rules/dart/double-literal-format",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/dart/double-literal-format.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"binary-expression-operand-order",permalink:"/docs/rules/dart/binary-expression-operand-order"},next:{title:"format-comment",permalink:"/docs/rules/dart/format-comment"}},i={},u=[{value:"Redundant leading &#39;0&#39;",id:"redundant-leading-0",level:2},{value:"Bad:",id:"bad",level:3},{value:"Good:",id:"good",level:3},{value:"Literal begin with &#39;.&#39;",id:"literal-begin-with-",level:2},{value:"Bad:",id:"bad-1",level:3},{value:"Good:",id:"good-1",level:3},{value:"Redundant trailing &#39;0&#39;",id:"redundant-trailing-0",level:2},{value:"Bad:",id:"bad-2",level:3},{value:"Good:",id:"good-2",level:3}],c={toc:u},p="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"double-literal-format"},"double-literal-format"),(0,n.kt)("p",null,"added in: 1.5.0 ",(0,n.kt)("span",{style:{color:"green"}},"style")),(0,n.kt)("p",null,"Checks that double literals should begin with ",(0,n.kt)("inlineCode",{parentName:"p"},"0.")," instead of just ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", and should not end with a trailing ",(0,n.kt)("inlineCode",{parentName:"p"},"0.")," Helps keep a consistent style of numeric literals and decrease potential typos."),(0,n.kt)("h2",{id:"redundant-leading-0"},"Redundant leading '0'"),(0,n.kt)("h3",{id:"bad"},"Bad:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 05.23, b = 03.6e+15, c = -012.2, d = -001.1e-15;\n")),(0,n.kt)("h3",{id:"good"},"Good:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 5.23, b = 3.6e+15, c = -12.2, d = -1.1e-15;\n")),(0,n.kt)("h2",{id:"literal-begin-with-"},"Literal begin with '.'"),(0,n.kt)("h3",{id:"bad-1"},"Bad:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = .257, b = .16e+5, c = -.259, d = -.14e-5;\n")),(0,n.kt)("h3",{id:"good-1"},"Good:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.257, b = 0.16e+5, c = -0.259, d = -0.14e-5;\n")),(0,n.kt)("h2",{id:"redundant-trailing-0"},"Redundant trailing '0'"),(0,n.kt)("h3",{id:"bad-2"},"Bad:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.210, b = 0.100e+5, c = -0.250, d = -0.400e-5;\n")),(0,n.kt)("h3",{id:"good-2"},"Good:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.21, b = 0.1e+5, c = -0.25, d = -0.4e-5;\n")))}s.isMDXComponent=!0}}]);