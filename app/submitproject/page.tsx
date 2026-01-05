'use client';

import React, { useState } from 'react';
import { Camera, Tag, MessageSquare, Package, Star } from 'lucide-react';

export default function ProductSubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // 1. Handling the submission via a Server Action (simulated)
  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    
    // Simulate a network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      tags: formData.get('tags'),
      image: formData.get('image'),
    };

    console.log('Submitted Data:', data);
    
    setIsSubmitting(false);
    setMessage('Product submitted successfully!');
    // Optional: reset form
  }

  return (
    <div className="max-w-2xl mx-auto p-8  rounded-3xl shadow-xl border border-gray-100 my-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Add New Product</h2>
        <p className="text-gray-500">Share a new item with the community.</p>
      </div>

      <form action={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Package size={18} /> Product Name
          </label>
          <input
            name="name"
            required
            placeholder="e.g. Aero-Flow Headphones"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Camera size={18} /> Image URL
          </label>
          <input
            name="image"
            required
            type="url"
            placeholder="https://images.unsplash.com/..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <MessageSquare size={18} /> Description
          </label>
          <textarea
            name="description"
            required
            rows={4}
            placeholder="What makes this product special?"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Tags */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <Tag size={18} /> Tags (comma separated)
          </label>
          <input
            name="tags"
            placeholder="Audio, Lifestyle, Tech"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'
          }`}
        >
          {isSubmitting ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              <Star size={20} fill="white" />
              Publish Product
            </>
          )}
        </button>

        {message && (
          <p className="text-center text-green-600 font-medium animate-bounce">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}