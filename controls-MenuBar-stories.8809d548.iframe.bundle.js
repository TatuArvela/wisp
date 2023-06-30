"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[357],{"./stories/controls/MenuBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/controls/MenuBar.tsx"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storyDecorators/ControlStoryDecorator.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_2__.j_,decorators:[_src__WEBPACK_IMPORTED_MODULE_3__.s],tags:["autodocs"]},Default={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{height:"100%",display:"flex",padding:"0px 4px",alignItems:"center"},children:"Example"})}),isThrobberAnimated:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <div style={{\n        height: '100%',\n        display: 'flex',\n        padding: '0px 4px',\n        alignItems: 'center'\n      }}>\n          Example\n        </div>\n      </>,\n    isThrobberAnimated: true\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/controls/MenuBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j_:()=>MenuBar});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuBarElement=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.MenuBar}
`,MenuBar=_ref=>{let{children,isThrobberAnimated}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(MenuBarElement,{children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MenuBarThrobber,{isAnimated:isThrobberAnimated})]})};MenuBar.displayName="MenuBar";const MenuBarThrobber=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.div`
  ${props=>props.theme.controls.MenuBarThrobber}
`;try{MenuBar.displayName="MenuBar",MenuBar.__docgenInfo={description:"",displayName:"MenuBar",props:{isThrobberAnimated:{defaultValue:null,description:"",name:"isThrobberAnimated",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/MenuBar.tsx#MenuBar"]={docgenInfo:MenuBar.__docgenInfo,name:"MenuBar",path:"src/controls/MenuBar.tsx#MenuBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/ControlStoryDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>buildControlStoryDecorator,s:()=>ControlStoryDecorator});__webpack_require__("./node_modules/react/index.js");var _ConfigContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/ConfigContext.tsx"),_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/Wisp.tsx"),_index__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/elements/Desktop.tsx"),_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/window/Window.tsx"),_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themeManager/ThemeManager.tsx"),_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const buildControlStoryDecorator=_ref=>{let{width,height}=_ref;return(Story,context)=>"docs"===context.viewMode?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_ConfigContext__WEBPACK_IMPORTED_MODULE_2__.iV,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_3__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__.WU,{value:{height,width},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_5__.Z,{enableVersionInfo:!1,enableWindowMinimize:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_6__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_7__.R,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]})},ControlStoryDecorator=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"src/storyDecorators/ControlStoryDecorator.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=controls-MenuBar-stories.8809d548.iframe.bundle.js.map