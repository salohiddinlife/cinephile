<template>
  <div class="info" :class="{active: isOpen}">
    <img src="/src/assets/img/bg.svg" alt="" class="info__bg" />
    <img src="/src/assets/img/close.svg" alt="" class="info__close" @click="$emit('close')">
    <div class="info__content">
      <h2>Шан-Чи и легенда десяти колец</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh bibendum
        nec, pulvinar id in in ac nisl semper. Condimentum tellus ac integer
        condimentum. Amet, vitae dictum convallis dignissim. Lacus, suscipit
        sagittis, adipiscing metus, risus convallis sit...
      </p>
      <div class="info__content-data">
        <span>2024, </span>
        <span>боевик, приключения, фэнтези</span>
      </div>
      <BtnMore/>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["isOpen"])
</script>

<style lang="scss" scoped>
</style>