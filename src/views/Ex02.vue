<template>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
    <label>
      <input type="checkbox" v-model="checked"> {{checked}}
    </label>
    <hr />
    <label><input type="checkbox" value="서울" v-model="checked2">서울</label>
    <label><input type="checkbox" value="부산" v-model="checked2">부산</label>
    <label><input type="checkbox" value="제주" v-model="checked2">제주</label>
    <br>
    <span>체크한 지역: {{checked2}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '064',
      checked: true,
      checked2: [],
    }
  },
}
</script>

<style>

</style>