<template>
  <div id="app">
    <loading :loading.sync='loading'></loading>
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem">
    <input v-if="isCheckbox"
           v-model="items"
           type="checkbox">
  </div>
</template>

<script>
import Loading from '@/components/loading.vue'

export default {
  name: 'my-test',
  data() {
    return {
      title: 'This is my test',
      newItem:'',
      isCheckbox:true,
      item:true,
      items: '',
      loading: true
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  components: {
//    'nodata': Nodata,
//    'menu': Menu,
    'loading': Loading
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
