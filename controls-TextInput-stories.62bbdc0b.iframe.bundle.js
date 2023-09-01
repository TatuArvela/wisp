"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[718],{"./stories/controls/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInput_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ControlWrapper=__webpack_require__("./src/controls/ControlWrapper.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInputWrapper=(0,styled_components_browser_esm.ZP)(ControlWrapper.Z)`
  ${props=>props.theme.controls.TextInputWrapper}
`,TextInputLabel=styled_components_browser_esm.ZP.label`
  ${props=>props.theme.controls.TextInputLabel}
`,TextInputElement=styled_components_browser_esm.ZP.input`
  ${props=>props.theme.controls.TextInputElement}
`,TextInput=({disabled,inlineLabel,label,onChange,value})=>(0,jsx_runtime.jsxs)(TextInputWrapper,{inlineLabel,children:[label&&(0,jsx_runtime.jsx)(TextInputLabel,{disabled,children:label}),(0,jsx_runtime.jsx)(TextInputElement,{disabled,value,onChange:event=>onChange(event.target.value)})]});TextInput.displayName="TextInput";try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},inlineLabel:{defaultValue:null,description:"",name:"inlineLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/controls/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}var ControlStoryDecorator=__webpack_require__("./src/storyDecorators/ControlStoryDecorator.tsx"),argon=__webpack_require__("./src/storyDecorators/argon.tsx");const TextInput_stories={component:TextInput,decorators:[ControlStoryDecorator.s],tags:["autodocs"]},Default={args:{label:"Feedback:",inlineLabel:!1},parameters:(0,argon.R)("value","onChange","")};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Feedback:',\n    inlineLabel: false\n  },\n  parameters: argon('value', 'onChange', '')\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/controls/ControlWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const ControlWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  ${props=>props.theme.controls.ControlWrapper}
`,__WEBPACK_DEFAULT_EXPORT__=ControlWrapper;try{ControlWrapper.displayName="ControlWrapper",ControlWrapper.__docgenInfo={description:"",displayName:"ControlWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},inlineLabel:{defaultValue:null,description:"",name:"inlineLabel",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/ControlWrapper.tsx#ControlWrapper"]={docgenInfo:ControlWrapper.__docgenInfo,name:"ControlWrapper",path:"src/controls/ControlWrapper.tsx#ControlWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/ControlStoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>buildControlStoryDecorator,s:()=>ControlStoryDecorator});__webpack_require__("./node_modules/react/index.js");var _ConfigContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ConfigContext.tsx"),_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Wisp.tsx"),_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/elements/Desktop.tsx"),_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/window/Window.tsx"),_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themeManager/ThemeManager.tsx"),_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const buildControlStoryDecorator=({width,height})=>(Story,context)=>"docs"===context.viewMode?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ConfigContext__WEBPACK_IMPORTED_MODULE_2__.iV,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__.WU,{value:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.Z,{enableVersionInfo:!1,enableWindowMinimize:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_7__.R,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]}),ControlStoryDecorator=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"src/storyDecorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=controls-TextInput-stories.62bbdc0b.iframe.bundle.js.map