<template>
    <!-- ========== MAIN CONTENT ========== -->
<main id="content">
  <div class="overflow-hidden">
    <!-- End Header -->

    <!-- Hero -->
    <div class="relative">
      <!-- End Gradients -->

      <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
        <!-- Title -->
        <div class="max-w-2xl mx-auto text-center mb-10">
          <h2 class="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-linear-to-r from-violet-600 to-fuchsia-700 text-transparent">Simple, transparent pricing</h2>
          <p class="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">Whatever your status, our offers evolve according to your needs.</p>
        </div>
        <!-- End Title -->

        <!-- Switch -->
        <div class="flex justify-center items-center gap-x-3">
          <label for="pricing-switch" class="text-sm text-gray-800 dark:text-neutral-200">Monthly</label>
          <label for="pricing-switch" class="relative inline-block w-11 h-6 cursor-pointer">
            <input type="checkbox" id="pricing-switch" class="peer sr-only" checked>
            <span class="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-purple-600 dark:bg-neutral-700 dark:peer-checked:bg-purple-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
            <span class="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
          </label>
          <label for="pricing-switch" class="text-sm text-gray-800 dark:text-neutral-200">Annually</label>
        </div>
        <!-- End Switch -->

        <!-- Title -->
        <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mt-10 md:mt-14 mb-6 lg:mt-24">
          <h2 class="text-gray-600 dark:text-neutral-400">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
        </div>
        <!-- End Title -->
      </div>

      <div class="absolute top-1/2 start-1/2 -z-1 transform -translate-y-1/2 -translate-x-1/2 w-85 h-85 border border-dashed border-violet-200 rounded-full dark:border-violet-900/60"></div>
      <div class="absolute top-1/2 start-1/2 -z-1 transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed border-violet-200 rounded-full opacity-80 dark:border-violet-900/60"></div>
      <div class="absolute top-1/2 start-1/2 -z-1 transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed border-violet-200 rounded-full opacity-60 dark:border-violet-900/60"></div>
      <div class="absolute top-1/2 start-1/2 -z-1 transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed border-violet-200 rounded-full opacity-40 dark:border-violet-900/60"></div>
    </div>
    <!-- End Hero -->
  </div>

  <!-- Comparison Table -->
  <div class="relative">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Compare plans</h2>
      </div>

      <!-- Header -->
      <div class="hidden lg:block sticky top-0 start-0 py-2 bg-white/60 backdrop-blur-md dark:bg-neutral-900/60">
        <!-- Grid -->
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-2">
            <span class="font-semibold text-lg text-gray-800 dark:text-neutral-200">
              Features
            </span>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-neutral-200">
              Free
            </span>
            <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Free forever
            </p>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-neutral-200">
              Startup
            </span>
            <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              $39 per month billed annually
            </p>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-neutral-200">
              Team
            </span>
            <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              $89 per month billed annually
            </p>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <span class="font-semibold text-lg text-gray-800 dark:text-neutral-200">
              Enterprise
            </span>
            <p class="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              $149 per month billed annually
            </p>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Header -->

      <!-- Section -->
      <div class="space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              General
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Number of seats
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                1
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                Up to 3
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                Up to 10
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                Unlimited
              </span>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Storage
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                15 GB
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                1 TB
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                15 TB
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-neutral-200">
                Unlimited
              </span>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Email sharing
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Any time, anywhere access
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="mt-6 space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Financial data
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Open/High/Low/Close
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Price-volume difference indicator
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="mt-6 space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              On-chain data
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Network growth
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Average token age consumed
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Exchange flow
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Total ERC20 exchange funds flow
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Transaction volume
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Total circulation (beta)
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Velocity of tokens (beta)
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              ETH gas used
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="mt-6 space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-neutral-200">
              Social data
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Dev activity
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Topic search
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-neutral-200">
              Relative social dominance
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Startup
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Team
              </span>
              <svg class="shrink-0 size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-neutral-800">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-neutral-200">
                Enterprise
              </span>
              <svg class="shrink-0 size-5 text-violet-600 dark:text-violet-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Header -->
      <div class="hidden lg:block mt-6">
        <!-- Grid -->
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-2">
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Get started
            </a>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-hidden focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Get started
            </a>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Get started
            </a>
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
              Get started
            </a>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Header -->

      <!-- Button Group -->
      <div class="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
        <p class="text-sm text-gray-500 dark:text-neutral-400">
          Need a custom plan?
        </p>

        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
          Contact us
        </button>
      </div>
      <!-- End Button Group -->
    </div>
  </div>
  </main>
<!-- ========== END FOOTER ========== -->
</template>