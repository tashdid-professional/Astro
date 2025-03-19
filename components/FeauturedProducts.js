"use client";

import React, { useEffect, useState } from "react";
import { integralCF } from "../styles/fonts";
import ProductCard from "./ProductCard";

// Fetch products from the public folder
function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/data.json"); // Fetch the JSON from the public folder
      if (!response.ok) {
        console.error("Failed to fetch products.");
        return [];
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-[7%] mt-20">
      <h1
        className={`font-bold text-5xl ${integralCF.className} my-12 inline-block bg-gradient-to-r from-[#390067] to-black to-70% text-transparent bg-clip-text`}
      >
        Featured Products
      </h1>
      <div className="grid lg:grid-cols-4 gap-6">
        {products
          .filter((product) => product.featured === true) // Filter only featured products
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
