import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        isDev: true, //是否为开发环境
        //baseUrl:"http://localhost:3000/",//本地环境地址
        baseUrl: "http://39.106.166.212:3000/", //云环境地址
        visitCount: 0, //访问数
        nowIndex: 0,

    },
    getters: {

    },
    mutations: mutations,
    actions:actions

})

export default store
