"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChartNoAxesGantt, X } from "lucide-react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <nav className="bg-[#4b2289] shadow-md text-white font-bold">
      <div className="">
        

        {/* Desktop Menu */}
        <div className={`flex space-x-10 text-sm font-extrabold ${poppinsFont.className} justify-end items-center container mx-auto flex   px-[7%] h-20`}>
          {[
            { name: "News", path: "/Media" },
            { name: "Image Gallery", path: "/Media/Image" },
            { name: "Video Gallery", path: "/Media/Video" },
            { name: "Blog", path: "/Media/Blog" },
            
           
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:border-b-4 border-white transition duration-200 ${
                pathname === link.path ? "font-extrabold border-b-4" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

       </div>
    
    </nav>
  );
}
