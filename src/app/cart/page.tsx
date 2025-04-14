'use client';

import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/cart';

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-light mb-8">Shopping Cart</h1>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 bg-gray-50"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                className="border p-2"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 hover:text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 p-4 bg-gray-50"
      >
        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors"
        >
          Checkout
        </motion.button>
      </motion.div>
    </motion.div>
  );
}