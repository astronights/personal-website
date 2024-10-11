/*! For license information please see main.195efbe7.js.LICENSE.txt */
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,pQ=()=>(0,o.jsx)(wr,{styles:uQ}),gQ=t=>{let{scope:e=""}=t;return(0,o.jsx)(wr,{styles:cQ`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${uQ}
    `})},fQ={light:"chakra-ui-light",dark:"chakra-ui-dark"};var vQ="chakra-ui-color-mode";var kQ,MQ=(kQ=vQ,{ssr:!1,type:"localStorage",get(t){if(!(null==globalThis?void 0:globalThis.document))return t;let e;try{e=localStorage.getItem(kQ)||t}catch(a){}return e||t},set(t){try{localStorage.setItem(kQ,t)}catch(e){}}});function mQ(t,e){const a=t.match(new RegExp(`(^| )${e}=([^;]+)`));return null==a?void 0:a[2]}function bQ(t,e){return{ssr:!!e,type:"cookie",get:a=>e?mQ(e,t):(null==globalThis?void 0:globalThis.document)&&mQ(document.cookie,t)||a,set(e){document.cookie=`${t}=${e}; max-age=31536000; path=/`}}}bQ(vQ);var xQ=()=>{};function LQ(t,e){return"cookie"===t.type&&t.ssr?t.get(e):e}function wQ(t){const{value:a,children:r,options:{useSystemColorMode:n,initialColorMode:i,disableTransitionOnChange:l}={},colorModeManager:s=MQ}=t,d="dark"===i?"dark":"light",[c,u]=(0,e.useState)((()=>LQ(s,d))),[p,g]=(0,e.useState)((()=>LQ(s))),{getSystemTheme:f,setClassName:v,setDataset:k,addListener:m}=(0,e.useMemo)((()=>function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{preventTransition:e=!0}=t,a={setDataset:t=>{const r=e?a.preventTransition():void 0;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,null==r||r()},setClassName(t){document.body.classList.add(t?fQ.dark:fQ.light),document.body.classList.remove(t?fQ.light:fQ.dark)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme(t){var e;return(null!=(e=a.query().matches)?e:"dark"===t)?"dark":"light"},addListener(t){const e=a.query(),r=e=>{t(e.matches?"dark":"light")};return"function"===typeof e.addListener?e.addListener(r):e.addEventListener("change",r),()=>{"function"===typeof e.removeListener?e.removeListener(r):e.removeEventListener("change",r)}},preventTransition(){const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),requestAnimationFrame((()=>{requestAnimationFrame((()=>{document.head.removeChild(t)}))}))}}};return a}({preventTransition:l})),[l]),b="system"!==i||c?c:p,x=(0,e.useCallback)((t=>{const e="system"===t?f():t;u(e),v("dark"===e),k(e),s.set(e)}),[s,f,v,k]);M((()=>{"system"===i&&g(f())}),[]),(0,e.useEffect)((()=>{const t=s.get();x(t||("system"!==i?d:"system"))}),[s,d,i,x]);const L=(0,e.useCallback)((()=>{x("dark"===b?"light":"dark")}),[b,x]);(0,e.useEffect)((()=>{if(n)return m(x)}),[n,m,x]);const w=(0,e.useMemo)((()=>({colorMode:null!=a?a:b,toggleColorMode:a?xQ:L,setColorMode:a?xQ:x,forced:void 0!==a})),[b,L,x,a]);return(0,o.jsx)(h.Provider,{value:w,children:r})}wQ.displayName="ColorModeProvider";var yQ=t=>{const{children:e,colorModeManager:a,portalZIndex:r,resetScope:n,resetCSS:i=!0,theme:l={},environment:s,cssVarsRoot:h,disableEnvironment:d,disableGlobalStyle:c}=t,u=(0,o.jsx)(b,{environment:s,disabled:d,children:e});return(0,o.jsx)(gf,{theme:l,cssVarsRoot:h,children:(0,o.jsxs)(wQ,{colorModeManager:a,options:l.config,children:[i?(0,o.jsx)(gQ,{scope:n}):(0,o.jsx)(pQ,{}),!c&&(0,o.jsx)(Mf,{}),r?(0,o.jsx)(Yr,{zIndex:r,children:u}):u]})})},CQ=(t,e)=>t.find((t=>t.id===e));function zQ(t,e){const a=TQ(t,e);return{position:a,index:a?t[a].findIndex((t=>t.id===e)):-1}}function TQ(t,e){for(const[a,r]of Object.entries(t))if(CQ(r,e))return a}function _Q(t){return{position:"fixed",zIndex:"var(--toast-z-index, 5500)",pointerEvents:"none",display:"flex",flexDirection:"column",margin:"top"===t||"bottom"===t?"0 auto":void 0,top:t.includes("top")?"env(safe-area-inset-top, 0px)":void 0,bottom:t.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,right:t.includes("left")?void 0:"env(safe-area-inset-right, 0px)",left:t.includes("right")?void 0:"env(safe-area-inset-left, 0px)"}}function BQ(t,a){const r=function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=(0,e.useRef)(t);return(0,e.useEffect)((()=>{r.current=t})),(0,e.useCallback)((function(){for(var t,e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return null==(t=r.current)?void 0:t.call(r,...a)}),a)}(t);(0,e.useEffect)((()=>{if(null==a)return;let t=null;return t=window.setTimeout((()=>{r()}),a),()=>{t&&window.clearTimeout(t)}}),[a,r])}function SQ(t,a){const r=(0,e.useRef)(!1),n=(0,e.useRef)(!1);(0,e.useEffect)((()=>{if(r.current&&n.current)return t();n.current=!0}),a),(0,e.useEffect)((()=>(r.current=!0,()=>{r.current=!1})),[])}var jQ={initial:t=>{const{position:e}=t,a=["top","bottom"].includes(e)?"y":"x";let r=["top-right","bottom-right"].includes(e)?1:-1;return"bottom"===e&&(r=1),{opacity:0,[a]:24*r}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},WQ=(0,e.memo)((t=>{const{id:a,message:r,onCloseComplete:n,onRequestRemove:i,requestClose:l=!1,position:s="bottom",duration:h=5e3,containerStyle:d,motionVariants:c=jQ,toastSpacing:u="0.5rem"}=t,[p,g]=(0,e.useState)(h),f=td();SQ((()=>{f||null==n||n()}),[f]),SQ((()=>{g(h)}),[h]);const v=()=>{f&&i()};(0,e.useEffect)((()=>{f&&l&&i()}),[f,l,i]),BQ(v,p);const k=(0,e.useMemo)((()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:u,...d})),[d,u]),M=(0,e.useMemo)((()=>function(t){let e="center";return t.includes("right")&&(e="flex-end"),t.includes("left")&&(e="flex-start"),{display:"flex",flexDirection:"column",alignItems:e}}(s)),[s]);return(0,o.jsx)(Hc.div,{layout:!0,className:"chakra-toast",variants:c,initial:"initial",animate:"animate",exit:"exit",onHoverStart:()=>g(null),onHoverEnd:()=>g(h),custom:{position:s},style:M,children:(0,o.jsx)(or.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:k,children:C(r,{id:a,onClose:v})})})}));function HQ(t){return(0,o.jsx)(vg,{viewBox:"0 0 24 24",...t,children:(0,o.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}WQ.displayName="ToastComponent";var[EQ,AQ]=mr({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[PQ,RQ]=mr({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),OQ={info:{icon:function(t){return(0,o.jsx)(vg,{viewBox:"0 0 24 24",...t,children:(0,o.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})},colorScheme:"blue"},warning:{icon:HQ,colorScheme:"orange"},success:{icon:function(t){return(0,o.jsx)(vg,{viewBox:"0 0 24 24",...t,children:(0,o.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})},colorScheme:"green"},error:{icon:HQ,colorScheme:"red"},loading:{icon:Tr,colorScheme:"blue"}};var DQ=L((function(t,e){var a;const{status:r="info",addRole:n=!0,...i}=ge(t),l=null!=(a=t.colorScheme)?a:function(t){return OQ[t].colorScheme}(r),s=ur("Alert",{...t,colorScheme:l}),h={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return(0,o.jsx)(EQ,{value:{status:r},children:(0,o.jsx)(PQ,{value:s,children:(0,o.jsx)(or.div,{"data-status":r,role:n?"alert":void 0,ref:e,...i,className:w("chakra-alert",t.className),__css:h})})})}));function NQ(t){const{status:e}=AQ(),a=function(t){return OQ[t].icon}(e),r=RQ(),n="loading"===e?r.spinner:r.icon;return(0,o.jsx)(or.span,{display:"inherit","data-status":e,...t,className:w("chakra-alert__icon",t.className),__css:n,children:t.children||(0,o.jsx)(a,{h:"100%",w:"100%"})})}DQ.displayName="Alert",NQ.displayName="AlertIcon";var IQ=L((function(t,e){const a=RQ(),{status:r}=AQ();return(0,o.jsx)(or.div,{ref:e,"data-status":r,...t,className:w("chakra-alert__title",t.className),__css:a.title})}));IQ.displayName="AlertTitle";var FQ=L((function(t,e){const a=RQ(),{status:r}=AQ(),n={display:"inline",...a.description};return(0,o.jsx)(or.div,{ref:e,"data-status":r,...t,className:w("chakra-alert__desc",t.className),__css:n})}));function UQ(t){return(0,o.jsx)(vg,{focusable:"false","aria-hidden":!0,...t,children:(0,o.jsx)("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}FQ.displayName="AlertDescription";var VQ=L((function(t,e){const a=cr("CloseButton",t),{children:r,isDisabled:n,__css:i,...l}=ge(t);return(0,o.jsx)(or.button,{type:"button","aria-label":"Close",ref:e,disabled:n,__css:{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,...a,...i},...l,children:r||(0,o.jsx)(UQ,{width:"1em",height:"1em"})})}));VQ.displayName="CloseButton";var GQ=function(t){let e=t;const a=new Set,r=t=>{e=t(e),a.forEach((t=>t()))};return{getState:()=>e,subscribe:e=>(a.add(e),()=>{r((()=>t)),a.delete(e)}),removeToast:(t,e)=>{r((a=>({...a,[e]:a[e].filter((e=>e.id!=t))})))},notify:(t,e)=>{const a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var a,r;$Q+=1;const n=null!=(a=e.id)?a:$Q,o=null!=(r=e.position)?r:"bottom";return{id:n,message:t,position:o,duration:e.duration,onCloseComplete:e.onCloseComplete,onRequestRemove:()=>GQ.removeToast(String(n),o),status:e.status,requestClose:!1,containerStyle:e.containerStyle}}(t,e),{position:n,id:o}=a;return r((t=>{var e,r;const o=n.includes("top")?[a,...null!=(e=t[n])?e:[]]:[...null!=(r=t[n])?r:[],a];return{...t,[n]:o}})),o},update:(t,e)=>{t&&r((a=>{const r={...a},{position:n,index:o}=zQ(r,t);return n&&-1!==o&&(r[n][o]={...r[n][o],...e,message:XQ(e)}),r}))},closeAll:function(){let{positions:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r((e=>(null!=t?t:["bottom","bottom-right","bottom-left","top","top-left","top-right"]).reduce(((t,a)=>(t[a]=e[a].map((t=>({...t,requestClose:!0}))),t)),{...e})))},close:t=>{r((e=>{const a=TQ(e,t);return a?{...e,[a]:e[a].map((e=>e.id==t?{...e,requestClose:!0}:e))}:e}))},isActive:t=>Boolean(zQ(GQ.getState(),t).position)}}({top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]});var $Q=0;var qQ=t=>{const{status:e,variant:a="solid",id:r,title:n,isClosable:i,onClose:l,description:s,colorScheme:h,icon:d}=t,c=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return(0,o.jsxs)(DQ,{addRole:!1,status:e,variant:a,id:null==c?void 0:c.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto",colorScheme:h,children:[(0,o.jsx)(NQ,{children:d}),(0,o.jsxs)(or.div,{flex:"1",maxWidth:"100%",children:[n&&(0,o.jsx)(IQ,{id:null==c?void 0:c.title,children:n}),s&&(0,o.jsx)(FQ,{id:null==c?void 0:c.description,display:"block",children:s})]}),i&&(0,o.jsx)(VQ,{size:"sm",onClick:l,position:"absolute",insetEnd:1,top:1})]})};function XQ(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{render:e,toastComponent:a=qQ}=t;return r=>"function"===typeof e?e({...r,...t}):(0,o.jsx)(a,{...r,...t})}var[YQ,KQ]=mr({name:"ToastOptionsContext",strict:!1}),ZQ=t=>{const a=(0,e.useSyncExternalStore)(GQ.subscribe,GQ.getState,GQ.getState),{motionVariants:r,component:n=WQ,portalProps:i}=t,l=Object.keys(a).map((t=>{const e=a[t];return(0,o.jsx)("div",{role:"region","aria-live":"polite","aria-label":"Notifications",id:`chakra-toast-manager-${t}`,style:_Q(t),children:(0,o.jsx)(Cn,{initial:!1,children:e.map((t=>(0,o.jsx)(n,{motionVariants:r,...t},t.id)))})},t)}));return(0,o.jsx)(rn,{...i,children:l})},QQ=t=>function(e){let{children:a,theme:r=t,toastOptions:n,...i}=e;return(0,o.jsxs)(yQ,{theme:r,...i,children:[(0,o.jsx)(YQ,{value:null==n?void 0:n.defaultOptions,children:a}),(0,o.jsx)(ZQ,{...n})]})},JQ=QQ(rQ);QQ(nQ);n.createRoot(document.getElementById("root")).render((0,o.jsx)(JQ,{theme:hQ,children:(0,o.jsxs)(e.StrictMode,{children:[(0,o.jsx)(s,{initialColorMode:hQ.config.initialColorMode}),(0,o.jsx)(mG,{})]})})),dQ()})()})();
//# sourceMappingURL=main.195efbe7.js.map