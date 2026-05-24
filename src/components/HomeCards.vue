<script setup lang="ts">
import { Code2, Building2, ArrowRight } from '@lucide/vue';
</script>

<template>
  <section class="bg-slate-50 py-12">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

        <!-- For Developers -->
        <div
          class="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
          <div
            class="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-50 transition-colors">
            <Code2 class="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
          </div>
          <h2 class="text-xl font-semibold text-slate-900 mb-2">For Developers</h2>
          <p class="text-slate-500 text-sm mb-6 leading-relaxed">
            Browse curated Vue.js positions and take the next step in your career.
          </p>
          <RouterLink to="/jobs"
            class="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-slate-700 transition-colors">
            Browse Jobs
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>

        <!-- For Employers -->
        <div class="group relative bg-blue-600 rounded-2xl p-8 hover:bg-blue-700 transition-all duration-300">
          <div class="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center mb-5">
            <Building2 class="w-5 h-5 text-white" />
          </div>
          <h2 class="text-xl font-semibold text-white mb-2">For Employers</h2>
          <p class="text-blue-200 text-sm mb-6 leading-relaxed">
            Post your role and connect with experienced Vue developers ready to contribute.
          </p>
          <RouterLink to="/jobs/new"
            class="inline-flex items-center gap-2 bg-white text-blue-700 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
            Post a Job
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>

      </div>
    </div>
  </section>
</template>
