(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4603)}])},6691:function(e,t){"use strict";var r,n,o,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return f},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return s},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let l="refresh",u="navigate",a="restore",s="server-patch",f="prefetch",c="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=r||(r={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(i=n||(n={})).fresh="fresh",i.reusable="reusable",i.expired="expired",i.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6541:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(8754),o=r(1757),i=r(5893),l=o._(r(7294)),u=n._(r(3935)),a=n._(r(7828)),s=r(7367),f=r(7903),c=r(4938);r(1997);let d=r(9953),p=n._(r(6663)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,o,i,l){let u=null==e?void 0:e.src;e&&e["data-loaded-src"]!==u&&(e["data-loaded-src"]=u,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function m(e){let[t,r]=l.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:u,width:a,decoding:s,className:f,style:c,fetchPriority:d,placeholder:p,loading:h,unoptimized:v,fill:b,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:j,sizesInput:C,onLoad:S,onError:x,...P}=e;return(0,i.jsx)("img",{...P,...m(d),loading:h,width:a,height:u,decoding:s,"data-nimg":b?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&g(e,p,y,w,_,v,C))},[r,p,y,w,_,x,v,C,t]),onLoad:e=>{g(e.currentTarget,p,y,w,_,v,C)},onError:e=>{j(!0),"empty"!==p&&_(!0),x&&x(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...m(r.fetchPriority)};return t&&u.default.preload?(u.default.preload(r.src,n),null):(0,i.jsx)(a.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(d.RouterContext),n=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=h||n||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:u,onLoadingComplete:a}=e,g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let[y,w]=(0,l.useState)(!1),[_,j]=(0,l.useState)(!1),{props:C,meta:S}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:_});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...C,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,i.jsx)(b,{isAppRouter:!r,imgAttributes:C}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let n=r(8754),o=r(5893),i=n._(r(7294)),l=r(1401),u=r(2045),a=r(7420),s=r(7201),f=r(1443),c=r(9953),d=r(5320),p=r(2905),h=r(4318),g=r(953),m=r(6691),v=new Set;function b(e,t,r,n,o,i){if(i||(0,u.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let w=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:w,prefetch:_=null,passHref:j,replace:C,shallow:S,scroll:x,locale:P,onClick:E,onMouseEnter:O,onTouchStart:k,legacyBehavior:R=!1,...M}=e;r=w,R&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let I=i.default.useContext(c.RouterContext),A=i.default.useContext(d.AppRouterContext),T=null!=I?I:A,z=!I,N=!1!==_,L=null===_?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,{href:F,as:D}=i.default.useMemo(()=>{if(!I){let e=y(a);return{href:e,as:v?y(v):e}}let[e,t]=(0,l.resolveHref)(I,a,!0);return{href:e,as:v?(0,l.resolveHref)(I,v):t||e}},[I,a,v]),U=i.default.useRef(F),B=i.default.useRef(D);R&&(n=i.default.Children.only(r));let G=R?n&&"object"==typeof n&&n.ref:t,[q,H,K]=(0,p.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(B.current!==D||U.current!==F)&&(K(),B.current=D,U.current=F),q(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[D,G,F,K,q]);i.default.useEffect(()=>{T&&H&&N&&b(T,F,D,{locale:P},{kind:L},z)},[D,F,H,P,N,null==I?void 0:I.locale,T,z,L]);let W={ref:V,onClick(e){R||"function"!=typeof E||E(e),R&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,r,n,o,l,a,s,f){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,u.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};f?i.default.startTransition(d):d()}(e,T,F,D,C,S,x,P,z)},onMouseEnter(e){R||"function"!=typeof O||O(e),R&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),T&&(N||!z)&&b(T,F,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:L},z)},onTouchStart:function(e){R||"function"!=typeof k||k(e),R&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),T&&(N||!z)&&b(T,F,D,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:L},z)}};if((0,s.isAbsoluteUrl)(D))W.href=D;else if(!R||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,h.getDomainLocale)(D,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);W.href=t||(0,g.addBasePath)((0,f.addLocale)(D,e,null==I?void 0:I.defaultLocale))}return R?i.default.cloneElement(n,W):(0,o.jsx)("a",{...M,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(3815),i="function"==typeof IntersectionObserver,l=new Map,u=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,s=a||!i,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},u.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7367:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(1997);let n=r(9919),o=r(7903);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,a,s,{src:f,sizes:c,unoptimized:d=!1,priority:p=!1,loading:h,className:g,quality:m,width:v,height:b,fill:y=!1,style:w,overrideSrc:_,onLoad:j,onLoadingComplete:C,placeholder:S="empty",blurDataURL:x,fetchPriority:P,layout:E,objectFit:O,objectPosition:k,lazyBoundary:R,lazyRoot:M,...I}=e,{imgConf:A,showAltText:T,blurComplete:z,defaultLoader:N}=t,L=A||o.imageConfigDefault;if("allSizes"in L)u=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);u={...L,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=I.loader||N;delete I.loader,delete I.srcSet;let D="__next_img_default"in F;if(D){if("custom"===u.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let U="",B=l(v),G=l(b);if("object"==typeof(r=f)&&(i(r)||void 0!==r.src)){let e=i(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,s=e.blurHeight,x=x||e.blurDataURL,U=e.src,!y){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let q=!p&&("lazy"===h||void 0===h);(!(f="string"==typeof f?f:U)||f.startsWith("data:")||f.startsWith("blob:"))&&(d=!0,q=!1),u.unoptimized&&(d=!0),D&&f.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(d=!0),p&&(P="high");let H=l(m),K=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:k}:{},T?{}:{color:"transparent"},w),V=z||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:a,blurHeight:s,blurDataURL:x||"",objectFit:K.objectFit})+'")':'url("'+S+'")',W=V?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),f=a.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:a.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:u({config:t,src:r,quality:i,width:a[f]})}}({config:u,src:f,unoptimized:d,width:B,quality:H,sizes:c,loader:F});return{props:{...I,loading:q?"lazy":h,fetchPriority:P,width:B,height:G,decoding:"async",className:g,style:{...K,...W},sizes:$.sizes,srcSet:$.srcSet,src:_||$.src},meta:{unoptimized:d,priority:p,placeholder:S,fill:y}}}},9919:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,u=n?40*n:t,a=o?40*o:r,s=u&&a?"viewBox='0 0 "+u+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return u}});let n=r(8754),o=r(7367),i=r(6541),l=n._(r(6663));function u(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=i.Image},6663:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},4603:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893);r(1784);var o=r(7294),i=r(1664),l=r.n(i);r(5675);var u=()=>(0,n.jsx)("div",{className:"py-4 w-full flex  items-center justify-center px-4 h-3",children:a.map(e=>(0,n.jsx)(l(),{href:e.href,className:"text-[#000000] opacity-[50%] font-bold mx-4",children:e.name}))});let a=[{name:"y7 Studios. All rights reserved",href:""}];var s=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function f(){return"undefined"!=typeof window}function c(){return"production"}function d(){return"development"===((f()?window.vam:c())||"production")}function p(e){return(0,o.useEffect)(()=>{!function(e={debug:!0}){var t;if(!f())return;(function(e="auto"){if("auto"===e){window.vam=c();return}window.vam=e})(e.mode),s(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let r=e.scriptSrc||(d()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector(`script[src*="${r}"]`))return;let n=document.createElement("script");n.src=r,n.defer=!0,n.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),n.dataset.sdkv="1.3.1",e.disableAutoTrack&&(n.dataset.disableAutoTrack="1"),e.endpoint&&(n.dataset.endpoint=e.endpoint),e.dsn&&(n.dataset.dsn=e.dsn),n.onerror=()=>{let e=d()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${e}`)},d()&&!1===e.debug&&(n.dataset.debug="false"),document.head.appendChild(n)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,o.useEffect)(()=>{e.route&&e.path&&function({route:e,path:t}){var r;null==(r=window.va)||r.call(window,"pageview",{route:e,path:t})}({route:e.route,path:e.path})},[e.route,e.path]),null}function h(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)("div",{style:{backgroundColor:"#FBF7F5"},children:[" ",(0,n.jsx)(t,{...r}),(0,n.jsx)(u,{}),(0,n.jsx)(p,{})]})}},1784:function(){},5675:function(e,t,r){e.exports=r(5666)},1664:function(e,t,r){e.exports=r(9577)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(9090)}),_N_E=e.O()}]);