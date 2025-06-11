<template>
  <div  class=" md:mt-28 mt-20">
    <ui-title  title="الأسئلة الشائعه" subtitle="في حال وجود اي استفسار نسعد بتواصلك معنا"/>
    <div class="container  flex flex-col items-center">
  

      <Accordion
        type="single"
        class="w-full overflow-hidden  border-0 flex flex-col  mt-8"
        collapsible
      >
        <AccordionItem
          v-for="item in faqs"
          :key="item.id"
          :value="String(item.id)"
          class="group rounded-lg transition-all  py-6 md:px-11  duration-200"
        >
          <div  >
            <AccordionTrigger
              class="text-lg lg:text-xl font-bold text-gray-500 transition-all duration-200 w-full text-right flex justify-between  items-start"
            >
              <span >{{ item.title }}</span>
      
            </AccordionTrigger>
            <AccordionContent 
              class="lg:text-lg text-gray-900  md:text-lg font-medium  transition-all duration-300"
            
            >
           {{ item.description }}
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
      <div>

        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const faqs = [
  {
    id: 1,
    title: "⁠⁠ما هي فوائد استخدام منصة ضيافتنا؟",
    description:"منصة ضيافتنا هي منصة تسويقية تهتم ببيع منتجات الأسر المنتجة في السعودية."
  },
  {
    id: 2,
    title: "ما هي منصة ضيافتنا؟",
    description:"منصة ضيافتنا هي منصة تسويقية تهتم ببيع منتجات الأسر المنتجة في السعودية."
  },
  {
    id: 3,
    title: "ما هي متطلبات استخدام منصة ضيافتنا؟",
    description:
      "منصة ضيافتنا هي منصة تسويقية تهتم ببيع منتجات الأسر المنتجة في السعودية."
  },
];
</script>
