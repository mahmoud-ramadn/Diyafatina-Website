<script setup lang="ts">
import { cn } from '@/lib/utils'
import {ChevronDown } from 'lucide-vue-next'
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionTriggerProps & { 
  class?: HTMLAttributes['class']
  iconClass?: HTMLAttributes['class']
}>()

const delegatedProps = computed(() => {
  const { class: _, iconClass: __, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'group flex flex-1  items-start justify-between  rounded-3xl py-4 font-medium transition-all',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="size-5 text-gray-400 font-bold transition-transform duration-200    shrink-0  group-data-[state=open]:-rotate-180"
          :class="props.iconClass"
        />
        
        

          
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>