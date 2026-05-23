<script setup lang="ts">
import { Job } from '@/types/job'
import { onMounted, reactive, ref } from 'vue';
import JobListingCard from './ui/JobListingCard.vue';
import axios from 'axios';
import { apiConfig } from '@/shared/config/api.config';
import { PulseLoader } from 'vue-spinner';
import { useToast } from 'vue-toastification';


const { baseURL } = apiConfig;

const toast = useToast();


const state = reactive({
  jobs: [],
  isLoading: true
})

onMounted(async () => {
  try {
    const response = await axios.get(`${baseURL}/jobs`);
    state.jobs = response.data;
  } catch (err) {
    console.error('Error fetching jobs:', err);
  } finally {
    state.isLoading = false;
  }
})


withDefaults(defineProps<{
  limit?: number
  showButton: boolean
}>(), {
  showButton: false,
  limit: 10
})

</script>

<template>

  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show Spinner Loader-->
      
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListingCard v-for="job in state.jobs?.slice(0, limit || state.jobs.length)" :key="job" :job="job" />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
      View All Jobs
    </RouterLink>
  </section>

</template>
