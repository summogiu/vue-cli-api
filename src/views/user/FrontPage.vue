<template>
  <div class="fram">
    <div class="banner" ref="banner">
          <div class="h1-animation">
              <div class="circle-background"></div>
              <h1>In My Light</h1>
          </div>
      </div>

      <div class="about" ref="about" :class="[ isAboutFade ? 'fadeIn transform0' : '' ]">
          <img src="@/assets/images/background/about.jpg" alt="">
          <h4 class="background-text" :class="[isAboutFade ? 'fadeIn toRigth-1' : '' ]">About</h4>
          <div class="about-text">
              <h2 :class="[ isAboutFade ? 'fadeIn toLeft-1' : '' ]">
                照亮生活 ,<br>將美好帶入您的空間 ,<br>探索 "In My Light"。</h2>
              <div class="about-content">
                  <p :class="[ isAboutFade ? 'fadeIn toLeft-2' : '' ]">
                      在In My Light，<br>我們相信每一盞燈都是一個故事的開始，<br>一個氛圍的創造者，<br>以及家居美學的靈感來源。<br>
                      我們是一家專業的燈具店，<br>致力於為您的空間帶來獨特而精心設計的照明解決方案。
                  </p>
                  <br>
                  <a href="#" class="more-link">
                      more
                      <div class="to-more-icon">
                          <img src="@/assets/images/circle.png" alt="" class="circle">
                          <i class="bi bi-arrow-right"></i>
                      </div>
                  </a>
              </div>
          </div>
      </div>

      <div class="products-frame" ref="products" :class="[ isProductsFade ? 'fadeIn transform0' : '' ]">
          <div class="products">
            <h4 class="background-text" :class="{ 'toRigth-1' : isProductsFade }">Products</h4>
              <div class="products-content">
                  <h2 :class="{ 'toLeft-1' : isProductsFade }">
                      "In My Light "的燈具<br>每一件都由設計師團隊精心打造,<br>旨在為您的空間注入個人的獨特風格。
                  </h2>
                  <p :class="{ 'toLeft-2' : isProductsFade }">
                      我們的產品包括吊燈、壁燈、臺燈和地燈等各種類型，<br>涵蓋了現代、古典、工業風等多種風格，<br>滿足您的不同需求和喜好。<br>無論是為家居、辦公室還是商業空間，<br>
                      In My Light 系列燈具都能提供出色的照明效果，<br>同時為您的空間增添藝術氣息和舒適感。<br>選擇 In My Light，讓您的空間更加煥然一新！
                  </p>
                  <a href="#" class="more-link">
                      more
                      <div class="to-more-icon">
                          <img src="@/assets/images/circle.png" alt="" class="circle">
                          <i class="bi bi-arrow-right"></i>
                      </div>
                  </a>
              </div>
              <img src="@/assets/images/background/products01.jpg" alt="" class="products-show-image1"
                       :class="{ 'toDown-1' : isProductsFade }">
              <img src="@/assets/images/background/products02.jpg" alt="" class="products-show-image2"
                       :class="{ 'toUp-1' : isProductsFade }">
              <img src="@/assets/images/background/products03.jpg" alt=""
                       :class="{ 'toDown-1' : isProductsFade }">
          </div>
          <ProductSwiper :prdTops="sectionTops.productsTops" :fade="isProductsFade"  :class="[ isProductsFade ? 'toLeft-1' : '' ]"/>
      </div>

      <div class="customized" ref="customized" :class="[ isCustomizedFade ? 'fadeIn transform0' : '' ]">
          <img src="@/assets/images/background/customized.jpg" alt="">
          <div class="customized-content"  :class="{ 'fadeIn customized-content-in' : isCustomizedFade }">
              <h4 class="background-text" :class="{ 'toLeft-1' : isCustomizedFade }">Customized</h4>
              <h2 :class="[ isCustomizedFade ? 'fadeIn toDown-2' : '' ]">
                        在In My Light，<br>我們理解每個空間都是獨一無二的。</h2>
              <p :class="{ 'toUp-2' : isCustomizedFade }">
                  我們提供訂製專欄服務，<br>讓您能夠打造符合您獨特需求和風格的照明解決方案。<br>無論您需要定制尺寸、特定材料或特別設計，<br>我們的專業團隊將與您合作，<br>
                  以確保您得到完美的訂製燈具，<br>讓您的空間煥然一新，與眾不同。<br>與In My Light合作，<br>將您的想象變成現實！
              </p>
              <a href="#" class="more-link">
                  more
                  <div class="to-more-icon">
                      <img src="@/assets/images/circle.png" alt="" class="circle">
                      <i class="bi bi-arrow-right"></i>
                  </div>
              </a>
          </div>
      </div>

      <div class="company" ref="company">
      <h4 class="background-text" :class="[ isCompanyFade ? 'toRigth-1' : '' ]">Company</h4>
      <ul :class="[ isCompanyFade ? 'fadeIn toLeft-2' : '' ]">
          <li>聯絡資訊</li>
          <li>地址：123台灣台北市中山區光復北路100號</li>
          <li>電話：+886-2-1234-5678</li>
          <li>電子郵件：info@inmylight.com</li>
          <li>網站：www.inmylight.com</li>
      </ul>
      <p>在您有任何疑問、建議或合作意向時，請隨時通過上述聯絡方式與我們取得聯繫。我們的專業團隊將竭誠為您提供最優質的服務，並解答您的所有疑問。期待與您的溝通與合作！</p>
      <img src="@/assets/images/background/company1.jpg" alt="" :class="[ isCompanyFade ? 'fadeIn transform0' : '' ]">
      </div>
  </div>
