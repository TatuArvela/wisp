(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={options:{storySort:{order:["Wisp",["Basics","Advanced Usage","Theming"],"controls"]}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/Wisp.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),default_theme=__webpack_require__("./src/themes/default/theme.ts"),defaultConfig={enableDefaultElements:!0,defaultWindowHeight:100,defaultWindowWidth:200,maxWindowHeight:1/0,maxWindowWidth:1/0,minWindowHeight:100,minWindowWidth:200,newWindowXOffset:10,newWindowYOffset:10,themes:[default_theme.a],viewportWindowMargins:{top:0,left:0,bottom:0,right:0}},styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),elements_Desktop=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.elements.Desktop}}
`,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),hooks=__webpack_require__("./src/windowManager/hooks.ts"),TaskbarButton=styled_components_browser_esm.c.button`
  ${function(props){return props.theme.elements.TaskbarButton}}
`;TaskbarButton.defaultProps={type:"button"};var Taskbar_TaskbarButton=TaskbarButton,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TaskbarElement=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.elements.Taskbar}}
`,Taskbar=function(){var _useWindowManager=Object(hooks.a)(),activeWindowId=_useWindowManager.activeWindowId,windows=_useWindowManager.windows,restoreWindow=_useWindowManager.restoreWindow,setViewportWindowMargins=_useWindowManager.setViewportWindowMargins,taskbarRef=react_default.a.useRef(),getTaskbarHeight=Object(react.useCallback)((function(){var _taskbarRef$current;return(null===(_taskbarRef$current=taskbarRef.current)||void 0===_taskbarRef$current?void 0:_taskbarRef$current.offsetHeight)||0}),[taskbarRef]);Object(react.useEffect)((function(){return setViewportWindowMargins({bottom:getTaskbarHeight()}),function(){return setViewportWindowMargins({bottom:0})}}),[getTaskbarHeight,setViewportWindowMargins]);return Object(jsx_runtime.jsx)(TaskbarElement,{ref:taskbarRef,children:Array.from(windows.entries()).map((function(_ref){var _ref2=slicedToArray_default()(_ref,2),id=_ref2[0],window=_ref2[1];return Object(jsx_runtime.jsx)(Taskbar_TaskbarButton,{onClick:function(){return restoreWindow(id)},active:id===activeWindowId,children:window.title},id)}))})};Taskbar.displayName="Taskbar";var Taskbar_Taskbar=Taskbar,VersionInfo=__webpack_require__("./src/elements/VersionInfo.tsx"),elements_DefaultElements=function(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(elements_Desktop,{children:Object(jsx_runtime.jsx)(VersionInfo.a,{})}),Object(jsx_runtime.jsx)(Taskbar_Taskbar,{})]})},ThemeManagerContext=__webpack_require__("./src/themeManager/ThemeManagerContext.ts"),isObject=function(item){return item&&"object"==typeof item&&!Array.isArray(item)},mergeDeep=function(target,source){var output=Object.assign({},target);return isObject(target)&&isObject(source)&&Object.keys(source).forEach((function(key){isObject(source[key])?key in target?output[key]=mergeDeep(target[key],source[key]):Object.assign(output,{[key]:source[key]}):Object.assign(output,{[key]:source[key]})})),output},ThemeManager=function(_ref){var children=_ref.children,themes=_ref.themes,baseOnDefault=function(theme){return theme.id===default_theme.a.id?theme:mergeDeep(default_theme.a,theme)},initialTheme=baseOnDefault(themes[0]),_useState=Object(react.useState)(initialTheme),_useState2=slicedToArray_default()(_useState,2),theme=_useState2[0],setTheme=_useState2[1],themeManagerContext={theme:theme,changeTheme:function(theme){setTheme(baseOnDefault(theme))},themes:themes};return Object(jsx_runtime.jsx)(ThemeManagerContext.b,{value:themeManagerContext,children:Object(jsx_runtime.jsx)(styled_components_browser_esm.a,{theme:theme,children:children})})};ThemeManager.displayName="ThemeManager";var themeManager_ThemeManager=ThemeManager,minimizeWindow=function(windowManager){return function(id){windowManager.deactivateWindow(id),windowManager.updateWindow(id,{isMinimized:!0})}},windowStateMethods_restoreWindow=function(windowManager){return function(id){windowManager.activateWindow(id),windowManager.updateWindow(id,{isMinimized:!1})}},unmaximizeWindow=function(windowManager){return function(id){windowManager.activateWindow(id),windowManager.updateWindow(id,{isMaximized:!1})}},state_constructWindow=function(config,id,initial){var _initial$height,_initial$isClosable,_initial$isClosed,_initial$isDraggable,_initial$isMaximizabl,_initial$isMaximized,_initial$isMinimizabl,_initial$isMinimized,_initial$isResizable,_initial$maxHeight,_initial$maxWidth,_initial$minHeight,_initial$minWidth,_initial$positionX,_initial$positionY,_initial$title,_initial$width;return{height:null!==(_initial$height=null==initial?void 0:initial.height)&&void 0!==_initial$height?_initial$height:config.defaultWindowHeight,id:id,isClosable:null===(_initial$isClosable=null==initial?void 0:initial.isClosable)||void 0===_initial$isClosable||_initial$isClosable,isClosed:null!==(_initial$isClosed=null==initial?void 0:initial.isClosed)&&void 0!==_initial$isClosed&&_initial$isClosed,isDraggable:null===(_initial$isDraggable=null==initial?void 0:initial.isDraggable)||void 0===_initial$isDraggable||_initial$isDraggable,isMaximizable:null===(_initial$isMaximizabl=null==initial?void 0:initial.isMaximizable)||void 0===_initial$isMaximizabl||_initial$isMaximizabl,isMaximized:null!==(_initial$isMaximized=null==initial?void 0:initial.isMaximized)&&void 0!==_initial$isMaximized&&_initial$isMaximized,isMinimizable:null===(_initial$isMinimizabl=null==initial?void 0:initial.isMinimizable)||void 0===_initial$isMinimizabl||_initial$isMinimizabl,isMinimized:null!==(_initial$isMinimized=null==initial?void 0:initial.isMinimized)&&void 0!==_initial$isMinimized&&_initial$isMinimized,isResizable:null===(_initial$isResizable=null==initial?void 0:initial.isResizable)||void 0===_initial$isResizable||_initial$isResizable,maxHeight:null!==(_initial$maxHeight=null==initial?void 0:initial.maxHeight)&&void 0!==_initial$maxHeight?_initial$maxHeight:config.maxWindowHeight,maxWidth:null!==(_initial$maxWidth=null==initial?void 0:initial.maxWidth)&&void 0!==_initial$maxWidth?_initial$maxWidth:config.maxWindowWidth,minHeight:null!==(_initial$minHeight=null==initial?void 0:initial.minHeight)&&void 0!==_initial$minHeight?_initial$minHeight:config.minWindowHeight,minWidth:null!==(_initial$minWidth=null==initial?void 0:initial.minWidth)&&void 0!==_initial$minWidth?_initial$minWidth:config.minWindowWidth,positionX:null!==(_initial$positionX=null==initial?void 0:initial.positionX)&&void 0!==_initial$positionX?_initial$positionX:config.newWindowXOffset,positionY:null!==(_initial$positionY=null==initial?void 0:initial.positionY)&&void 0!==_initial$positionY?_initial$positionY:config.newWindowYOffset,title:null!==(_initial$title=null==initial?void 0:initial.title)&&void 0!==_initial$title?_initial$title:"",width:null!==(_initial$width=null==initial?void 0:initial.width)&&void 0!==_initial$width?_initial$width:config.defaultWindowWidth}},toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),toConsumableArray_default=__webpack_require__.n(toConsumableArray);var state_reducer=function reducer(state,action){switch(action.type){case"ACTIVATE_WINDOW":return Object.assign({},state,{activeWindowId:action.payload,windowOrder:[].concat(toConsumableArray_default()(state.windowOrder.filter((function(windowId){return windowId!==action.payload}))),[action.payload])});case"CLOSE_WINDOW":var windows=new Map(state.windows);return windows.delete(action.payload),Object.assign({},state,{windows:windows,windowOrder:toConsumableArray_default()(state.windowOrder).filter((function(windowId){return windowId!==action.payload}))});case"CREATE_WINDOW":return Object.assign({},state,{windows:new Map(state.windows).set(action.payload.id,action.payload),windowOrder:state.windowOrder.concat(action.payload.id)});case"DEACTIVATE_WINDOW":return Object.assign({},state,{activeWindowId:action.payload===state.activeWindowId?null:state.activeWindowId});case"UPDATE_WINDOW":return Object.assign({},state,{windows:new Map(state.windows).set(action.payload.id,Object.assign({},state.windows.get(action.payload.id),action.payload.props))});case"SET_WINDOW_MARGINS":return Object.assign({},state,{viewportWindowMargins:Object.assign({},state.viewportWindowMargins,action.payload)});default:return state}},ViewportElement=styled_components_browser_esm.c.div`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`,windowManager_Viewport=react_default.a.forwardRef((function(_ref,ref){var children=_ref.children;return Object(jsx_runtime.jsx)(ViewportElement,{ref:ref,children:children})})),WindowManagerContext=__webpack_require__("./src/windowManager/WindowManagerContext.tsx"),WindowManager=function(_ref){var windowManager,children=_ref.children,config=_ref.config,_React$useReducer=react_default.a.useReducer(state_reducer,{activeWindowId:null,viewportWindowMargins:config.viewportWindowMargins,windowOrder:[],windows:new Map}),_React$useReducer2=slicedToArray_default()(_React$useReducer,2),state=_React$useReducer2[0],dispatch=_React$useReducer2[1],viewportRef=react_default.a.useRef(),activateWindow=Object(react.useCallback)((function(id){return dispatch({type:"ACTIVATE_WINDOW",payload:id})}),[dispatch]),closeWindow=Object(react.useCallback)((function(id){return dispatch({type:"CLOSE_WINDOW",payload:id})}),[dispatch]),deactivateWindow=Object(react.useCallback)((function(id){return dispatch({type:"DEACTIVATE_WINDOW",payload:id})}),[dispatch]),updateWindow=Object(react.useCallback)((function(id,props){return dispatch({type:"UPDATE_WINDOW",payload:{id:id,props:props}})}),[dispatch]),setViewportWindowMargins=Object(react.useCallback)((function(viewportWindowMargins){return dispatch({type:"SET_WINDOW_MARGINS",payload:viewportWindowMargins})}),[dispatch]),getViewportHeight=Object(react.useCallback)((function(){var _viewportRef$current;return(null===(_viewportRef$current=viewportRef.current)||void 0===_viewportRef$current?void 0:_viewportRef$current.offsetHeight)||0}),[viewportRef]),getViewportWidth=Object(react.useCallback)((function(){var _viewportRef$current2;return(null===(_viewportRef$current2=viewportRef.current)||void 0===_viewportRef$current2?void 0:_viewportRef$current2.offsetWidth)||0}),[viewportRef]),baseContext=Object.assign({},state,{activateWindow:activateWindow,closeWindow:closeWindow,createWindow:function(id,initialState){var window=state_constructWindow(config,id,initialState);return dispatch({type:"CREATE_WINDOW",payload:window}),state.windows.get(id)},deactivateWindow:deactivateWindow,getViewportHeight:getViewportHeight,getViewportWidth:getViewportWidth,setViewportWindowMargins:setViewportWindowMargins,updateWindow:updateWindow,viewportRef:viewportRef}),context=Object.assign({},baseContext,{maximizeWindow:(windowManager=baseContext,function(id){windowManager.activateWindow(id),windowManager.updateWindow(id,{isMaximized:!0})}),minimizeWindow:minimizeWindow(baseContext),restoreWindow:windowStateMethods_restoreWindow(baseContext),unmaximizeWindow:unmaximizeWindow(baseContext)});return Object(jsx_runtime.jsx)(WindowManagerContext.b,{value:context,children:Object(jsx_runtime.jsx)(windowManager_Viewport,{ref:viewportRef,children:children})})};WindowManager.displayName="WindowManager";var windowManager_WindowManager=WindowManager,_excluded=["children"],Wisp=function(_ref){var children=_ref.children,rest=objectWithoutProperties_default()(_ref,_excluded),config=Object.assign({},defaultConfig,rest);return Object(jsx_runtime.jsx)(themeManager_ThemeManager,{themes:config.themes,children:Object(jsx_runtime.jsxs)(windowManager_WindowManager,{config:config,children:[config.enableDefaultElements&&Object(jsx_runtime.jsx)(elements_DefaultElements,{}),children]})})};Wisp.displayName="Wisp";__webpack_exports__.a=Wisp},"./src/controls/AlertText.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AlertTextElement=styled_components__WEBPACK_IMPORTED_MODULE_1__.c.div`
  ${function(props){return props.theme.controls.AlertText}}
