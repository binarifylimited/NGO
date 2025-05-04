import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Section2 from '@/components/Section2'
import Stats from '@/components/Stats'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Volunteer = () => {
  return (
    <div>
        <title>Volunteer - Binarify</title>
        <Navbar />
        <section className="lg:h-[812px] pb-20 lg:pb-[150px] w-full bg-[url('/images/boybg.webp')] bg-no-repeat bg-center bg-cover text-slate-50 text-black">
    <div className="container lg:text-left text-center lg:flex items-end">
        <div className="w-full pt-28 lg:pt-[300px]">
            <h1 className="text-3xl lg:text-6xl font-bold mb-4 text-primary">Become a Volunteer</h1>
            <p className="text-lg lg:text-2xl my-4">Join us in empowering underserved communities in Nigeria.</p>
        </div>
        <div className="w-full flex items-baseline justify-center">
            {/* Additional content or actions can go here */}
        </div>
    </div>
</section>

<section className="lg:flex px-4 items-center justify-between">
    <div className="w-full mt-[6%] flex items-center justify-center">
        <div className="lg:w-[60%] lg:ml-[15%] w-full">
            <p className="font-medium text-base text-gray-600 mb-4">JOIN US IN OUR MISSION</p>
            <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-black">Together, We Empower Communities Through Education & Healthcare</h1>
            <p className="font-normal text-lg lg:text-xl my-4 text-gray-500">
                Volunteering with Binarify Community Outreach means contributing to the transformation of lives in underserved Nigerian communities. From teaching children in rural areas to supporting healthcare initiatives, your time and expertise matter.
            </p>
            <p className="font-normal text-lg lg:text-xl my-4 text-gray-500">
                No matter your skills – whether you're a teacher, healthcare professional, or someone with a passion for social change – your contribution will help foster sustainable development.
            </p>
            <p className="font-normal text-lg lg:text-xl my-4 text-black">
                Be part of the movement to break the cycle of poverty and bring hope to those who need it most. Volunteers are the heart of Binarify's mission.
            </p>
        </div>
    </div>

    <div className="w-full">
        <div className="w-full flex justify-end items-start mb-5 lg:mb-[154px] lg:mt-[-150px]">
            <div className="flex w-fit flex-col-reverse lg:flex-row items-end gap-6">
                <Image src="/images/image6.jpg" className="w-full lg:w-[300px]" width={300} height={400} alt="Volunteer Image" />
                <Image src="/images/image8.jpg" className="border-8 lg:border-12 border-secondary" width={350} height={350} alt="Volunteer Image" />
            </div>
        </div>
        <div className="flex justify-center">
            <Image src="/images/image7.jpg" className="w-full lg:w-[300px]" width={400} height={400} alt="Community Impact Image" />
        </div>
    </div>
</section>


<Section2 />

<section className="py-10 lg:py-[150px] bg-gray-100">
    <div className="mx-auto flex flex-col text-center items-center justify-center w-fit">
        <p className="font-medium text-lg text-gray-600 uppercase mb-5">Donate Now</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-11 lg:w-[65%] text-black">Explore How Your Support Can Transform Lives Today</h1>
        <div className="px-4 lg:container grid lg:grid-cols-2 gap-10">
            {/* In Person Section */}
            <div className="w-full py-5 lg:py-20 px-5 lg:px-14 border-b-8 border-secondary bg-gray-100">
                <h1 className="text-3xl lg:text-4xl font-bold mb-6">In Person</h1>
                <p className="text-xl lg:text-2xl mb-11 text-gray-600">You can make a donation by visiting our office. Your contribution will go directly towards our healthcare and education initiatives in Nigerian communities.</p>
                <p className="text-lg lg:text-xl font-bold">NWB 542, Near Nepa Office, Off Western By-Pass Dutsen Kura, Minna, Niger State, Nigeria.</p>
            </div>
            
            {/* Over the Phone or Email Section */}
            <div className="w-full py-5 lg:py-20 px-5 lg:px-14 border-b-8 border-primary bg-gray-100">
                <h1 className="text-3xl lg:text-4xl font-bold mb-6">Over the Phone or Email</h1>
                <p className="text-xl lg:text-2xl mb-11 text-gray-600">Contact our team via phone or email to discuss donation options and how your funds will directly benefit those in need.</p>
                <p className="text-lg lg:text-xl font-bold">+234 811 541 2743, + 234 703 135 7143 or <Link href="#" className="text-primary">binarifycommunityoutreach@hotmail.com</Link></p>
            </div>
        </div>
    </div>
</section>



        <section className="h-fit lg:h-[812px] lg:pb-[151px] w-full bg-[url('/images/bg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
            <div className="container flex items-center">
                <div className="lg:max-w-[65%] py-[70px] lg:py-[150px]">
                    <h1 className="text-4xl lg:text-8xl font-bold mb-4">Delivering help and hope through sponsorship.</h1>
                    <p className="text-xl lg:text-2xl my-4">Basic information needed to make a decision can be learned very quickly on the site or during a conversation.</p>
                    <div className="mt-16 lg:my-16">
                        <Link href="/contacts" type="button" className="bg-secondary text-lg font-semibold text-[#222] rounded-full hover:bg-primary w-full py-5 px-10">
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

export default Volunteer