<template>
  <div>
    <button type="button" @click="getProductList">조회</button>
    <hr/>
    <table>
      
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>배송비</th>
        </tr>
      
      
        <tr
          v-for="(product, index) in productList"
          :key="index"
        >
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.delivery}}</td>
        </tr>
      
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      productList: []
    }
  },
  methods: {
    async getProductList() {
      this.productList = await this.api('http://localhost:3000/savedata', 'get', {})
      console.log(this.productList)
    },
    async api(url, method, data) {
      return (await axios({
        method: method,
        url: url,
        data: data
      }).catch(e => {
        console.log(e)
      })).data
    }
  },
}
</script>

<style>

</style>