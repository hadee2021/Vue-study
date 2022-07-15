<template>
  <div>
    <button type="button" @click="sendFromChild">자식의 버튼</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendFromChild() {
      this.$emit('send-message', this.msg)
    },
  },
  data() {
    return {
      msg: '자식에서 부모로 보내는 메시지'
    }
  },
}
</script>

<style>

</style>