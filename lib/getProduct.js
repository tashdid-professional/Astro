// lib/getProducts.ts
import { client } from "./contentful";

export async function getProducts() {
  const res = await client.getEntries({ content_type: "product" });
  return res.items.map((item) => ({
    id: item.sys.id,
    name: item.fields.name,
    price: item.fields.price,
    image: item.fields.image.fields.file.url,
    category: item.fields.category,
    description: item.fields.description, // optional
    title: item.fields.name, // fallback for title
  }));
}
