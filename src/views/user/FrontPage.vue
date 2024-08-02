<template>
  <div>
    <div class="front-page-frame" ref="forntPage">
      <div class="bunner-box">
        <div class="swiper bannerSwiper" ref="bannerSwiper">
          <div class="swiper-wrapper banner-swiper-wrapper">
            <div class="swiper-slide banner-swiper-slide">
              <img src="@/assets/images/banner/fontPage-banner01.jpg" alt="banner">
            </div>
            <div class="swiper-slide banner-swiper-slide">
              <img src="@/assets/images/banner/fontPage-banner02.jpg" alt="banner">
            </div>
            <div class="swiper-slide banner-swiper-slide">
              <img src="@/assets/images/banner/fontPage-banner03.jpg" alt="banner">
            </div>
          </div>
          <div class="swiper-pagination banner-swiper-pagination"></div>
        </div>
        <h1 class="bunner-title">IN MY LIGHT</h1>
        <img src="@/assets/images/icon/bunner-icon.png" class="bunner-title-icon">
        <div class="about-box">
          <div class="about-title">
            <img src="@/assets/images/icon/aboutUs.png" class="about-title-icon">
            <h2>ABOUT</h2>
          </div>
          <span class="little-title">- 關於我們 -</span>
          <router-link to="/about" class="about-Introduction">
            <p>在In My Light，我們相信每一盞燈都是一個故事的開始，一個氛圍的創造者，以及家居美學的靈感來源。
              我們是一家專業的燈具店，致力於為您的空間帶來獨特而精心設計的照明解決方案。</p>
            <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </router-link>
        </div>
      </div>

      <div class="product-section-box" ref="product">
        <div class="product-Introduction">
          <img src="@/assets/images/icon/bag_shopping_icon.png">
          <h2>PRODUCT</h2>
          <router-link to="/products/productslist">
          <p>我們的產品包括吊燈、壁燈、臺燈和地燈等各種類型，涵蓋了現代、古典、工業風等多種風格，滿足您的不同需求和喜好。
            無論是為家居、辦公室還是商業空間，In My Light 系列燈具都能提供出色的照明效果，同時為您的空間增添藝術氣息和舒適感。
            選擇 In My Light，讓您的空間更加煥然一新！</p>
          <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </router-link>
        </div>
        <span class="little-title">- 產品資訊 -</span>
        <div class="swiper sectionSwiper" ref="productSwiper">
          <div class="swiper-wrapper section-swiper-wrapper">
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/products/industrial/pexels-anastasia-latunova-9967197.jpg" alt="product">
            </div>
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/products/crystal/pexels-aleksandar-j-popovic-5292856.jpg" alt="product">
            </div>
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/products/industrial/pexels-chris-f-8649354.jpg" alt="product">
            </div>
          </div>
          <div class="mask-color"></div>
          <div class="swiper-pagination product-swiper-pagination"></div>
        </div>
      </div>

      <div class="customized-section-box" ref="customized">
        <div class="swiper sectionSwiper" ref="customizedSwiper">
          <div class="swiper-wrapper section-swiper-wrapper">
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/customized/StarlightHotel02.jpg" alt="customized">
            </div>
            <div class="swiper-slide section-swiper-slide">
              <img src="@/assets/images/customized/StarlightHotel04.jpg" alt="customized">
            </div>
          </div>
          <div class="mask-color"></div>
          <div class="swiper-pagination customized-swiper-pagination"></div>
        </div>
        <div class="customized-Introduction">
          <img src="@/assets/images/icon/mallet_icon.png">
          <h2>CUSTOMIZED</h2>
          <router-link to="/customized">
          <p>在In My Light，我們理解每個空間都是獨一無二的。
            我們提供訂製專欄服務，讓您能夠打造符合您獨特需求和風格的照明解決方案。
            無論您需要定制尺寸、特定材料或特別設計，我們的專業團隊將與您合作，
            以確保您得到完美的訂製燈具，讓您的空間煥然一新，與眾不同。
            與In My Light合作，將您的想象變成現實！
          </p>
          <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </router-link>
        </div>
        <span class="little-title">- 訂製專欄 -</span>
        <div class="shadow customized-shadow"></div>
      </div>

      <div class="company-section-box" ref="company">
        <img src="@/assets/images/background/company1.jpg" alt="company">
        <span class="little-title">- 公司資訊 -</span>
        <div class="company-information">
          <div class="company-title">
            <img src="@/assets/images/icon/bunner-icon-black.png">
            <p>IN MY LIGHT</p>
          </div>
          <div class="table-box">
            <table>
              <tr>
                <th>公司名稱</th>
                <td>In My Light 燈具有限公司</td>
              </tr>
              <tr>
                <th>創建日期</th>
                <td>2020-01-15</td>
              </tr>
              <tr>
                <th>FAX</th>
                <td>+886-2-8765-4321</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>公司地址</th>
                <td>1234 台灣台北市中山區光復北路100號</td>
              </tr>
              <tr>
                <th>TEL</th>
                <td>+886-2-1234-5678</td>
              </tr>
              <tr>
                <th>業務類別</th>
                <td>家具及裝設品製造業.綜合零售業</td>
              </tr>
            </table>
          </div>
          <router-link to="/company" class="connect-us-btn">
            <i class="bi bi-envelope"></i>
            聯絡我們
          </router-link>
        </div>
        <div class="shadow company-shadow"></div>
      </div>

      <div class="consult-section-frame" ref="consult">
        <div class="consult-section-box">
          <span class="little-title">- 線上諮詢 -</span>
          <img src="@/assets/images/icon/consult-icon.png">
          <p>在您有任何疑問、建議或合作意向時，請隨時通過電子信箱服務與我們取得聯繫。<br>
            我們的專業團隊將竭誠為您提供最優質的服務，並解答您的所有疑問。<br>
            期待與您的溝通與合作！
          </p>
          <p>信箱地址：info@inmylight.com</p>
          <span>或者</span>
          <router-link to="/consult" class="common-problem-btn">
            提交線上表單
            <img src="@/assets/images/icon/related-products-to.png" alt="to-about" class="to-more-btn">
          </router-link>
          <button class="back-top-btn" type="button" @click="scrollToTop">
            <img src="@/assets/images/icon/up.png">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'swiper/css';
