import React from 'react';

const products = [
  {
    id: 1,
    name: 'Minimal White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Classic Black Pants',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Beige Sweater',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800',
  },
  // Add more products as needed
];

const Shop = () => {
  return (
    <div>
      <h1 className="text-4xl font-light mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="aspect-square overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-4 w-full bg-black text-white py-2 hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;