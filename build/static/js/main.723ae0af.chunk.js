(this["webpackJsonprick-and-morty-app"]=this["webpackJsonprick-and-morty-app"]||[]).push([[0],{53:function(e,c,t){},54:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),r=t(28),n=t.n(r),i=t(12),l=t(29),o=t.n(l),d=t(2),j=function(e){var c=e.brand;return Object(d.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("a",{className:"navbar-brand text-uppercase",href:"/",children:c})})})},b=t(58),h=t(57),m=function(e){var c=e.characters,t=e.onCharacterSelect,s=Object(a.useState)(""),r=Object(i.a)(s,2),n=r[0],l=r[1],o=Object(a.useState)(1),j=Object(i.a)(o,2),m=(j[0],j[1],Object(a.useState)(c.length)),u=Object(i.a)(m,2),O=(u[0],u[1],c.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),x=function(e){t(e)};return Object(d.jsxs)("div",{className:"character-list",children:[Object(d.jsx)("form",{className:"character-list__form",children:Object(d.jsx)("div",{className:"input-group mb-3",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",value:n,onChange:function(e){l(e.target.value)}})})}),Object(d.jsx)("div",{className:"row row-cols-md-3 g-4 character-list__cards",style:{height:"100vh"},children:Object(d.jsx)(b.a,{initial:!1,children:O.map((function(e,c){return Object(d.jsxs)(h.a.div,{className:"character-card col",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(d.jsx)("div",{className:"character-card__image",onClick:function(){return x(e)},children:Object(d.jsx)("img",{src:e.image,alt:"character"})}),Object(d.jsxs)("div",{className:"character-card__content",children:[Object(d.jsx)("h5",{className:"character-card__name",children:e.name}),Object(d.jsx)("hr",{className:"character-card__hr"}),Object(d.jsx)("button",{className:"character-card__button",onClick:function(){return x(e)},children:"View Details"})]})]},c)}))})})]})},u=function(e){var c=e.character,t=e.onClose;return c?Object(d.jsx)("div",{className:"modal",tabIndex:"-1",role:"dialog",style:{display:"block"},children:Object(d.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",style:{maxWidth:"95%"},children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsxs)("div",{className:"modal-header",children:[Object(d.jsx)("h5",{className:"modal-title",children:c.name}),Object(d.jsx)("button",{type:"button",className:"close",onClick:t,children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(d.jsxs)("div",{className:"modal-body",style:{overflowY:"auto"},children:[Object(d.jsx)("img",{src:c.image,alt:c.name,className:"img-fluid"}),Object(d.jsxs)("p",{children:["Species: ",c.species]}),Object(d.jsxs)("p",{children:["Status: ",c.status]}),Object(d.jsxs)("p",{children:["Location: ",c.location.name]}),Object(d.jsxs)("p",{children:["Gender: ",c.gender]}),Object(d.jsxs)("p",{children:["Origin: ",c.origin.name]})]}),Object(d.jsx)("div",{className:"modal-footer",children:Object(d.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Close"})})]})})}):null};var O=function(){var e=Object(a.useState)([]),c=Object(i.a)(e,2),t=c[0],s=c[1],r=Object(a.useState)(null),n=Object(i.a)(r,2),l=n[0],b=n[1],h=Object(a.useState)(!0),O=Object(i.a)(h,2),x=O[0],p=O[1],v=Object(a.useState)(""),f=Object(i.a)(v,2),N=f[0];f[1],Object(a.useEffect)((function(){o.a.get("https://rickandmortyapi.com/api/character").then((function(e){s(e.data.results),p(!1)})).catch((function(e){console.log(e),p(!1)}))}),[]);var g=t.filter((function(e){var c=N.toLowerCase();return e.name.toLowerCase().includes(c)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"container mt-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-md-6",children:x?Object(d.jsx)("p",{children:"Loading..."}):Object(d.jsx)(m,{characters:g,onCharacterSelect:function(e){b(e)}})}),Object(d.jsx)("div",{className:"col-md-6",children:l?Object(d.jsx)(u,{character:l,onClose:function(){b(null)}}):Object(d.jsx)("p",{})})]})})]})};t(53);n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.723ae0af.chunk.js.map