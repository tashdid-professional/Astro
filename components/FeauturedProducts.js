import React from "react";
import ProductCard from "../components/ProductCard";
import { integralCF } from "../styles/fonts";
import { getProducts } from "../lib/getProduct";
import FeaturedProductsClient from "./FeaturedProductsClient";

// Server component fetching data directly in the component
export default async function FeaturedProducts() {
  // Fetch products from the public folder or a remote URL
  const products = await getProducts();

  return (
    <FeaturedProductsClient products={products.slice(0, 4)} />
  );
}
