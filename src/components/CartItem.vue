<template>
  <div class="cart-item">
    <img 
      class="cart-item__img"
      :src="require('../assets/img/' + cartItemData.image)" 
      :alt="cartItemData.name"
    >
    <p>{{ cartItemData.quantity }}</p>
    <p class="cart-item__name"> {{cartItemData.name}} </p>
    <p class="cart-item__price">{{cartItemData.price}} &#8381;</p>
    <button
      @click="deleteFromCart"
    >X</button>
  </div>
</template>

<script>

  export default {
    props: {
      cartItemData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      deleteFromCart() {
        this.$emit('deleteFromCart')
      }  
    }
  }
</script>

<style scoped>
.cart-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

.cart-item__img {
  width: 100px;
}
</style>