<template>
  <div class="header">
    <div class="header-logo">
      <img class="header-logo__img" src="../../assets/img/logo.svg" alt="" />
    </div>
    <div class="header-menu">
      <ul class="header-menu__list">
        <router-link :to="{ name: 'catalog' }">
          <li class="header-menu__list-item">Каталог</li>
        </router-link>

        <router-link :to="{ name: 'cart' }">
          <div class="header-menu__list-item">
            <li class="menu-cart">Корзина</li>
            <span class="header-menu__cart-counter">
              {{ this.$store.state.cart.length }}
            </span>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
}

.header {
  width: 100%;
  height: 100px;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header-logo__img {
  width: 50px;
}

.header-menu__list {
  display: flex;
  list-style: none;
  padding: 0;
  font-size: 24px;
}

.header-menu__list-item {
  margin-right: 40px;
}

.header-menu__list-item {
  position: relative;
}

.header-menu__cart-counter {
  position: absolute;
  top: -10px;
  right: -20px;
  background-color: #fff;
  color: #000;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

.router-link-exact-active {
  color: #3fc380;
}
</style>