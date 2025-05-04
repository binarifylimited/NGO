"use client"
import React from 'react'
import { programs } from '@/constants';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';


const SingleProgram = () => {
    const router = usePathname();
  
    // Find the matching program based on the current route
    const program = programs.find(p => p.link == router);
    const pageTitle = program?.title ? `${program.title} - Binarify Outreach` : "Loading...";
  
    return (
      <div>
        <title>{pageTitle}</title>
        <Navbar isLight={true} />
        <section className="lg:h-[812px] pb-20 lg:pb-[150px] w-full bg-[url('/images/handbg.webp')] bg-no-repeat bg-center bg-cover text-slate-50">
            <div className="container lg:pl-[100px] lg:flex justify-center items-center">
                <div className="w-full pt-28 lg:pt-[250px] lg:max-w-[65%] text-center flex flex-col items-center justify-center">
                  <h1 className="text-4xl lg:text-8xl font-bold mb-4 text-center">{program?.title}</h1>
                  <p className="text-2xl mt-4 lg:w-[500px] text-center">Use our fundraising tools to create campaigns helping children in poverty.</p>
                </div>
            </div>
        </section>

        <section className="flex lg:flex-row flex-col mt-10 container items-center lg:items-start justify-center gap-10 lg:gap-20">
            <Image src="/images/image9.png" className="sm:w-full lg:w-fit" width={500} height={400} alt="Image" />
            <Image src="/images/image13.png" className="" width={500} height={400} alt="Image" />
        </section>

        <section className="container items-start justify-center pb-[50px] lg:max-w-[860px] mt-12">
            <p className="font-normal text-xl mb-10 lg:mb-[100px] text-gray">
            Poverty is a complex and multidimensional problem, the causes of which are both national and international. A universal solution to the problem could not be found that could be applied at the global level. All countries had a shared responsibility to take action to combat poverty.
            </p>
            <h1 className="text-3xl font-bold mb-5 text-black">Such different poverty.</h1>
            <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">There is the so-called concept of absolute poverty, which is based on the concept of the poverty line. If your income (or consumption) is below that level, you are considered poor.</p>

            <ul className="mb-10 lg:mb-[100px]">
                <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Minimum subsistence level</li>
                <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />A set of essential services and products</li>
                <li className="flex items-center gap-1 text-xl text-gray"><Dot className="h-16 w-16" />Income level per day</li>
            </ul>

            <h1 className="text-3xl font-bold mb-5 text-black">Programs tailored to fit the need.</h1>
            <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">Different countries have adopted different approaches to combating poverty. It is often assumed that poverty is a person’s personal choice. Therefore, state assistance should not provide the poor with a too comfortable existence – everyone receives social assistance in the same amount.</p>
            <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">The continental model of poverty alleviation is based on a developed system of compulsory insurance. According to it, the longer and more fruitful a person works, the higher his level of social protection.</p>
        
            <h1 className="text-xl font-bold mt-10 mb-5 text-black">Let’s talk about giving.</h1>
            <p className="font-normal text-xl lg:w-[83%] my-2 text-gray">
                If you’re interested in making a major gift, please contact our Tender Heart Community team at 
                <span href="/" className="text-xl font-normal text-[#222]"> +1 234 567 8901 </span>  or <Link href="#" className="text-[#222]"> Binarify Outreach@example.com</Link>
                        
            </p>
        </section>

        <Footer />
      </div>
    );
  };

export default SingleProgram