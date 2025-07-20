'use client';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-400 to-purple-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-xl transition-all duration-500">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-6">Contact BitLinks</h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          We’ll get back to you within 24–48 hours ✉️
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
