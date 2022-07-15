<template>
  <div>
    <h1>{{fullName}}</h1>
    <input type="text" v-model="lastName">
    <input type="text" v-model="firstName">
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '재석',
      lastName: '유',
    }
  },
  computed: {
    fullName() {
      return this.lastName + this.firstName
    },
  }
}
</script>

<style>

</style>