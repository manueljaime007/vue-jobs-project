<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { SearchX, ArrowLeft } from '@lucide/vue';
</script>

<template>
  <div class="bg-slate-50 min-h-screen flex flex-col items-center justify-center px-4 text-center">
    <div class="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
      <SearchX class="w-8 h-8 text-slate-400" />
    </div>
    <p class="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">Error 404</p>
    <h1 class="text-4xl font-bold text-slate-900 mb-3">Page not found</h1>
    <p class="text-slate-500 text-sm max-w-sm mb-8">
      The page you're looking for doesn't exist or may have been moved.
    </p>
    <RouterLink to="/"
      class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors">
      <ArrowLeft class="w-4 h-4" />
      Back to Home
    </RouterLink>
  </div>
</template>
