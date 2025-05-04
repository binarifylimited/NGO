import Link from 'next/link'
import React from 'react'

const MissionVision = () => {
  return (
<section className="container mt-20 mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:px-20 ">
  {/* Vision Box */}
  <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
    <div className="bg-primary text-white p-4 rounded-full mb-6">
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-7 5h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h2m-3-3l-2 2m14-2l2 2" />
      </svg>
    </div>
    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-primary">Our Vision</h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      To empower underserved communities in Nigeria through innovative education and healthcare initiatives, fostering self-reliance, economic empowerment, and sustainable development.
    </p>
    <Link href="/" className="text-primary font-semibold underline">
      Learn More
    </Link>
  </div>

  {/* Mission Box */}
  <div className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
    <div className="bg-secondary text-white p-4 rounded-full mb-6">
      <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h3l2-3 4 6 3-4 4 7h2m-3 0h2a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v5H3a2 2 0 000 4z" />
      </svg>
    </div>
    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-secondary">Our Mission</h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      A Nigeria where every individual, regardless of background, has access to quality healthcare, education, and skills needed to thrive in a rapidly changing world.
    </p>
    <Link href="/contacts" className="text-secondary font-semibold underline">
      Contact Us
    </Link>
  </div>
</section>



  )
}

export default MissionVision