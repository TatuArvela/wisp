(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[179],{"./.storybook/preview.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var storybookConfigContext=__webpack_require__("./src/storyDecorators/storybookConfigContext.tsx"),theme=__webpack_require__("./src/themes/default/theme.ts"),statefulProps=__webpack_require__("./src/storyDecorators/statefulProps.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const testTheme_theme={id:"TEST",name:"Test Theme",window:{...{TitleBar:styled_components_browser_esm.iv`
  ${theme.Z.window.TitleBar}
  background: ${props=>props.isActive?"rgb(214,19,107)":"grey"};
  font-family: serif;
`},WindowContent:styled_components_browser_esm.iv`
  ${theme.Z.window.WindowContent}
  font-family: serif;
`,WindowElement:styled_components_browser_esm.iv`
  ${theme.Z.window.WindowElement}
  background: cyan;
  border-color: cyan;
  box-shadow: 0 0 0 1px white;
`}},_storybook_preview={parameters:{options:{storySort:{order:["Wisp",["Basics","Advanced Usage","Theming"],"controls"]}}},decorators:[(0,storybookConfigContext.iP)({themes:[theme.Z,testTheme_theme]}),statefulProps._]}},"./src/storyDecorators/statefulProps.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>statefulPropsDecorator,d:()=>statefulProps});var _storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/preview-api"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const statefulProps=(valueProp,onChangeProp,defaultValue,mode="set")=>({statefulProps:{valueProp,onChangeProp,defaultValue,mode}}),StatefulPropsWrapper=(Story,context,{parameters})=>{const{valueProp,onChangeProp,defaultValue,mode}=parameters??{},[args,updateArgs,resetArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useArgs)(),value=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>{if(valueProp)return args[valueProp]}),[args,valueProp]),setValue=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue=>{valueProp&&(resetArgs([valueProp]),updateArgs({[valueProp]:newValue}))}),[resetArgs,updateArgs,valueProp]),onChange=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newValue=>{if("set"===mode&&setValue(newValue),"toggle"===mode){setValue(!value)}}),[setValue,mode,value]),[isDefaultValueSet,setIsDefaultValueSet]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{void 0!==value||isDefaultValueSet||void 0!==defaultValue&&(setValue(defaultValue),setIsDefaultValueSet(!0))}),[setValue,defaultValue,isDefaultValueSet,value]);const statefulPropsArgs=valueProp&&onChangeProp?{...args,[valueProp]:value,[onChangeProp]:onChange}:args;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{args:statefulPropsArgs})};StatefulPropsWrapper.displayName="StatefulPropsWrapper";const statefulPropsDecorator=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_0__.makeDecorator)({name:"statefulProps",parameterName:"statefulProps",skipIfNoParametersOrOptions:!0,wrapper:StatefulPropsWrapper});try{statefulProps.displayName="statefulProps",statefulProps.__docgenInfo={description:"Create story parameters used by statefulPropsDecorator",displayName:"statefulProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/statefulProps.tsx#statefulProps"]={docgenInfo:statefulProps.__docgenInfo,name:"statefulProps",path:"src/storyDecorators/statefulProps.tsx#statefulProps"})}catch(__react_docgen_typescript_loader_error){}try{statefulPropsDecorator.displayName="statefulPropsDecorator",statefulPropsDecorator.__docgenInfo={description:"Interaction decorator for input components",displayName:"statefulPropsDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/statefulProps.tsx#statefulPropsDecorator"]={docgenInfo:statefulPropsDecorator.__docgenInfo,name:"statefulPropsDecorator",path:"src/storyDecorators/statefulProps.tsx#statefulPropsDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/storyDecorators/storybookConfigContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{iP:()=>storybookConfigContextDecorator,rl:()=>useStorybookConfig});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StorybookConfigContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),StorybookConfigProvider=({children,...config})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StorybookConfigContext.Provider,{value:{...config},children});StorybookConfigProvider.displayName="StorybookConfigProvider";const useStorybookConfig=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(StorybookConfigContext)??{},storybookConfigContextDecorator=config=>Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StorybookConfigProvider,{...config,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})});try{StorybookConfigProvider.displayName="StorybookConfigProvider",StorybookConfigProvider.__docgenInfo={description:"",displayName:"StorybookConfigProvider",props:{enableDefaultElements:{defaultValue:null,description:"",name:"enableDefaultElements",required:!1,type:{name:"boolean"}},enableVersionInfo:{defaultValue:null,description:"",name:"enableVersionInfo",required:!1,type:{name:"boolean"}},enableWindowMinimize:{defaultValue:null,description:"",name:"enableWindowMinimize",required:!1,type:{name:"boolean"}},defaultWindowHeight:{defaultValue:null,description:"",name:"defaultWindowHeight",required:!1,type:{name:"number"}},defaultWindowWidth:{defaultValue:null,description:"",name:"defaultWindowWidth",required:!1,type:{name:"number"}},maxWindowHeight:{defaultValue:null,description:"",name:"maxWindowHeight",required:!1,type:{name:"number"}},maxWindowWidth:{defaultValue:null,description:"",name:"maxWindowWidth",required:!1,type:{name:"number"}},minWindowHeight:{defaultValue:null,description:"",name:"minWindowHeight",required:!1,type:{name:"number"}},minWindowWidth:{defaultValue:null,description:"",name:"minWindowWidth",required:!1,type:{name:"number"}},newWindowXOffset:{defaultValue:null,description:"",name:"newWindowXOffset",required:!1,type:{name:"number"}},newWindowYOffset:{defaultValue:null,description:"",name:"newWindowYOffset",required:!1,type:{name:"number"}},themes:{defaultValue:null,description:"",name:"themes",required:!1,type:{name:"Theme[]"}},viewportWindowMargins:{defaultValue:null,description:"",name:"viewportWindowMargins",required:!1,type:{name:"ViewportWindowMargins"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/storybookConfigContext.tsx#StorybookConfigProvider"]={docgenInfo:StorybookConfigProvider.__docgenInfo,name:"StorybookConfigProvider",path:"src/storyDecorators/storybookConfigContext.tsx#StorybookConfigProvider"})}catch(__react_docgen_typescript_loader_error){}try{storybookConfigContextDecorator.displayName="storybookConfigContextDecorator",storybookConfigContextDecorator.__docgenInfo={description:"",displayName:"storybookConfigContextDecorator",props:{enableDefaultElements:{defaultValue:null,description:"",name:"enableDefaultElements",required:!1,type:{name:"boolean"}},enableVersionInfo:{defaultValue:null,description:"",name:"enableVersionInfo",required:!1,type:{name:"boolean"}},enableWindowMinimize:{defaultValue:null,description:"",name:"enableWindowMinimize",required:!1,type:{name:"boolean"}},defaultWindowHeight:{defaultValue:null,description:"",name:"defaultWindowHeight",required:!1,type:{name:"number"}},defaultWindowWidth:{defaultValue:null,description:"",name:"defaultWindowWidth",required:!1,type:{name:"number"}},maxWindowHeight:{defaultValue:null,description:"",name:"maxWindowHeight",required:!1,type:{name:"number"}},maxWindowWidth:{defaultValue:null,description:"",name:"maxWindowWidth",required:!1,type:{name:"number"}},minWindowHeight:{defaultValue:null,description:"",name:"minWindowHeight",required:!1,type:{name:"number"}},minWindowWidth:{defaultValue:null,description:"",name:"minWindowWidth",required:!1,type:{name:"number"}},newWindowXOffset:{defaultValue:null,description:"",name:"newWindowXOffset",required:!1,type:{name:"number"}},newWindowYOffset:{defaultValue:null,description:"",name:"newWindowYOffset",required:!1,type:{name:"number"}},themes:{defaultValue:null,description:"",name:"themes",required:!1,type:{name:"Theme[]"}},viewportWindowMargins:{defaultValue:null,description:"",name:"viewportWindowMargins",required:!1,type:{name:"ViewportWindowMargins"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/storyDecorators/storybookConfigContext.tsx#storybookConfigContextDecorator"]={docgenInfo:storybookConfigContextDecorator.__docgenInfo,name:"storybookConfigContextDecorator",path:"src/storyDecorators/storybookConfigContext.tsx#storybookConfigContextDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src/themes/default/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>theme});var addressBar_namespaceObject={};__webpack_require__.r(addressBar_namespaceObject),__webpack_require__.d(addressBar_namespaceObject,{AddressBar:()=>AddressBar,AddressBarInput:()=>AddressBarInput});var alertButton_namespaceObject={};__webpack_require__.r(alertButton_namespaceObject),__webpack_require__.d(alertButton_namespaceObject,{AlertButton:()=>AlertButton});var alertContent_namespaceObject={};__webpack_require__.r(alertContent_namespaceObject),__webpack_require__.d(alertContent_namespaceObject,{AlertContent:()=>AlertContent});var alertIcon_namespaceObject={};__webpack_require__.r(alertIcon_namespaceObject),__webpack_require__.d(alertIcon_namespaceObject,{AlertIcon:()=>AlertIcon});var alertText_namespaceObject={};__webpack_require__.r(alertText_namespaceObject),__webpack_require__.d(alertText_namespaceObject,{AlertText:()=>AlertText});var button_namespaceObject={};__webpack_require__.r(button_namespaceObject),__webpack_require__.d(button_namespaceObject,{Button:()=>Button,ButtonWrapper:()=>ButtonWrapper});var label_namespaceObject={};__webpack_require__.r(label_namespaceObject),__webpack_require__.d(label_namespaceObject,{Label:()=>Label});var checkbox_namespaceObject={};__webpack_require__.r(checkbox_namespaceObject),__webpack_require__.d(checkbox_namespaceObject,{Checkbox:()=>Checkbox,CheckboxLabel:()=>CheckboxLabel,CheckboxWrapper:()=>CheckboxWrapper});var comboBox_namespaceObject={};__webpack_require__.r(comboBox_namespaceObject),__webpack_require__.d(comboBox_namespaceObject,{ComboBoxButton:()=>ComboBoxButton,ComboBoxControl:()=>ComboBoxControl,ComboBoxInput:()=>ComboBoxInput,ComboBoxLabel:()=>ComboBoxLabel,ComboBoxOption:()=>ComboBoxOption,ComboBoxOptions:()=>ComboBoxOptions,ComboBoxWrapper:()=>ComboBoxWrapper});var controlWrapper_namespaceObject={};__webpack_require__.r(controlWrapper_namespaceObject),__webpack_require__.d(controlWrapper_namespaceObject,{ControlWrapper:()=>ControlWrapper});var divider_namespaceObject={};__webpack_require__.r(divider_namespaceObject),__webpack_require__.d(divider_namespaceObject,{Divider:()=>Divider});var fieldset_namespaceObject={};__webpack_require__.r(fieldset_namespaceObject),__webpack_require__.d(fieldset_namespaceObject,{Fieldset:()=>Fieldset,FieldsetLegend:()=>FieldsetLegend});var listBox_namespaceObject={};__webpack_require__.r(listBox_namespaceObject),__webpack_require__.d(listBox_namespaceObject,{ListBoxButton:()=>ListBoxButton,ListBoxLabel:()=>ListBoxLabel,ListBoxOption:()=>ListBoxOption,ListBoxOptions:()=>ListBoxOptions,ListBoxWrapper:()=>ListBoxWrapper});var menuBar_namespaceObject={};__webpack_require__.r(menuBar_namespaceObject),__webpack_require__.d(menuBar_namespaceObject,{MenuBar:()=>MenuBar,MenuBarThrobber:()=>MenuBarThrobber});var progressBar_namespaceObject={};__webpack_require__.r(progressBar_namespaceObject),__webpack_require__.d(progressBar_namespaceObject,{ProgressBar:()=>ProgressBar,ProgressBarFill:()=>ProgressBarFill});var scrollableContent_namespaceObject={};__webpack_require__.r(scrollableContent_namespaceObject),__webpack_require__.d(scrollableContent_namespaceObject,{ScrollableContentView:()=>ScrollableContentView,ScrollableContentWrapper:()=>ScrollableContentWrapper});var scrollbarHorizontal_namespaceObject={};__webpack_require__.r(scrollbarHorizontal_namespaceObject),__webpack_require__.d(scrollbarHorizontal_namespaceObject,{ScrollLeftButton:()=>ScrollLeftButton,ScrollRightButton:()=>ScrollRightButton,ScrollbarHorizontalThumb:()=>ScrollbarHorizontalThumb,ScrollbarHorizontalTrack:()=>ScrollbarHorizontalTrack,ScrollbarHorizontalWrapper:()=>ScrollbarHorizontalWrapper});var scrollbarVertical_namespaceObject={};__webpack_require__.r(scrollbarVertical_namespaceObject),__webpack_require__.d(scrollbarVertical_namespaceObject,{ScrollDownButton:()=>ScrollDownButton,ScrollUpButton:()=>ScrollUpButton,ScrollbarVerticalThumb:()=>ScrollbarVerticalThumb,ScrollbarVerticalTrack:()=>ScrollbarVerticalTrack,ScrollbarVerticalWrapper:()=>ScrollbarVerticalWrapper});var statusBar_namespaceObject={};__webpack_require__.r(statusBar_namespaceObject),__webpack_require__.d(statusBar_namespaceObject,{ResizeHandle:()=>ResizeHandle,StatusBar:()=>StatusBar});var statusBarSection_namespaceObject={};__webpack_require__.r(statusBarSection_namespaceObject),__webpack_require__.d(statusBarSection_namespaceObject,{StatusBarSection:()=>StatusBarSection});var textarea_namespaceObject={};__webpack_require__.r(textarea_namespaceObject),__webpack_require__.d(textarea_namespaceObject,{TextareaElement:()=>TextareaElement,TextareaLabel:()=>TextareaLabel,TextareaWrapper:()=>TextareaWrapper});var textInput_namespaceObject={};__webpack_require__.r(textInput_namespaceObject),__webpack_require__.d(textInput_namespaceObject,{TextInputElement:()=>TextInputElement,TextInputLabel:()=>TextInputLabel,TextInputWrapper:()=>TextInputWrapper});var timeInput_namespaceObject={};__webpack_require__.r(timeInput_namespaceObject),__webpack_require__.d(timeInput_namespaceObject,{TimeInputButtons:()=>TimeInputButtons,TimeInputControl:()=>TimeInputControl,TimeInputDecreaseButton:()=>TimeInputDecreaseButton,TimeInputField:()=>TimeInputField,TimeInputIncreaseButton:()=>TimeInputIncreaseButton,TimeInputLabel:()=>TimeInputLabel,TimeInputSeparator:()=>TimeInputSeparator,TimeInputValue:()=>TimeInputValue,TimeInputWrapper:()=>TimeInputWrapper});var toolbar_namespaceObject={};__webpack_require__.r(toolbar_namespaceObject),__webpack_require__.d(toolbar_namespaceObject,{Toolbar:()=>Toolbar});var toolbarButton_namespaceObject={};__webpack_require__.r(toolbarButton_namespaceObject),__webpack_require__.d(toolbarButton_namespaceObject,{ToolbarButton:()=>ToolbarButton,ToolbarButtonIcon:()=>ToolbarButtonIcon,ToolbarButtonLabel:()=>ToolbarButtonLabel,ToolbarButtonWrapper:()=>ToolbarButtonWrapper});var well_namespaceObject={};__webpack_require__.r(well_namespaceObject),__webpack_require__.d(well_namespaceObject,{Well:()=>Well});var windowContent_namespaceObject={};__webpack_require__.r(windowContent_namespaceObject),__webpack_require__.d(windowContent_namespaceObject,{WindowContent:()=>WindowContent});var desktop_namespaceObject={};__webpack_require__.r(desktop_namespaceObject),__webpack_require__.d(desktop_namespaceObject,{Desktop:()=>Desktop});var taskbar_namespaceObject={};__webpack_require__.r(taskbar_namespaceObject),__webpack_require__.d(taskbar_namespaceObject,{Taskbar:()=>Taskbar});var taskbarButton_namespaceObject={};__webpack_require__.r(taskbarButton_namespaceObject),__webpack_require__.d(taskbarButton_namespaceObject,{TaskbarButton:()=>TaskbarButton,TaskbarButtonIcon:()=>TaskbarButtonIcon,TaskbarButtonTitle:()=>TaskbarButtonTitle});var versionInfo_namespaceObject={};__webpack_require__.r(versionInfo_namespaceObject),__webpack_require__.d(versionInfo_namespaceObject,{VersionInfo:()=>VersionInfo});var resizeBorder_namespaceObject={};__webpack_require__.r(resizeBorder_namespaceObject),__webpack_require__.d(resizeBorder_namespaceObject,{EResize:()=>EResize,NEResize:()=>NEResize,NResize:()=>NResize,NWResize:()=>NWResize,SEResize:()=>SEResize,SResize:()=>SResize,SWResize:()=>SWResize,WResize:()=>WResize});var titleBar_namespaceObject={};__webpack_require__.r(titleBar_namespaceObject),__webpack_require__.d(titleBar_namespaceObject,{TitleBar:()=>TitleBar,TitleBarIcon:()=>TitleBarIcon,TitleBarTitle:()=>TitleBarTitle,TitleBarTitleContainer:()=>TitleBarTitleContainer});var titleBarButtons_namespaceObject={};__webpack_require__.r(titleBarButtons_namespaceObject),__webpack_require__.d(titleBarButtons_namespaceObject,{CloseButton:()=>CloseButton,MaximizeButton:()=>MaximizeButton,MinimizeButton:()=>MinimizeButton,TitleBarButtons:()=>TitleBarButtons,UnmaximizeButton:()=>UnmaximizeButton,WindowButton:()=>WindowButton});var window_namespaceObject={};__webpack_require__.r(window_namespaceObject),__webpack_require__.d(window_namespaceObject,{WindowElement:()=>WindowElement});var window_windowContent_namespaceObject={};__webpack_require__.r(window_windowContent_namespaceObject),__webpack_require__.d(window_windowContent_namespaceObject,{WindowContent:()=>windowContent_WindowContent});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const AddressBar=styled_components_browser_esm.iv`
  align-items: center;
  background: white;
  border: 1px solid gray;
  box-shadow: -1px -1px 0 lightgray;
  box-sizing: border-box;
  display: flex;
  font-size: 12px;
  font-family: sans-serif;
  gap: 4px;
  height: 28px;
  flex-shrink: 0;
  padding: 2px;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`,AddressBarInput=styled_components_browser_esm.iv`
  border-radius: 1ps;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-sizing: border-box;
  color: ${props=>props.disabled?"gray":"black"};
  cursor: text;
  font-size: 12px;
  height: 22px;
  outline: none;
  width: 100%;
`,AlertButton=styled_components_browser_esm.iv`
  width: 60px;
  margin: auto;
`,AlertContent=styled_components_browser_esm.iv`
  display: flex;
  gap: 8px;
  padding: 4px 8px;
`,AlertIcon=styled_components_browser_esm.iv`
  height: 32px;
  width: 32px;
`,AlertText=styled_components_browser_esm.iv`
  display: inline-flex;
  flex-grow: 1;
  font-family: sans-serif;
  align-items: center;
`,ButtonWrapper=styled_components_browser_esm.iv`
  display: inherit;
  padding: 0 1px 1px 0;
`,activeStyle=styled_components_browser_esm.iv`
  &:active {
    box-shadow: none;
    position: relative;
    left: 1px;
    top: 1px;
  }
`,Button=styled_components_browser_esm.iv`
  background: white;
  border-radius: 2px;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-shadow: 1px 1px 0 0 gray;
  color: ${props=>props.disabled?"gray":"black"};
  font-size: 12px;
  height: 100%;
  padding: 6px;
  user-select: none;
  width: 100%;

  ${props=>!props.disabled&&activeStyle}
`,Label=styled_components_browser_esm.iv`
  color: ${props=>props.disabled?"gray":"black"};
  font-size: 14px;
  font-family: sans-serif;
  margin: 0;
`,CheckboxWrapper=styled_components_browser_esm.iv``,checkedStyle=styled_components_browser_esm.iv`
  &:before {
    content: '✔';
    font-size: 20px;
    line-height: 20px;
    position: absolute;
    text-align: center;
    top: 1px;
    width: 100%;
  }
`,hoverStyle=styled_components_browser_esm.iv`
  &:hover {
    filter: brightness(90%);
  }
`,checkbox_activeStyle=styled_components_browser_esm.iv`
  &:active {
    background: lightgray;
  }
`,Checkbox=styled_components_browser_esm.iv`
  background: white;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  border-radius: 2px;
  box-shadow: 1px 1px 0 0 gray;
  box-sizing: border-box;
  color: ${props=>props.disabled?"gray":"black"};
  height: 20px;
  position: relative;
  width: 20px;
  margin-bottom: 2px;
  margin-right: 2px;

  ${props=>!props.disabled&&checkbox_activeStyle}
  ${props=>!props.disabled&&hoverStyle}
  ${props=>props.checked&&checkedStyle}
`,CheckboxLabel=Label,ComboBoxWrapper=styled_components_browser_esm.iv``,ComboBoxLabel=Label,ComboBoxControl=styled_components_browser_esm.iv`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
`,ComboBoxInput=styled_components_browser_esm.iv`
  border-bottom-left-radius: 1px;
  border-bottom: 1px solid ${props=>props.disabled?"gray":"black"};
  border-left: 1px solid ${props=>props.disabled?"gray":"black"};
  border-right: none;
  border-top-left-radius: 1px;
  border-top: 1px solid ${props=>props.disabled?"gray":"black"};
  box-sizing: border-box;
  box-sizing: border-box;
  color: ${props=>props.disabled?"gray":"black"};
  font-size: 12px;
  height: 24px;
  margin: 0;
  outline: none;
  position: relative;
  user-select: ${props=>props.disabled?"none":"auto"};
  width: 100%;
`,ComboBoxButton=styled_components_browser_esm.iv`
  background: white;
  border-top: 1px solid ${props=>props.disabled?"gray":"black"};
  border-right: 1px solid ${props=>props.disabled?"gray":"black"};
  border-bottom: 1px solid ${props=>props.disabled?"gray":"black"};
  border-left: none;
  border-radius: 0;
  box-sizing: border-box;
  width: 24px;
  padding: 0;
  height: 24px;
  position: relative;

  &:before {
    border-bottom: 1px solid ${props=>props.disabled?"gray":"black"};
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid ${props=>props.disabled?"gray":"black"};
    content: '';
    left: 8px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(-45deg);
    width: 8px;
  }
`,ComboBoxOptions=styled_components_browser_esm.iv`
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${props=>""+(props.open?"block":"none")};
  left: ${props=>`${props.left}`}px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: ${props=>""+(props.top-1)}px;
  width: ${props=>`${props.width}`}px;
  z-index: 100;
`,ComboBoxOption=styled_components_browser_esm.iv`
  list-style: none;
  font-family: sans-serif;
  font-size: 12px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(19, 71, 214);
    color: white;
  }
`,columnStyle=styled_components_browser_esm.iv`
  flex-direction: column;
  justify-content: center;
`,inlineStyle=styled_components_browser_esm.iv`
  flex-direction: row;
  gap: 16px;
  align-items: center;
`,ControlWrapper=styled_components_browser_esm.iv`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin-bottom: 4px;
  box-sizing: border-box;
  ${({inlineLabel})=>inlineLabel?inlineStyle:columnStyle}
`,verticalStyle=styled_components_browser_esm.iv`
  background: black;
  height: 100%;
  width: 1px;
  margin: 0 4px;
`,horizontalStyle=styled_components_browser_esm.iv`
  background: black;
  height: 1px;
  width: 100%;
  margin: 4px 0;
`,Divider=styled_components_browser_esm.iv`
  ${({vertical})=>vertical?verticalStyle:horizontalStyle}
`,Fieldset=styled_components_browser_esm.iv`
  border-radius: 2px;
  border: 1px solid black;
  font-family: sans-serif;
  padding: 8px;
  margin-bottom: 4px;
`,FieldsetLegend=styled_components_browser_esm.iv`
  box-sizing: border-box;
  padding: 4px 8px;
  position: relative;

  &:before {
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    bottom: 0;
    box-sizing: border-box;
    content: '';
    height: 50%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`,ListBoxWrapper=styled_components_browser_esm.iv``,ListBoxLabel=Label,ListBoxButton=styled_components_browser_esm.iv`
  background: white;
  border-radius: 0;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-sizing: border-box;
  display: flex;
  height: 24px;
  padding: 3px;
  font-size: 12px;
  position: relative;
  position: relative;
  width: 100%;

  &:before {
    border-bottom: 1px solid ${props=>props.disabled?"gray":"black"};
    content: '';
    right: 10px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid ${props=>props.disabled?"gray":"black"};
    content: '';
    right: 4px;
    pointer-events: none;
    position: absolute;
    top: 11px;
    transform: rotate(-45deg);
    width: 8px;
  }
`,ListBoxOptions=styled_components_browser_esm.iv`
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
  display: ${props=>""+(props.open?"block":"none")};
  left: ${props=>`${props.left}`}px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: ${props=>""+(props.top-1)}px;
  width: ${props=>`${props.width}`}px;
  z-index: 100;
`,ListBoxOption=styled_components_browser_esm.iv`
  list-style: none;
  font-family: sans-serif;
  font-size: 12px;
  padding: 4px;
  cursor: pointer;
  &:hover {
    background: rgb(19, 71, 214);
    color: white;
  }
`,menuBarThrobberIcon_namespaceObject=__webpack_require__.p+"static/media/menuBarThrobberIcon.0b0bddc7.png",MenuBar=styled_components_browser_esm.iv`
  background: white;
  border: 1px solid gray;
  box-shadow: -1px -1px 0 lightgray;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  font-family: sans-serif;
  height: 28px;
  flex-shrink: 0;
  padding: 0;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`,MenuBarThrobber=styled_components_browser_esm.iv`
  align-self: end;
  background-color: black;
  background-image: url('${menuBarThrobberIcon_namespaceObject}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  height: 100%;
  margin-left: auto;
  width: 40px;

  ${({isAnimated})=>isAnimated&&animatedMenuThrobber}

  @keyframes menu-bar-throbber-animation {
    0% {
      background-size: 16px 16px;
    }
    100% {
      background-size: 18px 18px;
    }
  }
`,animatedMenuThrobber=styled_components_browser_esm.iv`
  animation-name: menu-bar-throbber-animation;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`,ProgressBar=styled_components_browser_esm.iv`
  background: lightgray;
  border-radius: 1px;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-sizing: border-box;
  color: ${props=>props.disabled?"gray":"black"};
  font-size: 12px;
  height: 24px;
  max-height: 100%;
  outline: none;
  width: 100%;
  overflow: hidden;
`,ProgressBarFill=styled_components_browser_esm.iv`
  height: 100%;
  background: ${props=>props.disabled?"gray":"#2222ff"};

  width: ${props=>props.isIndeterminate?props.disabled?"0%":"50%":void 0};
  ${props=>!props.disabled&&props.isIndeterminate&&indeterminateStyle}

  @keyframes indeterminate-progress-bar-fill-animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }
`,indeterminateStyle=styled_components_browser_esm.iv`
  animation-duration: 1s;
  animation-name: indeterminate-progress-bar-fill-animation;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`,ScrollableContentWrapper=styled_components_browser_esm.iv`
  height: 100%;
  width: 100%;
  position: relative;
`,ScrollableContentView=styled_components_browser_esm.iv`
  box-sizing: border-box;
  height: calc(100% - ${({horizontal})=>horizontal?22:0}px);
  width: calc(100% - ${({vertical})=>vertical?22:0}px);
  overscroll-behavior: none;
  overflow-x: ${({horizontal})=>horizontal?"scroll":"clip"};
  overflow-y: ${({vertical})=>vertical?"scroll":"clip"};
  scrollbar-width: none;
`,ScrollLeftButton=styled_components_browser_esm.iv`
  height: 22px;
  width: 22px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid black;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 13px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 7px;
    transform: rotate(-45deg);
    width: 8px;
  }
`,ScrollRightButton=styled_components_browser_esm.iv`
  height: 22px;
  width: 22px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1px solid black;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 6px;
    pointer-events: none;
    position: absolute;
    top: 7px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 6px;
    pointer-events: none;
    position: absolute;
    top: 13px;
    transform: rotate(-45deg);
    width: 8px;
  }
`,ScrollbarHorizontalTrack=styled_components_browser_esm.iv`
  width: 100%;
  position: relative;
  background: #ccc;
`,ScrollbarHorizontalThumb=styled_components_browser_esm.iv`
  height: 22px;
  background: blue;
  position: absolute;
  border: 1px solid black;
  background: #fff;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }
`,ScrollbarHorizontalWrapper=styled_components_browser_esm.iv`
  background: #dedede;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 22px;
  left: 0;
  position: absolute;
`,ScrollUpButton=styled_components_browser_esm.iv`
  height: 22px;
  width: 22px;
  border-radius: 2px;
  border: 1px solid black;
  flex-shrink: 0;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 9px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 8px;
  }
`,ScrollDownButton=styled_components_browser_esm.iv`
  height: 22px;
  width: 22px;
  border-radius: 2px;
  border: 1px solid black;
  flex-shrink: 0;
  background: #fff;
  position: relative;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 8px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 9px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 8px;
  }
`,ScrollbarVerticalTrack=styled_components_browser_esm.iv`
  height: 100%;
  position: relative;
  background: #ccc;
`,ScrollbarVerticalThumb=styled_components_browser_esm.iv`
  background: blue;
  width: 22px;
  position: absolute;
  border: 1px solid black;
  background: #fff;
  box-sizing: border-box;

  &:hover {
    background: #dedede;
  }
`,ScrollbarVerticalWrapper=styled_components_browser_esm.iv`
  background: #dedede;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  width: 22px;
`,StatusBar=styled_components_browser_esm.iv`
  border-top: 1px solid grey;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  margin-top: auto;
  font-size: 14px;
  flex-shrink: 0;
  gap: 3px;
  height: 26px;
  padding: 2px 0 0;
  width: 100%;
`,ResizeHandle=styled_components_browser_esm.iv`
  bottom: 0;
  content: ' ';
  cursor: se-resize;
  height: 14px;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  width: 14px;
  overflow: clip;

  &:before {
    content: '';
    background: white;
    display: block;
    border-left: 1px solid black;
    transform: rotate(45deg);
    position: absolute;
    left: 4px;
    top: 5px;
    width: 18px;
    height: 18px;
  }

  &:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-left: 10px solid transparent;
    border-bottom: 10px solid grey;
    border-top: 10px solid transparent;
  }
