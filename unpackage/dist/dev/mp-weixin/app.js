"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("./common/vendor.js"),s={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}},t=e._export_sfc(s,[["__file","C:/Users/chen/Desktop/公交项目/Bus-projects/App.vue"]]),n=e.createPinia();function p(){const o=e.createSSRApp(t);return o.use(n),{app:o,pinia:n}}p().app.mount("#app");exports.createApp=p;
