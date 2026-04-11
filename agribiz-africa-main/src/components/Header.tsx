import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 animate-slide-down">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
                <Phone className="h-3 w-3" />
                <span>+233 24 254 4549</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
                <MapPin className="h-3 w-3" />
                <span>Emmanuel Estate Junction, Accra</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center animate-fade-in-left">
            <img 
              src="/Agribiz logo.jpg" 
              alt="Agribiz Africa" 
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in-right">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 font-medium transition-all duration-300 hover:scale-105 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 font-medium py-2 text-left transition-all duration-300 hover:translate-x-2 transform">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 font-medium py-2 text-left transition-all duration-300 hover:translate-x-2 transform">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 font-medium py-2 text-left transition-all duration-300 hover:translate-x-2 transform">Services</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-teal-600 font-medium py-2 text-left transition-all duration-300 hover:translate-x-2 transform">Products</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-teal-600 font-medium py-2 text-left transition-all duration-300 hover:translate-x-2 transform">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-2 rounded-full mt-2 w-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;