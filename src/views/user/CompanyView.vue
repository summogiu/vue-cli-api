<template>
  <div>
    <div class="company-page-frame">
      <div class="company-page-title-box" ref="companyTitleBox">
        <div class="bg-img"></div>
        <h2 class="company-page-title">COMPANY INFORMATION</h2>
      </div>
      <div class="company-page-content-box">
        <CurrentPath/>
        <div class="content-section-box">
          <h4 class="section-title">CompanyProfile</h4>
          <h5 class="section-little-title">公司概要</h5>
          <div class="basic-information-table-box">
            <table>
              <tr>
                <th>公司名稱</th>
                <td>In My Light 燈具有限公司</td>
              </tr>
              <tr>
                <th>創建日期</th>
                <td>2020年1月15日</td>
              </tr>
              <tr>
                <th>業務類別</th>
                <td>家具及裝設品製造業.綜合零售業</td>
              </tr>
              <tr>
                <th>地址</th>
                <td>1234 台北市中山區光復北路100號</td>
              </tr>
              <tr>
                <th>電話</th>
                <td>+886-2-1234-5678</td>
              </tr>
              <tr>
                <th>傳真</th>
                <td>+886-2-8765-4321</td>
              </tr>
              <tr>
                <th>電子郵件</th>
                <td>info@inmylight.com</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="content-section-box">
          <h4 class="section-title">Agreement</h4>
          <h5 class="section-little-title">我們的承諾</h5>
          <div class="agreement-content-box">
            <p>在In My Light，我們秉持「優質品質」、「獨特風格」和「專業服務」的承諾，確保每一位客戶都能獲得滿意的照明解決方案。
              我們致力於設計和製造各式各樣的燈具，從吊燈、壁燈到臺燈和地燈等，滿足您對空間美學和實用性的需求。
              我們的產品涵蓋了多種風格，包括北歐現代、奢華水晶、工業風格等，每一款燈具都經過精心設計，
              旨在為您的生活和工作空間增添獨特的光彩。
              我們的專業團隊將根據您的需求提供量身訂製的建議，讓每一盞燈具都能完美契合您的空間和風格。</p>
          </div>
        </div>
        <div class="content-section-box">
          <h4 class="section-title">Location</h4>
          <h5 class="section-little-title">位置資訊</h5>
          <div class="map-box">
            <div class="google-map" id="map"></div>
              <p>台北市中山區光復北路100號</p>
          </div>
        </div>
        <div class="content-section-box">
          <h4 class="section-title"> Follow Us</h4>
          <h5 class="section-little-title">追蹤我們</h5>
          <p class="follow-text">了解更多資訊並保持更新，請關注我們的社交媒體<i class="bi bi-caret-down-fill"></i></p>
          <ul class="social-link">
            <li><a href="https://www.facebook.com/" class="fb-link"><i class="bi bi-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/" class="ig-link"><i class="bi bi-instagram"></i></a></li>
            <li><a href="https://x.com/i/flow/login" class="x-link"><i class="bi bi-twitter-x"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <ToPageTop/>
  </div>
</template>

