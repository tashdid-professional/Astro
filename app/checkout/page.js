"use client";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const CheckoutPage = () => {
  
const router = useRouter();
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
  
    // Access values from the form state
    const { name, email, phone, address } = form;
  
    const orderData = {
      name,
      email,
      phone,
      address,
      total: totalAmount,  // Use the computed totalAmount here
      items: cart.map(item => ({
        name: item.name,
        productId: parseInt(item.id), // Convert to integer
        quantity: item.quantity,
        price: item.price,
      })),
    };
  
    // Submit order data
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });
  
    if (res.ok) {
      // Get the order ID (you may need to parse this depending on the API response)
      const responseData = await res.json();
      const orderId = responseData.orderId;  // Assuming the API response contains the orderId
  
      // Send confirmation email with all necessary details
      await fetch("/api/send-confirmation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          name: form.name,
          phone: form.phone,
          address: form.address,
          total: totalAmount,
          orderId,
          items: orderData.items,
        }),
      });
      router.push("/thank-you"); // Show thank you page
    } else {
      alert("Something went wrong");
    }
  };
  
  
  
  
  

  if (cart.length === 0) {
    return (
      <div className="text-center text-black h-screen">
        <h2 className="text-2xl pt-20">Your Cart is Empty</h2>
        <Link href={"/About/Products"}>
          <h1 className="text-blue-600 font-thin">Back to Shopping</h1>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-black">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <ul className="mb-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between border-b py-2">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-4">
        Total: <span className="text-green-600">${totalAmount}</span>
      </h3>

      <form onSubmit={handleOrderSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
