import React from 'react';
import { ArrowRight, Leaf, TrendingUp, Users, Target, MessageCircle, Phone, FileText } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phone = '233242544549';
    const message = 'Hi Agribiz Africa, I want to learn more about your products and services.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+233242544549', '_blank');
  };

  const scrollToQuote = () => {
    const element = document.getElementById('contact');
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
          backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.1), rgba(16, 185, 129, 0.1)), url(/images/hero-bg.webp)',
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Helping Farmers</span>
                <br />
                <span className="text-gray-900">& Agribusinesses in Ghana</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">Grow Faster with Premium Seeds, Fertilizers & Expert Support</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-slide-in-left max-w-2xl" style={{ animationDelay: '0.1s' }}>
                Trusted by farmers and agribusinesses across Ghana for quality agricultural inputs and expert advisory services.
              </p>
            </div>

            {/* Multi-Channel CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Chat
              </button>
              <button
                onClick={makeCall}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </button>
              <button
                onClick={scrollToQuote}
                className="bg-white border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <FileText className="h-5 w-5" />
                Get Quote
              </button>
            </div>

            {/* Optimized Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-teal-600 animate-count-up">1000+</div>
                <div className="text-sm text-gray-600">Farmers Served</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-emerald-600 animate-count-up" style={{ animationDelay: '0.1s' }}>50+</div>
                <div className="text-sm text-gray-600">Agri Products</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-lime-600 animate-count-up" style={{ animationDelay: '0.2s' }}>15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-600 animate-count-up" style={{ animationDelay: '0.3s' }}>24/7</div>
                <div className="text-sm text-gray-600">Delivery</div>
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