@import 'swiper/css/pagination';
@import 'swiper/css/autoplay';
@import 'swiper/css/effect-fade';

.front-page-frame{
  opacity: 0;
  animation: fadeIn .8s .5s forwards;
}

// Swiper樣式
.bannerSwiper{
  width: 90%;
  animation: mask-title 2s ease-in forwards;

  .banner-swiper-wrapper{
    border-radius: 0 0 50% 50%;
    height: 1000px;
    overflow: hidden;

    .banner-swiper-slide{

      img{
        max-width: 2000px;
        object-fit: cover;
        animation: slowScale 30s infinite;
      }
    }
  }
  .banner-swiper-pagination{
    bottom: 15%;
  }
}
@media (max-width:919px){
  .bannerSwiper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner-swiper-wrapper{
      height: 550px;
      width: 160%;

      .banner-swiper-slide{
        img{
          max-width: 1400px;
        }
      }
    }
  }
}

// product及customized的通用Swiper樣式
.sectionSwiper{
  max-width: 640px;
  width: calc(50% - 12px);
  margin: 0;
  opacity: 0;

  .section-swiper-wrapper{
    border-radius: 0 0 320px 320px;
    height: 640px;
    overflow: hidden;

    .section-swiper-slide{
      img{
        max-width: 1000px;
        object-fit: cover;
        animation: slowScale 30s infinite;
      }
    }
  }
}
.swiper-pagination-bullet-active{
    background-color: white;
}
@media (max-width:919px){
  .sectionSwiper{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-swiper-wrapper{
      height: 360px;
      max-width: 400px;

      .section-swiper-slide{
        img{
          max-width: 600px;
        }
      }
    }
  }
}

