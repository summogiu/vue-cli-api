<template>
  <div class="about-page-frame">
    <div class="about-page-bg">
      <div class="bg-circle" :class="[ isContentBoxIn ? 'changeColor' : '' ]"></div>
      <div class="about-page-title"
              :class="[ isContentBoxIn ? 'about-page-title-fadeOut' : '' ]">
        <h1>About</h1>
        <h2>關於我們</h2>
      </div>
      <div class="marquee"
          :class="[ isContentBoxIn ? 'marquee-up' : '' ]">
        <p class="marquee-content">ABOUT IN MY LIGHT</p>
        <p class="marquee-content-delay">&nbsp;&nbsp;ABOUT IN MY LIGHT</p>
      </div>
    </div>
    <div class="about-page-content-box" ref="contentBox"
            :class="[ isContentBoxIn ? 'transform0' : '' ]">
      <h3 class="about-page-content-box-topName"
              :class="[ isContentBoxIn ? 'toLeft-1' : '' ]">In My Light</h3>
      <CurrentPath/>
      <img src="@/assets/images/background/pexels-tristan-paolo-4276607.jpg"
              alt="" class="title-img"
              :class="[ isContentBoxIn ? 'fadeIn toDown-1' : '' ]">
      <p class="about-page-content-p to-up-p"
              :class="[ isContentIn ? 'fadeIn toUp-1' : '' ]">
              您好！還迎來到In Mu Light！
              </p>
      <p class="about-page-content-p to-up-p"
              :class="[ isContentIn ? 'fadeIn toUp-2' : '' ]">
              無論您是在為新家裝潢，還是想要給現有的空間注入新的生命力，<br>
              In My Light都是您的最佳選擇。
              </p>
      <p class="about-page-content-p to-up-p"
            :class="[ isPointFade ? 'fadeIn toUp-1' : '' ]">
            在我們的店裡，您將會發現</p>
            <div :class="[ isPointFade ? 'fadeIn straight-line' : '' ]"
                    @animationend="lineAnimationJudge"></div>
      <ul class="about-page-point" ref="point"
            :class="[ islineAnimationEnd && isPointFade ? 'fadeIn' : '' ]">
        <li :class="[ islineAnimationEnd && isPointFade ? 'toRight-1 point-fadeIn' : '' ]">
          <img src="@/assets/images/about-img/point1.jpg" alt="">
          <div class="about-page-point-text">
            <p>優質品質：</p>
            <span>我們精心挑選的每一盞燈飾都是由最高品質的材料製成，確保耐用性和可靠性。</span>
          </div>
          </li>
        <li :class="[ islineAnimationEnd ? 'toRight-2 point-fadeIn' : '' ]">
          <img src="@/assets/images/about-img/point2.jpg">
          <div class="about-page-point-text">
            <p>獨特風格：</p>
            <span>無論您喜歡簡約時尚還是奢華經典，我們的燈具都能為您的空間增添獨特的魅力。</span>
          </div>
          </li>
        <li :class="[ isPointFadeHalf && islineAnimationEnd ? 'toRight-1 point-fadeIn' : '' ]">
          <img src="@/assets/images/about-img/point3.jpg">
          <div class="about-page-point-text">
            <p>專業服務：</p>
            <span>我們擁有經驗豐富的照明設計師團隊，隨時為您提供專業的建議和指導，以確保您找到完美的照明解決方案。</span>
          </div>
          </li>
        <li :class="[ isPointFadeHalf && islineAnimationEnd ? 'toRight-2 point-fadeIn' : '' ]">
          <img src="@/assets/images/about-img/point4.jpg">
          <div class="about-page-point-text">
            <p>個性定制：</p>
            <span>我們提供訂製服務，根據您的特定需求設計和製造燈具，讓每一盞燈都能完美契合您的獨特空間和風格。</span>
          </div>
        </li>
      </ul>
      <p class="about-page-content-p"
               :class="[ isOtherIn ? 'fadeIn toDown-1' : '' ]">
        現在，歡迎探索我們的獨特產品，<br>讓我們一起為您的生活和空間帶來光芒璀璨的變化！
      </p>
      <div class="other-link-box" ref="otherLinkBox1">
        <ul>
          <li :class="[ isOtherIn ? 'fadeIn toDown-1' : '' ]">
            <router-link to="/products/productslist">
              <img src="@/assets/images/about-img/to-products.jpg">
              <div class="other-link-title">
                <div class="to-more-icon">
                  <img src="@/assets/images/circle.png" alt="" class="circle">
                  <i class="bi bi-arrow-right user-bar-more-icon"></i>
                </div>
                <span>參觀產品列表</span>
              </div>
            </router-link>
          </li>
          <li :class="[ isOtherIn ? 'fadeIn toDown-1' : '' ]">
            <router-link to="/customized">
            <img src="@/assets/images/about-img/to-customized.jpg">
            <div class="other-link-title">
                <div class="to-more-icon">
                  <img src="@/assets/images/circle.png" alt="" class="circle">
                  <i class="bi bi-arrow-right user-bar-more-icon"></i>
                </div>
                <span>查看過往訂製品</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <p class="about-page-content-p to-down-p" :class="[ isOther2In ? 'fadeIn toDown-2' : '' ]">或者</p>
      <div class="other-link-box" ref="otherLinkBox2">
        <ul>
          <li :class="[ isOther2In ? 'fadeIn toDown-1' : '' ]">
             <router-link to="/">
             <img src="@/assets/images/about-img/to-company.jpg">
             <div class="other-link-title">
                <div class="to-more-icon">
                  <img src="@/assets/images/circle.png" alt="" class="circle">
                  <i class="bi bi-arrow-right user-bar-more-icon"></i>
                </div>
                <span>更了解我們</span>
              </div>
             </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ToPageTop :class="[ isContentBoxIn ? 'fadeIn' : '' ]" />
