"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[319],{319:function(e,n,i){i.r(n),i.d(n,{default:function(){return k}});var a=i(152),t=i(791),s=i(504),r=i(871),o=i(704),c="MovieDetailsPage_div__3oaqE",l="MovieDetailsPage_title__MDJ+L",_="MovieDetailsPage_text__lmKT4",u="MovieDetailsPage_subtitle__2DZVZ",d="MovieDetailsPage_list__div34",h="MovieDetailsPage_item__NYiJ0",v="MovieDetailsPage_back__B440W",f="MovieDetailsPage_img__jzc+4",m="MovieDetailsPage_divText__8slon",g="MovieDetailsPage_container__VyXai",j="MovieDetailsPage_divInfo__VGYdZ",x="MovieDetailsPage_textInfo__ALSOS",w="MovieDetailsPage_listInfo__nxXz0",D="MovieDetailsPage_itemInfo__D1ykf",p="MovieDetailsPage_linkInfo__-p+ik",N=i(184);function k(){var e,n,i=(0,r.UO)().movieId,k=(0,t.useState)([]),M=(0,a.Z)(k,2),P=M[0],S=M[1],b=(0,r.TH)(),y=null!==(e=null===b||void 0===b||null===(n=b.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";(0,t.useEffect)((function(){(0,o.DD)(i).then(S)}),[i]);var U=P.original_title,E=P.overview,I=P.poster_path,Z=P.release_date,B=P.vote_average,C=P.genres;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(s.rU,{to:y,className:v,children:"Back"}),P&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:c,children:[(0,N.jsx)("div",{children:(0,N.jsx)("img",{src:I&&"https://image.tmdb.org/t/p/w500".concat(I),alt:"movie poster",width:150,className:f})}),(0,N.jsxs)("div",{className:m,children:[(0,N.jsxs)("div",{className:g,children:[(0,N.jsxs)("h2",{className:l,children:[U,Z?"(".concat(new Date(Date.parse(Z)).getFullYear(),")"):null]}),(0,N.jsxs)("p",{className:_,children:["User Score: ",B]})]}),(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("h3",{className:u,children:"Overview"}),(0,N.jsx)("p",{className:_,children:E})]}),(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("h3",{className:u,children:"Genres"}),(0,N.jsxs)("ul",{className:d,children:[" ",C&&C.map((function(e){var n=e.id,i=e.name;return(0,N.jsx)("li",{className:h,children:i},n)}))]})]})]})]}),(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("p",{className:x,children:"Additional information"}),(0,N.jsxs)("ul",{className:w,children:[(0,N.jsx)("li",{className:D,children:(0,N.jsx)(s.rU,{to:"cast",state:{from:y},className:p,children:"Cast"})}),(0,N.jsx)("li",{className:D,children:(0,N.jsx)(s.rU,{to:"reviews",state:{from:y},className:p,children:"Review"})})]})]})]}),(0,N.jsx)(t.Suspense,{fallback:(0,N.jsx)("div",{children:"Loading..."}),children:(0,N.jsx)(r.j3,{})})]})}},704:function(e,n,i){i.d(n,{Bt:function(){return l},DD:function(){return o},Ny:function(){return r},ZS:function(){return s},y:function(){return c}});var a="539a98864b15b7d81ff3f8cabb042a1e",t="https://api.themoviedb.org/3";function s(){return fetch("".concat(t,"/trending/all/day?api_key=").concat(a)).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function r(e){return fetch("".concat(t,"/search/movie?api_key=").concat(a,"&language=en-US&query=").concat(e,"&include_adult=false")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function o(e){return fetch("".concat(t,"/movie/").concat(e,"?api_key=").concat(a,"&language=en-US")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function c(e){return fetch("".concat(t,"/movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}function l(e){return fetch("".concat(t,"/movie/").concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1")).then((function(e){if(!e.ok)throw new Error("Something wrong");return e.json()}))}}}]);
//# sourceMappingURL=319.4ebd1906.chunk.js.map