

"use client";
import { FaTools, FaUsers, FaLightbulb, FaHandshake, FaMoneyBillWave, FaLaptopCode } from "react-icons/fa";

export default function Career() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#390067] via-[#2b0b3a] to-black relative overflow-hidden">
      {/* Glass-morphism background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            ক্যারিয়ার গড়ুন<br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              অ্যাস্ট্রো এর সাথে
            </span>
          </h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><FaUsers className="inline-block text-xl" /> আমরা যাদের খুঁজছি:</h2>
            <ul className="space-y-3 text-gray-200 text-lg text-left max-w-lg mx-auto">
              <li className="flex items-center gap-2"><FaTools className="text-[#390067]" /> ইলেকট্রনিক্স, মেকানিক্যাল রিপেয়ার, আইটি-তে শক্তিশালী টেকনিক্যাল দক্ষতা</li>
              <li className="flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> দ্রুত ও দক্ষতার সাথে টেকনিক্যাল সমস্যা নির্ণয় ও সমাধানের সক্ষমতা</li>
              <li className="flex items-center gap-2"><FaLaptopCode className="text-blue-400" /> প্রাসঙ্গিক ইন্ডাস্ট্রি বা যন্ত্রপাতি তে অভিজ্ঞতা (পছন্দনীয়, তবে আবশ্যক নয়)</li>
              <li className="flex items-center gap-2"><FaHandshake className="text-green-400" /> শক্তিশালী টিমওয়ার্ক ও যোগাযোগ দক্ষতা</li>
              <li className="flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> চমৎকার সেবা ও নিরবচ্ছিন্ন শেখার প্রতি আগ্রহ</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><FaMoneyBillWave className="inline-block text-xl" /> কেন আমাদের সাথে যোগ দেবেন?</h2>
            <ul className="space-y-3 text-gray-200 text-lg text-left max-w-lg mx-auto">
              <li className="flex items-center gap-2"><FaMoneyBillWave className="text-green-400" /> প্রতিযোগিতামূলক বেতন ও সুযোগ-সুবিধা</li>
              <li className="flex items-center gap-2"><FaLaptopCode className="text-blue-400" /> আধুনিক প্রযুক্তির সাথে কাজ করার সুযোগ</li>
              <li className="flex items-center gap-2"><FaHandshake className="text-green-400" /> সহায়ক ও উন্নয়নমুখী কর্মপরিবেশ</li>
              <li className="flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> হাতে-কলমে কাজের অভিজ্ঞতা ও ক্যারিয়ার ডেভেলপমেন্টের সুযোগ</li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">আবেদন করার নিয়ম:</h2>
            <p className="text-gray-200 text-lg">আমাদের অনলাইন ফর্ম পূরণ করে আবেদন জমা দিন</p>
          </div>
          <a href="/Career">
            <button className="w-full bg-white text-[#390067] text-2xl font-bold py-4 rounded-2xl shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              আবেদন করতে এখানে ক্লিক করুন
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
