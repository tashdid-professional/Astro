

import React from "react";
import { integralCF } from "../styles/fonts";

export default function MissionVisionValues() {
  return (
    <div className="w-full lg:px-[7%] py-10 lg:pb-26">
      {/* Mission Section */}
      <section className="mb-8">
        <h2 className={`text-4xl font-bold ${integralCF.className} mb-4 `}>🚀 Our Mission</h2>
        <p className="text-lg ">
          At <strong>Astro</strong>, our mission is to provide <strong>top-quality IT solutions, electronics repair, and security system installations</strong> with reliability and efficiency. We strive to empower individuals and businesses by offering <strong>fast, professional, and affordable</strong> services, ensuring seamless technology support and uninterrupted operations.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-8">
        <h2 className={`text-4xl font-bold ${integralCF.className} mb-4 `}>🌍 Our Vision</h2>
        <p className="text-lg ">
          Our vision is to be a <strong>trusted leader in IT services and technology solutions</strong>, known for our <strong>innovation, expertise, and customer satisfaction</strong>. We aim to continuously evolve with the latest advancements, providing cutting-edge <strong>repair, security, and IT infrastructure solutions</strong> to help businesses and individuals thrive in a digital world.
        </p>
      </section>

      {/* Values Section */}
      <section>
        <h2 className={`text-4xl font-bold ${integralCF.className} mb-4 `}>💡 Our Core Values</h2>
        <ul className="list-disc pl-5 text-lg  space-y-2">
          <li><strong>Customer Satisfaction</strong> – We put our customers first, ensuring quality service and long-lasting solutions.</li>
          <li><strong>Integrity &amp; Trust</strong> – Honesty and transparency are at the core of everything we do.</li>
          <li><strong>Innovation &amp; Excellence</strong> – We stay ahead by adopting the latest technology and best practices.</li>
          <li><strong>Reliability &amp; Commitment</strong> – We deliver timely and dependable services with the highest standards.</li>
          <li><strong>Teamwork &amp; Growth</strong> – We believe in collaboration, continuous learning, and improvement.</li>
        </ul>
      </section>
    </div>
  );
}
