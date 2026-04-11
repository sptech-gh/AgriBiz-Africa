import React from 'react';
import { Users, Package, Award, Truck } from 'lucide-react';

const TrustSection = () => {
  const trustMetrics = [
    {
      icon: Users,
      number: '1000+',
      label: 'Farmers Served',
      description: 'Across Ghana',
      color: 'teal'
    },
    {
      icon: Package,
      number: '50+',
      label: 'Agricultural Products',
      description: 'Seeds, Fertilizers & More',
      color: 'emerald'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Years Experience',
      description: 'Trusted Expertise',
      color: 'lime'
    },
    {
      icon: Truck,
      number: 'Nationwide',
      label: 'Delivery Service',
      description: 'To Your Farm',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
      lime: { bg: 'bg-lime-100', text: 'text-lime-600', border: 'border-lime-200' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' }
    };
    return colors[color] || colors.teal;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Farmers & Agribusinesses{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Across Ghana
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied farmers who rely on us for quality agricultural inputs and expert support
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => {
            const colors = getColorClasses(metric.color);
            const Icon = metric.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${colors.border} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${colors.bg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`h-7 w-7 ${colors.text}`} />
                </div>
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>
                  {metric.number}
                </div>
                <div className="text-gray-900 font-semibold mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-500">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
