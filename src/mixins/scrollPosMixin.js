export default {
  methods: {
    updateScrollPosition () {
      this.scrollPosition = window.pageYOffset
      console.log('update觸發', this.scrollPosition)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScrollPosition)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.updateScrollPosition)
    window.removeEventListener('resize', this.getSectionTops)
  }
}
