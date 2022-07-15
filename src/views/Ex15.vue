<template>
  <div>
    <Ex152 />
  </div>
</template>

<script>
import Ex152 from './Ex152.vue'
import { provide } from 'vue'

export default {
  components: {
    Ex152
  },
  setup() {
    provide('title', '보낼 데이터')
  }
}
</script>

<style>

</style>