`,AlertText=function(_ref){var children=_ref.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AlertTextElement,{children:children})};AlertText.displayName="AlertText",__webpack_exports__.a=AlertText},"./src/controls/Button.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["width","height"],ButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.c.div`
  ${function(props){return props.theme.controls.ButtonWrapper}}
`,ButtonElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.c.button`
  ${function(props){return props.theme.controls.Button}}
`,Button=function(_ref){var width=_ref.width,height=_ref.height,rest=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref,_excluded);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonWrapper,{width:width,height:height,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ButtonElement,Object.assign({},rest))})};Button.displayName="Button",__webpack_exports__.a=Button},"./src/elements/VersionInfo.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";(function(process){__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),VersionInformationElement=styled_components__WEBPACK_IMPORTED_MODULE_1__.c.p`
  ${function(props){return props.theme.elements.VersionInfo}}
`,VersionInfo=function(){var version=process.env.PACKAGE_VERSION||"0.4.0";return version?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(VersionInformationElement,{children:["Wisp Version ",version]}):null};VersionInfo.displayName="VersionInfo",__webpack_exports__.a=VersionInfo}).call(this,__webpack_require__("./node_modules/process/browser.js"))},"./src/themeManager/ThemeManagerContext.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ThemeManagerContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ThemeManagerProvider}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ThemeManagerContext=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__).a.createContext(void 0);ThemeManagerContext.displayName="ThemeManagerContext";var ThemeManagerProvider=ThemeManagerContext.Provider},"./src/themes/default/theme.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),AlertText=styled_components_browser_esm.b`
  display: flex;
  flex-grow: 1;
  align-items: center;
