<template>
  <div>
    <ul class="current-path">
        <li><router-link to="/frontPage"><i class="bi bi-house home-i"></i></router-link></li>
        <li v-for="(item, i) in currentPaths" :key="i" >
          <i class="bi bi-chevron-right" v-if="i !== 0"></i>
          <router-link :to="item.path" v-if="i !== currentPaths.length - 1 && i !== 0">{{item.name}}
          </router-link></li>
        <li><span>{{ this.$route.name }}</span></li>
      </ul>
  </div>
</template>

<style lang="scss">
  .current-path{
  display: flex;
  justify-content: end;
  align-items: center;

  li{
    margin: 0 5px;
  }
  i{
    color: $subColor3;
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
        } else {
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
