<template>
  <div>
    <div>Item Length: {{this.itemLength}}</div>
  </div>
</template>

<script>
export default {
  inject: ['itemLength', 'items']
}
</script>

<style>

</style>