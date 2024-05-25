<template>
  <div 
    class="space-y-1"
    :class="{
      'w-20': size === 'sm',
      'w-32': size === 'md',
      'w-44': size === 'lg',
      'w-full': size === 'full',

    }"
  >
    <span class="text-xs font-medium text-grey-800 block px-3 capitalize truncate hover:text-clip">{{ label }}</span>
    <div class="relative flex items-center">
      <select 
        v-model="selected"
        @change="onSelect(selected)"
        class="text-sm text-grey-600 w-full appearance-none bg-grey-100 border border-grey-200 rounded-lg px-3 py-1 shadow focus:outline-none focus:border-blue-500 hover:border-blue-500 active:border-blue-500 transition duration-300 ease-in-out min-w-20"
      >
        <option disabled value="" class="text-xs">{{ labelDefault }}</option>
        <option v-for="(option,i) in options" :key="i" :value="option">
          {{ option }}
        </option>
      </select>
      <icon-arrow class="w-4 h-4 min-w-4 min-h-4 text-grey-800 z-10 absolute right-2 rotate-90" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconArrow from '../assets/icons/arrow-right.svg';

// props
defineProps({
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg', 'full'].includes(value)
  },
  options: {
    type: Array,
    default: () => []
  },
  labelDefault: {
    type: String,
    default: '...'
  }
})

// emits
const emit = defineEmits(['onSelect'])

// refs
const selected = ref('')

// methods
function onSelect(selctedValue: any) {
  emit('onSelect', selctedValue)
}
</script>