`,StatusBarSection=styled_components_browser_esm.iv`
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-grow: ${({width})=>void 0!==width?"unset":1};
  font-family: sans-serif;
  font-size: 12px;
  padding: 2px;
`,TextareaWrapper=styled_components_browser_esm.iv``,TextareaLabel=Label,TextareaElement=styled_components_browser_esm.iv`
  border-radius: 1px;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-sizing: border-box;
  color: ${props=>props.disabled?"gray":"black"};
  font-size: 12px;
  height: 24px;
  outline: none;
  width: 100%;
`,TextInputWrapper=styled_components_browser_esm.iv``,TextInputLabel=Label,TextInputElement=styled_components_browser_esm.iv`
  border-radius: 1px;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-sizing: border-box;
  color: ${props=>props.disabled?"gray":"black"};
  font-size: 12px;
  height: 24px;
  outline: none;
  width: 100%;
`,TimeInputWrapper=styled_components_browser_esm.iv``,TimeInputLabel=Label,TimeInputControl=styled_components_browser_esm.iv`
  display: flex;
  height: 24px;
  gap: 2px;
  width: 100%;
`,TimeInputField=styled_components_browser_esm.iv`
  border-radius: 1px;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  display: flex;
  width: 100%;
`,TimeInputValue=styled_components_browser_esm.iv`
  border: none;
  color: ${props=>props.disabled?"gray":"black"};
  outline: none;
  width: 18px;

  &::selection {
    color: white;
    background: ${props=>props.disabled?"gray":"rgb(19, 71, 214)"};
  }
