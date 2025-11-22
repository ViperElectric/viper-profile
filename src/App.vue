<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const activeSection = ref<string>('home');

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
});

const updateActiveSection = (): void => {
  const sections: string[] = ['home', 'skills', 'experience', 'contact'];
  const scrollPos: number = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i]);
    if (section && section.offsetTop <= scrollPos) {
      activeSection.value = sections[i];
      break;
    }
  }
};
</script>

<template>
  <div class="bg-gray-900">
    <Navigation :active-section="activeSection" />
    <Hero />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </div>
</template>
