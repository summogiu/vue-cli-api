"use strict";(self["webpackChunkvue_cli_api"]=self["webpackChunkvue_cli_api"]||[]).push([[984],{9367:function(t,i){i.A={data(){return{scrollPosition:0}},methods:{updateScrollPosition(){this.scrollPosition=window.pageYOffset}},mounted(){window.addEventListener("scroll",this.updateScrollPosition),window.addEventListener("resize",this.getSectionTops)},beforeUnmount(){window.removeEventListener("scroll",this.updateScrollPosition),window.removeEventListener("resize",this.getSectionTops)}}},2666:function(t,i,e){e.d(i,{A:function(){return A}});var r=e(6768),n=e(5130),s=e(4232);const o={class:"current-path"},l=(0,r.Lk)("i",{class:"bi bi-house home-i"},null,-1),a={key:0},c=(0,r.Lk)("i",{class:"bi bi-chevron-right"},null,-1),h=["onClick"],m={class:"current-name"},u=(0,r.Lk)("i",{class:"bi bi-chevron-right"},null,-1);function p(t,i,e,p,d,g){const E=(0,r.g2)("router-link");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("ul",o,[(0,r.Lk)("li",null,[(0,r.bF)(E,{to:"/frontPage"},{default:(0,r.k6)((()=>[l])),_:1})]),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(d.currentPaths,((t,i)=>((0,r.uX)(),(0,r.CE)("li",{key:i},[i!==d.currentPaths.length-1&&0!==i&&t.name!==this.routeName?((0,r.uX)(),(0,r.CE)("div",a,[c,(0,r.Lk)("a",{href:"#",onClick:(0,n.D$)((i=>g.toPath(t.path)),["prevent"])},(0,s.v_)(t.name),9,h)])):(0,r.Q3)("",!0)])))),128)),(0,r.Lk)("li",m,[u,(0,r.Lk)("span",null,(0,s.v_)(d.routeName),1)])])])}e(4114);var d=e(997),g={data(){return{currentPaths:[],routeName:this.$route.params.category||this.$route.name}},watch:{"$route.params.category":{handler(t){t?this.$route.params.category&&(this.$router.currentRoute.value.name=this.$route.params.category):this.$router.currentRoute.value.name="所有產品",this.getCurrentPath()},immediate:!0},"$route.name"(t){this.getCurrentPath(),this.routeName=t}},mixins:[d.A],methods:{getCurrentPath(){this.currentPaths=this.$route.matched},getCurrentPathName(t){this.routeName=t},toPath(t){this.$router.push(`${t}`)}},created(){d.A.on("pageName",this.getCurrentPathName),this.getCurrentPath()}},E=e(1241);const I=(0,E.A)(g,[["render",p]]);var A=I},9156:function(t,i,e){e.d(i,{A:function(){return d}});var r=e(6768),n=e(5130),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAALkCAYAAACV5wDlAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGh2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzYwLCAyMDIwLzAyLzEzLTAxOjA3OjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTA3LTIzVDEyOjQ1OjI2KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTA3LTIzVDEyOjQ1OjI2KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wNy0yM1QxMjo0NToyNiswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmMDkwM2M4Ni03NWQ3LWI0NGMtOWViYy0yNWQ0MDE0NTFmMjQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NTAzZTIzZS1iMjQzLTAwNDgtOTU4Mi01ZDY1OTlmZjA0YjMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZmZjZjJiMS1jMTU2LTgwNGQtYTI4YS02NTEwOTZiYTE5MWMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhmZmNmMmIxLWMxNTYtODA0ZC1hMjhhLTY1MTA5NmJhMTkxYyIgc3RFdnQ6d2hlbj0iMjAyNC0wNy0yM1QxMjo0NToyNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMDkwM2M4Ni03NWQ3LWI0NGMtOWViYy0yNWQ0MDE0NTFmMjQiIHN0RXZ0OndoZW49IjIwMjQtMDctMjNUMTI6NDU6MjYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8cmRmOkJhZz4gPHJkZjpsaSBwaG90b3Nob3A6TGF5ZXJOYW1lPSJCQUNLICBUTyAgVE9QIiBwaG90b3Nob3A6TGF5ZXJUZXh0PSJCQUNLICBUTyAgVE9QIi8+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6VGV4dExheWVycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Rc1QiAAAXGUlEQVR42u3dsW4r21rA8W9JV/S+Eh2VzyP49NzCeQSnpExaqJwKKGOJGilukBDV9iNsFzzANm9w/QJI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";const o={class:"to-page-top"},l=(0,r.Lk)("img",{src:s,alt:""},null,-1),a=[l];function c(t,i,e,s,l,c){return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.Lk)("a",{href:"#",onClick:i[0]||(i[0]=(0,n.D$)(((...t)=>c.scrollToTop&&c.scrollToTop(...t)),["prevent"]))},a)])}var h=e(9367),m={data(){return{scrollPosition:0}},mixins:[h.A],methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},u=e(1241);const p=(0,u.A)(m,[["render",c]]);var d=p},8984:function(t,i,e){e.r(i),e.d(i,{default:function(){return C}});var r=e(6768);const n={class:"company-page-frame"},s={class:"company-page-title-box",ref:"companyTitleBox"},o=(0,r.Lk)("div",{class:"bg-img"},null,-1),l=(0,r.Lk)("h2",{class:"company-page-title"},"COMPANY INFORMATION",-1),a=[o,l],c={class:"company-page-content-box"},h=(0,r.Fv)('<div class="content-section-box"><h4 class="section-title">CompanyProfile</h4><h5 class="section-little-title">公司概要</h5><div class="basic-information-table-box"><table><tr><th>公司名稱</th><td>In My Light 燈具有限公司</td></tr><tr><th>創建日期</th><td>2020年1月15日</td></tr><tr><th>業務類別</th><td>家具及裝設品製造業.綜合零售業</td></tr><tr><th>地址</th><td>1234 台北市中山區光復北路100號</td></tr><tr><th>電話</th><td>+886-2-1234-5678</td></tr><tr><th>傳真</th><td>+886-2-8765-4321</td></tr><tr><th>電子郵件</th><td>info@inmylight.com</td></tr></table></div></div><div class="content-section-box"><h4 class="section-title">Agreement</h4><h5 class="section-little-title">我們的承諾</h5><div class="agreement-content-box"><p>在In My Light，我們秉持「優質品質」、「獨特風格」和「專業服務」的承諾，確保每一位客戶都能獲得滿意的照明解決方案。 我們致力於設計和製造各式各樣的燈具，從吊燈、壁燈到臺燈和地燈等，滿足您對空間美學和實用性的需求。 我們的產品涵蓋了多種風格，包括北歐現代、奢華水晶、工業風格等，每一款燈具都經過精心設計， 旨在為您的生活和工作空間增添獨特的光彩。 我們的專業團隊將根據您的需求提供量身訂製的建議，讓每一盞燈具都能完美契合您的空間和風格。</p></div></div><div class="content-section-box"><h4 class="section-title">Location</h4><h5 class="section-little-title">位置資訊</h5><div class="map-box"><div class="google-map" id="map"></div><p>台北市中山區光復北路100號</p></div></div><div class="content-section-box"><h4 class="section-title"> Follow Us</h4><h5 class="section-little-title">追蹤我們</h5><p class="follow-text">了解更多資訊並保持更新，請關注我們的社交媒體<i class="bi bi-caret-down-fill"></i></p><ul class="social-link"><li><a href="https://www.facebook.com/" class="fb-link"><i class="bi bi-facebook"></i></a></li><li><a href="https://www.instagram.com/" class="ig-link"><i class="bi bi-instagram"></i></a></li><li><a href="https://x.com/i/flow/login" class="x-link"><i class="bi bi-twitter-x"></i></a></li></ul></div>',4);function m(t,i,e,o,l,m){const u=(0,r.g2)("CurrentPath"),p=(0,r.g2)("ToPageTop");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",n,[(0,r.Lk)("div",s,a,512),(0,r.Lk)("div",c,[(0,r.bF)(u),h])]),(0,r.bF)(p)])}var u=e(9156),p=e(2666);e(4114),e(9479),e(3375),e(9225),e(3972),e(9209),e(5714),e(7561),e(6197),e(4603),e(7566),e(8721);function d(t,i,e,r){function n(t){return t instanceof e?t:new e((function(i){i(t)}))}return new(e||(e=Promise))((function(e,s){function o(t){try{a(r.next(t))}catch(i){s(i)}}function l(t){try{a(r["throw"](t))}catch(i){s(i)}}function a(t){t.done?e(t.value):n(t.value).then(o,l)}a((r=r.apply(t,i||[])).next())}))}function g(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t}"function"===typeof SuppressedError&&SuppressedError;var E=function t(i,e){if(i===e)return!0;if(i&&e&&"object"==typeof i&&"object"==typeof e){if(i.constructor!==e.constructor)return!1;var r,n,s;if(Array.isArray(i)){if(r=i.length,r!=e.length)return!1;for(n=r;0!==n--;)if(!t(i[n],e[n]))return!1;return!0}if(i.constructor===RegExp)return i.source===e.source&&i.flags===e.flags;if(i.valueOf!==Object.prototype.valueOf)return i.valueOf()===e.valueOf();if(i.toString!==Object.prototype.toString)return i.toString()===e.toString();if(s=Object.keys(i),r=s.length,r!==Object.keys(e).length)return!1;for(n=r;0!==n--;)if(!Object.prototype.hasOwnProperty.call(e,s[n]))return!1;for(n=r;0!==n--;){var o=s[n];if(!t(i[o],e[o]))return!1}return!0}return i!==i&&e!==e},I=g(E);const A="__googleMapsScriptId";var T;(function(t){t[t["INITIALIZED"]=0]="INITIALIZED",t[t["LOADING"]=1]="LOADING",t[t["SUCCESS"]=2]="SUCCESS",t[t["FAILURE"]=3]="FAILURE"})(T||(T={}));class b{constructor({apiKey:t,authReferrerPolicy:i,channel:e,client:r,id:n=A,language:s,libraries:o=[],mapIds:l,nonce:a,region:c,retries:h=3,url:m="https://maps.googleapis.com/maps/api/js",version:u}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=i,this.channel=e,this.client=r,this.id=n||A,this.language=s,this.libraries=o,this.mapIds=l,this.nonce=a,this.region=c,this.retries=h,this.url=m,this.version=u,b.instance){if(!I(this.options,b.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(b.instance.options)}`);return b.instance}b.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?T.FAILURE:this.done?T.SUCCESS:this.loading?T.LOADING:T.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),this.libraries.length>0&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(t+=`&auth_referrer_policy=${this.authReferrerPolicy}`),t}deleteScript(){const t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((t,i)=>{this.loadCallback((e=>{e?i(e.error):t(window.google)}))}))}importLibrary(t){return this.execute(),google.maps.importLibrary(t)}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){var t,i;if(document.getElementById(this.id))return void this.callback();const e={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(e).forEach((t=>!e[t]&&delete e[t])),(null===(i=null===(t=null===window||void 0===window?void 0:window.google)||void 0===t?void 0:t.maps)||void 0===i?void 0:i.importLibrary)||(t=>{let i,e,r,n="The Google Maps JavaScript API",s="google",o="importLibrary",l="__ib__",a=document,c=window;c=c[s]||(c[s]={});const h=c.maps||(c.maps={}),m=new Set,u=new URLSearchParams,p=()=>i||(i=new Promise(((o,c)=>d(this,void 0,void 0,(function*(){var p;for(r in yield e=a.createElement("script"),e.id=this.id,u.set("libraries",[...m]+""),t)u.set(r.replace(/[A-Z]/g,(t=>"_"+t[0].toLowerCase())),t[r]);u.set("callback",s+".maps."+l),e.src=this.url+"?"+u,h[l]=o,e.onerror=()=>i=c(Error(n+" could not load.")),e.nonce=this.nonce||(null===(p=a.querySelector("script[nonce]"))||void 0===p?void 0:p.nonce)||"",a.head.append(e)})))));h[o]||(h[o]=(t,...i)=>m.add(t)&&p().then((()=>h[o](t,...i))))})(e);const r=this.libraries.map((t=>this.importLibrary(t)));r.length||r.push(this.importLibrary("core")),Promise.all(r).then((()=>this.callback()),(t=>{const i=new ErrorEvent("error",{error:t});this.loadErrorCallback(i)}))}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);setTimeout((()=>{this.deleteScript(),this.setScript()}),t)}else this.onerrorEvent=t,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((t=>{t(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return void this.callback();this.loading=!0,this.setScript()}}}var f=e(4968),v=e(940);f.os.registerPlugin(v.u);var Y={components:{ToPageTop:u.A,CurrentPath:p.A},data(){return{cTX:"",loader:null,map:null,marker:null}},methods:{scrollTriggerAnim(){this.cTX&&this.cTX.revert();const t=this.$refs.companyTitleBox,i=[...document.getElementsByClassName("section-little-title")];this.cTX=f.os.context((()=>{v.u.create({trigger:t,start:"top center",end:"bottom center",onUpdate:t=>{f.os.to(".bg-img",{y:-200*t.progress,ease:"ease-in"}),f.os.to(".company-page-title",{y:-300*t.progress})},onLeave:()=>{f.os.to(".to-page-top",{opacity:1})},onEnterBack:()=>{f.os.to(".to-page-top",{opacity:0})}}),i.forEach(((t,i)=>{v.u.create({trigger:t,start:"center 80%",onEnter:()=>{t.classList.add("slideIn")}})}))})),v.u.refresh()},resetScrollTrigger(){const t=[...document.getElementsByClassName("section-little-title")];t.forEach((t=>{t.classList.remove("slideIn")}))},initMap(){this.loader=new b({apiKey:"AIzaSyCVD12beFxZVfLUPLhbJZG_dAbWmsJhzUM",version:"weekly"}),this.loader.load().then((async()=>{const t=window.google,{Map:i}=t.maps;this.map=new i(document.getElementById("map"),{center:{lat:25.043614327684185,lng:121.5574828664696},zoom:18,mapId:"ce97dfd187bc490d"}),this.marker=new t.maps.Marker({position:{lat:25.043614327684185,lng:121.5574828664696},map:this.map,title:"In my Light 燈具照明"})})).catch((t=>{}))}},mounted(){document.title="公司資訊-In My Light",setTimeout((()=>{this.scrollTriggerAnim()}),1e3),this.initMap()},beforeUnmount(){this.resetScrollTrigger(),v.u.getAll().forEach((t=>t.kill()))}},M=e(1241);const x=(0,M.A)(Y,[["render",m]]);var C=x}}]);
//# sourceMappingURL=984.818e48fb.js.map