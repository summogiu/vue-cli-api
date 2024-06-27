<template>
  <div class="about-page-frame">
    <div class="about-page-bg">
      <div class="bg-circle"></div>
      <div class="about-page-title">
        <h1>About</h1>
        <h2>關於我們</h2>
      </div>
    </div>
    <div class="about-page-content-box" ref="contentBox"
            :class="[ isContentBoxIn ? 'transform0' : '' ]">
      <ul v-for="(item, i) in currentPaths" :key="i" class="current-path">
        <li><router-link to="/frontPage"><i class="bi bi-house home-i"></i></router-link></li>
        <li>
          <i class="bi bi-chevron-right"></i>
          <router-link :to="item.path" v-if="i !== currentPaths.length - 1">{{item.name}}
          </router-link></li>
        <li><span v-if="i === currentPaths.length - 1">{{ item.name }}</span></li>
      </ul>
      <img src="@/assets/images/background/pexels-tristan-paolo-4276607.jpg"
              alt="" class="title-img"
              :class="[ isContentBoxIn ? 'fadeIn toDown-1' : '' ]">
      <p class="about-page-content-p"
              :class="[ isContentIn ? 'fadeIn toUp-1' : '' ]">
              無論您是在為新家裝潢，還是想要給現有的空間注入新的生命力，<br>
              In My Light都是您的最佳選擇。
              </p>
      <p class="about-page-content-p"
            :class="[ isPointFade ? 'fadeIn toUp-1' : '' ]">
            在我們的店裡，您將會發現</p>
            <div :class="[ isPointFade ? 'fadeIn straight-line' : '' ]"
                    @animationend="lineAnimationJudge"></div>
      <ul class="about-page-point" ref="point"
            :class="[ islineAnimationEnd ? 'fadeIn' : '' ]">
        <li :class="[ islineAnimationEnd ? 'toRight-1' : '' ]">
          <img src="@/assets/images/about-img/point1.jpg" alt="">
          <div class="about-page-point-text">
            <p>優質品質：</p>
            <span>我們精心挑選的每一盞燈飾都是由最高品質的材料製成，確保耐用性和可靠性。</span>
          </div>
          </li>
        <li :class="[ islineAnimationEnd ? 'fadeIn toRight-2' : '' ]">
          <img src="@/assets/images/about-img/point2.jpg" alt="">
          <div class="about-page-point-text">
            <p>獨特風格：</p>
            <span>無論您喜歡簡約時尚還是奢華經典，我們的燈具都能為您的空間增添獨特的魅力。</span>
          </div>
          </li>
        <li :class="[ islineAnimationEnd ? 'toRight-1' : '' ]">
          <img src="@/assets/images/about-img/point3.jpg" alt="">
          <div class="about-page-point-text">
            <p>專業服務：</p>
            <span>我們擁有經驗豐富的照明設計師團隊，隨時為您提供專業的建議和指導，以確保您找到完美的照明解決方案。</span>
          </div>
          </li>
        <li :class="[ islineAnimationEnd ? 'toRight-2' : '' ]">
          <img src="@/assets/images/about-img/point4.jpg" alt="">
          <div class="about-page-point-text">
            <p>個性定制：</p>
            <span>我們提供訂製服務，根據您的特定需求設計和製造燈具，讓每一盞燈都能完美契合您的獨特空間和風格。</span>
          </div>
        </li>
      </ul>
      <p class="about-page-content-p">
        來店裡探索我們的獨特產品，讓我們一起為您的生活和空間帶來光芒璀璨的變化！
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.about-page-frame{
  background: $subColor3;
}
  .about-page-bg{
    background: $subColor3;
    height: 100vh;

    .about-page-title{
      position: absolute;
      top: 35%;
      left: 50px;
    }

    .bg-circle{
      position: relative;
      left: 30%;
      top: 20%;
      background: $subColor;
      height: 800px;
      width: 800px;
      filter: blur(10px);
      border-radius: 50%;
      animation: round 30s linear infinite;
    }
    h1{
      font-size: 150px;
    }
    h2{
      font-size: 30px;
      text-align: end;
    }
  }

  .about-page-content-box{
      position: relative;
      padding: 50px 100px;
      background: white;
      border-radius: 15px 15px 0 0;
      z-index: 5;
      transform: translateY(30%);
      transition: all .5s;

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
      .straight-line{
        position: relative;

        &::before{
          content:"";
          position: absolute;
          width: 2px;
          height: 160px;
          background-color: $mainColor;
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
        width: 850px;
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
          opacity: 0.9;
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
      }
    }
@media (max-width:919px){
  .about-page-content-box{
    .about-page-point{
      width: 100%;
    }
  }
}
</style>

<script>
import scrollPosMixin from '@/mixins/scrollPosMixin'

export default {
  data () {
    return {
      name: '關於我們',
      currentPath: {
        name: '',
        path: ''
      },
      currentPaths: [],
      scrollPosition: 0,
      sectionTops: {
        contentBoxTops: 0,
        pointTops: 0
      },
      islineAnimationEnd: false
    }
  },
  computed: {
    isContentBoxIn () {
      return this.scrollPosition >= this.sectionTops.contentBoxTops / 5
    },
    isContentIn () {
      return this.scrollPosition >= this.sectionTops.contentBoxTops / 1.2
    },
    isPointFade () {
      return this.scrollPosition >= this.sectionTops.pointTops / 2
    }
  },
  mixins: [scrollPosMixin],
  methods: {
    getCurrentPath () {
      this.currentPath.name = this.name
      this.currentPath.path = this.$route.path
      this.currentPaths.push(this.currentPath)
      console.log(this.currentPath)
    },
    getSectionTops () {
      this.sectionTops.contentBoxTops = this.$refs.contentBox.getBoundingClientRect().top + window.pageYOffset
      this.sectionTops.pointTops = this.$refs.point.getBoundingClientRect().top + window.pageYOffset
    },
    lineAnimationJudge (event) {
      if (event.animationName === 'lineDowm') {
        this.islineAnimationEnd = true
      } else if (!this.isPointFade) {
        this.islineAnimationEnd = false
      }
    }
  },
  created () {
    this.getCurrentPath()
  },
  mounted () {
    this.getSectionTops()
  }
}
</script>
