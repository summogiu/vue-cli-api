export default {
  data () {
    return {
      followProducts: []
    }
  },
  watch: {
    '$route.params.category' () {
      this.followProducts = JSON.parse(localStorage.getItem('followArray'))
    },
    '$route.params.productid' () {
      this.followProducts = JSON.parse(localStorage.getItem('followArray'))
    }
  },
  methods: {
    addFollow (item) { // 增加、移除關注
      const index = this.followProducts.findIndex(followedItem => followedItem.id === item.id)

      if (index !== -1) {
        this.followProducts.splice(index, 1)
      } else {
        this.followProducts.unshift(item)
      }

      try {
        localStorage.setItem('followArray', JSON.stringify(this.followProducts))
      } catch (error) {
        console.error('Error saving to localStorage', error)
      }
    },
    isFollowed (item) { // 判斷是否為關注狀態
      return this.followProducts.some(followedItem => followedItem.id === item.id)
    }
  },
  created () {
    try {
      this.followProducts = JSON.parse(localStorage.getItem('followArray')) || []
    } catch (error) {
      console.error('Error loading from localStorage', error)
    }
  }
}
