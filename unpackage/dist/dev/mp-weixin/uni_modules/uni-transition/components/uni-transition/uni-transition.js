"use strict";const r=require("./createAnimation.js"),a=require("../../../../common/vendor.js"),h={name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default(){return"fade"}},duration:{type:Number,default:300},styles:{type:Object,default(){return{}}},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data(){return{isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}},watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},s="";for(let i in t){let n=this.toLine(i);s+=n+":"+t[i]+";"}return s},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=r.createAnimation(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,s={}){if(this.animation){for(let i in t)try{typeof t[i]=="object"?this.animation[i](...t[i]):this.animation[i](t[i])}catch{console.error(`方法 ${i} 不存在`)}return this.animation.step(s),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:s}=this.styleInit(!1);typeof t<"u"&&(this.opacity=t),this.transform=s,this.$nextTick(()=>{this.timer=setTimeout(()=>{this.animation=r.createAnimation(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})},20)})},close(t){this.animation&&this.tranfromInit(!0).step().run(()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:s,transform:i}=this.styleInit(!1);this.opacity=s||1,this.transform=i,this.$emit("change",{detail:this.isShow})})},styleInit(t){let s={transform:""},i=(n,e)=>{e==="fade"?s.opacity=this.animationType(n)[e]:s.transform+=this.animationType(n)[e]+" "};return typeof this.modeClass=="string"?i(t,this.modeClass):this.modeClass.forEach(n=>{i(t,n)}),s},tranfromInit(t){let s=(i,n)=>{let e=null;n==="fade"?e=i?0:1:(e=i?"-100%":"0",n==="zoom-in"&&(e=i?.8:1),n==="zoom-out"&&(e=i?1.2:1),n==="slide-right"&&(e=i?"100%":"0"),n==="slide-bottom"&&(e=i?"100%":"0")),this.animation[this.animationMode()[n]](e)};return typeof this.modeClass=="string"?s(t,this.modeClass):this.modeClass.forEach(i=>{s(t,i)}),this.animation},animationType(t){return{fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}},animationMode(){return{fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}},toLine(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};function m(t,s,i,n,e,o){return{a:e.isShow,b:e.animationData,c:a.n(i.customClass),d:a.s(o.transformStyles),e:a.o((...l)=>o.onClick&&o.onClick(...l))}}const c=a._export_sfc(h,[["render",m],["__file","C:/Users/chen/Desktop/公交项目/Bus-projects/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);wx.createComponent(c);
