"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/images/banner-1.jpeg",
  "/images/banner-2.jpeg",
  "/images/banner-3.jpeg",
  "/images/banner-4.jpeg",
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      whileInView={{ opacity: 1 }}
      className="relative  lg:h-[90vh] h-[200px] overflow-hidden  rounded-2xl  lg:m-6 m-4 "
    >
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full relative ">
            <Image
              src={src}
              alt={`Slide ${i}`}
              layout="fill"
              objectFit="fill"
              priority
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        <ArrowLeft className="text-white" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        <ArrowRight className="text-white" />
      </button>
    </motion.div>
  );
};

export default Carousel;
