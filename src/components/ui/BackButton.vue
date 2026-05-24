<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-2">
    <RouterLink to="/jobs"
      class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
      <ArrowLeft class="w-4 h-4" />
      Back to Jobs
    </RouterLink>
  </div>
</template>
