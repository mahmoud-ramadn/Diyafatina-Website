<template>
  <header class="mt-6 md:mt-10 relative">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center gap-4">
        <svg-icon name="logo.svg" class="w-12 h-10 md:w-[76px] md:h-16" />
      </div>

      <nav class="hidden md:block">
        <ul class="flex items-center gap-6 md:gap-10">
          <li v-for="(item, index) in navLinks" :key="index">
            <nuxt-link
              @click="scrollToNextSection(item.section)"
              to="#"
              class="hover:text-primary/80 transition-all duration-150 text-sm md:text-base"
              :class="[index < 1 ? 'text-primary' : 'text-gray-500']"
            >
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-3">
        <a href="#" target="_blank" class="w-8 md:w-auto md:block hidden">
          <img
            src="~/assets/images/googleplay.webp"
            alt="googlePlay"
            class="h-8 md:h-10 shrink-0 md:w-[122px]"
          />
        </a>
        <a href="#" target="_blank" class="w-8 md:w-auto md:block hidden">
          <svg-icon name="app_stroe.svg" class="h-8 md:h-10 md:w-[122px]" />
        </a>
      </div>

      <button @click="toggleMenu" class="md:hidden ml-2">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-white py-4 px-4 shadow-lg z-50"
    >
      <ul class="flex flex-col items-center gap-4">
        <li v-for="(item, index) in navLinks" :key="`mobile-${index}`">
          <nuxt-link
            to="#"
            class="hover:text-primary/80 transition-all duration-150 text-lg"
            :class="[index < 1 ? 'text-primary' : 'text-gray-500']"
            @click="toggleMenu(item.section)"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>

      <div class="py-5 w-full flex items-center justify-center gap-3">
        <a href="#" target="_blank" class="md:w-auto">
          <img
            src="~/assets/images/googleplay.webp"
            alt="googlePlay"
            class="h-8 md:h-10 shrink-0 w-[100px] md:w-[122px]"
          />
        </a>
        <a href="#" target="_blank">
          <svg-icon
            name="app_stroe.svg"
            class="h-8 md:h-10 w-[100px] md:w-[122px]"
          />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const navLinks = [
  { name: "الرئيسية", section: "" },
  { name: "مميزات", section: "features" },
  { name: "لقطات شاشة", section: "screen" },
  { name: "اتصل بنا", section: "contact-us" },
];

function scrollToNextSection(sectionName: string) {
  const nextSection = document.getElementById(sectionName);
  if (nextSection) {
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  }
}

const isMenuOpen = ref(false);

function toggleMenu(section: string) {
  isMenuOpen.value = !isMenuOpen.value;

  scrollToNextSection(section);
}
</script>
