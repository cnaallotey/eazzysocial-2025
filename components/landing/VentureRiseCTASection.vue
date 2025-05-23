<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto bg-[url('https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=760&q=100')] bg-cover bg-center">
        <div class="relative overflow-hidden bg-gradient-to-r from-black">
    <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
      <!-- Gradients -->
      <div aria-hidden="true" class="flex -z-1 absolute start-0">
        <div class="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-75 dark:bg-purple-900 dark:opacity-20"></div>
      </div>
      <!-- End Gradients -->

      <!-- Grid -->
      <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
        <div class="hidden lg:col-span-2">
          <img class="rounded-xl" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Avatar">
        </div>
        <!-- End Col -->

        <div class="lg:col-span-4">
          <!-- Blockquote -->
          <blockquote>
            <p class="text-xl font-medium text-white lg:text-2xl lg:leading-normal dark:text-neutral-200">
                Join the Academy – It’s Free <br>
                Let’s grow your business to GHS500,000 and beyond
            </p>
            <NuxtLink
            to="/contact"
            class="inline-flex mt-6 items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            Join Now
          </NuxtLink>

            <footer class="mt-6 hidden">
              <div class="flex items-center">
                <div class="lg:hidden shrink-0">
                  <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar">
                </div>
                <div class="ms-4 lg:ms-0">
                  <p class="font-medium text-gray-800 dark:text-neutral-200">
                    Nicole Grazioso
                  </p>
                  <p class="text-sm text-gray-600 dark:text-neutral-400">
                    Head of Finance
                  </p>
                </div>
              </div>
            </footer>
          </blockquote>
          <!-- End Blockquote -->
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
  </div>
      </div>
    </section>
  </template>
  <script setup lang="ts">
  </script>