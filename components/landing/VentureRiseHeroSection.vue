<template>
    <section class="py-20 bg-gradient-to-r from-sky-700 to-sky-800 text-white">
      <div class="container flex flex-col xl:flex-row items-center justify-center gap-10 mx-auto px-4">
        <div class="max-w-2xl text-left xl:text-left">
          <h1 class="text-4xl md:text-6xl font-semibold  mb-4"><span class="text-orange-500">VentureRise</span> – Small Business & Solopreneur Academy</h1>
          <h2 class="text-xl md:text-lg text-white mb-6">Helping You Reach Your First <span class="text-orange-500">GHS500,000</span> in Annual Revenue</h2>
          <ul class="space-y-6 text-lg text-gray-800 ">
              <li class="flex items-center gap-3 text-white">
                <span class="inline-block w-3 h-3 bg-sky-200 rounded-full"></span>
                Micro and small business owners in Ghana
              </li>
              <li class="flex items-center gap-3 text-white">
                <span class="inline-block w-3 h-3 bg-sky-200 rounded-full"></span>
                Solopreneurs (freelancers, online vendors, artisans, etc.)
              </li>
              <li class="flex items-center gap-3 text-white">
                <span class="inline-block w-3 h-3 bg-sky-200 shrink-0 rounded-full"></span>
                Small Business Owners who haven't yet crossed GHS500k in yearly revenue
              </li>
            </ul>
            <NuxtLink
            to="/register"
            class="inline-flex mt-6 items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            Join Now
          </NuxtLink>
        </div>
        <div class="max-w-2xl">
            <img src="https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg" alt="Plan and Package" class="w-full rounded-md bg-gray-100 aspect-[4/3] object-cover" >
          </div>
      </div>
    </section>
  </template>