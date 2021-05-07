<template>
  <div class="catalog">
    <catalog-item 
      v-for="item in CATALOG"
      :key="item.article"
      :catalogData="item"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CatalogItem from './CatalogItem'

  export default {
    name: 'Catalog',
    components: {
      CatalogItem
    },
    computed: {
      ...mapGetters([
        'CATALOG'
      ])
    },
    methods: {
      ...mapActions([
        'GET_CATALOG_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    mounted () {
      this.GET_CATALOG_FROM_API()
    }
  }
</script>

<style scoped>
.catalog {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  padding: 100px 0;
}
</style>