"use client";

import { useState } from "react";
import { sendEmail } from "../app/actions/sendEmail";

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
    setStatus("পাঠানো হচ্ছে...");

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus("ইমেইল সফলভাবে পাঠানো হয়েছে!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        address: "",
        experience: "",
      });
    } else {
      setStatus("ইমেইল পাঠাতে ব্যর্থ হয়েছে।");
    }
  };

  return (
    <div>
      <div className="text-black lg:m-16 p-5">
        <h1 className="text-5xl font-extrabold">
          একজন ইঞ্জিনিয়ার হিসেবে আমাদের দলে যোগ দিন!
        </h1>
        <br />
        আপনি কি একজন দক্ষ এবং উদ্যমী ইঞ্জিনিয়ার যিনি একটি চমৎকার সুযোগের সন্ধান করছেন?<br />
        Astro-তে, আমরা আমাদের গ্রাহকদের সেরা পরিষেবা এবং উদ্ভাবনী সমাধান দিতে প্রতিশ্রুতিবদ্ধ এবং আমাদের টিমে আপনাকে স্বাগত জানাই।<br />
        <br />
        <h1 className="text-2xl font-bold">আমরা কী খুঁজছি:</h1>
        <br />
        ✔️ ইলেকট্রনিক্স, মেকানিক্যাল মেরামত এবং আইটি-তে শক্তিশালী প্রযুক্তিগত দক্ষতা<br />
        ✔️ প্রযুক্তিগত সমস্যাগুলি দ্রুত সনাক্ত এবং সমাধান করার ক্ষমতা<br />
        ✔️ [সংশ্লিষ্ট শিল্প বা সরঞ্জামের অভিজ্ঞতা] (পছন্দনীয় তবে আবশ্যক নয়)<br />
        ✔️ দলগত দক্ষতা এবং যোগাযোগের ক্ষমতা<br />
        ✔️ চমৎকার পরিষেবা এবং ক্রমাগত শেখার প্রতি আগ্রহ<br />
        <br />
        <h1 className="text-2xl font-bold">কেন আমাদের সাথে যোগ দেবেন?</h1>
        <br />
        ✅ প্রতিযোগিতামূলক বেতন এবং সুবিধা<br />
        ✅ আধুনিক প্রযুক্তির সাথে কাজের সুযোগ<br />
        ✅ সহায়ক এবং উন্নয়নমুখী কর্মপরিবেশ<br />
        ✅ বাস্তব অভিজ্ঞতা এবং ক্যারিয়ার উন্নয়নের সুযোগ<br />
        <br />
        <h1 className="text-lg">
          কিভাবে আবেদন করবেন: 📩 আমাদের অনলাইন ফর্মটি পূরণ করে আপনার আবেদন জমা দিন
        </h1>
      </div>

      <div className="max-w-lg lg:mx-16 mx-5 bg-gray-100 p-6 shadow-2xl rounded-md text-black my-20 border">
        <h2 className="text-2xl font-bold mb-4">আপনার বিবরণ জমা দিন</h2>
        {status && <p className="mb-4 text-red-600">{status}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="নাম"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="ইমেইল"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="ফোন নম্বর"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="বয়স"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="ঠিকানা"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="experience"
            placeholder="অভিজ্ঞতা"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            জমা দিন
          </button>
        </form>
      </div>
    </div>
  );
}
