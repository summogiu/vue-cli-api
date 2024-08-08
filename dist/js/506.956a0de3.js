"use strict";(self["webpackChunkvue_cli_api"]=self["webpackChunkvue_cli_api"]||[]).push([[506],{7075:function(t,e){e.A={data(){return{followProducts:[]}},watch:{"$route.params.category"(){this.loadFollowProducts()},"$route.params.productid"(){this.loadFollowProducts()}},methods:{loadFollowProducts(){try{const t=localStorage.getItem("followArray");this.followProducts=t?JSON.parse(t):[]}catch(t){this.followProducts=[]}},addFollow(t){Array.isArray(this.followProducts)||(this.followProducts=[]);const e=this.followProducts.findIndex((e=>e.id===t.id));-1!==e?this.followProducts.splice(e,1):this.followProducts.unshift(t);try{localStorage.setItem("followArray",JSON.stringify(this.followProducts))}catch(s){}},isFollowed(t){return!!this.followProducts&&this.followProducts.some((e=>e.id===t.id))}},created(){this.loadFollowProducts()}}},2574:function(t,e,s){s.d(e,{A:function(){return C}});var i=s(6768),a=s(5130),o=s(4232);const r={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center page-list"},l={class:""},c=["disabled"],p=["onClick","disabled"],u={class:""},d=["disabled"];function h(t,e,s,h,g,f){return(0,i.uX)(),(0,i.CE)("nav",r,[(0,i.Lk)("ul",n,[(0,i.Lk)("li",l,[(0,i.Lk)("button",{class:"page-np-btn",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,a.D$)((t=>f.changePage(s.pages.current_page-1)),["prevent"])),disabled:!s.pages.has_pre},[(0,i.Lk)("i",{class:(0,o.C4)(["bi bi-arrow-left page-np-i",{"page-disabled":!s.pages.has_pre}])},null,2)],8,c)]),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.pages.total_pages,(t=>((0,i.uX)(),(0,i.CE)("li",{class:"page-li",key:t},[(0,i.Lk)("button",{class:(0,o.C4)(["page-btn",{"page-active":s.pages.current_page===t}]),href:"#",onClick:(0,a.D$)((e=>f.changePage(t)),["prevent"]),disabled:s.pages.current_page===t},(0,o.v_)(t),11,p)])))),128)),(0,i.Lk)("li",u,[(0,i.Lk)("button",{class:"page-np-btn",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,a.D$)((t=>f.changePage(s.pages.current_page+1)),["prevent"])),disabled:!s.pages.has_next},[(0,i.Lk)("i",{class:(0,o.C4)(["bi bi-arrow-right page-np-i",{"page-disabled":!s.pages.has_next}])},null,2)],8,d)])])])}var g={props:["pages"],methods:{changePage(t){this.$emit("change-page",t),window.scrollTo(0,0)}}},f=s(1241);const b=(0,f.A)(g,[["render",h]]);var C=b},8506:function(t,e,s){s.r(e),s.d(e,{default:function(){return X}});var i=s(6768),a=s(4232),o=s(5130);const r={class:"product-list-box"},n={class:"filter-select-box"},l=["data-sort","disabled"],c={class:"product-list-ul toRight-1"},p=["onClick"],u=["src"],d={class:"price-box"},h={class:"price"},g={class:"product-btn-box"},f=["onClick","disabled"],b={key:0,class:"spinner-border text-danger spinner-border-sm",role:"status"},C={key:1,class:"bi bi-cart-plus"},w=["onClick"],k={key:0,class:"bi bi-heart"},P={key:1,class:"bi bi-heart-fill follow-plus-btn-isFollow"},m={class:"totle-item-num"};function _(t,e,s,_,y,v){const L=(0,i.g2)("Loading"),x=(0,i.g2)("PaginationComponents");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(L,{active:y.isLoading},null,8,["active"]),(0,i.Lk)("div",r,[(0,i.Lk)("div",n,[(0,i.bo)((0,i.Lk)("select",{class:"filter-select","onUpdate:modelValue":e[0]||(e[0]=t=>y.selectedOption=t)},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(y.options,(t=>((0,i.uX)(),(0,i.CE)("option",{key:t.text,"data-sort":t.sort,disabled:"價格排序"===t.text},(0,a.v_)(t.text),9,l)))),128))],512),[[o.u1,y.selectedOption]])]),(0,i.Lk)("ul",c,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(v.showProducts,((e,s)=>((0,i.uX)(),(0,i.CE)("li",{key:e.id,class:(0,a.C4)([0===s?"big-size-li":"",s===v.showProducts.length-1&&v.showProducts.length>9?"big-size-li":""])},[(0,i.Lk)("div",{class:"product-content",onClick:t=>v.openMore(e)},[(0,i.Lk)("img",{src:e.imageUrl,alt:"",class:"thumbnail"},null,8,u),(0,i.Lk)("p",null,(0,a.v_)(e.title),1)],8,p),(0,i.Lk)("div",d,[(0,i.Lk)("p",h,"NT$"+(0,a.v_)(t.$filters.currency(e.price)),1),(0,i.Lk)("div",g,[(0,i.Lk)("button",{class:"cart-plus-btn",onClick:t=>v.addCart(e.id),disabled:this.status.loadingItem===e.id},[this.status.loadingItem===e.id?((0,i.uX)(),(0,i.CE)("div",b)):((0,i.uX)(),(0,i.CE)("i",C))],8,f),(0,i.Lk)("button",{class:"follow-plus-btn",onClick:s=>t.addFollow(e)},[t.isFollowed(e)?((0,i.uX)(),(0,i.CE)("i",P)):((0,i.uX)(),(0,i.CE)("i",k))],8,w)])])],2)))),128))])]),0!==v.showProducts.length?((0,i.uX)(),(0,i.Wv)(x,{key:0,pages:y.pagination,onChangePage:v.getPagination},null,8,["pages","onChangePage"])):(0,i.Q3)("",!0),(0,i.Lk)("p",m,"共"+(0,a.v_)(this.nowProductsTotle)+"項產品",1)])}var y=s(2574),v=s(997),L=s(7075),x={components:{PaginationComponents:y.A},data(){return{products:[],product:{},searchContent:"",pagination:{current_page:1,has_next:"",has_pre:"",total_pages:0},perpage:10,isLoading:!1,status:{loadingItem:""},options:[{text:"價格排序",sort:""},{text:"由低至高",sort:"up"},{text:"由高至低",sort:"down"}],selectedOption:"價格排序"}},watch:{"$route.params.category"(){this.getProducts()},showProducts(){if(this.searchContent){const t=this.products.filter((t=>t.title.includes(this.searchContent)));this.pagination.total_pages=Math.ceil(t.length/this.perpage)}else this.pagination.total_pages=Math.ceil(this.products.length/this.perpage);this.selectedOption="價格排序"},selectedOption(t){const e=this.options.find((e=>e.text===t));"up"===e.sort?this.products.sort(((t,e)=>t.price-e.price)):"down"===e.sort&&this.products.sort(((t,e)=>e.price-t.price))}},computed:{showProducts(){const t=this.pagination.current_page*this.perpage-this.perpage+1,e=this.pagination.current_page*this.perpage;if(!this.searchContent)return this.products.filter(((s,i)=>i+1>=t&&i+1<=e));if(this.searchContent){const s=this.products.filter((t=>t.title.includes(this.searchContent)));return s.filter(((s,i)=>i+1>=t&&i+1<=e))}return[]},nowProductsTotle(){if(!this.searchContent)return this.products.length;if(this.searchContent){const t=this.products.filter((t=>t.title.includes(this.searchContent)));return t.length}return 0}},mixins:[v.A,L.A],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/giugiu-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{if(this.isLoading=!1,t.data.success){if(this.$route.params.category)if("正在關注"===this.$route.params.category)this.products=this.followProducts||[];else if(t.data.products.some((t=>t.category.includes(this.$route.params.category)))){const e=t.data.products.filter((t=>t.category.includes(this.$route.params.category)));this.products=e}else{const e=t.data.products.filter((t=>t.title.includes(this.$route.params.category)));this.products=e}else this.products=t.data.products;this.getTotlePage(),this.getPagination(),document.title=`${this.$route.params.category}商品列表-In My Light`}})).catch((t=>{}))},getTotlePage(){this.pagination.total_pages=Math.ceil(this.products.length/this.perpage)},getPagination(t=1){this.pagination.current_page=t,this.pagination.has_next=this.pagination.current_page<this.pagination.total_pages,this.pagination.has_pre=this.pagination.current_page>1},openMore(t){this.$emit("openMore",t),this.$emit("addRecentlyViewed",t)},addCart(t){const e="https://vue3-course-api.hexschool.io/api/giugiu-api/cart";this.status.loadingItem=t,this.$http.post(e,{data:{product_id:t,qty:1}}).then((t=>{t.data.success&&(this.$emit("getCart"),this.status.loadingItem="")})).catch((t=>{}))},searchKey(t){this.getPagination(),this.searchContent=t}},created(){this.getProducts(),this.searchContent=this.$route.query.searchContent},mounted(){v.A.on("search",this.searchKey)}},$=s(1241);const F=(0,$.A)(x,[["render",_]]);var X=F}}]);
//# sourceMappingURL=506.956a0de3.js.map