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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Farmers Across Ghana
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                className={`bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border ${colors.border} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${colors.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-3`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <div className={`text-2xl font-bold ${colors.text} mb-1`}>
                  {metric.number}
                </div>
                <div className="text-gray-900 font-medium text-sm mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-500">
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
