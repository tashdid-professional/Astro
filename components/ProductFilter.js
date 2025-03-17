'use client'; // This directive makes the component a client-side component

import { useState } from 'react';
import ProductCard from './ProductCard';

const ProductFilter = ({ products }) => {
  // Set up state for the selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Define categories for filtering
  const categories = ['All', 'Electronics', 'Clothing','Accessories','Wearables'];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className='px-20'>
      {/* Category Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)} // Update selected category
            className={`text-lg font-semibold ${
              selectedCategory === category
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-8">
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
