<template>
  <div class="md:pt-16 relative pt-8 md:pb-12 pb-6 md:mt-28 mt-20 overflow-hidden">
    <img src="/assets/images/Ellipse 3.webp" alt="left" class="absolute left-0 top-0 w-32 md:w-auto">
    <div class="container flex flex-wrap relative py-5 justify-between gap-8 md:gap-16">
      <div class="w-full md:max-w-[400px]">
        <svg-icon name="logo.svg" class="w-12 h-10 md:w-[76px] md:h-16" />
        <p class="text-gray-700 md:text-sm text-sm font-medium mt-4">منصة ضيافتنا تقدم تجربة فريدة لبيع الأكل البيتي، حيث نعرض أشهى الأطباق المنزلية المعدة بحب من قبل أسر منتجة، مع مجموعة متنوعة من الخيارات التي تلبي جميع الأذواق.</p>
        <div class="flex items-center gap-x-3 mt-6">
          <svg-icon name="facebook.svg" class="size-6" />
          <svg-icon name="x-icon.svg" class="size-6" />
          <svg-icon name="insta.svg" class="size-6" />
        </div>
      </div>
      <div class="mt-6 md:mt-0">
        <h3 class="text-gray-600 font-black">روابط مفيده</h3>
        <ul class="mt-4">
          <nuxt-link to="#" class="text-gray-700 font-medium mb-2 text-sm cursor-pointer hover:text-primary">الرئيسية</nuxt-link>
          <li class="text-gray-700 mb-2 font-medium text-sm cursor-pointer hover:text-primary">لقطات شاشة</li>
          <li class="text-gray-700 font-medium mb-2 text-sm cursor-pointer hover:text-primary"><nuxt-link to="#">الأسئلة الشائعة</nuxt-link></li>
        </ul>
      </div>
      <ClientOnly>
        <div class="mt-6 md:mt-0">
          <h3 class="text-gray-600 font-black">وسائل الدفع</h3>
          <div class="flex items-center gap-x-4 mt-6">
            <svg-icon name="visa 1.svg" class="size-12" />
            <svg-icon name="mastercard 1.svg" class="size-12" />
            <svg-icon name="Apple Pay.svg" class="size-12" />
          </div>
        </div>
      </ClientOnly>
      <img src="/assets/images/Ellipse 4.webp" alt="center" class="absolute left-1/2 top-auto hidden md:block">
    </div>
    <div class="container border-t border-gray-300 md:border-gray-800 pt-6 flex items-center justify-between flex-wrap gap-4">
      <p class="text-gray-600 font-medium text-sm">جميع الحقوق محفوظة © ضيافتنا</p>
      <div class="flex items-center gap-x-4">
        <nuxt-link to="#" class="text-gray-600 font-medium md:text-base text-sm cursor-pointer hover:text-primary border-l  pl-4">سياسة الخصوصية</nuxt-link>
        <nuxt-link to="#" class="text-gray-600 font-medium md:text-base text-sm cursor-pointer hover:text-primary">الشروط والأحكام</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>