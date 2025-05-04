import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { programs } from '@/constants'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurPrograms = () => {
  return (
    <div>
      <title>Our Programs - Binarify</title>
        <Navbar isLight={true} />
        <section className="lg:h-[812px] pb-20 lg:pb-[150px] w-full bg-[url('/images/handbg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
            <div className="container lg:pl-[100px] lg:flex items-start">
                <div className="w-full lg:max-w-[58%] pt-28 lg:pt-[250px]">
                  <h1 className="text-5xl lg:text-8xl font-bold mb-4">All about our programs</h1>
                  <p className="text-xl lg:text-2xl mt-5 lg:w-[500px]">We have created programs that will help people in various areas of life. Good should be distributed in all areas of life!</p>
                </div>
            </div>
        </section>

        <section className="container lg:mb-[150px] mt-10 lg:flex items-center justify-center">
  <div className="w-full lg:lg:px-[20px]">
    <Image src="/images/image9.png" className="w-full" width={500} height={500} alt="Health Program" />
  </div>
  <div className="w-full pt-5 lg:pt-[61px] lg:pl-[140px] flex flex-col justify-center">
    <p className="font-medium text-lg text-gray uppercase mb-5">Healthcare Program</p>
    <Link href={programs[0].link} className="text-4xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
      {programs[0].title}
    </Link>
    <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">
      Healthcare is a fundamental right that should be accessible to everyone. Our healthcare program focuses on providing essential medical services to underserved Nigerian communities, ensuring that no one is left behind.
    </p>
    <ul>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Access to basic healthcare services</li>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Mobile health clinics and outreach programs</li>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Support for maternal and child health</li>
    </ul>
    <p className="font-normal text-xl lg:w-[83%] my-3 lg:my-5 text-gray">
      We believe in the power of accessible healthcare to improve lives and strengthen communities.
    </p>
  </div>
</section>

<section className="container lg:mb-[150px] flex flex-col-reverse lg:flex-row items-center justify-center">
  <div className="w-full pt-5 lg:pt-[61px] flex flex-col justify-center">
    <p className="font-medium text-lg text-gray uppercase mb-5">Education Program</p>
    <Link href={programs[1].link} className="text-3xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
      {programs[1].title}
    </Link>
    <p className="font-normal text-xl w-[83%] my-2 text-gray">
      Education is the key to unlocking the potential within individuals and communities. Our education program provides access to quality learning experiences for children and adults in rural Nigeria.
    </p>
    <ul>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Educational infrastructure development</li>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Teacher training and capacity building</li>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Scholarships and educational materials</li>
    </ul>
  </div>
  <div className="w-full lg:px-[20px]">
    <Image src="/images/image10.png" className="w-full" width={500} height={500} alt="Education Program" />
  </div>
</section>

<section className="container lg:mb-[150px] flex flex-col lg:flex-row items-center justify-center">
  <div className="w-full lg:px-[20px]">
    <Image src="/images/image11.png" className="w-full" width={500} height={500} alt="Empowerment Program" />
  </div>
  <div className="w-full pt-5 lg:pt-[61px] lg:pl-[140px] flex flex-col justify-center">
    <p className="font-medium text-lg text-gray uppercase mb-5">Economic Empowerment</p>
    <Link href={programs[2].link} className="text-3xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
      {programs[2].title}
    </Link>
    <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">
      Empowering individuals economically is key to breaking the cycle of poverty. Our program focuses on providing skills training, vocational education, and small business support for community members in Nigeria.
    </p>
    <p className="font-normal text-xl lg:w-[83%] my-5 text-gray">
      By fostering entrepreneurship and offering skills training, we help individuals build a sustainable future for themselves and their families.
    </p>
  </div>
</section>

<section className="container mb-[150px] flex flex-col-reverse lg:flex-row items-center justify-center">
  <div className="w-full pt-5 lg:pt-[61px] flex flex-col justify-center">
    <p className="font-medium text-lg text-gray uppercase mb-5">Emergency Relief</p>
    <Link href={programs[3].link} className="text-3xl lg:text-5xl hover:text-primary font-bold mb-5 text-black">
      {programs[3].title}
    </Link>
    <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">
      Natural disasters, conflicts, and other emergencies can disrupt communities and livelihoods. Our emergency relief program provides immediate assistance to those affected by such events.
    </p>
    <ul>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Emergency medical aid and supplies</li>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Food and water distribution</li>
      <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Shelter and essential needs support</li>
    </ul>
    <p className="font-normal text-xl lg:w-[83%] my-5 text-gray">
      We are committed to providing timely and effective relief to those in need, supporting their recovery and rebuilding efforts.
    </p>
  </div>
  <div className="w-full lg:px-[20px]">
    <Image src="/images/image12.png" className="w-full" width={500} height={500} alt="Emergency Relief" />
  </div>
</section>


      <section className="h-fit lg:h-[812px] lg:pb-[151px] w-full bg-[url('/images/oldbg.png')] mb-[-30px] bg-no-repeat bg-center bg-cover text-slate-50">
        <div className="container flex items-center">
          <div className="lg:max-w-[65%] py-[70px] lg:py-[150px]">
            <h1 className="text-4xl lg:text-8xl font-bold mb-4">Bringing people together to end poverty for good.</h1>
            <p className="text-xl lg:text-2xl my-4 w-[500px]">We are constantly providing assistance to low-income families in many areas.</p>
            <div className="mt-16 lg:my-16">
              <Link href="/contacts" type="button" className="bg-secondary text-lg font-semibold text-[#222] hover:text-white rounded-full hover:bg-primary w-full py-5 px-10">
                Volunteer Now
              </Link>
            </div>
          </div>
        </div>
      </section>


        <Footer />
    </div>
  )
}

export default OurPrograms