<template>
    <div>
      <client-only>
        <div class="relative currentSwiper">
          <div :class="{'lg:px-20': arrows}">
            <Swiper
              :modules="[
                SwiperAutoplay,
                SwiperNavigation,
                SwiperPagination,
                SwiperEffectFade,
              ]"
              :slides-per-view="currentProps?.slidesPerView"
              :loop="currentProps?.loop"
              :autoplay="currentProps?.autoPlay"
              :space-between="currentProps?.spaceBetween"
              :breakpoints="currentProps?.breakpoints"
              :centered-slides="currentProps?.centeredSlides"
              v-bind="mapCurrentProps"
              :items="items"
              :effect="currentProps?.effect"
              :options="options"
              @swiper="onSwiperLoad"
            >
              <SwiperSlide
                v-for="(item, index) in items"
                :key="item?.id || index"
                class="!h-auto"
              >
                <slot :item="item" />
              </SwiperSlide>
            </Swiper>
  
          </div>
        </div>
  
        <template #fallback>
          <slot name="fallback" />
        </template>
      </client-only>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { SwiperAutoplay, SwiperNavigation, SwiperPagination, SwiperEffectFade } from 'swiper/modules';
  /**
   * Type definition for individual slide item
   */
  type SlideItem = {
    id?: string | number;
    [key: string]: any;
  };
  
  /**
   * Type definition for Swiper options
   */
  type OptionsType = {
    slidesPerView?: number;
    loop?: boolean;
    autoPlay?:
      | {
          delay?: number;
          disableOnInteraction?: boolean;
        }
      | boolean;
    centeredSlides?: boolean;
    spaceBetween?: number;
    effect?: "slide" | "fade" | "cube" | "coverflow" | "flip";
    breakpoints?: Record<
      number,
      {
        slidesPerView?: number;
        spaceBetween?: number;
        centeredSlides?: boolean;
      }
    >;
    pagination?: boolean;
  };
  
  /**
   * Props interface for the SwiperWrapper component
   */
  interface Props {
    /** Array of items to be displayed in the slider */
    items: SlideItem[];
    /** Configuration options for the Swiper instance */
    options?: OptionsType;
    /** Whether to show navigation arrows */
    arrows?: boolean;
  }
  
  // Props with default values
  const props = withDefaults(defineProps<Props>(), {
    options: () => ({
      slidesPerView: 1,
      loop: true,
      autoPlay: false,
      spaceBetween: 30,
      pagination: false,
      centeredSlides: false,
      breakpoints: {},
    }),
    arrows: false,
  });
  
  // Merge props value with defaults
  const currentProps = computed(() => {
    return {
      ...props?.options,
    };
  });
  
  // Map current props
  const mapCurrentProps = computed(() => {
    return {
      ...(currentProps.value?.pagination && {
        pagination: {clickable: true},
      }),
    };
  });
  
  // Refs
  const swiper = ref();
  
  // Define an interface for Swiper instance
  type SwiperInstance = {
    slideNext?: () => void;
    slidePrev?: () => void;
  };
  
  // On swiper load
  const onSwiperLoad = (value: SwiperInstance) => {
    swiper.value = value;
  };
  </script>
  
  <style lang="postcss">
  .currentSwiper {
    .swiper {
      &-pagination {
        @apply relative flex mt-10 !bottom-0 items-center justify-center;
        &-bullet {
          @apply !w-4 !h-4 border border-blue-600 bg-transparent;
          &-active {
            @apply bg-blue-600;
          }
        }
      }
    }
  }
  </style>
  