<template>
  <div>
    <Ex13C />
  </div>
</template>

<script>
import Ex13C from './Ex13C.vue'
export default {
  components: {
    Ex13C,
  },
  data() {
    return {
      items: ['A', 'B'],
    }
  },
  provide() {
    return {
      itemLength: this.items.length,
      items: this.items
    }
  }
}
</script>

<style>

</style>