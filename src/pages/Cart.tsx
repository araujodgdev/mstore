import React from 'react';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  return (
    <div>
      <h1 className="text-4xl font-light mb-8">Shopping Cart</h1>
      <div className="space-y-8">
        <div className="flex items-center space-x-4 p-4 bg-gray-50">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400"
            alt="Product"
            className="w-24 h-24 object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg">Minimal White T-Shirt</h3>
            <p className="text-gray-600">$29.99</p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="border p-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <button className="text-gray-500 hover:text-red-500">
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50">
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>$29.99</span>
        </div>
        <button className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;