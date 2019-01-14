<template>
  <div>
    <h1>{{ msg }}- id:{{ $route.params.id}},content:{{ $route.params.content}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Params',
  data () {
    return {
      msg: 'This params page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
} */

</style>
