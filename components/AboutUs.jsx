import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
<div className="flex flex-col-reverse lg:flex-row items-center justify-between mb-16 lg:mb-[100px] gap-8">
  {/* Left Section - Image */}
  <div className="w-full lg:w-[55%] flex justify-center">
    <Image
      src="/images/children.jpg"
      className="rounded-lg shadow-lg w-full max-w-lg"
      width={800}
      height={700}
      alt="Image of children"
    />
  </div>

  {/* Right Section - Content */}
  <div className="w-full px-4 lg:w-[45%]">
    <div className="w-full">
      <p className="font-medium text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
        ABOUT US
      </p>
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-black leading-snug">
        Who We Are.
      </h1>
      <p className="font-normal text-base lg:text-lg mb-6 lg:mb-8 text-gray-700 leading-relaxed">
        Binarify Community Outreach is a Nigerian non-profit organization committed to bridging the gaps in healthcare access, education, and skills development. By focusing on digital and vocational training, as well as healthcare initiatives, we equip individuals—especially women and youth—with the tools to thrive in today's world.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
        <Link
          href="/who-we-are"
          className="text-sm lg:text-base underline font-bold text-primary"
        >
          Who We Are
        </Link>
        <Link
          href="/our-programs"
          className="text-sm lg:text-base underline font-bold text-primary"
        >
          Our Programs
        </Link>
      </div>
    </div>
  </div>
</div>



  )
}

export default AboutUs