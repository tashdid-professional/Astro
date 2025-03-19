import fs from "fs";
import path from "path";

export default async function ProductDetail({ params }) {
  const filePath = path.join(process.cwd(), "app", "products", "data.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(fileData);

  const { id } = params;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h1 className="text-2xl text-red-500">Product not found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10">{product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold mt-2">Price: ${product.price}</p>
    </div>
  );
}
