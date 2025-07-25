"use client";
import React from "react";
import { motion } from "framer-motion";
import { integralCF } from "../styles/fonts";
import { Phone, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      number: "০১",
      title: "যোগাযোগ করুন",
      description: "ফোন বা অনলাইনে আমাদের সাথে যোগাযোগ করুন এবং আপনার সমস্যা বর্ণনা করুন।",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      number: "০২", 
      title: "পরীক্ষা ও মেরামত",
      description: "আমাদের দক্ষ টেকনিশিয়ানরা আপনার ডিভাইস পরীক্ষা করে সমস্যা সমাধান করবেন।",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: CheckCircle2,
      number: "০৩",
      title: "সমাধান ও ডেলিভারি",
      description: "মেরামত সম্পন্ন হলে আমরা আপনাকে জানাবো এবং ডিভাইস ফেরত দেবো।",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#390067] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-[#2b0b3a] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#390067] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
            কিভাবে কাজ করি
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            মাত্র তিনটি সহজ ধাপে পেয়ে যান আপনার প্রযুক্তি সমস্যার সমাধান
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[#390067] via-[#2b0b3a] to-[#390067] rounded-full relative"
            >
              {/* Moving Dot */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "calc(100% - 12px)" }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#390067] rounded-full shadow-lg"
              ></motion.div>
            </motion.div>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={`step-${index}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative text-center group"
                >
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-full flex items-center justify-center z-10"
                  >
                    <span className={`${integralCF.className} text-white font-bold text-sm`}>
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Main Card */}
                  <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#390067]/20 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative space-y-4">
                      <h3 className={`${integralCF.className} text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-[#390067] transition-colors duration-300`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <div className="w-16 h-16 border border-[#390067] rounded-full"></div>
                    </div>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <ArrowRight className="w-8 h-8 text-[#390067]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className={`${integralCF.className} text-2xl md:text-3xl lg:text-4xl mb-4`}>
                প্রস্তুত আছেন শুরু করতে?
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                আজই আমাদের সাথে যোগাযোগ করুন এবং পান দ্রুত ও নির্ভরযোগ্য প্রযুক্তি সেবা
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#390067] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  এখনই কল করুন
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#390067] transform hover:scale-105 transition-all duration-300">
                  অনলাইনে বুক করুন
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
