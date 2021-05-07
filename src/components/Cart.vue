<template>
  <div class="cart">
    <cart-item 
      v-for="(item, index) in CART"
      :key="item.article"
      :cartItemData = item
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartItem from './CartItem.vue'

  export default {
    components: { 
      CartItem 
    },
    name: 'Cart',
    computed: {
      ...mapGetters([
        'CART'
      ])
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART'
      ]),
      deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }

    },
  }
</script>

<style scoped>
.cart {
  padding: 50px;
}
</style>