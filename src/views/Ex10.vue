<template>
  <div>
    <Ex10Child 
      @send-message="sendMessage"
    />
    <h1>{{ parentMsg }}</h1>

  </div>
</template>

<script>

import Ex10Child from './Ex10Child.vue'
export default {
  components: {
    Ex10Child,
  },
  data() {
    return {
      parentMsg: '아직 자식에게서 메시지 안옴'
    }
  },
  methods: {
    sendMessage(data) {
      alert(data)
      this.parentMsg = data
    }
  },
}
</script>

<style>

</style>