`,AlertButton=styled_components_browser_esm.b`
  width: 60px;
  margin: auto;
`,ButtonWrapper=styled_components_browser_esm.b`
  display: inherit;
  height: ${function(props){return`${props.height}px`}};
  padding: 0 1px 1px 0;
  width: ${function(props){return`${props.width}px`}};
`,Button=styled_components_browser_esm.b`
  box-shadow: 1px 1px 0 0 gray;
  font-size: 12px;
  padding: 4px;
  user-select: none;
  border-radius: 0;
  border: 1px solid black;
  background: white;

  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`,CheckboxWrapper=styled_components_browser_esm.b`
  display: block;
`,checkedStyle=styled_components_browser_esm.b`
  &:before {
    content: '✔';
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    text-align: center;
    top: 1px;
    width: 100%;
  }
`,default_controls={AlertText:AlertText,AlertButton:AlertButton,Button:Button,ButtonWrapper:ButtonWrapper,Checkbox:styled_components_browser_esm.b`
  background: white;
  border: 1px solid black;
  box-shadow: 1px 1px 0 0 gray;
  height: 20px;
  position: relative;
  width: 20px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background: lightgray;
  }

  ${function(props){return props.checked&&checkedStyle}}
`,CheckboxWrapper:CheckboxWrapper,ResizeHandle:styled_components_browser_esm.b`
  position: absolute;
  right: 0;
  bottom: 0;
  content: ' ';
  width: 12px;
  height: 12px;
  padding: 0;
  margin: 0;
  cursor: se-resize;

  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -9px;
    left: 1px;
    border-left: 10px solid transparent;
    border-bottom: 10px solid grey;
    border-top: 10px solid transparent;
  }
`,StatusBar:styled_components_browser_esm.b`
  box-sizing: border-box;
  margin: -3px;
  height: 20px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid grey;
  width: calc(100% + 6px);
  font-size: 14px;
  padding: 2px 3px;
`},Taskbar=styled_components_browser_esm.b`
  background: white;
  border-top: 1px solid black;
  bottom: 0;
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  height: 28px;
  left: 0;
  overflow-x: visible;
  padding: 2px;
  position: absolute;
  text-align: left;
  white-space: nowrap;
  width: 100%;
`,taskbarButtonActiveStyle=styled_components_browser_esm.b`
  background: none;
  border-color: lightgray;
  box-shadow: inset 1px 1px 0 gray;
  font-weight: bold;
`,default_elements={Taskbar:Taskbar,TaskbarButton:styled_components_browser_esm.b`
  border-radius: 3px;
  border: 1px solid gray;
  box-shadow: 1px 1px 0 lightgray;
  height: 22px;
  margin-left: 2px;
  text-align: left;
  width: 160px;
  user-select: none;
  ${function(props){return props.active&&taskbarButtonActiveStyle}};
`,Desktop:styled_components_browser_esm.b`
  background: rgb(10, 36, 106);
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`,VersionInfo:styled_components_browser_esm.b`
  bottom: 30px;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
  z-index: 1000;
`},sharedStyle=styled_components_browser_esm.b`
  box-sizing: border-box;
  position: absolute;
`,NResize=styled_components_browser_esm.b`
  ${sharedStyle};
  top: ${-5}px;
  left: ${-5}px;
  right: ${-5}px;
  height: ${5}px;
  cursor: n-resize;
`,NEResize=styled_components_browser_esm.b`
  ${sharedStyle};
  top: ${-5}px;
  right: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: ne-resize;
`,EResize=styled_components_browser_esm.b`
  ${sharedStyle};
  top: ${-5}px;
  bottom: ${-5}px;
  right: ${-5}px;
  width: ${5}px;
  cursor: e-resize;
