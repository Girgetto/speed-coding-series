(this["webpackJsonpspeed-coding-series"]=this["webpackJsonpspeed-coding-series"]||[]).push([[0],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return calculatorsButtons})),__webpack_require__.d(__webpack_exports__,"b",(function(){return initialState})),__webpack_require__.d(__webpack_exports__,"c",(function(){return reducer}));var calculatorsButtons=[["DEL","+/-","%","/"],["7","8","9","*"],["4","5","6","-"],["1","2","3","+"],["0",",","="]],initialState={expression:"",result:0},invalidInputs=["DEL","+/-","%","/","*","-","+",""],reducer=function reducer(state,action){switch(action){case"=":return invalidInputs.some((function(e){return state.expression===e}))?{result:0,expression:""}:{expression:"",result:eval(state.expression)};case"DEL":return{result:0,expression:""};default:return{result:0,expression:state.expression+action}}}},26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(19),i=n.n(s),a=n(8),o=n(2),u=(n(26),n(1)),l=function(){return Object(u.jsxs)("div",{className:"routes-list",children:[Object(u.jsx)(a.b,{to:"/calculator",children:"Calculator"}),Object(u.jsx)(a.b,{to:"/to-do",children:"To Do List"})]})},j=n(13),d=function(e,t){return e.map((function(e,n){return Object(u.jsx)("td",{colSpan:"="!==e?1:2,onClick:function(){t(e)},children:e},n)}))},b=function(e){var t=e.rowElements,n=e.i,c=e.dispatch;return Object(u.jsx)("tr",{children:d(t,c)},n)},p=n(11),x=(n(36),function(e){return p.a.map((function(t,n){return Object(u.jsx)(b,{rowElements:p.a[n],dispatch:e},n)}))}),_=function(e){return Object(u.jsx)("tr",{children:Object(u.jsxs)("th",{colSpan:"4",children:[Object(u.jsx)("p",{className:"expression",children:""!==e.expression?e.expression:"0"}),Object(u.jsx)("p",{className:"result",children:e.result})]})})},h=function(){var e=Object(c.useReducer)(p.c,p.b),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(u.jsxs)("table",{cellSpacing:"0",cellPadding:"0",children:[Object(u.jsx)("thead",{children:_(n)}),Object(u.jsx)("tbody",{children:x(r)})]})},O=n(18),f=n(21),m=(n(37),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=function(){return Object(u.jsx)("ul",{className:"list",children:n.map((function(e){return Object(u.jsxs)("li",{className:"to-do",children:[Object(u.jsx)("p",{style:{textDecorationLine:e.isDone?"line-through":null},children:e.description}),Object(u.jsxs)("div",{className:"clickable",children:[Object(u.jsx)("input",{type:"radio",onChange:function(){return function(e){var t=n.map((function(t){return e._id===t._id?Object(O.a)(Object(O.a)({},t),{},{isDone:!t.isDone}):t}));r(t)}(e)},checked:e.isDone}),Object(u.jsx)("b",{onClick:function(){return function(e){var t=n.filter((function(t){return e._id!==t._id}));r(t)}(e)},children:"X"})]})]},e._id)}))})};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("input",{placeholder:"Add TO DO",className:"to-do-input",onKeyDown:function(e){"Enter"===e.key&&(r([].concat(Object(f.a)(n),[{description:e.target.value,isDone:!1,_id:(new Date).valueOf()}])),e.target.value="")}}),Object(u.jsx)(s,{list:n})]})});var v=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(a.a,{children:[Object(u.jsx)("navbar",{children:Object(u.jsx)(a.b,{to:"/",children:"Home"})}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/to-do",children:Object(u.jsx)(m,{})}),Object(u.jsx)(o.a,{path:"/calculator",children:Object(u.jsx)(h,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(l,{})})]})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),k()}},[[38,1,2]]]);
//# sourceMappingURL=main.30413189.chunk.js.map