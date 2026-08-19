import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: "Floral Summer Dress", price: "$45", img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500" },
  { id: 2, name: "Silk Blouse", price: "$30", img: "https://images.unsplash.com/photo-1564257631407-288f9f51956e?auto=format&fit=crop&w=500" },
  { id: 3, name: "Casual Denim Jacket", price: "$65", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500" },
];

export default function Products() {
  return (
    <div className="py-20 px-8 bg-pink-50 min-h-screen">
      <h2 className="text-4xl font-bold text-center text-pink-900 mb-12">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 group">
            <div className="relative overflow-hidden rounded-xl">
              <img src={item.img} alt={item.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
            <p className="text-pink-600 font-bold mb-4">{item.price}</p>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-pink-100 text-pink-600 py-2 rounded-lg hover:bg-pink-200 transition-colors duration-300 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
              <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" /> Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}