"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChartNoAxesGantt, X } from "lucide-react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import Image from 'next/image';

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <nav className="bg-[#390067] shadow-md text-white font-bold py-2">
      <div className="container mx-auto flex  justify-between items-center px-[7%] space-x-7">
        <div className="w-[45%] ">
          {/* Logo */}
          <Link href="/">
           <Image src="/images/logo3.png" alt="Company Logo" width={200} height={80}/>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-10  font-extrabold ${poppinsFont.className} w-[55%]`}>
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT", path: "/About" },
            { name: "STORES", path: "/Stores" },
            { name: "FRANCHISE", path: "/Franchise" },
            { name: "MEDIA", path: "/Media" },
            { name: "CAREER", path: "/Career" },
            { name: "CONTACT", path: "/Contact" },
          ].map((link) => (
            <Link
            key={link.path}
            href={link.path}
            className={`hover:border-b-4 border-white transition duration-200 ${
              pathname === link.path || (link.path === "/Stores" && pathname.startsWith("/Stores")) || (link.path === "/About" && pathname.startsWith("/About") || (link.path === "/Franchise" && pathname.startsWith("/Franchise")))
                ? "font-extrabold border-b-4"
                : "text-white"
            }`}
          >
            {link.name}
          </Link>
          
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="#ffffff" /> : <ChartNoAxesGantt size={24} color="#ffffff" />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden overflow-hidden bg-white shadow-md"
      >
        <div className="flex flex-col items-center space-y-4 p-4">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/About" },
            { name: "Stores", path: "/Stores" },
            { name: "Franchise", path: "/Franchise" },
            { name: "Media", path: "/Media" },
            { name: "Career", path: "/Career" },
            { name: "Contact", path: "/Contact" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-gray-600 hover:text-gray-900 ${
                pathname === link.path ? "font-bold text-purple-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
