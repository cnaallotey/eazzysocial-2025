<template>
  <div v-if="!bannerClosed" id="hs-subscription-with-image" class="w-full h-screen flex item-center fixed top-0 bg-white/10 backdrop-blur-md start-0 z-[1000] overflow-x-hidden overflow-y-auto" role="dialog" tabindex="-1" aria-labelledby="hs-subscription-with-image-label">
    <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 flex flex-col justify-center hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div class="relative flex flex-col my-auto bg-white shadow-lg rounded-xl dark:bg-neutral-900">
        <div class="absolute top-2 z-10 end-2">
          <button type="button" class="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-subscription-with-image" @click="closeBanner">
            <span class="sr-only">Close</span>
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
  
        <div class="aspect-w-16 aspect-h-8">
          <img class="w-full object-cover rounded-t-xl" src="/images/banner-img.png" alt="Modal Hero Image">
        </div>
  
        <div class="p-4 sm:p-10 text-center overflow-y-auto">
          <h3 id="hs-subscription-with-image-label" class="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
            Welcome to Eazzysocial — Now Powered by Thrive Africa
          </h3>
          <p class="text-gray-500 dark:text-neutral-500">
            We’ve evolved! Formerly Ghana and West Africa’s largest social media and digital marketing training agency — with over 3,000 professionals trained and 50,000+ SMEs supported — we are now proud to be part of the Thrive Africa family.
            <br><br>
            Together with Thrive Africa, we’re on a bold mission to unlock high-paying, in-demand skills for 1 million Africans by 2026 — and to help high-growth businesses <b>sell more, faster</b>.
          </p>
  
          <div class="mt-6 flex justify-center gap-x-4">
            <NuxtLink to="/#growth-consulting " type="button"  class="py-2 px-8 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-600 text-white hover:bg-orange-700 focus:outline-hidden focus:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-subscription-with-image" @click="closeBanner()">
              Explore Our New Services 
            </NuxtLink>
            <NuxtLink to="/#journey" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-orange-600 hover:text-orange-800 focus:outline-hidden focus:text-orange-800 disabled:opacity-50 disabled:pointer-events-none dark:text-orange-500 dark:hover:text-orange-400 dark:focus:text-orange-400" @click="closeBanner()">
              Learn About Our Journey
          </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  const bannerCookie = useCookie('welcome_banner', {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    sameSite: 'lax'
  })
  
  const bannerClosed = computed(() => bannerCookie.value === 'closed')
  
  const closeBanner = () => {
    bannerCookie.value = 'closed'
  }
  
  
  </script>