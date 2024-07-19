"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[342],{"./stories/Basics.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HelloWorld:()=>HelloWorld,MultipleWindows:()=>MultipleWindows,NoDefaultElements:()=>NoDefaultElements,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Wisp.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/window/Window.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/elements/Desktop.tsx"),_src__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/window/MessageBox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.Z,title:"Wisp/Basics"},HelloWorld={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.R,{id:"hello world",title:"Hello World",icon:"wisp",children:"Check out Wisp"})}},NoDefaultElements={args:{enableDefaultElements:!1,enableVersionInfo:!1,enableWindowMinimize:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.Hi,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__._,{id:"warning",title:"Warning",children:"Warning!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__._,{id:"error",title:"Error",alertIcon:"error",children:"Error!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__._,{id:"hello world",title:"Hello World",icon:"wisp",alertIcon:"wisp",children:"Check out Wisp"})]})}},MultipleWindows={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__._,{id:"1",title:"Uno",children:"Alert!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_5__._,{id:"2",title:"Dos",children:"Warning!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src__WEBPACK_IMPORTED_MODULE_3__.R,{id:"3",title:"Tres",width:400,height:300,isMinimized:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Regular window"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.R,{id:"4",title:"Quatro",isResizable:!1,isMinimizable:!1,showAsTask:!1,children:"Not visible in task bar!"})]})}};HelloWorld.parameters={...HelloWorld.parameters,docs:{...HelloWorld.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <Window id="hello world" title="Hello World" icon="wisp">\n        Check out Wisp\n      </Window>\n  }\n}',...HelloWorld.parameters?.docs?.source}}},NoDefaultElements.parameters={...NoDefaultElements.parameters,docs:{...NoDefaultElements.parameters?.docs,source:{originalSource:'{\n  args: {\n    enableDefaultElements: false,\n    enableVersionInfo: false,\n    enableWindowMinimize: false,\n    children: <>\n        <Desktop />\n        <MessageBox id="warning" title="Warning">\n          Warning!\n        </MessageBox>\n        <MessageBox id="error" title="Error" alertIcon="error">\n          Error!\n        </MessageBox>\n        <MessageBox id="hello world" title="Hello World" icon="wisp" alertIcon="wisp">\n          Check out Wisp\n        </MessageBox>\n      </>\n  }\n}',...NoDefaultElements.parameters?.docs?.source}}},MultipleWindows.parameters={...MultipleWindows.parameters,docs:{...MultipleWindows.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <MessageBox id="1" title="Uno">\n          Alert!\n        </MessageBox>\n        <MessageBox id="2" title="Dos">\n          Warning!\n        </MessageBox>\n        <Window id="3" title="Tres" width={400} height={300} isMinimized={true}>\n          <p>Regular window</p>\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod\n            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim\n            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex\n            ea commodi consequat. Quis aute iure reprehenderit in voluptate\n            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\n            obcaecat cupiditat non proident, sunt in culpa qui officia deserunt\n            mollit anim id est laborum.\n          </p>\n        </Window>\n        <Window id="4" title="Quatro" isResizable={false} isMinimizable={false} showAsTask={false}>\n          Not visible in task bar!\n        </Window>\n      </>\n  }\n}',...MultipleWindows.parameters?.docs?.source}}};const __namedExportsOrder=["HelloWorld","NoDefaultElements","MultipleWindows"]},"./src/controls/AlertText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QP:()=>AlertText,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});const AlertText=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  ${props=>props.theme.controls.AlertText}
`,__WEBPACK_DEFAULT_EXPORT__=AlertText;try{AlertText.displayName="AlertText",AlertText.__docgenInfo={description:"",displayName:"AlertText",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/AlertText.tsx#AlertText"]={docgenInfo:AlertText.__docgenInfo,name:"AlertText",path:"src/controls/AlertText.tsx#AlertText"})}catch(__react_docgen_typescript_loader_error){}},"./src/controls/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>__WEBPACK_DEFAULT_EXPORT__,zx:()=>Button});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.ButtonWrapper}
`,ButtonElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
  ${props=>props.theme.controls.Button}
