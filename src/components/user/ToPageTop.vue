<template>
  <div class="to-page-top">
      <a href="#" @click.prevent="scrollToTop">
        <i class="bi bi-caret-up"></i>
        <p>
          TOP
        </p>
      </a>
    </div>
</template>

<style lang="scss">
.to-page-top{
  position: fixed;
  z-index: 100;
  line-height: 0;
  bottom: 20px;
  left: 20px;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all .5s;

  i,p{
    color: $subColor;
  }
  i{
    font-size: 36px;
  }
  p{
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
  }
}
</style>

<script>
import scrollPosMixin from '@/mixins/scrollPosMixin'

export default {
  data () {
    return {
      scrollPosition: 0
    }
  },
  mixins: [scrollPosMixin],
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
