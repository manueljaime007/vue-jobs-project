<script setup lang="ts">
import logo from '@/assets/img/logo.png';
import { RouterLink, useRoute } from 'vue-router';

interface NavItem {
  id: number;
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Jobs', path: '/jobs' },
  { id: 3, name: 'Add Job', path: '/jobs/new' },
];

const isActive = (path: string): boolean => {
  const route = useRoute();
  return route.path === path;
};

</script>

<template>
  <nav class=" bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2">Vue Jobs</span>
          </RouterLink>

          <div class="md:ml-auto">
            <div class="flex space-x-2">

              <RouterLink v-for="item in navItems" :key="item.id" :to="item.path" :class="[
                isActive(item.path) ? 'bg-green-900 text-white' : 'text-white hover:bg-gray-900 hover:text-white',
                'rounded-md px-3 py-2'
              ]">{{ item.name }}</RouterLink>
            </div>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>
