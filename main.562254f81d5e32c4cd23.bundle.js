(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1245:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(1246),__webpack_require__(25),__webpack_require__(10),__webpack_require__(23),__webpack_require__(80);var _storybook_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(144),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(447);__webpack_require__(1271);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_6__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.addParameters)({options:{showRoots:!0,storySort:function storySort(a,b){var config=[{category:"Overview",order:["Introduction"]},{category:"Components"}],story1=a[1].kind.split("/"),story2=b[1].kind.split("/");function getOrderNumber(needle,haystack){var order=9999;return Array.isArray(haystack)&&-1===(order=haystack.findIndex((function(h){return h.toLowerCase()===needle.toLowerCase()})))&&(order=9999),order}var topLevelOrderArray=config.map((function(h){return h.category})),topLevelOrder1=getOrderNumber(story1[0],topLevelOrderArray),topLevelOrder2=getOrderNumber(story2[0],topLevelOrderArray);return story1[0]!==story2[0]?topLevelOrder1-topLevelOrder2:story1[1]!==story2[1]?getOrderNumber(story1[1],config[topLevelOrder1]&&config[topLevelOrder1].order)-getOrderNumber(story2[1],config[topLevelOrder2]&&config[topLevelOrder2].order):0}}})},1286:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(144);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1288)],module)}.call(this,__webpack_require__(1287)(module))},1288:function(module,exports,__webpack_require__){var map={"./Nav/Toggle/NavToggle.stories.mdx":1297,"./docs/index.stories.mdx":1299};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1288},1290:function(module,exports,__webpack_require__){(exports=__webpack_require__(1291)(!0)).push([module.i,'._2RF4srTGsVHQBk4fMmyU27{background:0;border:0;cursor:pointer;display:block;font-size:16px;height:2em;padding:0;position:relative;width:2em}._15LvTXtQYfXVhjrowv69-{background-color:#0074d9;border-radius:0.25em;height:0.25em;left:0;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:all 0.3s ease-in-out;-o-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;width:2em}._8JjMjktLA3sV0giC4Ouys{margin-top:-0.5em}._2e7TKENkKN5aA1VsiR8FRi{margin-top:0.5em}._2RF4srTGsVHQBk4fMmyU27[aria-expanded="true"] ._8JjMjktLA3sV0giC4Ouys{margin-top:-0.125em;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}._2RF4srTGsVHQBk4fMmyU27[aria-expanded="true"] ._3U9l_aLiZ3M41Z5AhoVgLs{opacity:0}._2RF4srTGsVHQBk4fMmyU27[aria-expanded="true"] ._2e7TKENkKN5aA1VsiR8FRi{margin-top:-0.125em;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}\n',"",{version:3,sources:["/home/circleci/project/src/Nav/Toggle/NavToggle.scss"],names:[],mappings:"AAAA,yBACC,YAAa,CACb,QAAS,CACT,cAAe,CACf,aAAc,CACd,cAAe,CACf,UAAW,CACX,SAAU,CACV,iBAAkB,CAClB,SAAU,CAEV,wBACC,wBAAyB,CACzB,oBAAqB,CACrB,aAAc,CACd,MAAO,CACP,iBAAkB,CAClB,OAAQ,CACR,kCAA2B,CAA3B,8BAA2B,CAA3B,0BAA2B,CAC3B,uCAAgC,CAAhC,kCAAgC,CAAhC,+BAAgC,CAChC,SAAU,CAEV,wBACC,iBAAkB,CAClB,yBAGA,gBAAiB,CA3BpB,uEAiCG,mBAAoB,CACpB,+BAAW,CAAX,2BAAW,CAAX,uBAAwB,CAlC3B,wEAsCG,SAAU,CAtCb,wEA0CG,mBAAoB,CACpB,gCAAW,CAAX,4BAAW,CAAX,wBAAyB",file:"NavToggle.scss",sourcesContent:['.toggle {\n\tbackground: 0;\n\tborder: 0;\n\tcursor: pointer;\n\tdisplay: block;\n\tfont-size: 16px;\n\theight: 2em;\n\tpadding: 0;\n\tposition: relative;\n\twidth: 2em;\n\n\t&Icon {\n\t\tbackground-color: #0074d9;\n\t\tborder-radius: 0.25em;\n\t\theight: 0.25em;\n\t\tleft: 0;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\ttransition: all 0.3s ease-in-out;\n\t\twidth: 2em;\n\n\t\t&Top {\n\t\t\tmargin-top: -0.5em;\n\t\t}\n\n\t\t&Bottom {\n\t\t\tmargin-top: 0.5em;\n\t\t}\n\t}\n\n\t&[aria-expanded="true"] {\n\t\t.toggleIconTop {\n\t\t\tmargin-top: -0.125em;\n\t\t\ttransform: rotate(45deg);\n\t\t}\n\n\t\t.toggleIconMiddle {\n\t\t\topacity: 0;\n\t\t}\n\n\t\t.toggleIconBottom {\n\t\t\tmargin-top: -0.125em;\n\t\t\ttransform: rotate(-45deg);\n\t\t}\n\t}\n}\n']}]),exports.locals={toggle:"_2RF4srTGsVHQBk4fMmyU27",toggleIcon:"_15LvTXtQYfXVhjrowv69-",toggleIconTop:"_8JjMjktLA3sV0giC4Ouys",toggleIconBottom:"_2e7TKENkKN5aA1VsiR8FRi",toggleIconMiddle:"_3U9l_aLiZ3M41Z5AhoVgLs"},module.exports=exports},1297:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"defaultStyling",(function(){return NavToggle_stories_defaultStyling})),__webpack_require__.d(__webpack_exports__,"onToggleBeforeAfter",(function(){return onToggleBeforeAfter})),__webpack_require__.d(__webpack_exports__,"defaultStylingCustomClassNames",(function(){return defaultStylingCustomClassNames})),__webpack_require__.d(__webpack_exports__,"customToggleIconWithDomElements",(function(){return customToggleIconWithDomElements}));__webpack_require__(2),__webpack_require__(44),__webpack_require__(35),__webpack_require__(11),__webpack_require__(19),__webpack_require__(4),__webpack_require__(60),__webpack_require__(46),__webpack_require__(432),__webpack_require__(433),__webpack_require__(6),__webpack_require__(41);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(1),blocks=__webpack_require__(38),dist=__webpack_require__(55),prop_types=(__webpack_require__(13),__webpack_require__(22),__webpack_require__(58),__webpack_require__(25),__webpack_require__(14),__webpack_require__(45),__webpack_require__(36),__webpack_require__(12),__webpack_require__(37),__webpack_require__(15),__webpack_require__(18),__webpack_require__(24)),prop_types_default=__webpack_require__.n(prop_types),createClassName=(__webpack_require__(1292),__webpack_require__(78),__webpack_require__(10),__webpack_require__(1294),__webpack_require__(23),__webpack_require__(343),__webpack_require__(80),function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return Array.from(new Set(args.filter((function(x){return x&&"string"==typeof x})).map((function(x){return x.split(" ")})).flat())).join(" ")}),cloneChildrenWithProps=function(children,props){return react_default.a.Children.map(children,(function(child){return"function"==typeof child.type?react_default.a.cloneElement(child,props):child}))},NavToggle=__webpack_require__(448),NavToggle_default=__webpack_require__.n(NavToggle);function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var NavToggle_NavToggle=function(_ref){var children=_ref.children,_ref$aria=_ref.aria,ariaControls=_ref$aria.controls,ariaLabel=_ref$aria.label,defaultStyling=_ref.defaultStyling,className=_ref.className,onToggleBefore=_ref.onToggleBefore,onToggleAfter=_ref.onToggleAfter,isInitialized=Object(react.useRef)(!1),_useState2=_slicedToArray(Object(react.useState)(!1),2),isOpened=_useState2[0],setIsOpened=_useState2[1],ariaLabels={"aria-expanded":isOpened,"aria-controls":ariaControls,"aria-label":ariaLabel},handleClick=function(event){event.preventDefault(),onToggleBefore&&onToggleBefore(!isOpened),setIsOpened(!isOpened)};Object(react.useEffect)((function(){isInitialized.current&&onToggleAfter&&onToggleAfter(isOpened),isInitialized.current=!0}),[isOpened]);var styles={};return defaultStyling&&(styles=NavToggle_default.a),children?react.createElement("button",_extends({className:createClassName("nav__toggle",styles.toggle,className.toggle)},ariaLabels,{type:"button",onClick:handleClick}),cloneChildrenWithProps(children,{isOpened:isOpened})):react.createElement(DefaultToggle,_extends({styles:styles,className:className},ariaLabels,{onClick:handleClick}))};NavToggle_NavToggle.displayName="NavToggle",NavToggle_NavToggle.propTypes={children:prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.node),prop_types_default.a.node]),aria:prop_types_default.a.shape({controls:prop_types_default.a.string,label:prop_types_default.a.string}),defaultStyling:prop_types_default.a.bool,className:prop_types_default.a.shape({toggle:prop_types_default.a.string,toggleIcon:prop_types_default.a.string,toggleIconTop:prop_types_default.a.string,toggleIconMiddle:prop_types_default.a.string,toggleIconBottom:prop_types_default.a.string}),onToggleBefore:prop_types_default.a.func,onToggleAfter:prop_types_default.a.func},NavToggle_NavToggle.defaultProps={children:null,aria:{controls:"navMenu",label:"Toggle navigation"},defaultStyling:!1,className:{toggle:"nav__toggle",toggleIcon:"nav__toggle-icon",toggleIconTop:"nav__toggle-icon--top",toggleIconMiddle:"nav__toggle-icon--middle",toggleIconBottom:"nav__toggle-icon--bottom"},onToggleBefore:null,onToggleAfter:null};var DefaultToggle=function(_ref2){var styles=_ref2.styles,className=_ref2.className,onClick=_ref2.onClick,ariaLabels=_objectWithoutProperties(_ref2,["styles","className","onClick"]);return react.createElement("button",_extends({className:createClassName("nav__toggle",styles.toggle,className.toggle)},ariaLabels,{type:"button",onClick:onClick}),react.createElement("span",{className:createClassName("nav__toggle-icon nav__toggle-icon--top",styles.toggleIcon,styles.toggleIconTop,className.toggleIcon,className.toggleIconTop)}),react.createElement("span",{className:createClassName("nav__toggle-icon nav__toggle-icon--middle",styles.toggleIcon,styles.toggleIconMiddle,className.toggleIcon,className.toggleIconMiddle)}),react.createElement("span",{className:createClassName("nav__toggle-icon nav__toggle-icon--bottom",styles.toggleIcon,styles.toggleIconBottom,className.toggleIcon,className.toggleIconBottom)}))};DefaultToggle.displayName="DefaultToggle",NavToggle_NavToggle.__docgenInfo={description:"",methods:[],displayName:"NavToggle",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1,description:"If none, it will default to the default toggle button with 3 toggle icons"},aria:{defaultValue:{value:'{\n\tcontrols: "navMenu",\n\tlabel: "Toggle navigation"\n}',computed:!1},type:{name:"shape",value:{controls:{name:"string",required:!1},label:{name:"string",required:!1}}},required:!1,description:"aria.controls = id of menu element\n\naria.label = screen reader label"},defaultStyling:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"If using the default toggle button, if set to true, it will include the default styling"},className:{defaultValue:{value:'{\n\ttoggle: "nav__toggle",\n\ttoggleIcon: "nav__toggle-icon",\n\ttoggleIconTop: "nav__toggle-icon--top",\n\ttoggleIconMiddle: "nav__toggle-icon--middle",\n\ttoggleIconBottom: "nav__toggle-icon--bottom"\n}',computed:!1},type:{name:"shape",value:{toggle:{name:"string",required:!1},toggleIcon:{name:"string",required:!1},toggleIconTop:{name:"string",required:!1},toggleIconMiddle:{name:"string",required:!1},toggleIconBottom:{name:"string",required:!1}}},required:!1,description:"className.toggle = main wrapper for button\n\n**If using default toggle button**\n\ntoggleIcon = common class for the three spans inside of button\n\ntoggleIconTop / toggleIconMiddle / toggleIconBottom = styling for each of the three spans"},onToggleBefore:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"Callback function which returns the new state of menu (true = opened / false = closed)"},onToggleAfter:{defaultValue:{value:"null",computed:!1},type:{name:"func"},required:!1,description:"Callback function which returns the new state of menu (true = opened / false = closed)"}}};var Toggle_NavToggle=NavToggle_NavToggle;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Nav/Toggle/NavToggle.jsx"]={name:"NavToggle",docgenInfo:NavToggle_NavToggle.__docgenInfo,path:"src/Nav/Toggle/NavToggle.jsx"});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function NavToggle_stories_extends(){return(NavToggle_stories_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function NavToggle_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function NavToggle_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},NavToggle_stories_ref2=Object(esm.mdx)(blocks.Meta,{title:"Components/Nav/Toggle",component:Toggle_NavToggle,mdxType:"Meta"}),_ref3=Object(esm.mdx)("p",null,"1 / 2 of a basic navigation, this component can be used with your own menu.\nNavToggle provides a ",Object(esm.mdx)("inlineCode",{parentName:"p"},"isOpened")," prop, callbacks and aria attributes that you can use to manage the state of your menu."),_ref4=Object(esm.mdx)("blockquote",null,Object(esm.mdx)("p",{parentName:"blockquote"},"The default props for the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"aria")," may require configuration. "),Object(esm.mdx)("p",{parentName:"blockquote"},"If the connected menu's id is not ",Object(esm.mdx)("inlineCode",{parentName:"p"},"navMenu"),", please set ",Object(esm.mdx)("inlineCode",{parentName:"p"},"aria.controls"),". "),Object(esm.mdx)("p",{parentName:"blockquote"},"If the locale is not ",Object(esm.mdx)("inlineCode",{parentName:"p"},"en-US"),", please also update ",Object(esm.mdx)("inlineCode",{parentName:"p"},"aria.label"),".")),_ref5=Object(esm.mdx)("hr",null),_ref6=Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Default Styling",mdxType:"Story"},Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0,mdxType:"NavToggle"}))),_ref7=Object(esm.mdx)("p",null,Object(esm.mdx)("em",{parentName:"p"},"Not much to see here since there is no styling 😄 (inspect the element)")),_ref8=Object(esm.mdx)(blocks.Preview,{mdxSource:"%0A%3CNavToggle%20/%3E%0A",mdxType:"Preview"},Object(esm.mdx)(Toggle_NavToggle,{mdxType:"NavToggle"})),_ref9=Object(esm.mdx)("p",null,"OnToggleBefore / OnToggleAfter allows you to hook into the onClick event before and after the state is set."),_ref10=Object(esm.mdx)("p",null,"Use your own component/ DOM elements which will be wrapped in a button."),_ref11=Object(esm.mdx)("p",null,"Your component will be passed an ",Object(esm.mdx)("inlineCode",{parentName:"p"},"isOpened")," prop or you can either use the callback hook to listen for state changes.\nFor simplicity, you can also use the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute on the toggle button to manipulate the css."),_ref12=Object(esm.mdx)("blockquote",null,Object(esm.mdx)("p",{parentName:"blockquote"},"Keep in mind that if you pass HTML DOM elements as the children, you will not have access to the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"isOpened")," prop and will have to use the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute to style the interaction")),_ref13=Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0,mdxType:"NavToggle"},Object(esm.mdx)("span",{className:"nav-toggle__icon--custom"},"－"),Object(esm.mdx)("span",{className:"nav-toggle__icon--custom"},"－"),Object(esm.mdx)("span",{className:"nav-toggle__icon--custom"},"－")),_ref14=Object(esm.mdx)(blocks.Props,{of:Toggle_NavToggle,mdxType:"Props"}),_ref15=Object(esm.mdx)(dist.Source,{language:"css",code:'.toggle {\n\tbackground: 0;\n\tborder: 0;\n\tcursor: pointer;\n\tdisplay: block;\n\tfont-size: 16px;\n\theight: 2em;\n\tpadding: 0;\n\tposition: relative;\n\twidth: 2em;\n\n\t&Icon {\n\t\tbackground-color: #0074d9;\n\t\tborder-radius: 0.25em;\n\t\theight: 0.25em;\n\t\tleft: 0;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\ttransition: all 0.3s ease-in-out;\n\t\twidth: 2em;\n\n\t\t&Top {\n\t\t\tmargin-top: -0.5em;\n\t\t}\n\n\t\t&Bottom {\n\t\t\tmargin-top: 0.5em;\n\t\t}\n\t}\n\n\t&[aria-expanded="true"] {\n\t\t.toggleIconTop {\n\t\t\tmargin-top: -0.125em;\n\t\t\ttransform: rotate(45deg);\n\t\t}\n\n\t\t.toggleIconMiddle {\n\t\t\topacity: 0;\n\t\t}\n\n\t\t.toggleIconBottom {\n\t\t\tmargin-top: -0.125em;\n\t\t\ttransform: rotate(-45deg);\n\t\t}\n\t}\n}\n',format:!1,dark:!0,mdxType:"Source"});function MDXContent(_ref){var components=_ref.components,props=NavToggle_stories_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",NavToggle_stories_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),NavToggle_stories_ref2,Object(esm.mdx)("h1",{id:"navtoggle"},"NavToggle"),_ref3,_ref4,_ref5,Object(esm.mdx)("h2",{id:"default-styling-example-scss-used"},"Default styling ",Object(esm.mdx)("a",NavToggle_stories_extends({parentName:"h2"},{href:"#base-scss-styling"}),"(Example SCSS used)")),_ref6,Object(esm.mdx)("h2",{id:"without-default-styling"},"Without Default styling"),_ref7,_ref8,Object(esm.mdx)("h2",{id:"using-callbacks"},"Using Callbacks"),_ref9,Object(esm.mdx)("pre",null,Object(esm.mdx)("code",NavToggle_stories_extends({parentName:"pre"},{className:"language-jsx"}),"<NavToggle\n  onToggleBefore={newState => console.log(`Before: ${newState}`)}\n  onToggleAfter={newState=>console.log(`After: ${newState}`)}\n/>\n")),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"On Toggle - Before / After",mdxType:"Story"},Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0,onToggleBefore:function onToggleBefore(newState){return console.log("Before: ".concat(newState))},onToggleAfter:function onToggleAfter(newState){return console.log("After: ".concat(newState))},mdxType:"NavToggle"}))),Object(esm.mdx)("h2",{id:"customization"},"Customization"),Object(esm.mdx)("h3",{id:"default-styling-with-custom-class-names"},"Default styling with custom class names"),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Default Styling - custom class names",mdxType:"Story"},Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)("style",{dangerouslySetInnerHTML:{__html:"\n        .custom-nav-toggle__icon {\n            background-color: red;\n        }\n      "}}),Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0,className:{toggle:"custom-nav-toggle",toggleIcon:"custom-nav-toggle__icon",toggleIconTop:"custom-nav-toggle__icon--left",toggleIconMiddle:"custom-nav-toggle__icon--middle",toggleIconBottom:"custom-nav-toggle__icon--right"},mdxType:"NavToggle"})))),Object(esm.mdx)("h3",{id:"custom-children"},'Custom "children"'),_ref10,_ref11,_ref12,Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Custom toggle icon with DOM elements",mdxType:"Story"},Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)("style",{dangerouslySetInnerHTML:{__html:"\n        .nav-toggle__icon--custom {\n          display: block;\n          font-size: 1.5rem;\n          line-height: 5px;\n        }\n        .nav__toggle[aria-expanded=true] .nav-toggle__icon--custom {\n          color: red;\n        }\n      "}}),_ref13))),Object(esm.mdx)("h2",{id:"props"},"Props"),_ref14,Object(esm.mdx)("h2",{id:"base-scss-styling"},"Base SCSS Styling"),_ref15)}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var _ref16=Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0}),NavToggle_stories_defaultStyling=function(){return _ref16};NavToggle_stories_defaultStyling.displayName="defaultStyling",NavToggle_stories_defaultStyling.story={},NavToggle_stories_defaultStyling.story.name="Default Styling",NavToggle_stories_defaultStyling.story.parameters={mdxSource:"<NavToggle defaultStyling={true} />"};var onToggleBeforeAfter=function(){return Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0,onToggleBefore:function onToggleBefore(newState){return console.log("Before: ".concat(newState))},onToggleAfter:function onToggleAfter(newState){return console.log("After: ".concat(newState))}})};onToggleBeforeAfter.displayName="onToggleBeforeAfter",onToggleBeforeAfter.story={},onToggleBeforeAfter.story.name="On Toggle - Before / After",onToggleBeforeAfter.story.parameters={mdxSource:"<NavToggle defaultStyling={true} onToggleBefore={newState => console.log(`Before: ${newState}`)} onToggleAfter={newState => console.log(`After: ${newState}`)}>\n    </NavToggle>"};var defaultStylingCustomClassNames=function(){return Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)("style",{dangerouslySetInnerHTML:{__html:"\n        .custom-nav-toggle__icon {\n            background-color: red;\n        }\n      "}}),Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0,className:{toggle:"custom-nav-toggle",toggleIcon:"custom-nav-toggle__icon",toggleIconTop:"custom-nav-toggle__icon--left",toggleIconMiddle:"custom-nav-toggle__icon--middle",toggleIconBottom:"custom-nav-toggle__icon--right"}}))};defaultStylingCustomClassNames.story={},defaultStylingCustomClassNames.story.name="Default Styling - custom class names",defaultStylingCustomClassNames.story.parameters={mdxSource:'<>\n      <style dangerouslySetInnerHTML={{\n    __html: `\n        .custom-nav-toggle__icon {\n            background-color: red;\n        }\n      `\n  }} />\n      <NavToggle defaultStyling={true} className={{\n    toggle: "custom-nav-toggle",\n    toggleIcon: "custom-nav-toggle__icon",\n    toggleIconTop: "custom-nav-toggle__icon--left",\n    toggleIconMiddle: "custom-nav-toggle__icon--middle",\n    toggleIconBottom: "custom-nav-toggle__icon--right"\n  }} />\n    </>'};var _ref17=Object(esm.mdx)(Toggle_NavToggle,{defaultStyling:!0},Object(esm.mdx)("span",{className:"nav-toggle__icon--custom"},"－"),Object(esm.mdx)("span",{className:"nav-toggle__icon--custom"},"－"),Object(esm.mdx)("span",{className:"nav-toggle__icon--custom"},"－")),customToggleIconWithDomElements=function(){return Object(esm.mdx)(react_default.a.Fragment,null,Object(esm.mdx)("style",{dangerouslySetInnerHTML:{__html:"\n        .nav-toggle__icon--custom {\n          display: block;\n          font-size: 1.5rem;\n          line-height: 5px;\n        }\n        .nav__toggle[aria-expanded=true] .nav-toggle__icon--custom {\n          color: red;\n        }\n      "}}),_ref17)};customToggleIconWithDomElements.story={},customToggleIconWithDomElements.story.name="Custom toggle icon with DOM elements",customToggleIconWithDomElements.story.parameters={mdxSource:'<>\n      <style dangerouslySetInnerHTML={{\n    __html: `\n        .nav-toggle__icon--custom {\n          display: block;\n          font-size: 1.5rem;\n          line-height: 5px;\n        }\n        .nav__toggle[aria-expanded=true] .nav-toggle__icon--custom {\n          color: red;\n        }\n      `\n  }} />\n      <NavToggle defaultStyling={true}>\n        <span className="nav-toggle__icon--custom">－</span>\n        <span className="nav-toggle__icon--custom">－</span>\n        <span className="nav-toggle__icon--custom">－</span>\n      </NavToggle>\n    </>'};var componentMeta={title:"Components/Nav/Toggle",includeStories:["defaultStyling","onToggleBeforeAfter","defaultStylingCustomClassNames","customToggleIconWithDomElements"]};componentMeta.parameters=componentMeta.parameters||{};var _ref18=Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:{"Default Styling":"defaultStyling","On Toggle - Before / After":"onToggleBeforeAfter","Default Styling - custom class names":"defaultStylingCustomClassNames","Custom toggle icon with DOM elements":"customToggleIconWithDomElements"},mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null));componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return _ref18}});__webpack_exports__.default=componentMeta;NavToggle_stories_defaultStyling.__docgenInfo={description:"",methods:[],displayName:"defaultStyling"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Nav/Toggle/NavToggle.stories.mdx"]={name:"defaultStyling",docgenInfo:NavToggle_stories_defaultStyling.__docgenInfo,path:"src/Nav/Toggle/NavToggle.stories.mdx"}),onToggleBeforeAfter.__docgenInfo={description:"",methods:[],displayName:"onToggleBeforeAfter"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Nav/Toggle/NavToggle.stories.mdx"]={name:"onToggleBeforeAfter",docgenInfo:onToggleBeforeAfter.__docgenInfo,path:"src/Nav/Toggle/NavToggle.stories.mdx"}),defaultStylingCustomClassNames.__docgenInfo={description:"",methods:[],displayName:"defaultStylingCustomClassNames"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Nav/Toggle/NavToggle.stories.mdx"]={name:"defaultStylingCustomClassNames",docgenInfo:defaultStylingCustomClassNames.__docgenInfo,path:"src/Nav/Toggle/NavToggle.stories.mdx"}),customToggleIconWithDomElements.__docgenInfo={description:"",methods:[],displayName:"customToggleIconWithDomElements"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Nav/Toggle/NavToggle.stories.mdx"]={name:"customToggleIconWithDomElements",docgenInfo:customToggleIconWithDomElements.__docgenInfo,path:"src/Nav/Toggle/NavToggle.stories.mdx"})},1299:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(44),__webpack_require__(35),__webpack_require__(11),__webpack_require__(4),__webpack_require__(60),__webpack_require__(46),__webpack_require__(432),__webpack_require__(433),__webpack_require__(6),__webpack_require__(41),__webpack_require__(0);var esm=__webpack_require__(1),blocks=__webpack_require__(38);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],0<=excluded.indexOf(key)||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},_ref2=Object(esm.mdx)(blocks.Meta,{title:"Overview/Introduction",mdxType:"Meta"}),_ref3=Object(esm.mdx)(blocks.Description,{mdxType:"Description"},"<center>\n\n# Untitled UI\n\n## An unstyled UI component library to enable a design-first approach in a world of cookie-cutter frameworks. This library focuses on functionality with accessibility baked in so that you can focus on making it pretty.\n\n![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/untitled-ui) [![Coverage Status](https://coveralls.io/repos/github/jheung/untitled-ui/badge.svg)](https://coveralls.io/github/jheung/untitled-ui)\n\n</center>\n\n---\n\n## 🤔 Philosophy\n\nAfter working with so many different design frameworks, the same problem arose time after time. We spend too much time overwriting and fighting against the design framework in order to get it looking just the way we want. _We just want to make the web pretty and not worry about all the small details to get a component working._\n\nThis library:\n\n- is ultra-minimalistic\n  - by default, no styles are exported, but an example is provided to get you started\n- functions with minimal setup\n- has accessibility built-in (structure / functionality)\n  - styling related accessibility is up to you\n- is composable to allow flexibility\n- **for the front-end developers that want to focus on that pixel-perfect design**\n\n---\n\n## 🚀 Quick Start\n\nTo begin using Untitled UI, install the package in your project directory via npm/yarn:\n\n#### `npm install untitled-ui`\n\nVisit the [documentation](https://jheung.github.io/untitled-ui) to see how you can start implementing these components!\n\n---\n\n## 🧩 Components\n\n- Nav\n  - Toggle\n\n---\n\n## 📝 Pre-release Checklist\n\n- [ ] Add CodeSandbox template\n");function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),_ref2,_ref3)}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function(){throw new Error("Docs-only story")};__page.story={parameters:{docsOnly:!0}};var componentMeta={title:"Overview/Introduction",includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{};var _ref4=Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:{},mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null));componentMeta.parameters.docs=_objectSpread(_objectSpread({},componentMeta.parameters.docs||{}),{},{page:function page(){return _ref4}});__webpack_exports__.default=componentMeta},448:function(module,exports,__webpack_require__){var api=__webpack_require__(1289),content=__webpack_require__(1290);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},449:function(module,exports,__webpack_require__){__webpack_require__(450),__webpack_require__(592),__webpack_require__(593),__webpack_require__(1244),__webpack_require__(1245),module.exports=__webpack_require__(1286)},512:function(module,exports){}},[[449,1,2]]]);
//# sourceMappingURL=main.562254f81d5e32c4cd23.bundle.js.map