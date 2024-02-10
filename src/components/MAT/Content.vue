<template>
  <div class="content" v-if="content">
    <RouterLink class="content__link" :to="props.type">
      {{ props.type == "movie" ? "фильмы" : "Сериалы" }}
      <img src="@/assets/img/arrow.svg" alt="" />
    </RouterLink>

    <Swiper
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      :grabCursor="true"
      :autoplay="{
        delay: props.type == 'movie' ? 2500 : 1000,
        disableOnInteraction: false,
      }"
      :space-between="23"
      :navigation="true"
      class="content__mySwiper"
    >
      <SwiperSlide
        class="content__slide"
        v-for="item in content"
        :key="item.id"
      >
        <img :src="image + item.poster_path" class="content__img" alt="" />
      </SwiperSlide>
      <SwiperSlide class="content__slide">
        <RouterLink :to="props.type" class="content__route">
          <img src="@/assets/img/arrow.svg" alt="" />
          {{ props.type == "movie" ? "All Movies" : "All Series" }}
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </div>
  <Loader v-else />
</template>

<script setup>
import { miniImage, image } from "@/url";
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { usePopular } from "@/store/popular";
const props = defineProps(["type"]);
const modules = ref([Autoplay, Navigation]);

const popular = usePopular();
popular.getPopular({ type: props.type });

const content = computed(() =>
  props.type == "movie" ? popular.popularMovies : popular.popularTvs
);

const swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 5.5,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>