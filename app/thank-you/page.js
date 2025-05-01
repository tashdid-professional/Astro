"use client";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4 text-black">
      <h1 className="text-4xl font-bold mb-4 text-green-600">🎉 Thank You!</h1>
      <p className="text-lg mb-6">Your order has been placed successfully.</p>
      <p className="text-gray-600 mb-8">
        We&apos;ll get back to you with a confirmation email shortly.
      </p>
      <Link
        href="/About/Products"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYouPage;
