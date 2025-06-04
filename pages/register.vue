<template>
    <div class="w-full min-h-screen bg-[url('https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1250&dpr=2')] bg-cover bg-center">
        <!-- Hire Us -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid md:grid-cols-2 items-start gap-12">
    <div class="p-4 md:p-8 bg-sky-900 rounded-3xl">
        <div class="flex-shrink-0 mb-4">
          <NuxtLink to="/" class="text-2xl font-bold text-white mb-10">
            Eazzysocial
          </NuxtLink>
        </div>
      <h1 class="text-3xl font-semibold text-orange-500 sm:text-4xl lg:text-4xl lg:leading-tight dark:text-white">
        Register Your Busines
      </h1>
      <p class="mt-1 md:text-lg text-white dark:text-neutral-200">
        We help brands and platforms turn big ideas into beautiful digital products and experiences.
      </p>

      <div class="mt-8">
        <h2 class="text-lg font-semibold text-neutral-200">
          What can I expect?
        </h2>

        <ul class="mt-2 space-y-2">
          <li class="flex gap-x-3">
            <svg class="shrink-0 mt-0.5 size-5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span class="text-neutral-200">
              Industry-leading support
            </span>
          </li>

          <li class="flex gap-x-3">
            <svg class="shrink-0 mt-0.5 size-5 text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span class="text-neutral-200">
                Full access to all our services
            </span>
          </li>

          <li class="flex gap-x-3">
            <svg class="shrink-0 mt-0.5 size-5 text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span class="text-neutral-200">
                Custom growth strategy
            </span>
          </li>
        </ul>
      </div>

      <!-- Brands -->
      <div class="mt-8">
        <h2 class="text-lg font-semibold text-white">
          Trusted by:
        </h2>

        <div class="flex justify-start gap-6 sm:gap-12 lg:gap-8 flex-wrap">
          <img v-for="item in clientPortfolio" :key="item.id" :src="`/images/clients/${item.id}.png`" class="h-14 w-auto saturate-100 transition-all ease-linear duration-100" :alt="item.name">
        </div>
      </div>
      <!-- End Brands -->

      <div class="mt-10 flex items-center gap-x-5">
        <!-- Avatar Group -->
        <div class="flex -space-x-2">
          <!-- <img class="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar">
          <img class="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar">
          <img class="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar"> -->
          <span class="inline-flex justify-center items-center size-8 rounded-full bg-blue-600 text-white ring-2 ring-white">
            <svg class="size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>
          </span>
        </div>
        <!-- End Avatar Group -->
        <span class="text-sm md:text-lg text-white">
          and over 10k SMEs
        </span>
      </div>
    </div>
    <!-- End Col -->

    <div class="relative">
      <!-- Card -->
      <div class="bg-white/80 backdrop-blur-2xl rounded-2xl p-8">
        <div class="text-center mb-8">
          <p class="mt-2 text-gray-600">Fill out the form below to get started with our services</p>
        </div>

        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Full Name -->
          <div>
            <label for="fullName" class="block text-sm font-medium text-gray-700">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.fullName"
            >
          </div>

          <!-- Business Name -->
          <div>
            <label for="businessName" class="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              id="businessName"
              type="text"
              name="businessName"
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.businessName"
            >
          </div>

          <!-- Email Address -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.email"
            >
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Phone Number (Optional)
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.phone"
            >
          </div>

          <!-- Location / Country -->
          <div>
            <label for="location" class="block text-sm font-medium text-gray-700">
              Location / Country
            </label>
            <input
              id="location"
              type="text"
              name="location"
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.location"
            >
          </div>

          <!-- Business Description -->
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700">
              Business Description – What do you sell or offer?
            </label>
            <p class="mt-1 text-sm text-gray-500 mb-2">
              Briefly describe your product or service offering
            </p>
            <textarea
              id="description"
              name="description"
              rows="4"
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.description"
            />
          </div>

          <!-- Website -->
          <div>
            <label for="website" class="block text-sm font-medium text-gray-700">
              Website (if any)
            </label>
            <input
              id="website"
              type="url"
              name="website"
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.website"
            >
          </div>

          <!-- Social Media Handles -->
          <div>
            <label for="socialMedia" class="block text-sm font-medium text-gray-700">
              Social Media Handle(s)
            </label>
            <p class="mt-1 text-sm text-gray-500 mb-2">
              Instagram, Facebook, LinkedIn, TikTok, Snapchat, etc.
            </p>
            <textarea
              id="socialMedia"
              name="socialMedia"
              rows="3"
              class="mt-1 block w-full rounded-lg border-gray-300 border-2  focus:border-sky-500 focus:ring-sky-500 py-2 px-2"
              v-model="formData.socialMedia"
            />
          </div>

          <!-- Business Duration -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">
              How long have you been in business?
            </label>
            <div class="space-y-2">
              <div class="flex items-center">
                <input
                  id="duration1"
                  type="radio"
                  name="businessDuration"
                  value="less-than-1"
                  class="h-4 w-4 text-sky-600 focus:ring-sky-500 py-2 px-2 border-gray-300"
                  v-model="formData.businessDuration"
                >
                <label for="duration1" class="ml-3 text-sm text-gray-700">
                  Less than 1 year
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="duration2"
                  type="radio"
                  name="businessDuration"
                  value="1-3"
                  class="h-4 w-4 text-sky-600 focus:ring-sky-500 py-2 px-2 border-gray-300"
                  v-model="formData.businessDuration"
                >
                <label for="duration2" class="ml-3 text-sm text-gray-700">
                  1–3 years
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="duration3"
                  type="radio"
                  name="businessDuration"
                  value="3-5"
                  class="h-4 w-4 text-sky-600 focus:ring-sky-500 py-2 px-2 border-gray-300"
                  v-model="formData.businessDuration"
                >
                <label for="duration3" class="ml-3 text-sm text-gray-700">
                  3–5 years
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="duration4"
                  type="radio"
                  name="businessDuration"
                  value="over-5"
                  class="h-4 w-4 text-sky-600 focus:ring-sky-500 py-2 px-2 border-gray-300"
                  v-model="formData.businessDuration"
                >
                <label for="duration4" class="ml-3 text-sm text-gray-700">
                  Over 5 years
                </label>
              </div>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button
              type="submit"
              class="w-full bg-sky-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 py-2 px-2 focus:ring-offset-2 transition-colors"
              :disabled="isLoading"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Hire Us -->
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()
const isLoading = ref(false)

