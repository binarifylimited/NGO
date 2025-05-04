import { PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-5">
  <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
    
    {/* Logo and Description */}
    <div className="w-full lg:w-1/3 text-center lg:text-left">
      <Image src="/images/Logo.png" alt="Binarify Community Outreach Logo" width={200} height={200} className="mx-auto lg:mx-0 mb-4" />
      <p className="text-lg text-gray-400">
        Good deeds are available to everyone! And there are many responsive people around who are ready to help.
      </p>
    </div>

        
        {/* Company Links */}
        <div>
  <h3 className="text-lg font-semibold text-primary mb-4">Company</h3>
  <ul className="flex flex-wrap lg:flex-nowrap gap-4 lg:space-x-8">
    <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Who We Are</Link></li>
    <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Our Programs</Link></li>
    <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Volunteer</Link></li>
    <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Events</Link></li>
    <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Contacts</Link></li>
  </ul>
</div>


        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin w-6 h-6"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter w-6 h-6"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook w-6 h-6"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram w-6 h-6"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube w-6 h-6"></i>
            </Link>
          </div>
        </div>

  </div>

  {/* Footer Bottom */}
  <div className="bg-gray-700 py-4 mt-3 text-center">
    <p className="text-sm text-gray-400">
      © 2025 Empowering Communities, Transforming Lives. All rights reserved. 
      <Link href="#" className="text-primary underline">Privacy Policy</Link> | 
      <Link href="#" className="text-primary underline">Terms & Conditions</Link>
    </p>
  </div>
</footer>


  )
}

export default Footer