`,SEResize=styled_components_browser_esm.b`
  ${sharedStyle};
  bottom: ${-5}px;
  right: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: se-resize;
`,SResize=styled_components_browser_esm.b`
  ${sharedStyle};
  bottom: ${-5}px;
  left: ${-5}px;
  right: ${-5}px;
  height: ${5}px;
  cursor: s-resize;
`,SWResize=styled_components_browser_esm.b`
  ${sharedStyle};
  bottom: ${-5}px;
  left: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: sw-resize;
`,WResize=styled_components_browser_esm.b`
  ${sharedStyle};
  top: ${-5}px;
  bottom: ${-5}px;
  left: ${-5}px;
  width: ${5}px;
  cursor: w-resize;
`,resizeBorder={EResize:EResize,NEResize:NEResize,NResize:NResize,NWResize:styled_components_browser_esm.b`
  ${sharedStyle};
  top: ${-5}px;
  left: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: nw-resize;
`,SEResize:SEResize,SResize:SResize,SWResize:SWResize,WResize:WResize},titleBar={TitleBar:styled_components_browser_esm.b`
  background: ${function(props){return props.isActive?"rgb(19, 71, 214)":"grey"}};
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-shrink: 0;
  font-family: sans-serif;
  font-size: 12px;
  height: 20px;
  line-height: 18px;
  margin: 0 0 2px;
  padding-left: 4px;
  text-align: left;
  user-select: none;
  width: 100%;
`,Title:styled_components_browser_esm.b`
  display: block;
  flex-grow: 1;
`},TitleBarButtons=styled_components_browser_esm.b`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
`,sharedWindowButtonStyle=styled_components_browser_esm.b`
  background: white;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  height: 16px;
  margin: 2px 2px;
  padding: 0;
  position: relative;
  width: 16px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background: lightgray;
  }
`,titleBarButtons={TitleBarButtons:TitleBarButtons,MinimizeButton:styled_components_browser_esm.b`
  ${sharedWindowButtonStyle};

  &:before {
    border-bottom: 1px solid black;
    content: '';
    height: 10px;
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 10px;
  }
`,MaximizeButton:styled_components_browser_esm.b`
  ${sharedWindowButtonStyle};

  &:before {
    border: 1px solid black;
    content: '';
    height: 10px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 2px;
    width: 10px;
  }
`,UnmaximizeButton:styled_components_browser_esm.b`
  ${sharedWindowButtonStyle};

  &:before {
    border-right: 1px solid black;
    border-top: 1px solid black;
    content: '';
    height: 8px;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 2px;
    width: 8px;
  }

  &:after {
    border: 1px solid black;
    bottom: 2px;
    content: '';
    height: 8px;
    left: 2px;
    pointer-events: none;
    position: absolute;
    width: 8px;
  }
`,CloseButton:styled_components_browser_esm.b`
  ${sharedWindowButtonStyle};

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 8px;
    transform: rotate(45deg);
    width: 16px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 16px;
  }
`},WindowContent=styled_components_browser_esm.b`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 16px;
  height: 100%;
  margin: 0;
  overflow: hidden;
  text-align: left;
  user-select: none;
  width: 100%;
`,maximizedStyles=styled_components_browser_esm.b`
  height: ${function(props){return`calc(100% - ${(viewportWindowMargins=props.viewportWindowMargins).top+viewportWindowMargins.bottom}px)`;var viewportWindowMargins}} !important;
  left: ${function(props){return props.viewportWindowMargins.left}} !important;
  top: ${function(props){return props.viewportWindowMargins.top}} !important;
  width: ${function(props){return`calc(100% - ${(viewportWindowMargins=props.viewportWindowMargins).left+viewportWindowMargins.right}px)`;var viewportWindowMargins}} !important;
  z-index: ${function(props){return props.orderNumber}} !important;
  border-radius: 0;
`,minimizedStyles=styled_components_browser_esm.b`
  display: none;
`,WindowElement=styled_components_browser_esm.b`
  background: white;
  border-radius: 3px;
  box-sizing: border-box;
  border: 3px solid white;
  box-shadow: 0 0 0 1px gray;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;

  ${function(props){return props.isMaximized&&maximizedStyles}}
  ${function(props){return props.isMinimized&&minimizedStyles}}
`,defaultTheme={id:"DEFAULT",name:"Default Theme",controls:default_controls,elements:default_elements,window:Object.assign({},resizeBorder,titleBar,titleBarButtons,{WindowContent:WindowContent,WindowElement:WindowElement})};__webpack_exports__.a=defaultTheme},"./src/window/AlertWindow.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_controls_AlertText__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/controls/AlertText.tsx"),_controls_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/controls/Button.tsx"),_Window__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/Window.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),AlertButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_controls_Button__WEBPACK_IMPORTED_MODULE_3__.a)`
  ${function(props){return props.theme.controls.AlertButton}}
