<template>
  <div class="relative py-16">
    <div class="container flex items-center justify-center">
      <Swiper
        :modules="[Autoplay]"
        :space-between="20"
        :speed="600"
        :centered-slides="true"
        :loop="true"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :breakpoints="{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
            centeredSlides: true,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 0,
            centeredSlides: true,
          },
        }"
        class="max-w-[900px] mx-auto relative h-[400px]"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img
            :src="image"
            :alt="`Slide ${index + 1}`"
            class="rounded-lg transition-all duration-300 object-cover"
          />
        </SwiperSlide>

        <img
          src="/assets/images/screen shot/Mask group.jpg"
          alt="Mobile Frame"
          class="absolute top-[48%] left-1/2 -translate-y-1/2 -translate-x-1/2 "
        />
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import images
// eslint-disable-next-line import/no-duplicates
import img1 from "../assets/images/swiper/three.png";
// eslint-disable-next-line import/no-duplicates
import img6 from "../assets/images/swiper/three.png";
import img2 from "../assets/images/swiper/الرئيسية – 2.png";
// eslint-disable-next-line import/no-duplicates
import img3 from "../assets/images/swiper/دورات حضورية (3).png";
// eslint-disable-next-line import/no-duplicates
import img5 from "../assets/images/swiper/دورات حضورية (3).png";
import img4 from "../assets/images/swiper/دورات حضورية.png";

// Sample images array with imported images
const images = [img1, img2, img3, img4, img5, img6];
</script>

<style>
.swiper-slide-active img {
  @apply lg:w-[194px] lg:h-[90%] w-[191px] object-cover;
}

.swiper-slide {
  @apply flex items-center justify-center;
}

.swiper-slide:not(.swiper-slide-active) img {
  @apply w-[134px];
}

.swiper-slide-active {
  @apply flex items-center justify-center;

  @apply opacity-100 scale-100 z-50;
}
.swiper {
  @apply flex items-center justify-center;
}
</style>
