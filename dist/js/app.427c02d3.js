(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-08485378":"b4a4732a","chunk-2b1a5e0d":"cdf2d566","chunk-33903018":"193db655","chunk-44b647eb":"0db44762","chunk-66a16954":"ec926526","chunk-6d54d00c":"b2d8fdbd","chunk-7105a14f":"ea319c24","chunk-ef4c664a":"c7c2321b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-08485378":1,"chunk-2b1a5e0d":1,"chunk-33903018":1,"chunk-44b647eb":1,"chunk-66a16954":1,"chunk-6d54d00c":1,"chunk-7105a14f":1,"chunk-ef4c664a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-08485378":"731ff75c","chunk-2b1a5e0d":"a9a6d683","chunk-33903018":"b917c383","chunk-44b647eb":"731ff75c","chunk-66a16954":"b917c383","chunk-6d54d00c":"43951066","chunk-7105a14f":"7047b906","chunk-ef4c664a":"c26fbc4c"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06ee":function(e,t,n){},2395:function(e,t,n){},"2b7c":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("d3b7");var r=n("bc3a"),o=n.n(r),a=n("5c96");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,u){var c={url:e,method:t};"get"===t.toLowerCase()?c.params=n:c.data=n,localStorage.token&&(o.a.defaults.headers.common["Authorization"]=localStorage.token),o()(c).then((function(e){console.log(e.data),"ok"===e.data.status?(e.data.token&&(localStorage.token=e.data.token),r(e.data)):(a["Message"].error(e.data.msg),u(e.data))})).catch((function(e){a["Message"].error("网络异常"),console.log(e),u({msg:"网络异常"})}))}))}o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.defaults.baseURL="//blog-server.hunger-valley.com",window.request=u},"3fd5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{id:"header"}}),n("main",{attrs:{id:"main"}},[n("router-view")],1),n("Footer",{attrs:{id:"footer"}})],1)},a=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin}},[e.isLogin?e._e():[n("h1",[e._v("LET'S SHARE")]),n("P",[e._v("精品博客汇聚")]),n("div",{staticClass:"buttons"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[e._v("立即登录")])],1),n("router-link",{attrs:{to:"/register"}},[n("el-button",[e._v("注册账号")])],1)],1)],e.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[e._v("LET'S SHARE")])],1),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}}),n("ul",[n("li",[n("router-link",{attrs:{to:"/mine"}},[e._v("我的")])],1),n("li",[n("a",{attrs:{href:"#"},on:{click:e.onLogout}},[e._v("注销")])])])])]:e._e()],2)},c=[],i=n("5530"),s=n("2b7c"),l={REGISTER:"/auth/register",LOGIN:"/auth/login",LOGOUT:"/auth/logout",GET_INFO:"/auth"},f={register:function(e){var t=e.username,n=e.password;return Object(s["a"])(l.REGISTER,"POST",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(s["a"])(l.LOGIN,"POST",{username:t,password:n})},logout:function(){return Object(s["a"])(l.LOGOUT)},getInfo:function(){return Object(s["a"])(l.GET_INFO)}},d=n("2f62");window.auth=f;var h={data:function(){return{}},computed:Object(i["a"])({},Object(d["c"])(["isLogin","user"])),created:function(){this.checkLogin()},methods:Object(i["a"])(Object(i["a"])({},Object(d["b"])(["checkLogin","logout"])),{},{onLogout:function(){this.logout()}})},g=h,p=(n("a024"),n("2877")),m=Object(p["a"])(g,u,c,!1,null,"27b36373",null),b=m.exports,v=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("p",[e._v("©版权所有 ")])])}],w=(n("ff32"),{}),L=Object(p["a"])(w,v,k,!1,null,"1f4ddeaa",null),O=L.exports,y={components:{Header:b,Footer:O}},_=y,j=(n("7c55"),Object(p["a"])(_,o,a,!1,null,null,null)),E=j.exports,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),T=n("1da1"),x=(n("96cf"),{user:null,isLogin:!1}),P={user:function(e){return e.user},isLogin:function(e){return e.isLogin}},A={setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},C={login:function(e,t){var n=e.commit,r=t.username,o=t.password;return f.login({username:r,password:o}).then((function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0}),console.log("我更新 了"),console.log(e.data),console.log(x.user)}))},register:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var r,o,a,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,o=t.username,a=t.password,n.next=4,f.register({username:o,password:a});case 4:return u=n.sent,r("setUser",{user:u.data}),r("setLogin",{isLogin:!0}),n.abrupt("return",u.data);case 8:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(T["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,f.logout();case 3:n("setUser",{user:null}),n("setLogin",{isLogin:!1}),localStorage.removeItem("token"),console.log("hi whh");case 7:case"end":return t.stop()}}),t)})))()},checkLogin:function(e){return Object(T["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.state,!r.isLogin){t.next=3;break}return t.abrupt("return",!0);case 3:return t.next=5,f.getInfo();case 5:if(o=t.sent,n("setLogin",{isLogin:o.isLogin}),o.isLogin){t.next=10;break}return console.log("我是检查是否登录4"),t.abrupt("return",!1);case 10:return n("setUser",{user:o.data}),t.abrupt("return",!0);case 12:case"end":return t.stop()}}),t)})))()}},I={state:x,getters:P,mutations:A,actions:C},R={state:{},getters:{},mutations:{},actions:{}};r["default"].use(d["a"]);var G=new d["a"].Store({modules:{auth:I,blog:R}});r["default"].use(S["a"]),window.store=G;var M=[{path:"/",component:function(){return n.e("chunk-2b1a5e0d").then(n.bind(null,"aee6"))}},{path:"/login",component:function(){return n.e("chunk-ef4c664a").then(n.bind(null,"22f1"))}},{path:"/detail/:blogId",component:function(){return n.e("chunk-7105a14f").then(n.bind(null,"6059"))}},{path:"/edit/:blogId",component:function(){return n.e("chunk-33903018").then(n.bind(null,"aefc"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return n.e("chunk-66a16954").then(n.bind(null,"7da7"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return n.e("chunk-44b647eb").then(n.bind(null,"209d"))}},{path:"/mine",component:function(){return n.e("chunk-08485378").then(n.bind(null,"7069"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e("chunk-6d54d00c").then(n.bind(null,"4d55"))}}],N=new S["a"]({routes:M});N.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?G.dispatch("checkLogin").then((function(){n()}),(function(){n({path:"/login",query:{redirect:e.fullPath}}),console.log("fuck")})):n()}));var U=N,q=n("5c96"),D=n.n(q),F=(n("0fae"),n("53ca"));function H(e){var t="object"===Object(F["a"])(e)?e:new Date(e),n=t.getTime(),r=Date.now(),o=r-n,a="";switch(!0){case o<6e4:a="刚刚";break;case o<36e5:a=Math.floor(o/6e4)+"分钟前";break;case o<864e5:a=Math.floor(o/36e5)+"小时前";break;default:a=Math.floor(o/864e5)+"天前"}return a}var $={install:function(e){e.prototype.friendlyDate=H}};r["default"].use(D.a),r["default"].use($),r["default"].config.productionTip=!1,new r["default"]({router:U,store:G,render:function(e){return e(E)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";n("2395")},a024:function(e,t,n){"use strict";n("06ee")},ff32:function(e,t,n){"use strict";n("3fd5")}});
//# sourceMappingURL=app.427c02d3.js.map