import AboutUs from '@/components/AboutUs'
import ClientSection from '@/components/ClientSection'
import EventsSection from '@/components/EventsSection'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import MissionVision from '@/components/MissionVision'
import Navbar from '@/components/Navbar'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Stats from '@/components/Stats'
import React from 'react'

export const metadata = {
  title: 'My Page Title',
}
 
export default function Page() {
  return (
    <div className="">
      <Navbar isLight={true} />

      <main className="flex-1">
        <Hero />
        {/* <ClientSection /> */}
        <MissionVision />
        <AboutUs />
        {/* <Section1 /> */}
        <Stats />
        <Section2 />
        <EventsSection />
        <Section3 />
      </main>
      
      <Footer />
    </div>
  )
}