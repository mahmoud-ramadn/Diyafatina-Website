<template>
  <div id="contact-us" class="container px-0 md:px-[50px] md:mt-28 mt-20 pt-5">
    <ui-title
      title="اتصل بنا"
      subtitle="في حال وجود اي استفسار نسعد بتواصلك معنا"
    />

    <div class="container px-0">
      <div class="grid md:grid-cols-3 grid-cols-1 gap-6">
        <div
          class="col-span-1 bg-[#B0E8E70D] overflow-hidden md:h-full h-[500px] relative rounded-lg py-12 px-6 space-y-6"
        >
          <ClientOnly>
            <h2 class="font-bold text-gray-500 text-lg mb-6">بيانات التواصل</h2>
            <div
              v-for="(item, index) in contactInfo"
              :key="index"
              class="flex items-center gap-3"
            >
              <SvgIcon
                :name="item.icon"
                class="size-6 mt-1 text-darkblue-500"
              />
              <div>
                <a
                  :href="`${item.href}:${item.value}`"
                  class="text-gray-300 hover:text-darkblue-500 transition-colors"
                  :class="index === 2 ? 'text-primary' : ' text-gray-500'"
                >
                  {{ item.value }}
                </a>
              </div>
            </div>
          </ClientOnly>

          <img
            src="/assets/images/Rectangle 872.webp"
            alt="shape"
            class="absolute left-0 bottom-0"
          />
          <img
            src="/assets/images/shap-1.webp"
            alt="shape-1"
            class="md:absolute md:block hidden right-0"
          />
        </div>
        <div class="md:col-span-2 bg-white rounded-lg py-12 px-6">
          <h2 class="text-xl font-bold text-gray-600 mb-6">
            لديك اقتراح أو شكوى؟ تواصل معنا!
          </h2>
          <FormContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script setup lang="ts">
const contactInfo = [
  {
    href: "tel",
    value: "+966 5065 55411",
    icon: "phone.svg",
  },
  {
    href: "mailto",
    value: "info@defatna.com",
    icon: "mail.svg",
  },
  {
    value: "بريده الرياض السعودية",
    icon: "address.svg",
  },
];
</script>
