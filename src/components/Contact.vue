<script setup lang="ts">
import { personalInfo } from '../data/portfolio';
</script>

<template>
  <section id="contact" class="py-20 px-6 bg-gray-800">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="text-4xl font-bold text-gray-100 mb-6">Let's Connect</h3>
      <p class="text-lg text-gray-300 mb-8">
        Interested in working together or have a question? Feel free to reach out!
      </p>
      <div class="flex justify-center gap-6">
        <a
          :href="personalInfo.linkedin"
          target="_blank"
          class="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
        >
          LinkedIn Profile
        </a>
        <a
          :href="personalInfo.github"
          target="_blank"
          class="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-gray-700 transition-all"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>