`,TimeInputSeparator=styled_components_browser_esm.iv`
  width: 6px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: ':';
    position: absolute;
  }
`,TimeInputButtons=styled_components_browser_esm.iv`
  display: flex;
  flex-direction: column;
  gap: 2px;
`,activeStyleProperties=styled_components_browser_esm.iv`
  background: rgb(200, 200, 200);
  box-shadow: none;
  left: 1px;
  top: 1px;
`,timeInput_activeStyle=styled_components_browser_esm.iv`
  ${({active})=>active&&activeStyleProperties}
  &:active {
    ${activeStyleProperties}
  }
`,TimeInputIncreaseButton=styled_components_browser_esm.iv`
  background: white;
  border-radius: 0;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-shadow: 1px 1px 0 0 gray;
  box-sizing: border-box;
  height: 11px;
  position: relative;
  width: 18px;

  ${props=>!props.disabled&&timeInput_activeStyle}

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 7px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(45deg);
    width: 6px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(-45deg);
    width: 6px;
  }
`,TimeInputDecreaseButton=styled_components_browser_esm.iv`
  background: white;
  border-radius: 0;
  border: 1px solid ${props=>props.disabled?"gray":"black"};
  box-shadow: 1px 1px 0 0 gray;
  box-sizing: border-box;
  height: 11px;
  position: relative;
  width: 18px;

  ${props=>!props.disabled&&timeInput_activeStyle}

  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 7px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(-45deg);
    width: 6px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 3px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    transform: rotate(45deg);
    width: 6px;
  }
