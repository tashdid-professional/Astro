import React from "react";
import Image from "next/image";
import { integralCF } from "../styles/fonts";

const Services = () => {
  return (
    <div className="px-[7%] my-20">
      <div className=" text-black lg:flex space-x-5  lg:justify-between items-center ">
        <div className={`lg:text-7xl text-bold text-5xl lg:mb-0 mb-6 ${integralCF.className} `}>
          <span className="inline-block bg-gradient-to-r from-[#390067] from-10% to-black text-transparent bg-clip-text">
            WHAT
          </span>{" "}
          <br />
          <span className="inline-block bg-gradient-to-r from-[#390067] from-10% to-black text-transparent bg-clip-text">
            WE
          </span>{" "}
          <br />
          <span className="inline-block bg-gradient-to-r from-[#390067] from-10% to-black text-transparent bg-clip-text">
            PROVIDE
          </span>
        </div>
        <div className="lg:flex lg:space-x-5 text-[#390067] space-y-3">
          <div className="border-4 border-black rounded-xl p-6 lg:hover:-translate-y-6 duration-500 flex flex-col items-center ">
            <Image
              src="/images/Repairing.png"
              width={200}
              height={300}
              alt="repairing"

            ></Image>
            <h1 className="font-bold my-4  text-3xl">Repairing</h1>
          </div>
          <div className="border-4 border-black rounded-xl p-6 lg:hover:-translate-y-14 lg:-translate-y-8 duration-500 flex flex-col items-center">
            <Image
              src="/images/Installation.png"
              width={200}
              height={300}
              alt="repairing"
            ></Image>
            <h1 className="font-bold my-4  text-3xl">
              {" "}
              Installation
            </h1>
          </div>
          <div className="flex flex-col items-center border-4 border-black rounded-xl p-6 lg:hover:-translate-y-6 duration-500">
            <Image
              src="/images/Solution.png"
              width={200}
              height={300}
              alt="repairing"
            ></Image>
            <h1 className="font-bold my-4  text-3xl">
              IT Solutions
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
