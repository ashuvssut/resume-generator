(this["webpackJsonpashuvssut-resume"]=this["webpackJsonpashuvssut-resume"]||[]).push([[0],{16:function(e,t,a){e.exports={black:"#000",white:"#fff",lightGrey:"#a5a5a5",grey52:"#626272",grey:"#797979",darkGrey:"#333",header:"header_header__3fn4i",right:"header_right__1Ph6d",button:"header_button__1O7HV"}},24:function(e,t,a){"use strict";t.a={home:{title:"Ashutosh Khanduala | Resume",description:"Ashutosh Khanduala's Resume!",keywords:"Ashutosh Khanduala, Resume"},notFound:{title:"404",description:"Uh ohh Looks like you encountered a 404 Not Found error.",keywords:"Ashutosh Khanduala, Resume, 404"}}},30:function(e,t,a){e.exports={black:"#000",white:"#fff",lightGrey:"#a5a5a5",grey52:"#626272",grey:"#797979",darkGrey:"#333",wrapper:"tooltip_wrapper__QnJue",tooltip:"tooltip_tooltip__3NZWK"}},32:function(e,t,a){e.exports={preloader:"preloader_preloader__2mu_P",backgroundcolorchange:"preloader_backgroundcolorchange__2tc7F",spinner:"preloader_spinner__2ahVY","sk-rotateplane":"preloader_sk-rotateplane__T0oxH"}},35:function(e,t,a){},36:function(e,t,a){"use strict";a(0);var n=a(45),r=a(2);t.a=function(e){var t=e.title,a=e.description,s=e.keywords;return Object(r.jsxs)(n.a,{children:[Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("title",{children:t}),Object(r.jsx)("meta",{name:"description",content:a}),Object(r.jsx)("meta",{name:"keywords",content:s}),Object(r.jsx)("meta",{property:"og:title",content:t}),Object(r.jsx)("meta",{property:"og:description",content:a}),Object(r.jsx)("meta",{property:"og:url",content:window.location.href})]})}},44:function(e,t,a){e.exports={black:"#000",white:"#fff",lightGrey:"#a5a5a5",grey52:"#626272",grey:"#797979",darkGrey:"#333",root:"not-found_root__30SuK"}},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(38),s=a.n(r),o=a(28),c=(a(35),a(6)),i=a(39),u=a(5),d=a(15),l=a(29),h=a.n(l),j=a(16),p=a.n(j),b=a.p+"static/media/ak.08f6928a.jfif",f=a(91),m=a(92),x=a(88),O=a(93),v=a(30),y=a.n(v),g=a(2);var _=function(e){var t=e.title,a=e.opacity;return Object(g.jsx)("div",{className:y.a.wrapper,style:{opacity:a,visibility:0===a&&"hidden"},children:Object(g.jsx)("div",{className:y.a.tooltip,children:t})})};var w=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(0),o=Object(d.a)(s,2),c=o[0],l=o[1],j=Object(x.a)((function(e){return{header:Object(u.a)({},e.breakpoints.down("xs"),{justifyContent:"space-around"}),avatarDiv:Object(u.a)({display:"block"},e.breakpoints.down("xs"),{display:"none"}),avatar:{"& > *":{margin:8}}}}))();function v(e){for(var t="",a=new Uint8Array(e),n=a.byteLength,r=0;r<n;r++)t+=String.fromCharCode(a[r]);return window.btoa(t)}var y=function(){var e=Object(i.a)(h.a.mark((function e(){var t,a,n,s,o,c,i,u,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),t=document.getElementById("resume-wrap").innerHTML,a={html:t},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.prev=4,e.next=7,fetch("https://html2pdf-ashuvssut.herokuapp.com/generatePdf",n);case 7:return s=e.sent,e.next=10,s.json();case 10:o=e.sent,r(!1),console.log(o),c=o.pdfBuffer.data,i=v(c),u="data:application/pdf;base64,".concat(i),d=document.createElement("a"),"Resume _ Ashutosh Khanduala.pdf",d.href=u,d.download="Resume _ Ashutosh Khanduala.pdf",d.click(),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(4),console.error(e.t0);case 26:case"end":return e.stop()}}),e,null,[[4,23]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("header",{id:"nav",className:p.a.header+" "+j.header,children:[Object(g.jsx)("div",{className:j.avatarDiv,children:Object(g.jsx)(O.a,{alt:"ashuvssut",src:b,className:j.avatar})}),Object(g.jsx)("div",{className:p.a.right,style:{display:"none"},children:a?Object(g.jsx)("div",{className:p.a.button,children:"Generating..."}):Object(g.jsxs)("div",{className:p.a.button,onClick:y,children:["Download",Object(g.jsx)(f.a,{fontSize:"small"})]})}),Object(g.jsxs)("div",{className:p.a.right,children:[Object(g.jsxs)("a",{id:"download",className:p.a.button,href:"https://github.com/ashuvssut/ashuvssut-resume/blob/download/Resume%20_%20Ashutosh%20Khanduala.pdf?raw=true",children:["Download",Object(g.jsx)(f.a,{fontSize:"small"})]}),Object(g.jsxs)("div",{className:p.a.button,onClick:function(){l(1),navigator.clipboard.writeText(document.querySelector("#download").getAttribute("href")),setTimeout((function(){return l(0)}),1e3)},children:[Object(g.jsx)(m.a,{fontSize:"small"}),"Copy Download link",Object(g.jsx)(_,{title:"Copied!",opacity:c})]})]})]})})},k=a(44),N=a.n(k),S=a(36),F=a(24);var C=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S.a,{title:F.a.notFound.title,description:F.a.notFound.description,keywords:F.a.notFound.keywords}),Object(g.jsx)("div",{className:N.a.root,children:"404"})]})},A=a(32),K=a.n(A);var T=function(){return Object(g.jsx)("div",{className:K.a.preloader,children:Object(g.jsx)("div",{className:K.a.spinner})})},G=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,98))}));var R=Object(c.g)((function(e){var t=e.location;return Object(g.jsxs)(n.Suspense,{fallback:Object(g.jsx)(T,{}),children:["/404"!==t.pathname&&Object(g.jsx)(w,{}),Object(g.jsxs)(c.d,{children:[Object(g.jsx)(c.b,{path:"/ashuvssut-resume",exact:!0,component:G}),Object(g.jsx)(c.b,{path:"/ashuvssut-resume/404",exact:!0,component:C}),Object(g.jsx)(c.a,{to:"/ashuvssut-resume/404"})]})]})})),D=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,97)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))};s.a.render(Object(g.jsx)(o.a,{children:Object(g.jsx)(R,{})}),document.getElementById("root")),D()}},[[68,1,2]]]);
//# sourceMappingURL=main.70177922.chunk.js.map