`,Toolbar=styled_components_browser_esm.iv`
  background: white;
  border: 1px solid gray;
  box-shadow: -1px -1px 0 lightgray;
  box-sizing: border-box;
  display: flex;
  height: 28px;
  flex-shrink: 0;
  padding: 0;
  text-align: left;
  white-space: nowrap;
  width: 100%;
`,ToolbarButtonWrapper=styled_components_browser_esm.iv``,toolbarButton_hoverStyle=styled_components_browser_esm.iv`
  &:hover {
    border: 1px solid gray;
  }
`,toolbarButton_activeStyle=styled_components_browser_esm.iv`
  &:active {
    background: lightgray;
    box-shadow: 1px 1px 0 lightgray inset;
    position: relative;
  }
`,ToolbarButton=styled_components_browser_esm.iv`
  justify-content: center;
  background: white;
  border-radius: 1px;
  border: 1px solid transparent;
  box-sizing: border-box;
  display: inline-flex;
  font-size: 12px;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
  user-select: none;

  ${props=>!props.disabled&&toolbarButton_hoverStyle}
  ${props=>!props.disabled&&toolbarButton_activeStyle}
`,ToolbarButtonLabel=styled_components_browser_esm.iv``,ToolbarButtonIcon=styled_components_browser_esm.iv`
  display: block;
  height: 16px;
  width: 16px;