`,AlertWindow=function(_ref){var id=_ref.id,title=_ref.title,_ref$buttonText=_ref.buttonText,buttonText=void 0===_ref$buttonText?"OK":_ref$buttonText,onButtonClick=_ref.onButtonClick,children=_ref.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Window__WEBPACK_IMPORTED_MODULE_4__.a,{id:id,initialState:{title:title,isMaximizable:!1,isMinimizable:!1,isResizable:!1},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_controls_AlertText__WEBPACK_IMPORTED_MODULE_2__.a,{children:children}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(AlertButton,{onClick:onButtonClick,type:"button",children:buttonText})]})};AlertWindow.displayName="AlertWindow",__webpack_exports__.a=AlertWindow},"./src/window/Window.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),hooks=__webpack_require__("./src/windowManager/hooks.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),types=__webpack_require__("./src/windowManager/types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),NResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.NResize}}
`,NEResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.NEResize}}
`,EResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.EResize}}
`,SEResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.SEResize}}
`,SResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.SResize}}
`,SWResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.SWResize}}
`,WResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.WResize}}
`,NWResize=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.NWResize}}
`,components_ResizeBorder=function(_ref){var resize=_ref.resize;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(NResize,{onMouseDown:function(e){return resize(e,types.a.N)}}),Object(jsx_runtime.jsx)(EResize,{onMouseDown:function(e){return resize(e,types.a.E)}}),Object(jsx_runtime.jsx)(SResize,{onMouseDown:function(e){return resize(e,types.a.S)}}),Object(jsx_runtime.jsx)(WResize,{onMouseDown:function(e){return resize(e,types.a.W)}}),Object(jsx_runtime.jsx)(NEResize,{onMouseDown:function(e){return resize(e,types.a.NE)}}),Object(jsx_runtime.jsx)(SEResize,{onMouseDown:function(e){return resize(e,types.a.SE)}}),Object(jsx_runtime.jsx)(SWResize,{onMouseDown:function(e){return resize(e,types.a.SW)}}),Object(jsx_runtime.jsx)(NWResize,{onMouseDown:function(e){return resize(e,types.a.NW)}})]})},TitleBarButtonsElement=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.TitleBarButtons}}
`,WindowButton=styled_components_browser_esm.c.button``;WindowButton.defaultProps={type:"button"};var MinimizeButton=Object(styled_components_browser_esm.c)(WindowButton)`
  ${function(props){return props.theme.window.MinimizeButton}}
`,MaximizeButton=Object(styled_components_browser_esm.c)(WindowButton)`
  ${function(props){return props.theme.window.MaximizeButton}}
`,UnmaximizeButton=Object(styled_components_browser_esm.c)(WindowButton)`
  ${function(props){return props.theme.window.UnmaximizeButton}}
`,CloseButton=Object(styled_components_browser_esm.c)(WindowButton)`
  ${function(props){return props.theme.window.CloseButton}}
`,TitleBarButtons=function(_ref){var close=_ref.close,isClosable=_ref.isClosable,isMaximizable=_ref.isMaximizable,isMaximized=_ref.isMaximized,isMinimizable=_ref.isMinimizable,maximize=_ref.maximize,minimize=_ref.minimize,unmaximize=_ref.unmaximize;return Object(jsx_runtime.jsxs)(TitleBarButtonsElement,{children:[isMinimizable&&Object(jsx_runtime.jsx)(MinimizeButton,{onClick:minimize}),isMaximizable&&(isMaximized?Object(jsx_runtime.jsx)(UnmaximizeButton,{onClick:unmaximize}):Object(jsx_runtime.jsx)(MaximizeButton,{onClick:maximize})),isClosable&&Object(jsx_runtime.jsx)(CloseButton,{onClick:close})]})};TitleBarButtons.displayName="TitleBarButtons";var components_TitleBarButtons=TitleBarButtons,TitleBarElement=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.TitleBar}}
`,Title=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.Title}}
`,TitleBar=function(_ref){var close=_ref.close,drag=_ref.drag,isActive=_ref.isActive,isMaximizable=_ref.isMaximizable,isMaximized=_ref.isMaximized,isMinimizable=_ref.isMinimizable,isClosable=_ref.isClosable,maximize=_ref.maximize,minimize=_ref.minimize,title=_ref.title,unmaximize=_ref.unmaximize;return Object(jsx_runtime.jsxs)(TitleBarElement,{isActive:isActive,children:[Object(jsx_runtime.jsx)(Title,{onMouseDown:drag,onDoubleClick:function(){isMaximized?unmaximize():maximize()},children:title}),Object(jsx_runtime.jsx)(components_TitleBarButtons,{close:close,isClosable:isClosable,isMaximizable:isMaximizable,isMaximized:isMaximized,isMinimizable:isMinimizable,maximize:maximize,minimize:minimize,unmaximize:unmaximize})]})};TitleBar.displayName="TitleBar";var components_TitleBar=TitleBar,components_WindowContent=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.window.WindowContent}}
`,components_WindowElement=styled_components_browser_esm.c.div.attrs((function(props){return{style:{top:`${props.positionY}px`,width:`${props.width}px`,height:`${props.height}px`,left:`${props.positionX}px`,zIndex:props.orderNumber}}}))`
  ${function(props){return props.theme.window.WindowElement}}
