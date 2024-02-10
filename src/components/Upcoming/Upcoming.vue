<template>
  <section class="upcoming" v-if="getUpcomingMovies">
    <UpcomingItem
      v-for="(movie, idx) in getUpcomingMovies"
      :key="idx"
      :idx="idx"
      :movie="movie"
      :slideView="slideView"
      :nextMovie="getUpcomingMovies[idx + 1 == getUpcomingMovies.length ? 0 : idx + 1]"
      @nextSlide="nextSlide"
    />
  </section>
  <Loader v-else/>
</template>

<script setup>
import UpcomingItem from "@/components/Upcoming/UpcomingItem.vue";
import { useUpcoming } from "@/store/upcoming";
import { computed, ref, onMounted } from "vue";

const upcomingStore = useUpcoming();

upcomingStore.getUpcoming();

let slideView = ref(0);

let timer = ref(null);
const slide = () => {
  if (getUpcomingMovies.value.length - 1 == slideView.value) {
    slideView.value = 0;
  } else {
    slideView.value++;
  }
  timer = setTimeout(() => slide(), 5000);
};
const getUpcomingMovies = computed(() => upcomingStore.upcoming);

onMounted(() => {
  timer = setTimeout(() => slide(), 5000);
});

const nextSlide = ( ) =>{
    clearInterval(timer)
    slide()
}
</script>

<style lang="scss" scoped>
</style>