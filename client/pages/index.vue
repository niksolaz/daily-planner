<template>
  <div class="p-10 space-y-5">
    <div>
      <h1>Welcome on Daily Planner</h1>
      <div 
        v-if="users"
        class="space-y-5 mt-5" 
      >
        <div 
          v-for="(user,i) in users" 
          :key="i" 
        >
          <app-button 
            :label="user.username" 
            @onButton="goToTask(user.id)" 
            :variant="user.isAdmin ? 'secondary' : 'primary'"
          />
          <ul 
            :id="`info-${i}`" 
            class="hidden py-4 font-medium text-gray-700 space-y-2 border-b w-1/3 rounded-xl shadow-xl text-lg px-2"
          >
            <li><b>{{ user.username }}</b></li>
            <li><b>{{ user.email }}</b></li>
          </ul>
        </div>
      </div>
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
function goToTask(userId) {
  console.log('goToTask')
  router.push({ path:'/task', query: { userId: userId}});
}

onMounted(async () => {
  users.value = await api.GET('http://localhost:8000/users')
})
</script>


