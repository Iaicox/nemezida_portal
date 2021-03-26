import Vue from 'vue'
const { _events, $on, $off, $emit } = new Vue()
export default { _events, on: $on, off: $off, emit: $emit }