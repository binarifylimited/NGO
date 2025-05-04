"use client"

import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { programs, websiteLinks } from '@/constants';
import { ChevronDown } from 'lucide-react';


const MobileNav = ({ isLight }) => {
    const pathname = usePathname();
    const textColor = isLight ? 'text-white' : 'text-black';
  return (
    <section className='w-full max-w-[264px]'>
         <Sheet>
            <SheetTrigger>
                <svg
                    className={`navbar-burger ${textColor}`}
                    fill="none"
                    height="60"
                    viewBox="0 0 70 70"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                    fill="currentColor"
                    height="56"
                    rx="30"
                    width="56"
                    ></rect>
                    <path d="M37 32H19M37 24H19" stroke="black"></path>
                </svg>
            </SheetTrigger>
            <SheetContent side="right" className="border-none z-50 bg-[#222]">
                <div className='flex h-[calc(100vh-72px)] flex-col py-10 justify-between overflow-y-auto'>
                    <SheetClose asChild>
                        <section className='flex w-full flex-col justify-center'>
                            <div className="flex flex-col items-start gap-8">
                                {websiteLinks.map((link) => {
                                const isActive = pathname === link.route || (link.subLinks && link.subLinks.some(subLink => pathname === subLink.route));

                                if (link.subLinks) {
                                    return (
                                    <div key={link.label} className="relative group">
                                        <Link
                                        href={link.route}
                                        className={cn(
                                            `flex items-center mr-10 font-medium cursor-pointer text-2xl tracking-tight transition-all duration-100 text-white hover:text-primary`,
                                            { " text-primary": isActive }
                                        )}
                                        >
                                        {link.label}
                                        <ChevronDown className={`ml-2 w-4 h-4 text-white`} />
                                        </Link>
                                        {/* Custom dropdown menu */}
                                        <div className="absolute left-0 top-full min-w-[250px] py-[10px] px-[5px] hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
                                        {programs.map((subLink) => (
                                            <Link key={subLink.title} href={subLink.link} className="block px-4 py-2 hover:text-primary">
                                            {subLink.title}
                                            </Link>
                                        ))}
                                        </div>
                                    </div>
                                    );
                                } else {
                                    return (
                                    <Link
                                        key={link.label}
                                        href={link.route}
                                        className={cn(`mr-10 font-medium cursor-pointer text-2xl tracking-tight transition-all duration-100 text-white hover:text-primary`, { "text-primary": isActive })}
                                    >
                                        {link.label}
                                    </Link>
                                    );
                                }
                                })}
                            </div>
                        </section>
                    </SheetClose>
                </div>
            </SheetContent>
          </Sheet>
    </section>
  )
}

export default MobileNav