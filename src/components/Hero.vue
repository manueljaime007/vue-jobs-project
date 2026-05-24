<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
  }>(),
  {
    title: 'Find Your Next Vue Role',
    subtitle: 'Hundreds of opportunities from companies building the future with Vue.js',
  }
)
</script>

<template>
  <section class="relative bg-[#0F172A] pt-32 pb-24 overflow-hidden">
    <!-- Background grid pattern -->
    <div
      class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMSAxaDU4djU4SDEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-40">
    </div>

    <!-- Glow -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-600/20 rounded-full blur-3xl pointer-events-none">
    </div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <span
        class="inline-block mb-5 px-3 py-1 text-xs font-semibold tracking-widest uppercase text-amber-400 border border-amber-400/30 rounded-full bg-amber-400/10">
        Vue.js Job Board
      </span>
      <h1 class="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
        {{ title }}
      </h1>
      <p class="text-lg text-slate-400 max-w-xl mx-auto">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
