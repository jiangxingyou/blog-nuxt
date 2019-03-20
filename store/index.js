import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isDev:true,
    //baseUrl:"http://localhost:3000/",//本地环境地址
    baseUrl:"http://39.106.166.212:3000/",//云环境地址
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