<form action="/api/products" method="POST" className="mt-6 space-y-2">
  <input name="name" placeholder="Product Name" className="border p-2 w-full" required />
  <input name="price" type="number" placeholder="Price" className="border p-2 w-full" required />
  <input name="image" placeholder="Image URL" className="border p-2 w-full" required />
  <input name="category" placeholder="Category" className="border p-2 w-full" required />
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
</form>
