<template>
  <section class="top" v-if="topMovies">
    <h2 class="top__title">
      TOP
      <span>10</span>
    </h2>
    <Swiper
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      :grabCursor="true"
      :space-between="23"
      :navigation="true"
      class="top__swiper"
    >
      <SwiperSlide
        class="top__slide"
        v-for="item in topMovies"
        :key="item.id"
      >
      <div class="top__slide-num">1</div>
        <img :src="image + item.poster_path" class="top__slide-img" alt="" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { miniImage, image } from "@/url";
import { useTop } from "@/store/top";
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const modules = ref([Autoplay, Navigation]);
const topStore = useTop();
topStore.getTop();

const topMovies = computed(() => topStore.top10);
const swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2.3,
    },
    1400: {
      slidesPerView: 3.5,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>