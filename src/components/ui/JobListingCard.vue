<script setup lang="ts">
import { Job } from '@/types/job'
import { MapPin } from '@lucide/vue'

import { ref, computed } from 'vue';

const { job } = defineProps<{
  job: Job
}>()

const showFullDescription = ref(false);

const truncateDescription = computed(() => {
  let description = job.description || '';

  if (!showFullDescription.value) {
    description = description.substring(0, 90) + '...';
  }
  return description;
});

const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
}

</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold">{{ job.title }}</h3>
      </div>

      <div class="mb-5">
        <div class="text-gray-700 mb-3">
          {{ job.description ?
            truncateDescription : 'No description available.'
          }}
        </div>
        <button @click="toggleFullDescription" class="text-green-500 hover:text-green-600 mb-5">
          {{ showFullDescription ? 'Show Less' : 'Read More' }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">{{ job.salary }} / Year</h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <!-- <i class="fa-solid fa-location-dot text-lg"></i> -->
          <MapPin class="inline-block text-lg" />
          {{ job.location }}
        </div>
        <RouterLink :to="'/jobs/' + job.id"
          class="h-9 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm">
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
