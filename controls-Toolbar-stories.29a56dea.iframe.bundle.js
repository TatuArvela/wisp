"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[611],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./stories/controls/Toolbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/controls/Toolbar.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storyDecorators/controlStory.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/controls/ToolbarButton.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_1__.M7,decorators:[_src__WEBPACK_IMPORTED_MODULE_2__.k],tags:["autodocs"]},Default={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.IB,{label:"Action"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src__WEBPACK_IMPORTED_MODULE_3__.IB,{icon:"wisp"}))}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <ToolbarButton label="Action" />\n        <ToolbarButton icon="wisp" />\n      </>\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/controls/Toolbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M7:()=>Toolbar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ToolbarElement=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  ${props=>props.theme.controls.ToolbarElement}
`,Toolbar=({children})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToolbarElement,null,children);try{Toolbar.displayName="Toolbar",Toolbar.__docgenInfo={description:"",displayName:"Toolbar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/Toolbar.tsx#Toolbar"]={docgenInfo:Toolbar.__docgenInfo,name:"Toolbar",path:"src/controls/Toolbar.tsx#Toolbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/controls/ToolbarButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IB:()=>ToolbarButton});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_icons_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/icons/utils.ts"),_themeManager_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themeManager/hooks.ts");const ToolbarButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  ${props=>props.theme.controls.ToolbarButtonWrapper}
`,ToolbarButtonLabel=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  ${props=>props.theme.controls.ToolbarButtonLabel}
`,ToolbarButtonIconElement=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.img`
  ${props=>props.theme.controls.ToolbarButtonIconElement}
`,ToolbarButtonIcon=({icon})=>{const{theme}=(0,_themeManager_hooks__WEBPACK_IMPORTED_MODULE_2__.W)(),resolvedIcon="string"==typeof icon?theme.icons[icon]:icon;if(!resolvedIcon)return null;const iconFile=(0,_icons_utils__WEBPACK_IMPORTED_MODULE_3__.s)(resolvedIcon);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToolbarButtonIconElement,{src:iconFile,alt:"Window icon"})},ToolbarButtonElement=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.button`
  ${props=>props.theme.controls.ToolbarButtonElement}
`,ToolbarButton=({disabled,icon,label,...rest})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToolbarButtonWrapper,{disabled},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToolbarButtonElement,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.A)({disabled},rest),void 0!==icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToolbarButtonIcon,{icon}),label&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ToolbarButtonLabel,null,label)));try{ToolbarButton.displayName="ToolbarButton",ToolbarButton.__docgenInfo={description:"",displayName:"ToolbarButton",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Icon"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:ToolbarButton.__docgenInfo,name:"ToolbarButton",path:"src/controls/ToolbarButton.tsx#ToolbarButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/controlStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>buildControlStoryDecorator,k:()=>ControlStoryDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ConfigContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ConfigContext.tsx"),_elements__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/elements/Desktop.tsx"),_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themeManager/ThemeManager.tsx"),_window__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/window/WindowContext.tsx"),_window__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/window/Window.tsx"),_Wisp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Wisp.tsx");const buildControlStoryDecorator=({width,height})=>(Story,context)=>"docs"===context.viewMode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigContext__WEBPACK_IMPORTED_MODULE_1__.sG,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_window__WEBPACK_IMPORTED_MODULE_3__.IF,{value:{height,width}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wisp__WEBPACK_IMPORTED_MODULE_4__.A,{enableVersionInfo:!1,enableWindowMinimize:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_5__.X8,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_window__WEBPACK_IMPORTED_MODULE_6__.p,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))),ControlStoryDecorator=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/use-resize-observer/dist/bundle.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useResizeObserver});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function extractSize(entry,boxProp,sizeType){return entry[boxProp]?entry[boxProp][0]?entry[boxProp][0][sizeType]:entry[boxProp][sizeType]:"contentBoxSize"===boxProp?entry.contentRect["inlineSize"===sizeType?"width":"height"]:void 0}function useResizeObserver(opts){void 0===opts&&(opts={});var onResize=opts.onResize,onResizeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);onResizeRef.current=onResize;var round=opts.round||Math.round,resizeObserverRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:void 0,height:void 0}),size=_useState[0],setSize=_useState[1],didUnmount=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return didUnmount.current=!1,function(){didUnmount.current=!0}}),[]);var previous=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({width:void 0,height:void 0}),refCallback=function useResolvedElement(subscriber,refOrElement){var lastReportRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),refOrElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);refOrElementRef.current=refOrElement;var cbElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){evaluateSubscription()}));var evaluateSubscription=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){var cbElement=cbElementRef.current,refOrElement=refOrElementRef.current,element=cbElement||(refOrElement?refOrElement instanceof Element?refOrElement:refOrElement.current:null);lastReportRef.current&&lastReportRef.current.element===element&&lastReportRef.current.subscriber===subscriber||(lastReportRef.current&&lastReportRef.current.cleanup&&lastReportRef.current.cleanup(),lastReportRef.current={element,subscriber,cleanup:element?subscriber(element):void 0})}),[subscriber]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return function(){lastReportRef.current&&lastReportRef.current.cleanup&&(lastReportRef.current.cleanup(),lastReportRef.current=null)}}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){cbElementRef.current=element,evaluateSubscription()}),[evaluateSubscription])}((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){return resizeObserverRef.current&&resizeObserverRef.current.box===opts.box&&resizeObserverRef.current.round===round||(resizeObserverRef.current={box:opts.box,round,instance:new ResizeObserver((function(entries){var entry=entries[0],boxProp="border-box"===opts.box?"borderBoxSize":"device-pixel-content-box"===opts.box?"devicePixelContentBoxSize":"contentBoxSize",reportedWidth=extractSize(entry,boxProp,"inlineSize"),reportedHeight=extractSize(entry,boxProp,"blockSize"),newWidth=reportedWidth?round(reportedWidth):void 0,newHeight=reportedHeight?round(reportedHeight):void 0;if(previous.current.width!==newWidth||previous.current.height!==newHeight){var newSize={width:newWidth,height:newHeight};previous.current.width=newWidth,previous.current.height=newHeight,onResizeRef.current?onResizeRef.current(newSize):didUnmount.current||setSize(newSize)}}))}),resizeObserverRef.current.instance.observe(element,{box:opts.box}),function(){resizeObserverRef.current&&resizeObserverRef.current.instance.unobserve(element)}}),[opts.box,round]),opts.ref);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{ref:refCallback,width:size.width,height:size.height}}),[refCallback,size.width,size.height])}}}]);
//# sourceMappingURL=controls-Toolbar-stories.29a56dea.iframe.bundle.js.map