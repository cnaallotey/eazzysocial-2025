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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M231.69,93.81,217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.81A7.94,7.94,0,0,0,24,96v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96A7.94,7.94,0,0,0,231.69,93.81ZM88,112a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8H88Zm64,0a24,24,0,0,1-48,0v-8h48Zm64,0a24,24,0,0,1-11.07,20.2,8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48Z"/></svg>`
    },
    {
      title: 'Fashion & Beauty',
      desc: 'Fashion stores, beauty brands, electronics sellers, food vendors, pharmacies, etc.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M247.59,61.22,195.83,33A8,8,0,0,0,192,32H160a8,8,0,0,0-8,8,24,24,0,0,1-48,0,8,8,0,0,0-8-8H64a8,8,0,0,0-3.84,1L8.41,61.22A15.76,15.76,0,0,0,1.82,82.48l19.27,36.81A16.37,16.37,0,0,0,35.67,128H56v80a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V128h20.34a16.37,16.37,0,0,0,14.58-8.71l19.27-36.81A15.76,15.76,0,0,0,247.59,61.22ZM35.67,112a.62.62,0,0,1-.41-.13L16.09,75.26,56,53.48V112Zm185.07-.14a.55.55,0,0,1-.41.14H200V53.48l39.92,21.78Z"/></svg>`
    },
    {
      title: 'Entrepreneurs',
      desc: 'Entrepreneurs who need help managing online orders and customer relationships',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M152,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,112Zm80-40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM96,56h64V48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8Zm120,57.61V72H40v41.61A184,184,0,0,0,128,136,184,184,0,0,0,216,113.61Z"/></svg>`
    },
    {
      title: 'SMEs',
      desc: 'SMEs who need more than just a cashier or sales girl — they need a smart, digital-savvy assistant',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M248,208H232V96a8,8,0,0,0,0-16H184V48a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16V208H24a8,8,0,0,0,0,16H248a8,8,0,0,0,0-16ZM80,72H96a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16Zm-8,48a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,120Zm64,88H88V160h48Zm8-80H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-40H128a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm72,120H184V96h32Z"/></svg>`
    }
  ]
  
  const whyThisMatters = [
    {
      title: 'Save Time & Reduce Stress',
      desc: 'Save time and reduce daily stress',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm45.66,61.66-40,40a8,8,0,0,1-11.32-11.32l40-40a8,8,0,0,1,11.32,11.32ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"/></svg>`
    },
    {
      title: 'Boost Online Sales',
      desc: 'Boost online sales even when you\'re offline',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M221.87,90.86a4,4,0,0,0-6.17-.62l-75.42,75.42A8,8,0,0,1,129,154.35l92.7-92.69a8,8,0,0,0-11.32-11.32L197,63.73A112.05,112.05,0,0,0,22.34,189.25,16.09,16.09,0,0,0,37.46,200H218.53a16,16,0,0,0,15.11-10.71,112.28,112.28,0,0,0-11.77-98.43ZM57.44,166.41a8,8,0,0,1-6.25,9.43,7.89,7.89,0,0,1-1.6.16,8,8,0,0,1-7.83-6.41A88.06,88.06,0,0,1,143.59,65.38a8,8,0,0,1-2.82,15.75,72.07,72.07,0,0,0-83.33,85.28Z"/></svg>`
    },
    {
      title: 'Professional Image',
      desc: 'Professional image and customer trust',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M230.56,110.68a103.92,103.92,0,1,1-85.24-85.24,8,8,0,0,1-2.64,15.78A88.07,88.07,0,0,0,40,128a87.62,87.62,0,0,0,22.24,58.41A79.71,79.71,0,0,1,84,165.1a4,4,0,0,1,4.84.32,59.8,59.8,0,0,0,78.26,0,4,4,0,0,1,4.84-.32,79.86,79.86,0,0,1,21.79,21.31A87.62,87.62,0,0,0,216,128a88.85,88.85,0,0,0-1.22-14.68,8,8,0,1,1,15.78-2.64ZM84,120a44,44,0,1,0,44-44A44,44,0,0,0,84,120ZM237.66,34.34a8,8,0,0,0-11.32,0L200,60.69,189.66,50.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,237.66,34.34Z"/></svg>`
    },
    {
      title: 'Smarter Record Keeping',
      desc: 'Smarter record keeping and order management',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z"/></svg>`
    },
    {
      title: 'Convert Followers',
      desc: 'Convert followers and browsers into loyal customers',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path fill="currentColor" d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"/></svg>`
    }
  ]
  </script>
  