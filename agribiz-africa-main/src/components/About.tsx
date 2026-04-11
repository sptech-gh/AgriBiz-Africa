import React from 'react';
import { Target, Eye, Award, Users, Shield, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Agribiz Africa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to transforming agriculture in Ghana through quality inputs, 
            expert advisory services, and unwavering commitment to farmer success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize agriculture in Ghana, Agribiz Africa has grown 
              from a small agricultural inputs dealer to a comprehensive agricultural solutions provider. 
              We understand the challenges facing Ghanaian farmers and are committed to providing 
              innovative solutions that drive productivity and profitability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines deep agricultural expertise with modern business practices to deliver 
              exceptional value to our clients. From smallholder farmers to large agricultural enterprises, 
              we provide tailored solutions that meet diverse needs and drive sustainable growth.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-8 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Target className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-sm text-gray-600">Empowering farmers with quality inputs and expert guidance</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-sm text-gray-600">Leading agricultural transformation across West Africa</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-lime-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Award className="h-8 w-8 text-lime-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Assured</h4>
                <p className="text-sm text-gray-600">Premium products from trusted global suppliers</p>
              </div>
              
              <div className="text-center group hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community First</h4>
                <p className="text-sm text-gray-600">Supporting local farming communities to thrive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Optimized Values section */}
        <div className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Background image with overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl"
            style={{
              backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.9), rgba(16, 185, 129, 0.9)), url(/images/about-bg.webp)',
            }}
          ></div>
          
          <div className="relative bg-gradient-to-r from-teal-600/95 to-emerald-600/95 rounded-3xl p-12 text-white">
            <div className="text-center mb-12 animate-slide-in-up">
              <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
              <p className="text-teal-100 text-lg max-w-2xl mx-auto">
                The fundamental principles that guide our mission and shape every interaction with our farming community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Integrity</h4>
                <p className="text-sm text-teal-100 leading-relaxed">
                  Building trust through honest, transparent, and ethical business practices in every interaction
                </p>
              </div>
              
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Excellence</h4>
                <p className="text-sm text-teal-100 leading-relaxed">
                  Committed to delivering superior quality products and services that exceed expectations
                </p>
              </div>
              
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Innovation</h4>
                <p className="text-sm text-teal-100 leading-relaxed">
                  Embracing cutting-edge technologies and progressive methods to advance agriculture
                </p>
              </div>
              
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">Community</h4>
                <p className="text-sm text-teal-100 leading-relaxed">
                  Fostering strong relationships and supporting the growth of farming communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;