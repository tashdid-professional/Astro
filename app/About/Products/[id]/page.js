import { getProducts } from "../../../../lib/getProduct";
import ProductDetailClient from "./ProductDetailClient";

export default async function ProductPage({ params }) {
  const products = await getProducts();
  const product = products.find((p) => p.id === params.id);

  return <ProductDetailClient product={product} />;
}
