const STORAGE_KEY_TODO = 'todos'
export default {
  fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY_TODO) || '[]')
  },
  save(items) {
    window.localStorage.setItem(STORAGE_KEY_TODO, JSON.stringify(items))
  }
}
