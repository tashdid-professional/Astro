"use client";
import Link from "next/link";
import { useCart } from "../../../../context/CartContext";
import { useState } from "react";

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <h1 className="text-2xl text-red-500">Product not found</h1>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="p-6 lg:flex w-full  gap-10 mb-28">
      <div className="lg:w-1/2 lg:px-7 ">
        <Link href="/About/Products" className="text-blue-500 hover:underline my-4 block">
          Back to products
        </Link>
        <img
          src={product.image}
          alt={product.title}
          className="lg:w-[80%] lg:h-80 h-60 object-cover rounded-lg mb-4 "
        />
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-4xl font-extrabold lg:mb-10">{product.title}</h1>
        <div className="flex">
          <p className="text-4xl rounded-xl font-semibold mt-2 bg-[#F3F4F6] p-4">
            {product.price} <sup className="text-xl">bdt</sup>
          </p>
        </div>
        <p className="lg:text-lg lg:my-7 my-3">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-3 py-1 rounded "
        >
          Add to Cart
        </button>
        {showPopup && <div className="text-green-600 mt-4">Added to cart!</div>}
      </div>
    </div>
  );
}
