(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},148:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(50),r=n.n(o),i=(n(141),n.p,n(142),n(143),n(30)),s=n(122),l=n(19),d=n.n(l),u=n(47),j=n(27),h=(n(145),n(177)),f=(n(146),n(5));function b(){return Object(f.jsx)("div",{className:"main-header",children:Object(f.jsx)("h1",{className:"main-header__title",children:"TODO APP WITH REACTJS"})})}var O=n(58),m=(n(148),n(176)),p=n(173),v=n(174),x=n(160),_=n(56);function T(e){var t=e.addTodo,n={name:"",description:""},c=Object(a.useState)(n),o=Object(j.a)(c,2),r=o[0],s=o[1];return Object(f.jsxs)("div",{className:"main-admin-panel",children:[Object(f.jsx)("header",{className:"main-admin-panel__header",children:Object(f.jsx)("h3",{className:"main-admin-panel__header__title",children:"ADMIN PANEL"})}),Object(f.jsxs)(m.a,{className:"main-admin-panel__form",onChange:function(e){s(Object(i.a)(Object(i.a)({},r),{},Object(O.a)({},e.target.name,e.target.value)))},children:[Object(f.jsx)(m.a.Field,{children:Object(f.jsx)(p.a,{name:"name",placeholder:"To-Do name"})}),Object(f.jsx)(m.a.Field,{children:Object(f.jsx)(v.a,{name:"description",placeholder:"Why would you do this to-do?"})}),Object(f.jsxs)(x.a,{fluid:!0,onClick:function(){t(Object(i.a)(Object(i.a)({},r),{},{isActive:!1})),s(n)},children:[Object(f.jsx)(_.a,{name:"plus"}),"ADD"]})]})]})}n(155);var C=n(175);n(156);function N(e){var t=e.name,n=e.description,c=e.isActive,o=e.id,r=e.deleteTodo,i=e.editTodo,s=Object(a.useState)(!1),l=Object(j.a)(s,2),d=l[0],u=l[1],h=Object(a.useState)(!1),b=Object(j.a)(h,2),m=b[0],T=b[1],N=Object(a.useState)({id:o,name:t,description:n}),g=Object(j.a)(N,2),w=g[0],A=g[1],S=function(e){A(Object(O.a)({id:o,name:t,description:n,isActive:c},e.target.name,e.target.value))};return Object(f.jsxs)("div",{className:"todo ".concat(c?"todo--active":""),children:[Object(f.jsxs)("div",{class:"todo__header",onClick:function(){u(!d)},children:[m?Object(f.jsx)(p.a,{defaultValue:t,style:{width:"100%"},onChange:S,name:"name"}):Object(f.jsx)("h2",{className:"todo__header__title",children:t}),Object(f.jsx)(_.a,{name:"".concat(d?"angle up":"angle down"),className:"todo__header__icon"})]}),Object(f.jsxs)("div",{className:"todo__content ".concat(d?"":"todo__content--hide"," "),children:[m?Object(f.jsx)(v.a,{defaultValue:n,style:{width:"100%"},onChange:S,name:"description"}):Object(f.jsx)("p",{className:"todo__content__span",children:n}),Object(f.jsx)(C.a,{}),Object(f.jsx)(x.a,{onClick:m?function(){return T(!1)}:function(){return T(!0)},content:m?"CANCEL EDIT":"EDIT TO-DO"}),Object(f.jsx)(x.a,{onClick:m?function(){i(o,w),T(!1)}:function(){r(o)},content:m?"APPLY CHANGES":"DELETE TO-DO",color:"black"})]})]})}n(157);var g=n(16),w=n(123);function A(e){var t=e.setFilter,n=e.filter,a=e.setToSearch,c=function(e,n){var a=n.value;return t(a)};return Object(f.jsxs)("div",{className:"todos-filter",children:[Object(f.jsxs)(g.a,{className:"todo-filter__form-field",children:[Object(f.jsx)(w.a,{radio:!0,value:"all",onChange:c,label:"All",checked:"all"===n}),Object(f.jsx)(w.a,{radio:!0,value:"active",onChange:c,label:"Active",checked:"active"===n}),Object(f.jsx)(w.a,{radio:!0,value:"inactive",onChange:c,label:"Inactive",checked:"inactive"===n})]}),Object(f.jsx)(p.a,{size:"massive",icon:"search",iconPosition:"left",placeholder:"To-do to search...",className:"todo-filter__search",onChange:function(e){var t=e.target.value.toUpperCase();a(t)}})]})}function S(e){var t=e.todos,n=e.deleteTodo,a=e.editTodo;return Object(f.jsx)("div",{className:"todos-container",children:t.map((function(e){return Object(f.jsx)(N,{name:e.name,description:e.description,isActive:e.isActive,deleteTodo:n,editTodo:a,id:e.id})}))})}function k(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),r=Object(j.a)(o,2),i=r[0],l=r[1],O=Object(a.useState)([]),m=Object(j.a)(O,2),p=m[0],v=m[1],x=Object(a.useState)(""),_=Object(j.a)(x,2),C=_[0],N=_[1];Object(a.useEffect)(Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,c(t),g();case 5:case"end":return e.stop()}}),e)}))),[i,C]);var g=function(){var e;e="all"==i?n.filter((function(e){return e.name.toUpperCase().includes(C)})):"active"==i?(e=n.filter((function(e){return!0===e.isActive}))).filter((function(e){return e.name.toUpperCase().includes(C)})):(e=n.filter((function(e){return!1===e.isActive}))).filter((function(e){return e.name.toUpperCase().includes(C)})),v(e)},w=function(){l("all"===i?"active":"all"),l(i)},k=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/todos/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:o=e.sent,c([].concat(Object(s.a)(n),[o])),w();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/todos/".concat(t),{method:"DELETE"});case 2:200===e.sent.status?c(n.filter((function(e){return e.id!==t}))):alert("Error deleting this todo."),w();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/todos/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 2:e.sent,w();case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(f.jsxs)(h.a,{className:"main-page",children:[Object(f.jsx)(h.a.Row,{children:Object(f.jsx)(h.a.Column,{className:"main-bar",width:16,children:Object(f.jsx)(b,{})})}),Object(f.jsxs)(h.a.Row,{children:[Object(f.jsx)(h.a.Column,{className:"column",width:3,children:Object(f.jsx)(T,{addTodo:y})}),Object(f.jsxs)(h.a.Column,{className:"column",width:13,children:[Object(f.jsx)(A,{setFilter:l,filter:i,setToSearch:N}),n.length>0?Object(f.jsx)(S,{todos:p,deleteTodo:E,editTodo:D}):"No Todos to show"]})]})]})}var y=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(k,{})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,178)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),E()}},[[158,1,2]]]);
//# sourceMappingURL=main.ac248555.chunk.js.map