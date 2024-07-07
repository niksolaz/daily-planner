<template>
  <div class="p-10 space-y-5">
    <div>
      <app-button @onButton="goToTask" label="go task" variant="primary"/>
    </div>
    <div>
      <h1>Welcome on Daily Planner</h1>
      <ul v-if="users">
        <li 
          v-for="(user,i) in users" 
          :key="i" 
          class="space-y-5 text-sm font-medium text-blue-700 border-b py-5 w-1/3" 
        >
          <div>
            <span 
              class="block capitalize"
              :class="{
                'text-green-700 font-semibold': user.isAdmin
              }"
            >{{ user.username }}</span>
            <span :id="`info-${i}`">
              {{ user.name }} - {{ user.surname }} - {{ user.email }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppButton from '../components/AppButton.vue';

import { useRouter } from 'vue-router';
import { useApi } from '../composables/useApi'

const router = useRouter();
const api = useApi(); 
const users = ref(null)

// methods
function goToTask() {
  console.log('goToTask')
  router.push('/task' );
}

onMounted(async () => {
  users.value = await api.GET('http://localhost:8000/users')
})
</script>


