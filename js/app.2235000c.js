(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f466ddef"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"d4205f10"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"30ed":function(t,e,n){t.exports=n.p+"img/03.1dfd165c.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("my-header"),n("v-main",[n("router-view")],1),n("my-footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("v-app-bar",{staticClass:"teal darken-1"},[n("v-app-bar-nav-icon",{staticClass:"white--text ml-5",on:{click:function(e){return t.main_list_click("Home")}}},[t._v("中觀畫室")]),n("v-toolbar-title",{staticClass:"white--text"},[t._v("林文杰老師")]),n("v-spacer"),n("v-btn-toggle",{staticClass:"teal lighten-5"},[n("v-btn",{on:{click:function(e){return t.main_list_click("Home")}}},[t._v("山水作品")]),n("v-btn",{on:{click:function(t){}}},[t._v("花鳥作品")]),n("v-btn",{on:{click:function(t){}}},[t._v("其他作品")]),n("v-btn",{on:{click:function(e){return t.main_list_click("About")}}},[t._v("學經歷")]),n("v-btn",{on:{click:function(t){}}},[t._v("聯絡方式")])],1)],1)],1)},c=[],s={data:function(){return{}},methods:{main_list_click:function(t){this.$router.push({name:t}).catch((function(){}))}}},u=s,l=n("2877"),f=n("6544"),d=n.n(f),p=n("40dc"),v=n("5bc1"),m=n("8336"),h=n("a609"),g=n("2fa4"),b=n("2a7f"),_=Object(l["a"])(u,i,c,!1,null,"00b3e997",null),y=_.exports;d()(_,{VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:m["a"],VBtnToggle:h["a"],VSpacer:g["a"],VToolbarTitle:b["a"]});var x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"blue-grey darken-1"},[n("strong",{staticClass:"subheading"},[t._v("聯絡方式")]),n("v-spacer"),t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)}))],2),n("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(t._s((new Date).getFullYear())+" —"),n("strong",[t._v("中觀畫室")])])],1)],1)],1)},k=[],C={data:function(){return{icons:["fas fa-envelope","fas fa-phone-alt"]}},methods:{main_list_click:function(t){this.$router.push({name:t}).catch((function(){}))}}},w=C,V=n("b0af"),O=n("99d9"),S=n("553a"),j=n("132d"),T=Object(l["a"])(w,x,k,!1,null,"5fb19dc2",null),E=T.exports;d()(T,{VBtn:m["a"],VCard:V["a"],VCardText:O["a"],VCardTitle:O["b"],VFooter:S["a"],VIcon:j["a"],VSpacer:g["a"]});var A={name:"App",components:{myHeader:y,myFooter:E},data:function(){return{}}},P=A,B=n("7496"),$=n("f6c4"),H=Object(l["a"])(P,r,o,!1,null,null,null),M=H.exports;d()(H,{VApp:B["a"],VMain:$["a"]});n("d3b7"),n("3ca3"),n("ddb0");var N=n("8c4f"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home"},[a("h1",{staticClass:"text-center teal--text mt-10"},[t._v("歡迎光臨")]),a("div",[a("vue-slick-carousel",t._b({},"vue-slick-carousel",t.settings,!1),[a("v-img",{attrs:{src:n("d75a"),height:"500",contain:""}}),a("v-img",{attrs:{src:n("c6ea"),height:"500",contain:""}}),a("v-img",{attrs:{src:n("30ed"),height:"500",contain:""}}),a("v-img",{attrs:{src:n("825e"),height:"500",contain:""}}),a("v-img",{attrs:{src:n("74f3"),height:"500",contain:""}}),a("v-img",{attrs:{src:n("be41"),height:"500",contain:""}})],1)],1),a("v-divider",{staticClass:"dividerClass mt-15 mb-10"}),a("v-btn",{on:{click:t.test}},[t._v("test")])],1)},F=[],L=n("a7ab"),I=n.n(L),q=(n("7b8d"),n("6a2c"),{components:{VueSlickCarousel:I.a},data:function(){return{settings:{dots:!0,centerMode:!0,centerPadding:"20px",infinite:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,pauseOnDotsHover:!0,pauseOnFocus:!0,pauseOnHover:!0}}},methods:{test:function(){this.$notify({title:"警告",message:"这是一条警告的提示消息",type:"warning"})}}}),J=q,z=n("a523"),K=n("ce7e"),U=n("adda"),Y=Object(l["a"])(J,D,F,!1,null,null,null),G=Y.exports;d()(Y,{VBtn:m["a"],VContainer:z["a"],VDivider:K["a"],VImg:U["a"]}),a["default"].use(N["a"]);var Q=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],R=new N["a"]({mode:"history",base:"/",routes:Q}),W=R,X=n("2f62");a["default"].use(X["a"]);var Z=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),tt=n("f309");a["default"].use(tt["a"]);var et=new tt["a"]({}),nt=n("5c96"),at=n.n(nt);n("0fae");a["default"].config.productionTip=!1,a["default"].use(at.a),new a["default"]({router:W,store:Z,vuetify:et,render:function(t){return t(M)}}).$mount("#app")},"74f3":function(t,e,n){t.exports=n.p+"img/05.3593dcfc.png"},"825e":function(t,e,n){t.exports=n.p+"img/04.7e90c419.png"},be41:function(t,e,n){t.exports=n.p+"img/06.2ed49e3f.png"},c6ea:function(t,e,n){t.exports=n.p+"img/02.b0d6f366.png"},d75a:function(t,e,n){t.exports=n.p+"img/01.0be9349c.png"}});
//# sourceMappingURL=app.2235000c.js.map