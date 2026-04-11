import { Wheat, Droplets, Shield, Wrench } from 'lucide-react';

const Products = () => {
  const openWhatsApp = (productName: string) => {
    const phone = '233242544549';
    const message = `Hi Agribiz Africa, I'm interested in ordering ${productName}. Please assist me.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const productCategories = [
    {
      icon: Wheat,
      title: "Seeds & Planting Materials",
      description: "High-quality seeds for various crops including maize, rice, vegetables, and cash crops.",
      products: ["Hybrid Maize Seeds", "Rice Varieties", "Vegetable Seeds", "Legume Seeds", "Tree Seedlings"],
      image: "/images/product-seeds.webp"
    },
    {
      icon: Droplets,
      title: "Fertilizers & Nutrients",
      description: "Complete range of organic and inorganic fertilizers to boost soil fertility and crop yields.",
      products: ["NPK Fertilizers", "Organic Compost", "Liquid Fertilizers", "Micronutrients", "Soil Conditioners"],
      image: "/images/product-fertilizer.webp"
    },
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Effective and safe pesticides, herbicides, and fungicides for comprehensive crop protection.",
      products: ["Insecticides", "Herbicides", "Fungicides", "Biological Control", "Protective Equipment"],
      image: "/images/product-pesticide.webp"
    },
    {
      icon: Wrench,
      title: "Farm Equipment",
      description: "Modern farming tools and equipment to improve efficiency and productivity.",
      products: ["Hand Tools", "Irrigation Systems", "Spraying Equipment", "Harvesting Tools", "Storage Solutions"],
      image: "/images/product-equipment.webp"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Premium agricultural inputs sourced from trusted suppliers worldwide to ensure optimal crop performance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-teal-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Available Products:</h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Products */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Featured Products</h3>
            <p className="text-gray-600">Our most popular and effective agricultural solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-teal-100 rounded-2xl p-6 hover:border-teal-300 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-teal-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Wheat className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Premium Maize Seeds</h4>
              <p className="text-gray-600 mb-4 text-sm">High-yielding hybrid varieties</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-teal-600">GH₵ 45/kg</span>
                <button
                  onClick={() => openWhatsApp('Premium Maize Seeds')}
                  className="text-teal-600 font-medium hover:text-teal-700 transition-colors text-sm"
                >
                  Order →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-emerald-100 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">NPK 15-15-15</h4>
              <p className="text-gray-600 mb-4 text-sm">Balanced fertilizer formula</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-emerald-600">GH₵ 120/bag</span>
                <button
                  onClick={() => openWhatsApp('NPK 15-15-15 Fertilizer')}
                  className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors text-sm"
                >
                  Order →
                </button>
              </div>
            </div>
            
            <div className="bg-white border border-lime-100 rounded-2xl p-6 hover:border-lime-300 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="bg-lime-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-lime-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Organic Pesticide</h4>
              <p className="text-gray-600 mb-4 text-sm">Safe crop protection</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-lime-600">GH₵ 85/liter</span>
                <button
                  onClick={() => openWhatsApp('Organic Pesticide')}
                  className="text-lime-600 font-medium hover:text-lime-700 transition-colors text-sm"
                >
                  Order →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;