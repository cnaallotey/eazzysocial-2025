<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How We <span class="text-orange-500">Help Your Business</span> Grow
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We bring all the important parts of running and growing a business together—like what you're selling, how you market it, how you serve customers, and how to save time using smart tools. Our job is to help you get more customers and keep them coming back.
          </p>
        </div>

        <!-- Row 1 -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-32">
          <div>
            <img src="/images/meeting.png" alt="Plan and Package" class="w-full rounded-xl bg-gray-100 aspect-[4/5] object-cover" >
          </div>
          <div>
            <ul class="space-y-10 xl:space-y-16 max-w-lg text-lg">
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%]">Help you plan and package your product for the market</span>
                  <p class="text-gray-600">We'll guide you to shape your product or service in a way that attracts attention.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%] ">Run social media and online promotions for you</span>
                  <p class="text-gray-600">We design and launch Facebook, Instagram, and WhatsApp campaigns that get your business noticed and bring in new buyers.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-32 md:flex-row-reverse">
          <div class="order-2 md:order-1">
            <ul class="space-y-10 xl:space-y-16 max-w-lg text-lg">
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%]">Set up a smart sales system (also called a funnel)</span>
                  <p class="text-gray-600"> This is the step-by-step journey:</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%]">Make your customers enjoy buying from you</span>
                  <p class="text-gray-600">We help you make sure that from the first message to delivery, customers have a smooth and friendly experience with your business.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%]">Set up easy-to-use tools to manage your customers</span>
                  <p class="text-gray-600">We show you how to organize customer info, messages, orders, and feedback without stress.</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <img src="/images/payment.png" alt="Sales Funnel" class="w-full rounded-xl bg-gray-100 aspect-[4/5] object-cover" >
          </div>
        </div>

        <!-- Row 3 -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20 md:mb-32">
          <div>
            <img src="/images/service.png" alt="Customer Experience" class="w-full rounded-xl bg-gray-100 aspect-[4/5] object-cover" >
          </div>
          <div>
            <ul class="space-y-10 xl:space-y-16 max-w-lg text-lg">
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%]">Use AI and automation to save you time and boost sales</span>
                  <p class="text-gray-600">We add smart tools (like auto-replies, reminders, and digital receipts) to make your work easier and faster.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%]">Set up proper customer service system</span>
                  <p class="text-gray-600">We train or provide support that helps you handle customer questions, complaints, and returns like a pro.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div>
                  <span class="font-semibold text-sky-900 text-xl md:text-2xl leading-[80%]">Build and manage your online business</span>
                  <p class="text-gray-600">From setting up your social pages to helping you with online selling platforms, we make sure your business is fully digital and running smoothly.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HowWeHelpSection'
}
</script> 