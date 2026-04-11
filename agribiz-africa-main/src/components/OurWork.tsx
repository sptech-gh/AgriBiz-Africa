import { Camera, Users, Sprout, Award } from 'lucide-react';

const OurWork = () => {
  const workImages = [
    {
      src: '/images/farm-visit-1.webp',
      alt: 'Agribiz team training farmers on seed selection in Ejura',
      title: 'Farmer Training Program',
      location: 'Ejura, Ashanti Region',
      icon: Users
    },
    {
      src: '/images/farm-visit-2.webp',
      alt: 'Field demonstration of fertilizer application techniques',
      title: 'Field Demonstrations',
      location: 'Techiman, Bono Region',
      icon: Sprout
    },
    {
      src: '/images/farm-visit-3.webp',
      alt: 'Community outreach program with local farmers',
      title: 'Community Outreach',
      location: 'Tamale, Northern Region',
      icon: Award
    },
    {
      src: '/images/farm-visit-4.webp',
      alt: 'Harvest season support and quality assessment',
      title: 'Harvest Support',
      location: 'Kumasi, Ashanti Region',
      icon: Camera
    }
  ];

  return (
    <section id="our-work" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            See how we are transforming farming communities across Ghana through training,
            field demonstrations, and hands-on support
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workImages.map((image, index) => {
            const Icon = image.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Location Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{image.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-teal-100 dark:bg-teal-900/50 w-8 h-8 rounded-lg flex items-center justify-center">
                      <Icon className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{image.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{image.alt}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            Want to see more of our impact?
          </p>
          <a
            href="https://www.facebook.com/agribizafricaltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            Follow us on Facebook →
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
