<script setup lang="ts">
import { ref } from 'vue';
import { navItems } from '../data/portfolio';
import type { NavItem } from '../data/portfolio';

interface Props {
  activeSection: string;
}

defineProps<Props>();

const menuOpen = ref<boolean>(false);
</script>

<template>
  <nav class="fixed top-0 w-full bg-gray-800/90 backdrop-blur-md shadow-sm z-50">
    <div class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold gradient-text">DC</h1>
        
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="'#' + item.id"
            class="nav-link text-gray-100 hover:text-emerald-400 font-medium"
            :class="{ 'active': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </div>
        
        <button @click="menuOpen = !menuOpen" class="md:hidden text-gray-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden mt-4 space-y-2">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="'#' + item.id"
          class="block py-2 text-gray-100 hover:text-emerald-400"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
