<template>
  <div class="cart-item">
    <img 
      class="cart-item__img"
      :src="require('../assets/img/' + cartItemData.image)" 
      :alt="cartItemData.name"
    >
    <p class="cart-item__name"> {{cartItemData.name}} </p>
    <div class="cart-item__quantity">
      <span @click="quantityMinus" class="cart-item__quantity__change">-</span>
      <p class="cart-item-quantity__num">{{ cartItemData.quantity }}</p>
      <span @click="quantityPlus" class="cart-item__quantity__change">+</span>
    </div>
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
      },
      quantityPlus() {
        this.$emit('quantityPlus')
      },  
      quantityMinus() {
        this.$emit('quantityMinus')
      },  
    },
  }
</script>

<style scoped>
.cart-item {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
  min-height: 100px;
}

.cart-item__img {
  width: 100px;
}

.cart-item__quantity {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-item-quantity__num {
  margin: 0 10px;
}

.cart-item__quantity__change {
  cursor: pointer;
}

</style>