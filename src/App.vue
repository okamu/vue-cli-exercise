<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <button-material></button-material>
  </div>
</template>

<script>
//comment追加
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'
export default {
  name: 'app',
  components: {
    'hello': HelloWorld,
    'button-material': Button
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
