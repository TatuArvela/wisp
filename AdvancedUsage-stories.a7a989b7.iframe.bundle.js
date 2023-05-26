"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[49],{"./stories/AdvancedUsage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExternalWindowToggling:()=>ExternalWindowToggling,StickyNotes:()=>StickyNotes,WindowContext:()=>WindowContext,WispInWisp:()=>WispInWisp,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Wisp.tsx"),_src_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/window/Window.tsx"),_src_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/window/WindowContext.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Wisp/Advanced Usage",component:_src_index__WEBPACK_IMPORTED_MODULE_2__.Z},WispInWisp={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"1",initialState:{title:"Parent window",width:600,height:480},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{border:"1px solid black",boxSizing:"border-box",height:"100%",width:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_2__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"2",initialState:{title:"Child window"},children:"Test"})})})})}},commonState={height:200,isClosable:!1,isMaximizable:!1,isMinimizable:!1,positionX:100,positionY:100,width:200},StickyNotes={args:{enableDefaultElements:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"1",initialState:{...commonState,isDraggable:!1,isResizable:!1,title:"Static note"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Immovable object"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"2",initialState:{...commonState,title:"Resizable sticky note"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Make me big!"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"3",initialState:{...commonState,isResizable:!1,title:"Sticky note"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Can't close me!"})})]})}},ExternalWindowToggling=()=>{const[showWindow,setShowWindow]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:"10px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{type:"button",onClick:()=>setShowWindow(!showWindow),children:"Toggle window"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"800px",height:"600px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_src_index__WEBPACK_IMPORTED_MODULE_2__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"1",initialState:{title:"Initially shown"},children:"This window is initially shown"}),showWindow&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"2",initialState:{title:"Toggled window"},children:"This window is toggled by the button above"})]})})]})};ExternalWindowToggling.displayName="ExternalWindowToggling";const ContextExampleComponent=()=>{const window=(0,_src_window_WindowContext__WEBPACK_IMPORTED_MODULE_4__.zY)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("table",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tbody",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"width"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.width})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"height"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.height})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"x position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.positionX})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:"y position"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td",{children:window.positionY})]})]})})};ContextExampleComponent.displayName="ContextExampleComponent";const WindowContext=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_2__.Z,{enableDefaultElements:!1,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_index__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"1",initialState:{width:230,height:115,title:"Window Context Example"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ContextExampleComponent,{})})});WindowContext.displayName="WindowContext",WispInWisp.parameters={...WispInWisp.parameters,docs:{...WispInWisp.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <Window id=\"1\" initialState={{\n      title: 'Parent window',\n      width: 600,\n      height: 480\n    }}>\n        <div style={{\n        border: '1px solid black',\n        boxSizing: 'border-box',\n        height: '100%',\n        width: '100%'\n      }}>\n          <Wisp>\n            <Window id=\"2\" initialState={{\n            title: 'Child window'\n          }}>\n              Test\n            </Window>\n          </Wisp>\n        </div>\n      </Window>\n  }\n}",...WispInWisp.parameters?.docs?.source}}},StickyNotes.parameters={...StickyNotes.parameters,docs:{...StickyNotes.parameters?.docs,source:{originalSource:"{\n  args: {\n    enableDefaultElements: false,\n    children: <>\n        <Window id=\"1\" initialState={{\n        ...commonState,\n        isDraggable: false,\n        isResizable: false,\n        title: 'Static note'\n      }}>\n          <p>Immovable object</p>\n        </Window>\n        <Window id=\"2\" initialState={{\n        ...commonState,\n        title: 'Resizable sticky note'\n      }}>\n          <p>Make me big!</p>\n        </Window>\n        <Window id=\"3\" initialState={{\n        ...commonState,\n        isResizable: false,\n        title: 'Sticky note'\n      }}>\n          <p>Can't close me!</p>\n        </Window>\n      </>\n  }\n}",...StickyNotes.parameters?.docs?.source}}},ExternalWindowToggling.parameters={...ExternalWindowToggling.parameters,docs:{...ExternalWindowToggling.parameters?.docs,source:{originalSource:"() => {\n  const [showWindow, setShowWindow] = useState<boolean>(false);\n  return <div>\n      <div style={{\n      padding: '10px'\n    }}>\n        <button type=\"button\" onClick={() => setShowWindow(!showWindow)}>\n          Toggle window\n        </button>\n      </div>\n      <div style={{\n      width: '800px',\n      height: '600px'\n    }}>\n        <Wisp>\n          <Window id=\"1\" initialState={{\n          title: 'Initially shown'\n        }}>\n            This window is initially shown\n          </Window>\n          {showWindow && <Window id=\"2\" initialState={{\n          title: 'Toggled window'\n        }}>\n              This window is toggled by the button above\n            </Window>}\n        </Wisp>\n      </div>\n    </div>;\n}",...ExternalWindowToggling.parameters?.docs?.source}}},WindowContext.parameters={...WindowContext.parameters,docs:{...WindowContext.parameters?.docs,source:{originalSource:"() => <Wisp enableDefaultElements={false}>\n    <Window id=\"1\" initialState={{\n    width: 230,\n    height: 115,\n    title: 'Window Context Example'\n  }}>\n      <ContextExampleComponent />\n    </Window>\n  </Wisp>",...WindowContext.parameters?.docs?.source}}};const __namedExportsOrder=["WispInWisp","StickyNotes","ExternalWindowToggling","WindowContext"]}}]);