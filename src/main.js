import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' // 將axios綁定到this.$http中 讓axios可在其他元件中透過this.$http呼叫
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import { currency } from './methods/filters'

import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

// ↓設置一個自訂名稱為$filters的全域變數 內容為filters.js檔案內的各種方法
// (名稱建議加上$字號 以和元件內的區域變數作區別)
app.config.globalProperties.$filters = {
  currency
}
// ↑調用時以this.$filters.currency(或其他)呼叫 (在template內使用不須加上this.))
app.use(VueAxios, axios)
app.use(router)
app.component('Loading', Loading)
app.mount('#app')
