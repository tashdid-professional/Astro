import React from "react";
import Image from "next/image";
import { integralCF } from "../../../styles/fonts";
import Carousel from "../../../components/Carousel";

const page = () => {
  return (
    <div className="px-[5%] my-20 text-black container mx-auto ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className={` ${integralCF.className} text-5xl font-bold my-6 bg-gradient-to-r from-[#390067] to-black text-transparent bg-clip-text`}>
          Astro Panchagarh Branch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Bringing modern electronics and repair services to northern Bangladesh. Your reliable technology partner in Panchagarh district.
        </p>
      </div>
      
      <Carousel />
      
      {/* Store Information Section */}
      <div className="mt-12 bg-gradient-to-br from-[#2b0b3a] to-[#4a1a5a] rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Visit Our Panchagarh Store</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-gray-200">Town Hall Road, Panchagarh Sadar, Panchagarh-5000, Bangladesh</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-200">+880 568-345678</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🕒</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Store Hours</h3>
                <p className="text-gray-200">9:00 AM - 8:00 PM (Daily)</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Services Available</h3>
                <ul className="text-gray-200 space-y-1">
                  <li>• Electronics Repair</li>
                  <li>• Installation Services</li>
                  <li>• Product Sales</li>
                  <li>• Technical Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 text-center">Find Us on Map</h3>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-96 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14514.123456789012!2d88.5500!2d26.3469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e352a6f2b6f2b6%3A0x5c5b9c5e0e5b5b5b!2sPanchagarh%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1642215122228!5m2!1sen!2sbd"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
