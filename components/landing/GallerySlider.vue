<template>
  <div class="relative w-full overflow-hidden" @mouseenter="pauseSlideshow" @mouseleave="startSlideshow">
    <!-- Main Image Container -->
    <div class="relative aspect-[16/9] rounded-3xl overflow-hidden w-full">
      <div class="absolute inset-0 flex items-center">
        <!-- Previous Image -->
        <div class="w-1/4 h-full relative overflow-hidden">
          <img
            :src="`/images/gallery/${getPrevImage()}`"
            :alt="`Previous gallery image`"
            class="w-full h-full object-cover opacity-50 scale-110"
          >
          <div class="absolute inset-0 bg-black/30"></div>
        </div>

        <!-- Current Image -->
        <div class="w-2/4 h-full relative overflow-hidden">
          <transition-group name="slide" tag="div" class="absolute inset-0">
            <div
              v-for="(image, index) in images"
              v-show="currentIndex === index"
              :key="image"
              class="absolute inset-0"
            >
              <img
                :src="`/images/gallery/${image}`"
                :alt="`Gallery image ${index + 1}`"
                class="w-full h-full object-cover"
              >
            </div>
          </transition-group>
        </div>

        <!-- Next Image -->
        <div class="w-1/4 h-full relative overflow-hidden">
          <img
            :src="`/images/gallery/${getNextImage()}`"
            :alt="`Next gallery image`"
            class="w-full h-full object-cover opacity-50 scale-110"
          >
          <div class="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors z-10"
      aria-label="Previous slide"
      @click="prevSlide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-colors z-10"
      aria-label="Next slide"
      @click="nextSlide"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Dots Navigation -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button
        v-for="(_, index) in images"
        :key="index"
        class="w-2.5 h-2.5 rounded-full transition-colors"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'"
        :aria-label="`Go to slide ${index + 1}`"
        @click="currentIndex = index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentIndex = ref(0)
const interval = ref<number | null>(null)
const images = Array.from({ length: 16 }, (_, i) => `${i + 1}.jpeg`)
const slideInterval = 5000 // 5 seconds between slides

const getPrevImage = () => {
  const prevIndex = (currentIndex.value - 1 + images.length) % images.length
  return images[prevIndex]
}

const getNextImage = () => {
  const nextIndex = (currentIndex.value + 1) % images.length
  return images[nextIndex]
}

const startSlideshow = () => {
  interval.value = window.setInterval(() => {
    nextSlide()
  }, slideInterval)
}

const pauseSlideshow = () => {
  if (interval.value) {
    clearInterval(interval.value)
    interval.value = null
  }
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

onMounted(() => {
  startSlideshow()
})

onBeforeUnmount(() => {
  pauseSlideshow()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style> 