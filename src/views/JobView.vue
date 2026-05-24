<script setup lang="ts">
import { MapPin, DollarSign, Briefcase, Mail, Phone, Trash2, Pencil } from '@lucide/vue';
import { PulseLoader } from 'vue-spinner';
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import { Job } from '@/types/job';
import BackButton from '@/components/ui/BackButton.vue';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const jobId = route.params.id as string;
const state = reactive({
  job: {} as Job,
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    state.job = response.data;
  } catch (err) {
    console.error('Error fetching job:', err);
  } finally {
    state.isLoading = false;
  }
})

const deleteJob = async () => {
  if (!confirm('Are you sure you want to delete this job?')) return;
  try {
    await axios.delete(`/api/jobs/${jobId}`);
    toast.success('Job deleted successfully!');
    router.push('/jobs');
  } catch (err) {
    console.error('Error deleting job:', err);
  }
}

const typeColors: Record<string, string> = {
  'Full-Time': 'bg-blue-50 text-blue-700 border-blue-100',
  'Part-Time': 'bg-amber-50 text-amber-700 border-amber-100',
  'Remote': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Internship': 'bg-purple-50 text-purple-700 border-purple-100',
};
</script>

<template>
  <div class="bg-slate-50 min-h-screen">
    <BackButton />

    <!-- Loading -->
    <div v-if="state.isLoading" class="flex justify-center items-center h-64">
      <PulseLoader color="#1D4ED8" />
    </div>

    <div v-else class="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        <!-- Main content -->
        <main class="space-y-5">

          <!-- Title card -->
          <div class="bg-white border border-slate-200 rounded-2xl p-8">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span
                :class="['text-xs font-semibold px-3 py-1 rounded-full border', typeColors[state.job.type] ?? 'bg-slate-100 text-slate-600 border-slate-200']">
                {{ state.job.type }}
              </span>
            </div>
            <h1 class="text-3xl font-bold text-slate-900 mb-4">{{ state.job.title }}</h1>
            <div class="flex items-center gap-1.5 text-slate-500 text-sm">
              <MapPin class="w-4 h-4 text-blue-500" />
              {{ state.job.location }}
            </div>
          </div>

          <!-- Description -->
          <div class="bg-white border border-slate-200 rounded-2xl p-8">
            <h2 class="text-base font-semibold text-slate-900 mb-4">Job Description</h2>
            <p class="text-slate-600 leading-relaxed whitespace-pre-line">{{ state.job.description }}</p>

            <div class="mt-6 pt-6 border-t border-slate-100 flex items-center gap-2">
              <DollarSign class="w-4 h-4 text-emerald-500" />
              <span class="font-semibold text-slate-900">{{ state.job.salary }}</span>
              <span class="text-slate-400 text-sm">per year</span>
            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside class="space-y-5">

          <!-- Company info -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <Briefcase class="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <p class="text-xs text-slate-400 uppercase tracking-wider">Company</p>
                <h2 class="font-semibold text-slate-900">{{ state.job.company?.name }}</h2>
              </div>
            </div>

            <p class="text-sm text-slate-500 leading-relaxed mb-5">
              {{ state.job.company?.description }}
            </p>

            <div class="space-y-3">
              <div class="flex items-start gap-2.5">
                <Mail class="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                <a :href="`mailto:${state.job.company?.contactEmail}`"
                  class="text-sm text-blue-600 hover:underline break-all">
                  {{ state.job.company?.contactEmail }}
                </a>
              </div>
              <div v-if="state.job.company?.contactPhone" class="flex items-center gap-2.5">
                <Phone class="w-4 h-4 text-slate-400 shrink-0" />
                <span class="text-sm text-slate-600">{{ state.job.company?.contactPhone }}</span>
              </div>
            </div>
          </div>

          <!-- Manage -->
          <div class="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 class="text-sm font-semibold text-slate-900 mb-4">Manage Job</h3>
            <div class="space-y-2.5">
              <RouterLink :to="`/jobs/${jobId}/edit`"
                class="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-colors">
                <Pencil class="w-4 h-4" />
                Edit Job
              </RouterLink>
              <button @click="deleteJob"
                class="flex items-center justify-center gap-2 w-full border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-sm font-medium py-2.5 px-4 rounded-xl transition-colors">
                <Trash2 class="w-4 h-4" />
                Delete Job
              </button>
            </div>
          </div>

        </aside>
      </div>
    </div>
  </div>
</template>
