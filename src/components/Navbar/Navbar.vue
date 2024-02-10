<template>
  <header class="header">
    <div class="header__nav">
      <div class="container">
        <RouterLink class="logo" to="/">
          <img src="@/assets/img/logo.svg" alt="" />
        </RouterLink>
        
         <button class="header__menu" @click="menu = !menu">
          <span></span>
         </button>
        
        
        <ul class="header__list" :class="{active: menu}">
          <li v-for="link in links" :key="link.title">
            <RouterLink :to="link.url" class="header__list-link">
              {{ link.title }}
            </RouterLink>
          </li>
          <li>
            <RouterLink class="header__list-link" to="/search">
              <img src="@/assets/img/search.svg" alt="" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const links = ref([
  { title: "Главная", url: "/" },
  { title: "Фильмы", url: "/movie" },
  { title: "Сериалы", url: "/tv" },
]);
const menu = ref(false)
</script>

<style lang="scss" scoped>
</style>