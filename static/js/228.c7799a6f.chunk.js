"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[228,805],{3228:function(n,t,e){e.r(t);var r=e(9439),c=e(2791),a=e(7689),u=e(1122),i=e(9805),o=e(184);t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,c.useState)(!1),p=(0,r.Z)(f,2),d=p[0],v=p[1],h=(0,a.UO)();return(0,c.useEffect)((function(){(0,u.sv)(h.movieId).then((function(n){s(n.results)})).catch((function(n){v(!0)}))}),[h.movieId]),(0,o.jsxs)("section",{children:[(0,o.jsx)("h2",{children:"Our mission"}),d&&(0,o.jsx)(i.default,{}),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:e.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:n.author}),(0,o.jsx)("p",{children:n.content})]})},n.id)}))})})]})}},9805:function(n,t,e){e.r(t),e.d(t,{default:function(){return c}});var r=e(184);function c(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("p",{children:" 404 "})})}},1122:function(n,t,e){e.d(t,{Tg:function(){return s},kK:function(){return d},l2:function(){return p},sv:function(){return v},vw:function(){return f}});var r=e(5861),c=e(4687),a=e.n(c),u=e(1912),i="https://api.themoviedb.org/3",o="ac72fb525d19148bd97395d88b810c51",s=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/movie/week?api_key=").concat(o,"&language=en-US&page=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=228.c7799a6f.chunk.js.map