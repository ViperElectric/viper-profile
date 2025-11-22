<script setup lang="ts">
import { skills } from '../data/portfolio';
import type { SkillCategory } from '../data/portfolio';
</script>

<template>
  <section id="skills" class="py-20 px-6 bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-4xl font-bold text-gray-100 mb-12 text-center">Technical Skills</h3>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="category in skills" :key="category.name" class="fade-in">
          <h4 class="text-xl font-semibold text-gray-100 mb-4">{{ category.name }}</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in category.items"
              :key="skill"
              class="skill-tag px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
