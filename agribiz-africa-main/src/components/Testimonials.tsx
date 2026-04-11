import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kwame Asante',
      role: 'Maize Farmer',
      location: 'Ejura, Ashanti Region',
      quote: 'Since working with Agribiz Africa, my maize yield increased significantly. Their seeds are top quality and their team provides excellent support throughout the growing season.',
      rating: 5,
      crop: 'Maize'
    },
    {
      name: 'Abena Mensah',
      role: 'Commercial Farmer',
      location: 'Techiman, Bono Region',
      quote: 'Agribiz Africa helped us improve productivity across our 50-acre farm operations. Their fertilizers and crop protection products are reliable and effective.',
      rating: 5,
      crop: 'Vegetables'
    },
    {
      name: 'Ibrahim Sulemana',
      role: 'Rice Grower',
      location: 'Tamale, Northern Region',
      quote: 'Reliable agricultural partner with expert advice and quality products. Their nationwide delivery makes it easy to get supplies even in remote areas.',
      rating: 5,
      crop: 'Rice'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 fill-current" />
            Verified Farmer Reviews
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Farmers Say{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real farmers across Ghana who have transformed their farms with our products and services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="h-8 w-8 text-teal-200" />
                <span className="bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.crop}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-teal-600">{testimonial.role}</div>
                <div className="text-xs text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Join 1,000+ satisfied farmers across Ghana • Average rating 4.9/5
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
