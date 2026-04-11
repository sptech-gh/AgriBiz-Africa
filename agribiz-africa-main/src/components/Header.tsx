import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for sticky header styling with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`bg-white dark:bg-slate-900 sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-md dark:shadow-slate-800' : ''}`}>
      {/* Top contact bar - smooth collapse on scroll */}
      <div
        className={`bg-teal-600 text-white overflow-hidden transition-all duration-300 ease-out ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+233242544549" className="flex items-center space-x-1 hover:text-teal-100">
                <Phone className="h-3 w-3" />
                <span>+233 24 254 4549</span>
              </a>
              <div className="hidden sm:flex items-center space-x-1">
                <MapPin className="h-3 w-3" />
                <span>Emmanuel Estate Junction, Accra</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-xs text-teal-100">Trusted by 1,000+ farmers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Dark mode: logo brightness adjustment */}
          <style>{`
            .dark header img {
              filter: brightness(1.1);
            }
          `}</style>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/Agribiz logo.jpg"
              alt="Agribiz Africa"
              className="h-10 w-auto"
            />
          </a>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">
              Products
            </button>
            <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">
              Blog
            </a>
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <a
              href="tel:+233242544549"
              className="bg-teal-600 text-white p-2 rounded-lg"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 p-2 bg-gray-100 dark:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu - full screen overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-white dark:bg-slate-900 z-40 animate-fade-in-up shadow-2xl">
            <div className="flex flex-col p-6 space-y-1">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 px-2 rounded transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 px-2 rounded transition-colors">Services</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 px-2 rounded transition-colors">Products</button>
              <a href="#blog" onClick={() => setIsMenuOpen(false)} className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 px-2 rounded transition-colors block">Blog</a>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 px-2 rounded transition-colors">Contact</button>

              <div className="pt-6 space-y-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg font-medium w-full transition-colors"
                >
                  Get Free Quote
                </button>
                <a
                  href="tel:+233242544549"
                  className="block w-full text-center border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Call: +233 24 254 4549
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;