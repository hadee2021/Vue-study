<template>
  <div>
    <button type="button" @click="changeData">자식컴포넌트 데이터 변경하는 버튼</button>
  </div>
</template>

<script>
export default {
  methods: {
    changeData() {
      this.msg = '자식 컴포넌트에서 데이터 변경이 일어났습니다'
    },
  },
  data() {
    return {
      msg: '자식의 원래있던 메시지'
    }
  },
}
</script>

<style>

</style>