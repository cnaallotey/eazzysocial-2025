<template>
    <section class="py-16 lg:py-32 bg-gradient-to-br from-sky-700 to-sky-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h3 class="text-3xl md:text-4xl text-center font-bold text-white mb-6">Who Is This For?</h3>
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div v-for="item in whoIsThisFor" :key="item.title" class="bg-sky-50/10 rounded-2xl p-6 border border-sky-100/20 flex gap-4 items-start">
              <div class="w-14 h-14 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center">
                <span class="w-8 h-8 text-white" v-html="item.icon"></span>
              </div>
              <div>
                <h4 class="font-bold text-white text-lg mb-1">{{ item.title }}</h4>
                <p class="text-white text-base">{{ item.desc }}</p>
              </div>
            </div>
          </div>
  
          <h3 class="text-3xl md:text-4xl text-center font-bold text-white mb-6">Why This Matters</h3>
          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="item in whyThisMatters" :key="item.title" class="bg-emerald-50/10 rounded-2xl p-6 border border-emerald-100/20 flex gap-4 items-start">
              <div class="w-14 h-14 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center">
                <span class="w-8 h-8 text-white" v-html="item.icon"></span>
              </div>
              <div>
                <h4 class="font-bold text-white text-lg mb-1">{{ item.title }}</h4>
                <p class="text-white text-base">{{ item.desc }}</p>
              </div>
            </div>
          </div>
          <div class="flex gap-10 flex-col md:flex-row items-center justify-center mt-20">
            <img src="/images/african-map.svg" class="w-56 md:w-80" alt="african">
            <div class="grid gap-5">
                <p class="text-left text-orange-500 text-2xl md:text-3xl font-medium max-w-2xl">Our Goal</p>
                <p class="text-left text-white text-xl font-medium max-w-2xl mx-auto">To train and deploy 10,000+ smart Online Shop Attendants who can manage full digital business operations for retail SMEs and online vendors in Ghana and Africa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const whoIsThisFor = [
    {
      title: 'Retail Shops',
      desc: 'Retail shops selling via Instagram, Jiji, WhatsApp, TikTok, etc.',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8v8H8z"/></svg>`
    },
    {
      title: 'Fashion & Beauty',
      desc: 'Fashion stores, beauty brands, electronics sellers, food vendors, pharmacies, etc.',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>`
    },
    {
      title: 'Entrepreneurs',
      desc: 'Entrepreneurs who need help managing online orders and customer relationships',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M2 20c0-4 8-6 10-6s10 2 10 6"/></svg>`
    },
    {
      title: 'SMEs',
      desc: 'SMEs who need more than just a cashier or sales girl — they need a smart, digital-savvy assistant',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8M8 16h6M8 8h8"/></svg>`
    }
  ]
  
  const whyThisMatters = [
    {
      title: 'Save Time & Reduce Stress',
      desc: 'Save time and reduce daily stress',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>`
    },
    {
      title: 'Boost Online Sales',
      desc: 'Boost online sales even when you\'re offline',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8l8 8M8 16l8-8"/></svg>`
    },
    {
      title: 'Professional Image',
      desc: 'Professional image and customer trust',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M2 20c0-4 8-6 10-6s10 2 10 6"/></svg>`
    },
    {
      title: 'Smarter Record Keeping',
      desc: 'Smarter record keeping and order management',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8v8H8z"/></svg>`
    },
    {
      title: 'Convert Followers',
      desc: 'Convert followers and browsers into loyal customers',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>`
    }
  ]
  </script>
  