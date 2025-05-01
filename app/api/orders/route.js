import prisma from "../../../lib/prisma";

export async function POST(req) {
  const { name, email, phone, address, total, items } = await req.json();

  if (!name || !email || !phone || !address || !total || !Array.isArray(items)) {
    return new Response(
      JSON.stringify({ error: "Missing or invalid fields" }),
      { status: 400 }
    );
  }

  try {
    console.log("Received order:", { name, email, phone, address, total, items });

    const order = await prisma.order.create({
      data: {
        name,
        email,
        phone,
        address,
        total,
        items,       // store the cart array directly
      },
    });

    console.log("Order created:", order);
    return new Response(JSON.stringify({ message: "Order placed", order,orderId: order.id  }), { status: 201 });
  } catch (e) {
    console.error("Error placing order:", e);
    return new Response(
      JSON.stringify({ error: "Failed to place order", details: e.message }),
      { status: 500 }
    );
  }
}
