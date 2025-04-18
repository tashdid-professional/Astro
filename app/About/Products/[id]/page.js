import Link from "next/link";
import path from "path";
import fs from "fs";

export default async function ProductDetail({ params }) {
  // Fetch data from the public folder during server-side rendering
  const filePath = path.join(process.cwd(), "public/data.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(jsonData);

  // Find the product by ID
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <h1 className="text-2xl text-red-500">Product not found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-10">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold mt-2">Price: ${product.price}</p>

      <Link href="/About/Products" className="text-blue-500 hover:underline mt-4 block">
        Back to products
      </Link>
    </div>
  );
}
