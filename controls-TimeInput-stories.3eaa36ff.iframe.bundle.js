"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[59],{"./stories/controls/TimeInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TimeInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ControlWrapper=__webpack_require__("./src/controls/ControlWrapper.tsx");const TimeInputWrapper=(0,styled_components_browser_esm.Ay)(ControlWrapper.A)`
  ${props=>props.theme.controls.TimeInputWrapper}
`,TimeInputLabel=styled_components_browser_esm.Ay.label`
  ${props=>props.theme.controls.TimeInputLabel}
`,TimeInputControl=styled_components_browser_esm.Ay.div`
  ${props=>props.theme.controls.TimeInputControl}
`,TimeInputField=styled_components_browser_esm.Ay.div`
  ${props=>props.theme.controls.TimeInputField}
`,TimeInputValue=styled_components_browser_esm.Ay.input`
  ${props=>props.theme.controls.TimeInputValue}
`,TimeInputSeparator=styled_components_browser_esm.Ay.div`
  ${props=>props.theme.controls.TimeInputSeparator}
`,TimeInputButtons=styled_components_browser_esm.Ay.div`
  ${props=>props.theme.controls.TimeInputButtons}
`,TimeInputDecreaseButton=styled_components_browser_esm.Ay.button`
  ${props=>props.theme.controls.TimeInputDecreaseButton}
`,TimeInputIncreaseButton=styled_components_browser_esm.Ay.button`
  ${props=>props.theme.controls.TimeInputIncreaseButton}
`,TimeInput=({disabled,inlineLabel,label,onChange,value})=>{const[activeField,setActiveField]=(0,react.useState)("hours"),[activeButton,setActiveButton]=(0,react.useState)(),[activeButtonTimeout,setActiveButtonTimeout]=(0,react.useState)(),hoursRef=(0,react.useRef)(null),minutesRef=(0,react.useRef)(null),increaseButtonRef=(0,react.useRef)(null),decreaseButtonRef=(0,react.useRef)(null),hoursDisplay=value?.hours.toString().padStart(2,"0")??"00",minutesDisplay=value?.minutes.toString().padStart(2,"0")??"00",buttonClickHandler=button=>()=>{disabled||(onChange(changeTime(value,activeField,"increase"===button?1:-1)),setActiveButton(button),clearTimeout(activeButtonTimeout),setActiveButtonTimeout(setTimeout((()=>{setActiveButton(void 0)}),200)))},changeHandler=field=>e=>{disabled||onChange({...value,[field]:parseInt(e.target.value.substr(-2))})},blurHandler=()=>{disabled||value&&onChange(constrainTime(value))},keyDownHandler=e=>{disabled||("ArrowUp"===e.key&&(e.preventDefault(),increaseButtonRef.current?.click()),"ArrowDown"===e.key&&(e.preventDefault(),decreaseButtonRef.current?.click()))};return react.createElement(TimeInputWrapper,{inlineLabel},label&&react.createElement(TimeInputLabel,{disabled},label),react.createElement(TimeInputControl,null,react.createElement(TimeInputField,{disabled},react.createElement(TimeInputValue,{disabled,onBlur:blurHandler,onChange:changeHandler("hours"),onFocus:()=>setActiveField("hours"),onKeyDown:keyDownHandler,ref:hoursRef,value:hoursDisplay}),react.createElement(TimeInputSeparator,null),react.createElement(TimeInputValue,{disabled,onBlur:blurHandler,onChange:changeHandler("minutes"),onFocus:()=>setActiveField("minutes"),onKeyDown:keyDownHandler,ref:minutesRef,value:minutesDisplay})),react.createElement(TimeInputButtons,null,react.createElement(TimeInputIncreaseButton,{disabled,ref:increaseButtonRef,onClick:buttonClickHandler("increase"),active:"increase"===activeButton,tabIndex:-1}),react.createElement(TimeInputDecreaseButton,{disabled,ref:decreaseButtonRef,onClick:buttonClickHandler("decrease"),active:"decrease"===activeButton,tabIndex:-1}))))},constrainTime=time=>({hours:Math.max(0,Math.min(time.hours,24)),minutes:time.hours>=24||time.hours<0?0:Math.max(0,Math.min(time.minutes,59))}),changeTime=({hours,minutes},field,change)=>{if("hours"===field){return constrainTime({hours:hours+change,minutes})}if("minutes"===field){const changedMinutes=minutes+change;return changedMinutes<0?0===hours?{hours:0,minutes:0}:constrainTime({hours:hours-Math.ceil(-changedMinutes/60),minutes:60+changedMinutes}):constrainTime(changedMinutes>=60?{hours:hours+Math.round(changedMinutes/60),minutes:changedMinutes%60}:{hours,minutes:changedMinutes})}};try{TimeInput.displayName="TimeInput",TimeInput.__docgenInfo={description:"",displayName:"TimeInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},nullable:{defaultValue:null,description:"",name:"nullable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: Time) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Time"}},inlineLabel:{defaultValue:null,description:"",name:"inlineLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/TimeInput.tsx#TimeInput"]={docgenInfo:TimeInput.__docgenInfo,name:"TimeInput",path:"src/controls/TimeInput.tsx#TimeInput"})}catch(__react_docgen_typescript_loader_error){}var controlStory=__webpack_require__("./src/storyDecorators/controlStory.tsx"),statefulProps=__webpack_require__("./src/storyDecorators/statefulProps.tsx");const TimeInput_stories={component:TimeInput,decorators:[controlStory.k],tags:["autodocs"]},Default={args:{label:"Time:",inlineLabel:!1},parameters:(0,statefulProps.x)("value","onChange",{minutes:0,hours:0})},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Time:',\n    inlineLabel: false\n  },\n  parameters: statefulProps('value', 'onChange', {\n    minutes: 0,\n    hours: 0\n  })\n}",...Default.parameters?.docs?.source}}}},"./src/controls/ControlWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const ControlWrapper=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div`
  ${props=>props.theme.controls.ControlWrapper}
`,__WEBPACK_DEFAULT_EXPORT__=ControlWrapper;try{ControlWrapper.displayName="ControlWrapper",ControlWrapper.__docgenInfo={description:"",displayName:"ControlWrapper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},inlineLabel:{defaultValue:null,description:"",name:"inlineLabel",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/controls/ControlWrapper.tsx#ControlWrapper"]={docgenInfo:ControlWrapper.__docgenInfo,name:"ControlWrapper",path:"src/controls/ControlWrapper.tsx#ControlWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/controlStory.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>buildControlStoryDecorator,k:()=>ControlStoryDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ConfigContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/ConfigContext.tsx"),_elements__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/elements/Desktop.tsx"),_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themeManager/ThemeManager.tsx"),_window__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/window/WindowContext.tsx"),_window__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/window/Window.tsx"),_Wisp__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/Wisp.tsx");const buildControlStoryDecorator=({width,height})=>(Story,context)=>"docs"===context.viewMode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ConfigContext__WEBPACK_IMPORTED_MODULE_1__.sG,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themeManager_ThemeManager__WEBPACK_IMPORTED_MODULE_2__.A,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_window__WEBPACK_IMPORTED_MODULE_3__.IF,{value:{height,width}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative",width:width?`${width}px`:void 0,height:height?`${height}px`:void 0}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))))):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Wisp__WEBPACK_IMPORTED_MODULE_4__.A,{enableVersionInfo:!1,enableWindowMinimize:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements__WEBPACK_IMPORTED_MODULE_5__.X8,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_window__WEBPACK_IMPORTED_MODULE_6__.p,{id:"1",width:width??300,height:height??160,isClosable:!1,isMaximizable:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))),ControlStoryDecorator=buildControlStoryDecorator({});try{buildControlStoryDecorator.displayName="buildControlStoryDecorator",buildControlStoryDecorator.__docgenInfo={description:"",displayName:"buildControlStoryDecorator",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"]={docgenInfo:buildControlStoryDecorator.__docgenInfo,name:"buildControlStoryDecorator",path:"src/storyDecorators/controlStory.tsx#buildControlStoryDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/use-resize-observer/dist/bundle.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useResizeObserver});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function extractSize(entry,boxProp,sizeType){return entry[boxProp]?entry[boxProp][0]?entry[boxProp][0][sizeType]:entry[boxProp][sizeType]:"contentBoxSize"===boxProp?entry.contentRect["inlineSize"===sizeType?"width":"height"]:void 0}function useResizeObserver(opts){void 0===opts&&(opts={});var onResize=opts.onResize,onResizeRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);onResizeRef.current=onResize;var round=opts.round||Math.round,resizeObserverRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({width:void 0,height:void 0}),size=_useState[0],setSize=_useState[1],didUnmount=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return didUnmount.current=!1,function(){didUnmount.current=!0}}),[]);var previous=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({width:void 0,height:void 0}),refCallback=function useResolvedElement(subscriber,refOrElement){var lastReportRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),refOrElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);refOrElementRef.current=refOrElement;var cbElementRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){evaluateSubscription()}));var evaluateSubscription=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){var cbElement=cbElementRef.current,refOrElement=refOrElementRef.current,element=cbElement||(refOrElement?refOrElement instanceof Element?refOrElement:refOrElement.current:null);lastReportRef.current&&lastReportRef.current.element===element&&lastReportRef.current.subscriber===subscriber||(lastReportRef.current&&lastReportRef.current.cleanup&&lastReportRef.current.cleanup(),lastReportRef.current={element,subscriber,cleanup:element?subscriber(element):void 0})}),[subscriber]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return function(){lastReportRef.current&&lastReportRef.current.cleanup&&(lastReportRef.current.cleanup(),lastReportRef.current=null)}}),[]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){cbElementRef.current=element,evaluateSubscription()}),[evaluateSubscription])}((0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(element){return resizeObserverRef.current&&resizeObserverRef.current.box===opts.box&&resizeObserverRef.current.round===round||(resizeObserverRef.current={box:opts.box,round,instance:new ResizeObserver((function(entries){var entry=entries[0],boxProp="border-box"===opts.box?"borderBoxSize":"device-pixel-content-box"===opts.box?"devicePixelContentBoxSize":"contentBoxSize",reportedWidth=extractSize(entry,boxProp,"inlineSize"),reportedHeight=extractSize(entry,boxProp,"blockSize"),newWidth=reportedWidth?round(reportedWidth):void 0,newHeight=reportedHeight?round(reportedHeight):void 0;if(previous.current.width!==newWidth||previous.current.height!==newHeight){var newSize={width:newWidth,height:newHeight};previous.current.width=newWidth,previous.current.height=newHeight,onResizeRef.current?onResizeRef.current(newSize):didUnmount.current||setSize(newSize)}}))}),resizeObserverRef.current.instance.observe(element,{box:opts.box}),function(){resizeObserverRef.current&&resizeObserverRef.current.instance.unobserve(element)}}),[opts.box,round]),opts.ref);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{ref:refCallback,width:size.width,height:size.height}}),[refCallback,size.width,size.height])}}}]);
//# sourceMappingURL=controls-TimeInput-stories.3eaa36ff.iframe.bundle.js.map