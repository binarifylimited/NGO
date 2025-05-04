import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section2 = () => {
  return (
    <section className="container lg:flex items-center pt-[50px] pb-10 lg:pb-[150px] justify-center">
  {/* Left Section with Image */}
  <div className="w-full pb-5 lg:px-[20px]">
    <Image src="/images/image2.jpg" className="w-full" width={500} height={500} alt="Community Outreach Image" />
  </div>

  {/* Right Section with Information */}
  <div className="w-full">
    <div className="lg:pl-[146px] sm:mt-5 pr-[15px] flex flex-col justify-center">
      <p className="font-medium text-lg text-primary mb-5">OUR IMPACT</p>
      <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-black">
       Job Creation & Entrepreneurship Support.
      </h1>
      <p className="font-normal text-lg lg:text-xl mb-3 lg:my-10 text-gray-700">
        Enabling economic empowerment in communities
      </p>
      
      {/* Program List */}
      <div className="">
        <div className="flex items-center mb-2 lg:mb-5 gap-6">
          <Check className="text-primary" />
          <p className="font-normal text-lg lg:text-xl text-black">Access to Quality Education</p>
        </div>
        <div className="flex items-center mb-2 lg:mb-5 gap-6">
          <Check className="text-primary" />
          <p className="font-normal text-lg lg:text-xl text-black">Healthcare and Medical Aid</p>
        </div>
        <div className="flex items-center mb-2 lg:mb-5 gap-6">
          <Check className="text-primary" />
          <p className="font-normal text-lg lg:text-xl text-black">Water and Sanitation Initiatives</p>
        </div>
        <div className="flex items-center mb-2 lg:mb-5 gap-6">
          <Check className="text-primary" />
          <p className="font-normal text-lg lg:text-xl text-black">Community Empowerment Projects</p>
        </div>
        <div className="flex items-center mb-2 lg:mb-5 gap-6">
          <Check className="text-primary" />
          <p className="font-normal text-lg lg:text-xl text-black">Skills and Vocational Training</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Section2