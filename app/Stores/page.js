import React from "react";
import Image from "next/image";
import { integralCF } from "../../styles/fonts";
import Carousel from "../../components/Carousel";

const page = () => {
  return (
    <div className="px-[5%] my-20 text-black container mx-auto ">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className={` ${integralCF.className} text-5xl font-bold my-6 bg-gradient-to-r from-[#390067] to-black text-transparent bg-clip-text`}>
          Astro Sirajganj Branch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our flagship store in Sirajganj, providing top-quality electronics products and professional repair services to the community.
        </p>
      </div>
      
      <Carousel />
      
      {/* Store Information Section */}
      <div className="mt-12 bg-gradient-to-br from-[#2b0b3a] to-[#4a1a5a] rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Visit Our Sirajganj Store</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Address</h3>
                <p className="text-gray-200">Main Road, Sirajganj Sadar, Sirajganj-6700, Bangladesh</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-semibold text-lg mb-1">Phone</h3>
                <p className="text-gray-200">+880 751-234567</p>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14605.194387767845!2d89.69281!2d24.456944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdda92a5d3c0c9%3A0x5c5b9c5e0e5b5b5b!2sSirajganj%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1642215122228!5m2!1sen!2sbd"
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
