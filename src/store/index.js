import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCT_TO_STATE(state, products) {
      state.products = products
    },
    ADD_TO_CART(state, payload) {
      let isProductAdd = false
      if(state.cart.length > 0) {
        state.cart.map((item) => {
          if (item.article === payload.article) {
            isProductAdd = true
            item.quantity++
          }
        })
        if(!isProductAdd) {
          state.cart.push(payload)
        }
      }
      else {
        state.cart.push(payload)
      }
    },
    DELETE_FROM_CART(state, index) {
      state.cart.splice(index, 1)
<<<<<<< HEAD
    },
    QUANTITY_PLUS(state, index) {
      state.cart[index].quantity++
    },
    QUANTITY_MINUS(state, index) {
      if(state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
=======
    }
>>>>>>> e40e871ed2842c87f139c3487605945545629571

  },
  actions: {
    GET_CATALOG_FROM_API( {commit} ) {
      axios
        .get('http://localhost:3000/products')
        .then(products => {
          commit('SET_PRODUCT_TO_STATE', products.data)
        })
        .catch((err) => {
          console.log(err);
        })
    },
    ADD_TO_CART( {commit}, payload) {
      commit('ADD_TO_CART', payload)
    },
    DELETE_FROM_CART( {commit}, index) {
      commit('DELETE_FROM_CART', index)
<<<<<<< HEAD
    },
    QUANTITY_PLUS( {commit}, index ) {
      commit('QUANTITY_PLUS', index)
    },
    QUANTITY_MINUS( {commit}, index ) {
      commit('QUANTITY_MINUS', index)
=======
>>>>>>> e40e871ed2842c87f139c3487605945545629571
    }

  },
  getters: {
    CATALOG(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  }
})
