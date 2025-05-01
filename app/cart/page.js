"use client";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, addToCart, decreaseQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center text-black h-screen">
        <h2 className="text-2xl pt-20">Your Cart is Empty</h2>
        <Link href={'/About/Products'}>
          <h1 className="text-blue-600 font-thin">Back to Shopping</h1>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 text-black lg:mx-44 mx-5 my-20 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="flex justify-between items-center my-4 border-b pb-4">
            <div className="lg:flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="bg-gray-300 px-2 py-1 rounded text-black"
              >
                -
              </button>
              <span className="w-8 text-center">{product.quantity}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-gray-300 px-2 py-1 rounded text-black"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={clearCart}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
        <Link href={'/checkout'}>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Checkout
        </button>
        </Link>
      </div>
      <div>
        <Link href={'/About/Products'}>
        <h1 className="text-blue-500 font-semibold mt-6">Back to Shopping</h1>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
