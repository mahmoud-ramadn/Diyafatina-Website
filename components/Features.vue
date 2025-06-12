<template>
  <div id="features" class="container lg:px-12 md:mt-28 mt-20 pt-5">
    <ui-title
      title="مميزت التطبيق"
      subtitle="لمحة سريعة عن بعض المميزات للتطبيق"
    />

    <client-only>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-8 mt-7"
      >
        <div
          v-for="feature in features"
          :key="feature.id"
          :class="feature.color"
          class="md:p-8 p-4 rounded"
        >
          <span
            class="flex items-center justify-center rounded-full size-20"
            :class="feature.circle"
          >
            <svg-icon :name="feature.icon ?? ''" class="size-12" />
          </span>

          <h3 class="font-bold mt-8 md:text-lg text-gray-600">
            {{ feature.title }}
          </h3>
          <p class="text-gray-700 mt-3 font-medium">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    id: 1,
    title: "تصميم سهل",
    description:
      "تواصل مباشر لدعمك في حال حدوث اي مشكلة ومتابعة مستمرة لحل اي مشكلة",
    color: "bg-[#E0EEFA4D]",
    circle: "bg-[#E0EEFA]",
    icon: "hand.svg",
  },
  {
    id: 2,
    title: "دعم مستمر",
    description:
      "التطبيق تم تصميمه بشكل سلس بحيث يوفر على المستخدم الوقت ويجعل تجربته مميزة",
    color: "bg-[#E3F5ED4D]",
    circle: "bg-[#17B26A24]",
    icon: "help 1.svg",
  },
  {
    id: 3,
    title: "أداء عالي",
    description: "تطبيق سريع وسلس لتسهيل تجربة المستخدم بأحدث التقنيات.",
    color: "bg-[#F3E3E94D]",
    circle: "bg-[#9D174D24]",
    icon: "line-chart 1.svg",
  },
  {
    id: 4,
    title: "متابعة الطلبات",
    description: "متابعة مستمرة للطلبات من فريق الدعم وقياس سرعة التنفيذ.",
    color: "bg-[#FAECE04D]",
    circle: "bg-[#DC680324]",
    icon: "order 1.svg",
  },
  {
    id: 5,
    title: "تنبيهات لحظية",
    description: "نظام تنبيهات لحظية لتتبع الطلبات والوصول لعروض التطبيق",
    color: "bg-[#FFF1DB4D]",
    circle: "bg-[#FF9C0024]",
    icon: "ringing 1.svg",
  },
  {
    id: 6,
    title: "حماية وامان",
    description:
      "الحفاظ على بياناتك وحمايتها هي من الولوياتنا لتكون رحلة اي عميل امنة دون اي خوف",
    color: "bg-[#F6FDFD]",
    circle: "bg-[#38BFBE24]",
    icon: "shield 1.svg",
  },
];
</script>
