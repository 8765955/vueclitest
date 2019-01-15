<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/HI">HI</router-link>|
      <router-link :to="{name:'HI1',params:{username:'bocsz'}}">HI1</router-link>|
      <router-link to="/params/122/thisis content">用url传参</router-link>|
      <router-link to="/goHome">redirect跳回首页</router-link>|
      <router-link to="/goParams/111/redirect to params">redirect跳回用url传参</router-link>|
      <router-link to="/HIalias">HIalias</router-link>|
      <router-link to="/xxx">404链接</router-link>|
    </div>
    <!-- <p>{{ $route.name }}</p> -->
    <router-view name="left" style="float:left;background-color:#ccc;width:15%;height:300px"></router-view>
    <transition name="fade" mode="out-in">
      <router-view style="float:left;background-color:white;height:100%"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goForward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #38126b;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
