import { Wheat, Droplets, Shield, Wrench, Sprout, MessageCircle } from 'lucide-react';

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
      image: "/images/Seeds & Planting Materials.jpg"
    },
    {
      icon: Droplets,
      title: "Fertilizers & Nutrients",
      description: "Complete range of organic and inorganic fertilizers to boost soil fertility and crop yields.",
      products: ["NPK Fertilizers", "Organic Compost", "Liquid Fertilizers", "Micronutrients", "Soil Conditioners"],
      image: "/images/Sonagro Fertilizer NPK.png"
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
      image: "/images/machinary.jpg"
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
                className="bg-gradient-to-br from-gray-50 to-teal-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-slate-900/50 transition-all duration-500 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  {(() => {
                    const imageName = category.image.split('/').pop()?.replace(/\.(webp|jpg|jpeg|png)$/i, '') || '';
                    return (
                      <picture>
                        <source
                          type="image/avif"
                          srcSet={`/images/optimized/${imageName}-320w.avif 320w, /images/optimized/${imageName}-480w.avif 480w`}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <source
                          type="image/webp"
                          srcSet={`/images/optimized/${imageName}-320w.webp 320w, /images/optimized/${imageName}-480w.webp 480w`}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <img
                          src={`/images/optimized/${imageName}.webp`}
                          alt={category.title}
                          loading="lazy"
                          decoding="async"
                          width={640}
                          height={360}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </picture>
                    );
                  })()}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{category.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{category.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-400">Available Products:</h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {category.products.map((product, productIndex) => (
                        <div key={productIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
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
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Featured Products</h3>
            <p className="text-gray-600 dark:text-gray-400">Our most popular and effective agricultural solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <div className="flex flex-col justify-between bg-white dark:bg-slate-800 border border-teal-100 dark:border-slate-700 rounded-2xl p-6 hover:border-teal-300 dark:hover:border-teal-600 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div>
                <div className="bg-teal-100 dark:bg-teal-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Agfert NPK 20-10-10+TE</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">Premium fertilizer enriched with trace elements for balanced crop nutrition.</p>
              </div>
              <button
                onClick={() => openWhatsApp('Agfert NPK 20-10-10+TE')}
                className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300 text-sm shadow-sm hover:shadow"
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </button>
            </div>
            
            {/* Product 2 */}
            <div className="flex flex-col justify-between bg-white dark:bg-slate-800 border border-emerald-100 dark:border-slate-700 rounded-2xl p-6 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div>
                <div className="bg-emerald-100 dark:bg-emerald-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Wheat className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Agfert Ammonia Sulphate</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">High-quality nitrogen & sulphur fertilizer for soil conditioning and boosting protein.</p>
              </div>
              <button
                onClick={() => openWhatsApp('Agfert Ammonia Sulphate')}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300 text-sm shadow-sm hover:shadow"
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </button>
            </div>
            
            {/* Product 3 */}
            <div className="flex flex-col justify-between bg-white dark:bg-slate-800 border border-lime-100 dark:border-slate-700 rounded-2xl p-6 hover:border-lime-300 dark:hover:border-lime-600 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div>
                <div className="bg-lime-100 dark:bg-lime-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Sprout className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Agfert Urea 46% N</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">Concentrated nitrogen fertilizer to promote rapid vegetative growth and high yields.</p>
              </div>
              <button
                onClick={() => openWhatsApp('Agfert Urea 46% N')}
                className="w-full flex items-center justify-center gap-2 bg-lime-600 hover:bg-lime-700 dark:bg-lime-600 dark:hover:bg-lime-500 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300 text-sm shadow-sm hover:shadow"
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </button>
            </div>
            
            {/* Product 4 */}
            <div className="flex flex-col justify-between bg-white dark:bg-slate-800 border border-sky-100 dark:border-slate-700 rounded-2xl p-6 hover:border-sky-300 dark:hover:border-sky-600 hover:shadow-md transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div>
                <div className="bg-sky-100 dark:bg-sky-900/50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Agfert NPK 15-15-15+7S</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">Balanced multi-nutrient fertilizer formula with added sulphur for optimal development.</p>
              </div>
              <button
                onClick={() => openWhatsApp('Agfert NPK 15-15-15+7S')}
                className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-medium py-2.5 px-4 rounded-xl transition-colors duration-300 text-sm shadow-sm hover:shadow"
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;