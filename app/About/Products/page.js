import ProductFilter from '../../../components/ProductFilter';
import { getProducts } from "../../../lib/getProduct"; // use alias if you have

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto bg-white pt-12 mb-20">
      <ProductFilter products={products} />
    </div>
  );
}
