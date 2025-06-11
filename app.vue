<template>
  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup>
const {localeProperties, t} = useI18n();

useHead({
  htmlAttrs: () => ({
    dir: localeProperties?.value?.dir,
    lang: localeProperties?.value?.code,
  }),
  title: t("title"),
  meta: [
    {property: "og:title", content: t("title")},
    {property: "og:description", content: t("og-description")},
    {property: "og:image", content: "/apple-touch-icon.png"},
  ],
});
</script>
