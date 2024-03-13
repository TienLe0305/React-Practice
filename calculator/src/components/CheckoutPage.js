import React from "react";
import { ShoppingCart, ArrowLeft } from "lucide-react";

const cartItems = [
  { id: 1, name: "Product 1", price: 10.0, quantity: 2 },
  { id: 2, name: "Product 2", price: 15.0, quantity: 1 },
  { id: 3, name: "Product 3", price: 20.0, quantity: 3 },
];

const CheckoutPage = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-semibold mb-3">Cart Summary</h2>
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>{`$${item.price.toFixed(2)} x ${item.quantity}`}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t pt-2 mt-2">
          <span className="font-semibold">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded">
          <ArrowLeft className="mr-2" size={20} /> Continue Shopping
        </button>
        <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Checkout <ShoppingCart className="ml-2" size={20} />
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
