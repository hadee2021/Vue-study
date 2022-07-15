<template>
  <div>
    <button type="button" @click="showData">부모버튼으로 자식의 데이터 변경을 확인</button>
    <Ex11Child ref="child_component" />
  </div>
</template>

<script>

import Ex11Child from './Ex11Child.vue'
export default {
  components: {
    Ex11Child,
  },
  data() {
    return {
    }
  },
  computed: {
    msg() {
      return this.$refs.child_component.msg // 자식컴포넌트의 msg의 변경을 감시
    }
  },
  methods: {
    showData() {
      alert(this.msg)
    }
  },
}
</script>

<style>

</style>