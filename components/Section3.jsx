import Link from 'next/link'
import React from 'react'

const Section3 = () => {
  return (
    <section className="h-fit lg:h-[812px] lg:pb-[151px] w-full bg-[url('/images/bg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
        <div className="container flex items-center">
            <div className="lg:max-w-[65%] py-[70px] lg:py-[150px]">
                <h1 className="text-4xl lg:text-8xl font-bold mb-4">Empowering Communities Through Support and Sponsorship.</h1>
                <p className="text-2xl my-4">Together, we can make a difference. Every individual deserves a chance to thrive.</p>
                <div className="mt-16 lg:my-16 px-4">
  <Link
    href="/who-we-are"
    type="button"
    className="bg-secondary text-sm lg:text-lg font-semibold text-[#222] rounded-full hover:bg-primary w-full lg:w-auto py-4 lg:py-5 px-6 lg:px-20 text-center"
  >
    Join Us in Making an Impact
  </Link>
</div>

            </div>
        </div>
        
    </section>
  )
}

export default Section3