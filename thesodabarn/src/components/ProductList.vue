<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h2>{{product.name}}</h2>
        <h3>{{product.price}}</h3>
      </div>
      <div class="price">

      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-family: "Century Gothic", "Arial", sans-serif;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #1B5F76;
  color: white;
  padding: 10px 30px;
  height: 150px;
}

.info h1 {
}

.info h2 {
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
