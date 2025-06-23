
import React from 'react';
import { ShoppingBag, Star, Heart, Search, User, Menu } from 'lucide-react';

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4
    },
    {
      id: 3,
      name: "Sunglasses",
      price: "$59",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      rating: 5
    },
    {
      id: 4,
      name: "Leather Bag",
      price: "$149",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Shop</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-200">Home</a>
            <a href="#products" className="hover:text-blue-200">Products</a>
            <a href="#about" className="hover:text-blue-200">About</a>
            <a href="#contact" className="hover:text-blue-200">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <Heart className="w-5 h-5" />
            <User className="w-5 h-5" />
            <ShoppingBag className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section id="home" className="bg-blue-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to My Shop
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find amazing products at great prices!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Shop</h2>
          <p className="text-lg text-gray-600 mb-8">
            We are a small business that loves bringing you quality products at affordable prices. 
            Our team carefully selects each item to ensure you get the best value for your money.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Products</h3>
              <p className="text-gray-600">We only sell items that we would use ourselves.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Shipping</h3>
              <p className="text-gray-600">Get your orders delivered quickly and safely.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Great Support</h3>
              <p className="text-gray-600">Our team is here to help with any questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8">
            Have questions? We'd love to hear from you!
          </p>
          <div className="max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg text-gray-800 mb-4"
            />
            <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">My Shop</h3>
              <p className="text-gray-400">Your favorite online store for quality products.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-white">Home</a>
                <a href="#products" className="block text-gray-400 hover:text-white">Products</a>
                <a href="#about" className="block text-gray-400 hover:text-white">About</a>
                <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="block text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="block text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 My Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
