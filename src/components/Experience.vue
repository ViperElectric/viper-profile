<script setup lang="ts">
import { experience } from '../data/portfolio';
import type { Experience } from '../data/portfolio';
</script>

<template>
  <section id="experience" class="py-20 px-6 bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-4xl font-bold text-gray-100 mb-12 text-center">Work Experience</h3>
      <div class="space-y-8">
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="card-hover bg-gray-800 rounded-xl shadow-md p-8 relative border-l-4 border-emerald-500"
        >
          <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h4 class="text-2xl font-bold text-gray-100 mb-2">{{ job.title }}</h4>
              <p class="text-lg text-emerald-400 font-semibold mb-1">{{ job.company }}</p>
              <p class="text-gray-300">{{ job.location }}</p>
            </div>
            <div class="mt-2 md:mt-0">
              <span class="inline-block px-4 py-2 bg-emerald-900/50 text-emerald-300 rounded-full text-sm font-medium">
                {{ job.duration }}
              </span>
            </div>
          </div>
          
          <ul class="space-y-3 text-gray-300">
            <li v-for="(item, i) in job.responsibilities" :key="i" class="flex items-start">
              <svg class="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
          
          <div v-if="job.skills.length" class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="skill in job.skills"
              :key="skill"
              class="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-xs font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
