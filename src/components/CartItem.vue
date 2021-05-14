<template>
  <div class="cart-item">
    <img 
      class="cart-item__img"
      :src="require('../assets/img/' + cartItemData.image)" 
      :alt="cartItemData.name"
    >
<<<<<<< HEAD
    <p class="cart-item__name"> {{cartItemData.name}} </p>
    <div class="cart-item__quantity">
      <span @click="quantityMinus" class="cart-item__quantity__change">-</span>
      <p class="cart-item-quantity__num">{{ cartItemData.quantity }}</p>
      <span @click="quantityPlus" class="cart-item__quantity__change">+</span>
    </div>
=======
    <p>{{ cartItemData.quantity }}</p>
    <p class="cart-item__name"> {{cartItemData.name}} </p>
>>>>>>> e40e871ed2842c87f139c3487605945545629571
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
<<<<<<< HEAD
      },
      quantityPlus() {
        this.$emit('quantityPlus')
      },  
      quantityMinus() {
        this.$emit('quantityMinus')
      },  
    },
=======
      }  
    }
>>>>>>> e40e871ed2842c87f139c3487605945545629571
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
<<<<<<< HEAD

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

=======
>>>>>>> e40e871ed2842c87f139c3487605945545629571
</style>