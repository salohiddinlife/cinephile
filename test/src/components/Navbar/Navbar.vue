<template>
  <header class="header">
    <div class="header__nav">
      <div class="container">
        <RouterLink class="logo" to="/">
          <img src="@/assets/img/logo.svg" alt="" />
        </RouterLink>
        <ul class="header__list">
          <li v-for="link in links" :key="link.title">
            <RouterLink :to="link.url" class="header__list-link">
              {{ link.title }}
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/search" class="header__list-link">
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
</script>

<style lang="scss" scoped>
</style>