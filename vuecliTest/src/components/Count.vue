<template>
<div>
    <h1>{{msg}}</h1>
    <hr>
    <h2>{{$store.state.count}}-{{count}}-{{countc}}</h2>
    <div>
        <button @click="$store.commit('add')">+</button>
        <!-- <button @click="$store.commit('add')">+10</button> -->
        <!-- <button @click="$store.commit('reducen',2)">-</button> -->
        <button @click="reducen(2)">-</button>
    </div>
</div>
</template>

<script>
import store from '@/vuex/store'
import {
    mapState,
    mapMutations,
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            msg: 'hello vuex'
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
    computed: {
        ...mapState(['count']),
        /* countc(){
            return this.$store.getters.countc;
        } */
        // countc:function(){return this.$store.getters.countc;}
        ...mapGetters(['countc'])
    },
    
    methods: mapMutations(['reduce', 'reducen', 'add'])

}
</script>
