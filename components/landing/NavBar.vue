<template>
  <nav class="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-orange-500">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold text-sky-600">
            <img src="/images/logo.svg" class="h-6 md:h-8" alt="logo">
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/#growth-consulting" class="text-gray-600 hover:text-sky-600 transition-colors">
            Growth Consulting
          </NuxtLink>
          <NuxtLink to="/#shop-attendant-course" class="text-gray-600 hover:text-sky-600 transition-colors">
            Digital Sales
          </NuxtLink>
          <NuxtLink to="/#training" class="text-gray-600 hover:text-sky-600 transition-colors">
            Training
          </NuxtLink>
          <NuxtLink to="/#sme-academy" class="text-gray-600 hover:text-sky-600 transition-colors">
            SME Academy
          </NuxtLink>
          <NuxtLink to="/register" class="bg-orange-600 text-white px-4 py-2 font-medium rounded-lg hover:bg-orange-700 transition-colors">
            Get Started
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            class="text-gray-600 hover:text-sky-600 focus:outline-none"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg 
              class="h-6 w-6" 
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-6 w-6" 
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="isMenuOpen" 
        class="md:hidden"
      >
        <div class="px-2 pt-2 flex flex-col pb-3 space-y-4">
          <NuxtLink to="/#growth-consulting" class="text-gray-600 hover:text-sky-600 transition-colors">
            Growth Consulting
          </NuxtLink>
          <NuxtLink to="/#shop-attendant-course" class="text-gray-600 hover:text-sky-600 transition-colors">
            Digital Sales
          </NuxtLink>
          <NuxtLink to="/#training" class="text-gray-600 hover:text-sky-600 transition-colors">
            Training
          </NuxtLink>
          <NuxtLink to="/#sme-academy" class="text-gray-600 hover:text-sky-600 transition-colors">
            SME Academy
          </NuxtLink>
          <NuxtLink to="/register" class="w-full mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors">
            Start Free Trial
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script> 