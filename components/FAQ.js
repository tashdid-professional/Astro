"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { integralCF } from "../styles/fonts";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "আপনারা কি ধরনের ডিভাইস মেরামত করেন?",
      answer: "আমরা ল্যাপটপ, ডেস্কটপ, মোবাইল ফোন, ট্যাবলেট, প্রিন্টার, সিসিটিভি ক্যামেরা, এবং অন্যান্য ইলেকট্রনিক্স ডিভাইস মেরামত করি। আমাদের দক্ষ টেকনিশিয়ানরা সব ধরনের ব্র্যান্ড এবং মডেলের সাথে কাজ করতে পারেন।"
    },
    {
      question: "মেরামতের জন্য কতক্ষণ সময় লাগে?",
      answer: "সাধারণত ২৪-৪৮ ঘন্টার মধ্যে আমরা বেশিরভাগ সমস্যার সমাধান করে থাকি। তবে সমস্যার জটিলতার উপর নির্ভর করে এটি আরও কম বা বেশি সময় নিতে পারে। আমরা সর্বদা দ্রুততম সময়ে কাজ সম্পন্ন করার চেষ্টা করি।"
    },
    {
      question: "আপনারা কি গ্যারান্টি দেন?",
      answer: "হ্যাঁ, আমাদের সব ধরনের সার্ভিসের উপর ৩০-৯০ দিনের গ্যারান্টি রয়েছে। যন্ত্রাংশ প্রতিস্থাপনের ক্ষেত্রে আরও বেশি গ্যারান্টি পেতে পারেন। আমরা আমাদের কাজের মানের প্রতি পূর্ণ আস্থা রাখি।"
    },
    {
      question: "সার্ভিস চার্জ কেমন?",
      answer: "আমাদের সার্ভিস চার্জ খুবই যুক্তিসঙ্গত এবং প্রতিযোগিতামূলক। প্রাথমিক পরীক্ষা ফ্রি এবং কাজ শুরু করার আগে আমরা সম্পূর্ণ খরচের একটি স্বচ্ছ হিসাব দিয়ে থাকি। কোনো লুকানো চার্জ নেই।"
    },
    {
      question: "আপনাদের শাখা কোথায় কোথায় আছে?",
      answer: "বর্তমানে আমাদের তিনটি শাখা রয়েছে - বরিশাল, পঞ্চগড় এবং সিরাজগঞ্জে। আমরা শীঘ্রই আরও শাখা খোলার পরিকল্পনা করছি। এছাড়া হোম সার্ভিসের সুবিধাও রয়েছে নির্দিষ্ট এলাকায়।"
    },
    {
      question: "জরুরি সেবা পাওয়া যায় কি?",
      answer: "হ্যাঁ, আমাদের ২৪/৭ জরুরি সেবা রয়েছে। বিশেষ করে ব্যবসায়িক প্রতিষ্ঠানের জন্য আমরা দ্রুত সেবা নিশ্চিত করি। জরুরি সেবার জন্য আমাদের হটলাইনে কল করুন।"
    },
    {
      question: "ডেটা নিরাপত্তা কিভাবে নিশ্চিত করেন?",
      answer: "আমরা গ্রাহকদের ডেটা নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দিয়ে থাকি। সব ধরনের পার্সোনাল এবং বিজনেস ডেটা সম্পূর্ণ গোপনীয়তার সাথে রাখা হয়। আমাদের টেকনিশিয়ানরা প্রফেশনাল এথিক্স মেনে চলেন।"
    },
    {
      question: "অনলাইনে অর্ডার করা যায় কি?",
      answer: "হ্যাঁ, আমাদের ওয়েবসাইট থেকে আপনি সার্ভিস বুক করতে পারেন এবং প্রোডাক্ট অর্ডার করতে পারেন। অনলাইনে পেমেন্টের সুবিধাও রয়েছে। হোম ডেলিভারি সার্ভিসও আছে।"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
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
            className={`${integralCF.className} text-4xl md:text-5xl lg:text-5xl mb-6 bg-gradient-to-r from-[#390067] to-[#2b0b3a] bg-clip-text text-transparent`}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            আমাদের সেবা সম্পর্কে আপনার যে কোনো প্রশ্নের উত্তর এখানে পেয়ে যাবেন
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={`faq-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 lg:px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-full flex items-center justify-center"
                      >
                        {openIndex === index ? (
                          <Minus className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4 text-white" />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 border-t border-gray-100">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-gray-600 leading-relaxed pt-4"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className={`${integralCF.className} text-2xl md:text-3xl lg:text-4xl mb-4 bg-gradient-to-r from-[#390067] to-[#2b0b3a] bg-clip-text text-transparent`}>
              আরও প্রশ্ন আছে?
            </h3>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              আমরা এখানে আছি আপনাকে সাহায্য করার জন্য। যেকোনো প্রশ্নের উত্তর দিতে আমরা প্রস্তুত।
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#390067] to-[#2b0b3a] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                যোগাযোগ করুন
              </button>
              <button className="border-2 border-[#390067] text-[#390067] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#390067] hover:text-white transform hover:scale-105 transition-all duration-300">
                চ্যাট করুন
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
