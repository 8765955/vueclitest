import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
const TokenKey = 'Admin-Token'
Vue.use(Vuex);

const state={
    count:3,
    token:''
}

const mutations={
    /* add(state){
        state.count++;
    }, */
    add:state=>state.count++,
    SETTOKEN(state,token){
        state.token=token;
    },
    reduce(state){
        state.count--;
    },
    // 传参写法
    reducen:(state,n)=>state.count-=n
}

const actions={
    setToken({ commit },token) {
        return new Promise((resolve, reject) => {
            commit('SETTOKEN', token)
            Cookies.set(TokenKey, token)
            resolve()
          })

      }
    }

const getters={
    countc:function(state){
        return state.count+=10
    }
}

export default new Vuex.Store({
    state,mutations,getters,actions
})