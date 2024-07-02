<template>
  <div>
    <ul v-for="(item, i) in currentPaths" :key="i" class="current-path">
        <li><router-link to="/frontPage"><i class="bi bi-house home-i"></i></router-link></li>
        <li>
          <i class="bi bi-chevron-right"></i>
          <router-link :to="item.path" v-if="i !== currentPaths.length - 1">{{item.name}}
          </router-link></li>
        <li><span v-if="i === currentPaths.length - 1">{{ item.name }}</span></li>
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
  props: ['name', 'curPaths'],
  data () {
    return {
      currentPath: {
        name: '',
        path: ''
      },
      currentPaths: []
    }
  },
  methods: {
    getCurrentPath () {
      this.currentPath.name = this.name
      this.currentPath.path = this.$route.path
      this.currentPaths = this.curPaths
      this.currentPaths.push(this.currentPath)
      console.log(this.currentPath)
    }
  },
  created () {
    this.getCurrentPath()
  }
}
</script>
