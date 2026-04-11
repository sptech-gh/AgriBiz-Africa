import { Sprout, DollarSign, BookOpen, Truck, Users, BarChart3 } from 'lucide-react';

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Sprout,
      title: "Agricultural Inputs Supply",
      description: "Premium seeds, fertilizers, pesticides, and farming equipment from trusted global suppliers.",
      features: ["Quality Seeds", "Organic Fertilizers", "Crop Protection", "Farm Equipment"]
    },
    {
      icon: DollarSign,
      title: "Financing Advisory",
      description: "Expert financial guidance to help farmers access credit and manage agricultural investments.",
      features: ["Credit Facilitation", "Investment Planning", "Risk Assessment", "Financial Literacy"]
    },
    {
      icon: BookOpen,
      title: "Technical Training",
      description: "Comprehensive training programs on modern farming techniques and best practices.",
      features: ["Crop Management", "Soil Health", "Pest Control", "Harvest Optimization"]
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Reliable supply chain management and timely delivery of agricultural inputs.",
      features: ["Timely Delivery", "Storage Solutions", "Distribution Network", "Inventory Management"]
    },
    {
      icon: Users,
      title: "Farmer Support Groups",
      description: "Building strong farming communities through cooperative programs and support networks.",
      features: ["Community Building", "Knowledge Sharing", "Group Purchasing", "Collective Marketing"]
    },
    {
      icon: BarChart3,
      title: "Market Intelligence",
      description: "Real-time market information and analysis to help farmers make informed decisions.",
      features: ["Price Monitoring", "Market Trends", "Demand Forecasting", "Trade Opportunities"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive agricultural solutions designed to support farmers at every stage of their journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="bg-gradient-to-br from-teal-100 to-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <IconComponent className="h-8 w-8 text-teal-600" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-teal-600 font-medium hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                >
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>

        {/* Internal Linking - Related Resources */}
        <div className="mt-12 bg-teal-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Related Farming Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="#blog/best-maize-seeds-high-yield-ghana" 
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span className="text-lg">→</span>
              <span>Best Maize Seeds Guide</span>
            </a>
            <a 
              href="#blog/top-fertilizers-maximum-crop-yield-ghana" 
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span className="text-lg">→</span>
              <span>Fertilizer Selection Guide</span>
            </a>
            <a 
              href="#blog/how-farmers-ghana-increase-yield-2x" 
              className="flex items-center gap-2 text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span className="text-lg">→</span>
              <span>Double Your Yield Tips</span>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-12 text-center text-white animate-fade-in-up hover:shadow-2xl transition-shadow duration-500" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-3xl font-bold mb-4 animate-slide-in-up">Ready to Transform Your Farm?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            Join hundreds of successful farmers who trust Agribiz Africa for their agricultural needs
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Schedule Consultation
            </button>
            <a 
              href="#blog"
              className="bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-all duration-300"
            >
              Read Farming Tips
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;