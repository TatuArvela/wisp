"use strict";(globalThis.webpackChunk_tatuarvela_wisp=globalThis.webpackChunk_tatuarvela_wisp||[]).push([[169],{"./node_modules/@headlessui/react/dist/components/keyboard.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>o});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},"./node_modules/@headlessui/react/dist/hooks/use-computed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>i});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function i(e,o){let[u,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.e)((()=>t(r.current)),[r,t,...o]),u}},"./node_modules/@headlessui/react/dist/hooks/use-controllable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>T});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=void 0!==l,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return!e||t.current||u.current?!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((n=>(e||s(n),null==r?void 0:r(n))))]}},"./node_modules/@headlessui/react/dist/hooks/use-disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>p});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/disposables.js");function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.k);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>()=>e.dispose()),[e]),e}},"./node_modules/@headlessui/react/dist/hooks/use-event.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>o});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...r)=>e.current(...r)),[e])}},"./node_modules/@headlessui/react/dist/hooks/use-id.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>I});var o,react=__webpack_require__("./node_modules/react/index.js"),use_iso_morphic_effect=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js"),env=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");let I=null!=(o=react.useId)?o:function(){let n=function l(){let[e,f]=(0,react.useState)(env.O.isHandoffComplete);return e&&!1===env.O.isHandoffComplete&&f(!1),(0,react.useEffect)((()=>{!0!==e&&f(!0)}),[e]),(0,react.useEffect)((()=>env.O.handoff()),[]),e}(),[e,u]=react.useState(n?()=>env.O.nextId():null);return(0,use_iso_morphic_effect.e)((()=>{null===e&&u(env.O.nextId())}),[e]),null!=e?""+e:void 0}},"./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>l});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_utils_env_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.O.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)}},"./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{r.current=e}),[e]),r}},"./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>L});var react=__webpack_require__("./node_modules/react/index.js"),focus_management=__webpack_require__("./node_modules/@headlessui/react/dist/utils/focus-management.js"),use_latest_value=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");function d(e,r,n){let o=(0,use_latest_value.E)(r);(0,react.useEffect)((()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function L(m,E,c=!0){let i=(0,react.useRef)(!1);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return"function"==typeof t?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(null!==n&&n.getRootNode().contains(n)){for(let r of l){if(null===r)continue;let t=r instanceof HTMLElement?r:r.current;if(null!=t&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!(0,focus_management.sP)(n,focus_management.tJ.Loose)&&-1!==n.tabIndex&&e.preventDefault(),E(e,n)}}(0,react.useEffect)((()=>{requestAnimationFrame((()=>{i.current=c}))}),[c]);let u=(0,react.useRef)(null);d("mousedown",(e=>{var o,l;i.current&&(u.current=(null==(l=null==(o=e.composedPath)?void 0:o.call(e))?void 0:l[0])||e.target)}),!0),d("click",(e=>{u.current&&(f(e,(()=>u.current)),u.current=null)}),!0),d("blur",(e=>f(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},"./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>s});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");function i(t){var n;if(t.type)return t.type;let e=null!=(n=t.as)?n:"button";return"string"==typeof e&&"button"===e.toLowerCase()?"button":void 0}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>i(t)));return(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{u(i(t))}),[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.e)((()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")}),[n,e]),n}},"./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>y});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/hooks/use-event.js");let u=Symbol();function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{n.current=t}),[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)((e=>{for(let o of n.current)null!=o&&("function"==typeof o?o(e):o.current=e)}));return t.every((e=>null==e||(null==e?void 0:e[u])))?void 0:c}},"./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>u});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(r){e.current=t(r)}}}},"./node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>p,_:()=>c});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/render.js");var e,p=((e=p||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let c=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.yV)((function s(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.sY)({ourProps:d,theirProps:e,slot:{},defaultTag:"div",name:"Hidden"})}))},"./node_modules/@headlessui/react/dist/internal/open-closed.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZM:()=>d,oJ:()=>C,up:()=>c});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var e,d=((e=d||{})[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e);function C(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}},"./node_modules/@headlessui/react/dist/utils/bugs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=""===(null==e?void 0:e.getAttribute("disabled"));return(!t||!function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;null!==e;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}(l))&&t}__webpack_require__.d(__webpack_exports__,{P:()=>r})},"./node_modules/@headlessui/react/dist/utils/calculate-active-index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>a,d:()=>x});var e,a=((e=a||{})[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e);function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=null!=l?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex((e=>!n.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((i,c,u)=>!(-1!==s&&u.length-c-1>=s)&&!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,i)=>!(i<=s)&&!n.resolveDisabled(e)));case 3:{let e=t.slice().reverse().findIndex((i=>!n.resolveDisabled(i)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((e=>n.resolveId(e)===r.id));case 5:return null;default:!function f(r){throw new Error("Unexpected object: "+r)}(r)}})();return-1===d?l:d}},"./node_modules/@headlessui/react/dist/utils/disposables.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function o(){let n=[],r={addEventListener:(e,t,s,a)=>(e.addEventListener(t,s,a),r.add((()=>e.removeEventListener(t,s,a)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>r.requestAnimationFrame((()=>r.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return r.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return function micro_task_t(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((o=>setTimeout((()=>{throw o}))))}((()=>{t.current&&e[0]()})),r.add((()=>{t.current=!1}))},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add((()=>{Object.assign(e.style,{[t]:a})}))},group(e){let t=o();return e(t),this.add((()=>t.dispose()))},add:e=>(n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}),dispose(){for(let e of n.splice(0))e()}};return r}__webpack_require__.d(__webpack_exports__,{k:()=>o})},"./node_modules/@headlessui/react/dist/utils/env.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>s});var i=Object.defineProperty,r=(t,e,n)=>(((t,e,n)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n})(t,"symbol"!=typeof e?e+"":e,n),n);let s=new class o{constructor(){r(this,"current",this.detect()),r(this,"handoffState","pending"),r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},"./node_modules/@headlessui/react/dist/utils/focus-management.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{sP:()=>h,tJ:()=>T,z2:()=>I});var _match_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),_owner_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/owner.js");let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var t,o,n,M=((n=M||{})[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n),N=((o=N||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),F=((t=F||{})[t.Previous=-1]="Previous",t[t.Next=1]="Next",t);var T=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T||{});function h(e,r=0){var t;return e!==(null==(t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.r)(e))?void 0:t.body)&&(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.E)(r,{0:()=>e.matches(c),1(){let l=e;for(;null!==l;){if(l.matches(c))return!0;l=l.parentElement}return!1}})}var w=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w||{});"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));["textarea","input"].join(",");function I(e,r=(t=>t)){return e.slice().sort(((t,l)=>{let o=r(t),i=r(l);if(null===o||null===i)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}},"./node_modules/@headlessui/react/dist/utils/form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function e(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))f(t,s(r,i),o);return t}function s(n,r){return n?n+"["+r+"]":r}function f(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f(n,s(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):"boolean"==typeof t?n.push([r,t?"1":"0"]):"string"==typeof t?n.push([r,t]):"number"==typeof t?n.push([r,`${t}`]):null==t?n.push([r,""]):e(t,r,n)}__webpack_require__.d(__webpack_exports__,{t:()=>e})},"./node_modules/@headlessui/react/dist/utils/match.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function u(r,n,...a){if(r in n){let e=n[r];return"function"==typeof e?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}__webpack_require__.d(__webpack_exports__,{E:()=>u})},"./node_modules/@headlessui/react/dist/utils/owner.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>e});var _env_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@headlessui/react/dist/utils/env.js");function e(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.O.isServer?null:r instanceof Node?r.ownerDocument:null!=r&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}},"./node_modules/@headlessui/react/dist/utils/render.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AN:()=>S,oA:()=>R,yV:()=>D,sY:()=>X});var react=__webpack_require__("./node_modules/react/index.js");function class_names_e(...n){return n.filter(Boolean).join(" ")}var e,a,match=__webpack_require__("./node_modules/@headlessui/react/dist/utils/match.js"),S=((a=S||{})[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a),j=((e=j||{})[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e);function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N(t,r);if(n)return c(o,e,a,f);let u=null!=s?s:0;if(2&u){let{static:l=!1,...p}=o;if(l)return c(p,e,a,f)}if(1&u){let{unmount:l=!0,...p}=o;return(0,match.E)(l?0:1,{0:()=>null,1:()=>c({...p,hidden:!0,style:{display:"none"}},e,a,f)})}return c(o,e,a,f)}function c(r,t={},e,a){let{as:s=e,children:n,refName:f="ref",...o}=g(r,["unmount","static"]),u=void 0!==r.ref?{[f]:r.ref}:{},l="function"==typeof n?n(t):n;"className"in o&&o.className&&"function"==typeof o.className&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))"boolean"==typeof d&&(i=!0),!0===d&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "))}if(s===react.Fragment&&Object.keys(R(o)).length>0){if(!(0,react.isValidElement)(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map((d=>`  - ${d}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((d=>`  - ${d}`)).join("\n")].join("\n"));let i=l.props,m="function"==typeof(null==i?void 0:i.className)?(...d)=>class_names_e(null==i?void 0:i.className(...d),o.className):class_names_e(null==i?void 0:i.className,o.className),y=m?{className:m}:{};return(0,react.cloneElement)(l,Object.assign({},N(l.props,R(g(o,["ref"]))),p,u,function w(...r){return{ref:r.every((t=>null==t))?void 0:t=>{for(let e of r)null!=e&&("function"==typeof e?e(t):e.current=t)}}}(l.ref,u.ref),y))}return(0,react.createElement)(s,Object.assign({},g(o,["ref"]),s!==react.Fragment&&u,s!==react.Fragment&&p),l)}function N(...r){if(0===r.length)return{};if(1===r.length)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&"function"==typeof s[n]?(null!=e[n]||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map((s=>[s,void 0]))));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f)}}});return t}function D(r){var t;return Object.assign((0,react.forwardRef)(r),{displayName:null!=(t=r.displayName)?t:r.name})}function R(r){let t=Object.assign({},r);for(let e in t)void 0===t[e]&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}},"./node_modules/react-portal/es/PortalCompat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PortalCompat});var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var Portal=function(_React$Component){function Portal(){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Portal),function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(Portal.__proto__||Object.getPrototypeOf(Portal)).apply(this,arguments))}return function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Portal,_React$Component),_createClass(Portal,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function render(){return canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),react_dom.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),Portal}(react.Component);Portal.propTypes={children:prop_types_default().node.isRequired,node:prop_types_default().any};const es_Portal=Portal;var LegacyPortal_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();var LegacyPortal_Portal=function(_React$Component){function Portal(){return function LegacyPortal_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Portal),function LegacyPortal_possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}(this,(Portal.__proto__||Object.getPrototypeOf(Portal)).apply(this,arguments))}return function LegacyPortal_inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}(Portal,_React$Component),LegacyPortal_createClass(Portal,[{key:"componentDidMount",value:function componentDidMount(){this.renderPortal()}},{key:"componentDidUpdate",value:function componentDidUpdate(props){this.renderPortal()}},{key:"componentWillUnmount",value:function componentWillUnmount(){react_dom.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function renderPortal(props){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var children=this.props.children;"function"==typeof this.props.children.type&&(children=react.cloneElement(this.props.children)),this.portal=react_dom.unstable_renderSubtreeIntoContainer(this,children,this.props.node||this.defaultNode)}},{key:"render",value:function render(){return null}}]),Portal}(react.Component);const LegacyPortal=LegacyPortal_Portal;LegacyPortal_Portal.propTypes={children:prop_types_default().node.isRequired,node:prop_types_default().any};const PortalCompat=react_dom.createPortal?es_Portal:LegacyPortal}}]);