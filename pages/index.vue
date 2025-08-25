

<template>
  <div>
    <LandingNavBar />
    <div class="pt-16">
      <LandingHeroSection />
      <LandingHowItWorks />
      <LandingHowWeHelpSection id="growth-consulting" class="scroll-mt-20" />
      <LandingPricingSection id="pricing" class="scroll-mt-20" />
      <LandingFreeTrialOfferSection />
      <LandingCEOSection />
      <LandingVentureRiseCorporateTrainingSection id="training" class="scroll-mt-20" />
      <LandingWhyChooseUsSection />
      <LandingOurJourneySection id="journey" class="scroll-mt-20" />
      <LandingFreeTrialSection />
      <LandingWelcomeModal />
      <LandingFooter />
    </div>
  </div>
</template>

<script setup>

const route = useRoute()
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (route.hash) {
    setTimeout(() => {
      scrollToSection(route.hash.slice(1))
    }, 100)
  }
})
</script>
