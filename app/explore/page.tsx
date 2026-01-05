'use client';
import React, { useState } from 'react';

const ProductShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000&auto=format&fit=crop&q=60", name: "Aero-Flow Headphones", description: "Immerse yourself in high-fidelity sound with industry-leading noise cancellation.", tags: ["Audio", "Lifestyle"], votes: 189, isFeatured: true },
    { id: 2, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=60", name: "Zenith Minimalist Watch", description: "A timeless timepiece featuring a sapphire crystal face and premium leather.", tags: ["Accessories", "Fashion"], votes: 142, isFeatured: false },
    { id: 3, image: "https://images.unsplash.com/photo-1526170315870-ef68460967ec?w=1000&auto=format&fit=crop&q=60", name: "Retro-Shot 35mm", description: "Capture memories in classic style with vintage aesthetics and modern precision.", tags: ["Photography", "Gadgets"], votes: 215, isFeatured: true },
    { id: 4, image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1000&auto=format&fit=crop&q=60", name: "Eco-Pulse Smartwatch", description: "Track your health and carbon footprint with solar-powered technology.", tags: ["Health", "Tech"], votes: 98, isFeatured: false },
    { id: 5, image: "https://images.unsplash.com/photo-1585333127902-04a33a848d9e?w=1000&auto=format&fit=crop&q=60", name: "Velvet-Touch Keyboard", description: "Tactile bliss with silent mechanical switches and customizable RGB.", tags: ["Computing", "Workstation"], votes: 312, isFeatured: true },
    { id: 6, image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=1000&auto=format&fit=crop&q=60", name: "Nordic Sit-Stand Desk", description: "Sustainable birch wood meets ergonomic engineering for your workday.", tags: ["Furniture", "Office"], votes: 76, isFeatured: false },
    { id: 7, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000&auto=format&fit=crop&q=60", name: "Prism Smartphone X", description: "Edge-to-edge OLED display and a revolutionary quad-camera system.", tags: ["Mobile", "Tech"], votes: 450, isFeatured: true },
    { id: 8, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1000&auto=format&fit=crop&q=60", name: "Aviator Horizon Shades", description: "Polarized lenses with a titanium frame for maximum clarity.", tags: ["Accessories", "Lifestyle"], votes: 124, isFeatured: false },
    { id: 9, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000&auto=format&fit=crop&q=60", name: "Aura Tablet Pro", description: "The ultimate canvas for digital artists with 4096 pressure levels.", tags: ["Design", "Computing"], votes: 289, isFeatured: true },
    { id: 10, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000&auto=format&fit=crop&q=60", name: "Sonic-Boom Speaker", description: "Weatherproof 360-degree sound that fills any room with rich bass.", tags: ["Audio", "Outdoor"], votes: 167, isFeatured: false },
    { id: 11, image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=1000&auto=format&fit=crop&q=60", name: "Lumina DSLR Rig", description: "Versatile camera body built for cinematic 8K video recording.", tags: ["Photography", "Video"], votes: 341, isFeatured: true },
    { id: 12, image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1000&auto=format&fit=crop&q=60", name: "Urban-Stride Sneakers", description: "Breathable mesh and responsive foam for city-walking comfort.", tags: ["Fashion", "Fitness"], votes: 203, isFeatured: false },
    { id: 13, image: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=1000&auto=format&fit=crop&q=60", name: "Hyper-Cool PC Case", description: "Designed for airflow with tempered glass and cable management.", tags: ["Gaming", "Computing"], votes: 156, isFeatured: false },
    { id: 14, image: "https://images.unsplash.com/photo-1586495764447-6f97a3d2bb9b?w=1000&auto=format&fit=crop&q=60", name: "Glow-Skin Facial Kit", description: "Advanced skincare using organic ingredients to revitalize skin.", tags: ["Beauty", "Wellness"], votes: 88, isFeatured: false },
    { id: 15, image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=1000&auto=format&fit=crop&q=60", name: "Titan Gaming Chair", description: "Ergonomic support designed for marathon gaming sessions.", tags: ["Gaming", "Furniture"], votes: 274, isFeatured: true },
    { id: 16, image: "https://images.unsplash.com/photo-1505156159035-6dc48003e0a7?w=1000&auto=format&fit=crop&q=60", name: "Terra-Flora Smart Pot", description: "Automated planter that monitors soil and light via your phone.", tags: ["Home", "Gardening"], votes: 112, isFeatured: false }
  ];

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Product Discovery</h1>
            <p className="text-gray-500 mt-2">Find the best gear for your lifestyle.</p>
          </div>
          
          <input 
            type="text" 
            placeholder="Search products..."
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isFeatured && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Featured
                  </span>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-semibold text-gray-700">
                  ▲ {product.votes}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
                
                <button className="mt-6 w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No products found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;