<template>
  <RouterLink to="/" class="btn">
    <img src="@/assets/img/more.svg" alt="" class="btn__img" />
    <span class="btn__text">Подробнее</span>
  </RouterLink>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  border-radius: 10px;
  background: #149a03;
  &__text {
    color: #fff;
    font-size: 20px;
    line-height: 1.5;
  }
}
</style>