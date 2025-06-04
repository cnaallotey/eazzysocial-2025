<template>
  <section class="pb-16 md:-mt-20 ">
    <div class="container mx-auto px-4">
      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Revenue Activation Card -->
        <div class="rounded-[20px] bg-sky-50 shadow-slate-400/10 ring-white p-8 transform hover:scale-105 transition-transform duration-300">
          <div class="flex items-center mb-4">
            <div class="bg-white p-3 rounded-lg">
              <svg class="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-800 ml-4">Revenue Activation</h3>
          </div>
          <p class="text-slate-500">
            We run growth programs based on your revenue target, monthly or quarterly designed to help you achieve our goals.
          </p>
        </div>

        <!-- Pay Per Outcome Card -->
        <div class="bg-sky-50 rounded-[20px] shadow-slate-400/10 ring-white p-8 transform hover:scale-105 transition-transform duration-300">
          <div class="flex items-center mb-4">
            <div class="bg-white p-3 rounded-lg">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-slate-800 ml-4">Pay Per Outcome</h3>
          </div>
          <p class="text-slate-500">
            You only pay if your revenue target is achieved. No risk, all reward.
          </p>
        </div>
      </div>

      <!-- Section Header -->
      <div class="text-center mt-10">
        <p class="text-xl text-gray-600 max-w-3xl mx-auto font-semibold mt-5">
          First month free — we help you grow first, then you pay only as you scale.
        </p>
      </div>
      <!-- CTA Section -->
      <div class="text-center mt-5">
        <NuxtLink 
          to="/register" 
          class="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
        >
          Start Your Free Month
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HowItWorks'
}
</script> 