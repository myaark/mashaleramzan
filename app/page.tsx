'use client'

import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import DonationProgress from '@/components/donation-progress'
import DonationDetails from '@/components/donation-details'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <HeroSection />
      <DonationProgress />
      <DonationDetails />
      <Footer />
    </main>
  )
}
