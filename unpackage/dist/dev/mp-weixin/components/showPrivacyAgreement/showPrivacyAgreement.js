"use strict";const e=require("../../common/vendor.js"),n={data(){return{}},methods:{init(i){this.$refs.privacyPopup.open(),this.resolvePrivacyAuthorization=i},goToPrivacy(){e.wx$1.openPrivacyContract({success:()=>{console.log("打开成功")},fail:()=>{e.index.showToast({title:"打开失败，稍后重试",icon:"none"})}})},confusePrivacy(){this.$refs.privacyPopup.close(),this.resolvePrivacyAuthorization({event:"disagree"})},handleAgreePrivacyAuthorization(){this.resolvePrivacyAuthorization({buttonId:"agree-btn",event:"agree"}),this.$refs.privacyPopup.close()}}};Array||e.resolveComponent("uni-popup")();const t=()=>"../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";Math||t();function c(i,a,p,u,v,o){return{a:e.o((...r)=>o.goToPrivacy&&o.goToPrivacy(...r)),b:e.o((...r)=>o.confusePrivacy&&o.confusePrivacy(...r)),c:e.o((...r)=>o.handleAgreePrivacyAuthorization&&o.handleAgreePrivacyAuthorization(...r)),d:e.sr("privacyPopup","479d5b42-0"),e:e.p({type:"bottom",["is-mask-click"]:!0})}}const s=e._export_sfc(n,[["render",c],["__file","C:/Users/chen/Desktop/公交项目/Bus-projects/components/showPrivacyAgreement/showPrivacyAgreement.vue"]]);wx.createComponent(s);
