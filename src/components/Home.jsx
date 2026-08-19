import React from 'react';

export default function Home() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Shop Image */}
      <img 
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
        alt="Shop Interior" 
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white p-6">
        <h1 className="text-6xl font-extrabold mb-6 animate-fade-in">Welcome to MyShop</h1>
        <p className="text-xl mb-8">Discover the latest trends in women's fashion.</p>
        <a 
          href="/products" 
          className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-110 shadow-lg"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}