
import React, { useEffect, useState } from 'react';
import { ShoppingBag, Star, ArrowRight, Menu, X, Heart, Search, User } from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      rating: 4.9,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: "$199",
      originalPrice: "$249",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      rating: 4.8,
      badge: "New"
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: "$159",
      originalPrice: "$199",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
      rating: 4.7,
      badge: "Limited"
    },
    {
      id: 4,
      name: "Luxury Leather Bag",
      price: "$449",
      originalPrice: "$599",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      rating: 5.0,
      badge: "Premium"
    }
  ];

  const categories = [
    { name: "Electronics", icon: "💻", count: "120+ items" },
    { name: "Fashion", icon: "👔", count: "200+ items" },
    { name: "Accessories", icon: "⌚", count: "80+ items" },
    { name: "Home & Living", icon: "🏠", count: "150+ items" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'glass-effect backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold gradient-text">Luxe Boutique</div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
                <a href="#products" className="text-gray-700 hover:text-black transition-colors">Products</a>
                <a href="#categories" className="text-gray-700 hover:text-black transition-colors">Categories</a>
                <a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
              <User className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </div>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-effect backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700">Home</a>
              <a href="#products" className="block text-gray-700">Products</a>
              <a href="#categories" className="block text-gray-700">Categories</a>
              <a href="#about" className="block text-gray-700">About</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            <span className="gradient-text">Discover</span><br />
            <span className="text-gray-900">Luxury Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Curated collection of premium products that blend elegance with innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-300">
              Shop Collection
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-black hover:text-black transform hover:scale-105 transition-all duration-300">
              Watch Story
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-60 animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-60 animate-float" style={{ animationDelay: '4s' }} />
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections designed for every lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div 
                key={category.name} 
                className="group bg-white rounded-3xl p-8 text-center hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.count}</p>
                <button className="text-purple-600 font-medium group-hover:text-purple-800 transition-colors">
                  Explore <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked premium items that define quality and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.badge}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transform hover:scale-110 transition-all duration-300">
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay in Style
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new collections, exclusive offers, and style tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="btn-premium bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Luxe Boutique</h3>
              <p className="text-gray-400 mb-6">
                Curating luxury experiences through premium products and exceptional service.
              </p>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '📧'].map((icon, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                    <span className="text-lg">{icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {[
              { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Sale', 'Gift Cards'] },
              { title: 'Support', links: ['Contact Us', 'FAQ', 'Shipping', 'Returns'] },
              { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Sustainability'] }
            ].map((section, index) => (
              <div key={section.title} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Luxe Boutique. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
