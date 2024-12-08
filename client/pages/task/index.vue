<template>
  <div class="p-10 space-y-5">
    TASK
    <!--
    <div>
      <app-button label="Go Home" @on-button="goToDashboard" />
    </div>
    <div class="space-y-2">
      <span class="text-sm font-semibold">List Day Task</span>
      <div class="flex items-center space-x-2">
        <div v-for="(day, i) in listSelectedDay" :key="i">
          <button @click="onGetDay(day)"
            class="border border-orange-200 bg-orange-100 rounded p-2 text-xs font-medium text-orange-600">{{ formatDate(day.id) }}
          </button>
        </div>
      </div>
      <div v-if="isVisibleList">
        <div class="flex items-center space-x-2">
          <span class="text-sm font-semibold">Day {{ dayId }}</span>
          <app-button size="square" variant="secondary" @on-button="resetDay">
            <template #icon>
              <icon-plus class="w-4 h-4 text-white rotate-45" />
            </template>
          </app-button>
        </div>
        <div v-for="(day, i) in listDay" :key="i">
          <app-input :is-check="day.isCheck" :label="day.label" :is-disabled="day.isCheck" class="py-2 w-1/3" @click="addOldTask(day)"/>
        </div>
      </div>
    </div>
    <div class="space-y-2 w-1/3 p-2 border">
      <span class="text-sm font-semibold">Task Open</span>
      <div v-for="(day, i) in listToday" :key="i">
        <app-input :is-check="day.isCheck" :label="day.label" :is-disabled="false" @on-edit="onEdit($event, i)" />
      </div>
      <div>
        <app-button label="+ Add New" @on-button="onAddNew" />
      </div>
    </div>
    <div class="space-y-2 w-1/3 p-2 border" v-if="listTodayClose.length > 0">
      <span class="text-sm font-semibold">Task Closed</span>
      <div v-for="(day, i) in listTodayClose" :key="i">
        <app-input :is-check="day.isCheck" :label="day.label" :is-disabled="true" />
      </div>
      <div>
        <app-button label="- Empy List" variant="secondary" @on-button="onEmpty" />
      </div>
    </div>
    -->
  </div>
</template>

<script setup lang="ts">
/*
  import { ref, onMounted } from 'vue';

  import { IListToday, IListSelectedDay } from '../../types';

  import AppInput from '../../components/AppInput.vue';
  import AppButton from '../../components/AppButton.vue';

  import IconPlus from '../../assets/icons/plus.svg';

  import { useI18n } from 'vue-i18n';
  import { useRoute, useRouter } from 'vue-router';
  import { useApi } from '../../composables/useApi'

  const router = useRouter();
  const route = useRoute();
  const api = useApi();

  const { d, t } = useI18n({ useScope: 'global' })

  const listSelectedDay = ref<IListSelectedDay[]>([])
  const listDay = ref<IListToday[]>([]);
  const listToday = ref<IListToday[]>([]);
  const isVisibleList = ref(false)
  const dayId = ref('')

  const listTodayClose = ref<IListToday[]>([]);


  function onAddNew() {
    (listToday.value as IListToday[]).push({ label: '', isCheck: false });
  }

  function addOldTask(taskDay: IListToday): any {
    const findTask = (listToday.value as IListToday[]).filter((t) => t.label === taskDay.label)
    if(findTask.length === 0) {
      (listToday.value as IListToday[]).push({ label: taskDay.label, isCheck: true });
    }
  }
 
  function onEmpty() {
    (listTodayClose.value as IListToday[]) = [];
  }

  function onEdit(element: IListToday, i: number) {
    if (element.label === '') {
      (listToday.value as IListToday[]).splice(i, 1)
      return
    }
    if (element.isCheck === false) {
      (listTodayClose.value as IListToday[]).push(listToday.value[i]);
      (listToday.value as IListToday[]).splice(i, 1)
      return
    }
    (listToday.value[i] as IListToday) = element;
  }

  function goToDashboard() {
    console.log('goToDashboard')
    router.push('/');
  }

  function formatDate(date: string | number) {
    let isValidDate
    let dateNumber
    if (typeof date === 'number') {
      dateNumber = date
      isValidDate = true
    } else if (typeof date === 'string') {
      dateNumber = Number(date)
      isValidDate = true
    } else {
      isValidDate = false
    }

    if (isValidDate) {
      const d = new Date(dateNumber)
      const dd = d.getDate()
      if (dd < 10) {
        dd = '0' + dd
      }
      let mm = d.getMonth() + 1
      if (mm < 10) {
        mm = '0' + mm
      }
      const yy = d.getFullYear()
      return `${dd}/${mm}/${yy}`
    } else {
      return '--/--/----'
    }
  }

  function onGetDay(day) {
    listDay.value = []
    dayId.value = formatDate(day.id)
    isVisibleList.value = true
    listDay.value = [...day.list]
  }

  function resetDay() {
    listDay.value = []
    isVisibleList.value = false
    dayId.value = ''
  }

  onMounted(async () => {
    listSelectedDay.value = await api.GET(`http://localhost:8000/tasks?userId=${route.query.userId}`)
  })
    */
</script>
