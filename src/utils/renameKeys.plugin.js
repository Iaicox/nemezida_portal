export default {
  install(Vue) {
    Vue.prototype.$renameKeys = function(obj, newKeys) {
      const keyValues = Object.keys(obj).map(key => {
        const newKey = newKeys[key] || key
        return { [newKey]: obj[key] }
      })
      return Object.assign({}, ...keyValues)
    }
  }
}