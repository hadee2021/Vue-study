<template>
  <div>
    <Ex091 
      title="부모에서 내려주는 데이터"
      :title2="title2"
    />
    <hr/>
    <Ex09Child 
      :likes="23"
      :isOk="true"
      ref="child_component"
    />
    <button type="button" @click="callChildFunc">부모의 버튼</button>
    <button type="button" @click="callChildFunc2">부모의 버튼으로 자식데이터 바꾸기</button>
  </div>
</template>

<script>
import Ex091 from '@/components/Ex091.vue'
import Ex09Child from './Ex09Child.vue'
export default {
  components: {
    Ex091,
    Ex09Child,
  },
  data() {
    return {
      title2: '이것도 자식에게 전달'
    }
  },
  methods: {
    callChildFunc() {
      //부모에서 버튼눌러서 자식의 버튼누른 효과 발생시키기
      //즉 부모에서 자식의 이벤트 발생시키기
      // $refs는 객체에 접근하는것임
      // 방법1
      this.$refs.child_component.$refs.child_btn.click()

      //방법2
    //this.$refs.child_component.childFunc()
    },
    callChildFunc2() {
      this.$refs.child_component.msg = '바꾸었다'
    }
  },
}
</script>

<style>

</style>