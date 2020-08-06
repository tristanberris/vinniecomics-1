import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async sendEmail({commit, dispatch}, emailData){
      try {
        let res = await api.post("Keeps", emailData)
        dispatch("getPosts")
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
