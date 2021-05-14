<template>
  <div class="catalog-item">
    <img 
      :src="require('../assets/img/' + catalogData.image)" 
      :alt="catalogData.name"
    >
    <p class="catalog-item__title">
      {{ catalogData.name }}
    </p>
    <p class="ctalog-item__price">
      {{ catalogData.price }} Р
    </p>
    <button 
      class="catalog-item__btn"
      @click="addToCart"
    >
    Добавить</button>
  </div>
</template>

<script>

  export default {
    name: 'CatalogItem',
    props: {
      catalogData: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart', this.catalogData)
      }
    },
    mounted(){
      this.$set(this.catalogData, 'quantity', 1)
    }
  }
</script>

<style scoped>
.catalog-item {
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
  box-shadow: 0px 0px 20px 5px rgba(34, 60, 80, 0.2);
}

.catalog-item__btn {
  padding: 15px;
  background-color: #3fc380;
  border: none;
  cursor: pointer;
}
</style>