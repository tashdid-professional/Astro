// File: app/admin/orders/page.js

import prisma from "../../../lib/prisma";
import Link from 'next/link';

export const metadata = {
  title: 'Admin - Orders',
};

export default async function OrdersPage() {
  // Fetch all orders sorted by creation date desc
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="p-6 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found.</p>
      ) : (
        <ul className="space-y-6">
          {orders.map((order) => (
            <li key={order.id} className="border rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Order: {order.id}</h2>
                <span className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p><strong>Name:</strong> {order.name}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Phone:</strong> {order.phone}</p>
                  <p><strong>Address:</strong> {order.address}</p>
                </div>
                <div>
                  <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Items:</p>
                <ul className="list-disc list-inside space-y-1">
                  {order.items.map((item, idx) => {
                    // Determine display name: item.name from JSON, or fallback to item.id
                    const displayName = item.name ?? item.id ?? `Product ID: ${item.productId}`;
                    return (
                      <li key={idx} className="text-gray-700">
                       ID  : {item.productId} : {item.name} — Qty: {item.quantity} @ ${item.price.toFixed(2)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
