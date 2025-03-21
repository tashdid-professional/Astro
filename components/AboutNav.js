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
        

        {/*Menu */}
        <div className={`flex flex-wrap space-x-8 col lg:flex-row lg:space-x-10 py-3 lg:text-sm text-xs lg:font-extrabold ${poppinsFont.className}  items-center lg:justify-end justify-between container mx-auto flex space-y-6 lg:space-y-0  lg:pr-[7%] lg:h-20`}>
          {[
            { name: "Company Profile", path: "/About" },
            { name: "Our Products", path: "/About/Products" },
            { name: "Our Services", path: "/About/Services" },
            { name: "Founder's Message", path: "/About/Founder" },
            { name: "Mission,Vission & Values", path: "/About/Vision" },
            { name: "Our Team", path: "/About/Team" },
           
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
