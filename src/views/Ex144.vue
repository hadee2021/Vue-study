<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1">
      <span> + </span>
      <input type="text" v-model.number="num2">
      <span> = </span>
      <span>{{result}}</span>
    </div>
    <div>
      <input type="text" v-model.number="num3">
      <span> - </span>
      <input type="text" v-model.number="num4">
      <span> = </span>
      <span>{{result2}}</span>
    </div>
  </div>
</template>

<script>
import { plus, minus } from '@/common.js' // 여러개는 구조분해 할당으로 받는다

export default {
  setup() {
    let { num1, num2, result } = plus()

    let { num3, num4, result2 } = minus()

    return {
      num1,
      num2,
      result,
      num3,
      num4,
      result2,
    }
  }
}
</script>

<style>

</style>