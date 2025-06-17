import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { integralCF } from "../styles/fonts";


function HireUs() {
  return (
    <div className='lg:px-20 px-6 mx-auto container'>
      <h1 className={`font-extrabold lg:text-7xl text-4xl text-center ${integralCF.className}  mb-12 text-[#2B0B3A]`}>আজই যুক্ত হোন আমাদের সাথে  </h1>
      <Image src={"/images/astro-repair.jpeg"} alt='astro-career' width={1300} height={600} className=''></Image>
      <Link href={"/Career"}>
      <h1 className='text-[#360061] font bold text-2xl underline my-6'>Visit here for further details</h1>
      </Link>
    </div>
  )
}

export default HireUs
