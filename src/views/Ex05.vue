<template>
  <div>
    <select>
      <option
        v-for="(city, index) in options"
        :key="index"
        :value="city.v"
      >
        {{city.t}}
      </option>
    </select>
    <hr/>
    <table>
      
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>배송비</th>
          <th>카테고리</th>
        </tr>
      
      
        <tr
          v-for="(product, index) in productList"
          :key="index"
        >
          <td>{{product.product_name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.delivery_price}}</td>
          <td>{{product.category}}</td>
        </tr>
      
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {v:'02', t:'서울'},
        {v:'21', t:'부산'},
        {v:'064', t:'제주'}
      ],
      productList: [
        {product_name:'기계식 키보드', price: 25000, delivery_price: 5000, category: '전자제품'},
        {product_name:'마우스', price: 9000, delivery_price: 5000, category: '전자제품'}
      ]
    }
  },
}
</script>

<style>

</style>