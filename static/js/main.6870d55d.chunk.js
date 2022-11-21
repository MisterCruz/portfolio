(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://mistercruz.github.io/portfolio",j="RC.",b="Rolando Cruz",d="Software Engineer",h="\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbb I am an aspiring developer that enjoys building things with code while listening to lofi & drinking matcha \ud83c\udf75",u="https://mistercruz.github.io/resume/",m={linkedin:"https://www.linkedin.com/in/rolandocruzb/",github:"https://github.com/MisterCruz"},O=[{name:"Find-A-Camp",description:"Built a full stack web app that allows users to upload their favorite campsites and put them on the map with user authentication",stack:["Node.js","Express.js","MongoDB"]},{name:"PizzaNow",description:"A full stack food delivery application built on React.js/Next.js with a Node.js backend and Paypal integration with live order tracking",stack:["React.js","Express","Node.js","Next.js","MongoDB"]},{name:"Generative NFT dApp",description:"Created a Generative NFT minting decentralized application on Ethereum",stack:["React.js","Solidity","Ethers.js"]}],x=["HTML","CSS","JavaScript","React.js","Node.js","Express","Python","Git","CI/CD","Tailwind CSS","Next.js","MySQL","MongoDB"],p="rocruz9816@gmail.com",f=n(16),N=n.n(f),k=n(14),v=n.n(k),g=n(18),_=n.n(g),w=n(17),C=n.n(w),S=(n(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],b=o[1],d=function(){return b(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,x.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,p?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(v.a,{}):Object(a.jsx)(N.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),y=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(S,{})]})}),E=n(11),z=n.n(E),P=n(19),M=n.n(P),R=(n(33),function(){var e=b,t=d,n=h,c=u,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(z.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(M.a,{})})]})]})]})}),T=n(7),B=n.n(T),F=n(20),I=n.n(F),L=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},B()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(z.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(I.a,{})})]})}),A=(n(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(L,{project:e},B()())}))})]}):null}),D=(n(37),function(){return x.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},B()())}))})]}):null}),G=n(21),J=n.n(G),H=(n(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(J.a,{fontSize:"large"})})}):null}),Q=(n(39),function(){return p?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(p),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:"Fueled by \ud83c\udf75"})}),q=(n(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(R,{}),Object(a.jsx)(A,{}),Object(a.jsx)(D,{}),Object(a.jsx)(Q,{})]}),Object(a.jsx)(H,{}),Object(a.jsx)(Y,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6870d55d.chunk.js.map