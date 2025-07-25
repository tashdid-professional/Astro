"use client";
import React from "react";
import { motion } from "framer-motion";
import { integralCF } from "../styles/fonts";
import { CheckCircle2, Shield, Clock, Users, Wrench, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "বিশ্বস্ত সেবা",
      description: "আমাদের কাজের উপর পূর্ণ গ্যারান্টি এবং আস্থা রাখতে পারেন।",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "দ্রুত সমাধান",
      description: "সর্বোচ্চ ২৪ ঘন্টার মধ্যে আপনার সমস্যার সমাধান।",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "দক্ষ টিম",
      description: "অভিজ্ঞ এবং প্রশিক্ষিত টেকনিশিয়ানদের একটি শক্তিশালী টিম।",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Wrench,
      title: "আধুনিক যন্ত্রপাতি",
      description: "সর্বাধুনিক টুলস এবং প্রযুক্তি ব্যবহার করে সেবা প্রদান।",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "গ্রাহক সেবা",
      description: "গ্রাহকদের সন্তুষ্টিই আমাদের প্রথম এবং শেষ লক্ষ্য।",
      color: "from-red-500 to-red-600"
    },
    {
      icon: CheckCircle2,
      title: "সাশ্রয়ী মূল্য",
      description: "মানসম্পন্ন সেবা পাবেন একদম যুক্তিসঙ্গত দামে।",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#390067]/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#2b0b3a]/5 to-transparent rounded-full translate-y-48 -translate-x-48"></div>

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
            className={`${integralCF.className} font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#390067] to-[#2b0b3a] bg-clip-text text-transparent`}
          >
            কেন আমাদের বেছে নেবেন?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            আমরা শুধু সেবা দিই না, আমরা দীর্ঘমেয়াদী সম্পর্ক গড়ি। আপনার প্রযুক্তি সমস্যার 
            একমাত্র এবং স্থায়ী সমাধান।
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={`feature-${index}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#390067]/20 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-[#390067] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover Effect Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-3xl p-8 lg:p-12 text-white">
            <h3 className={`${integralCF.className} text-2xl md:text-3xl lg:text-4xl mb-4`}>
              আর দেরি কেন?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              আজই আমাদের সাথে যোগাযোগ করুন এবং পেয়ে যান সেরা প্রযুক্তি সেবা
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#390067] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                কল করুন এখনই
              </button>
              <a href="/Contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#390067] transform hover:scale-105 transition-all duration-300">
                মেসেজ করুন
              </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
