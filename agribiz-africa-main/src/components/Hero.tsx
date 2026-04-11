import { Leaf, TrendingUp, Users, Target, MessageCircle, FileText } from 'lucide-react';

const Hero = () => {
  const openWhatsApp = () => {
    const phone = '233242544549';
    const message = 'Hi Agribiz Africa, I want to learn more about your products and services.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToQuote = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Full farming background image - Ghanaian farmers in field */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-ghana-farmers.webp)',
        }}
      ></div>

      {/* Light mode: Soft gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-teal-50/80 to-emerald-50/90 dark:from-slate-900/95 dark:via-slate-900/90 dark:to-slate-800/85"></div>

      {/* Dark mode: Additional overlay for text contrast (Google/Amazon standard) */}
      <div className="absolute inset-0 hidden dark:block bg-gradient-to-r from-slate-950/80 via-slate-900/70 to-transparent"></div>

      {/* Subtle background pattern - static */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-600 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-emerald-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-slide-in-left">
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">Premium Agricultural</span>
                <br />
                <span className="text-gray-900 dark:text-white">Solutions for Ghana</span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300">Seeds, Fertilizers & Expert Farm Support</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-slide-in-left max-w-2xl" style={{ animationDelay: '0.1s' }}>
                Trusted by 1,000+ farmers across Ghana for quality inputs, financing advisory, and expert guidance since 2009.
              </p>
            </div>

            {/* Primary CTAs - Simplified to 2 */}
            <div className="flex flex-col sm:flex-row gap-3 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group text-base"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </button>
              <button
                onClick={scrollToQuote}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 text-base"
              >
                <FileText className="h-5 w-5" />
                Request Quote
              </button>
            </div>

            {/* Trust Signal - Enhanced for dark mode visibility */}
            <div className="flex items-center gap-4 pt-2 animate-slide-in-up" style={{ animationDelay: '0.25s' }}>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center text-xs font-bold text-teal-600 dark:text-teal-300 border-2 border-white dark:border-slate-700">1K+</div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center text-xs font-bold text-emerald-600 dark:text-emerald-300 border-2 border-white dark:border-slate-700">⭐</div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Trusted by 1,000+ farmers • 4.9/5 rating</span>
            </div>

            {/* Optimized Stats - Enhanced for dark mode */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 animate-count-up">1000+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Farmers Served</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 animate-count-up" style={{ animationDelay: '0.1s' }}>50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Agri Products</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-lime-600 dark:text-lime-400 animate-count-up" style={{ animationDelay: '0.2s' }}>15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 animate-count-up" style={{ animationDelay: '0.3s' }}>24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Delivery</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="bg-white/80 dark:bg-slate-800/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl dark:shadow-slate-900/50 border border-white/20 dark:border-slate-700 hover:shadow-3xl transition-shadow duration-500">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="bg-teal-100 dark:bg-teal-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Leaf className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality Inputs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Premium agricultural products for optimal yields</p>
                </div>

                <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Financial Advisory</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expert guidance for agricultural financing</p>
                </div>

                <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-lime-100 dark:bg-lime-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Users className="h-6 w-6 text-lime-600 dark:text-lime-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Community Focus</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Supporting local farming communities</p>
                </div>

                <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div className="bg-yellow-100 dark:bg-yellow-900/50 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Target className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Sustainable Growth</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Building long-term agricultural success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;