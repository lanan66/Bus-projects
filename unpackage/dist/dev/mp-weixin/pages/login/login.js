"use strict";const t=require("../../common/vendor.js"),u=()=>"../../components/showTip/showTip.js",a=()=>"../../components/showPrivacyAgreement/showPrivacyAgreement.js",l={data(){return{navheight:0,current:0,countdown:60,canget:!0,isshowpaaward:0,phonevalue:"",codevalue:"",countvalue:"",passwordvalue:"",privacyVisible:!1,tiptitle:"错误",tabitems:[{id:1,text:"验证码登陆"},{id:2,text:"密码登录"}]}},components:{showPrivacyAgreement:a,showTip:u},created(){this.isBarHeight().then(o=>{this.navheight=o.allHeight})},onShow(){t.wx$1.getPrivacySetting({success:o=>{console.log(o),o.needAuthorization||(this.privacyVisible=!0,this.$refs.showPrivacy.init())},fail:()=>{}})},methods:{error(o){this.tiptitle=o,this.$refs.showtip.open()},isBarHeight(){return new Promise((o,r)=>{var i={};t.index.getSystemInfo({success(c){let e=68;c.model.indexOf("iPhone X")!==-1?e=88:c.model.indexOf("iPhone")!==-1&&(e=64),i.statusBarHeight=c.statusBarHeight,i.titleBarHeight=e-c.statusBarHeight,i.allHeight=e,o(i)},fail(c){r(c)}})})},changetab(o){this.current=o},getcaptcha(){this.canget=!1;var o=setInterval(()=>{this.countdown--,this.countdown<=0&&(clearInterval(o),this.canget=!0,this.countdown=60)},1e3)},gotoagreement(){t.index.navigateTo({url:"/pages_login/agreement/agreement"})},checkphone(o){this.phonevalue==""&&this.error("请先输入手机号");let r=/^[1][3,4,5,7,8,9][0-9]{9}$/;this.phonevalue!=""&&(r.test(o)||this.error("请输入正确的手机号"))},NumInput(o){const r=o.target,i=/[^\d]/g;this.$nextTick(function(){this.phonevalue=r.value.replace(i,"")})},CountInput(o){const r=o.target,i=/[^\d]/g;this.$nextTick(function(){this.countvalue=r.value.replace(i,"")})},CodeInput(o){const r=o.target,i=/[^\d]/g;this.$nextTick(function(){this.codevalue=r.value.replace(i,"")})},checkcode(o){this.codevalue==""&&this.error("请先填写验证码")},checkcount(o){this.countvalue==""&&this.error("请先输入账号");let r=/^[1][3,4,5,7,8,9][0-9]{9}$/;this.countvalue!=""&&(r.test(o)||this.error("请输入正确的账号"))},checkpassword(o){this.passwordvalue==""&&this.error("请先输入密码")}}};if(!Array){const o=t.resolveComponent("showPrivacyAgreement"),r=t.resolveComponent("showTip");(o+r)()}const v=()=>"../../components/showPrivacyAgreement/showPrivacyAgreement.js",p=()=>"../../components/showTip/showTip.js";Math||(v+p)();function g(o,r,i,c,e,n){return t.e({a:e.navheight*2+"rpx",b:e.current==0},e.current==0?{}:{},{c:e.current==1},e.current==1?{}:{},{d:t.f(e.tabitems,(s,h,m)=>({a:t.t(s.text),b:s.id,c:t.n(e.current==h?"move":""),d:t.o(f=>n.changetab(h),s.id)})),e:t.o([t.m(s=>e.phonevalue=s.detail.value,{number:!0}),(...s)=>n.NumInput&&n.NumInput(...s)]),f:t.o(s=>n.checkphone(e.phonevalue)),g:e.phonevalue,h:t.o([s=>e.codevalue=s.detail.value,(...s)=>n.CodeInput&&n.CodeInput(...s)]),i:t.o(s=>n.checkcode(e.codevalue)),j:e.codevalue,k:e.canget,l:t.o((...s)=>n.getcaptcha&&n.getcaptcha(...s)),m:t.t(e.countdown),n:!e.canget,o:e.current==0,p:t.o([s=>e.countvalue=s.detail.value,(...s)=>n.CountInput&&n.CountInput(...s)]),q:t.o(s=>n.checkcount(e.countvalue)),r:e.countvalue,s:e.isshowpaaward==!0?"text":"password",t:t.o(s=>n.checkpassword(e.passwordvalue)),v:e.passwordvalue,w:t.o(s=>e.passwordvalue=s.detail.value),x:t.o(s=>e.isshowpaaward=!e.isshowpaaward),y:e.isshowpaaward==0,z:t.o(s=>e.isshowpaaward=!e.isshowpaaward),A:e.isshowpaaward==1,B:e.current==1,C:o.check,D:t.o((...s)=>n.gotoagreement&&n.gotoagreement(...s)),E:t.sr("showPrivacy","e4e4508d-0"),F:t.p({visible:e.privacyVisible}),G:t.sr("showtip","e4e4508d-1"),H:t.p({title:e.tiptitle})})}const w=t._export_sfc(l,[["render",g],["__scopeId","data-v-e4e4508d"],["__file","C:/Users/chen/Desktop/公交项目/Bus-projects/pages/login/login.vue"]]);wx.createPage(w);
