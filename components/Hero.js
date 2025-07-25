"use client";
import React from "react";
import { motion } from "framer-motion";
import { integralCF } from "../styles/fonts";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#390067] via-[#2b0b3a] to-black min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${integralCF.className} text-4xl md:text-5xl lg:text-7xl leading-tight`}
            >
              আপনার
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                প্রযুক্তি সঙ্গী
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-xl leading-relaxed"
            >
              ল্যাপটপ, মোবাইল, প্রিন্টার থেকে শুরু করে সিসিটিভি পর্যন্ত - সব ধরনের 
              ইলেকট্রনিক্স সার্ভিস এবং পণ্য একই ছাদের নিচে।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link href="/Contact">
                <button className="bg-white text-[#390067] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  যোগাযোগ করুন
                </button>
              </Link>
              <Link href="/Stores">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#390067] transform hover:scale-105 transition-all duration-300">
                  আমাদের শাখা
                </button>
              </Link>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm md:text-base">২৪/৭ সাপোর্ট</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm md:text-base">দক্ষ টেকনিশিয়ান</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm md:text-base">গ্যারান্টি সহ</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/astro-repair.jpeg"
                alt="Astro Technology Services"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Overlay Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -left-4 bg-white text-[#390067] px-6 py-3 rounded-full font-bold shadow-lg"
              >
                ✨ বিশ্বস্ত সেবা
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1 bg-white rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
