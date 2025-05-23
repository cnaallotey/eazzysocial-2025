<template>
  <section class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-32 mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
      Advanced Digital Business Skills
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-start gap-12">
      <div v-for="skill in skills" :key="skill.title">
        <div class="flex flex-col items-center">
          <div class="shrink-0 size-12 flex items-center justify-center rounded-xl bg-orange-50 mb-4">
            <span 
              class="w-8 h-8 text-orange-600"
              v-html="skill.icon" />
          </div>
          <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 w-full mt-4">
            <div class="bg-orange-400 w-9 h-0.5"></div>
          </div>
          <div class="mt-5 text-center">
            <h3 class="text-lg font-bold text-gray-800 mb-2">{{ skill.title }}</h3>
            <p class="text-gray-600 text-base">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  {
    title: 'Mini Importation Fulfillment',
    desc: 'Help respond to customers, manage preorders, track delivery from China, Turkey, etc.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" /><path d="M3 7l9 6 9-6" /></svg>`
  },
  {
    title: 'Business Analytics',
    desc: 'Use simple tools to check which product is selling best and which ad is performing well',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 16v-4m4 4V8m4 8v-2" /></svg>`
  },
  {
    title: 'Influencer Coordination',
    desc: 'Assist in finding, communicating, and managing local micro-influencers to promote your product',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M2 20c0-4 8-6 10-6s10 2 10 6" /></svg>`
  },
  {
    title: 'Product Description & Reviews Management',
    desc: 'Write or update product info and manage customer reviews on Jiji, Amazon, Instagram shops, etc.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8M8 16h6M8 8h8" /></svg>`
  },
  {
    title: 'Essential Graphic Design',
    desc: 'Create basic promotional flyers, price lists, social media posts using Canva or similar tools',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 8h8v8H8z" /></svg>`
  },
  {
    title: 'CRM Support (Customer Relationship Management)',
    desc: 'Use tools like Google Sheets or customer apps to manage customer lists, follow-ups, and feedback',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M2 20c0-4 8-6 10-6s10 2 10 6" /></svg>`
  },
  {
    title: 'AI & Automation Tools',
    desc: 'Use chatbots or automation tools to auto-respond to messages, send receipts, or manage stock updates',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8M8 16h6M8 8h8" /></svg>`
  },
  {
    title: 'Funnel Setup & Management',
    desc: 'Set up systems that take a new customer from seeing your product → asking a question → placing an order → getting follow-up messages until they buy again',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 4h18l-7 8v4a2 2 0 0 1-4 0v-4z" /></svg>`
  }
]
</script> 