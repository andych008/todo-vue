import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todo from '@/components/Todo'

Vue.use(Router)

const Foo = { template: '<div>foo</div>' }
const User = {
  template: '<div><p>User {{ $route.params.id }}</p></div>'
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello-World',
      component: Hello
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/user/:id',
      component: User
    }
  ]
})
