"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[776,805],{4776:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,o,p=e(9439),i=e(2791),s=e(7689),u=e(1122),x=e(9805),l=e(168),f=e(82),d=e(3386),h=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 16px;\n"]))),g=(f.ZP.li(a||(a=(0,l.Z)(["\n  border: "," grey;\n  border-radius: ",";\n  box-shadow: ",";\n"])),d.Z.borders.normal,d.Z.radii.normal,d.Z.shadow.high),f.ZP.p(c||(c=(0,l.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  padding: 6px;\n"])),d.Z.fontSizes.m,d.Z.fontWeights.bold)),v=f.ZP.p(o||(o=(0,l.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  padding-left: 10px;\n"])),d.Z.fontSizes.m,d.Z.fontWeights.light),m=e(184),Z=function(){var n=(0,i.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(!1),c=(0,p.Z)(a,2),o=c[0],l=c[1],f=(0,s.UO)();return(0,i.useEffect)((function(){(0,u.sv)(f.movieId).then((function(n){r(n.results)})).catch((function(n){l(!0)}))}),[f.movieId]),(0,m.jsxs)("section",{children:[(0,m.jsx)("h2",{children:"Review"}),o&&(0,m.jsx)(x.default,{}),(0,m.jsx)("div",{children:e.length?(0,m.jsx)(h,{children:e.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(g,{children:n.author}),(0,m.jsx)(v,{children:n.content})]})},n.id)}))}):(0,m.jsx)("p",{children:"No results"})})]})}},9805:function(n,t,e){e.r(t),e.d(t,{default:function(){return a}});var r=e(184);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("p",{children:" 404 "})})}},1122:function(n,t,e){e.d(t,{Tg:function(){return s},kK:function(){return l},l2:function(){return x},sv:function(){return f},vw:function(){return u}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1912),p="https://api.themoviedb.org/3",i="ac72fb525d19148bd97395d88b810c51",s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/trending/movie/week?api_key=").concat(i,"&language=en-US&page=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3386:function(n,t){var e="235deg 32% 13%",r={colors:{white:"#fff",text:"#000",background:"#E9EAEC",primary:"#90ADC6",secondary:"#333652",accent:"#df4f0d",muted:"#489fb5"},fonts:{body:"Rubik, sans-serif",heading:"system-ui, sans-serif",monospace:"Menlo, monospace"},fontSizes:{xs:"12px",s:"14px",m:"16px",l:"20px",xl:"24px",xxl:"32px"},fontWeights:{light:400,regular:500,bold:700},lineHeights:{body:1.5,heading:1.125},space:["0px","2px","4px","8px","16px","32px","64px","128px","256px"],borders:{none:"none",normal:"1px solid"},radii:{none:"0",normal:"8px",high:"16px",round:"50%"},sizes:{container:"1216px"},transition:{primary:"all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)"},shadow:{low:"0.2px 0.8px 0.7px hsl(".concat(e," / 0.47),\n    0.3px 1.2px 1.1px -2px hsl(").concat(e," / 0.35),\n    0.7px 3px 2.7px -4.1px hsl(").concat(e," / 0.23);"),medium:"0.2px 0.8px 0.7px hsl(".concat(e," / 0.49),\n    0.4px 1.8px 1.6px -1.3px hsl(").concat(e," / 0.39),\n    1.3px 5.5px 5px -2.7px hsl(").concat(e," / 0.3),\n    3.5px 15px 13.7px -4.1px hsl(").concat(e," / 0.21);"),high:"0.2px 0.8px 0.7px hsl(".concat(e," / 0.45),\n    0.5px 2.2px 2px -0.6px hsl(").concat(e," / 0.41),\n    1px 4.4px 4px -1.2px hsl(").concat(e," / 0.37),\n    2px 8.5px 7.8px -1.7px hsl(").concat(e," / 0.32),\n    3.6px 15.8px 14.5px -2.3px hsl(").concat(e," / 0.28),\n    6.3px 27.4px 25.1px -2.9px hsl(").concat(e," / 0.24),\n    10.3px 44.6px 40.9px -3.5px hsl(").concat(e," / 0.19),\n    15.8px 68.4px 62.7px -4.1px hsl(").concat(e," / 0.15);")}};t.Z=r}}]);
//# sourceMappingURL=776.ab36d4f9.chunk.js.map