`,Well=styled_components_browser_esm.iv`
  border-radius: 2px;
  border: 1px solid black;
  font-family: sans-serif;
  padding: 8px;
`,WindowContent=styled_components_browser_esm.iv`
  border: 1px solid gray;
  font-family: sans-serif;
  flex-grow: 1;
  overflow: hidden;
  margin-bottom: -1px;
  margin-top: -1px;
`,default_controls={...addressBar_namespaceObject,...alertButton_namespaceObject,...alertContent_namespaceObject,...alertIcon_namespaceObject,...alertText_namespaceObject,...button_namespaceObject,...checkbox_namespaceObject,...comboBox_namespaceObject,...controlWrapper_namespaceObject,...divider_namespaceObject,...fieldset_namespaceObject,...label_namespaceObject,...listBox_namespaceObject,...menuBar_namespaceObject,...progressBar_namespaceObject,...scrollableContent_namespaceObject,...scrollbarHorizontal_namespaceObject,...scrollbarVertical_namespaceObject,...statusBar_namespaceObject,...statusBarSection_namespaceObject,...textarea_namespaceObject,...textInput_namespaceObject,...timeInput_namespaceObject,...toolbar_namespaceObject,...toolbarButton_namespaceObject,...well_namespaceObject,...windowContent_namespaceObject},Desktop=styled_components_browser_esm.iv`
  background: rgb(10, 36, 106);
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
`,Taskbar=styled_components_browser_esm.iv`
  background: white;
  border-top: 1px solid black;
  bottom: 0;
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  height: 28px;
  left: 0;
  overflow-x: visible;
  padding: 2px;
  position: absolute;
  text-align: left;
  white-space: nowrap;
  width: 100%;
