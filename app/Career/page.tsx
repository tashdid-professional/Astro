"use client";
import React from 'react'
import { useState } from "react"; // ✅ Correct import for Next.js`
import JobApplicationFormEn from '../../components/jobApplicationFormEn'
import JobApplicationFormBn from '../../components/jobApplicationFormBn'
import Image from 'next/image';
import { integralCF } from '../../styles/fonts';

const Page = () => {
  const [selectedComponent, setSelectedComponent] = useState<"A" | "B">("A");
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2b0b3a] to-[#4a1a5a] text-white py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <h1 className={`${integralCF.className} text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6`}>
            Join Our Team
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-gray-200 px-4">
            Build your career with Astro BD - Where innovation meets opportunity
          </p>
          <div className="w-16 md:w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Language Toggle Section */}
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex justify-center lg:justify-end mb-6 md:mb-8">
          <div className="bg-white rounded-full p-1.5 md:p-2 shadow-lg border border-gray-200">
            <div className="flex gap-1 md:gap-2">
              <button
                onClick={() => setSelectedComponent("A")}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  selectedComponent === "A"
                    ? "bg-gradient-to-r from-[#390067] to-[#2b0b3a] text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-[#390067] hover:bg-gray-50"
                }`}
              >
                🇺🇸 English
              </button>
              <button
                onClick={() => setSelectedComponent("B")}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                  selectedComponent === "B"
                    ? "bg-gradient-to-r from-[#390067] to-[#2b0b3a] text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-[#390067] hover:bg-gray-50"
                }`}
              >
                🇧🇩 বাংলা
              </button>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden mx-2 md:mx-0">
          <div className="p-0.5 md:p-1 bg-gradient-to-r from-[#390067] to-[#2b0b3a]">
            <div className="bg-white rounded-lg md:rounded-xl">
              {selectedComponent === "A" ? <JobApplicationFormEn /> : <JobApplicationFormBn/>}
            </div>
          </div>
        </div>
        
        {/* Additional Info Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-full flex items-center justify-center mb-4 md:mb-6">
              <span className="text-xl md:text-2xl text-white">💼</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Career Growth</h3>
            <p className="text-gray-600 text-sm md:text-base">Advance your career with comprehensive training programs and clear promotion pathways.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-full flex items-center justify-center mb-4 md:mb-6">
              <span className="text-xl md:text-2xl text-white">🤝</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Team Culture</h3>
            <p className="text-gray-600 text-sm md:text-base">Join a supportive team environment that values collaboration and innovation.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-full flex items-center justify-center mb-4 md:mb-6">
              <span className="text-xl md:text-2xl text-white">🎯</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Benefits</h3>
            <p className="text-gray-600 text-sm md:text-base">Enjoy competitive compensation, health benefits, and work-life balance.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Page
