<script setup lang="ts">
import { Job } from '@/types/job'
import { MapPin, ArrowRight } from '@lucide/vue'
import { ref, computed } from 'vue';

const { job } = defineProps<{ job: Job }>()

const showFull = ref(false);

const typeColors: Record<string, string> = {
  'Full-Time': 'bg-blue-50 text-blue-700',
  'Part-Time': 'bg-amber-50 text-amber-700',
  'Remote': 'bg-emerald-50 text-emerald-700',
  'Internship': 'bg-purple-50 text-purple-700',
};

const badgeClass = computed(() =>
  typeColors[job.type] ?? 'bg-slate-100 text-slate-600'
);

const description = computed(() => {
  const d = job.description || '';
  return showFull.value ? d : d.substring(0, 100) + (d.length > 100 ? '...' : '');
});
</script>

<template>
  <div
    class="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md hover:border-blue-200 transition-all duration-200">

    <!-- Header -->
    <div class="flex items-start justify-between gap-3">
      <div>
        <span :class="['text-xs font-semibold px-2.5 py-1 rounded-full', badgeClass]">
          {{ job.type }}
        </span>
        <h3 class="mt-2 text-lg font-semibold text-slate-900 leading-snug">{{ job.title }}</h3>
      </div>
    </div>

    <!-- Description -->
    <p class="text-sm text-slate-500 leading-relaxed flex-1">
      {{ description }}
    </p>
    <button v-if="(job.description || '').length > 100" @click="showFull = !showFull"
      class="text-xs text-blue-600 hover:text-blue-800 font-medium -mt-2 text-left">
      {{ showFull ? 'Show less' : 'Read more' }}
    </button>

    <div class="border-t border-slate-100"></div>

    <!-- Footer -->
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-1">
        <span class="text-sm font-semibold text-slate-900">{{ job.salary }}<span class="text-slate-400 font-normal"> /
            yr</span></span>
        <div class="flex items-center gap-1 text-xs text-slate-400">
          <MapPin class="w-3.5 h-3.5" />
          {{ job.location }}
        </div>
      </div>
      <RouterLink :to="'/jobs/' + job.id"
        class="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
        View
        <ArrowRight class="w-3.5 h-3.5" />
      </RouterLink>
    </div>

  </div>
</template>
