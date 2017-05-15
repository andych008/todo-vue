<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem">
    <input v-if="isCheckbox"
           v-model="items"
           type="checkbox">
  </div>
</template>

<script>
export default {
  name: 'my-test',
  data() {
    return {
      title: 'This is my test',
      newItem:'',
      isCheckbox:true,
      item:true,
      items: '',
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