`,taskbarButtonActiveStyle=styled_components_browser_esm.iv`
  background: none;
  border-color: lightgray;
  box-shadow: inset 1px 1px 0 gray;
  font-weight: bold;
`,TaskbarButton=styled_components_browser_esm.iv`
  align-items: center;
  border-radius: 3px;
  border: 1px solid gray;
  box-shadow: 1px 1px 0 lightgray;
  display: inline-flex;
  flex-grow: 1;
  font-size: 12px;
  height: 22px;
  margin-left: 2px;
  text-align: left;
  user-select: none;
  width: 160px;
  ${props=>props.active&&taskbarButtonActiveStyle};
`,TaskbarButtonTitle=styled_components_browser_esm.iv``,TaskbarButtonIcon=styled_components_browser_esm.iv`
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 4px;
`,VersionInfo=styled_components_browser_esm.iv`
  bottom: 30px;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 4px;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-align: right;
  user-select: none;
  z-index: 1000;
`,default_elements={...taskbar_namespaceObject,...taskbarButton_namespaceObject,...desktop_namespaceObject,...versionInfo_namespaceObject},sharedStyle=styled_components_browser_esm.iv`
  box-sizing: border-box;
  position: absolute;
`,NResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-5}px;
  left: ${-5}px;
  right: ${-5}px;
  height: ${5}px;
  cursor: n-resize;
`,NEResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-5}px;
  right: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: ne-resize;
