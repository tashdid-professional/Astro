"use client";
import React from 'react'
import { useState } from "react"; // ✅ Correct import for Next.js`
import JobApplicationFormEn from '../../components/jobApplicationFormEn'
import JobApplicationFormBn from '../../components/jobApplicationFormBn'

const page = () => {
  const [selectedComponent, setSelectedComponent] = useState<"A" | "B">("A");
  return (
    <div className='container mx-auto'>
    <div className="flex gap-2 justify-end m-8">
    <button
      onClick={() => setSelectedComponent("A")}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      English
    </button>
    <button
      onClick={() => setSelectedComponent("B")}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Bangla
    </button>
  </div>

  <div className="mt-4">
    {selectedComponent === "A" ? <JobApplicationFormEn /> : <JobApplicationFormBn/>}
  </div>
  </div>
    
  )
}

export default page
