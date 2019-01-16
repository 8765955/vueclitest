import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
    count:3
}

const mutations={
    /* add(state){
        state.count++;
    }, */
    add:state=>state.count++,
    reduce(state){
        state.count--;
    },
    // 传参写法
    reducen:(state,n)=>state.count-=n
}

const getters={
    countc:function(state){
        return state.count+=10
    }
}

export default new Vuex.Store({
    state,mutations,getters
})