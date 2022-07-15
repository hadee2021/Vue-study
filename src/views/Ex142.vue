<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="state.num1">
      <span> + </span>
      <input type="text" v-model.number="state.num2">
      <span> = </span>
      <span>{{state.result}}</span>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => state.num1 + state.num2)
    })

    let flag = reactive({
      flagA: true,
      flagB: false,
      result2: computed(() => flag.flagA && flag.flagB)
    })

    return {
      state,
      flag
    }
  }, /*
  data() {
    return {
      state: {
        num1: 0,
        num2: 0,
      },
      flag: {
        flagA: true,
        flagB: false,
      }
    }
  },
  computed: {
    result() {
      const { num1, num2 } = this.state
      return num1 + num2
    },
    result2() {
      const { flagA, flagB } = this.flag
      return flagA && flagB
    }
  } */
}
</script>

<style>

</style>