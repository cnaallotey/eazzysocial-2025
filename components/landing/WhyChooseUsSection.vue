<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose <span class="text-orange-500">Eazzysocial Training</span>?
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Experience world-class training designed to transform your business through practical, actionable digital marketing strategies.
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <!-- Experienced Facilitators -->
          <div class="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-sky-500/10 p-3 rounded-lg">
                <svg class="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Experienced Facilitators</h3>
            <p class="text-gray-400">
              Learn from industry experts with real-world experience driving growth for diverse businesses.
            </p>
          </div>

          <!-- Practical & Actionable -->
          <div class="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-sky-500/10 p-3 rounded-lg">
                <svg class="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Practical & Actionable</h3>
            <p class="text-gray-400">
              Our sessions focus on tools, techniques, and strategies you can implement immediately.
            </p>
          </div>

          <!-- Customizable Modules -->
          <div class="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-sky-500/10 p-3 rounded-lg">
                <svg class="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Customizable Modules</h3>
            <p class="text-gray-400">
              Choose from foundational to advanced topics tailored to your team's level and objectives.
            </p>
          </div>

          <!-- Ongoing Support -->
          <div class="bg-gray-800 p-6 rounded-2xl border border-gray-700">
            <div class="flex items-center gap-4 mb-4">
              <div class="bg-sky-500/10 p-3 rounded-lg">
                <svg class="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Ongoing Support</h3>
            <p class="text-gray-400">
              Post-training coaching and resources to ensure lasting impact.
            </p>
          </div>
        </div>

        <!-- Stay Tuned Section -->
        <div class="rounded-2xl p-8 md:p-12">
          <div class="max-w-3xl mx-auto text-center">
            <h3 class="text-2xl font-bold text-white mb-4">Stay Tuned!</h3>
            <p class="text-gray-300 mb-8">
              We're finalizing the program details and will be launching soon.
              Sign up below to be the first to get updates, exclusive early-bird offers, and enrollment information!
            </p>
            
            <!-- Sign Up Form -->
            <form class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" @submit.prevent="submit()">
              <input 
                id="email" 
                v-model="contact.email"
                type="email"
                placeholder="Enter your email" 
                required
                class="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
              >
              <button 
                type="submit" 
                class="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                Get Updates
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contact = ref({email: ''})

const submit =  async () => {
  await navigateTo(`/register?email=${contact.value.email}`)
} 
</script> 