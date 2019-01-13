<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/HI">HI</router-link>
      <router-link :to="{name:'HI1',params:{username:'bocsz'}}">HI1</router-link>
    </div>
    <!-- <p>{{ $route.name }}</p> -->
    <router-view name='left' style="float:left;background-color:#ccc;width:15%;height:300px"></router-view>
    <router-view style="float:left;background-color:#14416e;height:100%"></router-view>
    
    
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #14416e;
  margin-top: 60px;
}
</style>
