<script setup lang="ts">
import { Job } from '@/types/job'
import { onMounted, reactive } from 'vue';
import JobListingCard from './ui/JobListingCard.vue';
import axios from 'axios';
import { apiConfig } from '@/shared/config/api.config';
import { PulseLoader } from 'vue-spinner';
import { ArrowRight } from '@lucide/vue';

const { baseURL } = apiConfig;

const state = reactive({
  jobs: [] as Job[],
  isLoading: true,
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
  limit: 10,
})
</script>

<template>
  <section class="bg-slate-50 px-4 py-16">
    <div class="max-w-6xl mx-auto">

      <div class="flex items-center justify-between mb-10">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Latest Openings</h2>
          <p class="text-slate-500 text-sm mt-1">Updated regularly with new Vue.js roles</p>
        </div>
        <RouterLink v-if="showButton" to="/jobs"
          class="hidden sm:flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
          View all
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>

      <div v-if="state.isLoading" class="flex justify-center py-20">
        <PulseLoader color="#1D4ED8" />
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <JobListingCard v-for="job in state.jobs?.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
      </div>

      <!-- Mobile "view all" button -->
      <div v-if="showButton" class="mt-10 sm:hidden text-center">
        <RouterLink to="/jobs"
          class="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-slate-700 transition-colors">
          View All Jobs
          <ArrowRight class="w-4 h-4" />
        </RouterLink>
      </div>

    </div>
  </section>
</template>
