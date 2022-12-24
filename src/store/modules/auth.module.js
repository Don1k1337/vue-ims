const TOKEN_KEY = 'jwt-token'

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        LOGOUT(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        }
    },
    actions: {
      async login({ commit }, payload) {
          commit('SET_TOKEN', 'Test token')
      }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token
        }
    }
}