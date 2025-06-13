<template>
  <div class="swiper-container">
    <Swiper v-bind="swiperOptions" class="swiper">
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="`Slide ${index + 1}`" class="slide-image" />
      </SwiperSlide>

      <img
        src="/assets/images/screen shot/Mask group.jpg"
        alt=""
        class="mobile-frame"
        aria-hidden="true"
      />
    </Swiper>
  </div>
</template>

<script setup lang="ts">
// Swiper imports
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Image imports
// eslint-disable-next-line import/no-duplicates
import img1 from "../assets/images/swiper/three.png";
// eslint-disable-next-line import/no-duplicates
import img6 from "../assets/images/swiper/three.png";
import img2 from "../assets/images/swiper/الرئيسية – 2.png";
import img3 from "../assets/images/swiper/دورات حضورية (3).png";
// eslint-disable-next-line import/no-duplicates
import img5 from "../assets/images/swiper/دورات حضورية.png";
// eslint-disable-next-line import/no-duplicates
import img4 from "../assets/images/swiper/دورات حضورية.png";

const images = [img1, img2, img4, img3, img4, img6];

// Swiper configuration
const swiperOptions = {
  modules: [Autoplay],
  spaceBetween: 20,
  speed: 600,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    480: { slidesPerView: 1, spaceBetween: 0 },
    768: { slidesPerView: 3, spaceBetween: 0 },
    1024: { slidesPerView: 3, spaceBetween: 0 },
    1250: { slidesPerView: 3, spaceBetween: 0 },
    1440: { slidesPerView: 5, spaceBetween: 0 },
  },
};
</script>

<style scoped>
.swiper-container {
  @apply relative py-16;
}

.swiper {
  @apply max-w-[900px] mx-auto relative h-[375px] flex items-center justify-center;
}

.slide-image {
  @apply rounded-lg transition-all duration-300 object-cover;
}

.mobile-frame {
  @apply absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[86%] overflow-hidden;
}

.swiper-slide {
  @apply flex items-center justify-center w-fit;
}

.swiper-slide:not(.swiper-slide-active) img {
  @apply scale-90;
}

.swiper-slide-active {
  @apply flex items-center justify-center opacity-100 scale-100 z-50;
}
</style>
