import { reactive, computed, toRefs } from 'vue'

const plus = () =>  {
  let state = reactive({
  num1: 0,
  num2: 0,
  result: computed(() => state.num1 + state.num2)
  })

  return toRefs(state)
}

const minus = () => {
  let state2 = reactive({
    num3: 0,
    num4: 0,
    result2: computed(() => state2.num3 - state2.num4)
  })

  return toRefs(state2)
}

export {  // 여러개 내보낼때
  plus,
  minus
}