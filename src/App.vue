<template>
  <div>
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  components:{
    Footer

  }
}
</script>
<style>

</style>
