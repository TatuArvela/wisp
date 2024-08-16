"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[250],{"./stories/controls/ProgressBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Indeterminate:()=>Indeterminate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _src__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/controls/ProgressBar.tsx"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storyDecorators/controlStory.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_src__WEBPACK_IMPORTED_MODULE_0__.z2,decorators:[_src__WEBPACK_IMPORTED_MODULE_1__.k],tags:["autodocs"]},Default={args:{max:100,value:50,disabled:void 0,variant:"block"}},Indeterminate={args:{max:void 0,value:void 0,disabled:void 0}},__namedExportsOrder=["Default","Indeterminate"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    max: 100,\n    value: 50,\n    disabled: undefined,\n    variant: 'block'\n  }\n}",...Default.parameters?.docs?.source}}},Indeterminate.parameters={...Indeterminate.parameters,docs:{...Indeterminate.parameters?.docs,source:{originalSource:"{\n  args: {\n    max: undefined,\n    value: undefined,\n    disabled: undefined\n  }\n}",...Indeterminate.parameters?.docs?.source}}}},"./src/controls/ProgressBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z2:()=>ProgressBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),use_resize_observer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/use-resize-observer/dist/bundle.esm.js");const ProgressBarFill=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  ${props=>props.theme.controls.ProgressBarFill}
`,ProgressBarElement=styled_components__WEBPACK_IMPORTED_MODULE_1__.Ay.div`
  ${props=>props.theme.controls.ProgressBarElement}
`,getStepWidth=current=>{if(!current)return;const stepWidthValue=getComputedStyle(current).getPropertyValue("--step-width");return stepWidthValue?parseInt(stepWidthValue.replace("px","")):void 0},ProgressBar=({bordered=!0,disabled=!1,max=1,value,variant="block"})=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),{width:elementWidth=1}=(0,use_resize_observer__WEBPACK_IMPORTED_MODULE_2__.A)({ref}),[width,setWidth]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),isIndeterminate=void 0===value||void 0===max;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setWidth((({elementWidth,max,stepWidth=1,value,variant})=>{const ratio=void 0===value||void 0===max?.5:value/max;if("block"===variant)return 100*ratio+"%";let calculatedWidth=elementWidth*ratio;return calculatedWidth=Math.floor(calculatedWidth/stepWidth)*stepWidth,calculatedWidth=Math.min(calculatedWidth,elementWidth),`${calculatedWidth}px`})({elementWidth,max,stepWidth:getStepWidth(ref.current),value,variant}))}),[elementWidth,isIndeterminate,max,value,variant]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProgressBarElement,{bordered,disabled,ref},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProgressBarFill,{disabled,isIndeterminate,variant,style:{"--width":width}}))};try{ProgressBar.displayName="ProgressBar",ProgressBar.__docgenInfo={description:"",displayName:"ProgressBar",props:{bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"1"},description:"",name:"max",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},variant:{defaultValue:{value:"block"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"steps"'},{value:'"block"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/ProgressBar.tsx#ProgressBar"]={docgenInfo:ProgressBar.__docgenInfo,name:"ProgressBar",path:"src/controls/ProgressBar.tsx#ProgressBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/controlStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>buildControlStoryDecorator,k:()=>ControlStoryDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ConfigContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ConfigContext.tsx"),_elements__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/elements/Desktop.tsx"),_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themeManager/ThemeManager.tsx"),_window__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/window/WindowContext.tsx"),_window__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/window/Window.tsx"),_Wisp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Wisp.tsx");const buildControlStoryDecorator=({width,height})=>(Story,context)=>"docs"===context.viewMode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigContext__WEBPACK_IMPORTED_MODULE_1__.sG,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_window__WEBPACK_IMPORTED_MODULE_3__.IF,{value:{height,width}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wisp__WEBPACK_IMPORTED_MODULE_4__.U,{enableVersionInfo:!1,enableWindowMinimize:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_5__.X8,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_window__WEBPACK_IMPORTED_MODULE_6__.p,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))),ControlStoryDecorator=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=controls-ProgressBar-stories.6d134579.iframe.bundle.js.map