"use strict";(self["webpackChunkvue_cli_api"]=self["webpackChunkvue_cli_api"]||[]).push([[518],{1518:function(e,s,o){o.r(s),o.d(s,{default:function(){return v}});var n=o(6768),a=o(5130),t=o(2806);const l={class:"logIn-page-frame"},r={class:"logIn-box"},u=(0,n.Lk)("img",{src:t},null,-1),i=(0,n.Lk)("h1",null,"後檯管理系統",-1),c=(0,n.Lk)("p",null,"請登入您的帳戶",-1),p={class:"logInForm"},d={class:"mb-3"},m=(0,n.Lk)("label",{for:"email"},"電子信箱：",-1),k={class:"mb-3"},h=(0,n.Lk)("label",{for:"password"},"密碼：",-1);function f(e,s,o,t,f,g){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",l,[(0,n.Lk)("div",r,[u,i,c,(0,n.Lk)("form",p,[(0,n.Lk)("div",d,[m,(0,n.bo)((0,n.Lk)("input",{type:"email",name:"email",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>f.user.username=e)},null,512),[[a.Jo,f.user.username]])]),(0,n.Lk)("div",k,[h,(0,n.bo)((0,n.Lk)("input",{type:"password",name:"password",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>f.user.password=e)},null,512),[[a.Jo,f.user.password]])]),(0,n.Lk)("input",{type:"button",value:"登入",class:"logIn-btn",onClick:s[2]||(s[2]=(...e)=>g.logIn&&g.logIn(...e))})])])])])}o(4114);var g={data(){return{user:{username:"",password:""}}},methods:{logIn(){const e="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(e,this.user).then((e=>{if(e.data.success){const{token:s,expired:o}=e.data;document.cookie=`hexToken=${s}; expires=${new Date(o)}`,this.$router.push("/dashboard/products")}})).catch((e=>{}))}},mounted(){document.title="後臺登入-In My Light"}},L=o(1241);const b=(0,L.A)(g,[["render",f]]);var v=b},2806:function(e,s,o){e.exports=o.p+"img/logo.b25271a5.png"}}]);
//# sourceMappingURL=518.6dae17c3.js.map