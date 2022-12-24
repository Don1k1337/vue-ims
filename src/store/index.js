import { createStore, createLogger } from 'vuex'
import auth from "../store/modules/auth.module"

const plugins = []
// checking logger
if(process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

export default createStore({
  plugins,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth
  }
})
