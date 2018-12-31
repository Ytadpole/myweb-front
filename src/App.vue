<template>

  <div id="app">
    <Header  />
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    Header,
    Footer,

  }
}
</script>

<style>
</style>
