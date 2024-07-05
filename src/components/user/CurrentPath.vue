<template>
  <div>
    <ul class="current-path">
        <li><router-link to="/frontPage"><i class="bi bi-house home-i"></i></router-link></li>
        <li v-for="(item, i) in currentPaths" :key="i" >
          <div v-if="i !== currentPaths.length - 1 && i !== 0 && item.name !== this.$route.name">
            <i class="bi bi-chevron-right"></i>
            <router-link :to="item.path">{{item.name}}</router-link>
          </div>
        </li>
        <li><i class="bi bi-chevron-right"></i><span>{{ this.$route.name }}</span></li>
      </ul>
  </div>
</template>

<style lang="scss">
  .current-path{
  display: flex;
  justify-content: end;
  align-items: center;

  i{
    color: $subColor3;
    margin: 0 5px;
  }
  .home-i{
    font-size: 26px;
  }
}
</style>

<script>
export default {
  data () {
    return {
      currentPath: {
        name: '',
        path: ''
      },
      currentPaths: []
    }
  },
  watch: {
    '$route.params.category': {
      handler (category) {
        if (category === 'all') {
          this.$router.currentRoute.value.name = '所有產品'
        } else if (this.$route.params.category) {
          this.$router.currentRoute.value.name = this.$route.params.category
        }
        this.getCurrentPath()
      },
      immediate: true
    }
  },
  methods: {
    getCurrentPath () {
      this.currentPaths = this.$route.matched
      console.dir(this.$route)
    }
  },
  created () {
    this.getCurrentPath()
  }
}
</script>
