import path from 'path';
import fs from 'fs';
import ProductFilter from '../../components/ProductFilter';

async function fetchProducts() {
  const filePath = path.join(process.cwd(), 'app/products/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
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
