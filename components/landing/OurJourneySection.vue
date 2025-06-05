<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span class="text-orange-500">Journey</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            From a passionate vision to becoming West Africa's leading digital marketing training agency, our journey has been marked by growth, impact, and transformation.
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Story -->
          <div class="space-y-8">
            <!-- Impact Stats -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="bg-white p-6 rounded-2xl border border-gray-200">
                <div class="text-4xl font-bold text-orange-600 mb-2">3,000+</div>
                <div class="text-gray-600">Professionals Trained</div>
              </div>
              <div class="bg-white p-6 rounded-2xl border border-gray-200">
                <div class="text-4xl font-bold text-orange-600 mb-2">50,000+</div>
                <div class="text-gray-600">SMEs Supported</div>
              </div>
            </div>

            <!-- Story Content -->
            <div class="bg-white p-8 rounded-2xl border border-gray-200">
              <p class="text-gray-700 mb-6">
                Eazzysocial started as a passionate vision to empower businesses and professionals through digital marketing education and practical support. Over the years, we have grown into the largest social media and digital marketing training agency in Ghana and West Africa.
              </p>
              <p class="text-gray-700">
                Our impact is visible—from major corporate trainings with big businesses, to empowering countless small and medium enterprises with hands-on digital strategies. Our success has been amplified through media coverage, billboards, and community engagement, making us a trusted leader in digital marketing education and business growth.
              </p>
            </div>
          </div>

          <!-- Right Column: Mission & Partnership -->
          <div class="space-y-8">
            <!-- Thrive Africa Partnership -->
            <div class="bg-gradient-to-br from-sky-700 to-sky-900 border p-8 rounded-2xl">
              <div class="flex items-baseline gap-4 mb-4">
                <div class="bg-white/20 p-3 rounded-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white -translate-y-2">A New Chapter with Thrive Africa</h3>
              </div>
              <p class="text-white">
                As part of a bold mission to unlock high-paying, in-demand skills for 1 million Africans by 2026, Eazzysocial's training arm has proudly joined the Thrive Africa family. This partnership enables us to scale our impact and deliver even greater value to learners and businesses alike.
              </p>
            </div>

            <!-- Current Mission -->
            <div class="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Our Mission Today</h3>
              <p class="text-gray-700 mb-6">
                We are now fully focused on supporting high-growth businesses to sell more, faster by combining digital marketing, sales acceleration, and growth operations. Our goal is to help SMEs and enterprises harness the power of modern marketing and technology to expand their reach and increase revenue rapidly.
              </p>
              <div class="flex items-center gap-3 text-sky-600 font-semibold">
                <span>Join us as we continue to transform the African business landscape</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
<div class="max-w-5xl mx-auto mt-10">
  <LandingGallerySlider />
</div>

 <!-- Title -->
 <div class="w-2/3 sm:w-1/2 lg:w-2/3 mx-auto text-center mt-10 md:mt-14 mb-6 lg:mt-24">
  <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
    Businesses and Organizations That <span class="text-orange-500">Trust Eazzysocial</span>
          </h2>
          <h3 class="text-gray-600 md:text-xl dark:text-neutral-400">We’re proud to have partnered with a diverse range of clients—from established corporations and government institutions to thriving small and medium enterprises and ambitious solopreneurs. Our expertise has helped them grow, optimize, and succeed in their digital marketing and business goals.</h3>
        </div>
        <!-- End Title -->

        <!-- Clients -->
        <div class="flex justify-center gap-6 sm:gap-12 lg:gap-18 flex-wrap">
          <img v-for="item in clientPortfolio" :key="item.id" :src="`/images/clients/${item.id}.png`" class="h-24 w-auto md:saturate-0 hover:saturate-100 transition-all ease-linear duration-100" :alt="item.name">
        </div>
        <!-- End Clients -->
        <h3 class="text-gray-600 md:text-xl max-w-3xl mt-5 md:mt-10 text-center mx-auto dark:text-neutral-400">…and <b class="font-bold text-orange-500">50k+ SMEs and Solopreneurs</b> across various industries who have benefited from our practical, growth-focused marketing and business development support.</h3>
    </div>
  </section>
</template>

<script setup lang="js">
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