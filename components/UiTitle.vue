<template>
    <div class="text-center space-y-2">
      <h1 class="font-bold md:text-3xl text-2xl text-gray-500">{{ title }}</h1>
      <p class="font-medium md:font-semibold text-gray-500 md:text-lg text-sm">
        {{ subtitle }}
      </p>
    </div>
  </template>
  
  <script setup lang="ts">

  interface Props {
    title: string;
    subtitle: string; 
  }
  
  const props = defineProps<Props>();
  </script>