"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[718],{"./stories/controls/TextInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextInput_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ControlWrapper=__webpack_require__("./src/controls/ControlWrapper.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextInputWrapper=(0,styled_components_browser_esm.ZP)(ControlWrapper.Z)`
  ${props=>props.theme.controls.TextInputWrapper}
`,TextInputLabel=styled_components_browser_esm.ZP.label`
  ${props=>props.theme.controls.TextInputLabel}
`,TextInputElement=styled_components_browser_esm.ZP.input`
  ${props=>props.theme.controls.TextInputElement}
`,TextInput=_ref=>{let{inlineLabel,label,onChange,value}=_ref;return(0,jsx_runtime.jsxs)(TextInputWrapper,{inlineLabel,children:[label&&(0,jsx_runtime.jsx)(TextInputLabel,{children:label}),(0,jsx_runtime.jsx)(TextInputElement,{value,onChange:event=>onChange(event.target.value)})]})};TextInput.displayName="TextInput";const controls_TextInput=TextInput;try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},inlineLabel:{defaultValue:null,description:"",name:"inlineLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"src/controls/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}var Argon=__webpack_require__("./stories/decorators/Argon.tsx");const TextInput_stories={component:controls_TextInput,decorators:[__webpack_require__("./stories/decorators/ControlStoryDecorator.tsx").Z],tags:["autodocs"]},Default={args:{label:"Feedback:",inlineLabel:!1},parameters:(0,Argon.N)("value","onChange","")};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Feedback:',\n    inlineLabel: false\n  },\n  parameters: argonParameters('value', 'onChange', '')\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/controls/ControlWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const ControlWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  ${props=>props.theme.controls.ControlWrapper}
`,__WEBPACK_DEFAULT_EXPORT__=ControlWrapper;try{ControlWrapper.displayName="ControlWrapper",ControlWrapper.__docgenInfo={description:"",displayName:"ControlWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},inlineLabel:{defaultValue:null,description:"",name:"inlineLabel",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/ControlWrapper.tsx#ControlWrapper"]={docgenInfo:ControlWrapper.__docgenInfo,name:"ControlWrapper",path:"src/controls/ControlWrapper.tsx#ControlWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./stories/decorators/ControlStoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,b:()=>buildControlStoryDecorator});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Wisp.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/elements/Desktop.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/window/Window.tsx"),_src_themes_default_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/default/theme.ts"),_src_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const buildControlStoryDecorator=_ref=>{let{width,height}=_ref;return(Story,context)=>"docs"===context.viewMode?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_2__.f6,{theme:_src_themes_default_theme__WEBPACK_IMPORTED_MODULE_3__.Z,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__.WU,{value:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_index__WEBPACK_IMPORTED_MODULE_5__.Z,{enableVersionInfo:!1,enableWindowMinimize:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_6__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_7__.Z,{id:"1",initialState:{width:width??300,height:height??160,isClosable:!1,isMaximizable:!1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]})},__WEBPACK_DEFAULT_EXPORT__=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/decorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"stories/decorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=controls-TextInput-stories.d83693cd.iframe.bundle.js.map