`,Button=({width,height,disabled,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonWrapper,{disabled,style:{width:`${width}px`,height:`${height}px`},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ButtonElement,{disabled,...rest})});Button.displayName="Button";const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/controls/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/window/MessageBox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>MessageBox});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Button=__webpack_require__("./src/controls/Button.tsx"),WindowContext=__webpack_require__("./src/window/WindowContext.tsx"),hooks=__webpack_require__("./src/windowManager/hooks.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledAlertButton=(0,styled_components_browser_esm.ZP)(Button.ZP)`
  ${props=>props.theme.controls.AlertButton}
`,AlertButton=props=>{const{id}=(0,WindowContext.zY)(),{closeWindow}=(0,hooks.S)(),onClick=props.onClick??(()=>closeWindow(id));return(0,jsx_runtime.jsx)(StyledAlertButton,{...props,onClick})};AlertButton.displayName="AlertButton";const controls_AlertButton=AlertButton;try{AlertButton.displayName="AlertButton",AlertButton.__docgenInfo={description:"",displayName:"AlertButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string | ComponentType<any>"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"string | ComponentType<any>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/AlertButton.tsx#AlertButton"]={docgenInfo:AlertButton.__docgenInfo,name:"AlertButton",path:"src/controls/AlertButton.tsx#AlertButton"})}catch(__react_docgen_typescript_loader_error){}const AlertContent=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.controls.AlertContent}
`,controls_AlertContent=AlertContent;try{AlertContent.displayName="AlertContent",AlertContent.__docgenInfo={description:"",displayName:"AlertContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/AlertContent.tsx#AlertContent"]={docgenInfo:AlertContent.__docgenInfo,name:"AlertContent",path:"src/controls/AlertContent.tsx#AlertContent"})}catch(__react_docgen_typescript_loader_error){}var AlertText=__webpack_require__("./src/controls/AlertText.tsx"),utils=__webpack_require__("./src/icons/utils.ts"),themeManager_hooks=__webpack_require__("./src/themeManager/hooks.ts"),Window=__webpack_require__("./src/window/Window.tsx");const AlertIconElement=styled_components_browser_esm.ZP.img`
  ${props=>props.theme.controls.AlertIcon}
`,AlertIcon=({icon})=>{const{theme}=(0,themeManager_hooks.H)(),resolvedIcon="string"==typeof icon?theme.icons[icon]:icon;if(!resolvedIcon)return null;const iconFile=(0,utils.Q)(resolvedIcon);return(0,jsx_runtime.jsx)(AlertIconElement,{src:iconFile,alt:"Alert icon"})};AlertIcon.displayName="AlertIcon";const MessageBox=({alertIcon="warning",buttonText="OK",onButtonClick,...windowProps})=>(0,jsx_runtime.jsxs)(Window.Z,{...windowProps,id:windowProps.id,title:windowProps.title,alwaysShowCloseButton:windowProps.alwaysShowCloseButton??!0,isClosable:windowProps.isClosable??!1,isMaximizable:windowProps.isMaximizable??!1,isMinimizable:windowProps.isMinimizable??!1,isResizable:windowProps.isResizable??!1,children:[(0,jsx_runtime.jsxs)(controls_AlertContent,{children:[(0,jsx_runtime.jsx)(AlertIcon,{icon:alertIcon}),(0,jsx_runtime.jsx)(AlertText.ZP,{children:windowProps.children})]}),(0,jsx_runtime.jsx)(controls_AlertButton,{onClick:onButtonClick,type:"button",children:buttonText})]});MessageBox.displayName="MessageBox";try{MessageBox.displayName="MessageBox",MessageBox.__docgenInfo={description:"",displayName:"MessageBox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},alwaysShowCloseButton:{defaultValue:null,description:"",name:"alwaysShowCloseButton",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | Icon"}},isClosable:{defaultValue:null,description:"",name:"isClosable",required:!1,type:{name:"boolean"}},isClosed:{defaultValue:null,description:"",name:"isClosed",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}},isInInitialAutomaticPosition:{defaultValue:null,description:"",name:"isInInitialAutomaticPosition",required:!1,type:{name:"boolean"}},isMaximizable:{defaultValue:null,description:"",name:"isMaximizable",required:!1,type:{name:"boolean"}},isMaximized:{defaultValue:null,description:"",name:"isMaximized",required:!1,type:{name:"boolean"}},isMinimizable:{defaultValue:null,description:"",name:"isMinimizable",required:!1,type:{name:"boolean"}},isMinimized:{defaultValue:null,description:"",name:"isMinimized",required:!1,type:{name:"boolean"}},isResizable:{defaultValue:null,description:"",name:"isResizable",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},positionX:{defaultValue:null,description:"",name:"positionX",required:!1,type:{name:"number"}},positionY:{defaultValue:null,description:"",name:"positionY",required:!1,type:{name:"number"}},showAsTask:{defaultValue:null,description:"",name:"showAsTask",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},alertIcon:{defaultValue:{value:"warning"},description:"",name:"alertIcon",required:!1,type:{name:"string | Icon"}},buttonText:{defaultValue:{value:"OK"},description:"",name:"buttonText",required:!1,type:{name:"string"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/MessageBox.tsx#MessageBox"]={docgenInfo:MessageBox.__docgenInfo,name:"MessageBox",path:"src/window/MessageBox.tsx#MessageBox"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/use-resize-observer/dist/bundle.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useResizeObserver});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function extractSize(entry,boxProp,sizeType){return entry[boxProp]?entry[boxProp][0]?entry[boxProp][0][sizeType]:entry[boxProp][sizeType]:"contentBoxSize"===boxProp?entry.contentRect["inlineSize"===sizeType?"width":"height"]:void 0}function useResizeObserver(opts){void 0===opts&&(opts={});var onResize=opts.onResize,onResizeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);onResizeRef.current=onResize;var round=opts.round||Math.round,resizeObserverRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:void 0,height:void 0}),size=_useState[0],setSize=_useState[1],didUnmount=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return didUnmount.current=!1,function(){didUnmount.current=!0}}),[]);var previous=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({width:void 0,height:void 0}),refCallback=function useResolvedElement(subscriber,refOrElement){var lastReportRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),refOrElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);refOrElementRef.current=refOrElement;var cbElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){evaluateSubscription()}));var evaluateSubscription=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){var cbElement=cbElementRef.current,refOrElement=refOrElementRef.current,element=cbElement||(refOrElement?refOrElement instanceof Element?refOrElement:refOrElement.current:null);lastReportRef.current&&lastReportRef.current.element===element&&lastReportRef.current.subscriber===subscriber||(lastReportRef.current&&lastReportRef.current.cleanup&&lastReportRef.current.cleanup(),lastReportRef.current={element,subscriber,cleanup:element?subscriber(element):void 0})}),[subscriber]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return function(){lastReportRef.current&&lastReportRef.current.cleanup&&(lastReportRef.current.cleanup(),lastReportRef.current=null)}}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){cbElementRef.current=element,evaluateSubscription()}),[evaluateSubscription])}((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){return resizeObserverRef.current&&resizeObserverRef.current.box===opts.box&&resizeObserverRef.current.round===round||(resizeObserverRef.current={box:opts.box,round,instance:new ResizeObserver((function(entries){var entry=entries[0],boxProp="border-box"===opts.box?"borderBoxSize":"device-pixel-content-box"===opts.box?"devicePixelContentBoxSize":"contentBoxSize",reportedWidth=extractSize(entry,boxProp,"inlineSize"),reportedHeight=extractSize(entry,boxProp,"blockSize"),newWidth=reportedWidth?round(reportedWidth):void 0,newHeight=reportedHeight?round(reportedHeight):void 0;if(previous.current.width!==newWidth||previous.current.height!==newHeight){var newSize={width:newWidth,height:newHeight};previous.current.width=newWidth,previous.current.height=newHeight,onResizeRef.current?onResizeRef.current(newSize):didUnmount.current||setSize(newSize)}}))}),resizeObserverRef.current.instance.observe(element,{box:opts.box}),function(){resizeObserverRef.current&&resizeObserverRef.current.instance.unobserve(element)}}),[opts.box,round]),opts.ref);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{ref:refCallback,width:size.width,height:size.height}}),[refCallback,size.width,size.height])}}}]);
//# sourceMappingURL=Basics-stories.0c620cae.iframe.bundle.js.map