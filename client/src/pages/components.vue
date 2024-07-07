<template>
  <div class="p-10 space-y-5">
    <div>
      <app-button @onButton="goToTask" label="go task" variant="primary"/>
    </div>
    <div class="space-y-2">
      <h3>Buttons</h3>
      <app-button @onButton="onButton" label="primary" variant="primary"/>
      <app-button @onButton="onButton" label="disable" variant="primary" :is-disabled="true"/>
      <app-button @onButton="onButton" label="secondary" variant="secondary"/>
      <app-button @onButton="onButton" label="add size sm" size="sm">
        <template #icon>
          <icon-plus class="w-4 h-4 min-w-4 min-h-4 text-white" />
        </template>
      </app-button>
      <app-button @onButton="onButton" label="add size md" size="md">
        <template #icon>
          <icon-plus class="w-4 h-4 min-w-4 min-h-4 text-white" />
        </template>
      </app-button>
      <app-button @onButton="onButton" label="add size lg" size="lg">
        <template #icon>
          <icon-plus class="w-4 h-4 min-w-4 min-h-4 text-white" />
        </template>
      </app-button>
      <app-button @onButton="onButton" label="add size full" size="full">
        <template #icon>
          <icon-plus class="w-4 h-4 min-w-4 min-h-4 text-white" />
        </template>
      </app-button>
    </div>
    <div class="space-y-2">
      <h3>Select</h3>
      <app-select label="sm" size="sm" :options="['yes', 'no', 'maybe']"/>
      <app-select label="md" size="md" :options="['yes', 'no', 'maybe']"/>
      <app-select label="lg" size="lg" :options="['yes', 'no', 'maybe']"/>
      <app-select label="full" size="full" @on-select="onSelect($event)" :options="['yes', 'no', 'maybe']" />
    </div>
    <div class="space-y-2">
      <h3>Effect Square</h3>
      <effect-square />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from '../components/AppButton.vue';
import AppSelect from '../components/AppSelect.vue';
import EffectSquare from '../components/EffectSquare.vue';

import IconPlus from '../assets/icons/plus.svg';

import { useRouter } from 'vue-router';

const router = useRouter();

// methods
function onButton() {
  console.log('onButton')
}

function onSelect(ev: any) {
  console.log('onSelect', ev)
}

function goToTask() {
  console.log('goToTask')
  router.push('/task' );
}
</script>


