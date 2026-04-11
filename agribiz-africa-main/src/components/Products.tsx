import React from 'react';
import { Wheat, Droplets, Shield, Wrench, MessageCircle } from 'lucide-react';

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
      image: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Droplets,
      title: "Fertilizers & Nutrients",
      description: "Complete range of organic and inorganic fertilizers to boost soil fertility and crop yields.",
      products: ["NPK Fertilizers", "Organic Compost", "Liquid Fertilizers", "Micronutrients", "Soil Conditioners"],
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Effective and safe pesticides, herbicides, and fungicides for comprehensive crop protection.",
      products: ["Insecticides", "Herbicides", "Fungicides", "Biological Control", "Protective Equipment"],
      image: "https://images.pexels.com/photos/1459331/pexels-photo-1459331.jpeg?auto=compress&cs=tinysrgb&w=500"
    },
    {
      icon: Wrench,
      title: "Farm Equipment",
      description: "Modern farming tools and equipment to improve efficiency and productivity.",
      products: ["Hand Tools", "Irrigation Systems", "Spraying Equipment", "Harvesting Tools", "Storage Solutions"],
      image: "https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=500"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Available Products:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-teal-600 rounded-full mr-2"></div>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h3>
            <p className="text-lg text-gray-600">Our most popular and effective agricultural solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-teal-100 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Wheat className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Maize Seeds</h4>
              <p className="text-gray-600 mb-4">High-yielding hybrid varieties adapted to Ghanaian conditions</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-teal-600">GH₵ 45/kg</span>
                <button 
                  onClick={() => openWhatsApp('Premium Maize Seeds')}
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-300 hover:translate-x-1 transform flex items-center gap-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order Now
                </button>
              </div>
            </div>
            
            <div className="bg-white border-2 border-emerald-100 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Droplets className="h-6 w-6 text-emerald-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">NPK 15-15-15</h4>
              <p className="text-gray-600 mb-4">Balanced fertilizer for optimal plant growth and development</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-emerald-600">GH₵ 120/bag</span>
                <button 
                  onClick={() => openWhatsApp('NPK 15-15-15 Fertilizer')}
                  className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300 hover:translate-x-1 transform flex items-center gap-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order Now
                </button>
              </div>
            </div>
            
            <div className="bg-white border-2 border-lime-100 rounded-2xl p-6 hover:border-lime-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="bg-lime-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Shield className="h-6 w-6 text-lime-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Organic Pesticide</h4>
              <p className="text-gray-600 mb-4">Safe and effective crop protection for sustainable farming</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-lime-600">GH₵ 85/liter</span>
                <button 
                  onClick={() => openWhatsApp('Organic Pesticide')}
                  className="text-lime-600 font-semibold hover:text-lime-700 transition-colors duration-300 hover:translate-x-1 transform flex items-center gap-1"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order Now
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