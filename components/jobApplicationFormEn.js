"use client";

import { useState } from "react";
import { sendEmail } from "../app/actions/sendEmail";
import { integralCF } from "../styles/fonts";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    experience: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        experience: "",
      });
    } else {
      setStatus("Failed to send email.");
    }
  };

  return (
    <div>
      <div className="text-black m-16">
        <h1 className={`font-bold text-5xl ${integralCF.className}  my-12 inline-block bg-gradient-to-r from-[#390067] to-black to-80% text-transparent bg-clip-text`}>Join Our Team as an Engineer ! </h1>
        <br></br>
        Are you a skilled and passionate engineer looking for an exciting
        opportunity?<br></br> At Astro, we are searching for dedicated
        professionals to join our team and help us deliver top-quality service
        and innovative solutions to our customers.<br></br>
        <br></br>
        <br></br>{" "}
        <h1 className="text-2xl font-bold">What We’re Looking For:</h1>
        <br></br> ✔️ Strong technical expertise in electronics, mechanical
        repairs, IT <br></br>✔️ Ability to diagnose and solve technical issues
        efficiently <br></br>✔️ Experience in [mention relevant industry or
        equipment] (preferred but not required)<br></br> ✔️ Strong teamwork and
        communication skills<br></br> ✔️ Passion for delivering excellent
        service and continuous learning <br></br> <br></br>
        <br></br>
        <h1 className="text-2xl font-bold">Why Join Us?</h1> <br></br>✅
        Competitive salary and benefits <br></br>✅ Opportunity to work with
        cutting-edge technology <br></br>✅ Supportive and growth-oriented work
        environment <br></br>✅ Hands-on experience and career development
        opportunities <br></br>
        <br></br>
        <h1 className="text-lg">
          How to Apply: 📩 Submit your application by filling out our online
          form{" "}
        </h1>
      </div>

      <div className="max-w-lg mx-16 bg-gray-100 p-6 shadow-2xl rounded-md text-black my-20 border ">
        <h2 className="text-2xl font-bold mb-4">Submit Your Details</h2>
        {status && <p className="mb-4 text-red-600">{status}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
} 
