<template>
  <div>
    <span>난 자식이다</span>
    <h1>{{ title }}</h1>
    <h2>{{ title2 }}</h2>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: '기본값'
    },
    title2: {
      type: String,
      default: '기본값'
    }
  },
  setup(props) {
    let { title } = toRefs(props)
    console.log(title.value)
  }
}
</script>

<style>

</style>