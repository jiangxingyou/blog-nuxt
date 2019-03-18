import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    baseUrl:"http://localhost:3000/",//环境地址
    visitCount:0,
    nowIndex:0,
  },
  mutations: {
    increment (state) {
      state.nowIndex++
    },
    
  }
})

export default store