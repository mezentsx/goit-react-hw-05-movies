"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[462],{462:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}t.r(n),t.d(n,{default:function(){return w}});var i=t(152),a=t(791),u=t(504),s=t(871),f=t(704),l="MoviesPage_form__Hzb4A",h="MoviesPage_input__h5lTQ",g="MoviesPage_button__HN2QC",m="MoviesPage_list__xgBYI",p="MoviesPage_item__31wgY",_="MoviesPage_link__Kqtq6",b=t(184);function w(){var e,n=(0,a.useState)(null),t=(0,i.Z)(n,2),r=t[0],o=t[1],w=(0,a.useState)(""),v=(0,i.Z)(w,2),y=v[0],j=v[1],d=(0,s.TH)(),O=(0,s.s0)(),k=null!==(e=new URLSearchParams(d.search).get("query"))&&void 0!==e?e:"";(0,a.useEffect)((function(){k&&(0,f.Ny)(k).then((function(e){o(e.results)}))}),[k]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(y.trim()),""!==y?(!function(e){O(c(c({},d),{},{search:"query=".concat(e)}))}(y),j("")):alert("Enter some kind of request")},className:l,children:[(0,b.jsx)("input",{className:h,type:"text",name:"search",onChange:function(e){j(e.target.value.toLowerCase())},pattern:"[^\\s]+"}),(0,b.jsx)("button",{className:g,type:"submit",children:"Search"})]}),r&&(0,b.jsx)("ul",{className:m,children:r.map((function(e){var n=e.id,t=e.original_title;return(0,b.jsx)("li",{className:p,children:(0,b.jsx)(u.rU,{to:"/movies/".concat(n),state:{from:d},className:_,children:t})},n)}))})]})}},704:function(e,n,t){t.d(n,{Bt:function(){return s},DD:function(){return a},Ny:function(){return i},ZS:function(){return c},y:function(){return u}});var r="539a98864b15b7d81ff3f8cabb042a1e",o="https://api.themoviedb.org/3";function c(){return fetch("".concat(o,"/trending/all/day?api_key=").concat(r)).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function i(e){return fetch("".concat(o,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(e,"&include_adult=false")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function a(e){return fetch("".concat(o,"/movie/").concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function u(e){return fetch("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function s(e){return fetch("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}}}]);
//# sourceMappingURL=462.bca87bce.chunk.js.map