"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[706],{"./stories/controls/AddressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/controls/AddressBar.tsx"),_decorators_Argon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/decorators/Argon.tsx"),_decorators_ControlStoryDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./stories/decorators/ControlStoryDecorator.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_src_index__WEBPACK_IMPORTED_MODULE_0__.Z,decorators:[_decorators_ControlStoryDecorator__WEBPACK_IMPORTED_MODULE_1__.Z],tags:["autodocs"]},Default={args:{value:"https://www.google.com/"},parameters:(0,_decorators_Argon__WEBPACK_IMPORTED_MODULE_2__.ZP)("value","onChange","")},WithLabel={args:{children:"Address:",value:"https://www.google.com/"},parameters:(0,_decorators_Argon__WEBPACK_IMPORTED_MODULE_2__.ZP)("value","onChange","")};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'https://www.google.com/'\n  },\n  parameters: argon('value', 'onChange', '')\n}",...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Address:',\n    value: 'https://www.google.com/'\n  },\n  parameters: argon('value', 'onChange', '')\n}",...WithLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel"]},"./src/controls/AddressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const AddressBarInput=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.input`
  ${props=>props.theme.controls.AddressBarInput}
`,AddressBarElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.AddressBar}
`,AddressBar=_ref=>{let{children,value,disabled,onChange}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(AddressBarElement,{children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AddressBarInput,{value,disabled,onChange:event=>onChange(event.target.value)})]})};AddressBar.displayName="AddressBar";const __WEBPACK_DEFAULT_EXPORT__=AddressBar;try{AddressBar.displayName="AddressBar",AddressBar.__docgenInfo={description:"",displayName:"AddressBar",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: string) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/AddressBar.tsx#AddressBar"]={docgenInfo:AddressBar.__docgenInfo,name:"AddressBar",path:"src/controls/AddressBar.tsx#AddressBar"})}catch(__react_docgen_typescript_loader_error){}},"./stories/decorators/ControlStoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,b:()=>buildControlStoryDecorator});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Wisp.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/elements/Desktop.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/window/Window.tsx"),_src_themes_default_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/default/theme.ts"),_src_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const buildControlStoryDecorator=_ref=>{let{width,height}=_ref;return(Story,context)=>"docs"===context.viewMode?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_2__.f6,{theme:_src_themes_default_theme__WEBPACK_IMPORTED_MODULE_3__.Z,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__.WU,{value:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_index__WEBPACK_IMPORTED_MODULE_5__.Z,{enableVersionInfo:!1,enableWindowMinimize:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_6__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_7__.Z,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]})},__WEBPACK_DEFAULT_EXPORT__=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/decorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"stories/decorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=controls-AddressBar-stories.606734e6.iframe.bundle.js.map