"use strict";(self.webpackChunkdart_code_linter=self.webpackChunkdart_code_linter||[]).push([[4510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},o="Check Unused L10n",i={unversionedId:"cli/check-unused-l10n",id:"cli/check-unused-l10n",title:"Check Unused L10n",description:"Checks unused Dart class members, that encapsulates the app's localized values.",source:"@site/docs/cli/check-unused-l10n.md",sourceDirName:"cli",slug:"/cli/check-unused-l10n",permalink:"/docs/cli/check-unused-l10n",draft:!1,editUrl:"https://github.com/bancolombia/dart-code-linter/tree/gh-pages-source/docs/cli/check-unused-l10n.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Check Unused Files",permalink:"/docs/cli/check-unused-files"},next:{title:"Rules",permalink:"/docs/rules/"}},s={},c=[{value:"Output example",id:"output-example",level:2},{value:"Console",id:"console",level:3},{value:"JSON",id:"json",level:3},{value:"The root object fields are",id:"the-root-object-fields-are",level:4},{value:"The unusedLocalizations object fields are",id:"the-unusedlocalizations-object-fields-are",level:4},{value:"The issue object fields are",id:"the-issue-object-fields-are",level:4},{value:"GitLab",id:"gitlab",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"check-unused-l10n"},"Check Unused L10n"),(0,r.kt)("p",null,"Checks unused Dart class members, that encapsulates the app's localized values."),(0,r.kt)("p",null,"An example of such class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"class ClassWithLocalization {\n  String get title {\n    return Intl.message(\n      'Hello World',\n      name: 'title',\n      desc: 'Title for the Demo application',\n      locale: localeName,\n    );\n  }\n}\n")),(0,r.kt)("p",null,"Read more about this localization approach ",(0,r.kt)("a",{parentName:"p",href:"https://flutter.dev/docs/development/accessibility-and-localization/internationalization#defining-a-class-for-the-apps-localized-resources"},"in the Flutter docs"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"By default the command searches for classes that end with ",(0,r.kt)("inlineCode",{parentName:"p"},"I18n"),", but you can override this behavior with ",(0,r.kt)("inlineCode",{parentName:"p"},"--class-pattern")," argument.")),(0,r.kt)("p",null,"To execute the command, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ linter check-unused-l10n lib # or linter ul lib\n")),(0,r.kt)("p",null,"Full command description:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'Usage: dcm check-unused-l10n [arguments] <directories>\n-h, --help                                       Print this usage information.\n\n\n-p, --class-pattern=<I18n$>                      The pattern to detect classes providing localization\n                                                 (defaults to "I18n$")\n\n\n-r, --reporter=<console>                         The format of the output of the analysis.\n                                                 [console (default), codeclimate, json, gitlab]\n\n\n-c, --print-config                               Print resolved config.\n\n\n    --root-folder=<./>                           Root folder.\n                                                 (defaults to current directory)\n    --sdk-path=<directory-path>                  Dart SDK directory path.\n                                                 If the project has a `.fvm/flutter_sdk` symlink, it will be used if the SDK is not found.\n    --exclude=<{**/*.g.dart,**/*.freezed.dart}>  File paths in Glob syntax to be exclude.\n                                                 (defaults to "{**/*.g.dart,**/*.freezed.dart}")\n\n\n    --no-congratulate                            Don\'t show output even when there are no issues.\n\n\n    --[no-]verbose                               Show verbose logs.\n\n\n    --ci-key                                     The license key to run on CI server. Can be provided via DCM_CI_KEY env variable.\n    --email                                      The email used to purchase the license. Can be provided via DCM_EMAIL env variable.\n\n\n    --no-analytics                               Disable sending anonymous usage statistics.\n\n\n    --[no-]fatal-unused                          Treat find unused l10n as fatal.\n                                                 (defaults to on)\n')),(0,r.kt)("h2",{id:"output-example"},"Output example"),(0,r.kt)("h3",{id:"console"},"Console"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=console")," to enable this format."),(0,r.kt)("h3",{id:"json"},"JSON"),(0,r.kt)("p",null,"The reporter prints a single JSON object containing meta information and the unused file paths. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=json")," to enable this format."),(0,r.kt)("h4",{id:"the-root-object-fields-are"},"The root object fields are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formatVersion")," - an integer representing the format version (will be incremented each time the serialization format changes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," - a creation time of the report in YYYY-MM-DD HH:MM:SS format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unusedLocalizations")," - an array of ",(0,r.kt)("a",{parentName:"li",href:"#the-unusedlocalizations-object-fields-are"},"unused files"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'{\n  "formatVersion": 2,\n  "timestamp": "2021-04-11 14:44:42",\n  "unusedLocalizations": [\n    {\n      ...\n    },\n    {\n      ...\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"the-unusedlocalizations-object-fields-are"},"The unusedLocalizations object fields are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," - a relative path of the unused file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"className")," - a name of the class that has unused members"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"issues")," - an array of ",(0,r.kt)("a",{parentName:"li",href:"#the-issue-object-fields-are"},"issues")," detected in the target class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'{\n  "path": "lib/src/some/class.dart",\n  "className": "class",\n  "issues": [\n    ...\n  ],\n}\n')),(0,r.kt)("h4",{id:"the-issue-object-fields-are"},"The issue object fields are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memberName")," - unused class member name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offset")," - a zero-based offset of the class member location in the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"line")," - a zero-based line of the class member location in the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"column")," - a zero-based column of class member the location in the source")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},'{\n  "memberName": "someGetter",\n  "offset": 156,\n  "line": 7,\n  "column": 1\n}\n')),(0,r.kt)("h2",{id:"gitlab"},"GitLab"),(0,r.kt)("p",null,"Reports unused l10n issues in merge requests based on Code Quality custom tool. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--reporter=gitlab")," to enable this format."))}p.isMDXComponent=!0}}]);