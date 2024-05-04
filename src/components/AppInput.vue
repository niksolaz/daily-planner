<template>
  <div :id="uid" class="flex items-center space-x-4 border-b py-1">
    <input
      v-model="checkValue"
      type="checkbox"
      :disabled="isDisabled"
      @change="onCheck"
    >
    <input
      v-model="labelValue"
      type="text"
      :disabled="isDisabled"
      @input="onInput"
    >
  </div>
</template>

<script lang="ts">
let id = 0;
</script>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

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
function onInput(e) {
  labelValue.value = e.target.value;
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

function onCheck(e) {
    checkValue.value = e.target.checked;
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