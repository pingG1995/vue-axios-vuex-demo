import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:undefined,
  },
  getters:{
    getName:state=>{
      return state.user.name;
    }
  },
  mutations: {
    login(state,payload){
      state.user=payload;
    },
    logout(state){
      state.user=undefined;
    }
  },
  actions: {
    login(context,payload){
      context.commit('login',payload);
    },
    logout(context){
      context.commit('logout');
    }
  },
  modules: {
  }
})