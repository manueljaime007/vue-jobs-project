<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue';
import { RouterLink } from 'vue-router';

</script>

<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink to="/jobs" class="text-green-500 hover:text-green-600 flex items-center">
        <ArrowLeft class="mr-2" />
      </RouterLink>
    </div>
  </section>
</template>