// 區塊樣式
// bunner及about
.bunner-box{
  position: relative;
  overflow: hidden;

  .bunner-title{
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    font-size: 80px;
    color: $subColor;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    opacity: 0;
    animation: fadeIn 2s .5s ease-in forwards;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }
  .bunner-title-icon{
    height: 300px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }

  .about-box{
    display: flex;
    align-items: center;
    width: 640px;
    padding: 35px 50px;
    background-color: white;
    border-radius: 150px 0 0 150px;
    transform: translateX(100%);
    animation: out-to-Left 1.5s 2.5s cubic-bezier(0.2, 1, 0.3, 1) forwards;
    position: absolute;
    bottom: 20%;
    right: 0;
    z-index: 25;

    .about-title{
      display: flex;
      flex-direction: column;
      align-items: center;

      .about-title-icon{
        width: 130px;
      }
      h2{
        font-size: 24px;
      }
    }
    .about-Introduction{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      height: 150px;
      padding: 30px 20px 0 20px;

      p{
        font-size: 14px;
        color: $subColor2;
      }
      &:hover img{
        animation: BounceToRight 1s cubic-bezier(0.2, 1, 0.3, 1) infinite;
      }
    }
    .little-title{
      right: 50px;
      top: 20px;
    }
  }
}
@media (max-width:919px){
  .bunner-box{
    display: flex;
    flex-direction: column;
    align-items: center;

    .bunner-title{
      font-size: 40px;
      white-space: nowrap;
      top: 25%;
    }
    .bunner-title-icon{
      height: 200px;
    }
    .about-box{
      flex-direction: column;
      width: 100%;
      max-width: 540px;
      padding: 50px 5%;
      position: relative;
      transform: translateX(0);
      animation: none;

      .about-title{
        h2{
          padding-bottom: 10px;
        }
      }
      .about-Introduction{
        padding: 0;
        height: auto;
      }
      .little-title{
        color: white;
        top: -50px;
        right: 50%;
        transform: translateX(50%);
        text-align: center;
      }
    }
  }
}

// product及customized的通用樣式
.product-section-box,.customized-section-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5%;
  margin: 150px auto 0 auto;
  position: relative;
  transform: translateY(0);

  .product-Introduction,.customized-Introduction{
    max-width: 540px;
    width: calc(50% - 12px);
    display: flex;
    flex-direction: column;
    align-items: center;

    >img{
      width: 130px;
    }
    h2{
      font-size: 24px;
      padding: 10px;
    }
    a{
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p{
        font-size: 14px;
        color: $subColor2;
      }
      &:hover img{
        animation: BounceToRight 1s cubic-bezier(0.2, 1, 0.3, 1) infinite;
      }
    }
  }
}
.mask-color{
    border-radius: 0 0 320px 320px;
    height: 640px;
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    transition: opacity 2s ease-in;
}
// product及customized的個別樣式
.product-section-box{
  .little-title{
    left: 5%;
    top: 0;
  }
  .mask-color{
    background-color: $subColor8;
  }
}
.customized-section-box{
  padding-bottom: 200px;
  transition: translate .5s;

  .little-title{
    right: 5%;
    top: 0;
  }
  .mask-color{
    background-color: $subColor9;
  }
}
// product及customized的進場動畫
.sectionSwiper-In{
    animation: mask-circle 3s ease-in forwards;

    .mask-color{
      opacity: 0;
    }
  }
@media (max-width:919px){
  .product-section-box,.customized-section-box{
    flex-direction: column;
    margin: 50px auto 0 auto;

    .product-Introduction,.customized-Introduction{
      width: 100%;
      padding: 30px 0;
    }
    .little-title{
      transform: translateX(-50%);
      left: 50%;
      top: -36px;
    }
  }
  .mask-color{
    height: 360px;
    max-width: 400px;
    right: auto;
  }

  .product-section-box{
    flex-direction: column-reverse;
  }
}

.company-section-box{
  border-radius: 50px 50px 0 0;
  overflow: hidden;
  background-color: $subColor7;
  position: relative;
  padding-bottom: 160px;
  transform: translateY(0);

  >img{
    position: relative;
    z-index: 10;
    height: 500px;
    width: 100%;
    object-fit: cover;
    transform-origin: center bottom;
  }
  .little-title{
    top: 20px;
    left: 50px;
    z-index: 20;
  }
  .company-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-50px);

    img{
      width: 120px;
    }
    p{
      font-size: 30px;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  }
  .table-box{
    display: flex;
    justify-content: space-around;

    table{
      width: 40%;
      tr{
        display:block;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        padding: 20px 0;
        width: 100%;

        th{
          width: 100px;
        }
      }
    }
  }
}
@media (max-width:919px){
  .company-section-box{
    .little-title{
      transform: translateX(-50%);
      left: 50%;
    }
    .table-box{
      flex-direction: column;
      align-items: center;

      table{
        width: 60%;
        font-size: 14px;
      }
    }
  }
}

