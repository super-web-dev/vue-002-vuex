<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>App.vue</h1>
    <input type="text" name="vuex-test-text" v-model="test_data">
    <HelloWorld msg="Component 1: HelloWorld.vue"/>
    <HelloVue msg="Component 2: HelloVue.vue"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloVue from './components/HelloVue.vue'

import { ACTION_TEST } from './store/actions/action_test'

export default {
  name: 'app',
  components: {
    HelloWorld,
    HelloVue
  },
  data: function(){
    return {
      test_data: ''
    }
  },
  watch: {
    test_data: function (value) {
      this.$store.dispatch(ACTION_TEST, value)
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
