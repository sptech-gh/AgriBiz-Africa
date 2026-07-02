import { Star, Play } from 'lucide-react';

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
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What Farmers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real stories from real farmers across Ghana who have transformed their farms with our products and services
          </p>
        </div>

        {/* Featured Video Testimonial */}
        <div className="mb-12 animate-fade-in-up">
          <div className="bg-teal-600 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2">
              {/* Video Side */}
              <div className="relative bg-gray-900 aspect-video md:aspect-auto">
                <video
                  poster="/images/optimized/why-choose-us-poster.webp"
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  aria-label="Why choose Agribiz Africa - Direct from Port to Farm quality assurance"
                >
                  <source src="/videos/Why Choose Us.mp4" type="video/mp4" />
                  <p className="text-white p-4">Your browser does not support video playback.</p>
                </video>
                {/* Play button overlay (shown before play) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="h-12 w-12 text-white fill-current" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed text-white">
                  Direct From Port to Farm: Uncompromising Quality, Unmatched Yields.
                </h3>
                <p className="text-base md:text-lg text-gray-100 mb-5 leading-relaxed font-medium">
                  At Agribiz Africa, we cut out the middlemen to bring the world's finest agricultural inputs straight to the Ghanaian soil. Witness our dedicated team at the Port of Tema, precision-bagging premium, high-grade fertilizer imports directly from the vessel.
                </p>
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  We ensure that what arrives on your farm is pure, fresh, and packed with the exact nutrient profile required to maximize your crop potential. When you choose Agribiz Africa, you are partnering with direct-importers committed to lower costs, full supply chain transparency, and ultimate agricultural growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md dark:shadow-slate-900/50 transition-all duration-300 border border-gray-100 dark:border-slate-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-3 border-t border-gray-200 dark:border-slate-700">
                <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">{testimonial.name}</div>
                <div className="text-xs text-teal-600 dark:text-teal-400">{testimonial.role} • {testimonial.crop}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Join 1,000+ satisfied farmers across Ghana • Average rating 4.9/5
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
