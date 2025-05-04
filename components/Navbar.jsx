"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { programs, websiteLinks } from '@/constants';
import { ChevronDown, PhoneCall } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';

const Navbar = ({ isLight }) => {
  const pathname = usePathname();
  const [authState, setAuthState] = useState(false);
  const textColor = isLight ? 'text-white' : 'text-black';
  const logoSrc = isLight ? '/images/Logo.png' : '/images/Logo.png'; // Assuming you have a light version of the logo

  return (
    <div className="absolute w-full z-40 bg-transparent px-4 lg:px-10">
      <div className="flex items-center justify-between lg:py-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={logoSrc} width={200} height={200} alt="Logo" className="" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {websiteLinks.map((link) => {
            const isActive = pathname === link.route || (link.subLinks && link.subLinks.some(subLink => pathname === subLink.route));

            if (link.subLinks) {
              return (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.route}
                    className={cn(
                      `flex items-center font-medium cursor-pointer text-lg tracking-tight transition-all duration-100 hover:border-b-2 hover:border-secondary ${textColor}`,
                      { "border-b-2 border-secondary": isActive }
                    )}
                  >
                    {link.label}
                    <ChevronDown className={`ml-2 w-4 h-4 ${textColor}`} />
                  </Link>
                  {/* Custom dropdown menu */}
                  <div className="absolute left-0 top-full min-w-[250px] py-2 hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg">
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
                  className={cn(`font-medium cursor-pointer text-lg tracking-tight transition-all duration-100 hover:border-b-2 hover:border-secondary ${textColor}`, { "border-b-2 border-secondary": isActive })}
                >
                  {link.label}
                </Link>
              );
            }
          })}
        </div>

        {/* Donate Button */}
    <div className="flex items-center">
      <Link href="/contacts">
      <button className="hidden lg:block bg-primary text-white px-6 py-2 rounded-lg font-bold text-lg shadow hover:bg-secondary transition-all">
  Donate
</button>

      </Link>
    </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <MobileNav isLight />
        </div>
      </div>
    </div>

  );
};

export default Navbar;
