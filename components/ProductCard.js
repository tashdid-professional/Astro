"use client";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useState } from "react";
import {ShoppingCart} from 'lucide-react'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
    // console.log("Product added to cart:", product);  // Debugging log
  };
  return (
    <div className="relative">
      <Link href={`/About/Products/${product.id}`} className="block">
        <div className="bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl transition-transform transform text-black cursor-pointer flex flex-col">
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full lg:h-52 h-32 object-cover rounded-t-lg hover:scale-105 duration-200"
            />
          </div>

          <div className="lg:px-4 px-2  lg:my-6 my-3">
            <h2 className="lg:text-xl font-bold">{product.name}</h2>
            {/* <p>{product.description}</p> */}
            <div className="flex justify-between space-x-4 my-2">
              <p className="text-green-600 font-semibold lg:mt-2 text-xs lg:text-base">
                Price: {product.price} tk
              </p>
              <button
                onClick={handleAddToCart}
                className=" bg-[#360061] text-white px-3 py-1 rounded text-xs lg:text-base lg:flex hidden  gap-3"
              >
                Add to Cart <ShoppingCart size={20}/>
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className=" bg-[#360061] justify-center text-white px-3 py-1 rounded text-xs lg:text-base lg:hidden flex gap-2 w-full"
            >
              Add to Cart <ShoppingCart size={15}/>
            </button>
          </div>
        </div>
      </Link>

      {showPopup && (
        <div className="absolute bottom-20 right-0 bg-black opacity-80 text-white px-3 py-1 rounded shadow-lg">
          ✅ Item added to cart!
        </div>
      )}
    </div>
  );
};
export default ProductCard;