`,EResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-5}px;
  bottom: ${-5}px;
  right: ${-5}px;
  width: ${5}px;
  cursor: e-resize;
`,SEResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  bottom: ${-5}px;
  right: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: se-resize;
`,SResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  bottom: ${-5}px;
  left: ${-5}px;
  right: ${-5}px;
  height: ${5}px;
  cursor: s-resize;
`,SWResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  bottom: ${-5}px;
  left: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: sw-resize;
`,WResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-5}px;
  bottom: ${-5}px;
  left: ${-5}px;
  width: ${5}px;
  cursor: w-resize;
`,NWResize=styled_components_browser_esm.iv`
  ${sharedStyle};
  top: ${-5}px;
  left: ${-5}px;
  height: ${10}px;
  width: ${10}px;
  cursor: nw-resize;
`,TitleBar=styled_components_browser_esm.iv`
  background: ${props=>props.isActive?"rgb(19, 71, 214)":"grey"};
  border-radius: 3px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-shrink: 0;
  font-family: sans-serif;
  font-size: 12px;
  height: 24px;
  margin: 0 0 4px;
  padding-left: 4px;
  text-align: left;
  user-select: none;
  width: 100%;
`,TitleBarTitleContainer=styled_components_browser_esm.iv`
  display: flex;
  align-items: center;
  flex-grow: 1;
`,TitleBarTitle=styled_components_browser_esm.iv`
  position: relative;
  top: 1px;
`,TitleBarIcon=styled_components_browser_esm.iv`
  display: block;
  height: 16px;
  width: 16px;
  margin-right: 4px;
`,TitleBarButtons=styled_components_browser_esm.iv`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
`,WindowButton=styled_components_browser_esm.iv`
  background: white;
  border-radius: 2px;
  border: none;
  box-sizing: border-box;
  height: 20px;
  margin: 2px 2px;
  padding: 0;
  position: relative;
  width: 20px;

  &:hover {
    filter: brightness(90%);
  }

  &:active {
    background: lightgray;
  }
`,MinimizeButton=styled_components_browser_esm.iv`
  &:before {
    border-bottom: 1px solid black;
    content: '';
    height: 10px;
    left: 5px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    width: 10px;
  }
`,MaximizeButton=styled_components_browser_esm.iv`
  &:before {
    border: 1px solid black;
    content: '';
    height: 10px;
    left: 4px;
    pointer-events: none;
    position: absolute;
    top: 4px;
    width: 10px;
  }
`,UnmaximizeButton=styled_components_browser_esm.iv`
  &:before {
    border-right: 1px solid black;
    border-top: 1px solid black;
    content: '';
    height: 8px;
    pointer-events: none;
    position: absolute;
    right: 4px;
    top: 4px;
    width: 8px;
  }

  &:after {
    border: 1px solid black;
    bottom: 4px;
    content: '';
    height: 8px;
    left: 4px;
    pointer-events: none;
    position: absolute;
    width: 8px;
  }
`,CloseButton=styled_components_browser_esm.iv`
  &:before {
    border-bottom: 1px solid black;
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 16px;
  }

  &:after {
    border-bottom: 1px solid black;
    content: '';
    left: 2px;
    pointer-events: none;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 16px;
  }
`,maximizedStyles=styled_components_browser_esm.iv`
  height: ${props=>{return`calc(100% - ${(viewportWindowMargins=props.viewportWindowMargins).top+viewportWindowMargins.bottom}px)`;var viewportWindowMargins}} !important;
  left: ${props=>props.viewportWindowMargins.left} !important;
  top: ${props=>props.viewportWindowMargins.top} !important;
  width: ${props=>{return`calc(100% - ${(viewportWindowMargins=props.viewportWindowMargins).left+viewportWindowMargins.right}px)`;var viewportWindowMargins}} !important;
  z-index: ${props=>props.orderNumber} !important;
  border-radius: 0;
`,minimizedStyles=styled_components_browser_esm.iv`
  display: none;
`,WindowElement=styled_components_browser_esm.iv`
  background: white;
  border-radius: 3px;
  box-sizing: border-box;
  border: 3px solid white;
  box-shadow: 0 0 0 1px gray;
  color: black;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: absolute;

  ${props=>props.isMaximized&&maximizedStyles}
  ${props=>props.isMinimized&&minimizedStyles}
`,windowContent_WindowContent=styled_components_browser_esm.iv`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 14px;
  flex-grow: 1;
  margin: 0;
  overflow: hidden;
  text-align: left;
  user-select: none;
  width: 100%;
`,theme={id:"DEFAULT",name:"Default Theme",controls:default_controls,elements:default_elements,window:{...resizeBorder_namespaceObject,...titleBar_namespaceObject,...titleBarButtons_namespaceObject,...window_namespaceObject,...window_windowContent_namespaceObject}}},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./AdvancedUsage.stories":["./stories/AdvancedUsage.stories.tsx",433,49],"./AdvancedUsage.stories.tsx":["./stories/AdvancedUsage.stories.tsx",433,49],"./Basics.stories":["./stories/Basics.stories.tsx",433,342],"./Basics.stories.tsx":["./stories/Basics.stories.tsx",433,342],"./Theming.stories":["./stories/Theming.stories.tsx",713,433,774],"./Theming.stories.tsx":["./stories/Theming.stories.tsx",713,433,774],"./controls/AddressBar.stories":["./stories/controls/AddressBar.stories.tsx",433,706],"./controls/AddressBar.stories.tsx":["./stories/controls/AddressBar.stories.tsx",433,706],"./controls/AlertText.stories":["./stories/controls/AlertText.stories.tsx",433,897],"./controls/AlertText.stories.tsx":["./stories/controls/AlertText.stories.tsx",433,897],"./controls/Button.stories":["./stories/controls/Button.stories.tsx",433,717],"./controls/Button.stories.tsx":["./stories/controls/Button.stories.tsx",433,717],"./controls/Checkbox.stories":["./stories/controls/Checkbox.stories.tsx",433,314],"./controls/Checkbox.stories.tsx":["./stories/controls/Checkbox.stories.tsx",433,314],"./controls/ComboBox.stories":["./stories/controls/ComboBox.stories.tsx",713,433,161],"./controls/ComboBox.stories.tsx":["./stories/controls/ComboBox.stories.tsx",713,433,161],"./controls/Divider.stories":["./stories/controls/Divider.stories.tsx",433,958],"./controls/Divider.stories.tsx":["./stories/controls/Divider.stories.tsx",433,958],"./controls/Fieldset.stories":["./stories/controls/Fieldset.stories.tsx",433,443],"./controls/Fieldset.stories.tsx":["./stories/controls/Fieldset.stories.tsx",433,443],"./controls/Label.stories":["./stories/controls/Label.stories.tsx",433,514],"./controls/Label.stories.tsx":["./stories/controls/Label.stories.tsx",433,514],"./controls/ListBox.stories":["./stories/controls/ListBox.stories.tsx",713,433,923],"./controls/ListBox.stories.tsx":["./stories/controls/ListBox.stories.tsx",713,433,923],"./controls/MenuBar.stories":["./stories/controls/MenuBar.stories.tsx",433,357],"./controls/MenuBar.stories.tsx":["./stories/controls/MenuBar.stories.tsx",433,357],"./controls/ProgressBar.stories":["./stories/controls/ProgressBar.stories.tsx",433,913],"./controls/ProgressBar.stories.tsx":["./stories/controls/ProgressBar.stories.tsx",433,913],"./controls/ScrollableContent.stories":["./stories/controls/ScrollableContent.stories.tsx",433,218],"./controls/ScrollableContent.stories.tsx":["./stories/controls/ScrollableContent.stories.tsx",433,218],"./controls/StatusBar.stories":["./stories/controls/StatusBar.stories.tsx",433,221],"./controls/StatusBar.stories.tsx":["./stories/controls/StatusBar.stories.tsx",433,221],"./controls/StatusBarSection.stories":["./stories/controls/StatusBarSection.stories.tsx",433,328],"./controls/StatusBarSection.stories.tsx":["./stories/controls/StatusBarSection.stories.tsx",433,328],"./controls/TextInput.stories":["./stories/controls/TextInput.stories.tsx",433,718],"./controls/TextInput.stories.tsx":["./stories/controls/TextInput.stories.tsx",433,718],"./controls/Textarea.stories":["./stories/controls/Textarea.stories.tsx",433,336],"./controls/Textarea.stories.tsx":["./stories/controls/Textarea.stories.tsx",433,336],"./controls/TimeInput.stories":["./stories/controls/TimeInput.stories.tsx",433,576],"./controls/TimeInput.stories.tsx":["./stories/controls/TimeInput.stories.tsx",433,576],"./controls/Toolbar.stories":["./stories/controls/Toolbar.stories.tsx",433,53],"./controls/Toolbar.stories.tsx":["./stories/controls/Toolbar.stories.tsx",433,53],"./controls/ToolbarButton.stories":["./stories/controls/ToolbarButton.stories.tsx",433,961],"./controls/ToolbarButton.stories.tsx":["./stories/controls/ToolbarButton.stories.tsx",433,961],"./controls/Well.stories":["./stories/controls/Well.stories.tsx",433,552],"./controls/Well.stories.tsx":["./stories/controls/Well.stories.tsx",433,552],"./controls/WindowContent.stories":["./stories/controls/WindowContent.stories.tsx",433,771],"./controls/WindowContent.stories.tsx":["./stories/controls/WindowContent.stories.tsx",433,771]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.tsx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.tsx)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[924],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.b78da21e.iframe.bundle.js.map