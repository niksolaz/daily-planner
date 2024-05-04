<template>
  <div class="p-10 space-y-5">
    <div class="space-y-2 w-1/3 p-2 border">
      <span class="text-sm font-semibold">Task Open</span>
      <div
        v-for="(day,i) in listToday"
        :key="i"
      >
        <app-input
          :is-check="day.isCheck"
          :label="day.label"
          @on-edit="onEdit($event, i)"
        />
      </div>
      <div>
        <button class="text-green-700 p-1 border border-green-700 rounded-lg" @click="onAddNew">+ Add New</button>
      </div>
    </div>
    <div class="space-y-2 w-1/3 p-2 border" v-if="listTodayClose.length > 0">
      <span class="text-sm font-semibold">Task Closed</span>
      <div
        v-for="(day,i) in listTodayClose"
        :key="i"
      >
        <app-input
          :is-check="day.isCheck"
          :label="day.label"
          :is-disabled="true"
        />
      </div>
      <div>
        <button class="text-red-700 p-1 border border-red-700 rounded-lg"  @click="onEmpty">- Empy List</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { IListToday } from '../types'; // Import the IListToday interface from the correct location

import AppInput from '../components/AppInput.vue';

import { useI18n } from 'vue-i18n';

const { d, t } = useI18n({ useScope: 'global' })

const listToday = ref([
  { label: 'Monday', isCheck: true },
  { label: 'Tuesday', isCheck: true },
  { label: 'Wednesday', isCheck: true },
  { label: 'Thursday', isCheck: true },
  { label: 'Friday', isCheck: true },
  { label: 'Saturday', isCheck: true },
  { label: 'Sunday', isCheck: true }
]) as IListToday[];

const listTodayClose = ref([]) as IListToday[];


function onAddNew() {
  (listToday.value as IListToday[]).push({ label: '', isCheck: false });
}

function onEmpty() {
  (listTodayClose.value as IListToday[]) = [];
}

function onEdit(element: IListToday, i: number) {
  if(element.label === '') {
    (listToday.value as IListToday[]).splice(i, 1)
    return
  } 
  if(element.isCheck === false) {
    (listTodayClose.value as IListToday[]).push(listToday.value[i]);
    (listToday.value as IListToday[]).splice(i, 1)
    return
  } 
  (listToday.value[i] as IListToday) = element;
}
</script>


