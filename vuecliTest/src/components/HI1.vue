<template>
  <div>
    <h1>{{ msg }}-{{ $route.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HI1',
  data () {
    return {
      msg: 'This HI Page 1'
    }
  },
  mounted (){
    //console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
} */

</style>
