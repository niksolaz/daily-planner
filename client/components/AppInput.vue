<template>
  <div :id="uid" class="flex items-center space-x-4">
    <button @click="onCheck">
      <div 
        class="w-5 h-5 rounded-full border flex items-center justify-center" 
        :class="{
          'bg-blue-500 border-blue-500': checkValue,
          'bg-white border-grey-500': !checkValue,
          'bg-orange-500 border-orange-500': isDisabled
        }"
      >
       <icon-close class="w-2 h-2 text-white" :class="{ 'rotate-45': checkValue && !isDisabled }"/>
      </div>
    </button>
    <input
      v-model="labelValue"
      type="text"
      :disabled="isDisabled"
      class="w-full rounded-lg px-3 py-1 shadow-sm shadow-blue-200 hover:shadow hover:shadow-blue-400 hover:outline-none focus:shadow-inner focus:shadow-blue-400 focus:outline-none transition duration-300 ease-in-out"
      :class="{
        'shadow-grey-200 hover:shadow-none text-grey-500': isDisabled
      }"
      @input="onInput"
    >
  </div>
</template>

<script lang="ts">
let id = 0;
</script>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import IconClose from '../assets/icons/close.svg';

const emit = defineEmits(['onEdit']);

const props = withDefaults(defineProps<{
    label: string,
    isCheck: boolean
    isDisabled: boolean
}>(), {
    label: '',
    isCheck: false,
    isDisabled: false
});

const uid = `app-input-${++id}`

// refs
const labelValue = ref('');
const checkValue = ref(false);


// methods
function onInput(e: Event) {
  labelValue.value = (e.target as HTMLInputElement).value;
  if(labelValue.value !== '') {
    checkValue.value = true;
  } else {
    checkValue.value = false;
  }
    emit('onEdit', {
        label: labelValue.value,
        isCheck: checkValue.value
    });
}

function onCheck(e: Event) {
    if(props.isDisabled) return
    checkValue.value = !checkValue.value // (e.target as HTMLInputElement).checked //e.target.checked;
    console.log(checkValue.value)
    emit('onEdit', {
        label: labelValue.value,
        isCheck: checkValue.value
    });
}

// lifecycle

watch(() => props.label, (newValue) => {
    labelValue.value = newValue;
    if(labelValue.value !== '') {
        checkValue.value = true;
    } else {
        checkValue.value = false;
    }
});

watch(() => props.isCheck, (newValue) => {
    checkValue.value = newValue;
});

onMounted(() => {
  labelValue.value = props.label;
  checkValue.value = props.isCheck;
});
</script>