<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h3 class="text-3xl md:text-4xl text-center font-bold text-gray-900 mb-6"><span class="text-orange-500">Key Features</span> & Modules</h3>
          <div class="grid md:grid-cols-2 gap-4 md::gap-8">
            <div v-for="feature in features" :key="feature.title" class="bg-sky-50 rounded-2xl p-6 border border-sky-100 flex gap-4 items-start">
              <div class="w-14 h-14 flex-shrink-0 bg-white rounded-xl flex items-center justify-center">
                <span class="w-8 h-8 text-orange-500" v-html="feature.icon"></span>
              </div>
              <div>
                <h4 class="font-bold text-sky-900 text-lg mb-1">{{ feature.title }}</h4>
                <p class="text-gray-700 text-base">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script setup lang="ts">
const features = [
  {
    title: 'The First GHS500k Blueprint',
    desc: 'Learn what it takes to cross half a million cedis and more in revenue with real case studies from Ghana.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><text x="12" y="16" text-anchor="middle" font-size="8" fill="currentColor" font-weight="bold">500k</text></svg>`
  },
  {
    title: 'Sales & Funnel Mastery',
    desc: 'Set up systems that take a new customer from seeing your product → asking a question → placing an order → getting follow-up messages until they buy again',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 4h18l-7 8v4a2 2 0 0 1-4 0v-4z"/><circle cx="12" cy="18" r="2"/></svg>`
  },
  {
    title: 'Social Media Growth Kit',
    desc: 'Actionable tutorials on Instagram, WhatsApp, TikTok & Facebook marketing.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><circle cx="16" cy="8" r="1"/><circle cx="8" cy="16" r="1"/></svg>`
  },
  {
    title: 'Social Media Advertising Support',
    desc: 'Learn how to run low-cost, high-impact ads using Meta, TikTok, and Google tools.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8l8 8M8 16l8-8"/></svg>`
  },
  {
    title: 'Influencer Marketing Support',
    desc: 'How to work with nano- and micro-influencers to drive product awareness and sales.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/><path d="M8 15v2m8-2v2"/><path d="M12 8v-2m0 0h2m-2 0h-2"/></svg>`
  },
  {
    title: 'Mini Importation Launchpad',
    desc: 'Start small-scale product importation with guidance on sourcing, pricing, and selling.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`
  },
  {
    title: 'Financial Foundations',
    desc: 'How to price right, track cashflow, and plan for taxes or reinvestment.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 16v-4m4 4V8m4 8v-2"/><text x="12" y="12" text-anchor="middle" font-size="6" fill="currentColor">$</text></svg>`
  },
  {
    title: 'Business Tool Stack',
    desc: 'Training on free and low-cost tools (e.g. Google Workspace, Canva, Meta Business, CRM).',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8v8H8z"/></svg>`
  },
  {
    title: 'Monthly Growth Clinics',
    desc: 'Live Zoom sessions with Q&A, feedback and hot seat coaching.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/><circle cx="12" cy="12" r="3"/></svg>`
  },
  {
    title: 'Trade Financing Support',
    desc: 'Get connected to bulk importers and product dealers at wholesale prices.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3v4M8 3v4"/><path d="M6 17h12"/></svg>`
  },
  {
    title: 'Community Support',
    desc: 'Private WhatsApp or Telegram group for networking, challenges, and peer support.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M2 20c0-4 8-6 10-6s10 2 10 6"/><path d="M8 20h8"/></svg>`
  },
  {
    title: 'AI for Business',
    desc: 'Going beyond using AI tools like ChatGPT to automate businesses and grow your business faster.',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M8 12h8"/></svg>`
  }
]
</script>