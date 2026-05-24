<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import { Job } from '@/types/job';
import { useToast } from 'vue-toastification';
import { useRoute } from 'vue-router';
import router from '@/router';
import { Briefcase, Building2 } from '@lucide/vue';
import BackButton from './ui/BackButton.vue';

const route = useRoute();
const jobId = route.params.id;
const toast = useToast();

const form = reactive<Job>({
  id: '',
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '$60K - $70K',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
  }
})

const state = reactive({ isLoading: true })

onMounted(async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobId}`);
    Object.assign(form, response.data);
  } catch (error) {
    toast.error('Could not load job details. Please try again.');
    console.error('Error fetching job:', error);
  } finally {
    state.isLoading = false;
  }
})

const updateJob = async () => {
  try {
    await axios.patch(`/api/jobs/${jobId}`, form);
    toast.success('Job updated successfully!');
    router.push(`/jobs/${jobId}`);
  } catch (error) {
    toast.error('Could not update the job. Please try again.');
    console.error('Error updating job:', error);
  }
}

const inputClass = 'w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-400 transition';
const labelClass = 'block text-sm font-medium text-slate-700 mb-1.5';
</script>

<template>
  <div class="bg-slate-50 min-h-screen pb-16 px-4">
    <BackButton />

    <div class="max-w-2xl mx-auto">

      <div class="mb-8">
        <h1 class="text-2xl font-bold text-slate-900">Edit Job</h1>
        <p class="text-slate-500 text-sm mt-1">Update the details for this listing.</p>
      </div>

      <form @submit.prevent="updateJob" class="space-y-5">

        <!-- Section: Job Details -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-5">
            <Briefcase class="w-4 h-4 text-blue-600" />
            <h2 class="text-sm font-semibold text-slate-900 uppercase tracking-wider">Job Details</h2>
          </div>

          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label :class="labelClass">Job Type</label>
                <select v-model="form.type" :class="inputClass" required>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label :class="labelClass">Salary Range</label>
                <select v-model="form.salary" :class="inputClass" required>
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - $60K">$50K – $60K</option>
                  <option value="$60K - $70K">$60K – $70K</option>
                  <option value="$70K - $80K">$70K – $80K</option>
                  <option value="$80K - $90K">$80K – $90K</option>
                  <option value="$90K - $100K">$90K – $100K</option>
                  <option value="$100K - $125K">$100K – $125K</option>
                  <option value="$125K - $150K">$125K – $150K</option>
                  <option value="$150K - $175K">$150K – $175K</option>
                  <option value="$175K - $200K">$175K – $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>
            </div>

            <div>
              <label :class="labelClass">Job Title</label>
              <input type="text" v-model="form.title" :class="inputClass" placeholder="e.g. Senior Vue.js Developer"
                required />
            </div>

            <div>
              <label :class="labelClass">Location</label>
              <input type="text" v-model="form.location" :class="inputClass" placeholder="e.g. Lisbon, PT or Remote"
                required />
            </div>

            <div>
              <label :class="labelClass">Description</label>
              <textarea v-model="form.description" :class="inputClass" rows="5"
                placeholder="Describe responsibilities, requirements, and what makes this role great..." />
            </div>
          </div>
        </div>

        <!-- Section: Company Info -->
        <div class="bg-white border border-slate-200 rounded-2xl p-6">
          <div class="flex items-center gap-2 mb-5">
            <Building2 class="w-4 h-4 text-blue-600" />
            <h2 class="text-sm font-semibold text-slate-900 uppercase tracking-wider">Company Info</h2>
          </div>

          <div class="space-y-4">
            <div>
              <label :class="labelClass">Company Name</label>
              <input type="text" v-model="form.company.name" :class="inputClass" placeholder="Your company name" />
            </div>

            <div>
              <label :class="labelClass">Company Description</label>
              <textarea v-model="form.company.description" :class="inputClass" rows="3"
                placeholder="What does your company do?" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label :class="labelClass">Contact Email</label>
                <input type="email" v-model="form.company.contactEmail" :class="inputClass" placeholder="hr@company.com"
                  required />
              </div>
              <div>
                <label :class="labelClass">Contact Phone <span
                    class="text-slate-400 font-normal">(optional)</span></label>
                <input type="tel" v-model="form.company.contactPhone" :class="inputClass"
                  placeholder="+244 9xx xxx xxx" />
              </div>
            </div>
          </div>
        </div>

        <button type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm">
          Save Changes
        </button>

      </form>
    </div>
  </div>
</template>
