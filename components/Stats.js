"use client";
import React from "react";
import { motion } from "framer-motion";
import { integralCF } from "../styles/fonts";
import AnimatedCounter from "./ui/AnimatedCounter";

const Stats = () => {
  const stats = [
    {
      number: 1000,
      suffix: "+",
      title: "Happy customers",
      description: "Customers who love our service"
    },
    {
      number: 50,
      suffix: "+",
      title: "Devices models",
      description: "Successfully repaired",
    },
    {
      number: 3,
      suffix: "",
      title: "Years in business",
      description: "Technology service experience"
    },
    {
      number: 24,
      suffix: "/7",
      title: "Hour support",
      description: "Always by your side"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2
            className={`${integralCF.className} text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#390067] to-[#2b0b3a] bg-clip-text text-transparent`}
          >
            আমাদের সাফল্য
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            গত কয়েক বছরে আমরা যে মাইলফলক অর্জন করেছি
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={`stat-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center group"
            >
              {/* Number Container */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110"></div>
                <div className="relative bg-white rounded-full p-6 lg:p-8 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`${integralCF.className} text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#390067] to-[#2b0b3a] bg-clip-text text-transparent`}>
                    <AnimatedCounter from={0} to={stat.number} />
                    {stat.suffix}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
                  {stat.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#390067] to-[#2b0b3a] mx-auto mt-4 rounded-full"
              ></motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            আপনিও হয়ে উঠুন আমাদের সন্তুষ্ট গ্রাহকদের একজন
          </p>
          <button className="bg-gradient-to-r from-[#390067] to-[#2b0b3a] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            আজই যোগাযোগ করুন
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
