import React from "react";
import path from "path";
import fs from "fs";
import ProductCard from "./ProductCard";
import { integralCF } from "../styles/fonts";
async function fetchProducts() {
  const filePath = path.join(process.cwd(), "app/products/data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(jsonData);
}

export default async function FeauturedProducts() {
  const products = await fetchProducts(); // Fetch products from JSON file
  return (
    <div className="px-[7%] mt-20">
      <h1
        className={`font-bold text-5xl ${integralCF.className}  my-12 inline-block bg-gradient-to-r from-[#390067] to-black to-70% text-transparent bg-clip-text`}
      >
        Feautured Products
      </h1>
      <div className="grid lg:grid-cols-4  gap-6">
        {products.filter(product => (product.featured == true))
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
