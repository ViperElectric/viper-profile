<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-8 px-6">
    <div class="max-w-6xl mx-auto text-center">
      <p>&copy; {{ currentYear }} Daniel Cser. All rights reserved.</p>
      <p class="mt-2 text-sm text-gray-400">Built with Vue.js, TypeScript & Tailwind CSS</p>
    </div>
  </footer>
</template>
