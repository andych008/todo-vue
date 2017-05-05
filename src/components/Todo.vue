<template>
  <div id="app">
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew">
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
      items: [],
      newItem:''
    }
  },
  methods: {
    toggleFinish(item) {
      item.isFinished=!item.isFinished;
    },
    addNew() {
      console.info(this.newItem);
      this.items.push({label:this.newItem, isFinished:false});
      this.newItem='';
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