</template>

<style lang="scss">
.fram{
  background-image: url('@/assets/images/banner/index-banner.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center right;
}

.banner{
    position: relative;
    display: block;
    height: auto;
    z-index: 1;
    width: 100vw;
    height: 100vh;

    .h1-animation{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20%;
        scale: 1.5;
    }
    .h1-animation::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $subColor2;
        animation: slideOut 1s ;
        opacity: 0;
    }
    .h1-animation::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 5%;
        bottom: -10px;
        background-color: $subColor2;
        animation: slideIn 1.5s .5s ease-in reverse ,fadeIn 1s .5s forwards;
        opacity: 0;
    }
    h1{
        font-size: 50px;
        color: $subColor2;
        opacity: 0;
        animation: fadeIn 2s .2s forwards;
    }
    .circle-background{
        position: absolute;
        top: -60px;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.7);
        animation: fadeIn 2s .2s, slideDown 1s .2s forwards;
    }
}

@media (max-width:919px){
    .banner{
        .h1-animation{
            scale: 1;
        }
    }
}

.about {
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: 50px;
    background: white;
    // 進場
    opacity: 0;
    transform: translateY(30%);
    transition: all 1s;

    .background-text{
        top: -20px;
        left: 30%;
        opacity: 0;
        transition: all .5s;
    }
    >img{
        width: 30%;
        height: 600px;
        object-fit: cover;
    }
    .about-text{
        display: flex;
        z-index: 5;

        h2{
            margin-top: 15%;
            opacity: 0;
            transition: all 1s;
        }
        .about-content{
            margin-top: 18%;
            p{
                font-size: 20px;
                opacity: 0;
                transition: all 1s;
            }
            .more-link{
                position: absolute;
                right: -50px;
            }
        }
    }
}

@media (max-width:919px) {
    .about{
      flex-direction: column-reverse;

      .background-text{
        top: -80px;
        left: 10%;
        }
      .about-text{
          flex-direction: column;

        .about-content{
            margin-top: 5%;
            p{
                margin-left: 16px;
            }
            .more-link{
                bottom: 0;
                right: 0;
            }
        }
      }
      >img{
        width: 60%;
        height: 300px;
        opacity: 0.5;
      }
    }
}
@media (max-width:414px){
    .about{
      .background-text{
        top: -20px;
            left: -50%;
        }
      .about-text{
        .about-content{
            .more-link{
                right: -50px;
            }
        }
      }
    }
}

.products-frame{
    position: relative;
    height: 800px;
    margin: 200px 0;
    background: white;
    // 進場
    opacity: 0;
    transform: translateY(30%);
    transition: all 1s;

    .products{
        display: flex;
        position: relative;
        overflow: hidden;

        .products-content{
            width: 50%;
            font-size: 20px;
            z-index: 5;

            h2{
                position: absolute;
                margin-top: 150px;
            }
            p{
                position: absolute;
                margin-left: 10%;
                margin-top: 340px;
                background: rgba(255,255,255,0.5);
                border-radius: 3px;
                padding: 10px;
            }
            .more-link{
                position: absolute;
                left: 50px;;
                bottom: 0;
                z-index: 10;
            }
        }
        >img{
            margin-right: 5px;
            border-radius: 5px;
            height: 100%;
            z-index: 3;
        }
        .products-show-image1{
            margin-top: 10px;
        }
        .products-show-image2{
            margin-top: 50px;
        }
    }
}
@media (max-width:919px){
    .products-frame{
        margin-top: 100px;
        .products{
            height: 100%;
            >img{
                width: 30%;
                height: 50%;
                opacity: 0.7;
            }
            h2{
                white-space:unset;
                scale: 0.7;
                text-align: end;
                z-index: 10;
                width: 110%;
            }
            .background-text{
                top: -100px;
                left: -200px;
              }
            .products-content{
              p{
                top: 40px;
                z-index: 10;
                width: 80%;
              }
              .more-link{
                left: 50%;
                transform: translateX(-50%);
              }
            }
        }
    }
}
@media (max-width:414px){
  .products-frame{
    .products{
      h2{
        top: -30px
      }
      .background-text{
          right: -250px;
          bottom: -1700px;
        }
      .products-content{
        .more-link{
            display: none;
        }
      }
    }
  }
}

