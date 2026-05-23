<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';

import { MapPin } from '@lucide/vue';
import { PulseLoader } from 'vue-spinner';
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import { apiConfig } from '@/shared/config/api.config';
import { useRoute, RouterLink } from 'vue-router';
import { Job } from '@/types/job';
import BackButton from '@/components/ui/BackButton.vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import router from '@/router';
const route = useRoute()

const toast = useToast();

const jobId = route.params.id as string;
const state = reactive({
  job: {} as Job,
  isLoading: true
})


onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    console.log('Job data:', response.data);
    state.job = response.data;
  } catch (err) {
    console.error('Error fetching job data:', err);
  } finally {
    state.isLoading = false;
  }
})

const deleteJob = async () => {
  try {
    await axios.delete(`/api/jobs/${jobId}`);
    toast.success('Job deleted successfully!');
    // Redirect to jobs list after deletion
    router.push('/jobs');
  } catch (err) {
    console.error('Error deleting job:', err);
  }
}
</script>

<template>
  <BackButton />

  <section v-if="!state.isLoading" class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ state.job.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <MapPin class="text-lg text-orange-700 mr-2" />
              <p class="text-orange-700">{{ state.job.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Job Description
            </h3>

            <p class="mb-4">
              {{ state.job.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ state.job.salary }}</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ state.job.company.name }}</h2>

            <p class="my-2">
              {{ state.job.company.description }}
            </p>
            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">
              {{ state.job.company.contactEmail }}
            </p>

            <h3 class="text-xl">{{ state.job.company.contactPhone }}</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">555-555-5555</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink :to="`/jobs/${jobId}/edit`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Edit
              Job</RouterLink>
            <button
              @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <section v-else class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="flex justify-center items-center h-64 transform rotate-90">
        <PulseLoader :loading="state.isLoading" color="#34D399" />
      </div>
    </div>
  </section>

</template>
