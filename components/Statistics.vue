<template>
  <div class=" max-w-[911px] mx-auto flex md:flex-row flex-col justify-between  flex-wrap ">
    <div v-for="stat in statisticsData" :key="stat.id" class="flex flex-col items-center p-4 md:p-6 w-full md:w-auto">
      <img :src="stat.image" alt="Statistics Image" class="w-16 h-16 mb-4">
      <h2 class="text-3xl md:text-4xl text-primary font-bold mb-2">{{ stat.number }}</h2>
      <p class="text-xl text-gray-600 text-center">{{ stat.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import one from '../assets/images/3d-icon-social-media-app 1.webp';
import four from "../assets/images/four.webp";
import three from '../assets/images/three.webp'
import two from '../assets/images/two.webp';

const statisticsData=[
  {
    id:1,
    image:one,
    number:"2500+",
    title:'مشاركة إجتماعية'
  },
  {
    id:2,
    image:two,
    number:'2500+',
    title:"مستخدم راض",
  },
  {
    id:3,
    image:three,
    number:'2500+',
    title:"تقيم النجوم",
  },
  {
    id:4,
    image:four,
    number:'2500+',
    title:"التحميلات",
  }

]

</script>
