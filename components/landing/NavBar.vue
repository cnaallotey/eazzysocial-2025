<template>
  <nav class="bg-white shadow-sm fixed w-full top-0 z-50 border-b border-orange-500">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold text-sky-600">
            Eazzysocial
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/services" class="text-gray-600 hover:text-sky-600 transition-colors">
            Services
          </NuxtLink>
          <NuxtLink to="/pricing" class="text-gray-600 hover:text-sky-600 transition-colors">
            Pricing
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 hover:text-sky-600 transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-600 hover:text-sky-600 transition-colors">
            Contact
          </NuxtLink>
          <button class="bg-orange-600 text-white px-4 py-2 font-medium rounded-lg hover:bg-orange-700 transition-colors">
            Get Started
          </button>
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
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink 
            to="/services" 
            class="block px-3 py-2 text-gray-600 hover:text-sky-600 hover:bg-gray-50 rounded-md"
          >
            Services
          </NuxtLink>
          <NuxtLink 
            to="/pricing" 
            class="block px-3 py-2 text-gray-600 hover:text-sky-600 hover:bg-gray-50 rounded-md"
          >
            Pricing
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="block px-3 py-2 text-gray-600 hover:text-sky-600 hover:bg-gray-50 rounded-md"
          >
            About
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="block px-3 py-2 text-gray-600 hover:text-sky-600 hover:bg-gray-50 rounded-md"
          >
            Contact
          </NuxtLink>
          <button class="w-full mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors">
            Start Free Trial
          </button>
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