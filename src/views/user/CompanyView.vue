<template>
  <div>
    <div class="company-page-frame">
      <div class="company-page-title-box" ref="companyTitleBox">
        <div class="bg-img"></div>
        <h2 class="company-page-title">COMPANY INFORMATION</h2>
      </div>
      <div class="company-page-content-box">
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
                <td>1234 台灣台北市中山區光復北路100號</td>
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
          <h4 class="section-title"> Follow Us</h4>
          <h5 class="section-little-title">追蹤我們</h5>
          <p class="follow-text">了解更多資訊並保持更新，請關注我們的社交媒體<i class="bi bi-caret-down-fill"></i></p>
          <ul class="social-link">
            <li><router-link to="/"><i class="bi bi-facebook"></i></router-link></li>
            <li><router-link to="/"><i class="bi bi-instagram"></i></router-link></li>
            <li><router-link to="/"><i class="bi bi-twitter-x"></i></router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.company-page-title-box{
  overflow: hidden;
  height: 100vh;
  position: relative;

  .bg-img{
    background-image: url('@/assets/images/background/company2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    height: 150%;
    width: 100%;
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
.company-page-content-box{
  width: 80%;
  margin: 100px auto;
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
      width: 90%;
      height: 2px;
      background: $linearColor;
      position: absolute;
      bottom: -50px;
      right: 0;
    }
  }
  // 概要
  .basic-information-table-box{
    display: flex;
    justify-content: end;

    table{
      max-width: 800px;
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
      max-width: 800px;
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
      a{
        i{
          font-size: 50px;
          background: $linearColor;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
          transition: all .5s;
        }
      }
      &:hover{
        a{
          i{
            scale: 1.5;
          }
        }
      }
    }
  }
}

</style>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data () {
    return {
      cTX: ''
    }
  },
  methods: {
    scrollTriggerAnim () {
      this.cTX && this.cTX.revert()
      const companyTitleBox = this.$refs.companyTitleBox

      this.cTX = gsap.context(() => {
        // bunner視差
        ScrollTrigger.create({
          trigger: companyTitleBox,
          start: 'top center',
          onUpdate: (self) => {
            gsap.to('.bg-img', {
              y: self.progress * -200,
              ease: 'ease-in'
            })
            gsap.to('.company-page-title', {
              y: self.progress * -300
            })
          }
        })
      })
    }

  },
  mounted () {
    this.scrollTriggerAnim()
  }
}
</script>
