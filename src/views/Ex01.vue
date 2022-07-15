<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" v-model="title">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello World'
    }
  },setup() {
    
  },
  mounted() {
    alert(this.title)
    let val = 11
    alert(val)
  },
}
</script>

<style scoped>

</style>