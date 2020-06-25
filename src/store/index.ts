import Vue from 'vue'
import Vuex from 'vuex'
import {mapState} from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:undefined,
  },
  // getters:{
  //   getName:state=>{
  //     return state.user.name;
  //   }
  // },
  mutations: {
    login(state,payload){
      state.user=payload;
    },
    logout(state){
      state.user=undefined;
    }
  },
  actions: {
    login({commit},payload){
      commit('login',payload);
    },
    logout({commit}){
      commit('logout');
    }
  },
  modules: {
  }
})