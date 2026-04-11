import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

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
    <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 will-change-transform ${isScrolled ? 'shadow-md' : ''}`}>
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
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Products
            </button>
            <a href="#blog" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Blog
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="tel:+233242544549"
              className="bg-teal-600 text-white p-2 rounded-lg"
              aria-label="Call us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu - full screen overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 animate-fade-in-up">
            <div className="flex flex-col p-6 space-y-1">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 font-medium py-3 text-left text-lg border-b border-gray-100">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-900 font-medium py-3 text-left text-lg border-b border-gray-100">Services</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-900 font-medium py-3 text-left text-lg border-b border-gray-100">Products</button>
              <a href="#blog" className="text-gray-900 font-medium py-3 text-left text-lg border-b border-gray-100">Blog</a>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 font-medium py-3 text-left text-lg border-b border-gray-100">Contact</button>

              <div className="pt-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium w-full"
                >
                  Get Free Quote
                </button>
              </div>

              <div className="pt-6 text-center">
                <a href="tel:+233242544549" className="text-teal-600 font-medium">
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