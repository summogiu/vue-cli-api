import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' // 將axios綁定到this.$http中 讓axios可在其他元件中透過this.$http呼叫
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { currency, date } from './methods/filters'
import pushMessage from './methods/pushToastMessage'
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import { email, required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

// ↓設置一個自訂名稱為$filters的全域變數 內容為filters.js檔案內的各種方法
// (名稱建議加上$字號 以和元件內的區域變數作區別)
app.config.globalProperties.$filters = {
  currency,
  date
}

app.config.globalProperties.$pushMessage = pushMessage
// ↑調用時以this.$filters.currency(或其他)呼叫 (在template內使用不須加上this.))

defineRule('required', required)
defineRule('email', email)

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
