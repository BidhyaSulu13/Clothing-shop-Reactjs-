import React from 'react';
import Navbar from './components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, ShoppingCart } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Categorized Products Data with real Unsplash image URLs
const categories = [
  {
    title: "Frocks & Dresses",
    items: [
      { id: 1, name: "Floral Summer Dress", price: "$45", img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500" },
      { id: 2, name: "Boho Maxi Frock", price: "$55", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500" },
      { id: 3, name: "Party Velvet Dress", price: "$75", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=500" },
      { id: 4, name: "Casual Beach Frock", price: "$38", img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fb1b?auto=format&fit=crop&w=500" },
      { id: 5, name: "Elegant Evening Dress", price: "$90", img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500" },
    ]
  },
  {
    title: "Shirts & Blouses",
    items: [
      { id: 6, name: "Silk Blouse", price: "$30", img: "https://images.unsplash.com/photo-1564257631407-288f9f51956e?auto=format&fit=crop&w=500" },
      { id: 7, name: "Classic White Shirt", price: "$28", img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=500" },
      { id: 8, name: "Ruffle Crop Top", price: "$25", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500" },
      { id: 9, name: "Satin Wrap Shirt", price: "$35", img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500" },
      { id: 10, name: "Puff Sleeve Top", price: "$32", img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=500" },
    ]
  },
  {
    title: "Pants & Denim",
    items: [
      { id: 11, name: "Casual Denim Jacket", price: "$65", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500" },
      { id: 12, name: "High-Waist Jeans", price: "$50", img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500" },
      { id: 13, name: "Tailored Trousers", price: "$48", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500" },
      { id: 14, name: "Cargo Streetwear Pants", price: "$55", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500" },
      { id: 15, name: "Comfy Lounge Joggers", price: "$40", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500" },
    ]
  },
  {
    title: "One-Piece Outfits",
    items: [
      { id: 16, name: "Chic Jumpsuit", price: "$70", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500" },
      { id: 17, name: "Denim Romper", price: "$45", img: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=500" },
      { id: 18, name: "Summer Playsuit", price: "$40", img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500" },
      { id: 19, name: "Sleek Black Bodysuit", price: "$35", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500" },
      { id: 20, name: "Evening Pantsuit", price: "$95", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500" },
    ]
  }
];

export default function App() {
  return (
    <div className="bg-pink-50 text-gray-800 font-sans scroll-smooth">
      <Navbar />

      {/* Page content */}
      <div className="pt-20 p-6">
        {/* Home Section */}
        <section
          id="home"
          className="h-screen flex items-center justify-center relative rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Shop Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Shop Interior" 
            className="absolute inset-0 w-full h-full object-cover brightness-50"
          />
          
          <div className="relative z-10 text-center text-white p-6 max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to MyShop</h1>
            <p className="text-lg mb-8 text-pink-100">Discover the latest trends in women's fashion with exclusive styles.</p>
            <a 
              href="#products" 
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-bold transition-all duration-300 transform hover:scale-110 shadow-lg inline-block"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Products Section with Category Sliders */}
        <section
          id="products"
          className="min-h-screen py-20 px-4 bg-white rounded-2xl shadow-lg mt-10"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-pink-900 mb-2">Explore Collections</h2>
            <p className="text-center text-gray-500 mb-16">Browse through our exclusive categories with smooth sliding</p>
            
            {categories.map((category, index) => (
              <div key={index} className="mb-16">
                <h3 className="text-2xl font-bold text-pink-800 mb-6 border-b border-pink-100 pb-2">
                  {category.title}
                </h3>

                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="pb-12"
                >
                  {category.items.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-4 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="relative overflow-hidden rounded-xl mb-4">
                          <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                          />
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h4>
                        <p className="text-pink-600 font-bold text-lg mb-4">{item.price}</p>
                        
                        <div className="flex gap-3">
                          <button className="flex-1 bg-white border border-pink-200 text-pink-600 py-2.5 rounded-xl hover:bg-pink-100 hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-sm">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="flex-1 bg-pink-500 text-white py-2.5 rounded-xl hover:bg-pink-600 hover:scale-105 transition-all duration-200 flex items-center justify-center shadow-md font-medium text-sm">
                            <ShoppingCart className="w-4 h-4 mr-1.5" /> Add
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-50 rounded-2xl shadow-lg mt-10"
        >
          <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 border border-pink-100">
            <h2 className="text-3xl font-bold text-center text-pink-900 mb-2">Get in Touch</h2>
            <p className="text-center text-gray-500 mb-8 text-sm">We'd love to hear from you!</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe" 
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com" 
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Write your message here..." 
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3.5 bg-pink-500 text-white font-semibold rounded-xl shadow-md hover:bg-pink-600 hover:scale-[1.02] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}