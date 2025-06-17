import React from "react";
import Image from "next/image";
import { integralCF } from "../styles/fonts";


const Services = () => {
  return (
    <div className="px-[7%] lg:py-20 py-10 my-20 bg-[#2B0B3A]">
      <div className=" text-black lg:flex space-x-5  lg:justify-between items-center ">
        <div
          className={`lg:text-7xl text-bold text-3xl lg:block flex gap-1 lg:mb-0 mb-6 ${integralCF.className} `}
        >
          <span className="text-white">WHAT</span> <br />
          <span className="text-white">WE</span> <br />
          <span className="text-white">PROVIDE</span>
        </div>
        <div className="flex flex-row flex-wrap overflow-x-auto gap-4 text-white justify-center">
          {/* Repairing Card */}
          <div className="lg:min-w-[250px] border-4 border-white rounded-xl p-6 hover:-translate-y-3 duration-500 flex flex-col items-center shrink-0">
            <div className="w-16 h-20 lg:w-52 lg:h-72 relative">
              <Image
                src="/images/Repairing.png"
                alt="repairing"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-bold my-4 lg:text-2xl">Repairing</h1>
          </div>

          {/* Installation Card */}
          <div className="lg:min-w-[250px] border-4 border-white rounded-xl p-6 hover:-translate-y-3 duration-500 flex flex-col items-center shrink-0">
            <div className="w-16 h-20 lg:w-52 lg:h-72 relative">
              <Image
                src="/images/Installation.png"
                alt="installation"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-bold my-4 lg:text-2xl">Installation</h1>
          </div>

          {/* IT Solutions Card */}
          <div className="lg:min-w-[250px] border-4 border-white rounded-xl p-6 hover:-translate-y-3 duration-500 flex flex-col items-center shrink-0">
            <div className="w-16 h-20 lg:w-52 lg:h-72 relative">
              <Image
                src="/images/Solution.png"
                alt="IT solutions"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-bold my-4 lg:text-2xl">IT Solutions</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
