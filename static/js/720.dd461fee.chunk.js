"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[720],{720:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r=t(907);var o=t(181);function i(n){return function(n){if(Array.isArray(n))return(0,r.Z)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||(0,o.Z)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=t(885),c=t(791),u=t(501),s=t(871),f=t(209),_=t(123),l=t(184);function m(){var n=(0,c.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],o=(0,s.TH)();return(0,c.useEffect)((function(){f.wr().then((function(n){r((function(e){return[].concat(i(e),i(n.results))}))}))}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("main",{children:[(0,l.jsx)("h1",{children:"Trending today"}),(0,l.jsx)("ul",{className:_.Z.ulHome,children:t&&t.map((function(n){return(0,l.jsx)("li",{className:_.Z.liHome,children:(0,l.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:o},className:_.Z.linkHome,children:n.title})},n.id)}))})]})})}},209:function(n,e,t){t.d(e,{Hx:function(){return p},Md:function(){return l},Y5:function(){return _},wr:function(){return f},xc:function(){return m}});var r=t(861),o=t(757),i=t.n(o),a="https://api.themoviedb.org/3",c="d1f189301a26d9afb286d4403cc9e763";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(i().mark((function n(){var e,t,r,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(a,"/trending/movie/day?api_key=").concat(c))}function _(n){return u("".concat(a,"/movie/").concat(n,"?api_key=").concat(c))}function l(n){return u("".concat(a,"/search/movie?api_key=").concat(c,"&query=").concat(n))}function m(n){return u("".concat(a,"/movie/").concat(n,"/credits?api_key=").concat(c))}function p(n){return u("".concat(a,"/movie/").concat(n,"/reviews?api_key=").concat(c))}},123:function(n,e){e.Z={ulHome:"pages_ulHome__129Y5",liHome:"pages_liHome__eifpZ",linkHome:"pages_linkHome__Lu0RR",input:"pages_input__mTDRb",button:"pages_button__TTU-1",formList:"pages_formList__9W1Cr",linkMovie:"pages_linkMovie__RjA0T",containerMovie:"pages_containerMovie__OvJQu",filmInformation:"pages_filmInformation__7FOrl",genres:"pages_genres__w5kHH",genresLi:"pages_genresLi__yySWV",additionalInformation:"pages_additionalInformation__WtEQp",listOfCasts:"pages_listOfCasts__o1IAs"}}}]);
//# sourceMappingURL=720.dd461fee.chunk.js.map