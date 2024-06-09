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
    <div class="relative">
      <button
        class="flex items-center justify-between text-sm text-grey-600 w-full bg-grey-100 border border-grey-200 rounded-lg px-3 py-1 shadow focus:outline-none focus:border-blue-500 hover:border-blue-500 active:border-blue-500 transition duration-300 ease-in-out min-w-20" 
        @click="onToggle">
        <span>{{ selected }}</span>
        <icon-arrow 
          class="w-4 h-4 min-w-4 min-h-4 text-grey-800 z-10 transition duration-600 ease-in-out" 
          :class="{
            '-rotate-90': isOpen,
            'rotate-90': !isOpen
          }"
        /> 
      </button>
      <div v-if="isOpen" class="w-full absolute top-8 bg-white rounded-lg shadow border border-grey-200 z-20">
        <button v-for="(option,i) in options" :key="i" @click="onSelect(option)" class="w-full text-left p-2 hover:bg-orange-100 focus:bg-grey-200">
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconArrow from '../assets/icons/arrow-right.svg';

// props
type Size = 'sm' | 'md' | 'lg' | 'full'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: Size) => ['sm', 'md', 'lg', 'full'].includes(value as Size)
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
const selected = ref(props.labelDefault)
const isOpen = ref(false)

// methods
function onToggle() {
  isOpen.value = !isOpen.value
}

function onSelect(selctedValue: any) {
  selected.value = selctedValue
  isOpen.value = false
  emit('onSelect', selctedValue)
}
</script>
