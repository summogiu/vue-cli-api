export default {
  methods: {
    updateScrollPosition () {
      this.scrollPosition = window.pageYOffset
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScrollPosition)
    window.addEventListener('resize', this.getSectionTops)
    window.scrollTo(0, 0)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.updateScrollPosition)
    window.removeEventListener('resize', this.getSectionTops)
  }
}
