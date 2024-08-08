export default {
  data () {
    return {
      followProducts: []
    }
  },
  watch: {
    '$route.params.category' () {
      this.loadFollowProducts()
    },
    '$route.params.productid' () {
      this.loadFollowProducts()
    }
  },
  methods: {
    loadFollowProducts () { // 初始化、載入localStorage
      try {
        const storedData = localStorage.getItem('followArray')
        this.followProducts = storedData ? JSON.parse(storedData) : []
      } catch (error) {
        console.error('Error loading from localStorage', error)
        this.followProducts = []
      }
    },
    addFollow (item) { // 增加、移除關注
      if (!Array.isArray(this.followProducts)) { // 確保可以讀取this.followProducts
        this.followProducts = []
      }

      const index = this.followProducts.findIndex(followedItem => followedItem.id === item.id)

      if (index !== -1) {
        this.followProducts.splice(index, 1)
      } else {
        this.followProducts.unshift(item)
      }

      try { // 更新localStorage
        localStorage.setItem('followArray', JSON.stringify(this.followProducts))
      } catch (error) {
        console.error('Error saving to localStorage', error)
      }
    },
    isFollowed (item) { // 判斷是否為關注狀態
      return this.followProducts ? this.followProducts.some(followedItem => followedItem.id === item.id) : false
    }
  },
  created () {
    this.loadFollowProducts()
  }
}