`,dimensions=__webpack_require__("./src/window/handlers/utils/dimensions.ts"),mouseDragHandler=__webpack_require__("./src/window/handlers/utils/mouseDragHandler.ts"),windowDragHandler=function(windowManager,window){return function(event){if(windowManager.activateWindow(window.id),window.isDraggable&&!window.isMaximized)return Object(mouseDragHandler.a)(event,(function(xOffset,yOffset){window=Object.assign({},window,repositionWindow(window,xOffset,yOffset,Object(dimensions.a)(windowManager))),windowManager.updateWindow(window.id,window)}))}},repositionWindow=function(window,xOffset,yOffset,boundaries){return{positionX:Object(dimensions.c)(window,xOffset,boundaries),positionY:Object(dimensions.d)(window,yOffset,boundaries)}},windowResizeHandler=__webpack_require__("./src/window/handlers/windowResizeHandler.ts"),Window=function(_ref){var children=_ref.children,id=_ref.id,initialState=_ref.initialState,windowManager=Object(hooks.a)(),wmWindow=windowManager.windows.get(id),orderNumber=windowManager.windowOrder.indexOf(id);if(Object(react.useEffect)((function(){return wmWindow||windowManager.createWindow(id,initialState),function(){return windowManager.closeWindow(id)}}),[id]),!wmWindow||wmWindow.isClosed)return null;var window=Object.assign({},wmWindow),childrenWithWindow=react_default.a.Children.map(children,(function(child){return react_default.a.isValidElement(child)?react_default.a.cloneElement(child,{window:window}):child}));return Object(jsx_runtime.jsxs)(components_WindowElement,{height:window.height,isMaximized:window.isMaximized,isMinimized:window.isMinimized,orderNumber:orderNumber,positionX:window.positionX,positionY:window.positionY,width:window.width,viewportWindowMargins:windowManager.viewportWindowMargins,children:[Object(jsx_runtime.jsx)(components_TitleBar,{close:function(){return windowManager.closeWindow(id)},drag:windowDragHandler(windowManager,window),isActive:id===windowManager.activeWindowId,isClosable:window.isClosable,isMaximizable:window.isMaximizable,isMaximized:window.isMaximized,isMinimizable:window.isMinimizable,maximize:function(){return windowManager.maximizeWindow(id)},minimize:function(){return windowManager.minimizeWindow(id)},title:window.title,unmaximize:function(){return windowManager.unmaximizeWindow(id)}}),Object(jsx_runtime.jsx)(components_WindowContent,{onClick:function(){return windowManager.activateWindow(id)},children:childrenWithWindow}),window.isResizable&&Object(jsx_runtime.jsx)(components_ResizeBorder,{resize:Object(windowResizeHandler.a)(windowManager,window)})]})};Window.displayName="Window";__webpack_exports__.a=Window},"./src/window/handlers/utils/dimensions.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return calculatePositionX})),__webpack_require__.d(__webpack_exports__,"d",(function(){return calculatePositionY})),__webpack_require__.d(__webpack_exports__,"e",(function(){return calculateWidth})),__webpack_require__.d(__webpack_exports__,"b",(function(){return calculateHeight})),__webpack_require__.d(__webpack_exports__,"a",(function(){return calculateBoundaries}));var calculatePositionX=function(window,xOffset,boundaries){var newX=window.positionX-xOffset,maxX=boundaries.maxX-window.width;return Math.min(Math.max(newX,boundaries.minX),maxX)},calculatePositionY=function(window,yOffset,boundaries){var newY=window.positionY-yOffset,maxY=boundaries.maxY-window.height;return Math.min(Math.max(newY,boundaries.minY),maxY)},calculateWidth=function(window,xOffset,boundaries,scalingLeft){var newWidth=window.width-xOffset;return Math.min(Math.max(newWidth,window.minWidth),boundaries.maxX-window.positionX,window.maxWidth,scalingLeft?window.width+window.positionX-boundaries.minX:Math.min())},calculateHeight=function(window,yOffset,boundaries,scalingUp){var newHeight=window.height-yOffset;return Math.min(Math.max(newHeight,window.minHeight),boundaries.maxY-window.positionY,window.maxHeight,scalingUp?window.height+window.positionY-boundaries.minY:Math.min())},calculateBoundaries=function(_ref){var getViewportWidth=_ref.getViewportWidth,getViewportHeight=_ref.getViewportHeight,viewportWindowMargins=_ref.viewportWindowMargins;return{minX:viewportWindowMargins.left,minY:viewportWindowMargins.top,maxX:getViewportWidth()-viewportWindowMargins.right,maxY:getViewportHeight()-viewportWindowMargins.bottom}}},"./src/window/handlers/utils/mouseDragHandler.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=function(initialEvent,callback){initialEvent.preventDefault();var mouseMoveEventListener=null,mouseUpEventListener=null,prevClientX=null,prevClientY=null,xOffset=0,yOffset=0;mouseMoveEventListener=function(e){return(event=e).preventDefault(),void(0===event.button&&(prevClientX?(xOffset=prevClientX-event.clientX,yOffset=prevClientY-event.clientY,prevClientX=event.clientX,prevClientY=event.clientY,callback(xOffset,yOffset)):(prevClientX=event.clientX,prevClientY=event.clientY)));var event},mouseUpEventListener=function(){return document.removeEventListener("mousemove",mouseMoveEventListener),void document.removeEventListener("mouseup",mouseUpEventListener)},document.addEventListener("mousemove",mouseMoveEventListener),document.addEventListener("mouseup",mouseUpEventListener)}},"./src/window/handlers/windowResizeHandler.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return windowResizeHandler}));var _windowManager_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/windowManager/types.ts"),_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/window/handlers/utils/dimensions.ts"),_utils_mouseDragHandler__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/window/handlers/utils/mouseDragHandler.ts"),windowResizeHandler=function(windowManager,window){return function(event,direction){if(windowManager.activateWindow(window.id),window.isResizable&&!window.isMaximized)return Object(_utils_mouseDragHandler__WEBPACK_IMPORTED_MODULE_2__.a)(event,(function(xOffset,yOffset){window=Object.assign({},window,resizeWindow(window,direction,xOffset,yOffset,Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.a)(windowManager))),windowManager.updateWindow(window.id,window)}))}},resizeWindow=function(window,direction,xOffset,yOffset,boundaries){var resizeN=function(){var newHeight=Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.b)(window,-yOffset,boundaries,!0);return{height:newHeight,positionY:window.positionY+(window.height-newHeight)}},resizeE=function(){return{width:Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.e)(window,xOffset,boundaries)}},resizeS=function(){return{height:Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.b)(window,yOffset,boundaries)}},resizeW=function(){var newWidth=Object(_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.e)(window,-xOffset,boundaries,!0);return{width:newWidth,positionX:window.positionX+(window.width-newWidth)}};switch(direction){case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.N:return Object.assign({},resizeN());case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.NE:return Object.assign({},resizeN(),resizeE());case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.E:return Object.assign({},resizeE());case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.SE:return Object.assign({},resizeS(),resizeE());case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.S:return Object.assign({},resizeS());case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.SW:return Object.assign({},resizeS(),resizeW());case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.W:return Object.assign({},resizeW());case _windowManager_types__WEBPACK_IMPORTED_MODULE_0__.a.NW:return Object.assign({},resizeN(),resizeW());default:return{}}}},"./src/windowManager/WindowManagerContext.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return WindowManagerContext})),__webpack_require__.d(__webpack_exports__,"b",(function(){return WindowManagerProvider}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),WindowManagerContext=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__).a.createContext(void 0);WindowManagerContext.displayName="WindowManagerContext";var WindowManagerProvider=WindowManagerContext.Provider},"./src/windowManager/hooks.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useWindowManager}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_WindowManagerContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/windowManager/WindowManagerContext.tsx");function useWindowManager(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_WindowManagerContext__WEBPACK_IMPORTED_MODULE_1__.a)}},"./src/windowManager/types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var Direction;__webpack_require__.d(__webpack_exports__,"a",(function(){return Direction})),function(Direction){Direction.N="N",Direction.NE="NE",Direction.E="E",Direction.SE="SE",Direction.S="S",Direction.SW="SW",Direction.W="W",Direction.NW="NW"}(Direction||(Direction={}))},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$":function(module,exports,__webpack_require__){var map={"./AdvancedUsage.stories.tsx":"./stories/AdvancedUsage.stories.tsx","./Basics.stories.tsx":"./stories/Basics.stories.tsx","./Theming.stories.tsx":"./stories/Theming.stories.tsx","./controls/AlertText.stories.tsx":"./stories/controls/AlertText.stories.tsx","./controls/Button.stories.tsx":"./stories/controls/Button.stories.tsx","./controls/Checkbox.stories.tsx":"./stories/controls/Checkbox.stories.tsx","./controls/StatusBar.stories.tsx":"./stories/controls/StatusBar.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.tsx)$"},"./stories/AdvancedUsage.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WispInWisp",(function(){return WispInWisp})),__webpack_require__.d(__webpack_exports__,"StickyNotes",(function(){return StickyNotes})),__webpack_require__.d(__webpack_exports__,"ExternalWindowToggling",(function(){return ExternalWindowToggling}));var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),_storybook_addons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),_src_index__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/Wisp.tsx")),_src_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/Window.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_src_index__WEBPACK_IMPORTED_MODULE_3__.a,title:"Wisp/Advanced Usage"};var WispInWisp=function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{id:"1",initialState:{title:"Parent window",width:600,height:480},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{border:"1px solid black",boxSizing:"border-box",height:"100%",width:"100%"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{id:"2",initialState:{title:"Child window"},children:"Test"})})})})})};WispInWisp.displayName="WispInWisp";var StickyNotes=function(){var commonState={height:200,isClosable:!1,isMaximizable:!1,isMinimizable:!1,positionX:100,positionY:100,width:200};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{enableDefaultElements:!1,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{id:"1",initialState:Object.assign({},commonState,{isDraggable:!1,isResizable:!1,title:"Static note"}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Immovable object"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{id:"2",initialState:Object.assign({},commonState,{title:"Resizable sticky note"}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Make me big!"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{id:"3",initialState:Object.assign({},commonState,{isResizable:!1,title:"Sticky note"}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p",{children:"Can't close me!"})})]})};StickyNotes.displayName="StickyNotes";var ExternalWindowToggling=function(){var _useState=Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_1__.c)(!1),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),showWindow=_useState2[0],setShowWindow=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button",{type:"button",onClick:function(){return setShowWindow(!showWindow)},children:"Toggle window"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{width:"800px",height:"600px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{id:"1",initialState:{title:"Initially shown"},children:"This window is initially shown"}),showWindow&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_4__.a,{id:"2",initialState:{title:"Toggled window"},children:"This window is toggled by the button above"})]})})]})};ExternalWindowToggling.displayName="ExternalWindowToggling"},"./stories/Basics.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HelloWorld",(function(){return HelloWorld})),__webpack_require__.d(__webpack_exports__,"MultipleWindows",(function(){return MultipleWindows}));__webpack_require__("./node_modules/react/index.js");var _src_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Wisp.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/window/Window.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/window/AlertWindow.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_src_index__WEBPACK_IMPORTED_MODULE_1__.a,title:"Wisp/Basics"};var HelloWorld=function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_1__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_2__.a,{id:"hello world",initialState:{title:"Hello World"},children:"Check out Wisp"})})};HelloWorld.displayName="HelloWorld";var MultipleWindows=function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_src_index__WEBPACK_IMPORTED_MODULE_1__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_src_index__WEBPACK_IMPORTED_MODULE_2__.a,{id:"3",initialState:{title:"Tres",width:400,height:300,isMinimized:!0},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Regular window"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{id:"1",title:"Uno",children:"Alert!"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{id:"2",title:"Dos",children:"Warning!"})]})};MultipleWindows.displayName="MultipleWindows"},"./stories/Theming.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ThemeSwitcherStory",(function(){return ThemeSwitcherStory})),__webpack_require__.d(__webpack_exports__,"TestTheme",(function(){return TestTheme}));var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),Wisp=__webpack_require__("./src/Wisp.tsx"),ThemeManagerContext=__webpack_require__("./src/themeManager/ThemeManagerContext.ts");var Window=__webpack_require__("./src/window/Window.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeSwitcher=function(){var _useThemeManager=function useThemeManager(){return react_default.a.useContext(ThemeManagerContext.a)}(),currentTheme=_useThemeManager.theme,themes=_useThemeManager.themes,changeTheme=_useThemeManager.changeTheme;return Object(jsx_runtime.jsx)(Window.a,{initialState:{title:"Theme Switcher"},id:"THEME_SWITCHER",children:Object(jsx_runtime.jsx)("select",{onChange:function(e){var newTheme=themes.find((function(theme){return theme.id===e.target.value}));newTheme&&changeTheme(newTheme)},value:currentTheme.id,children:themes.map((function(theme){return Object(jsx_runtime.jsxs)("option",{value:theme.id,children:[theme.name,theme.id===currentTheme.id&&" (Active)"]},theme.id)}))})})};ThemeSwitcher.displayName="ThemeSwitcher";var elements_ThemeSwitcher=ThemeSwitcher,AlertWindow=__webpack_require__("./src/window/AlertWindow.tsx"),default_theme=__webpack_require__("./src/themes/default/theme.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),titleBar={TitleBar:styled_components_browser_esm.b`
  ${default_theme.a.window.TitleBar}
  background: ${function(props){return props.isActive?"rgb(214,19,107)":"grey"}};
  font-family: serif;
