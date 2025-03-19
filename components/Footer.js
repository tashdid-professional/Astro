'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#390067] to-black text-white py-8 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between lg:px-[5%]">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left py-7">
          <div className="flex items-center space-x-2 mb-2">
            <Image src="/images/logo3.png" alt="Company Logo" width={200} height={80} />
            
          </div>
          <p className="text-gray-400 text-sm max-w-sm">
            Your trusted partner in providing high-quality products and services. Join us to experience excellence.
          </p>
        </div>

        {/* Navs */}
        <div className='flex space-x-3 px-16 flex-wrap justify-center'>
          <Link className='' href='/'>Home</Link>
          <Link className='' href='/About'>About</Link>
          <Link className='' href='/Stores'>Stores</Link>
          <Link className='' href='/Franchise'>Franchise</Link>
          <Link className='' href='/Media'>Media</Link>
          <Link className='' href='/Career'>Career</Link>
          <Link className='' href='/Contact'>Contact</Link>
        </div>
        
        {/* Social Media Links */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <Link href="https://facebook.com" target="_blank" className="hover:text-blue-500 text-xl">
            <FaFacebook />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400 text-xl">
            <FaTwitter />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 text-xl">
            <FaInstagram />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600 text-xl">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Astro Solutions. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
        </div>
        <p className='mt-2'>Designed and Developed by Habibur Rahman</p>
      </div>
    </footer>
  );
}