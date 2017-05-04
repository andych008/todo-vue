<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}" @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      title: 'This is a todo list',
      items: [
        {label:"todo1", isFinished:true},
        {label:"todo2", isFinished:false},
      ]
    }
  },
  methods: {
    toggleFinish(item) {
      item.isFinished=!item.isFinished;
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
.finished {
  text-decoration: underline;
}
</style>
