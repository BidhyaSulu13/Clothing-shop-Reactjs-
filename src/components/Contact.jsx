import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-pink-900 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-pink-200 focus:outline-pink-400" />
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-pink-200 focus:outline-pink-400" />
          <textarea rows="4" placeholder="Your Message" className="w-full p-4 rounded-xl border border-pink-200 focus:outline-pink-400"></textarea>
          <button className="w-full bg-pink-500 text-white py-4 rounded-xl font-bold hover:bg-pink-600 transition-all duration-300 hover:scale-[1.02]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}