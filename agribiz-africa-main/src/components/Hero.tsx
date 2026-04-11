import React from 'react';
import { ArrowRight, Leaf, TrendingUp, Users, Target } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Full farming background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.1), rgba(16, 185, 129, 0.1)), url(https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      ></div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-teal-50/80 to-emerald-50/90"></div>

      {/* Simplified background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-600 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-600 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-lime-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-teal-600 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Agribiz Africa</span>
                <br />
                Empowering
                <br />
                Agriculture in Ghana
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                Leading dealer in agricultural inputs and financing advisory services. 
                We provide quality products and expert guidance to help farmers thrive and achieve sustainable growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 hover:shadow-lg"
              >
                Contact Us
              </button>
            </div>

            {/* Optimized Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-teal-600 animate-count-up">500+</div>
                <div className="text-sm text-gray-600">Farmers Served</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-emerald-600 animate-count-up" style={{ animationDelay: '0.1s' }}>10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-lime-600 animate-count-up" style={{ animationDelay: '0.2s' }}>100+</div>
                <div className="text-sm text-gray-600">Products Available</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-shadow duration-500">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Leaf className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Inputs</h3>
                  <p className="text-sm text-gray-600">Premium agricultural products for optimal yields</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Financial Advisory</h3>
                  <p className="text-sm text-gray-600">Expert guidance for agricultural financing</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-lime-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Users className="h-6 w-6 text-lime-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Community Focus</h3>
                  <p className="text-sm text-gray-600">Supporting local farming communities</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Target className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
                  <p className="text-sm text-gray-600">Building long-term agricultural success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;