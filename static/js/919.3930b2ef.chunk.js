"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[919],{919:function(n,t,e){e.r(t),e.d(t,{default:function(){return a}});var r=e(152),o=e(791),c=e(871),i=e(704),u=e(184);function a(){var n=(0,c.UO)().movieId,t=(0,o.useState)([]),e=(0,r.Z)(t,2),a=e[0],f=e[1];return(0,o.useEffect)((function(){(0,i.Bt)(n).then((function(n){f(n.results)}))}),[n]),(0,u.jsxs)("article",{children:[(0,u.jsx)("h3",{children:"Reviews"}),0!==a.length?(0,u.jsx)("ul",{children:a.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,u.jsxs)("li",{children:[(0,u.jsxs)("p",{children:["Author: ",e]}),(0,u.jsx)("p",{children:r})]},t)}))}):(0,u.jsx)("p",{children:"Reviews not found!"})]})}},704:function(n,t,e){e.d(t,{Bt:function(){return f},DD:function(){return u},Ny:function(){return i},ZS:function(){return c},y:function(){return a}});var r="539a98864b15b7d81ff3f8cabb042a1e",o="https://api.themoviedb.org/3";function c(){return fetch("".concat(o,"/trending/all/day?api_key=").concat(r)).then((function(n){if(!n.ok)throw new Error("Something wrong");return n.json()}))}function i(n){return fetch("".concat(o,"/search/movie?api_key=").concat(r,"&language=en-US&query=").concat(n,"&include_adult=false")).then((function(n){if(!n.ok)throw new Error("Something wrong");return n.json()}))}function u(n){return fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){if(!n.ok)throw new Error("Something wrong");return n.json()}))}function a(n){return fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){if(!n.ok)throw new Error("Something wrong");return n.json()}))}function f(n){return fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){if(!n.ok)throw new Error("Something wrong");return n.json()}))}}}]);
//# sourceMappingURL=919.3930b2ef.chunk.js.map