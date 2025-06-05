<template>
  <section class="bg-gradient-to-r from-sky-600 to-sky-800 text-white py-20 md:pt-20 md:pb-40">
    <div class="container flex flex-col lg:flex-row gap-y-10 gap-x-20 items-center mx-auto px-4">
      <div class="max-w-3xl mx-auto text-left">
        <h1 class="text-4xl md:text-7xl leading-[110%] font-semibold mb-6">
          We help your business <span class="relative z-0"><em class="absolute rounded-full -bottom-1 left-0 w-full h-4 bg-orange-500 -z-0"/><span class="relative">grow</span></span> by focusing on real results such as sales, not empty promises
        </h1>
        <p class="text-xl mb-8">
          You only pay us when we actually help you make more money, no upfront fees
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-start">
          <button @click="navigateTo('/register')" class="bg-white text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition-colors">
            Try our growth services free for a month
          </button>
          <button @click="navigateTo('/register')" class="bg-transparent border-2 border-white  px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Join a free seminar to learn more
          </button>
        </div>
      </div>
      <img src="/images/hero-img.png" alt="Hero Image" class="w-[500px] xl:scale-125 xl:translate-x-10 shrink-0 h-fit">
<div class="flex-1 h-full bg-white"/>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HeroSection'
}
</script> 