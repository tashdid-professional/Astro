import React from "react";
import Image from "next/image";
import Link from "next/link";
import { integralCF } from "../styles/fonts";
import { FaTools, FaUsers, FaChalkboardTeacher, FaMoneyBillWave, FaLaptopCode, FaRegHandshake, FaRegCheckCircle, FaRegPaperPlane } from "react-icons/fa";

function HireUs() {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Illustration */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/career.avif"
              alt="Join Astro Career"
              width={400}
              height={400}
              className="rounded-3xl shadow-lg object-contain"
              priority
            />
          </div>
          {/* Right: Content */}
          <div className="flex-1">
            <h1 className={`font-extrabold lg:text-6xl text-3xl mb-8 text-[#2B0B3A] ${integralCF.className}`}>
              ক্যারিয়ার গড়ুন অ্যাস্ট্রো এর সাথে
            </h1>
            {/* Who We're Looking For */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <FaUsers className="text-purple-600" /> আমরা যাদের খুঁজছি:
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-2">
                  <FaTools className="text-green-600 mt-1" />
                  ইলেকট্রনিক্স, মেকানিক্যাল রিপেয়ার, আইটি-তে শক্তিশালী টেকনিক্যাল দক্ষতা
                </li>
                <li className="flex items-start gap-2">
                  <FaLaptopCode className="text-blue-600 mt-1" />
                  দ্রুত ও দক্ষতার সাথে টেকনিক্যাল সমস্যা নির্ণয় ও সমাধানের সক্ষমতা
                </li>
                <li className="flex items-start gap-2">
                  <FaChalkboardTeacher className="text-orange-500 mt-1" />
                  প্রাসঙ্গিক ইন্ডাস্ট্রি বা যন্ত্রপাতি তে অভিজ্ঞতা (পছন্দনীয়, তবে আবশ্যক নয়)
                </li>
                <li className="flex items-start gap-2">
                  <FaUsers className="text-purple-600 mt-1" />
                  শক্তিশালী টিমওয়ার্ক ও যোগাযোগ দক্ষতা
                </li>
                <li className="flex items-start gap-2">
                  <FaRegHandshake className="text-pink-600 mt-1" />
                  চমৎকার সেবা ও নিরবচ্ছিন্ন শেখার প্রতি আগ্রহ
                </li>
              </ul>
            </div>
            {/* Why Join Us */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <FaRegCheckCircle className="text-purple-600" /> কেন আমাদের সাথে যোগ দেবেন?
              </h2>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start gap-2">
                  <FaMoneyBillWave className="text-green-600 mt-1" />
                  প্রতিযোগিতামূলক বেতন ও সুযোগ-সুবিধা
                </li>
                <li className="flex items-start gap-2">
                  <FaLaptopCode className="text-blue-600 mt-1" />
                  আধুনিক প্রযুক্তির সাথে কাজ করার সুযোগ
                </li>
                <li className="flex items-start gap-2">
                  <FaUsers className="text-purple-600 mt-1" />
                  সহায়ক ও উন্নয়নমুখী কর্মপরিবেশ
                </li>
                <li className="flex items-start gap-2">
                  <FaChalkboardTeacher className="text-orange-500 mt-1" />
                  হাতে-কলমে কাজের অভিজ্ঞতা ও ক্যারিয়ার ডেভেলপমেন্টের সুযোগ
                </li>
              </ul>
            </div>
            {/* Application Instructions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                <FaRegPaperPlane className="text-purple-600" /> আবেদন করার নিয়ম:
              </h2>
              <p className="text-gray-700 text-lg flex items-center gap-2">
                <FaRegPaperPlane className="text-blue-500" />
                আমাদের অনলাইন ফর্ম পূরণ করে আবেদন জমা দিন
              </p>
            </div>
            {/* CTA */}
            <Link href="/Career" passHref>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-2xl font-bold py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-3">
                আবেদন করতে এখানে ক্লিক করুন <FaRegPaperPlane className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HireUs;
