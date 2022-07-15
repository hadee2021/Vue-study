<template>
  <div>
    <div 
      class="container"
      :class="{'active': isActive, 'text-red': isRed}"
    >
      Class Binding
    </div>
    <hr/>
    <div :style="styleObject">인라인 스타일 Binding</div>
    <hr/>
    <div :style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isRed: false,
      styleObject: {
        backgroundColor: 'yellow',
        color: 'red',
        fontWeight: 'bold'
      },
      baseStyle: 'background-color: yellow;',
      addStyle: 'color: red; font-weight: bold;'
    }
  },
}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 200px;
  }

  .active {
    background-color: yellow;
    font-weight: bold;
  }

  .text-red {
    color: red;
  }
</style>