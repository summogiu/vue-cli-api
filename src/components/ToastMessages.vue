<template>
  <div class="toast-container position-absolute pe-3 top-0 ">
    <Toast v-for="(item, i) in messages" :key="i" :msg="item"></Toast>
  </div>
</template>

<script>
import Toast from '@/components/ToastComponents.vue'

export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
