"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[3275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},i="member-ordering",o={unversionedId:"rules/dart/member-ordering",id:"rules/dart/member-ordering",title:"member-ordering",description:"added in: 1.6.0 style",source:"@site/docs/rules/dart/member-ordering.mdx",sourceDirName:"rules/dart",slug:"/rules/dart/member-ordering",permalink:"/docs/rules/dart/member-ordering",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/dart/member-ordering.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"list-all-equatable-fields",permalink:"/docs/rules/dart/list-all-equatable-fields"},next:{title:"missing-test-assertion",permalink:"/docs/rules/dart/missing-test-assertion"}},s={},p=[{value:"Config",id:"config",level:2},{value:"Config example",id:"config-example",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"member-ordering"},"member-ordering"),(0,a.kt)("p",null,"added in: 1.6.0 ",(0,a.kt)("span",{style:{color:"green"}},"style")),(0,a.kt)("p",null,"Enforces member ordering."),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," to configure the order for regular classes."),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order")," to configure the order for widget classes."),(0,a.kt)("p",null,"The value for the ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order")," entries should match the following pattern:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"< (overridden | protected)- >< (private | public)- >< static- >< late- >< (var | final | const)- >< nullable- >< named- >< factory- > (fields | getters | getters-setters | setters | constructors | methods)")),(0,a.kt)("p",null,"where values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," are optional, values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," are interchangeable and the last part of the pattern which represents a class member type is ",(0,a.kt)("strong",{parentName:"p"},"REQUIRED"),"."),(0,a.kt)("p",null,"You can also apply order to a separate method, field or constructor by listing its name like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"build-method"),(0,a.kt)("li",{parentName:"ul"},"dispose-method"),(0,a.kt)("li",{parentName:"ul"},"init-state-method"),(0,a.kt)("li",{parentName:"ul"},"my-custom-cool-thing-method"),(0,a.kt)("li",{parentName:"ul"},"from-json-constructor"),(0,a.kt)("li",{parentName:"ul"},"custom-field")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Not all of the pattern parts are applicable for every case, for example, late-constructors are not expected, since they are not supported by the language itself.")),(0,a.kt)("p",null,"For example, the value for ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order")," may be an array consisting of the following strings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"public-late-final-fields"),(0,a.kt)("li",{parentName:"ul"},"private-late-final-fields"),(0,a.kt)("li",{parentName:"ul"},"public-nullable-fields"),(0,a.kt)("li",{parentName:"ul"},"private-nullable-fields"),(0,a.kt)("li",{parentName:"ul"},"named-constructors"),(0,a.kt)("li",{parentName:"ul"},"factory-constructors"),(0,a.kt)("li",{parentName:"ul"},"getters"),(0,a.kt)("li",{parentName:"ul"},"setters"),(0,a.kt)("li",{parentName:"ul"},"public-static-methods"),(0,a.kt)("li",{parentName:"ul"},"private-static-methods"),(0,a.kt)("li",{parentName:"ul"},"protected-methods"),(0,a.kt)("li",{parentName:"ul"},"etc.")),(0,a.kt)("p",null,"You can simply configure the rule to sort only by a type:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fields"),(0,a.kt)("li",{parentName:"ul"},"methods"),(0,a.kt)("li",{parentName:"ul"},"setters"),(0,a.kt)("li",{parentName:"ul"},"getters (or just ",(0,a.kt)("strong",{parentName:"li"},"getters-setters")," if you don't want to separate them)"),(0,a.kt)("li",{parentName:"ul"},"constructors")),(0,a.kt)("p",null,"The default config for ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"public-fields"),(0,a.kt)("li",{parentName:"ul"},"private-fields"),(0,a.kt)("li",{parentName:"ul"},"public-getters"),(0,a.kt)("li",{parentName:"ul"},"private-getters"),(0,a.kt)("li",{parentName:"ul"},"public-setters"),(0,a.kt)("li",{parentName:"ul"},"private-setters"),(0,a.kt)("li",{parentName:"ul"},"constructors"),(0,a.kt)("li",{parentName:"ul"},"public-methods"),(0,a.kt)("li",{parentName:"ul"},"private-methods")),(0,a.kt)("p",null,"The default config for ",(0,a.kt)("inlineCode",{parentName:"p"},"widgets-order")," is (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#order-other-class-members-in-a-way-that-makes-sense"},"from Flutter style guide"),"):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"constructor"),(0,a.kt)("li",{parentName:"ul"},"named-constructor"),(0,a.kt)("li",{parentName:"ul"},"const-fields"),(0,a.kt)("li",{parentName:"ul"},"static-methods"),(0,a.kt)("li",{parentName:"ul"},"final-fields"),(0,a.kt)("li",{parentName:"ul"},"init-state-method"),(0,a.kt)("li",{parentName:"ul"},"var-fields"),(0,a.kt)("li",{parentName:"ul"},"init-state-method"),(0,a.kt)("li",{parentName:"ul"},"private-methods"),(0,a.kt)("li",{parentName:"ul"},"overridden-public-methods"),(0,a.kt)("li",{parentName:"ul"},"build-method")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"alphabetize")," option will enforce that members within the same category should be alphabetically sorted by name."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"alphabetize-by-type")," option will enforce that members within the same category should be alphabetically sorted by theirs type name."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only one alphabetize option could be applied at the same time.")),(0,a.kt)("h2",{id:"config-example"},"Config example"),(0,a.kt)("p",null,"With the default config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - member-ordering\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OR")," with a custom one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - member-ordering:\n        alphabetize: true\n        order:\n          - public-fields\n          - private-fields\n          - constructors\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OR")," Flutter specific:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - member-ordering:\n        widgets-order:\n          - build-method\n          - init-state-method\n          - did-change-dependencies-method\n          - did-update-widget-method\n          - dispose-method\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OR")," both custom and Flutter specific:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - member-ordering:\n        order:\n          - public-fields\n          - private-fields\n          - constructors\n          - close-method\n          - dispose-method\n        widgets-order:\n          - constructor\n          - build-method\n          - init-state-method\n          - did-change-dependencies-method\n          - did-update-widget-method\n          - dispose-method\n")))}m.isMDXComponent=!0}}]);