import React from "react";
import Image from "next/image";
import { integralCF } from "../styles/fonts";


const Services = () => {
  return (
    <div className="px-[7%] lg:py-20 py-10 my-20 bg-[#2B0B3A]">
      <div className=" text-black flex lg:flex-row flex-col gap-y-5  items-center  ">
        <div
          className={`lg:text-7xl lg:w-[40%]  text-bold text-2xl lg:block flex gap-1  lg:mb-0 mb-6 ${integralCF.className} `}
        >
          <span className="text-white">WHAT</span> <br />
          <span className="text-white">WE</span> <br />
          <span className="text-white">PROVIDE</span>
        </div>
        <div className="flex flex-row lg:w-[60%]  gap-4 text-white justify-center">
          {/* Repairing Card */}
          <div className="lg:min-w-[250px] border-4  border-white rounded-xl lg:p-6 p-3 hover:-translate-y-5 duration-500 flex flex-col items-center">
            <div className="w-8 h-10 lg:w-52 lg:h-60 relative">
              <Image
                src="/images/Repairing.png"
                alt="repairing"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-bold my-4 lg:text-2xl text-xs">Repairing</h1>
          </div>

          {/* Installation Card */}
          <div className="lg:min-w-[250px] border-4 lg:-translate-y-7 border-white rounded-xl lg:p-6 p-3 hover:-translate-y-12 duration-500 flex flex-col items-center">
            <div className="w-8 h-10 lg:w-52 lg:h-60 relative">
              <Image
                src="/images/Installation.png"
                alt="installation"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-bold my-4 lg:text-2xl text-xs">Installation</h1>
          </div>

          {/* IT Solutions Card */}
          <div className="lg:min-w-[250px] border-4  border-white rounded-xl lg:p-6 p-3 hover:-translate-y-5 duration-500 flex flex-col items-center">
            <div className="w-8 h-10 lg:w-52 lg:h-60 relative">
              <Image
                src="/images/Solution.png"
                alt="IT solutions"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-bold my-4 lg:text-2xl text-xs">IT Solutions</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
