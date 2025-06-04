<template>
  <section class="py-20 md:py-32 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Main Content -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Text Content -->
          <div class="text-center lg:text-left">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start Your <span class="text-orange-500">Free Month</span> Today
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Experience the power of our growth program with a full month of free service. No strings attached, no hidden fees.
            </p>
            
            <!-- Features List -->
            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3">
                <span class="size-8 flex items-center justify-center bg-green-500 rounded-full shrink-0"><svg class="shrink-0 mt-0.5 size-4 text-white " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span class="text-gray-700">Full access to all our services</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="size-8 flex items-center justify-center bg-green-500 rounded-full shrink-0"><svg class="shrink-0 mt-0.5 size-4 text-white " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span class="text-gray-700">Dedicated growth consultant</span>
              </div>
              <div class="flex items-center gap-3">
                <span class="size-8 flex items-center justify-center bg-green-500 rounded-full shrink-0"><svg class="shrink-0 mt-0.5 size-4 text-white " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                <span class="text-gray-700">Custom growth strategy</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NuxtLink 
                to="/register" 
                class="inline-flex justify-center items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors duration-300"
              >
                Start Free Trial
              </NuxtLink>
              <NuxtLink 
                to="/#training" 
                class="inline-flex justify-center items-center px-8 py-4 border border-sky-600 text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors duration-300"
              >
                Learn More
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column: Image/Illustration -->
          <div class="relative">
            <div class="bg-sky-50 rounded-2xl p-8">
              <div class="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.pexels.com/photos/5990040/pexels-photo-5990040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Free Trial Illustration" 
                  class="object-cover rounded-lg"
                />
              </div>
              
              <!-- Stats Cards -->
              <div class="grid grid-cols-2 gap-4 mt-8">
                <!-- Decorative Elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-sky-100 rounded-full opacity-50"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-100 rounded-full opacity-50"></div>
                <div class="bg-white relative p-4 rounded-lg shadow-sm">
                  <div class="text-3xl font-bold text-orange-600 mb-1">30+</div>
                  <div class="text-sm text-gray-600">Days Free Trial</div>
                </div>
                <div class="bg-white relative p-4 rounded-lg shadow-sm">
                  <div class="text-3xl font-bold text-orange-600 mb-1">100%</div>
                  <div class="text-sm text-gray-600">Satisfaction Guaranteed</div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'FreeTrialSection'
}
</script> 