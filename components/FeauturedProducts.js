import ProductCard from "./ProductCard";
import { integralCF } from "../styles/fonts";
import path from 'path';
import fs from 'fs';

// Server component fetching data directly in the component
export default async function FeaturedProducts() {
  // Fetch products from the public folder or a remote URL
  const filePath = path.join(process.cwd(), "public/data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(jsonData);

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
