(this.webpackJsonppanakea=this.webpackJsonppanakea||[]).push([[7],{81:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t.n(c),i=t(5),n=t(12),o=t(11),l=t(23),r=t(17),j=(t(42),t(4)),b=t(2),d=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{className:"show-p-b",href:"/view/",children:Object(b.jsx)("div",{className:"show-p-b-p",children:Object(b.jsx)("img",{className:"show-p-b-i",src:"".concat("/view","/images/left.svg"),alt:"left"})})}),Object(b.jsxs)("div",{className:"show-product",children:[Object(b.jsx)("div",{className:"show-product-2",children:Object(b.jsx)("div",{className:"show-p-p",children:Object(b.jsx)("img",{src:"/view/images/first-aid-alt.svg",alt:"",loading:"lazy",className:"skeleton show-p-i"})})}),Object(b.jsx)("div",{className:"show-product-3",children:Object(b.jsxs)("div",{className:"show-p-i-b",children:[Object(b.jsx)("div",{className:"skeleton show-p-i-b-h-loader"}),Object(b.jsx)("div",{className:"skeleton show-p-i-b-p-loader-1"}),Object(b.jsx)("div",{className:"skeleton show-p-i-b-p-loader-2"}),Object(b.jsx)("div",{className:"skeleton show-p-i-b-p-loader-3"}),Object(b.jsxs)("div",{className:"show-p-i-b-f",children:[Object(b.jsx)("a",{href:"/s",className:"show-button",children:Object(b.jsx)("img",{src:"/view/images/loader.svg",alt:"",loading:"lazy",className:"show-button-loader"})}),Object(b.jsxs)("button",{type:"button",className:"show-favourite",children:[Object(b.jsx)("div",{className:"show-f-p",children:Object(b.jsx)("img",{className:"show-f-i",src:"".concat("/view","/images/heart-red.svg"),alt:""})})," \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"]})]})]})})]})]})},h=t(66);s.default=function(){var e=Object(o.g)().id,s=Object(j.useState)(""),t=Object(n.a)(s,2),c=t[0],p=t[1],m=Object(j.useState)(""),O=Object(n.a)(m,2),w=O[0],v=O[1],u=Object(j.useState)({title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",content:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435",price:"\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c",image:"/images/first-aid-alt.svg"}),f=Object(n.a)(u,2),x=f[0],g=f[1];return Object(j.useEffect)((function(){p(!0);var s=!0,t=Object(r.f)();return Object(r.e)(Object(r.c)(t,"list",e)).then((function(e){if(e.exists()){var t=e.data();s&&(g({title:t.title,content:t.content,price:t.price,image:t.image}),p(!1))}else s&&(g({title:"404",content:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",price:"0",image:"/images/first-aid-alt.svg"}),p(!1))})),function(){s=!1}}),[e]),Object(j.useEffect)((function(){var e=function(){var e=Object(i.a)(a.a.mark((function e(){var s,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(r.f)(),e.prev=1,e.next=4,Object(r.a)(Object(r.b)(s,"list"),{title:"Panakea",content:"Panakea App"});case 4:t=e.sent,console.log("Document written with ID: ",t.id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();console.log(e)}),[]),Object(j.useEffect)((function(){var e=function(){var e=window.pageYOffset;v(e>200?"-fixed":"")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(b.jsx)(b.Fragment,{children:c?Object(b.jsx)(d,{}):Object(b.jsxs)("div",{children:[Object(b.jsx)(l.b,{onClick:function(){window.scrollTo({top:0})},className:"show-p-b".concat(w),to:"/",children:Object(b.jsx)("div",{className:"show-p-b-p",children:Object(b.jsx)("img",{className:"show-p-b-i",src:"".concat("/view","/images/left.svg"),alt:"left"})})}),Object(b.jsxs)("div",{className:"show-product",children:[Object(b.jsx)("div",{className:"show-product-2",children:Object(b.jsx)("div",{className:"show-p-p",children:Object(b.jsx)("img",{src:"/view"+x.image,alt:"",loading:"lazy",className:"show-p-i"})})}),Object(b.jsx)("div",{className:"show-product-3",children:Object(b.jsxs)("div",{className:"show-p-i-b",children:[Object(b.jsx)("h1",{className:"show-p-i-b-h",children:x.title}),Object(b.jsx)("p",{className:"show-p-i-b-p",children:x.content}),Object(b.jsxs)("p",{className:"show-p-i-b-p",children:["\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0446\u0435\u043d\u0430 \u0432 \u0430\u043f\u0442\u0435\u043a\u0430\u0445 \u0433\u043e\u0440\u043e\u0434\u0430 ",Object(b.jsxs)("b",{children:[x.price," \u20b8"]})]}),Object(b.jsxs)("div",{className:"show-p-i-b-f",children:[Object(b.jsx)(h.Link,{to:"lets",smooth:!0,duration:1e3,offset:-75,className:"show-button",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(b.jsxs)("button",{type:"button",className:"show-favourite",children:[Object(b.jsx)("div",{className:"show-f-p",children:Object(b.jsx)("img",{className:"show-f-i",src:"".concat("/view","/images/heart-red.svg"),alt:""})})," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"]})]})]})})]})]})})}}}]);
//# sourceMappingURL=7.35157808.chunk.js.map