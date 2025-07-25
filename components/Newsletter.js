"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { integralCF } from "../styles/fonts";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#390067] via-[#2b0b3a] to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border border-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <h2
              className={`${integralCF.className} text-4xl md:text-5xl lg:text-6xl mb-6 text-white`}
            >
              সাবস্ক্রাইব করুন
            </h2>
            <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto">
              আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং পেয়ে যান সর্বশেষ অফার, 
              টেক টিপস এবং সেবা সম্পর্কিত আপডেট।
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: "💰", title: "বিশেষ ছাড়", desc: "শুধু সাবস্ক্রাইবারদের জন্য" },
              { icon: "🔧", title: "টেক টিপস", desc: "প্রযুক্তি সংক্রান্ত পরামর্শ" },
              { icon: "📱", title: "নতুন সেবা", desc: "আগেই খবর পান" }
            ].map((benefit, index) => (
              <motion.div
                key={`benefit-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20"
          >
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="আপনার ইমেইল এড্রেস লিখুন"
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#390067] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#390067]/30 border-t-[#390067] rounded-full animate-spin"></div>
                      সাবমিট হচ্ছে...
                    </>
                  ) : (
                    <>
                      সাবস্ক্রাইব করুন
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-gray-300 text-sm">
                  সাবস্ক্রাইব করে আপনি আমাদের{" "}
                  <span className="text-white underline cursor-pointer hover:text-gray-200">
                    প্রাইভেসি পলিসি
                  </span>{" "}
                  এবং{" "}
                  <span className="text-white underline cursor-pointer hover:text-gray-200">
                    টার্মস অফ সার্ভিস
                  </span>{" "}
                  এর সাথে সম্মত হচ্ছেন।
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">ধন্যবাদ!</h3>
                <p className="text-gray-200">
                  আপনি সফলভাবে আমাদের নিউজলেটার সাবস্ক্রাইব করেছেন। 
                  শীঘ্রই আপনার ইনবক্সে আমাদের খবর পাবেন।
                </p>
              </motion.div>
            )}
          </motion.div>

         
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
