<template>
  <div>
    <div class="consult-page-frame">
      <div class="consult-page-title-box">
        <h2><img src="@/assets/images/icon/consult-title-icon.png">CONSULT<h3>線上諮詢</h3></h2>
      </div>
      <div class="consult-page-content-box">
        <div class="consult-page-section-box">
          <h4>FAQ</h4>
          <h5>常見問題</h5>
          <div class="faq-box" v-for="item,i in faq" :key="i">
            <h6 :ref="item.refName">{{ item.name }}</h6>
            <ul>
              <li v-for="qa,qaIndex in item.qa" :key="qaIndex">
                <div class="questions" @click="toggleActive(qa.questions)">
                  <span class="questions-icon">Q</span>
                  <p>{{ qa.questions }}</p>
                  <div class="expand-icon-center">
                    <transition name="clockwise">
                      <span v-if="!activeQA.includes(qa.questions)" class="expand-icon"><i class="bi bi-plus"></i></span>
                      <span v-else class="expand-icon"><i class="bi bi-dash"></i></span>
                    </transition>
                  </div>
                </div>
                <div class="answer" :class="[activeQA.includes(qa.questions) ? 'slide' : '']">
                  <span class="answer-icon">A</span>
                  <p>{{ qa.answer }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="consult-page-section-box">
          <h4 ref="form">OTHER PROBLEMS</h4>
          <h5>線上提問表單</h5>
          <Form action="" class="form-box" @submit="toggleUserFormbox(true)">
            <label for="type">
              <span class="label-title">提問類別</span>
              <ErrorMessage name="類別" class="verify-tip"></ErrorMessage>
              <Field id="type" as="select" name="類別" rules="required" v-model="form.type">
                <option value="" Fielded disabled>請選擇類別</option>
                <option value="產品相關">產品相關</option>
                <option value="訂單、配送相關">訂單、配送相關</option>
                <option value="安裝、維修相關">安裝、維修相關</option>
                <option value="其他問題">其他問題</option>
              </Field>
            </label>
            <label for="order-id">
              <span class="label-title">訂單編號(選填)</span>
              <input type="text" id="order-id" placeholder="提供訂單編號可更快速為您處理問題" v-model="form.orderId">
            </label>
            <label for="name">
              <span class="label-title">姓名</span>
              <ErrorMessage name="姓名" class="verify-tip"></ErrorMessage>
              <Field type="name" id="name" name="姓名" rules="required" placeholder="請輸入姓名" v-model="form.name"></Field>
            </label>
            <label for="email">
              <span class="label-title">電子郵件(選填)</span>
              <input type="mail" id="email" placeholder="請輸入電子信箱" v-model="form.email">
            </label>
            <label for="number">
              <span class="label-title">連絡電話</span>
              <ErrorMessage name="電話" class="verify-tip"></ErrorMessage>
              <Field type="phone" id="number" name="電話" rules="required" placeholder="請輸入電話號碼" v-model="form.phone"></Field>
            </label>
            <label for="question-content">
              <span class="label-title">提問內容</span>
              <ErrorMessage name="提問內容" class="verify-tip"></ErrorMessage>
              <Field id="question-content" as="textarea" name="提問內容" rules="required" placeholder="請描述您的疑問" v-model="form.questionContent"></Field>
            </label>
            <button class="submit-btn" type="submit">提交</button>
          </Form>
        </div>
      </div>
      <transition name="fadeScale">
        <div class="user-form-box" v-if="isUserFormEnter">
          <h6>親愛的{{form.name }}, 您好！<br>您的提問已送出, <br>我們將會儘快為您回覆！</h6>
          <table>
            <tr>
              <th>提問類別</th>
              <th>訂單編號</th>
            </tr>
            <tr>
              <td>{{ form.type }}</td>
              <td>{{ form.orderId }}</td>
            </tr>
            <tr>
              <th>連絡電話</th>
              <th>電子郵件</th>
            </tr>
            <tr>
              <td>{{ form.phone }}</td>
              <td>{{ form.email }}</td>
            </tr>
            <tr>
              <th>提問內容</th>
            </tr>
            <tr>
              <td>{{ form.questionContent }}</td>
            </tr>
          </table>
          <button type="button" @click="toggleUserFormbox(false)">確定</button>
        </div>
      </transition>
    </div>
    <ul class="section-tag-list" :class="[isMBTagListOpen ? 'open' : '']">
        <li class="tag" @click="scrollToSection('product')">產品資訊</li>
        <li class="tag" @click="scrollToSection('order')">訂單與配送</li>
        <li class="tag" @click="scrollToSection('install')">安裝與維護</li>
        <li class="tag" @click="scrollToSection('company')">公司資訊</li>
        <li class="tag" @click="scrollToSection('form')">線上提問表單</li>
    </ul>
    <button class="MB-section-tag-open-btn" @click="MBTagListOpen"><i class="bi bi-tags-fill"></i></button>
  </div>
</template>

<style lang="scss">
html,body {
  scroll-behavior: auto !important;
}
.consult-page-frame{
  opacity: 0;
  animation: fadeIn .8s .5s forwards;
}
.consult-page-title-box{
  padding: 100px 5%;
  background-size: 200px;

  h2{
    font-size: 60px;
    font-weight: bold;
    color: $subColor8;
    max-width: 500px;
    position: relative;
  }
  h3{
    font-size: 20px;
    color: $subColor8;
    position: absolute;
    bottom: -20px;
    right: 0;
  }
}
@media (max-width:919px){
  .consult-page-title-box{
    h2{
      max-width: 280px;
      margin: 0 auto;
    }
  }
}

.section-tag-list{
  position: fixed;
  left: 5%;
  bottom: 5%;
  z-index: 150;

  .tag{
    position: relative;
    font-size: 20px;
    font-weight: bold;
    color: $subColor4;
    transition: color .5s;
    cursor: pointer;

    &::before{
      content: '';
      position: absolute;
      top: 50%;
      left: -30px;
      height: 2px;
      width: 10px;
      background-color: $subColor4;
      transition: width .5s, background-color .5s;
    }
  }
  .tag.active{
    color: $subColor8;

    &::before{
      width: 20px;
      background-color: $subColor8;
    }
  }
}
.MB-section-tag-open-btn{
  display: none;
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: $linearColor;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  z-index: 150;

  i{
    font-size: 24px;
    color: white;
  }
}
@media (max-width:919px){
  .section-tag-list{
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .tag{
      &::before{
        display: none;
      }
    }
  }
  .MB-section-tag-open-btn{
    display: block;
  }
  .section-tag-list.open{
    opacity: 1;
    visibility: visible;
  }
}

.consult-page-content-box{
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .consult-page-section-box{
    width: 70%;
    margin-right: 5%;
    margin-bottom: 200px;

    h4{
      font-size: 60px;
      font-weight: bold;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    h5{
      font-size: 26px;
      font-weight: bold;
    }
    .faq-box{
      margin-top: 50px;
      h6{
        font-size: 30px;
        font-weight: bold;
        position: relative;

        &::before{
          content: '';
          height: 3px;
          width: 60px;
          background-color: $subColor8;
          position: absolute;
          bottom: -10px;
          left: 0;
        }
      }
      ul{
        li{
          .questions{
            font-weight: bold;
            padding: 30px 50px;
            border-bottom: 1px solid $subColor4;
            display: flex;
            justify-content: space-between;
            position: relative;
            cursor: pointer;

            .expand-icon-center{
              position: relative;

              .expand-icon{
                position: absolute;
                top: 0;
                right: 0;
                font-size: 24px;
                line-height: 1;
                height: 24px;
              }
            }
            p{
              transition: color .3s;
            }
            &:hover{
              p{
                color: $subColor3;
              }
            }
          }
          .answer{
            background: $subColor10;
            max-height: 0;
            transition: max-height .5s;
            overflow: hidden;
            display: flex;
            position: relative;

            p{
              padding: 30px 50px;
              border-bottom: 1px solid $subColor4;
            }
          }
          .answer.slide{
            max-height: 100px;
          }
          // Q&A icon
          .questions-icon, .answer-icon{
            font-size: 36px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin-right: 20px;
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
          }
          .answer-icon{
            color: $subColor8;
          }
        }
      }
    }
    .form-box{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 50px;

      label{
        display: flex;
        justify-content: space-between;
        align-items: start;
        width: 100%;
        position: relative;

        .label-title{
          min-width: 150px;
          border-bottom: 1px solid $subColor4;
          padding: 20px 0;
          margin-right: 20px;
          font-size: 20px;
          color: $subColor8;
        }
        .verify-tip{
          position: absolute;
          top: 50px;
          left: 0;
          color: $subColor6;
          font-size: 14px;
        }
        input, select{
          width: 80%;
          outline: none;
          border: none;
          border-bottom: 1px solid $subColor4;
          padding: 20px 0;
          font-size: 20px;
        }
        select{
          padding-bottom: 26px;
        }
        textarea{
          margin-top: 20px;
          padding: 20px;
          resize: none;
          width: 80%;
          height: 300px;
          outline: none;
          border: 1px solid $subColor4;
          border-radius: 15px;
          font-size: 20px;
        }
      }
      .submit-btn{
        background: $linearColor;
        color: white;
        border: none;
        border-radius: 25px;
        width: 200px;
        height: 50px;
        margin-top: 30px;

        &:hover{
          animation: flash .2s;
        }
      }
    }
  }
}
@media (max-width:919px){
  .consult-page-content-box{
    align-items: center;

    .consult-page-section-box{
      width: 90%;
      margin: 0 5% 200px;

      .faq-box{
        ul{
          li{
            .questions{
              padding: 30px 5px 30px 50px;
            }
            .answer.slide{
              max-height: 200px;
            }
          }
        }
      }
      .form-box{
        label{
          flex-direction: column;

          .label-title{
            border: none;
          }
          input, select{
            border: 1px solid $subColor4;
            width: 100%;
            font-size: 16px;
          }
          textarea{
            width: 100%;
            font-size: 16px;
          }
        }
        .submit-btn{
          margin: 30px auto;
        }
      }
    }
  }
}
.user-form-box{
  box-shadow: 0px 0px 15px gray;
  border-radius: 25px;
  width: 80%;
  max-width: 800px;
  background-color: white;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h6{
    background: $linearColor2;
    color: white;
    font-size: 20px;
    text-align: center;
    padding: 20px;
  }
  table{
    display: block;
    padding: 20px;

    tr{
      display: flex;
      justify-content: space-around;

      th{
        font-weight: bold;
        color: $subColor8;
      }
      td{
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  button{
    display: block;
    margin: 0 auto 20px;
    background-color: $subColor8;
    color: white;
    padding: 10px 25px;
    border-radius: 25px;
    border: none;
    outline: none;
  }
}
</style>

<script>
import { gsap } from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export default {
  data () {
    return {
      faq: [
        {
          name: '產品資訊',
          refName: 'product',
          qa: [
            {
              questions: '燈具有哪些種類？',
              answer: '我們提供多種類型的燈具，包括北歐現代風格、經典水晶燈、工業風格和手工布藝燈。每種風格都有其獨特的設計和特點，適合不同的裝修風格和需求。'
            },
            {
              questions: '燈具使用了什麼材料？',
              answer: '我們的燈具採用高品質的材料，包括金屬、玻璃、水晶、木材等，確保每件產品都具有優良的耐用性和美觀性。'
            },
            {
              questions: '燈具的保修期是多久？',
              answer: '我們的燈具通常提供一年的保修期。在此期間，若出現任何品質問題，我們將免費進行維修或更換。'
            },
            {
              questions: '是否可以訂購訂製燈具？',
              answer: '是的，我們提供燈具訂製服務。您可以根據自己的需求和喜好，與我們的設計師溝通，我們會為您量身訂製合適的燈具。'
            }
          ]
        },
        {
          name: '訂單與配送',
          refName: 'order',
          qa: [
            {
              questions: '如何下訂單？',
              answer: '您可以透過我們的網站在線下單，選擇您喜歡的產品，填寫相關資訊並完成支付。也可以透過電話或電子郵件與我們的客服團隊聯繫進行訂單處理。'
            },
            {
              questions: '訂單配送需要多長時間？',
              answer: '一般情況下，我們的標準配送時間為3-7個工作日，具體時間取決於您的所在地區和產品的庫存情況。'
            },
            {
              questions: '是否可以追蹤我的訂單？',
              answer: '是的，一旦您的訂單發貨，我們會提供一個追蹤號碼，您可以透過我們的配送合作夥伴網站實時查看訂單狀態。'
            },
            {
              questions: '如何處理訂單中的問題？',
              answer: '如果您在訂單中遇到任何問題，例如產品損壞或訂單錯誤，請及時聯繫我們的客服團隊，我們將盡快為您解決問題。'
            }
          ]
        },
        {
          name: '安裝與維護',
          refName: 'install',
          qa: [
            {
              questions: '燈具安裝是否提供服務？',
              answer: '我們提供燈具安裝服務，但僅限於某些地區。請在購買前與我們的客服確認是否提供安裝服務及相關費用。'
            },
            {
              questions: '如何清潔和維護燈具？',
              answer: '我們建議使用乾淨、柔軟的布料定期擦拭燈具，避免使用腐蝕性清潔劑。對於有特殊材料或設計的燈具，請參考隨附的清潔說明。'
            },
            {
              questions: '如果燈具出現故障怎麼辦？',
              answer: '如果您的燈具出現任何故障，請首先檢查是否為電源問題。如果問題依然存在，請聯繫我們的售後服務團隊，我們將為您提供維修或更換服務。'
            },
            {
              questions: '如何更換燈泡？',
              answer: '不同類型的燈具有不同的更換方法，請參閱燈具的使用說明書。在更換燈泡時，請務必先切斷電源，以確保安全。'
            }
          ]
        },
        {
          name: '公司資訊',
          refName: 'company',
          qa: [
            {
              questions: '你們的營業時間是什麼時候？',
              answer: '我們的營業時間為週一至週五，上午9:00至下午6:00，週六日休息。如有需要，您可以透過電話或電子郵件與我們聯繫。'
            },
            {
              questions: '如何聯繫公司？',
              answer: '您可以透過電話、電子郵件或我們的官方網站上的聯繫表單與我們聯繫。我們的客服團隊將儘快回覆您的詢問。'
            }
          ]
        }
      ],
      activeQA: [],
      form: {
        type: '',
        orderId: '',
        name: '',
        email: '',
        phone: '',
        questionContent: ''
      },
      nowTag: null,
      isUserFormEnter: false,
      isMBTagListOpen: false
    }
  },
  methods: {
    toggleActive (questions) { // FAQ開關
      if (this.activeQA.includes(questions)) {
        this.activeQA = this.activeQA.filter(i => i !== questions)
      } else {
        this.activeQA.push(questions)
      }
    },
    scrollToSection (refName) { // 標籤滾動
      this.isMBTagListOpen = false
      const section = this.$refs[refName]
      gsap.to(window, {
        scrollTo: { y: section, offsetY: 50 },
        duration: 1,
        ease: 'power2.out'
      })
    },
    addTagActive () { // Tag中的樣式
      const refs = Object.values(this.$refs)
      const tags = Array.from(document.getElementsByClassName('tag'))
      console.log(refs.length, tags.length)
      refs.forEach((ref, i) => {
        ScrollTrigger.create({
          trigger: ref,
          start: 'top center',
          end: 'center top',
          onUpdate: () => {
            if (this.nowTag !== null && this.nowTag !== i) {
              tags[this.nowTag] && tags[this.nowTag].classList.remove('active')
            }
            this.nowTag = i
            tags[i] && tags[this.nowTag].classList.add('active')
          }
        })
      })
    },
    toggleUserFormbox (state) { // 提交表單後提示訊息
      this.isUserFormEnter = state
      if (!state) {
        this.form.type = ''
        this.form.orderId = ''
        this.form.name = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.questionContent = ''
      }
    },
    MBTagListOpen () {
      this.isMBTagListOpen = !this.isMBTagListOpen
    }
  },
  created () {
    this.form.type = this.$route.query.askType
  },
  mounted () {
    document.title = '線上諮詢-In My Light'
    this.addTagActive()
    if (this.form.type) {
      gsap.to(window, {
        scrollTo: { y: this.$refs.form, offsetY: 50 },
        duration: 1,
        ease: 'power2.out'
      })
    }
  }
}
</script>
