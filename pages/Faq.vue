<template>
  <div class="md:mt-28 mt-20">
    <ui-title
      title="الأسئلة الشائعه"
      subtitle="في حال وجود اي استفسار نسعد بتواصلك معنا"
    />
    <div class="container flex flex-col items-center">
      <Accordion
        type="single"
        class="w-full overflow-hidden border-0 flex flex-col mt-8"
        collapsible
      >
        <AccordionItem
          v-for="item in faqs"
          :key="item.id"
          :value="String(item.id)"
          class="group rounded-lg transition-all py-6 md:px-11 duration-200"
        >
          <div>
            <AccordionTrigger
              class="text-lg lg:text-xl font-bold text-gray-500 transition-all duration-200 w-full text-right flex justify-between items-start"
            >
              <span>{{ item.title }}</span>
            </AccordionTrigger>
            <AccordionContent
              class="lg:text-lg text-gray-900 md:text-lg font-medium transition-all duration-300"
            >
              {{ item.description }}
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script lang="ts" setup>
const faqs = [
  {
    id: 1,
    title: "ما هو تطبيق ضيافتنا؟",
    description:
      "تطبيق ضيافتنا هو منصة إلكترونية تربط مزودين الخدمه في  خدمات الضيافة للمناسبات المختلفة، مثل الاجتماعات، الأعراس، العزائم، والمناسبات العائلية. يمكن من خلاله حجز  ، ضيافة تقليدية، بوفيهات، طهاة منزليين.",
  },
  {
    id: 2,
    title: "كيف يمكنني إنشاء حساب؟",
    description:
      "يمكنك إنشاء حساب بسهولة عن طريق إدخال رقم الجوال وتأكيده برسالة نصية، أو من خلال البريد الإلكتروني",
  },
  {
    id: 3,
    title: "هل يتوفر التطبيق على جميع الأجهزة؟",
    description:
      "نعم، التطبيق متوفر على نظامي iOS وAndroid، ويمكن استخدامه أيضًا عبر المتصفح.",
  },
  {
    id: 4,
    title: "كيف أقوم بحجز خدمة ضيافة؟",
    description:
      "كل ما عليك هو اختيار نوع الخدمة، تحديد التاريخ والموقع، ثم تأكيد الطلب والدفع.",
  },
  {
    id: 5,
    title: "هل يمكنني تعديل أو إلغاء الحجز؟",
    description:
      "نعم، يمكنك تعديل أو إلغاء الحجز قبل الموعد المحدد بفترة معينة، حسب سياسة الإلغاء الموضحة لكل مزود خدمة.",
  },
  {
    id: 6,
    title: "هل هناك رسوم إضافية على الحجز؟",
    description: "تُعرض الأسعار شاملة، لكن بعض الخدمات قد تحتوي على رسوم توصيل أو تجهيز إضافية، وسيتم توضيحها قبل إتمام الحجز.",
  },
  {
    id: 7,
    title: "ما وسائل الدفع المتوفرة؟",
    description: "نوفر عدة وسائل دفع، منها بطاقات الائتمان، مدى، Apple Pay، وأحياناً الدفع عند الاستلام حسب نوع الخدمة.",
  },
  {
    id: 8,
    title: "هل يمكنني تقييم مزود الخدمة؟",
    description: "نعم، نحرص على الشفافية والجودة، ويمكنك تقييم الخدمة بعد انتهاء الحجز لمساعدة الآخرين.",
  },
  {
    id: 9,
    title: "هل يوجد دعم فني في حال واجهت مشكلة؟",
    description: "بالتأكيد، يمكنك التواصل مع فريق الدعم من داخل التطبيق أو عبر الواتساب والهاتف على مدار الساعة على الرقم ‪+966 56 311 9562‬",
  },
];
</script>
