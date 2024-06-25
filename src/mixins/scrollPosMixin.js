export default {
  methods: {
    updateScrollPosition () {
      this.scrollPosition = window.pageYOffset
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScrollPosition)
    window.addEventListener('resize', this.getSectionTops)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.updateScrollPosition)
    window.removeEventListener('resize', this.getSectionTops)
  }
}
