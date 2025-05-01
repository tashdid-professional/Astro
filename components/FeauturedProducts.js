import ProductCard from "../components/ProductCard";
import { integralCF } from "../styles/fonts";
import { getProducts } from "../lib/getProduct"


// Server component fetching data directly in the component
export default async function FeaturedProducts() {
  // Fetch products from the public folder or a remote URL
    const products = await getProducts();
  

  return (
    <div className="px-[5%] lg:mt-20">
      <h1
        className={`font-bold text-5xl ${integralCF.className} my-12 inline-block bg-gradient-to-r from-[#390067] to-black to-70% text-transparent bg-clip-text`}
      >
        Featured Products
      </h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {products
          .slice(0,4) // Filter only featured products
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
