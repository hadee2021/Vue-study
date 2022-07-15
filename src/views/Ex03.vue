<template>
  <div>
    <img :src="url" style="height:100px; width:auto;"/> <br>
    <input type="text" v-model="textValue" />
    <button type="button" :disabled="textValue === ''">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://kr.vuejs.org/images/logo.png",
      textValue: '',
    }
  },
}
</script>

<style>

</style>