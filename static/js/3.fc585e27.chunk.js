(this["webpackJsonpashuvssut-resume"]=this["webpackJsonpashuvssut-resume"]||[]).push([[3],{81:function(e,t,s){e.exports={black:"#000",white:"#fff",lightGrey:"#a5a5a5",grey52:"#626272",grey:"#797979",darkGrey:"#333"}},82:function(e,t,s){e.exports={black:"#000",white:"#fff",lightGrey:"#a5a5a5",grey52:"#626272",grey:"#797979",darkGrey:"#333",root:"home_root__3dsEq",pageWrap:"home_pageWrap__2H8fz"}},84:function(e,t,s){"use strict";s.r(t);var r=s(0),i=s(35),n=s(19),c=s(82),l=s.n(c),a={htmlBody:{background:"#323639",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:'"Raleway", sans-serif',position:"relative"},page:{minWidth:"21cm",maxWidth:"21cm",minHeight:"29.7cm",maxHeight:"29.7cm",background:"white",display:"block",width:"100%",height:"100%",position:"absolute",top:0,left:0},content:{position:"absolute",inset:"0px"}},o=s(24);function h(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function j(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?h(Object(s),!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):h(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var d=s(81),b=s.n(d),p={root:{color:b.a.grey52,fontWeight:400,fontSize:"13px",lineHeight:1.3},a:{color:"inherit",fontWeight:"inherit",fontFamily:'"Lato", sans-serif'}},x=s(2);function u(e){var t=e.children,s=e.href,r=e.variant;return Object(x.jsx)("a",{style:j(j({},p.a),{},{fontSize:"small"===r&&13,opacity:"small"===r&&.7}),target:"_blank",rel:"noopener noreferrer",href:s,children:t})}function O(e){var t=e.children,s=e.href,r=e.prefix,i=e.suffix,n=e.removeSpace,c=void 0!==n&&n;return Object(x.jsxs)("p",{style:p.root,children:[void 0!==r&&r,!1===c&&" ",Object(x.jsx)("a",{style:p.a,target:"_blank",rel:"noopener noreferrer",href:s,children:t}),!1===c&&" ",void 0!==i&&i]})}var f={list:{fontVariant:"common-ligatures",marginLeft:21,position:"relative",marginBottom:3,color:b.a.grey},li:{color:b.a.grey52,fontWeight:400,fontSize:13,lineHeight:1.3,position:"relative",listStyle:"none"},liPara:{},bullet1:{color:b.a.lightGrey,display:"block",position:"absolute",top:-13,left:-15,fontSize:33},bullet2:{color:b.a.lightGrey,display:"block",position:"absolute",bottom:0,left:-16,fontSize:12}};function y(e){var t=e.children,s=e.style;return Object(x.jsx)("ul",{style:j(j({},f.list),s),children:t})}function m(e){var t=e.children,s=e.style;return Object(x.jsxs)("li",{style:j(j({},f.li),s),children:[Object(x.jsx)("span",{style:f.bullet1,children:"\u2022"}),t]})}function g(e){var t=e.children,s=e.style;return Object(x.jsxs)("li",{style:j(j({},f.li),s),children:[Object(x.jsx)("span",{style:f.bullet2,children:"\u27a4"}),t]})}function v(e){var t=e.children;return Object(x.jsx)("p",{style:j(j({},f.li),f.liPara),children:t})}var w={section:{marginBottom:15},title:{fontFamily:'"Raleway", sans-serif',fontWeight:400,color:b.a.grey,marginTop:15,marginBottom:6,textTransform:"uppercase"}};var S=function(e){var t=e.title,s=e.noMarginTop,r=e.children;return Object(x.jsxs)("div",{style:w.section,children:[Object(x.jsx)("h2",{style:s?j(j({},w.title),{},{marginTop:0}):w.title,children:t}),r]})},k={tagsWrap:{display:"flex",flexWrap:"wrap",gap:3,marginBottom:6},tag:{backgroundColor:b.a.lightGrey,color:b.a.white,fontSize:"13px",padding:"2px 8px",borderRadius:"6px"}};var W=function(e){var t=e.tags;return Object(x.jsx)("div",{style:k.tagsWrap,children:t.map((function(e,t){return Object(x.jsx)("span",{style:k.tag,children:e},"tag"+t)}))})},A={h1:{fontWeight:600,color:b.a.darkGrey,fontSize:"13px",marginBottom:3,textShadow:"0 0 1px rgba(0, 0, 0, 0.4)",lineHeight:1.13,textTransform:"uppercase"},h2:{color:b.a.darkGrey,fontFamily:'"Lato", sans-serif',fontSize:"12px",fontSizeAdjust:"0.5",fontWeight:500,fontVariantCaps:"small-caps",marginBottom:3,textShadow:"0 0 1px rgba(0, 0, 0, 0.3)"},subtitle1:{color:b.a.grey,fontWeight:600,fontFamily:'"Raleway", sans-serif',fontSize:"11.5px",fontVariantCaps:"small-caps",marginBottom:3},subtitle2:{color:b.a.grey,fontWeight:600,fontFamily:'"Raleway", sans-serif',fontSize:"11.5px",marginBottom:3}};function C(e){var t=e.children;return Object(x.jsx)("h3",{style:A.h1,children:t})}function B(e){var t=e.children;return Object(x.jsx)("h4",{style:A.h2,children:t})}function R(e){var t=e.h1,s=e.h2;return Object(x.jsxs)("div",{style:{marginBottom:3},children:[Object(x.jsx)("h3",{style:j(j({},A.h1),{},{marginBottom:0,display:"inline"}),children:t})," | ",Object(x.jsx)("h4",{style:j(j({},A.h2),{},{marginBottom:0,display:"inline",whiteSpace:"nowrap"}),children:s})]})}function I(e){var t=e.children;return Object(x.jsx)("h4",{style:A.subtitle1,children:t})}function D(e){var t=e.children;return Object(x.jsx)("h4",{style:A.subtitle2,children:t})}var P={header:{textAlign:"center",paddingTop:20,paddingBottom:15},firstName:{fontSize:"46px",margin:"0",fontWeight:100,color:b.a.grey52,lineHeight:1.1},lastName:{fontWeight:300},line:{fontFamily:'"Raleway", sans-serif',fontWeight:600,fontSize:"14px",color:b.a.grey,textShadow:"0 0 1px rgba(0, 0, 0, 0.15)"},main:{display:"flex",padding:35,paddingTop:8},firstCol:{minWidth:290,maxWidth:290,paddingRight:17},card:{marginBottom:10},spot:{fontWeight:600}};var G=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("header",{style:P.header,children:[Object(x.jsxs)("h1",{style:P.firstName,children:["Ashutosh ",Object(x.jsx)("span",{style:P.lastName,children:"Khanduala"})]}),Object(x.jsx)("div",{style:P.line,children:Object(x.jsx)(u,{href:"https://ashuvssut.github.io/my-portfolio/",children:"ashuvssut.github.io/my-portfolio/"})}),Object(x.jsxs)("div",{style:P.line,children:[Object(x.jsx)(u,{href:"mailto:ashu.khanduala@gmail.com",children:"ashu.khanduala@gmail.com"})," | +91 8114 727 882"]})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)("section",{style:P.main,children:[Object(x.jsxs)("div",{style:P.firstCol,children:[Object(x.jsxs)(S,{title:"education",noMarginTop:!0,children:[Object(x.jsx)(C,{children:"veer surendra sai university of technology"}),Object(x.jsx)(B,{children:"B.tech second year in Electronics and Comm. Engg | 2019-2023"}),Object(x.jsx)(I,{children:"Burla, Odisha, India"}),Object(x.jsxs)(y,{children:[Object(x.jsx)(m,{children:"CGPA : 8.1"}),Object(x.jsx)(v,{children:"(upto current Semester)"})]})]}),Object(x.jsxs)(S,{title:"links",children:[Object(x.jsx)(O,{prefix:"GitHub://",href:"https://github.com/ashuvssut",removeSpace:!0,children:"ashuvssut"}),Object(x.jsx)(O,{prefix:"LinkedIn://",href:"https://www.linkedin.com/in/ashutosh-khanduala-4b586b105/",removeSpace:!0,children:"ashutosh-khanduala"}),Object(x.jsx)(O,{prefix:"StackOverflow://",href:"https://stackoverflow.com/users/12872199/ashutosh-khanduala?tab=reputation",removeSpace:!0,children:"ashuvssut"})]}),Object(x.jsxs)(S,{title:"skills",children:[Object(x.jsx)(C,{children:"technical skills"}),Object(x.jsx)(D,{children:"More Experienced in:"}),Object(x.jsx)(W,{tags:["React","Git","Javascript","C++","SASS / CSS","HTML","GitHub Actions","Chrome Dev Tools"]}),Object(x.jsx)(D,{children:"Acquainted with:"}),Object(x.jsx)(W,{tags:["Redux","React Native","NEXT.js","Firebase","GCP (Cloud)","Node.js","Express.js","bash"]}),Object(x.jsx)("div",{style:{height:5}}),Object(x.jsx)(C,{children:"Soft skills"}),Object(x.jsxs)(y,{style:{display:"flex",flexWrap:"wrap"},children:[Object(x.jsx)(m,{children:"A Bilingual Communicator (English, Hindi)"}),Object(x.jsx)(m,{children:"A Lifelong Learner"}),Object(x.jsx)(m,{style:{transform:"translateX(25px)"},children:"A Team Player"})]})]}),Object(x.jsxs)(S,{title:"experience",children:[Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(R,{h1:"React Dev Intern @DATOMS",h2:"Internship"}),Object(x.jsx)(D,{children:"May 2021 - July 2021 | Bhubaneshwar, India"}),Object(x.jsx)(y,{children:Object(x.jsxs)(m,{children:["Developed ",Object(x.jsx)(u,{href:"#",children:" DATOMS Form Creator WebApp"})," (Link will be updated soon)"]})})]}),Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(C,{children:"Web Dev Intern @Phoenix Robotix"}),Object(x.jsx)(D,{children:"Jan 2021 - Mar 2021 | Bhubaneshwar, India"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(m,{children:["Developed official ",Object(x.jsx)(u,{href:"https://datoms.io/",children:"DATOMS website"})," (WP)"]}),Object(x.jsxs)(m,{children:["Improved website's ",Object(x.jsx)("span",{style:P.spot,children:"Google Page Rank:"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(g,{children:[Object(x.jsx)("span",{style:P.spot,children:"Desktop view"})," score from 24 to"," ",Object(x.jsx)("span",{style:P.spot,children:"91"})]}),Object(x.jsxs)(g,{children:[Object(x.jsx)("span",{style:P.spot,children:"Mobile view"})," score from 6 to"," ",Object(x.jsx)("span",{style:P.spot,children:"48"})]})]})]}),Object(x.jsxs)(m,{children:["Improved ",Object(x.jsx)("span",{style:P.spot,children:"GTMetrix"})," Performance grade from F to",Object(x.jsx)("span",{style:P.spot,children:" A grade"})]})]})]}),Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(R,{h1:"girlscript summer of code",h2:"Open Source"}),Object(x.jsx)(D,{children:"March 2021 - May 2021 | India"}),Object(x.jsx)(u,{variant:"small",href:"https://gssoc.girlscript.tech/",children:"devscript.tech/woc/"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(m,{children:["Secured ",Object(x.jsx)(u,{href:"https://gssoc21lb.prav.xyz/",children:"Rank 14"})," in this event."]}),Object(x.jsxs)(m,{children:["Contributed in ",Object(x.jsx)("span",{style:P.spot,children:"three open source projects:"})]}),Object(x.jsxs)(y,{children:[Object(x.jsx)(g,{children:Object(x.jsx)(O,{suffix:"(React)",href:"https://github.com/smaranjitghose/doc2pen",children:"Doc2Pen"})}),Object(x.jsx)(g,{children:Object(x.jsx)(O,{suffix:"(React)",href:"https://github.com/CSwala/CSwala-website",children:"CSwala-website"})}),Object(x.jsx)(g,{children:Object(x.jsx)(O,{suffix:"(MERN)",href:"https://github.com/ADRE9/bunk-manager-mern",children:"Bunk Manager"})})]})]})]})]})]}),Object(x.jsxs)("div",{style:P.secondCol,children:[Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(C,{children:"Other Open Source Event Participations"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(m,{children:[Object(x.jsx)(B,{children:"DevScript Winter of Code"}),"Secured ",Object(x.jsx)("span",{style:P.spot,children:"Rank 3 "})," and contributed in 3 projects."]}),Object(x.jsxs)(m,{children:[Object(x.jsx)(B,{children:"Script Winter of Code"}),"Secured ",Object(x.jsx)("span",{style:P.spot,children:"Rank 6 "})," and contributed in 3 projects."]}),Object(x.jsxs)(m,{children:[Object(x.jsx)(B,{children:"Mexili Winter of Code"}),"Secured ",Object(x.jsx)("span",{style:P.spot,children:"Rank 5 "})," and contributed in 2 projects."]})]})]}),Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(R,{h1:"mentor in liftoff-c program",h2:"Volunteer, Mentorship"}),Object(x.jsx)(D,{children:"February 2021 | India"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(m,{children:[Object(x.jsx)("span",{style:P.spot,children:"Mentored a 16 students "}),"in weekly regular classes and doubt clearing classes. ",Object(x.jsx)("span",{style:P.spot,children:"Taught C programming basics"})]}),Object(x.jsxs)(m,{children:["Co-organized by ",Object(x.jsx)("span",{style:P.spot,children:"Google Developer Students Club"}),",",Object(x.jsx)("span",{style:P.spot,children:" CodeChef VSSUT chapter"})," and",Object(x.jsx)("span",{style:P.spot,children:" Enigma VSSUT"}),"."]})]})]}),Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(R,{h1:"Web Developer Intern @BnB",h2:"Internship"}),Object(x.jsx)(D,{children:"June 2020 - August 2020 | India"}),Object(x.jsx)(u,{href:"http://www.blessnbliss.org",variant:"small",children:"www.blessnbliss.org"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(m,{children:[Object(x.jsx)("span",{style:P.spot,children:"Developed Official BnB Website"})," using",Object(x.jsx)("span",{style:P.spot,children:" HTML, CSS, JavaScript"}),"."]}),Object(x.jsxs)(m,{children:["Integrated push deployment (",Object(x.jsx)("span",{style:P.spot,children:"DevOps"}),")."]})]}),Object(x.jsx)(O,{prefix:"GitHub",href:"https://github.com/ashuvssut/Bless-n-Bliss",children:"repo link here."})]}),Object(x.jsxs)(S,{title:"personal projects",children:[Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(R,{h1:"My Resume Website",h2:"React, GitHub Actions, Puppeteer"}),Object(x.jsx)(D,{children:"July 2021 | Burla, India"}),Object(x.jsx)(u,{href:"https://ashuvssut.github.io/ashuvssut-resume",variant:"small",children:"ashuvssut.github.io/ashuvssut-resume"}),Object(x.jsxs)(y,{children:[Object(x.jsx)(m,{children:"A website to view and download my Resume"}),Object(x.jsxs)(m,{children:[Object(x.jsxs)("span",{style:P.spot,children:["Developed a"," ",Object(x.jsx)(u,{href:"https://github.com/ashuvssut/generatePdf-GHA",children:"Github Action"})]})," ","to generate Resume PDF using puppeteer from Resume website and commit it to the Repository updating the old PDF version."]})]}),Object(x.jsx)(O,{prefix:"GitHub",href:"https://github.com/ashuvssut/ashuvssut-resume",children:"repo link here"})]}),Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(R,{h1:"morse code project",h2:"WebApp, used JS Web Audio API"}),Object(x.jsx)(D,{children:"August 2020 | Burla, India"}),Object(x.jsx)(u,{href:"https://ashuvssut.github.io/the-morse-code-project/",variant:"small",children:"ashuvssut.github.io/the-morse-code-project/"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(m,{children:["A WebApp that ",Object(x.jsx)("span",{style:P.spot,children:"teaches people Morse Code"})," and helps them remember Morse codes easily."]}),Object(x.jsxs)(m,{children:["Used ",Object(x.jsx)("span",{style:P.spot,children:"HTML, SASS"})," and",Object(x.jsx)("span",{style:P.spot,children:" JavaScript"}),"."]}),Object(x.jsxs)(m,{children:["Used ",Object(x.jsx)("span",{style:P.spot,children:"JS WebAudio API"})," to:"]}),Object(x.jsxs)(y,{children:[Object(x.jsx)(g,{children:"Generate the morse code sounds by giving binary inputs"}),Object(x.jsx)(g,{children:"Make an adjustable Noise generator. "})]}),Object(x.jsx)(O,{prefix:"GitHub",href:"https://github.com/ashuvssut/the-morse-code-project",children:"repo link here"})]})]}),Object(x.jsxs)("div",{style:P.card,children:[Object(x.jsx)(R,{h1:"Covid19 webapp",h2:"Express.js, WebApp"}),Object(x.jsx)(D,{children:"July 2020 | Burla, India"}),Object(x.jsx)(u,{variant:"small",href:"https://coronalytics-ashuvssut.herokuapp.com/",children:"coronalytics-ashuvssut.herokuapp.com"}),Object(x.jsxs)(y,{children:[Object(x.jsxs)(m,{children:["A WebApp that instantly",Object(x.jsx)("span",{style:P.spot,children:" fetches COVID19 Stats of any Country"})," from an"," ",Object(x.jsx)(u,{varian:"small",href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest",children:"API."})]}),Object(x.jsxs)(m,{children:["Used ",Object(x.jsx)("span",{style:P.spot,children:"HTML, SASS, JavaScript"})," and",Object(x.jsx)("span",{style:P.spot,children:" Express.js."})]}),Object(x.jsx)(m,{children:"Automatically fetches your location to give your Country's COVID19 stats."}),Object(x.jsx)(O,{prefix:"GitHub",href:"https://github.com/ashuvssut/COVID19-webApp",children:"repo link here"})]})]})]})]})]})]})};t.default=function(){return Object(r.useEffect)((function(){var e=document.getElementById("nav").offsetHeight;document.getElementById("home").style.height=window.innerHeight-e-1+"px"}),[]),Object(x.jsxs)("div",{className:l.a.root,id:"home",children:[Object(x.jsx)(i.a,{title:n.a.home.title,description:n.a.home.description,keywords:n.a.home.keywords}),Object(x.jsx)("div",{id:"resume-wrap",className:l.a.pageWrap,children:Object(x.jsxs)("html",{lang:"en",children:[Object(x.jsxs)("head",{children:[Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,600;0,800;1,200&display=swap",rel:"stylesheet"}),Object(x.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap",rel:"stylesheet"}),Object(x.jsx)("style",{children:'* { margin: 0; padding: 0; box-sizing: border-box; font-family: "Raleway", sans-serif;}'})]}),Object(x.jsx)("body",{style:a.htmlBody,children:Object(x.jsx)("div",{style:a.page,children:Object(x.jsx)("div",{style:a.content,children:Object(x.jsx)(G,{})})})})]})})]})}}}]);
//# sourceMappingURL=3.fc585e27.chunk.js.map