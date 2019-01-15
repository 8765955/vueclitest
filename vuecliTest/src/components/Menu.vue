<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>1.xxxx</li>
      <li>2.xxxx</li>
      <li>3.xxxx</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Menu Page'
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
