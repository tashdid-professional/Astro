import ProductFilter from '../../../components/ProductFilter';

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/data.json`);
  if (!res.ok) {
    throw new Error("Failed to load products");
  }
  return res.json();
}


export default async function ProductsPage() {
  const products = await fetchProducts(); // Fetch products from JSON file

  return (
    <div className="container mx-auto bg-white">
      {/* Pass the products to the client-side component */}
      <ProductFilter products={products} />
    </div>
  );
}
