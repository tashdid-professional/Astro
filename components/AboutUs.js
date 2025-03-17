import React from "react";
import { Poppins } from "next/font/google";
import { integralCF } from "../styles/fonts";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" });

const AboutUs = () => {
  return (
    <div>
      {/* container */}
      <div className="flex container items-center mx-auto my-12 lg:px-[5%] ">
        <div className="lg:w-1/2">
          <img
            src="/images/astro-fran.jpeg"
            className=" rounded-4xl w-[80%] "
          ></img>
        </div>
        <div className=" text-lg py-7 lg:flex flex-col gap-y-10 lg:w-1/2 text-black">
          <h1 className={`${integralCF.className} text-6xl inline-block bg-gradient-to-r from-[#390067] to-black to-50% text-transparent bg-clip-text`}>About Us</h1>

          <p className={poppinsFont.className}>
            {" "}
            Astro is a leading provider of comprehensive technology solutions,
            offering both expert servicing and a wide range of IT products to
            meet all your tech needs. With years of experience, we specialize in
            providing top-tier repair and maintenance services for laptops,
            mobiles, printers, and CCTV systems. Our skilled technicians are
            equipped with the latest tools and knowledge to ensure your devices
            are serviced with the highest standards, helping them run
            efficiently and effectively for longer. In addition to our expert
            repair services, Astro is your one-stop shop for a variety of IT
            products. We offer a broad selection of essential tech accessories,
            including batteries, chargers, and other IT equipment, all from
            trusted brands to ensure quality and reliability. Whether you're
            looking to replace a faulty charger, upgrade your battery, or find
            the latest IT gadgets, we have you covered. At Astro, we understand
            how crucial your devices are to your everyday life and business
            operations. That’s why we prioritize customer satisfaction, ensuring
            fast, reliable, and affordable services and products that keep you
            connected and productive. Our goal is to provide seamless technology
            solutions that cater to both individual and business needs, making
            us the trusted partner for all your tech requirements. Whether you
            need quick repairs or high-quality IT products, Astro is here to
            support you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
