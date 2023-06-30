"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[682],{"./src/Wisp.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_Wisp});var react=__webpack_require__("./node_modules/react/index.js"),default_theme=__webpack_require__("./src/themes/default/theme.ts");const defaultConfig={enableDefaultElements:!0,enableVersionInfo:!0,enableWindowMinimize:!0,defaultWindowHeight:100,defaultWindowWidth:200,maxWindowHeight:1/0,maxWindowWidth:1/0,minWindowHeight:100,minWindowWidth:200,newWindowXOffset:10,newWindowYOffset:10,themes:[default_theme.Z],viewportWindowMargins:{top:0,left:0,bottom:0,right:0}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ConfigContext=react.createContext(defaultConfig),ConfigProvider=_ref=>{let{children,...config}=_ref;return(0,jsx_runtime.jsx)(ConfigContext.Provider,{value:{...defaultConfig,...config},children})};ConfigProvider.displayName="ConfigProvider";const useConfig=()=>(0,react.useContext)(ConfigContext);try{ConfigProvider.displayName="ConfigProvider",ConfigProvider.__docgenInfo={description:"",displayName:"ConfigProvider",props:{enableDefaultElements:{defaultValue:null,description:"",name:"enableDefaultElements",required:!1,type:{name:"boolean"}},enableVersionInfo:{defaultValue:null,description:"",name:"enableVersionInfo",required:!1,type:{name:"boolean"}},enableWindowMinimize:{defaultValue:null,description:"",name:"enableWindowMinimize",required:!1,type:{name:"boolean"}},defaultWindowHeight:{defaultValue:null,description:"",name:"defaultWindowHeight",required:!1,type:{name:"number"}},defaultWindowWidth:{defaultValue:null,description:"",name:"defaultWindowWidth",required:!1,type:{name:"number"}},maxWindowHeight:{defaultValue:null,description:"",name:"maxWindowHeight",required:!1,type:{name:"number"}},maxWindowWidth:{defaultValue:null,description:"",name:"maxWindowWidth",required:!1,type:{name:"number"}},minWindowHeight:{defaultValue:null,description:"",name:"minWindowHeight",required:!1,type:{name:"number"}},minWindowWidth:{defaultValue:null,description:"",name:"minWindowWidth",required:!1,type:{name:"number"}},newWindowXOffset:{defaultValue:null,description:"",name:"newWindowXOffset",required:!1,type:{name:"number"}},newWindowYOffset:{defaultValue:null,description:"",name:"newWindowYOffset",required:!1,type:{name:"number"}},themes:{defaultValue:null,description:"",name:"themes",required:!1,type:{name:"Theme[]"}},viewportWindowMargins:{defaultValue:null,description:"",name:"viewportWindowMargins",required:!1,type:{name:"ViewportWindowMargins"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ConfigContext.tsx#ConfigProvider"]={docgenInfo:ConfigProvider.__docgenInfo,name:"ConfigProvider",path:"src/ConfigContext.tsx#ConfigProvider"})}catch(__react_docgen_typescript_loader_error){}var Desktop=__webpack_require__("./src/elements/Desktop.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),hooks=__webpack_require__("./src/windowManager/hooks.ts"),utils=__webpack_require__("./src/icons/utils.ts");const TaskbarButtonElement=styled_components_browser_esm.ZP.button`
  ${props=>props.theme.elements.TaskbarButton}
`,TaskbarButtonTitle=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.elements.TaskbarButtonTitle}
`,TaskbarButtonIconElement=styled_components_browser_esm.ZP.img`
  ${props=>props.theme.elements.TaskbarButtonIcon}
`,TaskbarButtonIcon=_ref=>{let{icon}=_ref;if(!icon)return null;const iconFile=(0,utils.Q)(icon);return(0,jsx_runtime.jsx)(TaskbarButtonIconElement,{src:iconFile,alt:"Window icon"})};TaskbarButtonIcon.displayName="TaskbarButtonIcon";const TaskbarButton=_ref2=>{let{active,icon,title,onClick}=_ref2;return(0,jsx_runtime.jsxs)(TaskbarButtonElement,{type:"button",active,onClick,children:[(0,jsx_runtime.jsx)(TaskbarButtonIcon,{icon}),(0,jsx_runtime.jsx)(TaskbarButtonTitle,{children:title})]})};TaskbarButton.displayName="TaskbarButton";const Taskbar_TaskbarButton=TaskbarButton;try{TaskbarButton.displayName="TaskbarButton",TaskbarButton.__docgenInfo={description:"",displayName:"TaskbarButton",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Icon"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/Taskbar/TaskbarButton.tsx#TaskbarButton"]={docgenInfo:TaskbarButton.__docgenInfo,name:"TaskbarButton",path:"src/elements/Taskbar/TaskbarButton.tsx#TaskbarButton"})}catch(__react_docgen_typescript_loader_error){}const TaskbarElement=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.elements.Taskbar}
`,Taskbar=()=>{const{activeWindowId,windows,restoreWindow,setViewportWindowMargins}=(0,hooks.S)(),taskbarRef=react.useRef(),getTaskbarHeight=(0,react.useCallback)((()=>taskbarRef.current?.offsetHeight||0),[taskbarRef]);(0,react.useEffect)((()=>(setViewportWindowMargins({bottom:getTaskbarHeight()}),()=>setViewportWindowMargins({bottom:0}))),[getTaskbarHeight,setViewportWindowMargins]);return(0,jsx_runtime.jsx)(TaskbarElement,{ref:taskbarRef,children:Array.from(windows.entries()).filter((_ref2=>{let[id,window]=_ref2;return window.showAsTask})).map((_ref=>{let[id,window]=_ref;return(0,jsx_runtime.jsx)(Taskbar_TaskbarButton,{onClick:()=>restoreWindow(id),active:id===activeWindowId,icon:window.icon,title:window.title},id)}))})};Taskbar.displayName="Taskbar";const Taskbar_Taskbar=Taskbar;var process=__webpack_require__("./node_modules/process/browser.js");const VersionInformationElement=styled_components_browser_esm.ZP.p`
  ${props=>props.theme.elements.VersionInfo}
`,VersionInfo=()=>{const version=process.env.PACKAGE_VERSION||"0.4.0";return version?(0,jsx_runtime.jsxs)(VersionInformationElement,{children:["Wisp Version ",version]}):null};VersionInfo.displayName="VersionInfo";const elements_VersionInfo=VersionInfo,elements_DefaultElements=()=>{const config=useConfig();return config.enableDefaultElements?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Desktop.Z,{children:config.enableVersionInfo&&(0,jsx_runtime.jsx)(elements_VersionInfo,{})}),(0,jsx_runtime.jsx)(Taskbar_Taskbar,{})]}):null};var ThemeManagerContext=__webpack_require__("./src/themeManager/ThemeManagerContext.ts");const isObject=item=>item&&"object"==typeof item&&!Array.isArray(item),mergeDeep=(target,source)=>{let output=Object.assign({},target);return isObject(target)&&isObject(source)&&Object.keys(source).forEach((key=>{isObject(source[key])?key in target?output[key]=mergeDeep(target[key],source[key]):Object.assign(output,{[key]:source[key]}):Object.assign(output,{[key]:source[key]})})),output},ThemeManager=_ref=>{let{children}=_ref;const{themes}=useConfig(),baseOnDefault=theme=>theme.id===default_theme.Z.id?theme:mergeDeep(default_theme.Z,theme),initialTheme=baseOnDefault(themes[0]),[theme,setTheme]=(0,react.useState)(initialTheme),themeManagerContext={theme,changeTheme:theme=>{setTheme(baseOnDefault(theme))},themes};return(0,jsx_runtime.jsx)(ThemeManagerContext.j,{value:themeManagerContext,children:(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme,children})})};ThemeManager.displayName="ThemeManager";const themeManager_ThemeManager=ThemeManager;try{ThemeManager.displayName="ThemeManager",ThemeManager.__docgenInfo={description:"",displayName:"ThemeManager",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/themeManager/ThemeManager.tsx#ThemeManager"]={docgenInfo:ThemeManager.__docgenInfo,name:"ThemeManager",path:"src/themeManager/ThemeManager.tsx#ThemeManager"})}catch(__react_docgen_typescript_loader_error){}const minimizeWindow=windowManager=>id=>{windowManager.deactivateWindow(id),windowManager.updateWindow(id,{isMinimized:!0})},restoreWindow=windowManager=>id=>{windowManager.activateWindow(id),windowManager.updateWindow(id,{isMinimized:!1})},unmaximizeWindow=windowManager=>id=>{windowManager.activateWindow(id),windowManager.updateWindow(id,{isMaximized:!1})},state_constructWindow=(config,id,initial)=>({height:initial?.height??config.defaultWindowHeight,icon:initial?.icon,id,isClosable:initial?.isClosable??!0,isClosed:initial?.isClosed??!1,isDraggable:initial?.isDraggable??!0,isMaximizable:initial?.isMaximizable??!0,isMaximized:initial?.isMaximized??!1,isMinimizable:!!config.enableWindowMinimize&&(initial?.isMinimizable??!0),isMinimized:initial?.isMinimized??!1,isResizable:initial?.isResizable??!0,maxHeight:initial?.maxHeight??config.maxWindowHeight,maxWidth:initial?.maxWidth??config.maxWindowWidth,minHeight:initial?.minHeight??config.minWindowHeight,minWidth:initial?.minWidth??config.minWindowWidth,positionX:initial?.positionX??config.newWindowXOffset,positionY:initial?.positionY??config.newWindowYOffset,showAsTask:initial?.showAsTask??!0,title:initial?.title??"",width:initial?.width??config.defaultWindowWidth});const state_reducer=function reducer(state,action){switch(action.type){case"ACTIVATE_WINDOW":return{...state,activeWindowId:action.payload,windowOrder:[...state.windowOrder.filter((windowId=>windowId!==action.payload)),action.payload]};case"CLOSE_WINDOW":{const windows=new Map(state.windows);return windows.delete(action.payload),{...state,windows,windowOrder:[...state.windowOrder].filter((windowId=>windowId!==action.payload))}}case"CREATE_WINDOW":return{...state,windows:new Map(state.windows).set(action.payload.id,action.payload),windowOrder:state.windowOrder.concat(action.payload.id)};case"DEACTIVATE_WINDOW":return{...state,activeWindowId:action.payload===state.activeWindowId?null:state.activeWindowId};case"UPDATE_WINDOW":return{...state,windows:new Map(state.windows).set(action.payload.id,{...state.windows.get(action.payload.id),...action.payload.props})};case"SET_WINDOW_MARGINS":return{...state,viewportWindowMargins:{...state.viewportWindowMargins,...action.payload}};default:return state}},ViewportElement=styled_components_browser_esm.ZP.div`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`,Viewport=react.forwardRef(((_ref,ref)=>{let{children}=_ref;return(0,jsx_runtime.jsx)(ViewportElement,{ref,children})})),windowManager_Viewport=Viewport;try{Viewport.displayName="Viewport",Viewport.__docgenInfo={description:"",displayName:"Viewport",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/windowManager/Viewport.tsx#Viewport"]={docgenInfo:Viewport.__docgenInfo,name:"Viewport",path:"src/windowManager/Viewport.tsx#Viewport"})}catch(__react_docgen_typescript_loader_error){}var WindowManagerContext=__webpack_require__("./src/windowManager/WindowManagerContext.tsx");const WindowManager=_ref=>{let{children}=_ref;const config=useConfig(),[state,dispatch]=react.useReducer(state_reducer,{activeWindowId:null,viewportWindowMargins:config.viewportWindowMargins,windowOrder:[],windows:new Map}),viewportRef=react.useRef(),activateWindow=(0,react.useCallback)((id=>dispatch({type:"ACTIVATE_WINDOW",payload:id})),[dispatch]),closeWindow=(0,react.useCallback)((id=>dispatch({type:"CLOSE_WINDOW",payload:id})),[dispatch]),deactivateWindow=(0,react.useCallback)((id=>dispatch({type:"DEACTIVATE_WINDOW",payload:id})),[dispatch]),updateWindow=(0,react.useCallback)(((id,props)=>dispatch({type:"UPDATE_WINDOW",payload:{id,props}})),[dispatch]),setViewportWindowMargins=(0,react.useCallback)((viewportWindowMargins=>dispatch({type:"SET_WINDOW_MARGINS",payload:viewportWindowMargins})),[dispatch]),getViewportHeight=(0,react.useCallback)((()=>viewportRef.current?.offsetHeight||0),[viewportRef]),getViewportWidth=(0,react.useCallback)((()=>viewportRef.current?.offsetWidth||0),[viewportRef]),baseContext={...state,activateWindow,closeWindow,createWindow:(id,initialState)=>{const window=state_constructWindow(config,id,initialState);return dispatch({type:"CREATE_WINDOW",payload:window}),state.windows.get(id)},deactivateWindow,getViewportHeight,getViewportWidth,setViewportWindowMargins,updateWindow,viewportRef},context={...baseContext,maximizeWindow:(windowManager=baseContext,id=>{windowManager.activateWindow(id),windowManager.updateWindow(id,{isMaximized:!0})}),minimizeWindow:minimizeWindow(baseContext),restoreWindow:restoreWindow(baseContext),unmaximizeWindow:unmaximizeWindow(baseContext)};var windowManager;return(0,jsx_runtime.jsx)(WindowManagerContext.x,{value:context,children:(0,jsx_runtime.jsx)(windowManager_Viewport,{ref:viewportRef,children})})};WindowManager.displayName="WindowManager";const windowManager_WindowManager=WindowManager;try{WindowManager.displayName="WindowManager",WindowManager.__docgenInfo={description:"",displayName:"WindowManager",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/windowManager/WindowManager.tsx#WindowManager"]={docgenInfo:WindowManager.__docgenInfo,name:"WindowManager",path:"src/windowManager/WindowManager.tsx#WindowManager"})}catch(__react_docgen_typescript_loader_error){}const Wisp=_ref=>{let{children,...config}=_ref;return(0,jsx_runtime.jsx)(ConfigProvider,{...config,children:(0,jsx_runtime.jsx)(themeManager_ThemeManager,{children:(0,jsx_runtime.jsxs)(windowManager_WindowManager,{children:[(0,jsx_runtime.jsx)(elements_DefaultElements,{}),children]})})})};Wisp.displayName="Wisp";const src_Wisp=Wisp;try{Wisp.displayName="Wisp",Wisp.__docgenInfo={description:"",displayName:"Wisp",props:{enableDefaultElements:{defaultValue:null,description:"",name:"enableDefaultElements",required:!1,type:{name:"boolean"}},enableVersionInfo:{defaultValue:null,description:"",name:"enableVersionInfo",required:!1,type:{name:"boolean"}},enableWindowMinimize:{defaultValue:null,description:"",name:"enableWindowMinimize",required:!1,type:{name:"boolean"}},defaultWindowHeight:{defaultValue:null,description:"",name:"defaultWindowHeight",required:!1,type:{name:"number"}},defaultWindowWidth:{defaultValue:null,description:"",name:"defaultWindowWidth",required:!1,type:{name:"number"}},maxWindowHeight:{defaultValue:null,description:"",name:"maxWindowHeight",required:!1,type:{name:"number"}},maxWindowWidth:{defaultValue:null,description:"",name:"maxWindowWidth",required:!1,type:{name:"number"}},minWindowHeight:{defaultValue:null,description:"",name:"minWindowHeight",required:!1,type:{name:"number"}},minWindowWidth:{defaultValue:null,description:"",name:"minWindowWidth",required:!1,type:{name:"number"}},newWindowXOffset:{defaultValue:null,description:"",name:"newWindowXOffset",required:!1,type:{name:"number"}},newWindowYOffset:{defaultValue:null,description:"",name:"newWindowYOffset",required:!1,type:{name:"number"}},themes:{defaultValue:null,description:"",name:"themes",required:!1,type:{name:"Theme[]"}},viewportWindowMargins:{defaultValue:null,description:"",name:"viewportWindowMargins",required:!1,type:{name:"ViewportWindowMargins"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Wisp.tsx#Wisp"]={docgenInfo:Wisp.__docgenInfo,name:"Wisp",path:"src/Wisp.tsx#Wisp"})}catch(__react_docgen_typescript_loader_error){}},"./src/elements/Desktop.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const Desktop=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.div`
  ${props=>props.theme.elements.Desktop}
`,__WEBPACK_DEFAULT_EXPORT__=Desktop;try{Desktop.displayName="Desktop",Desktop.__docgenInfo={description:"",displayName:"Desktop",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/elements/Desktop.tsx#Desktop"]={docgenInfo:Desktop.__docgenInfo,name:"Desktop",path:"src/elements/Desktop.tsx#Desktop"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>getIconFileForSize});const getIconFileForSize=icon=>Object.entries(icon)[0][1]},"./src/themeManager/ThemeManagerContext.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>ThemeManagerProvider,r:()=>ThemeManagerContext});const ThemeManagerContext=__webpack_require__("./node_modules/react/index.js").createContext(void 0);ThemeManagerContext.displayName="ThemeManagerContext";const ThemeManagerProvider=ThemeManagerContext.Provider},"./src/themes/default/theme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>theme});var addressBar_namespaceObject={};__webpack_require__.r(addressBar_namespaceObject),__webpack_require__.d(addressBar_namespaceObject,{AddressBar:()=>AddressBar,AddressBarInput:()=>AddressBarInput});var alertButton_namespaceObject={};__webpack_require__.r(alertButton_namespaceObject),__webpack_require__.d(alertButton_namespaceObject,{AlertButton:()=>AlertButton});var alertText_namespaceObject={};__webpack_require__.r(alertText_namespaceObject),__webpack_require__.d(alertText_namespaceObject,{AlertText:()=>AlertText});var button_namespaceObject={};__webpack_require__.r(button_namespaceObject),__webpack_require__.d(button_namespaceObject,{Button:()=>Button,ButtonWrapper:()=>ButtonWrapper});var label_namespaceObject={};__webpack_require__.r(label_namespaceObject),__webpack_require__.d(label_namespaceObject,{Label:()=>Label});var checkbox_namespaceObject={};__webpack_require__.r(checkbox_namespaceObject),__webpack_require__.d(checkbox_namespaceObject,{Checkbox:()=>Checkbox,CheckboxLabel:()=>CheckboxLabel,CheckboxWrapper:()=>CheckboxWrapper});var comboBox_namespaceObject={};__webpack_require__.r(comboBox_namespaceObject),__webpack_require__.d(comboBox_namespaceObject,{ComboBoxButton:()=>ComboBoxButton,ComboBoxControl:()=>ComboBoxControl,ComboBoxInput:()=>ComboBoxInput,ComboBoxLabel:()=>ComboBoxLabel,ComboBoxOption:()=>ComboBoxOption,ComboBoxOptions:()=>ComboBoxOptions,ComboBoxWrapper:()=>ComboBoxWrapper});var controlWrapper_namespaceObject={};__webpack_require__.r(controlWrapper_namespaceObject),__webpack_require__.d(controlWrapper_namespaceObject,{ControlWrapper:()=>ControlWrapper});var divider_namespaceObject={};__webpack_require__.r(divider_namespaceObject),__webpack_require__.d(divider_namespaceObject,{Divider:()=>Divider});var fieldset_namespaceObject={};__webpack_require__.r(fieldset_namespaceObject),__webpack_require__.d(fieldset_namespaceObject,{Fieldset:()=>Fieldset,FieldsetLegend:()=>FieldsetLegend});var listBox_namespaceObject={};__webpack_require__.r(listBox_namespaceObject),__webpack_require__.d(listBox_namespaceObject,{ListBoxButton:()=>ListBoxButton,ListBoxLabel:()=>ListBoxLabel,ListBoxOption:()=>ListBoxOption,ListBoxOptions:()=>ListBoxOptions,ListBoxWrapper:()=>ListBoxWrapper});var menuBar_namespaceObject={};__webpack_require__.r(menuBar_namespaceObject),__webpack_require__.d(menuBar_namespaceObject,{MenuBar:()=>MenuBar,MenuBarThrobber:()=>MenuBarThrobber});var progressBar_namespaceObject={};__webpack_require__.r(progressBar_namespaceObject),__webpack_require__.d(progressBar_namespaceObject,{ProgressBar:()=>ProgressBar,ProgressBarFill:()=>ProgressBarFill});var scrollableContent_namespaceObject={};__webpack_require__.r(scrollableContent_namespaceObject),__webpack_require__.d(scrollableContent_namespaceObject,{ScrollableContentView:()=>ScrollableContentView,ScrollableContentWrapper:()=>ScrollableContentWrapper});var scrollbarHorizontal_namespaceObject={};__webpack_require__.r(scrollbarHorizontal_namespaceObject),__webpack_require__.d(scrollbarHorizontal_namespaceObject,{ScrollLeftButton:()=>ScrollLeftButton,ScrollRightButton:()=>ScrollRightButton,ScrollbarHorizontalThumb:()=>ScrollbarHorizontalThumb,ScrollbarHorizontalTrack:()=>ScrollbarHorizontalTrack,ScrollbarHorizontalWrapper:()=>ScrollbarHorizontalWrapper});var scrollbarVertical_namespaceObject={};__webpack_require__.r(scrollbarVertical_namespaceObject),__webpack_require__.d(scrollbarVertical_namespaceObject,{ScrollDownButton:()=>ScrollDownButton,ScrollUpButton:()=>ScrollUpButton,ScrollbarVerticalThumb:()=>ScrollbarVerticalThumb,ScrollbarVerticalTrack:()=>ScrollbarVerticalTrack,ScrollbarVerticalWrapper:()=>ScrollbarVerticalWrapper});var statusBar_namespaceObject={};__webpack_require__.r(statusBar_namespaceObject),__webpack_require__.d(statusBar_namespaceObject,{ResizeHandle:()=>ResizeHandle,StatusBar:()=>StatusBar});var statusBarSection_namespaceObject={};__webpack_require__.r(statusBarSection_namespaceObject),__webpack_require__.d(statusBarSection_namespaceObject,{StatusBarSection:()=>StatusBarSection});var textarea_namespaceObject={};__webpack_require__.r(textarea_namespaceObject),__webpack_require__.d(textarea_namespaceObject,{TextareaElement:()=>TextareaElement,TextareaLabel:()=>TextareaLabel,TextareaWrapper:()=>TextareaWrapper});var textInput_namespaceObject={};__webpack_require__.r(textInput_namespaceObject),__webpack_require__.d(textInput_namespaceObject,{TextInputElement:()=>TextInputElement,TextInputLabel:()=>TextInputLabel,TextInputWrapper:()=>TextInputWrapper});var timeInput_namespaceObject={};__webpack_require__.r(timeInput_namespaceObject),__webpack_require__.d(timeInput_namespaceObject,{TimeInputButtons:()=>TimeInputButtons,TimeInputControl:()=>TimeInputControl,TimeInputDecreaseButton:()=>TimeInputDecreaseButton,TimeInputField:()=>TimeInputField,TimeInputIncreaseButton:()=>TimeInputIncreaseButton,TimeInputLabel:()=>TimeInputLabel,TimeInputSeparator:()=>TimeInputSeparator,TimeInputValue:()=>TimeInputValue,TimeInputWrapper:()=>TimeInputWrapper});var toolbar_namespaceObject={};__webpack_require__.r(toolbar_namespaceObject),__webpack_require__.d(toolbar_namespaceObject,{Toolbar:()=>Toolbar});var toolbarButton_namespaceObject={};__webpack_require__.r(toolbarButton_namespaceObject),__webpack_require__.d(toolbarButton_namespaceObject,{ToolbarButton:()=>ToolbarButton,ToolbarButtonIcon:()=>ToolbarButtonIcon,ToolbarButtonLabel:()=>ToolbarButtonLabel,ToolbarButtonWrapper:()=>ToolbarButtonWrapper});var well_namespaceObject={};__webpack_require__.r(well_namespaceObject),__webpack_require__.d(well_namespaceObject,{Well:()=>Well});var desktop_namespaceObject={};__webpack_require__.r(desktop_namespaceObject),__webpack_require__.d(desktop_namespaceObject,{Desktop:()=>Desktop});var taskbar_namespaceObject={};__webpack_require__.r(taskbar_namespaceObject),__webpack_require__.d(taskbar_namespaceObject,{Taskbar:()=>Taskbar});var taskbarButton_namespaceObject={};__webpack_require__.r(taskbarButton_namespaceObject),__webpack_require__.d(taskbarButton_namespaceObject,{TaskbarButton:()=>TaskbarButton,TaskbarButtonIcon:()=>TaskbarButtonIcon,TaskbarButtonTitle:()=>TaskbarButtonTitle});var versionInfo_namespaceObject={};__webpack_require__.r(versionInfo_namespaceObject),__webpack_require__.d(versionInfo_namespaceObject,{VersionInfo:()=>VersionInfo});var resizeBorder_namespaceObject={};__webpack_require__.r(resizeBorder_namespaceObject),__webpack_require__.d(resizeBorder_namespaceObject,{EResize:()=>EResize,NEResize:()=>NEResize,NResize:()=>NResize,NWResize:()=>NWResize,SEResize:()=>SEResize,SResize:()=>SResize,SWResize:()=>SWResize,WResize:()=>WResize});var titleBar_namespaceObject={};__webpack_require__.r(titleBar_namespaceObject),__webpack_require__.d(titleBar_namespaceObject,{TitleBar:()=>TitleBar,TitleBarIcon:()=>TitleBarIcon,TitleBarTitle:()=>TitleBarTitle,TitleBarTitleContainer:()=>TitleBarTitleContainer});var titleBarButtons_namespaceObject={};__webpack_require__.r(titleBarButtons_namespaceObject),__webpack_require__.d(titleBarButtons_namespaceObject,{CloseButton:()=>CloseButton,MaximizeButton:()=>MaximizeButton,MinimizeButton:()=>MinimizeButton,TitleBarButtons:()=>TitleBarButtons,UnmaximizeButton:()=>UnmaximizeButton,WindowButton:()=>WindowButton});var window_namespaceObject={};__webpack_require__.r(window_namespaceObject),__webpack_require__.d(window_namespaceObject,{WindowElement:()=>WindowElement});var windowContent_namespaceObject={};__webpack_require__.r(windowContent_namespaceObject),__webpack_require__.d(windowContent_namespaceObject,{WindowContent:()=>WindowContent});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const AddressBar=styled_components_browser_esm.iv`
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
`,AlertText=styled_components_browser_esm.iv`
  display: flex;
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
  ${_ref=>{let{inlineLabel}=_ref;return inlineLabel?inlineStyle:columnStyle}}
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
  ${_ref=>{let{vertical}=_ref;return vertical?verticalStyle:horizontalStyle}}
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

  ${_ref=>{let{isAnimated}=_ref;return isAnimated&&animatedMenuThrobber}}

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
  height: calc(100% - ${_ref=>{let{horizontal}=_ref;return horizontal?22:0}}px);
  width: calc(100% - ${_ref2=>{let{vertical}=_ref2;return vertical?22:0}}px);
  overscroll-behavior: none;
  overflow-x: ${_ref3=>{let{horizontal}=_ref3;return horizontal?"scroll":"clip"}};
  overflow-y: ${_ref4=>{let{vertical}=_ref4;return vertical?"scroll":"clip"}};
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
  flex-grow: ${_ref=>{let{hasSetWidth}=_ref;return hasSetWidth?"unset":1}};
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
  ${_ref=>{let{active}=_ref;return active&&activeStyleProperties}}
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
`,default_controls={...addressBar_namespaceObject,...alertButton_namespaceObject,...alertText_namespaceObject,...button_namespaceObject,...checkbox_namespaceObject,...comboBox_namespaceObject,...controlWrapper_namespaceObject,...divider_namespaceObject,...fieldset_namespaceObject,...label_namespaceObject,...listBox_namespaceObject,...menuBar_namespaceObject,...progressBar_namespaceObject,...scrollableContent_namespaceObject,...scrollbarHorizontal_namespaceObject,...scrollbarVertical_namespaceObject,...statusBar_namespaceObject,...statusBarSection_namespaceObject,...textarea_namespaceObject,...textInput_namespaceObject,...timeInput_namespaceObject,...toolbar_namespaceObject,...toolbarButton_namespaceObject,...well_namespaceObject},Desktop=styled_components_browser_esm.iv`
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
`,WindowContent=styled_components_browser_esm.iv`
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
`,theme={id:"DEFAULT",name:"Default Theme",controls:default_controls,elements:default_elements,window:{...resizeBorder_namespaceObject,...titleBar_namespaceObject,...titleBarButtons_namespaceObject,...window_namespaceObject,...windowContent_namespaceObject}}},"./src/window/Window.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>window_Window});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/windowManager/hooks.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),types=__webpack_require__("./src/windowManager/types.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.NResize}
`,NEResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.NEResize}
`,EResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.EResize}
`,SEResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.SEResize}
`,SResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.SResize}
`,SWResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.SWResize}
`,WResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.WResize}
`,NWResize=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.NWResize}
`,ResizeBorder=_ref=>{let{resize}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(NResize,{onMouseDown:e=>resize(e,types.N.N)}),(0,jsx_runtime.jsx)(EResize,{onMouseDown:e=>resize(e,types.N.E)}),(0,jsx_runtime.jsx)(SResize,{onMouseDown:e=>resize(e,types.N.S)}),(0,jsx_runtime.jsx)(WResize,{onMouseDown:e=>resize(e,types.N.W)}),(0,jsx_runtime.jsx)(NEResize,{onMouseDown:e=>resize(e,types.N.NE)}),(0,jsx_runtime.jsx)(SEResize,{onMouseDown:e=>resize(e,types.N.SE)}),(0,jsx_runtime.jsx)(SWResize,{onMouseDown:e=>resize(e,types.N.SW)}),(0,jsx_runtime.jsx)(NWResize,{onMouseDown:e=>resize(e,types.N.NW)})]})},components_ResizeBorder=ResizeBorder;try{ResizeBorder.displayName="ResizeBorder",ResizeBorder.__docgenInfo={description:"",displayName:"ResizeBorder",props:{resize:{defaultValue:null,description:"",name:"resize",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent>, direction: Direction) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/components/ResizeBorder.tsx#ResizeBorder"]={docgenInfo:ResizeBorder.__docgenInfo,name:"ResizeBorder",path:"src/window/components/ResizeBorder.tsx#ResizeBorder"})}catch(__react_docgen_typescript_loader_error){}var utils=__webpack_require__("./src/icons/utils.ts");const TitleBarButtonsElement=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.TitleBarButtons}
`,WindowButton=styled_components_browser_esm.ZP.button`
  ${props=>props.theme.window.WindowButton}
`;WindowButton.defaultProps={type:"button"};const MinimizeButton=(0,styled_components_browser_esm.ZP)(WindowButton)`
  ${props=>props.theme.window.MinimizeButton}
`,MaximizeButton=(0,styled_components_browser_esm.ZP)(WindowButton)`
  ${props=>props.theme.window.MaximizeButton}
`,UnmaximizeButton=(0,styled_components_browser_esm.ZP)(WindowButton)`
  ${props=>props.theme.window.UnmaximizeButton}
`,CloseButton=(0,styled_components_browser_esm.ZP)(WindowButton)`
  ${props=>props.theme.window.CloseButton}
`,TitleBarButtons=_ref=>{let{close,isClosable,isMaximizable,isMaximized,isMinimizable,maximize,minimize,unmaximize}=_ref;return(0,jsx_runtime.jsxs)(TitleBarButtonsElement,{children:[isMinimizable&&(0,jsx_runtime.jsx)(MinimizeButton,{onClick:minimize}),isMaximizable&&(isMaximized?(0,jsx_runtime.jsx)(UnmaximizeButton,{onClick:unmaximize}):(0,jsx_runtime.jsx)(MaximizeButton,{onClick:maximize})),isClosable&&(0,jsx_runtime.jsx)(CloseButton,{onClick:close})]})};TitleBarButtons.displayName="TitleBarButtons";const components_TitleBarButtons=TitleBarButtons;try{TitleBarButtons.displayName="TitleBarButtons",TitleBarButtons.__docgenInfo={description:"",displayName:"TitleBarButtons",props:{close:{defaultValue:null,description:"",name:"close",required:!0,type:{name:"() => void"}},isClosable:{defaultValue:null,description:"",name:"isClosable",required:!0,type:{name:"boolean"}},isMaximizable:{defaultValue:null,description:"",name:"isMaximizable",required:!0,type:{name:"boolean"}},isMaximized:{defaultValue:null,description:"",name:"isMaximized",required:!0,type:{name:"boolean"}},isMinimizable:{defaultValue:null,description:"",name:"isMinimizable",required:!0,type:{name:"boolean"}},maximize:{defaultValue:null,description:"",name:"maximize",required:!0,type:{name:"() => void"}},minimize:{defaultValue:null,description:"",name:"minimize",required:!0,type:{name:"() => void"}},unmaximize:{defaultValue:null,description:"",name:"unmaximize",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/components/TitleBarButtons.tsx#TitleBarButtons"]={docgenInfo:TitleBarButtons.__docgenInfo,name:"TitleBarButtons",path:"src/window/components/TitleBarButtons.tsx#TitleBarButtons"})}catch(__react_docgen_typescript_loader_error){}const TitleBarElement=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.TitleBar}
`,TitleContainer=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.TitleBarTitleContainer}
`,TitleBarTitle=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.TitleBarTitle}
`,TitleBarIconElement=styled_components_browser_esm.ZP.img`
  ${props=>props.theme.window.TitleBarIcon}
`,TitleBarIcon=_ref=>{let{icon}=_ref;if(!icon)return null;const iconFile=(0,utils.Q)(icon);return(0,jsx_runtime.jsx)(TitleBarIconElement,{src:iconFile,alt:"Window icon"})};TitleBarIcon.displayName="TitleBarIcon";const TitleBar=_ref2=>{let{close,drag,icon,isActive,isMaximizable,isMaximized,isMinimizable,isClosable,maximize,minimize,title,unmaximize}=_ref2;return(0,jsx_runtime.jsxs)(TitleBarElement,{isActive,children:[(0,jsx_runtime.jsxs)(TitleContainer,{onMouseDown:drag,onDoubleClick:()=>{isMaximized?unmaximize():maximize()},children:[(0,jsx_runtime.jsx)(TitleBarIcon,{icon}),(0,jsx_runtime.jsx)(TitleBarTitle,{children:title})]}),(0,jsx_runtime.jsx)(components_TitleBarButtons,{close,isClosable,isMaximizable,isMaximized,isMinimizable,maximize,minimize,unmaximize})]})};TitleBar.displayName="TitleBar";const components_TitleBar=TitleBar;try{TitleBar.displayName="TitleBar",TitleBar.__docgenInfo={description:"",displayName:"TitleBar",props:{close:{defaultValue:null,description:"",name:"close",required:!0,type:{name:"() => void"}},drag:{defaultValue:null,description:"",name:"drag",required:!0,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"Icon"}},isClosable:{defaultValue:null,description:"",name:"isClosable",required:!0,type:{name:"boolean"}},isMaximizable:{defaultValue:null,description:"",name:"isMaximizable",required:!0,type:{name:"boolean"}},isMaximized:{defaultValue:null,description:"",name:"isMaximized",required:!0,type:{name:"boolean"}},isMinimizable:{defaultValue:null,description:"",name:"isMinimizable",required:!0,type:{name:"boolean"}},maximize:{defaultValue:null,description:"",name:"maximize",required:!0,type:{name:"() => void"}},minimize:{defaultValue:null,description:"",name:"minimize",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},unmaximize:{defaultValue:null,description:"",name:"unmaximize",required:!0,type:{name:"() => void"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/components/TitleBar.tsx#TitleBar"]={docgenInfo:TitleBar.__docgenInfo,name:"TitleBar",path:"src/window/components/TitleBar.tsx#TitleBar"})}catch(__react_docgen_typescript_loader_error){}const WindowContent=styled_components_browser_esm.ZP.div`
  ${props=>props.theme.window.WindowContent}
`,components_WindowContent=WindowContent;try{WindowContent.displayName="WindowContent",WindowContent.__docgenInfo={description:"",displayName:"WindowContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/components/WindowContent.tsx#WindowContent"]={docgenInfo:WindowContent.__docgenInfo,name:"WindowContent",path:"src/window/components/WindowContent.tsx#WindowContent"})}catch(__react_docgen_typescript_loader_error){}const WindowElement=styled_components_browser_esm.ZP.div.attrs((props=>({style:{top:`${props.positionY}px`,width:`${props.width}px`,height:`${props.height}px`,left:`${props.positionX}px`,zIndex:props.orderNumber}})))`
  ${props=>props.theme.window.WindowElement}
`,components_WindowElement=WindowElement;try{WindowElement.displayName="WindowElement",WindowElement.__docgenInfo={description:"",displayName:"WindowElement",props:{viewportWindowMargins:{defaultValue:null,description:"",name:"viewportWindowMargins",required:!0,type:{name:"ViewportWindowMargins"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},isMaximized:{defaultValue:null,description:"",name:"isMaximized",required:!0,type:{name:"boolean"}},isMinimized:{defaultValue:null,description:"",name:"isMinimized",required:!0,type:{name:"boolean"}},positionX:{defaultValue:null,description:"",name:"positionX",required:!0,type:{name:"number"}},positionY:{defaultValue:null,description:"",name:"positionY",required:!0,type:{name:"number"}},orderNumber:{defaultValue:null,description:"",name:"orderNumber",required:!0,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/components/WindowElement.tsx#WindowElement"]={docgenInfo:WindowElement.__docgenInfo,name:"WindowElement",path:"src/window/components/WindowElement.tsx#WindowElement"})}catch(__react_docgen_typescript_loader_error){}var dimensions=__webpack_require__("./src/window/handlers/utils/dimensions.ts"),mouseDragHandler=__webpack_require__("./src/window/handlers/utils/mouseDragHandler.ts");const windowDragHandler=(windowManager,window)=>event=>{if(windowManager.activateWindow(window.id),window.isDraggable&&!window.isMaximized)return(0,mouseDragHandler.Z)(event,((xOffset,yOffset)=>{window={...window,...repositionWindow(window,xOffset,yOffset,(0,dimensions.ed)(windowManager))},windowManager.updateWindow(window.id,window)}))},repositionWindow=(window,xOffset,yOffset,boundaries)=>({positionX:(0,dimensions.XP)(window,xOffset,boundaries),positionY:(0,dimensions.jd)(window,yOffset,boundaries)});var windowResizeHandler=__webpack_require__("./src/window/handlers/windowResizeHandler.ts"),WindowContext=__webpack_require__("./src/window/WindowContext.tsx");const Window=_ref=>{let{children,id,...windowProps}=_ref;const windowManager=(0,hooks.S)(),wmWindow=windowManager.windows.get(id),orderNumber=windowManager.windowOrder.indexOf(id);if((0,react.useEffect)((()=>(wmWindow||windowManager.createWindow(id,windowProps),()=>windowManager.closeWindow(id))),[id]),!wmWindow||wmWindow.isClosed)return null;const window={...wmWindow};return(0,jsx_runtime.jsx)(WindowContext.WU,{value:wmWindow,children:(0,jsx_runtime.jsxs)(components_WindowElement,{height:window.height,isMaximized:window.isMaximized,isMinimized:window.isMinimized,orderNumber,positionX:window.positionX,positionY:window.positionY,width:window.width,viewportWindowMargins:windowManager.viewportWindowMargins,children:[(0,jsx_runtime.jsx)(components_TitleBar,{close:()=>windowManager.closeWindow(id),drag:windowDragHandler(windowManager,window),icon:window.icon,isActive:id===windowManager.activeWindowId,isClosable:window.isClosable,isMaximizable:window.isMaximizable,isMaximized:window.isMaximized,isMinimizable:window.isMinimizable,maximize:()=>windowManager.maximizeWindow(id),minimize:()=>windowManager.minimizeWindow(id),title:window.title,unmaximize:()=>windowManager.unmaximizeWindow(id)}),(0,jsx_runtime.jsx)(components_WindowContent,{onClick:()=>windowManager.activateWindow(id),children}),window.isResizable&&(0,jsx_runtime.jsx)(components_ResizeBorder,{resize:(0,windowResizeHandler.X)(windowManager,window)})]})})};Window.displayName="Window";const window_Window=Window;try{Window.displayName="Window",Window.__docgenInfo={description:"",displayName:"Window",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"number"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Icon"}},isClosable:{defaultValue:null,description:"",name:"isClosable",required:!1,type:{name:"boolean"}},isClosed:{defaultValue:null,description:"",name:"isClosed",required:!1,type:{name:"boolean"}},isDraggable:{defaultValue:null,description:"",name:"isDraggable",required:!1,type:{name:"boolean"}},isMaximizable:{defaultValue:null,description:"",name:"isMaximizable",required:!1,type:{name:"boolean"}},isMaximized:{defaultValue:null,description:"",name:"isMaximized",required:!1,type:{name:"boolean"}},isMinimizable:{defaultValue:null,description:"",name:"isMinimizable",required:!1,type:{name:"boolean"}},isMinimized:{defaultValue:null,description:"",name:"isMinimized",required:!1,type:{name:"boolean"}},isResizable:{defaultValue:null,description:"",name:"isResizable",required:!1,type:{name:"boolean"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"number"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"number"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"number"}},positionX:{defaultValue:null,description:"",name:"positionX",required:!1,type:{name:"number"}},positionY:{defaultValue:null,description:"",name:"positionY",required:!1,type:{name:"number"}},showAsTask:{defaultValue:null,description:"",name:"showAsTask",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/Window.tsx#Window"]={docgenInfo:Window.__docgenInfo,name:"Window",path:"src/window/Window.tsx#Window"})}catch(__react_docgen_typescript_loader_error){}},"./src/window/WindowContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WU:()=>WindowProvider,zY:()=>useWindow});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const WindowContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),WindowProvider=WindowContext.Provider,useWindow=()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WindowContext);try{WindowProvider.displayName="WindowProvider",WindowProvider.__docgenInfo={description:"",displayName:"WindowProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/window/WindowContext.tsx#WindowProvider"]={docgenInfo:WindowProvider.__docgenInfo,name:"WindowProvider",path:"src/window/WindowContext.tsx#WindowProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/window/handlers/utils/dimensions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kf:()=>calculateWidth,Tf:()=>calculateHeight,XP:()=>calculatePositionX,ed:()=>calculateBoundaries,jd:()=>calculatePositionY});const calculatePositionX=(window,xOffset,boundaries)=>{const newX=window.positionX-xOffset,maxX=boundaries.maxX-window.width;return Math.min(Math.max(newX,boundaries.minX),maxX)},calculatePositionY=(window,yOffset,boundaries)=>{const newY=window.positionY-yOffset,maxY=boundaries.maxY-window.height;return Math.min(Math.max(newY,boundaries.minY),maxY)},calculateWidth=(window,xOffset,boundaries,scalingLeft)=>{const newWidth=window.width-xOffset;return Math.min(Math.max(newWidth,window.minWidth),boundaries.maxX-window.positionX,window.maxWidth,scalingLeft?window.width+window.positionX-boundaries.minX:Math.min())},calculateHeight=(window,yOffset,boundaries,scalingUp)=>{const newHeight=window.height-yOffset;return Math.min(Math.max(newHeight,window.minHeight),boundaries.maxY-window.positionY,window.maxHeight,scalingUp?window.height+window.positionY-boundaries.minY:Math.min())},calculateBoundaries=_ref=>{let{getViewportWidth,getViewportHeight,viewportWindowMargins}=_ref;return{minX:viewportWindowMargins.left,minY:viewportWindowMargins.top,maxX:getViewportWidth()-viewportWindowMargins.right,maxY:getViewportHeight()-viewportWindowMargins.bottom}}},"./src/window/handlers/utils/mouseDragHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(initialEvent,callback)=>{initialEvent.preventDefault();let mouseMoveEventListener=null,mouseUpEventListener=null,prevClientX=null,prevClientY=null,xOffset=0,yOffset=0;mouseMoveEventListener=e=>{return(event=e).preventDefault(),void(0===event.button&&(prevClientX?(xOffset=prevClientX-event.clientX,yOffset=prevClientY-event.clientY,prevClientX=event.clientX,prevClientY=event.clientY,callback(xOffset,yOffset)):(prevClientX=event.clientX,prevClientY=event.clientY)));var event},mouseUpEventListener=()=>(document.removeEventListener("mousemove",mouseMoveEventListener),void document.removeEventListener("mouseup",mouseUpEventListener)),document.addEventListener("mousemove",mouseMoveEventListener),document.addEventListener("mouseup",mouseUpEventListener)}},"./src/window/handlers/windowResizeHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>windowResizeHandler});var _windowManager_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/windowManager/types.ts"),_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/window/handlers/utils/dimensions.ts"),_utils_mouseDragHandler__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/window/handlers/utils/mouseDragHandler.ts");const windowResizeHandler=(windowManager,window)=>(event,direction)=>{if(windowManager.activateWindow(window.id),window.isResizable&&!window.isMaximized)return(0,_utils_mouseDragHandler__WEBPACK_IMPORTED_MODULE_0__.Z)(event,((xOffset,yOffset)=>{window={...window,...resizeWindow(window,direction,xOffset,yOffset,(0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.ed)(windowManager))},windowManager.updateWindow(window.id,window)}))},resizeWindow=(window,direction,xOffset,yOffset,boundaries)=>{const resizeN=()=>{const newHeight=(0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.Tf)(window,-yOffset,boundaries,!0);return{height:newHeight,positionY:window.positionY+(window.height-newHeight)}},resizeE=()=>({width:(0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.Kf)(window,xOffset,boundaries)}),resizeS=()=>({height:(0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.Tf)(window,yOffset,boundaries)}),resizeW=()=>{const newWidth=(0,_utils_dimensions__WEBPACK_IMPORTED_MODULE_1__.Kf)(window,-xOffset,boundaries,!0);return{width:newWidth,positionX:window.positionX+(window.width-newWidth)}};switch(direction){case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.N:return{...resizeN()};case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.NE:return{...resizeN(),...resizeE()};case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.E:return{...resizeE()};case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.SE:return{...resizeS(),...resizeE()};case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.S:return{...resizeS()};case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.SW:return{...resizeS(),...resizeW()};case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.W:return{...resizeW()};case _windowManager_types__WEBPACK_IMPORTED_MODULE_2__.N.NW:return{...resizeN(),...resizeW()};default:return{}}}},"./src/windowManager/WindowManagerContext.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>WindowManagerContext,x:()=>WindowManagerProvider});const WindowManagerContext=__webpack_require__("./node_modules/react/index.js").createContext(void 0);WindowManagerContext.displayName="WindowManagerContext";const WindowManagerProvider=WindowManagerContext.Provider;try{WindowManagerProvider.displayName="WindowManagerContext",WindowManagerProvider.__docgenInfo={description:"",displayName:"WindowManagerContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/windowManager/WindowManagerContext.tsx#WindowManagerContext"]={docgenInfo:WindowManagerContext.__docgenInfo,name:"WindowManagerContext",path:"src/windowManager/WindowManagerContext.tsx#WindowManagerContext"})}catch(__react_docgen_typescript_loader_error){}},"./src/windowManager/hooks.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useWindowManager});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_WindowManagerContext__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/windowManager/WindowManagerContext.tsx");function useWindowManager(){return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_WindowManagerContext__WEBPACK_IMPORTED_MODULE_1__.b)}},"./src/windowManager/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Direction});let Direction=function(Direction){return Direction.N="N",Direction.NE="NE",Direction.E="E",Direction.SE="SE",Direction.S="S",Direction.SW="SW",Direction.W="W",Direction.NW="NW",Direction}({})}}]);
//# sourceMappingURL=682.f3fcff15.iframe.bundle.js.map