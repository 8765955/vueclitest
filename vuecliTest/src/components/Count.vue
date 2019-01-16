<template>
    <div>
        <h1>{{msg}}</h1>
        <hr>
        <h2>{{$store.state.count}}-{{count}}</h2>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
    </div>
</template>
<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            msg:'hello vuex'
        }
    },
    store,
    /* computed: {
        count(){
            return this.$store.state.count;
        }
    }, */
    /* computed: mapState({
        count:state=>state.count
    }), */
    computed: mapState(['count']),
}
</script>