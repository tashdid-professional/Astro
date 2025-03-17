"use client";

import { useState } from "react";
import { sendEmailContact } from "../actions/sendEmailContact";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const result = await sendEmailContact(formData);

    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-22 px-6 md:px-12 lg:px-24 ">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Have questions? Reach out and we’ll get back to you shortly.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {status && <p className="text-center text-red-600">{status}</p>}

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            rows={4}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-8 text-center">
          <p className="text-gray-700 dark:text-gray-300">
            📞 <strong>Phone:</strong> +123 456 7890
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            📧 <strong>Email:</strong> contact@astroservices.com
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            📧 <strong>Adress: </strong> 
            Sahera Tropical Center, 218, New Elephant Road, Dhaka, Bangladesh
          </p>
        </div>

        {/* Google Maps Embed */}
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
    </section>
  );
}
