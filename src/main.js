import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios' // 將axios綁定到this.$http中 讓axios可在其他元件中透過this.$http呼叫
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
