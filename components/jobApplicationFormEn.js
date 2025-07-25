"use client";

import { useState } from "react";
import { sendEmail } from "../app/actions/sendEmail";
import { integralCF } from "../styles/fonts";
import Image from "next/image";

export default function JobApplicationFormEn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    experience: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        experience: "",
      });
    } else {
      setStatus("Failed to send email.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Content Section */}
      <div className="text-gray-800 px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
      
        
        <div className="relative mb-12 md:mb-14 lg:mb-16 rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
          <Image 
            src={"/images/hiring.jpg"} 
            alt="astro-career" 
            width={1300} 
            height={600} 
            className="w-full h-60 md:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="text-center mb-12 md:mb-14 lg:mb-16">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 max-w-4xl mx-auto px-2">
            Are you a skilled and passionate engineer looking for an exciting opportunity? 
            At Astro, we are searching for dedicated professionals to join our team and help us 
            deliver top-quality service and innovative solutions to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 mb-12 md:mb-14 lg:mb-16">
          {/* What We are Looking For */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-7 lg:p-8 shadow-lg border-l-4 border-[#390067]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-7 lg:mb-8 text-[#2b0b3a] flex items-center">
              <span className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-full flex items-center justify-center text-white text-lg md:text-xl mr-3 md:mr-4">
                🔍
              </span>
              What We&apos;re Looking For
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-lg md:text-xl mt-1">✔️</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Strong technical expertise in electronics, mechanical repairs, and IT</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-lg md:text-xl mt-1">✔️</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Ability to diagnose and solve technical issues efficiently</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-lg md:text-xl mt-1">✔️</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Experience in electronics or related industry (preferred but not required)</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-lg md:text-xl mt-1">✔️</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Strong teamwork and communication skills</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-lg md:text-xl mt-1">✔️</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Passion for delivering excellent service and continuous learning</p>
              </div>
            </div>
          </div>

          {/* Why Join Us */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-7 lg:p-8 shadow-lg border-l-4 border-[#2b0b3a]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-7 lg:mb-8 text-[#2b0b3a] flex items-center">
              <span className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#2b0b3a] to-[#390067] rounded-full flex items-center justify-center text-white text-lg md:text-xl mr-3 md:mr-4">
                🌟
              </span>
              Why Join Us?
            </h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-lg md:text-xl mt-1">✅</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Competitive salary and comprehensive benefits</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-lg md:text-xl mt-1">✅</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Opportunity to work with cutting-edge technology</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-lg md:text-xl mt-1">✅</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Supportive and growth-oriented work environment</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-500 text-lg md:text-xl mt-1">✅</span>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">Hands-on experience and career development opportunities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#390067] to-[#2b0b3a] rounded-xl md:rounded-2xl p-6 md:p-7 lg:p-8 text-white mb-8 md:mb-10 lg:mb-12 mx-2 md:mx-0">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 flex items-center justify-center">
            <span className="text-2xl md:text-3xl mr-2 md:mr-3">📩</span>
            Ready to Apply?
          </h3>
          <p className="text-base md:text-lg text-gray-200 px-2">
            Submit your application by filling out the online form below and take the first step to join our team.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-4 md:p-6 lg:p-8 mx-2 md:mx-4 lg:mx-8 mb-6 md:mb-8 border-t-4 border-[#390067]">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2b0b3a] mb-2">Submit Your Application</h2>
          <p className="text-gray-600 text-sm md:text-base">Fill out the form below to join our team</p>
        </div>
        
        {status && (
          <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-lg text-center text-sm md:text-base ${
            status.includes("successfully") 
              ? "bg-green-100 text-green-700 border border-green-300" 
              : status.includes("Failed") 
                ? "bg-red-100 text-red-700 border border-red-300"
                : "bg-blue-100 text-blue-700 border border-blue-300"
          }`}>
            {status}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#390067] focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white text-sm md:text-base"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#390067] focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white text-sm md:text-base"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#390067] focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white text-sm md:text-base"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Age *</label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#390067] focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white text-sm md:text-base"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Address *</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your complete address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#390067] focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white text-sm md:text-base"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Experience & Skills *</label>
            <textarea
              name="experience"
              placeholder="Tell us about your experience, skills, and why you want to join our team..."
              value={formData.experience}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#390067] focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white resize-none text-sm md:text-base"
            ></textarea>
          </div>
          
          <div className="text-center pt-2 md:pt-4">
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full md:w-auto bg-gradient-to-r from-[#390067] to-[#2b0b3a] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:shadow-lg transform hover:scale-105 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "Sending..." ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting Application...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <span className="mr-2">📧</span>
                  Submit Application
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
