import React from "react";
import { Poppins } from "next/font/google";
import { integralCF } from "../styles/fonts";
import Image from "next/image";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" });
import { Space_Grotesk } from "next/font/google";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-space-grotesk", // optional: for Tailwind
  display: "swap",
});

const AboutUs = () => {
  return (
    <div>
      {/* container */}
      <div className="lg:flex container items-center mx-auto my-12 lg:px-[5%] space-x-4 px-4">
        <div className="lg:w-1/2 mx-auto lg:block hidden">
          <Image
            src="/images/about.png"
            width={500}
            height={500}
            className=" rounded-4xl px-5 "
            alt="about-us"
          ></Image>
        </div>
        <div className=" text-lg lg:py-7 lg:flex flex-col gap-y-10 lg:w-1/2 text-black">
          <h1
            className={`${integralCF.className} lg:text-6xl text-5xl mb-7 inline-block bg-gradient-to-r from-[#390067] to-black to-50% text-transparent bg-clip-text`}
          >
            About US 
          </h1>
          

          <p className={`bengali-text text-sm lg:text-2xl font-semibold `}>
            {" "}
            অ্যাস্ট্রো — আপনার নির্ভরযোগ্য প্রযুক্তি সঙ্গী। আমরা শুধুই সার্ভিস
            দিই না, আমরা দিই প্রযুক্তির পূর্ণাঙ্গ সমাধান। ল্যাপটপ, মোবাইল,
            প্রিন্টার কিংবা সিসিটিভি — যেকোনো ডিভাইসের জটিল সমস্যা আমাদের দক্ষ
            টেকনিশিয়ানরা দ্রুত ও নিখুঁতভাবে সমাধান করে থাকেন। আধুনিক প্রযুক্তি
            এবং অভিজ্ঞতার মিশেলে আমরা আপনার ডিভাইসকে ফিরিয়ে দিই নতুনের মতো
            কর্মক্ষমতা। কিন্তু অ্যাস্ট্রো এখানেই থেমে নেই। আমরা আপনার দৈনন্দিন
            প্রযুক্তি চাহিদা পূরণে নিয়ে এসেছি বিশ্বস্ত ব্র্যান্ডের ব্যাটারি,
            চার্জার এবং অন্যান্য আইটি অ্যাকসেসরিজের বিস্তৃত সংগ্রহ — সবকিছু এক
            ছাদের নিচে। আপনার ব্যবসা কিংবা ব্যক্তিগত জীবন — প্রযুক্তি ছাড়া আজ
            অসম্ভব। তাই আমরা নিশ্চিত করি, আপনি পান দ্রুত, মানসম্পন্ন ও সাশ্রয়ী
            সেবা। অ্যাস্ট্রো মানেই — ভরসার নাম, প্রযুক্তির নির্ভরতা। আজই আমাদের
            সঙ্গে যুক্ত হোন, প্রযুক্তির প্রতিটি ধাপে থাকুক অ্যাস্ট্রোর সঙ্গে
            সহজ, স্মার্ট ও স্বচ্ছ সমাধান।
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
