"use client"
import { useCart } from "../context/CartContext";

const CartDebugger = () => {
  const { cart } = useCart();

  return (
    <div className="p-4 mt-4 bg-gray-100 rounded-md text-black">
      <h2 className="font-bold mb-2">🧪 Cart Debug</h2>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};
export default CartDebugger;
