import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="h-full w-full bg-[url('/images/herobg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
        <div className="flex lg:justify-center min-h-[600px] lg:min-h-[1105px] w-full max-w-[1285px] px-4 lg:px-0">
            <div className="flex flex-col lg:max-w-[58%] justify-center lg:text-left">
                <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold mb-4">
                Empowering Communities, Transforming Lives
                </h1>
                <p className="text-2xl my-4">
                Providing healthcare, education, and skills training to underserved communities in Nigeria.
                    <br className="hidden sm:block" />
                    change just about everything.
                </p>
                <div className="mt-8 md:my-16">
                    <Link
                    href="/who-we-are"
                    type="button"
                    className="bg-secondary text-lg font-semibold text-[#222] rounded-full hover:text-white hover:bg-primary py-4 px-10 sm:px-16 md:px-20"
                    >
                    Get Involved
                    </Link>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Hero