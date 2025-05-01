import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = await prisma.product.findMany();

return (
  <div>
    <h2 className="text-xl font-semibold">All Products</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {products.map((product) => (
        <li key={product.id} className="border p-4 rounded-md shadow">
          <p><strong>{product.name}</strong></p>
          <p>${product.price}</p>
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
          {/* Add edit & delete buttons */}
        </li>
      ))}
    </ul>
  </div>
);
