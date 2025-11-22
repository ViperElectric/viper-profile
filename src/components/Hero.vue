<script setup lang="ts">
import { personalInfo } from '../data/portfolio';
</script>

<template>
  <section id="home" class="pt-32 pb-20 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="fade-in">
        <h2 class="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
          Hi, I'm <span class="gradient-text">{{ personalInfo.name }}</span>
        </h2>
        <p class="text-2xl md:text-3xl text-gray-300 mb-8">
          {{ personalInfo.title }}
        </p>
        <p class="text-lg text-gray-400 max-w-2xl mb-8">
          {{ personalInfo.summary }}
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#experience"
            class="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            View Experience
          </a>
          <a
            href="#contact"
            class="px-8 py-3 border-2 border-emerald-500 text-emerald-400 rounded-lg font-medium hover:bg-gray-800 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
