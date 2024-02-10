<template>
  <Transition name="upcoming">
    <div class="upcoming__item" v-if="slideView == idx" @keyup.enter="$emit('nextSlide')">
    <img :src="image + movie.backdrop_path" alt="" class="upcoming__item-img" />
    <div class="upcoming__content">
      <h2 class="upcoming__content-title">{{movie.title}}</h2>
      <p class="upcoming__content-text">
        {{movie.overview}}
      </p>
      <BtnMore />
    </div>
    <div class="upcoming__next" @click="$emit('nextSlide')">
      <img :src="image + nextMovie.backdrop_path" alt="" />
      <div class="upcoming__next-content">
        <span>Следующий</span>
        <h2>{{ nextMovie.title }}</h2>
      </div>
      <div class="upcoming__next-line"></div>
    </div>
  </div>
  </Transition>
</template>

<script setup>
import { miniImage, image } from "@/url";
const props = defineProps({
  idx: {
    typeof: Number,
  },
  movie: {
    typeof: Object,
  },
  slideView:{
    typeof:Number
  },
  nextMovie:{
    typeof:Object
  }
});
</script>

<style lang="scss" scoped>
.upcoming-enter-active,
.upcoming-leave-active {
  transition: .5s;
}

.upcoming-enter-from{
  opacity: 0;
  transform: scale(1);
}
.upcoming-leave-to{
    opacity: 0;
    transform: scale(1.5s);
}
</style>