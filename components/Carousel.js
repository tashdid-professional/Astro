'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = [
    '/images/caro-1.jpg',
    '/images/caro-2.jpg',
    '/images/caro-3.jpg',
  ];

 const texts = [
  'Hello world',
  'Bye world',
  'COngratulations'
 ] 

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto swipe every 5 seconds

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
     <AnimatePresence initial={false} custom={direction}>
  <motion.img
    key={index}
    src={images[index]}
    alt={`Slide ${index}`}
    className="absolute w-full h-full object-cover"
    initial={{ opacity: 0.6, x: direction > 0 ? "100%" : "-100%" }}
    animate={{ opacity: 1, x: "0%" }}
    exit={{ opacity: 0.6, x: direction > 0 ? "-100%" : "100%" }}
    transition={{ duration: 1, ease: "backIn" }}
  />
</AnimatePresence>

      
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
    </div>
  );
};

export default Carousel;
