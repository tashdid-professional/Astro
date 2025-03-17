import React from "react";
import Image from "next/image";
import { integralCF } from "../../styles/fonts";
import CarouselBarishal from "../../components/CarouselBarishal";

const page = () => {
  return (
    <div className="px-[5%] my-20 text-black container mx-auto ">
      <h1 className={` ${integralCF.className} text-5xl font-bold my-6`}>
        Astro Barishal Branch
      </h1>
      <CarouselBarishal />
      <h1 className="text-3xl font-bold mt-6">Visit us today :</h1>
      <p className="text-xl">
        📧 <strong>Adress : </strong>
        Sahera Tropical Center, 218, New Elephant Road, Dhaka, Bangladesh
      </p>
      <div className="mt-8">
        <iframe
          className="w-full h-64 rounded-lg border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.225948380159!2d90.38657127511475!3d23.73932077867791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b94ea98c1ab1%3A0x85b8ebef67fdc42b!2sSahera%20Tropical%20Centre%20Shopping%20Mall!5e0!3m2!1sen!2sbd!4v1742215122228!5m2!1sen!2sbd"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
