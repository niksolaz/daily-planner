<template>
  <button 
    @click="onButton" 
    class="flex items-center justify-center rounded-md"
    :class="{
      'bg-blue-500 shadow shadow-blue-700 hover:bg-blue-600 active:shadow-blue-900 active:shadow-inner': variant === 'primary' && !isDisabled,
      'bg-orange-500 shadow shadow-orange-700 hover:bg-orange-600 active:shadow-orange-900 active:shadow-inner': variant === 'secondary' && !isDisabled,
      'bg-grey-500 shadow shadow-grey-700 cursor-default': isDisabled,
      'w-20 px-4 py-2 space-x-2': size === 'sm',
      'w-32 px-4 py-2 space-x-2': size === 'md',
      'w-44 px-4 py-2 space-x-2': size === 'lg',
      'w-full px-4 py-2 space-x-2': size === 'full',
      'size-8': size === 'square'

    }"
  >
    <slot name="icon" />
    <span 
      class="text-sm font-semibold capitalize truncate hover:text-clip"
      :class="{
        'text-white': !isDisabled || !isLoading,
        'text-black': isDisabled
      }"
    >{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value)
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: (value: string) => ['sm', 'md', 'lg', 'full', 'square'].includes(value)
  }
})
// emits
const emit = defineEmits(['onButton'])

// methods
function onButton() {
 emit('onButton')
}
</script>
