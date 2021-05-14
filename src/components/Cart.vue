<template>
  <div class="cart">
    <cart-item 
      v-for="(item, index) in CART"
      :key="item.article"
      :cartItemData = item
      @deleteFromCart="deleteFromCart(index)"
<<<<<<< HEAD
      @quantityPlus="quantityPlus(index)"
      @quantityMinus="quantityMinus(index)"
    />
    <div class="total">Total: {{cartTotal}} </div>
=======
    />
>>>>>>> e40e871ed2842c87f139c3487605945545629571
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
<<<<<<< HEAD
      ]),
      cartTotal() {
        if(this.CART.length) {
          let total = []

          for (let item of this.CART) {
            total.push(item.price * item.quantity)
          }
          
          total = total.reduce(function(sum, el) {
            return sum + el
          })
          return total
        }
        else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'QUANTITY_PLUS',
        'QUANTITY_MINUS'
      ]),
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      },
      quantityPlus(index) {
        this.QUANTITY_PLUS(index)
      },
      quantityMinus(index) {
        this.QUANTITY_MINUS(index)
      }
    }
=======
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
>>>>>>> e40e871ed2842c87f139c3487605945545629571
  }
</script>

<style scoped>
.cart {
<<<<<<< HEAD
  padding: 30px 0;
  margin-bottom: 120px;
}

.total {
  position: fixed;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: #fff;
  background-color: #3fc380;
=======
  padding: 50px;
>>>>>>> e40e871ed2842c87f139c3487605945545629571
}
</style>