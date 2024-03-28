"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[221],{"./stories/controls/StatusBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithResizeHandle:()=>WithResizeHandle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/controls/StatusBar.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storyDecorators/controlStory.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/controls/StatusBarSection.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.A_,decorators:[_src__WEBPACK_IMPORTED_MODULE_3__.s],tags:["autodocs"]},Default={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.V4,{children:"Status bar"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.V4,{children:"Yes"})]})}},WithResizeHandle={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.V4,{children:"Status bar"}),showResizeHandle:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <StatusBarSection>Status bar</StatusBarSection>\n        <StatusBarSection>Yes</StatusBarSection>\n      </>\n  }\n}",...Default.parameters?.docs?.source}}},WithResizeHandle.parameters={...WithResizeHandle.parameters,docs:{...WithResizeHandle.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <StatusBarSection>Status bar</StatusBarSection>,\n    showResizeHandle: true\n  }\n}",...WithResizeHandle.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithResizeHandle"]},"./src/controls/StatusBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A_:()=>StatusBar});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_window__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),_window_handlers_windowResizeHandler__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/window/handlers/windowResizeHandler.ts"),_windowManager_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/windowManager/hooks.ts"),_windowManager_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/windowManager/types.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StatusBarElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.StatusBar}
`,StatusBar=({children,showResizeHandle})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(StatusBarElement,{children:[children,showResizeHandle&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ResizeHandle,{})]});StatusBar.displayName="StatusBar";const ResizeHandleElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.ResizeHandle}
`,ResizeHandle=()=>{const windowManager=(0,_windowManager_hooks__WEBPACK_IMPORTED_MODULE_3__.S)(),window=(0,_window__WEBPACK_IMPORTED_MODULE_4__.zY)(),eventHandler=(0,_window_handlers_windowResizeHandler__WEBPACK_IMPORTED_MODULE_5__.X)(windowManager,window);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ResizeHandleElement,{onMouseDown:e=>eventHandler(e,_windowManager_types__WEBPACK_IMPORTED_MODULE_6__.N.SE)})};ResizeHandle.displayName="ResizeHandle";try{StatusBar.displayName="StatusBar",StatusBar.__docgenInfo={description:"",displayName:"StatusBar",props:{showResizeHandle:{defaultValue:null,description:"",name:"showResizeHandle",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/StatusBar.tsx#StatusBar"]={docgenInfo:StatusBar.__docgenInfo,name:"StatusBar",path:"src/controls/StatusBar.tsx#StatusBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/controls/StatusBarSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V4:()=>StatusBarSection});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StatusBarSectionElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.StatusBarSection}
`,StatusBarSection=({width,children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StatusBarSectionElement,{width,style:{width},children});StatusBarSection.displayName="StatusBarSection";try{StatusBarSection.displayName="StatusBarSection",StatusBarSection.__docgenInfo={description:"",displayName:"StatusBarSection",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/StatusBarSection.tsx#StatusBarSection"]={docgenInfo:StatusBarSection.__docgenInfo,name:"StatusBarSection",path:"src/controls/StatusBarSection.tsx#StatusBarSection"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/controlStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>buildControlStoryDecorator,s:()=>ControlStoryDecorator});__webpack_require__("./node_modules/react/index.js");var _ConfigContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ConfigContext.tsx"),_elements__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/elements/Desktop.tsx"),_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themeManager/ThemeManager.tsx"),_window__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),_window__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/window/Window.tsx"),_Wisp__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Wisp.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const buildControlStoryDecorator=({width,height})=>(Story,context)=>"docs"===context.viewMode?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ConfigContext__WEBPACK_IMPORTED_MODULE_2__.iV,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_window__WEBPACK_IMPORTED_MODULE_4__.WU,{value:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_Wisp__WEBPACK_IMPORTED_MODULE_5__.Z,{enableVersionInfo:!1,enableWindowMinimize:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_elements__WEBPACK_IMPORTED_MODULE_6__.Hi,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_window__WEBPACK_IMPORTED_MODULE_7__.R,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]}),ControlStoryDecorator=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=controls-StatusBar-stories.31ede81a.iframe.bundle.js.map