const formData = ref({
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  location: '',
  description: '',
  website: '',
  socialMedia: '',
  businessDuration: ''
})

const handleSubmit = async () => {
  try {
    isLoading.value = true
    
    const response = await fetch('https://getform.io/f/bronnvva', {
      method: 'POST',
      body: new FormData(formData.value),
      headers: {
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Failed to submit form')
    }

    toast.success('Registration submitted successfully! We will contact you soon.')
    
    // Reset form
    formData.value = {
      fullName: '',
      businessName: '',
      email: '',
      phone: '',
      location: '',
      description: '',
      website: '',
      socialMedia: '',
      businessDuration: ''
    }
  } catch (error) {
    console.error('Form submission error:', error)
    toast.error('Failed to submit registration. Please try again.')
  } finally {
    isLoading.value = false
  }
}

const clientPortfolio = [
  {
    id: 1,
    name: "Peduase Valley Resort",
    service: "Enhancing hospitality marketing to attract more visitors",
    industry: "Hospitality"
  },
  {
    id: 2,
    name: "Airport West Hotel",
    service: "Boosting online bookings through targeted campaigns",
    industry: "Hospitality"
  },
  {
    id: 3,
    name: "Parliament of Ghana",
    service: "Supporting digital communication strategies",
    industry: "Government"
  },
  {
    id: 4,
    name: "NADMO (National Disaster Management Organization)",
    service: "Improving outreach and public engagement",
    industry: "Government"
  },
  {
    id: 5,
    name: "Castrol Oil",
    service: "Managing brand presence and promotional campaigns",
    industry: "Oil & Gas"
  },
  {
    id: 6,
    name: "Mantrac Ghana",
    service: "Supporting heavy equipment sales and digital lead generation",
    industry: "Heavy Equipment"
  },
  {
    id: 7,
    name: "Embassy of Denmark in Ghana",
    service: "Facilitating cultural and community outreach campaigns",
    industry: "Government/Diplomatic"
  },
  {
    id: 8,
    name: "Morgan International Community School",
    service: "Strengthening enrollment and awareness through digital channels",
    industry: "Education"
  },
  {
    id: 9,
    name: "TEMA TDC Development Corporation",
    service: "Enhancing local development projects through strategic marketing",
    industry: "Development/Construction"
  }
];
</script>
