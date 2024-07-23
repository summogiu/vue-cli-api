import LocomotiveScroll from 'locomotive-scroll'

export default {
  date () {
    return {
      scroll: '',
      locomotiveScrollPosition: 0
    }
  },
  methods: {
    initScroll () {
      this.scroll = new LocomotiveScroll({
        el: this.$refs.scrollContainer,
        smooth: true,
        repeat: true,
        lerp: 0.1,
        multiplier: 0.5
      })
      this.updateScroll()
    },
    updateScroll () {
      this.scroll.update()
    }
  },
  mounted () {
    this.initScroll()
    window.addEventListener('resize', this.updateScroll)
    this.scroll.on('scroll', (obj) => {
      this.locomotiveScrollPosition = obj.scroll.y
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.updateScroll)
    if (this.scroll) {
      this.scroll.destroy()
      this.scroll = null
    }
  }
}