<style lang="scss">
.company-page-frame{
  opacity: 0;
  animation: fadeIn .8s .5s forwards;
  overflow: hidden;
}
.company-page-title-box{
  overflow: hidden;
  height: 100vh;
  position: relative;

  .bg-img{
    background-image: url('@/assets/images/background/company2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    filter: brightness(80%);
    height: 150%;
    width: 100%;
    position: relative;
    z-index: -1;
  }
  .company-page-title{
    color: white;
    font-size: 80px;
    font-weight: bold;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@media (max-width:919px){
  .company-page-title-box{
    .bg-img{
      background-position: center;
    }
    .company-page-title{
      font-size: 40px;
      top: 70%;
    }
  }
}

.company-page-content-box{
  padding: 50px 6% 100px;
  box-shadow: rgb(0, 0, 0) 10px 0px 100px;
}

.content-section-box{
  margin-bottom: 150px;
  // 小標題
  .section-title{
    letter-spacing: 0.1em;
    font-size: 34px;
    color: $subColor8;
  }
  .section-little-title{
    letter-spacing: 0.2em;
    font-weight: bold;
    color: $subColor8;
    position: relative;
    margin-bottom: 120px;

    &::before{
      content: '';
      width: 0;
      height: 2px;
      background: $linearColor;
      position: absolute;
      bottom: -50px;
      right: 0;
      transform-origin: right;
      transition: width 1s;
    }
  }
  .section-little-title.slideIn{
    &::before{
      width: 90%;
    }
  }

  // 概要
  .basic-information-table-box{
    display: flex;
    justify-content: end;

    table{
      max-width: 1000px;
      width: 100%;

      tr{
        display: block;
        padding: 20px 0;
        border-bottom: 1px solid $subColor4;
      }
      th{
        color: $subColor8;
        font-weight: bold;
        white-space: nowrap;
        width: 200px;
      }
      td{
        white-space: nowrap;
      }
    }
  }
  // 承諾
  .agreement-content-box{
    display: flex;
    justify-content: end;

    p{
      text-indent: 2em;
      line-height: 2;
      max-width: 1000px;
    }
  }
  // 地圖
  .map-box{
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .google-map{
      width: 100%;
      max-width: 1000px;
      height: 500px;
    }
    p{
      margin-top: 20px;
    }
  }
  // 追蹤
  .follow-text{
    text-align: end;
    margin-bottom: 30px;

    i{
      color: $subColor8;
      display: inline-block;
      animation: BounceToDown 1s ease-in infinite;
    }
  }
  .social-link{
    display: flex;
    justify-content: end;

    li{
      margin-right: 20px;

      .fb-link, .ig-link, .x-link{
        position: relative;
        background: $linearColor;
        width: 200px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 15px 0;

        &::before{
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200px;
          height: 400px;
          opacity: 0;
          transition: opacity .5s;
          border-radius: 15px 0;
        }
        i{
          color: white;
          font-size: 50px;
          display: inline-block;
          transition: all .5s;
        }
        &:hover{
          &::before{
            opacity: 1;
          }
          i{
            scale: 1.5;
          }
        }
      }
      .fb-link{
        margin-top: 40px;
        &::before{
          background: linear-gradient(45deg, rgb(196, 216, 241), rgb(55, 122, 185), rgb(26, 93, 156));
        }
      }
      .ig-link{
        margin-top: 20px;
        &::before{
          background: linear-gradient(45deg, rgb(247, 231, 86), rgb(197, 85, 113), rgb(190, 39, 77));
        }
      }
      .x-link{
        &::before{
          background: linear-gradient(45deg, rgb(112, 112, 112), rgb(24, 23, 23), rgb(0, 0, 0));
        }
      }
    }
  }
}
@media (max-width:919px){
  .content-section-box{
    .follow-text{
      text-align: center;
    }
    .social-link{
      flex-direction: column;
      align-items: center;

      li{
        margin: 0 0 20px 0;

        .fb-link, .ig-link, .x-link{
          width: 300px;
          height: 100px;
          margin: 0;

          &::before{
            width: 300px;
            height: 100px;
          }
        }
      }
    }
  }
}

.current-path{
  margin-bottom: 50px;
}
.to-page-top{
  transition: none; // 避免GSAP與元件預設衝突
}
</style>

<script>
import ToPageTop from '@/components/user/ToPageTop.vue'
import CurrentPath from '@/components/user/CurrentPath.vue'
import { Loader } from '@googlemaps/js-api-loader'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    ToPageTop,
    CurrentPath
  },
  data () {
    return {
      cTX: '',
      loader: null,
      map: null,
      marker: null
    }
  },
  methods: {
    scrollTriggerAnim () {
      this.cTX && this.cTX.revert()
      const companyTitleBox = this.$refs.companyTitleBox
      const littleTitles = [...document.getElementsByClassName('section-little-title')]

      this.cTX = gsap.context(() => {
        // bunner視差
        ScrollTrigger.create({
          trigger: companyTitleBox,
          start: 'top center',
          end: 'bottom center',
          onUpdate: (self) => {
            gsap.to('.bg-img', {
              y: self.progress * -200,
              ease: 'ease-in'
            })
            gsap.to('.company-page-title', {
              y: self.progress * -300
            })
          },
          onLeave: () => {
            gsap.to('.to-page-top', { opacity: 1 })
          },
          onEnterBack: () => {
            gsap.to('.to-page-top', { opacity: 0 })
          }
        })
        // 線條動畫
        littleTitles.forEach((item, i) => {
          ScrollTrigger.create({
            trigger: item,
            start: 'center 80%',
            onEnter: () => {
              item.classList.add('slideIn')
            }
          })
        })
      })
      ScrollTrigger.refresh()
    },
    resetScrollTrigger () {
      const littleTitles = [...document.getElementsByClassName('section-little-title')]
      littleTitles.forEach(item => {
        item.classList.remove('slideIn')
      })
    },
    initMap () { // google小地圖
      this.loader = new Loader({
        apiKey: 'AIzaSyCVD12beFxZVfLUPLhbJZG_dAbWmsJhzUM',
        version: 'weekly'
      })
      this.loader.load()
        .then(async () => {
          const google = window.google

          const { Map } = google.maps

          this.map = new Map(document.getElementById('map'), {
            center: { lat: 25.043614327684185, lng: 121.5574828664696 },
            zoom: 18,
            mapId: 'ce97dfd187bc490d'
          })
          // 標記
          this.marker = new google.maps.Marker({
            position: { lat: 25.043614327684185, lng: 121.5574828664696 },
            map: this.map,
            title: 'In my Light 燈具照明'
          })
        })
        .catch(e => {
          console.error('Error loading Google Maps API', e)
        })
    }
  },
  mounted () {
    document.title = '公司資訊-In My Light'
    setTimeout(() => {
      this.scrollTriggerAnim()
    }, 1000)
    this.initMap()
  },
  beforeUnmount () {
    this.resetScrollTrigger()
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
}
</script>
