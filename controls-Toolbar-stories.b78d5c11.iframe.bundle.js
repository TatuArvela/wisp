"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[53],{"./stories/controls/Toolbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/controls/Toolbar.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storyDecorators/controlStory.tsx"),_src__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/controls/ToolbarButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.o,decorators:[_src__WEBPACK_IMPORTED_MODULE_3__.s],tags:["autodocs"]},Default={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.hA,{label:"Action"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_4__.hA,{icon:"wisp"})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <ToolbarButton label="Action" />\n        <ToolbarButton icon="wisp" />\n      </>\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/controls/Toolbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Toolbar});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToolbarElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.Toolbar}
`,Toolbar=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ToolbarElement,{children});Toolbar.displayName="Toolbar";try{Toolbar.displayName="Toolbar",Toolbar.__docgenInfo={description:"",displayName:"Toolbar",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/Toolbar.tsx#Toolbar"]={docgenInfo:Toolbar.__docgenInfo,name:"Toolbar",path:"src/controls/Toolbar.tsx#Toolbar"})}catch(__react_docgen_typescript_loader_error){}},"./src/controls/ToolbarButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hA:()=>ToolbarButton});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_icons_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/icons/utils.ts"),_themeManager_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themeManager/hooks.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToolbarButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.ToolbarButtonWrapper}
`,ToolbarButtonLabel=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.ToolbarButtonLabel}
`,ToolbarButtonIconElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.img`
  ${props=>props.theme.controls.ToolbarButtonIcon}
`,ToolbarButtonIcon=({icon})=>{const{theme}=(0,_themeManager_hooks__WEBPACK_IMPORTED_MODULE_3__.H)(),resolvedIcon="string"==typeof icon?theme.icons[icon]:icon;if(!resolvedIcon)return null;const iconFile=(0,_icons_utils__WEBPACK_IMPORTED_MODULE_4__.Q)(resolvedIcon);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ToolbarButtonIconElement,{src:iconFile,alt:"Window icon"})};ToolbarButtonIcon.displayName="ToolbarButtonIcon";const ToolbarButtonElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.button`
  ${props=>props.theme.controls.ToolbarButton}
`,ToolbarButton=({disabled,icon,label,...rest})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ToolbarButtonWrapper,{disabled,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(ToolbarButtonElement,{disabled,...rest,children:[void 0!==icon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ToolbarButtonIcon,{icon}),label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ToolbarButtonLabel,{children:label})]})});ToolbarButton.displayName="ToolbarButton";try{ToolbarButton.displayName="ToolbarButton",ToolbarButton.__docgenInfo={description:"",displayName:"ToolbarButton",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Icon"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/ToolbarButton.tsx#ToolbarButton"]={docgenInfo:ToolbarButton.__docgenInfo,name:"ToolbarButton",path:"src/controls/ToolbarButton.tsx#ToolbarButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/controlStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>buildControlStoryDecorator,s:()=>ControlStoryDecorator});__webpack_require__("./node_modules/react/index.js");var _ConfigContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ConfigContext.tsx"),_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Wisp.tsx"),_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/elements/Desktop.tsx"),_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/window/Window.tsx"),_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themeManager/ThemeManager.tsx"),_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const buildControlStoryDecorator=({width,height})=>(Story,context)=>"docs"===context.viewMode?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ConfigContext__WEBPACK_IMPORTED_MODULE_2__.iV,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__.WU,{value:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.Z,{enableVersionInfo:!1,enableWindowMinimize:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_7__.R,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]}),ControlStoryDecorator=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=controls-Toolbar-stories.b78d5c11.iframe.bundle.js.map