.consult-section-frame{
  background-color: $subColor7;
}
.consult-section-box{
  border-radius: 50px 50px 0 0;
  background-color: $subColor4;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .little-title{
    top: 20px;
    right: 50px;
  }
  >img{
    margin: 130px auto 60px auto;
  }
  p{
    text-align: center;
    margin-bottom: 40px;
  }
  .back-top-btn{
    background-color: transparent;
    border: none;
    border-top: 2px solid black;
    margin: 100px 0 60px 0;

    img{
      width: 100px;
      margin-top: 5px;
    }
    &:hover{
      img{
        animation: BounceToTop 0.2s;
      }
    }
  }
}
.connect-us-btn,.common-problem-btn{
  background-color: black;
  border-radius: 20px;
  border: none;
  color: white;
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto;

  i{
    margin-right: 10px;
    font-size: 18px;
  }
}
.common-problem-btn{
  background-color: white;
  color: black;

  img{
    margin-left: 10px;
    width: 20px;
  }
  &:hover img{
    animation: BounceToRight 1s cubic-bezier(0.2, 1, 0.3, 1) infinite;
  }
}
@media (max-width:919px){
  .consult-section-box{
    .little-title{
      transform: translateX(-50%);
      left: 50%;
    }
  }
}

// customized及consult的覆蓋效果
.shadow{
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 25;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
}

.to-more-btn{
  width: 30px;
}
.little-title{
  position: absolute;
  font-size: 14px;
  text-align: center;
}

</style>

<script>
import Swiper from 'swiper'
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

Swiper.use(Pagination)
Swiper.use(Autoplay)
Swiper.use(EffectFade)

gsap.registerPlugin(ScrollTrigger)

export default {
  data () {
    return {
      bannerSwiper: '',
      productSwiper: '',
      customizedSwiper: '',
      cTX: '',
      isNavigating: false
    }
  },
  methods: {
    scrollToTop () { // 返回頁面頂端
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollTriggerAnim () { // 滾動事件
      this.cTX && this.cTX.revert()
      const productSwiper = this.$refs.productSwiper
      const customizedSwiper = this.$refs.customizedSwiper
      const customized = this.$refs.customized
      const company = this.$refs.company

      this.cTX = gsap.context(() => {
        // swiprer
        ScrollTrigger.create({
          trigger: productSwiper,
          start: 'top center',
          onEnter: () => {
            productSwiper && productSwiper.classList.add('sectionSwiper-In')
          }
        })
        ScrollTrigger.create({
          trigger: customizedSwiper,
          start: 'top center',
          onEnter: () => {
            customizedSwiper && customizedSwiper.classList.add('sectionSwiper-In')
          }
        })
        // customized區塊
        ScrollTrigger.create({
          trigger: customized,
          start: 'bottom center',
          onUpdate: (self) => {
            // Y軸偏移
            const translateYV = self.progress * 200
            customized && gsap.set(customized, { translateY: `${translateYV}px` })

            // 陰影透明度
            const opacityValue = self.progress
            gsap.set('.customized-shadow', { opacity: opacityValue })
          }
        })
        // company區塊
        ScrollTrigger.create({
          trigger: company,
          start: 'bottom center',
          onUpdate: (self) => {
            // Y軸偏移
            const translateYV = self.progress * 200
            company && gsap.set(company, { translateY: `${translateYV}px` })

            // 陰影透明度
            const opacityValue = self.progress
            gsap.set('.company-shadow', { opacity: opacityValue })
          }
        })
      })
    },
    resetScrollTrigger () { // resize時執行 將translateY回復避免跑位
      const customized = this.$refs.customized
      const company = this.$refs.company
      gsap.set(customized, { translateY: '0px' })
      gsap.set(company, { translateY: '0px' })
      ScrollTrigger.refresh(true)
    }
  },
  mounted () {
    // bannerSwiper
    this.bannerSwiper = new Swiper(this.$refs.bannerSwiper, {
      pagination: {
        el: '.banner-swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      },
      effect: 'fade'
    })
    // productSwiper
    this.productSwiper = new Swiper(this.$refs.productSwiper, {
      pagination: {
        el: '.product-swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      },
      effect: 'fade'
    })
    // customizedSwiper
    this.customizedSwiper = new Swiper(this.$refs.customizedSwiper, {
      pagination: {
        el: '.customized-swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 5000
      },
      effect: 'fade'
    })
    // 避免切換路由時的scrollBehavior影響觸發
    setTimeout(() => {
      this.scrollTriggerAnim()
    }, 600)
    window.addEventListener('resize', this.resetScrollTrigger)
  },
  beforeUnmount () {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    window.removeEventListener('resize', this.resetScrollTrigger)
  }
}
</script>
