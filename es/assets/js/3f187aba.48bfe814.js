"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[7555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Technical Debt",i={unversionedId:"metrics/technical-debt",id:"metrics/technical-debt",title:"Technical Debt",description:"The cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer. The metric count debt based on pattern:",source:"@site/docs/metrics/technical-debt.md",sourceDirName:"metrics",slug:"/metrics/technical-debt",permalink:"/es/docs/metrics/technical-debt",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/metrics/technical-debt.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Source lines of Code",permalink:"/es/docs/metrics/source-lines-of-code"},next:{title:"Weight Of Class",permalink:"/es/docs/metrics/weight-of-class"}},c={},s=[{value:"Config example",id:"config-example",level:2},{value:"Example",id:"example",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technical-debt"},"Technical Debt"),(0,a.kt)("p",null,"The cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer. The metric count debt based on pattern:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"todo comment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void fooBar() {\n  // TODO: need migrate on logger\n  debugPrint('log');\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"suppressing rules comment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// ignore_for_file: unused_local_variable\n\nvoid fooBar() {\n  // ignore: invalid_assignment\n  int x = '';\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cast to ",(0,a.kt)("inlineCode",{parentName:"li"},"dynamic"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"void fooBar() {\n  final a = Foo() as dynamic;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Deprecated")," annotation comment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"@Deprecated('Use Bar class')\nclass Foo {}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Non migrated files on nullsafety")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// @dart=2.9\n\nvoid fooBar() {\n  debugPrint('log');\n}\n")),(0,a.kt)("p",null,"You can configure cost of every supported case, and specify unit type of the debt."),(0,a.kt)("h2",{id:"config-example"},"Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'dart_code_linter:\n  ...\n  metrics:\n    ...\n    technical-debt:\n      threshold: 1\n      todo-cost: 161\n      ignore-cost: 320\n      ignore-for-file-cost: 396\n      as-dynamic-cost: 322\n      deprecated-annotations-cost: 37\n      file-nullsafety-migration-cost: 41\n      unit-type: "USD"\n    ...\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// @dart=2.9\n\n// ignore_for_file: always_declare_return_types\n\n@Deprecated('Use Bar class')\nclass Foo {}\n\n// TODO(developer): flutter style todo comment\nvoid fooBar() {\n  // ignore: always_put_control_body_on_new_line\n  final a = Foo() as dynamic;\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Technical Debt")," for the example function is ",(0,a.kt)("strong",{parentName:"p"},"955 USD"),"."))}u.isMDXComponent=!0}}]);