import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
<div className="container flex flex-col-reverse lg:flex-row items-center sm:justify-center">
  <div className="w-full pt-[61px] px-[20px] flex flex-col justify-center">
    <p className="font-medium text-lg text-gray-600 mb-5">MEET THE VISIONARY</p>
    <h1 className="lg:text-5xl text-2xl font-bold mb-10 text-black w-full lg:w-[70%]">
      Together, We Empower Change.
    </h1>
    <p className="font-normal text-xl lg:text-2xl sm:w-[83%] lg:my-10 text-gray-700">
      Binarify Community Outreach was founded by Samuel Adeniyi with a clear vision to empower underserved communities in Nigeria. By providing access to quality education, healthcare, and sustainable development initiatives, we aim to create opportunities for all, regardless of their background.
    </p>
    <div className="my-16 flex justify-center">
  <Link 
    href="/volunteer" 
    type="button" 
    className="bg-[#301717] text-lg font-semibold text-white rounded-full hover:bg-primary w-full max-w-[300px] md:max-w-[400px] py-4 px-6 text-center"
  >
    Volunteer Now
  </Link>
</div>
  </div>
  <div className="w-full lg:w-[45%]">
    <Image src="/images/smile.jpg" className="w-full rounded-lg shadow-lg" width={500} height={500} alt="Image of Community" />
  </div>
</div>

  )
}

export default Section1