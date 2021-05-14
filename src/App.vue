<template>
  <div id="App">
    <Header />

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    

    <Footer />
  </div>
</template>

<script>
import './assets/css/style.css'
import Header from './components/UI/Header.vue'
import Footer from './components/UI/Footer.vue'
import Catalog from './components/Catalog.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
        Catalog
    }
  }
</script>

<style lang="scss" scoped>

</style>
