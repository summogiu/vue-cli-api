"use strict";(self["webpackChunkvue_cli_api"]=self["webpackChunkvue_cli_api"]||[]).push([[842],{4626:function(t,i){i.A={data(){return{scrollPosition:0}},methods:{updateScrollPosition(){this.scrollPosition=window.pageYOffset}},mounted(){window.addEventListener("scroll",this.updateScrollPosition),window.addEventListener("resize",this.getSectionTops)},beforeUnmount(){window.removeEventListener("scroll",this.updateScrollPosition),window.removeEventListener("resize",this.getSectionTops)}}},9343:function(t,i,e){e.d(i,{A:function(){return A}});var o=e(6768),n=e(5130),s=e(4232);const r={class:"current-path"},a=(0,o.Lk)("i",{class:"bi bi-house home-i"},null,-1),c={key:0},l=(0,o.Lk)("i",{class:"bi bi-chevron-right"},null,-1),m=["onClick"],p={class:"current-name"},u=(0,o.Lk)("i",{class:"bi bi-chevron-right"},null,-1);function h(t,i,e,h,E,g){const I=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("ul",r,[(0,o.Lk)("li",null,[(0,o.bF)(I,{to:"/frontPage"},{default:(0,o.k6)((()=>[a])),_:1})]),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(E.currentPaths,((t,i)=>((0,o.uX)(),(0,o.CE)("li",{key:i},[i!==E.currentPaths.length-1&&0!==i&&t.name!==this.routeName?((0,o.uX)(),(0,o.CE)("div",c,[l,(0,o.Lk)("a",{href:"#",onClick:(0,n.D$)((i=>g.toPath(t.path)),["prevent"])},(0,s.v_)(t.name),9,m)])):(0,o.Q3)("",!0)])))),128)),(0,o.Lk)("li",p,[u,(0,o.Lk)("span",null,(0,s.v_)(E.routeName),1)])])])}e(4114);var E=e(1600),g={data(){return{currentPaths:[],routeName:this.$route.params.category||this.$route.name}},watch:{"$route.params.category":{handler(t){t?this.$route.params.category&&(this.$router.currentRoute.value.name=this.$route.params.category):this.$router.currentRoute.value.name="所有產品",this.getCurrentPath()},immediate:!0},"$route.name"(t){this.getCurrentPath(),this.routeName=t}},mixins:[E.A],methods:{getCurrentPath(){this.currentPaths=this.$route.matched,console.dir(this.$route),console.dir(this.$router)},getCurrentPathName(t){this.routeName=t},toPath(t){this.$router.push(`${t}`)}},created(){E.A.on("pageName",this.getCurrentPathName),this.getCurrentPath()}},I=e(1241);const T=(0,I.A)(g,[["render",h]]);var A=T},2736:function(t,i,e){e.d(i,{A:function(){return E}});var o=e(6768),n=e(5130),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAALkCAYAAACV5wDlAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzYwLCAyMDIwLzAyLzEzLTAxOjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTIzVDEyOjQ1OjI2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTIzVDEyOjQ1OjI2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0yM1QxMjo0NToyNiswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMDkwM2M4Ni03NWQ3LWI0NGMtOWViYy0yNWQ0MDE0NTFmMjQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NTAzZTIzZS1iMjQzLTAwNDgtOTU4Mi01ZDY1OTlmZjA0YjMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZmZjZjJiMS1jMTU2LTgwNGQtYTI4YS02NTEwOTZiYTE5MWMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmZmNmMmIxLWMxNTYtODA0ZC1hMjhhLTY1MTA5NmJhMTkxYyIgc3RFdnQ6d2hlbj0iMjAyNC0wNy0yM1QxMjo0NToyNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMDkwM2M4Ni03NWQ3LWI0NGMtOWViYy0yNWQ0MDE0NTFmMjQiIHN0RXZ0OndoZW49IjIwMjQtMDctMjNUMTI6NDU6MjYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJCQUNLICBUTyAgVE9QIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJCQUNLICBUTyAgVE9QIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Rc1QiAAAXGUlEQVR42u3dsW4r21rA8W9JV/S+Eh2VzyP49NzCeQSnpExaqJwKKGOJGilukBDV9iNsFzzANm9w/QJI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";const r={class:"to-page-top"},a=(0,o.Lk)("img",{src:s,alt:""},null,-1),c=[a];function l(t,i,e,s,a,l){return(0,o.uX)(),(0,o.CE)("div",r,[(0,o.Lk)("a",{href:"#",onClick:i[0]||(i[0]=(0,n.D$)(((...t)=>l.scrollToTop&&l.scrollToTop(...t)),["prevent"]))},c)])}var m=e(4626),p={data(){return{scrollPosition:0}},mixins:[m.A],methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},u=e(1241);const h=(0,u.A)(p,[["render",l]]);var E=h},5245:function(t,i,e){e.r(i),e.d(i,{default:function(){return K}});var o=e(6768),n=e(4232),s=e.p+"img/pexels-tristan-paolo-4276607.c4cd38f0.jpg",r=e.p+"img/point1.af20fecd.jpg",a=e.p+"img/point2.876d306d.jpg",c=e.p+"img/point3.60e0415a.jpg",l=e.p+"img/point4.f5235a64.jpg",m=e.p+"img/to-products.5f4d4ca6.jpg",p=e(5919),u=e.p+"img/to-customized.46730044.jpg",h=e.p+"img/to-company.dde50ecb.jpg";const E={class:"about-page-frame",ref:"aboutView"},g={class:"about-page-bg"},I=(0,o.Lk)("h1",null,"About",-1),T=(0,o.Lk)("h2",null,"關於我們",-1),A=[I,T],d=(0,o.Lk)("p",{class:"marquee-content"},"ABOUT IN MY LIGHT",-1),Y=(0,o.Lk)("p",{class:"marquee-content-delay"},"  ABOUT IN MY LIGHT",-1),b=[d,Y],x={src:s,class:"title-img",ref:"titleImg"},k=(0,o.Lk)("p",{class:"about-page-content-p p1"},"您好！還迎來到In My Light！",-1),C=(0,o.Lk)("p",{class:"about-page-content-p"},[(0,o.eW)("無論您是在為新家裝潢，還是想要給現有的空間注入新的生命力，"),(0,o.Lk)("br"),(0,o.eW)("In My Light都是您的最佳選擇。")],-1),v=(0,o.Lk)("p",{class:"about-page-content-p"},"在我們的店裡，您將會發現",-1),M={ref:"straightLine"},L={class:"about-page-point",ref:"point"},J=(0,o.Fv)('<li><img src="'+r+'"><div class="about-page-point-text"><p>優質品質：</p><span>我們精心挑選的每一盞燈飾都是由最高品質的材料製成，確保耐用性和可靠性。</span></div></li><li><img src="'+a+'"><div class="about-page-point-text"><p>獨特風格：</p><span>無論您喜歡簡約時尚還是奢華經典，我們的燈具都能為您的空間增添獨特的魅力。</span></div></li><li><img src="'+c+'"><div class="about-page-point-text"><p>專業服務：</p><span>我們擁有經驗豐富的照明設計師團隊，隨時為您提供專業的建議和指導，以確保您找到完美的照明解決方案。</span></div></li><li><img src="'+l+'"><div class="about-page-point-text"><p>個性定制：</p><span>我們提供訂製服務，根據您的特定需求設計和製造燈具，讓每一盞燈都能完美契合您的獨特空間和風格。</span></div></li>',4),f=[J],Z=(0,o.Lk)("p",{class:"about-page-content-p"},[(0,o.eW)(" 現在，歡迎探索我們的獨特產品，"),(0,o.Lk)("br"),(0,o.eW)("讓我們一起為您的生活和空間帶來光芒璀璨的變化！ ")],-1),N={class:"other-link-box",ref:"otherLinkBox1"},R=(0,o.Lk)("img",{src:m},null,-1),j=(0,o.Lk)("div",{class:"other-link-title"},[(0,o.Lk)("div",{class:"to-more-icon"},[(0,o.Lk)("img",{src:p,class:"circle"}),(0,o.Lk)("i",{class:"bi bi-arrow-right user-bar-more-icon"})]),(0,o.Lk)("span",null,"參觀產品列表")],-1),B=(0,o.Lk)("img",{src:u},null,-1),Q=(0,o.Lk)("div",{class:"other-link-title"},[(0,o.Lk)("div",{class:"to-more-icon"},[(0,o.Lk)("img",{src:p,class:"circle"}),(0,o.Lk)("i",{class:"bi bi-arrow-right user-bar-more-icon"})]),(0,o.Lk)("span",null,"查看過往訂製品")],-1),P=(0,o.Lk)("p",{class:"about-page-content-p to-down-p"},"或者",-1),S={class:"other-link-box",ref:"otherLinkBox2"},G=(0,o.Lk)("img",{src:h},null,-1),w=(0,o.Lk)("div",{class:"other-link-title"},[(0,o.Lk)("div",{class:"to-more-icon"},[(0,o.Lk)("img",{src:p,class:"circle"}),(0,o.Lk)("i",{class:"bi bi-arrow-right user-bar-more-icon"})]),(0,o.Lk)("span",null,"更了解我們")],-1);function O(t,i,e,s,r,a){const c=(0,o.g2)("CurrentPath"),l=(0,o.g2)("router-link"),m=(0,o.g2)("ToPageTop");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",E,[(0,o.Lk)("div",g,[(0,o.Lk)("div",{class:(0,n.C4)(["bg-circle",[a.isContentBoxIn?"changeColor":""]])},null,2),(0,o.Lk)("div",{class:(0,n.C4)(["about-page-title",[a.isContentBoxIn?"about-page-title-fadeOut":""]])},A,2),(0,o.Lk)("div",{class:(0,n.C4)(["marquee",[a.isContentBoxIn?"marquee-up":""]])},b,2)]),(0,o.Lk)("div",{class:(0,n.C4)(["about-page-content-box",[a.isContentBoxIn?"transform0":"fadeOut"]]),ref:"contentBox"},[(0,o.Lk)("h3",{class:(0,n.C4)(["about-page-content-box-topName",[a.isContentBoxIn?"toLeft-1":""]])},"In My Light",2),(0,o.bF)(c),(0,o.Lk)("img",x,null,512),k,C,v,(0,o.Lk)("div",M,null,512),(0,o.Lk)("ul",L,f,512),Z,(0,o.Lk)("div",N,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/products/productslist"},{default:(0,o.k6)((()=>[R,j])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/customized"},{default:(0,o.k6)((()=>[B,Q])),_:1})])])],512),P,(0,o.Lk)("div",S,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/company"},{default:(0,o.k6)((()=>[G,w])),_:1})])])],512)],2)],512),(0,o.bF)(m,{class:(0,n.C4)([a.isContentBoxIn?"fadeIn":""])},null,8,["class"])],64)}var y=e(4626),z=e(2736),V=e(9343),U=e(4968),D=e(940);U.os.registerPlugin(D.u);var W={components:{ToPageTop:z.A,CurrentPath:V.A},data(){return{scrollPosition:0,sectionTops:{contentBoxTops:0},cTXB:""}},computed:{isContentBoxIn(){return this.scrollPosition>=this.sectionTops.contentBoxTops/5},isContentIn(){return this.scrollPosition>=this.sectionTops.contentBoxTops}},watch:{scrollPosition(){this.scrollPosition<this.sectionTops.pointTops/2&&(this.islineAnimationEnd=!1)}},mixins:[y.A],methods:{getSectionTops(){this.sectionTops.contentBoxTops=this.$refs.contentBox.getBoundingClientRect().top+window.pageYOffset},aboitScrollTriggerAnim(){this.cTXB&&this.cTXB.revert();const t=this.$refs.titleImg,i=[...document.getElementsByClassName("about-page-content-p")],e=this.$refs.straightLine,o=this.$refs.point,n=o.querySelectorAll("li"),s=[...document.getElementsByClassName("other-link-box")];D.u.create({trigger:t,start:"-10% bottom",end:"bottom top",onEnter:()=>{U.os.to(t,{opacity:"1",translateY:"0px",duration:.5})},onLeaveBack:()=>{U.os.to(t,{opacity:0,translateY:"30%",duration:.5})}}),i.forEach((t=>{D.u.create({trigger:t,start:"top bottom",end:"bottom top",onEnter:()=>{U.os.to(t,{opacity:1,translateY:"0%",duration:1})},onLeaveBack:()=>{U.os.to(t,{opacity:0,translateY:"-30%",duration:1})}})})),D.u.create({trigger:e,start:"center bottom",end:"bottom top",onEnter:()=>{e&&e.classList.add("straight-line")},onLeaveBack:()=>{e&&e.classList.remove("straight-line")}}),o&&D.u.create({trigger:o,start:"20% bottom",end:"bottom top",onEnter:()=>{n.forEach((t=>{U.os.to(t,{translateX:"0%",opacity:1,duration:1})}))},onLeaveBack:()=>{n.forEach((t=>{U.os.to(t,{translateX:"-20%",opacity:0,duration:1})}))}}),s.forEach((t=>{D.u.create({trigger:t,start:"center bottom",end:"bottom top",onEnter:()=>{U.os.to(t,{translateY:"0%",opacity:1,duration:1})},onLeaveBack:()=>{U.os.to(t,{translateY:"-20%",opacity:0,duration:1})}})}))},resetScrollTrigger(){const t=this.$refs.contentBox,i=[...document.getElementsByClassName("other-link-box")];U.os.set(t,{translateY:"0px"}),i.forEach((t=>{U.os.to(t,{translateY:"-20%"})})),D.u.refresh()}},mounted(){document.title="關於我們-In My Light",this.getSectionTops(),this.aboitScrollTriggerAnim(),window.addEventListener("resize",this.resetScrollTrigger)},beforeUnmount(){D.u.getAll().forEach((t=>t.kill())),window.removeEventListener("resize",this.resetScrollTrigger)}},X=e(1241);const F=(0,X.A)(W,[["render",O]]);var K=F}}]);
//# sourceMappingURL=842.2753de46.js.map