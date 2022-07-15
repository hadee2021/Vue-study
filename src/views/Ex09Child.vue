<template>
  <div>
    <div>likes: {{ likes }}</div>
    <div>isOk: {{ isOk }}</div>
    <button type="button" @click="childFunc" ref="child_btn">자식의 버튼</button>
    <h1>{{ msg }}</h1>
    <hr/>
    <button type="button" >자식의 props</button>
  </div>
</template>

<script>
export default {
  props: {
    likes: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    childFunc() {
      alert('부모에서 자식의 이벤트를 발생시킴')
    }
  },
  data() {
    return {
      msg: '자식에 있던 메시지'
    }
  },
}
</script>

<style>

</style>