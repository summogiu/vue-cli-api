<template>
  <div class="to-page-top">
      <a href="#" @click.prevent="scrollToTop">
        <img src="@/assets/images/icon/up2.png" alt="">
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
  opacity: 0;
  transition: all .5s;

  img{
    height: 160px;
    transition: opacity .2s;
  }
  &:hover{
    animation: floatUp .5s forwards;
    img{
      animation: flash .5s linear;
    }
  }
}
@media (max-width:919px){
  .to-page-top{
    display: none;
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
