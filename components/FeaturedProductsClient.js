"use client";
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { integralCF } from "../styles/fonts";

const FeaturedProductsClient = ({ products }) => {
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
            className={`${integralCF.className} text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#390067] to-[#2b0b3a] bg-clip-text text-transparent`}
          >
            FEATURED PRODUCTS
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            আমাদের সেরা এবং জনপ্রিয় প্রোডাক্টগুলো দেখুন যা গ্রাহকদের প্রিয়
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 lg:gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={`product-${product.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            আরও পণ্য দেখতে চান? আমাদের সম্পূর্ণ কালেকশন ব্রাউজ করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/About/Products">
            <button className="bg-gradient-to-r from-[#390067] to-[#2b0b3a] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              সব পণ্য দেখুন
            </button></a>
            {/* <button className="border-2 border-[#390067] text-[#390067] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#390067] hover:text-white transform hover:scale-105 transition-all duration-300">
              ক্যাটাগরি দেখুন
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProductsClient;
