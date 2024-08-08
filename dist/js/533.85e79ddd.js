"use strict";(self["webpackChunkvue_cli_api"]=self["webpackChunkvue_cli_api"]||[]).push([[533],{9284:function(t,s){s.A={data(){return{followProducts:[]}},watch:{"$route.params.category"(){this.followProducts=JSON.parse(localStorage.getItem("followArray"))},"$route.params.productid"(){this.followProducts=JSON.parse(localStorage.getItem("followArray"))}},methods:{addFollow(t){const s=this.followProducts.findIndex((s=>s.id===t.id));-1!==s?this.followProducts.splice(s,1):this.followProducts.unshift(t);try{localStorage.setItem("followArray",JSON.stringify(this.followProducts))}catch(o){console.error("Error saving to localStorage",o)}},isFollowed(t){return this.followProducts.some((s=>s.id===t.id))}},created(){try{this.followProducts=JSON.parse(localStorage.getItem("followArray"))||[]}catch(t){console.error("Error loading from localStorage",t)}}}},9533:function(t,s,o){o.r(s),o.d(s,{default:function(){return K}});var i=o(6768),e=o(5130),l=o(4232),c=o(5561);const a={class:"product-content-frame"},r={class:"img-box"},d=["src"],u={class:"img-list"},n=["src","alt","onClick"],p={class:"content-title-box"},g={class:"product-name"},h={class:"content-center-box"},A={class:"price-box"},k={class:"price"},m={class:"origin_price"},f={class:"cart-plus-box"},L={class:"cart-plus-qty-box"},b=["disabled"],v={key:0,class:"spinner-border text-danger spinner-border-sm",role:"status"},y={class:"other-box"},C={class:"follow-plus-box"},P={key:0,class:"bi bi-heart"},w={key:1,class:"bi bi-heart-fill isFollow-icon"},x=(0,i.Lk)("p",null,"添加到關注",-1),I={class:"provision-box"},E={"clrouter-linkss":"text-content-box",ref:"textContent"},F={key:0,class:"related-products-box"},Q=(0,i.Lk)("h3",null,"相關產品",-1),$={class:"related-products-list"},S=["onClick"],X={class:"left"},R=["src","alt"],_=(0,i.Lk)("img",{src:c,alt:"to-related-products",class:"to-icon"},null,-1),B={class:"ask-box"},D=(0,i.Lk)("i",{class:"bi bi-envelope"},null,-1),M=(0,i.Lk)("p",null,"詢問此產品",-1),q=[D,M],T={class:"back-produsts-list"},U=(0,i.Lk)("p",null,"繼續購買",-1),j=(0,i.Lk)("img",{src:c,alt:"to-related-products",class:"to-icon"},null,-1),J=[U,j];function V(t,s,o,c,D,M){const U=(0,i.g2)("Loading"),j=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.bF)(U,{active:D.isLoading},null,8,["active"]),(0,i.Lk)("div",a,[(0,i.Lk)("div",r,[(0,i.bF)(e.eB,{name:"fadeScale"},{default:(0,i.k6)((()=>[((0,i.uX)(),(0,i.CE)("img",{src:D.focusImg,alt:"main-img",class:"main-img",key:D.focusImg},null,8,d))])),_:1}),(0,i.Lk)("div",u,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(D.imgs,((t,s)=>((0,i.uX)(),(0,i.CE)("img",{key:t,src:t,alt:`img${s}`,onClick:s=>M.changeImg(t),class:(0,l.C4)({"focus-img":D.focusImg===t})},null,10,n)))),128))])]),(0,i.Lk)("div",p,[(0,i.Lk)("a",{href:"#",onClick:s[0]||(s[0]=(0,e.D$)((s=>t.$emit("toCategory",D.product.category)),["prevent"])),class:"category-link"},(0,l.v_)(D.product.category),1),(0,i.Lk)("h2",g,(0,l.v_)(D.product.title),1),(0,i.Lk)("p",null,(0,l.v_)(D.product.description),1)]),(0,i.Lk)("div",h,[(0,i.Lk)("div",A,[(0,i.Lk)("span",k,"NT$"+(0,l.v_)(D.product.price),1),(0,i.Lk)("span",m,"NT$"+(0,l.v_)(D.product.origin_price),1)]),(0,i.Lk)("div",f,[(0,i.Lk)("div",L,[(0,i.Lk)("button",{class:"qty-btn sub-btn",onClick:s[1]||(s[1]=t=>M.changeQty(-1))},"－"),(0,i.bo)((0,i.Lk)("input",{type:"number",class:"cart-plus-qty","onUpdate:modelValue":s[2]||(s[2]=t=>D.addQty=t)},null,512),[[e.Jo,D.addQty]]),(0,i.Lk)("button",{class:"qty-btn add-btn",onClick:s[3]||(s[3]=t=>M.changeQty(1))},"＋")]),(0,i.Lk)("button",{class:"cart-plus-btn",onClick:s[4]||(s[4]=t=>M.addCart(D.product.id)),disabled:D.status.loadingItem},[D.status.loadingItem?((0,i.uX)(),(0,i.CE)("div",v)):(0,i.Q3)("",!0),(0,i.eW)(" 加到購物車")],8,b)])]),(0,i.Lk)("div",y,[(0,i.Lk)("div",C,[(0,i.Lk)("button",{class:"btn follow-plus-btn",onClick:s[5]||(s[5]=s=>t.addFollow(D.product))},[t.isFollowed(D.product)?((0,i.uX)(),(0,i.CE)("i",w)):((0,i.uX)(),(0,i.CE)("i",P)),x])]),(0,i.Lk)("div",I,[(0,i.bF)(j,{to:"/frontPage"},{default:(0,i.k6)((()=>[(0,i.eW)("退貨條款")])),_:1}),(0,i.bF)(j,{to:"/frontPage"},{default:(0,i.k6)((()=>[(0,i.eW)("特定商業交易法")])),_:1})])]),(0,i.Lk)("div",E,null,512),0!==D.filterProducts.length?((0,i.uX)(),(0,i.CE)("div",F,[Q,(0,i.Lk)("ul",$,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(D.filterProducts.slice(0,5),(t=>((0,i.uX)(),(0,i.CE)("li",{key:t.id,onClick:s=>M.toProducts(t)},[(0,i.Lk)("div",X,[(0,i.Lk)("img",{src:t.imageUrl,alt:t.title,class:"related-products-thumbnail"},null,8,R),(0,i.Lk)("h4",null,(0,l.v_)(t.title),1)]),_],8,S)))),128))])])):(0,i.Q3)("",!0),(0,i.Lk)("div",B,[(0,i.Lk)("a",{href:"#",class:"ask-link",onClick:s[6]||(s[6]=(0,e.D$)(((...t)=>M.toConsultPage&&M.toConsultPage(...t)),["prevent"]))},q)]),(0,i.Lk)("div",T,[(0,i.Lk)("button",{type:"button",onClick:s[7]||(s[7]=(...t)=>M.backProductList&&M.backProductList(...t))},J)])])])}o(4114);var z=o(9284),G=o(1600),N={data(){return{product:{},isLoading:!1,status:{loadingItem:!1},imgs:[],focusImg:"",addQty:1,filterProducts:[]}},watch:{addQty(){this.addQty<1&&(this.addQty=1)},"$route.params.productid"(){this.getProduct()}},mixins:[z.A,G.A],methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/giugiu-api/product/${this.$route.params.productid}`;this.isLoading=!0,this.$http.get(t).then((t=>{if(t.data.success){this.isLoading=!1,this.product=t.data.product,this.focusImg=this.product.imageUrl,this.imgs=this.product.imagesUrl?this.product.imagesUrl:[],this.imgs.unshift(this.product.imageUrl);const s=this.$refs.textContent;s.innerHTML="";const o=this.product.content,i=o.split(" ");i.forEach((t=>{const o=document.createElement("p");o.textContent=t.trim(),s.appendChild(o)})),this.getrelatedProducts(),G.A.emit("pageName",this.product.title),document.title=`${this.product.title}-商品列表-In My Light`}else console.log(t.data.message)})).catch((t=>{console.log(t)}))},addCart(t){const s="https://vue3-course-api.hexschool.io/api/giugiu-api/cart";this.status.loadingItem=!0,this.$http.post(s,{data:{product_id:t,qty:this.addQty}}).then((t=>{t.data.success?(this.$emit("getCart"),this.status.loadingItem=!1,this.addQty=1):console.log(t.data.message)})).catch((t=>{console.log(t)}))},changeQty(t){this.addQty+=t},changeImg(t){this.focusImg=t},getrelatedProducts(){const t="https://vue3-course-api.hexschool.io/api/giugiu-api/products/all";this.$http.get(t).then((t=>{const s=t.data.products;this.filterProducts=s.filter((t=>t.category===this.product.category));const o=this.filterProducts.findIndex((t=>t.id===this.product.id));-1!==o&&this.filterProducts.splice(o,1)})).catch((t=>{console.log(t)}))},toProducts(t){this.$router.push(`/products/productslist/product/${t.id}`),this.$emit("addRecentlyViewed",t)},toConsultPage(){this.$router.push({path:"/consult",query:{askType:"產品相關"}})},backProductList(){this.$router.push("/products/productslist")}},created(){this.getProduct()}},W=o(1241);const H=(0,W.A)(N,[["render",V]]);var K=H},5561:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVR4nO3dP0odUQDF4bMSfU0SbdxLumwkpBLeRtVCE4vsIASSGR4Win+4oE5yz/fBbWXg/CofcycBAAAAAAAAAAAAAAAAAIAS58v5vPVDsI39cv4s51dEUGefw/h3RwRF9rk/vgiK7PP4+CIo8DXPjy+CyZ0u5zYiqCYCchIR1Fsj+BERVBMBQxH8Xs6XbR6Tt/QpIqi3RvA9IqgmAkRA8jEiqLdGcBMRVPsQEdQTASLgEMF1RFBtt5yriKDaLiKodxwR1FsjuIwIqokAEZAcRQT11gguIoJq/20ELz3sa/895x+LQADlEQigPAIBbH82jUAA259NXzwRQPH4eeKhBFAyfiKA6vF5PSP/CDL+ZEZ+DzD+ZI5j/FrGL2b8Yuv4VzF+pV2MX2sX49caeTvI+JMZeT/Q+JMxfjHjFxu5JcT4kxm5J8j4kzF+sZFr4ow/GeMXG7kv2PiTcW18MeMXM34x3w0q5sthxYxf7Gw5P2P8Wj4dS77F+PWeisD4RR5GYPxCdxEYv9h5jA8AAAAAAAAAAAAAAAAAwHv5CxEpHk1xDAzzAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=533.85e79ddd.js.map