import { Star } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Farmers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from real farmers across Ghana who have transformed their farms with our products and services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-3 border-t border-gray-200">
                <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
                <div className="text-xs text-teal-600">{testimonial.role} • {testimonial.crop}</div>
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
