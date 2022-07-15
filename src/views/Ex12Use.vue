<template>
  <div>
    <modal-layout>
      <template #header>
        <h1>팝업 타이틀</h1>
      </template>
      <template #default>
        <p>팝업 컨텐츠1</p>
        <p>팝업 컨텐츠2</p>
      </template>
      <template #footer>
        <button type="button">닫기</button>
      </template>
    </modal-layout>
  </div>
</template>

<script>
import Ex12 from './Ex12.vue'
export default {
  components:{
    'modal-layout': Ex12
  }
}
</script>

<style>

</style>