<template>
  <div class="container md:px-12 overflow-hidden md:mt-28 mt-20">
    <div
      class="bg-green-300 pt-10 md:pr-14 md:pl-10 pr-7 relative rounded-2xl flex flex-col lg:flex-row items-start justify-between gap-y-9"
    >
      <div class="md:p-0 md:pt-11 md:pr-4">
        <h4 class="font-bold text-lg text-primary">تطبيق ضيافتنا</h4>
        <h2 class="font-black text-gray-300 text-3xl mt-2">حمل تطبيقاتنا</h2>
        <p class="text-gray-700 font-medium mt-3">
          مجموعة متنوعة من البرامج الدراسية التي لأغلب المناهج
        </p>

        <div class="mt-10 flex flex-col lg:flex-row items-start gap-10">
          <div class="w-fit">
            <p class="font-bold text-sm text-gray-700">تطبيق المستخدم</p>

            <div class="flex items-center mt-4 gap-2">
              <a href="#" target="_blank" class="md:w-auto">
                <img
                  src="~/assets/images/googleplay.webp"
                  alt="googlePlay"
                  class="h-8 md:h-10 shrink-0 md:w-[122px]"
                />
              </a>

              <a href="#" target="_blank" class="h-8 md:h-10">
                <svg-icon name="app_stroe.svg" class="h-8 md:h-10 w-[122px]" />
              </a>
            </div>
          </div>
          <div class="w-fit">
            <p class="font-bold text-sm text-gray-700">تطبيق المزود</p>

            <div class="flex items-center mt-4 gap-2">
              <a href="#" target="_blank" class="md:w-auto">
                <img
                  src="~/assets/images/googleplay.webp"
                  alt="googlePlay"
                  class="h-8 md:h-10 shrink-0 md:w-[122px]"
                />
              </a>

              <a href="#" target="_blank" class="h-8 md:h-10">
                <svg-icon name="app_stroe.svg" class="h-8 md:h-10 w-[122px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/assets/images/iPhone.webp"
        alt="iphone"
        class="relative z-10 object-cover md:w-[300px] md:h-[337px] w-fit flex self-end"
      />

      <img
        src="/assets/images/Rectangle 872.webp"
        alt="shape"
        class="absolute bottom-0 left-0"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