</template>

<style lang="scss">
.about-page-frame{
  background: $subColor3;
  transition: all .6s;
  opacity: 0;
  animation: fadeIn .8s .5s forwards;
}
  .about-page-bg{
    background: $linearColor2;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;

    .about-page-title{
      position: absolute;
      top: 35%;
      left: 50px;
      transition: all .6s;
    }
    .about-page-title-fadeOut{
      opacity: 0;
      top: 0;
    }

    .bg-circle{
      position: relative;
      left: 30%;
      top: 20%;
      background-color: $subColor;
      height: 800px;
      width: 800px;
      filter: blur(10px);
      border-radius: 50%;
      animation: round 30s linear infinite;
      transition: all .6s;
    }
    .bg-circle.changeColor{
      background: $subColor7;
    }
    h1{
      font-size: 150px;
    }
    h2{
      font-size: 30px;
      text-align: end;
    }
    .marquee {
      overflow: hidden;
      white-space: nowrap;
      position: absolute;
      bottom: -80px;
      transition: transform .5s, opacity .5s;
      opacity: 0.5;

      .marquee-content,.marquee-content-delay {
        display: inline-block;
        animation: marquee 50s linear infinite;
        color: white;
        font-size: 180px;
      }
      .marquee-content-delay{
        animation: marquee 50s -50s linear infinite;
      }
    }
    .marquee-up{
      transform: translateY(-200%);
      opacity: 1;
    }
  }

  .about-page-content-box{
      position: relative;
      margin-top: 100vh;
      padding: 50px 100px 100px 100px;
      background: white;
      border-radius: 15px 15px 0 0;
      z-index: 5;
      transform: translateY(30%);
      transition: all .5s;

      .about-page-content-box-topName{
        position: absolute;
        z-index: -1;
        top: -160px;
        right: 15px;
        color: $subColor9;
        font-size: 150px;
      }
      .title-img{
        border-radius: 15px;
        height: 400px;
        width: 100%;
        object-fit: cover;
        object-position: top;
        margin: 100px 0;
        opacity: 0;
        transition: all 1s;
      }
      .about-page-content-p{
        margin: 50px 0;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        opacity: 0;
        transition: all 1s;
      }
      .to-up-p{
        transform: translateY(30%);
      }
      .to-down-p{
        transform: translateY(-30%);
      }
      .straight-line{
        position: relative;

        &::before{
          content:"";
          position: absolute;
          width: 2px;
          height: 160px;
          background: $linearColor3;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          transform-origin: top;
          animation: lineDowm 1s linear forwards;
        }
      }
      .about-page-point{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 850px;
        width: 80%;
        margin: 0 auto;
        margin-top: 260px;
        opacity: 0;
        transition: all 1s;

        li{
          position: relative;
          width: 45%;
          max-width: 400px;
          border-radius: 15px;
          box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
          margin-bottom: 30px;
          background-color: black;
          transform: translateX(-20%);
          opacity: 0;
          transition: all .5s;

          img{
            border-radius: 15px;
            height: 100%;
            opacity: 0.8;
          }
          .about-page-point-text{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            width: 100%;
            padding: 15px;
            color: $subColor;

            p{
              text-align: center;
            }
          }

          &:hover{
            scale: 0.95;
            opacity: 1;
          }
        }
        .point-fadeIn{
          opacity: 0.9;
        }
      }
      .other-link-box{
        padding: 30px;
        ul{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          li{
            padding: 0 15px;
            width: calc(50% - 30px);
            opacity: 0;
            transition: all .5s;

            a{
              img{
                filter: saturate(50%);
                border-radius: 15px;
                transition: scale .5s;
              }
              .other-link-title{
                display: flex;
                align-items: center;
                color: black;

                .to-more-icon{
                  margin-right: 10px;
                }
                span{
                  font-size: 18px;
                  font-weight: bold;
                  border-bottom: 1.5px solid black;
                }
              }
              &:hover{
                img{
                  scale: 0.98;
                }
                i{
                  color: $mainColor;
                  scale: 1.1;
                }
                .circle{
                  animation: circleRotate 10s infinite linear;
                  scale: 1.1;
                }
                span{
                  animation: floatRight .5s forwards;
                }
              }
            }
          }
        }
      }
    }
