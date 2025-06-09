<template>
    <section class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-32 mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
        What Your Online Shop Attendant Will Be Trained to Do
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-start gap-12">
        <div v-for="skill in skills" :key="skill.title">
          <div class="flex flex-col items-center">
            <div class="shrink-0 size-12 flex items-center justify-center rounded-xl bg-sky-50 mb-4">
              <span 
              class="w-8 h-8 text-sky-600"
              v-html="skill.icon"  />
            </div>
            <div class="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 w-full mt-4">
              <div class="bg-sky-400 w-9 h-0.5"></div>
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
  // You can replace these with your own SVG icon components or use Heroicons/other icon libraries
  const skills = [
    {
      title: 'Social Media Management',
      desc: 'Posting content, responding to DMs and comments, keeping your online pages active and engaging',
      icon:  `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 15h.01M12 15h.01M16 15h.01" />
            </svg>
            `
    },
    {
      title: 'Customer Service',
      desc: 'Taking and tracking orders via WhatsApp, Facebook, and Instagram',
      icon:  `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 3v4M8 3v4" />
            </svg>`
    },
    {
      title: 'Online Marketplace Management',
      desc: 'Listing and updating products on Jiji, Amazon, Tonaton, etc.',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
            </svg>`
    },
    {
      title: 'Delivery & Dispatch Coordination',
      desc: 'Booking delivery riders, updating customers on order status',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 13h2l1 2h13" />
              <circle cx="7" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
            </svg>`
    },
    {
      title: 'SMS, WhatsApp & Email Campaigns',
      desc: 'Sending sales promos, reminders, and customer follow-ups',
      icon: ` <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M22 5l-10 7L2 5" />
            </svg>`
    },
    {
      title: 'Running Paid Ads',
      desc: 'Setting up and managing Facebook and Instagram campaigns for product awareness and sales',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
            </svg>`
    },
    {
      title: 'Digital Customer Support',
      desc: 'Handling complaints, refunds, and customer questions professionally',
      icon: ` <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 3v4M8 3v4" />
            </svg>`
    },
    {
      title: 'Basic Bookkeeping',
      desc: 'Recording sales, expenses, and profit using Excel, Google Sheets, or Wave',
      icon:  ` <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
            </svg>`
    },
    {
      title: 'Mobile Payment Support',
      desc: 'Accepting mobile money, bank transfers, QR code payments, and issuing receipts',
      icon:  ` <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M22 5l-10 7L2 5" />
            </svg>`
    },
    {
      title: 'Customer Retention Tactics',
      desc: 'Sending thank-you messages, birthday wishes, and review requests to encourage loyalty',
      icon: ` <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8" />
            </svg>`
    },
    {
      title: 'Basic Administration',
      desc: 'Supporting daily business operations—e.g., creating documents, maintaining records, updating databases',
      icon:   ` <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M22 5l-10 7L2 5" />
            </svg>`
    },
  {
    title: 'Essential Graphic Design',
    desc: 'Create basic promotional flyers, price lists, social media posts using Canva or similar tools',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 8h8v8H8z" /></svg>`
  },
  {
    title: 'AI & Automation Tools',
    desc: 'Use chatbots or automation tools to auto-respond to messages, send receipts, or manage stock updates',
    icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 12h8M8 16h6M8 8h8" /></svg>`
  }
  ]
  </script>