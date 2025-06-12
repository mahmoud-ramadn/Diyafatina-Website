<template>
  <section class="container p-10 relative flex justify-center items-center">
    <!-- Swiper slides showing inside the mobile screen area -->
    <Swiper
      :space-between="30"
      effect="fade"
      :loop="true"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :pagination="false"
      :navigation="false"
      :modules="[EffectFade]"
      class="rounded"
      style="width: 200px; height: 390px"
    >
      <!-- Loop through images array -->
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img
          :src="image"
          :alt="`Slide image ${index + 1}`"
          class="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>

    <img
      src="/assets/images/screen shot/Mask group.jpg"
      alt="frame"
      class="absolute w-[190px] h-[390px] pointer-events-none"
    />
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import one from "../assets/images/screen shot/img-1.webp";
import two from "../assets/images/screen shot/img-2.webp";
import three from "../assets/images/screen shot/img-3.webp";
import four from "../assets/images/screen shot/img-4.webp";
// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Swiper modules
import { EffectFade } from "swiper/modules";

// Images array
const images = ref([one, two, three, four]);
</script>
