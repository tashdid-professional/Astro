import ProductFilter from '../../../components/ProductFilter';
import path from 'path';
import fs from 'fs';

export default async function ProductsPage() {
  // Fetch products from the public folder during server-side rendering
  const filePath = path.join(process.cwd(), 'public/data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(jsonData);

  return (
    <div className="container mx-auto bg-white pt-12">
      {/* Pass the products to the ProductFilter component */}
      <ProductFilter products={products} />
    </div>
  );
}