@media (max-width:919px){
  .about-page-bg{
      h1{
        font-size: 80px;
      }
    }

  .about-page-content-box{
    .about-page-content-box-topName{
      line-height: 1;
      writing-mode: vertical-lr;
      left: 15px;
      top: 15px;
      opacity: 0.5;
      font-size: 80px;
    }
    .about-page-point{
      width: 100%;
    }
  }
}
@media (max-width:414px){
  .about-page-bg{
    .about-page-title{
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .about-page-content-box{
    display: flex;
    flex-direction: column;
    align-items: center;

    .about-page-content-p{
      writing-mode: vertical-rl;
      text-orientation: upright;
      text-align: start;
    }
    .about-page-point{
      width: 100%;
      li{
        width: 100%;
      }
    }
  }
}
</style>

<script>
import scrollPosMixin from '@/mixins/scrollPosMixin'
import ToPageTop from '@/components/user/ToPageTop.vue'
import CurrentPath from '@/components/user/CurrentPath.vue'

export default {
  components: {
    ToPageTop,
    CurrentPath
  },
  data () {
    return {
      scrollPosition: 0,
      sectionTops: {
        contentBoxTops: 0,
        pointTops: 0,
        otherLinkBox1Tops: 0,
        otherLinkBox2Tops: 0
      },
      islineAnimationEnd: false
    }
  },
  computed: {
    isContentBoxIn () {
      return this.scrollPosition >= this.sectionTops.contentBoxTops / 5
    },
    isContentIn () {
      return this.scrollPosition >= this.sectionTops.contentBoxTops
    },
    isPointFade (
    ) {
      return this.scrollPosition >= this.sectionTops.pointTops / 1.5
    },
    isPointFadeHalf () {
      return this.scrollPosition >= this.sectionTops.pointTops / 1.5
    },
    isToOther () {
      return this.scrollPosition >= this.sectionTops.pointTops / 0.9
    },
    isOtherIn () {
      return this.scrollPosition >= this.sectionTops.otherLinkBox1Tops / 1.2
    },
    isOther2In () {
      return this.scrollPosition >= this.sectionTops.otherLinkBox2Tops / 1.2
    }
  },
  watch: {
    scrollPosition () {
      if (this.scrollPosition < this.sectionTops.pointTops / 2) {
        this.islineAnimationEnd = false
      }
    }
  },
  mixins: [scrollPosMixin],
  methods: {
    getSectionTops () {
      this.sectionTops.contentBoxTops = this.$refs.contentBox.getBoundingClientRect().top + window.pageYOffset
      this.sectionTops.pointTops = this.$refs.point.getBoundingClientRect().top + window.pageYOffset

      // 防止Tops變位
      const otherLinkBox1 = this.$refs.otherLinkBox1.getBoundingClientRect().top + window.pageYOffset
      if (otherLinkBox1 < 3000) {
        this.sectionTops.otherLinkBox1Tops = otherLinkBox1 * 1.4
      } else {
        this.sectionTops.otherLinkBox1Tops = otherLinkBox1
      }

      const otherLinkBox2 = this.$refs.otherLinkBox2.getBoundingClientRect().top + window.pageYOffset
      if (otherLinkBox2 < 3000) {
        this.sectionTops.otherLinkBox2Tops = otherLinkBox2 * 1.5
      } else {
        this.sectionTops.otherLinkBox2Tops = otherLinkBox2
      }
    },
    lineAnimationJudge (event) {
      if (event.animationName === 'lineDowm') {
        this.islineAnimationEnd = true
      }
    }
  },
  mounted () {
    this.getSectionTops()
  }
}
</script>
