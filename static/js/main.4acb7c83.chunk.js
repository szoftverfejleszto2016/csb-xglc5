(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{18:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),l=n.n(r),u=n(1),i=n(8),o=n(6);var m=function(){var e=Object(a.useState)(1),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)({title:"",description:"",price:0,image:""}),u=Object(i.a)(l,2),m=u[0],s=u[1];return Object(a.useEffect)((function(){fetch("https://fakestoreapi.com/products/"+n).then((function(e){return e.json()})).then((function(e){return s({title:e.title,description:e.description,price:e.price,image:e.image})}))}),[n]),c.a.createElement("div",null,c.a.createElement("h1",null,"Products"),c.a.createElement("p",null,c.a.createElement(o.b,{to:"/Customers"},"Customers")),c.a.createElement("button",{onClick:function(){n>1&&r(n-1)}},"Previous"),c.a.createElement("button",{onClick:function(){n<20&&r(n+1)}},"Next"),c.a.createElement("h3",null,m.title),c.a.createElement("h4",null,"$ ",m.price),c.a.createElement("p",null,m.description),c.a.createElement("img",{src:m.image,alt:m.title,height:300}))};var s=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){fetch("https://fakestoreapi.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var l=Object(a.useState)(""),u=Object(i.a)(l,2),m=u[0],s=u[1];return c.a.createElement("div",null,c.a.createElement("h1",null,"Customers"),c.a.createElement("p",null,c.a.createElement(o.b,{to:"/"},"Products")),c.a.createElement("input",{type:"text",value:m,onChange:function(e){s(e.target.value)}}),c.a.createElement("ul",null,n.filter((function(e){return e.name.firstname.includes(m)||e.name.lastname.includes(m)})).map((function(e){return c.a.createElement("li",{key:e.id},e.name.firstname+" "+e.name.lastname)}))))};var p=function(){return c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/"},c.a.createElement(m,null)),c.a.createElement(u.a,{path:"/customers"},c.a.createElement(s,null)))};l.a.render(c.a.createElement(o.a,null,c.a.createElement(p,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4acb7c83.chunk.js.map