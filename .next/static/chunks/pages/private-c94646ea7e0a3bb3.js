(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{6778:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/private",function(){return n(6186)}])},6186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var l=n(5893),i=n(1822),o=n.n(i),r=n(7294),a=n(5675),s=n.n(a),d=()=>{let[e,t]=(0,r.useState)(null),[n,i]=(0,r.useState)({x:0,y:0}),[o,a]=(0,r.useState)(!1),d=(0,r.useRef)(null),u=(0,r.useRef)(null),c=(0,r.useRef)(null);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Upload Your Image"}),(0,l.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files[0]){let n=e.target.files[0],l=new FileReader;l.onload=()=>{"string"==typeof l.result&&t(l.result)},l.readAsDataURL(n)}}}),(0,l.jsxs)("div",{ref:c,style:{position:"relative",width:"400px",height:"400px",overflow:"hidden"},children:[(0,l.jsx)(s(),{src:"/y00trebuilder/eyewear/Nouns.png",alt:"Cat",layout:"fill",objectFit:"cover",priority:!0}),e&&(0,l.jsx)(s(),{src:e,alt:"Uploaded",layout:"fill",objectFit:"contain",style:{position:"absolute",top:0,left:0,zIndex:1}}),(0,l.jsx)("div",{ref:u,style:{position:"absolute",top:"".concat(n.y,"px"),left:"".concat(n.x,"px"),width:"180px",height:"180px",cursor:"move",zIndex:2},onMouseDown:e=>{var t,l,r,s;a(!0);let d=null===(l=u.current)||void 0===l?void 0:null===(t=l.parentElement)||void 0===t?void 0:t.getBoundingClientRect(),c=e.clientX-(null!==(r=null==d?void 0:d.left)&&void 0!==r?r:0)-n.x,h=e.clientY-(null!==(s=null==d?void 0:d.top)&&void 0!==s?s:0)-n.y,f=e=>{var t,n,l,r;if(!o)return;let a=e.clientX-(null!==(t=null==d?void 0:d.left)&&void 0!==t?t:0)-c,s=e.clientY-(null!==(n=null==d?void 0:d.top)&&void 0!==n?n:0)-h;i({x:Math.max(0,Math.min(null!==(l=null==d?void 0:d.width)&&void 0!==l?l:-100,a)),y:Math.max(0,Math.min(null!==(r=null==d?void 0:d.height)&&void 0!==r?r:-100,s))})},m=()=>{a(!1),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m)};window.addEventListener("mousemove",f),window.addEventListener("mouseup",m)},children:(0,l.jsx)(s(),{src:"/y00trebuilder/12345.png",alt:"Buddy",width:180,height:180})})]}),(0,l.jsx)("button",{onClick:()=>{if(!d.current||!e||!c.current)return;let t=d.current,l=t.getContext("2d");if(!l)return;let i=new window.Image,o=new window.Image,r=new window.Image;i.src="/y00trebuilder/eyewear/Nouns.png",o.src=e,r.src="/y00trebuilder/12345.png",i.onload=()=>{o.onload=()=>{r.onload=()=>{var e,a,s,d;let u=null!==(s=null===(e=c.current)||void 0===e?void 0:e.offsetWidth)&&void 0!==s?s:0,h=null!==(d=null===(a=c.current)||void 0===a?void 0:a.offsetHeight)&&void 0!==d?d:0;t.width=10*u,t.height=10*h,l.drawImage(i,0,0,10*u,10*h),l.drawImage(o,0,0,10*u,10*h);let f=u/400,m=h/400;l.drawImage(r,n.x*f*10,n.y*m*10,180*f*10,180*m*10);let v=t.toDataURL("image/png"),x=document.createElement("a");x.href=v,x.download="combined_image.png",x.click()}}}},style:{marginTop:"20px"},children:"Download Combined Image"}),(0,l.jsx)("canvas",{ref:d,style:{display:"none"}})]})};function u(){return(0,l.jsxs)("main",{className:"jsx-24192215774331b5 flex min-h-screen w-full flex-col items-center justify-center non-scrollable",children:[(0,l.jsx)("h1",{className:"jsx-24192215774331b5",children:"Image Display Example"}),(0,l.jsx)(d,{}),(0,l.jsx)(o(),{id:"24192215774331b5",children:".selected.jsx-24192215774331b5{color:white;z-index:1}button.jsx-24192215774331b5{color:black;position:relative;z-index:2}.container.jsx-24192215774331b5{position:relative}@media(min-width:630px){.container.jsx-24192215774331b5{top:35%;-webkit-transform:translate(0%,-19%);-moz-transform:translate(0%,-19%);-ms-transform:translate(0%,-19%);-o-transform:translate(0%,-19%);transform:translate(0%,-19%)}}.non-scrollable.jsx-24192215774331b5{overflow:hidden;height:100vh}html.jsx-24192215774331b5,body.jsx-24192215774331b5{height:100%;margin:0;overflow:hidden}"})]})}}},function(e){e.O(0,[822,888,774,179],function(){return e(e.s=6778)}),_N_E=e.O()}]);