`},WindowContent=styled_components_browser_esm.b`
  ${default_theme.a.window.WindowContent}
  font-family: serif;
`,WindowElement=styled_components_browser_esm.b`
  ${default_theme.a.window.WindowElement}
  background: cyan;
  border-color: cyan;
  box-shadow: 0 0 0 1px white;
`,test_theme={id:"TEST",name:"Test Theme",window:Object.assign({},titleBar,{WindowContent:WindowContent,WindowElement:WindowElement})},ThemeSwitcherStory=(__webpack_exports__.default={component:Wisp.a,title:"Wisp/Theming"},function(){return Object(jsx_runtime.jsx)(Wisp.a,{themes:[default_theme.a,test_theme],children:Object(jsx_runtime.jsx)(elements_ThemeSwitcher,{})})});ThemeSwitcherStory.displayName="ThemeSwitcherStory",ThemeSwitcherStory.story={name:"Theme Switcher"};var TestTheme=function(){return Object(jsx_runtime.jsx)(Wisp.a,{themes:[test_theme],children:Object(jsx_runtime.jsx)(AlertWindow.a,{id:"1",title:"TEST",children:"TEEEST"})})};TestTheme.displayName="TestTheme"},"./stories/controls/AlertText.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AlertTextStory",(function(){return AlertTextStory}));__webpack_require__("./node_modules/react/index.js");var _src_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Wisp.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/window/Window.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/controls/AlertText.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_src_index__WEBPACK_IMPORTED_MODULE_1__.a,title:"controls/AlertText"};var AlertTextStory=function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_1__.a,{enableDefaultElements:!1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_2__.a,{id:"1",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{children:"AlertText"})})})};AlertTextStory.displayName="AlertTextStory",AlertTextStory.story={name:"AlertText"}},"./stories/controls/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ButtonStory",(function(){return ButtonStory}));__webpack_require__("./node_modules/react/index.js");var _src_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Wisp.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/window/Window.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/controls/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={component:_src_index__WEBPACK_IMPORTED_MODULE_1__.a,title:"controls/Button"};var ButtonStory=function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_1__.a,{enableDefaultElements:!1,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_2__.a,{id:"1",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.a,{children:"Button"})})})};ButtonStory.displayName="ButtonStory",ButtonStory.story={name:"Button"}},"./stories/controls/Checkbox.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CheckboxStory",(function(){return CheckboxStory}));var slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),hooks=__webpack_require__("./node_modules/@storybook/addons/dist/esm/hooks.js"),Wisp=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/Wisp.tsx")),Window=__webpack_require__("./src/window/Window.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CheckboxWrapper=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.controls.CheckboxContainer}}
`,HiddenCheckbox=styled_components_browser_esm.c.input.attrs({type:"checkbox"})`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,StyledCheckbox=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.controls.Checkbox}}
`,Checkbox=function(_ref){var checked=_ref.checked,onClick=_ref.onClick;return Object(jsx_runtime.jsxs)(CheckboxWrapper,{children:[Object(jsx_runtime.jsx)(HiddenCheckbox,{checked:checked}),Object(jsx_runtime.jsx)(StyledCheckbox,{checked:checked,onClick:onClick})]})};Checkbox.displayName="Checkbox";var controls_Checkbox=Checkbox,CheckboxStory=(__webpack_exports__.default={component:Wisp.a,title:"controls/Checkbox"},function(){var _useState=Object(hooks.c)(!1),_useState2=slicedToArray_default()(_useState,2),checked=_useState2[0],setChecked=_useState2[1];return Object(jsx_runtime.jsx)(Wisp.a,{enableDefaultElements:!1,children:Object(jsx_runtime.jsx)(Window.a,{id:"1",children:Object(jsx_runtime.jsx)(controls_Checkbox,{checked:checked,onClick:function(){return setChecked((function(prevState){return!prevState}))}})})})});CheckboxStory.displayName="CheckboxStory",CheckboxStory.story={name:"Checkbox"}},"./stories/controls/StatusBar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"StatusBarStory",(function(){return StatusBarStory})),__webpack_require__.d(__webpack_exports__,"WithResizeHandle",(function(){return WithResizeHandle}));__webpack_require__("./node_modules/react/index.js");var Wisp=__webpack_require__("./src/Wisp.tsx"),Window=__webpack_require__("./src/window/Window.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),windowResizeHandler=__webpack_require__("./src/window/handlers/windowResizeHandler.ts"),hooks=__webpack_require__("./src/windowManager/hooks.ts"),types=__webpack_require__("./src/windowManager/types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ResizeHandleElement=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.controls.ResizeHandle}}
`,ResizeHandle=function(_ref){var window=_ref.window,windowManager=Object(hooks.a)(),eventHandler=Object(windowResizeHandler.a)(windowManager,window);return Object(jsx_runtime.jsx)(ResizeHandleElement,{onMouseDown:function(e){return eventHandler(e,types.a.SE)}})};ResizeHandle.displayName="ResizeHandle";var StatusBar_ResizeHandle=ResizeHandle,StatusBarElement=styled_components_browser_esm.c.div`
  ${function(props){return props.theme.controls.StatusBar}}
`,StatusBar=function(_ref){var children=_ref.children,showResizeHandle=_ref.showResizeHandle,window=_ref.window;return Object(jsx_runtime.jsxs)(StatusBarElement,{children:[children,showResizeHandle&&Object(jsx_runtime.jsx)(StatusBar_ResizeHandle,{window:window})]})};StatusBar.displayName="StatusBar";var StatusBar_StatusBar=StatusBar,StatusBarStory=(__webpack_exports__.default={component:Wisp.a,title:"controls/StatusBar"},function(){return Object(jsx_runtime.jsx)(Wisp.a,{enableDefaultElements:!1,children:Object(jsx_runtime.jsx)(Window.a,{id:"1",children:Object(jsx_runtime.jsx)(StatusBar_StatusBar,{children:"Status bar"})})})});StatusBarStory.displayName="StatusBarStory",StatusBarStory.story={name:"StatusBar"};var WithResizeHandle=function(){return Object(jsx_runtime.jsx)(Wisp.a,{enableDefaultElements:!1,children:Object(jsx_runtime.jsx)(Window.a,{id:"1",children:Object(jsx_runtime.jsx)(StatusBar_StatusBar,{showResizeHandle:!0,children:"Status bar"})})})};WithResizeHandle.displayName="WithResizeHandle",WithResizeHandle.story={name:"StatusBar with resize handle"}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,2,3]]]);