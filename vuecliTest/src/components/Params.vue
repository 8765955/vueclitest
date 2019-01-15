<template>
  <div>
    <h1>{{ msg }}- id:{{ $route.params.id}},content:{{ $route.params.content}}</h1>
  </div>
</template>

<script>
export default {
  name: "Params",
  data() {
    return {
      msg: "This params page"
    };
  },
  // 在模板中添加钩子
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* h1, h2 {
  font-weight: normal;
} */
</style>
