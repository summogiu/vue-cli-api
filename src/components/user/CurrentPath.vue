<template>
  <div>
    <ul class="current-path">
        <li><router-link to="/frontPage"><i class="bi bi-house home-i"></i></router-link></li>
        <li v-for="(item, i) in currentPaths" :key="i" >
          <div v-if="i !== currentPaths.length - 1 && i !== 0 && item.name !== this.$route.name">
            <i class="bi bi-chevron-right"></i>
            <a href="#" @click.prevent="toPath(item.path)">{{item.name}}</a>
          </div>
        </li>
        <li><i class="bi bi-chevron-right"></i><span>{{ routeName }}</span></li>
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
  a{
    color: black;
    &:hover{
      color: $subColor3;
    }
  }
}

@media (max-width:414px){
  .current-path{
    li{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>

<script>
import emitter from '@/methods/emitter'

export default {
  data () {
    return {
      currentPaths: [],
      routeName: this.$route.name
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
    },
    '$route.name' (newName) {
      this.routeName = newName
    }
  },
  mixins: [emitter],
  methods: {
    getCurrentPath () {
      this.currentPaths = this.$route.matched
      console.dir(this.$route)
    },
    getCurrentPathName (name) { // 接收單一產品頁面的路徑名稱
      console.log('接收到', name)
      this.routeName = name
    },
    toPath (path) {
      this.$router.push(`${path}`)
      window.scrollTo(0, 0)
    }
  },
  created () {
    emitter.on('pageName', this.getCurrentPathName)
    this.getCurrentPath()
  }
}
</script>
