"use client"; // This directive makes the component a client-side component

import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductFilter = ({ products }) => {
  // Set up state for the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Define categories for filtering
  const categories = [
    "All",
    "Electronics",
    "Clothing",
    "Accessories",
    "Wearables",
  ];

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="lg:pl-20   lg:flex space-x-20 ">     {/* Category Filter Buttons */}
      <div className="flex lg:flex-col flex-wrap gap-3 mb-6  ">
        <h1 className="text-xl mb-10 font-bold hidden lg:block">Product Category</h1>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)} // Update selected category
            className={`lg:text-lg   ${
              selectedCategory === category
                ? "text-red-600 "
                : "text-gray-700"
            }`}
          >
            {selectedCategory == category? category+'     >>': category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-8 gap-3  ">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