.customized{
    margin-top: 300px;
    position: relative;
    overflow: hidden;
    // 進場
    opacity: 0;
    transform: translateY(30%);
    transition: all 1s;

    .background-text{
        color: $subColor2;
        top: -180px;
        right: 0;
        font-size: 200px;
        z-index: -1;
    }
    >img{
        width: 100%;
        max-height: 1200px;
        object-fit: cover;
    }

    .customized-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        opacity: 0;
        transition: all 1s;
        text-align: center;
        background: linear-gradient(to bottom,rgba(0, 0, 0, 0.6) 90%,rgba(0, 0, 0, 0));
        width: 100%;
        padding: 20px 0;
        h2{
            color: $subColor;
            opacity: 0;
            transition: all 1s;
        }
        p{
            line-height: 3;
            margin: 30px auto 0 auto;
            color: $subColor;
        }
        .more-link{
            margin: 0 auto;
            padding-left: 20px;
        }
    }
    .customized-content-in{
      transform: translateX(-50%) translateY(-50%);
}
}

@media (max-width:919px){
    .customized{
        margin-top: 1300px;

        .background-text{
          top: -150px;
          font-size: 150px;
          left: 0;
        }
        >img{
          height: 800px;
        }

    }
}
@media (max-width:414px){
    .customized{

        .background-text{
            left: -20%;
            top: -100px;
            font-size: 150px;
        }

        .customized-content{
            padding-bottom: 60px;
            h2{
                font-size: 36px;
                white-space:unset;
            }
        }
    }
}

.company{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 250px;
    overflow: hidden;

    .background-text{
        color: $subColor;
        top: -50px;
    }
    ul{
        padding-left: 100px;
        line-height: 3;
        background-color: rgba(0,0,0,0.75);
        height: 500px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: $subColor;
        z-index: 5;
        opacity: 0;
        transition: all 2s;
    }
    img{
        width: 50%;
        height: 500px;
        object-fit: cover;
        opacity: 0;
        transform: translateY(30%);
        transition: all 1s;
    }
    p{
        position: absolute;
        bottom: 0;
        text-align: center;
        width: 100%;
        background-color: rgba(0,0,0,0.75);
        color: $subColor;
        z-index: 10;
    }
}

@media (max-width:414px){
    .company{
        ul{
            position: absolute;
            width: 100%;
            top: 50;
            margin: 0;

            li{
                width: 100%;
                color: $subColor;
                background: linear-gradient(to right, rgba(0, 0, 0, 0.7)60%, rgba(255, 0, 0, 0));
                margin-bottom: 10px;
                padding: 0 5px;
            }
        }
        img{
            opacity: 0.6;
            z-index: -1;
            width: 100%;
        }
    }
}
</style>

<script>
import ProductSwiper from '@/components/user/ProductSwiper.vue'
import scrollPosMixin from '@/mixins/scrollPosMixin'

export default {
  components: {
    ProductSwiper
  },
  data () {
    return {
      scrollPosition: 0,
      sectionTops: {
        bannerTops: 0,
        aboutTops: 0,
        productsTops: 0,
        customizedTops: 0,
        companyTops: 0
      }
    }
  },
  computed: {
    isAboutFade () {
      return this.scrollPosition >= this.sectionTops.aboutTops / 2
    },
    isProductsFade () {
      return this.scrollPosition >= this.sectionTops.productsTops / 1.5
    },
    isCustomizedFade () {
      return this.scrollPosition >= this.sectionTops.customizedTops / 1.5
    },
    isCompanyFade () {
      return this.scrollPosition >= this.sectionTops.companyTops / 1.5
    }
  },
  mixins: [scrollPosMixin],
  methods: {
    getSectionTops () {
      this.sectionTops.bannerTops = this.$refs.banner.getBoundingClientRect().top + window.pageYOffset
      this.sectionTops.aboutTops = this.$refs.about.getBoundingClientRect().top + window.pageYOffset
      this.sectionTops.productsTops = this.$refs.products.getBoundingClientRect().top + window.pageYOffset
      this.sectionTops.customizedTops = this.$refs.customized.getBoundingClientRect().top + window.pageYOffset
      this.sectionTops.companyTops = this.$refs.company.getBoundingClientRect().top + window.pageYOffset
    }
  },
  mounted () {
    this.getSectionTops()
    console.log('products位置', this.sectionTops.productsTops)
  }
}
</script>
