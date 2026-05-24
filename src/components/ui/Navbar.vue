<script setup lang="ts">
import logo from '@/assets/img/logo.png';
import { RouterLink, useRoute } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { Briefcase, Menu, X } from '@lucide/vue';

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

const route = useRoute();
const isActive = (path: string) => route.path === path;

const scrolled = ref(false);
const mobileOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-[#0F172A] shadow-lg shadow-black/20'
        : 'bg-[#0F172A]/95 backdrop-blur-md'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">

        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2.5 shrink-0">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Briefcase class="w-4 h-4 text-white" />
          </div>
          <span class="text-white font-semibold text-lg tracking-tight">Vue<span class="text-blue-400">Jobs</span></span>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.id"
            :to="item.path"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              isActive(item.path)
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Mobile toggle -->
        <button
          class="md:hidden text-slate-300 hover:text-white p-2"
          @click="mobileOpen = !mobileOpen"
        >
        <X v-if="mobileOpen" class="w-5 h-5" />
        <Menu v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden border-t border-white/10 px-4 pb-4 pt-2 space-y-1">
      <RouterLink
        v-for="item in navItems"
        :key="item.id"
        :to="item.path"
        @click="mobileOpen = false"
        :class="[
          'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
          isActive(item.path)
            ? 'bg-blue-600 text-white'
            : 'text-slate-300 hover:text-white hover:bg-white/10'
        ]"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>
