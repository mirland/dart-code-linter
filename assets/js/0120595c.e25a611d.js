"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},o="avoid-returning-widgets",d={unversionedId:"rules/flutter/avoid-returning-widgets",id:"rules/flutter/avoid-returning-widgets",title:"avoid-returning-widgets",description:"added in: 1.6.0 warning",source:"@site/docs/rules/flutter/avoid-returning-widgets.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/avoid-returning-widgets",permalink:"/docs/rules/flutter/avoid-returning-widgets",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/rules/flutter/avoid-returning-widgets.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"avoid-expanded-as-spacer",permalink:"/docs/rules/flutter/avoid-expanded-as-spacer"},next:{title:"avoid-shrink-wrap-in-lists",permalink:"/docs/rules/flutter/avoid-shrink-wrap-in-lists"}},l={},s=[],u={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"avoid-returning-widgets"},"avoid-returning-widgets"),(0,i.kt)("p",null,"added in: 1.6.0 ",(0,i.kt)("span",{style:{color:"orange"}},"warning")),(0,i.kt)("p",null,"Warns when a method, function or getter returns a Widget or subclass of a Widget."),(0,i.kt)("p",null,"Extracting widgets to a method is considered as a Flutter anti-pattern, because when Flutter rebuilds widget tree, it calls the function all the time, making more processor time for the operations."),(0,i.kt)("p",null,"Consider creating a separate widget instead of a function or method."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The following patterns will not trigger the rule:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Widget build method overrides."),(0,i.kt)("li",{parentName:"ul"},"Class method that is passed to a builder."),(0,i.kt)("li",{parentName:"ul"},"Functions with functional_widget package annotations.:::")),(0,i.kt)("p",{parentName:"admonition"},"Additional resources:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"[https://github.com/flutter/flutter/issues/19269]"),(0,i.kt)("li",{parentName:"ul"},"[https://flutter.dev/docs/perf/rendering/best-practices#controlling-build-cost]"),(0,i.kt)("li",{parentName:"ul"},"[https://www.reddit.com/r/FlutterDev/comments/avhvco/extracting_widgets_to_a_function_is_not_an/]"),(0,i.kt)("li",{parentName:"ul"},"[https://medium.com/flutter-community/splitting-widgets-to-methods-is-a-performance-antipattern-16aa3fb4026c]")),(0,i.kt)("h2",{parentName:"admonition",id:"config"},"Config"),(0,i.kt)("p",{parentName:"admonition"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"ignored-names")," (default is none) to ignore a function or method name."),(0,i.kt)("p",{parentName:"admonition"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"ignored-annotations")," (default is ","[",(0,i.kt)("inlineCode",{parentName:"p"},"FunctionalWidget"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"swidget"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hwidget"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hcwidget"),"]",") to override default ignored annotation list."),(0,i.kt)("p",{parentName:"admonition"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"allow-nullable")," to allow functions or methods with the nullable return type."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_linter:\n  ...\n  rules:\n    ...\n    - avoid-returning-widgets:\n        ignored-names:\n          - testFunction\n        ignored-annotations:\n          - allowedAnnotation\n")),(0,i.kt)("p",{parentName:"admonition"},"will ignore all functions named ",(0,i.kt)("inlineCode",{parentName:"p"},"testFunction")," and all functions having ",(0,i.kt)("inlineCode",{parentName:"p"},"allowedAnnotation")," annotation."),(0,i.kt)("h2",{parentName:"admonition",id:"example"},"Example"),(0,i.kt)("h3",{parentName:"admonition",id:"bad"},"Bad:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class MyWidget extends StatelessWidget {\n  const MyWidget();\n\n  // LINT\n  Widget _getWidget() => Container();\n\n  Widget _buildShinyWidget() {\n    return Container(\n      child: Column(\n        children: [\n          Text('Hello'),\n          ...\n        ],\n      ),\n    );\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Row(\n      children: [\n        Text('Text!'),\n        ...\n        _buildShinyWidget(), // LINT\n      ],\n    );\n  }\n}\n")),(0,i.kt)("h3",{parentName:"admonition",id:"good"},"Good:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class MyWidget extends StatelessWidget {\n  const MyWidget();\n\n  @override\n  Widget build(BuildContext context) {\n    return Row(\n      children: [\n        Text('Text!'),\n        ...\n        const _MyShinyWidget(),\n      ],\n    );\n  }\n}\n\nclass _MyShinyWidget extends StatelessWidget {\n  const _MyShinyWidget();\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      child: Column(\n        children: [\n          Text('Hello'),\n          ...\n        ],\n      ),\n    );\n  }\n}\n")),(0,i.kt)("h3",{parentName:"admonition",id:"good-1"},"Good:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class MyWidget extends StatelessWidget {\n  Widget _buildMyWidget(BuildContext context) {\n    return Container();\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return Builder(\n      builder: _buildMyWidget,\n    );\n  }\n}\n"))))}c.isMDXComponent=!0}}]);