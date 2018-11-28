<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Lista from './components/Lista'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Lista
  },
  data () {
    return {
      titulo: 'PROGRAMA LISTAS 123'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
</style>