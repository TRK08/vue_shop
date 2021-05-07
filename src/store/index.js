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
    }

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
