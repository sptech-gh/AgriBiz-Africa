import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Close menu when clicking outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      headerRef.current &&
      !headerRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside as EventListener);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [isMenuOpen, handleClickOutside]);

  // Check if we're on the blog page
  useEffect(() => {
    const checkBlogPage = () => {
      const hash = window.location.hash;
      setIsBlogPage(hash === '#blog' || hash.startsWith('#blog/'));
    };
    checkBlogPage();
    window.addEventListener('hashchange', checkBlogPage);
    return () => window.removeEventListener('hashchange', checkBlogPage);
  }, []);

  // Scroll handler — only fires state update when crossing threshold (minimises re-renders)
  useEffect(() => {
    const atTop = window.scrollY <= 50;
    setShowContactBar(atTop);
    setIsScrolled(!atTop);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const wasAbove = lastScrollY.current <= 50;
      const isAbove  = currentScrollY <= 50;

      if (wasAbove !== isAbove) {
        setShowContactBar(isAbove);
        setIsScrolled(!isAbove);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isBlogPage && sectionId !== 'blog') {
      // Navigate to home page with section hash
      window.location.hash = sectionId === 'home' ? '' : sectionId;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`bg-white dark:bg-slate-900 sticky top-0 z-50${isScrolled ? ' scrolled' : ''}`}
    >
      {/* Top contact bar — max-height collapse instead of display:none to avoid layout reflow */}
      <div
        className={`contact-bar bg-teal-600 text-white py-2${
          showContactBar ? ' visible' : ' hidden-bar'
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
                <span>Lucy Plaza, GN-1106-4626</span>
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
          {/* Logo with stable sizing - no filter animations */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center cursor-pointer"
          >
            {/* Light mode logo (circular badge) */}
            <picture className="block dark:hidden">
              <source srcSet="/images/logo-black-bg.webp" type="image/webp" />
              <img
                src="/images/logo-black-bg.png"
                alt="Agribiz Africa"
                className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border border-gray-200/80 shadow-sm transition-all duration-300 hover:scale-105"
                width={56}
                height={56}
              />
            </picture>
            {/* Dark mode logo (transparent white) */}
            <picture className="hidden dark:block">
              <source srcSet="/images/logo-transparent.webp" type="image/webp" />
              <img
                src="/images/logo-transparent.png"
                alt="Agribiz Africa"
                className="h-12 w-12 md:h-14 md:w-14 object-contain transition-all duration-300 hover:scale-105"
                width={56}
                height={56}
              />
            </picture>
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
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = 'blog';
              }}
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors"
            >
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

      </nav>

      {/* Mobile menu — outside <nav> so CSS containment on header doesn't clip it */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-2xl z-50 border-t border-gray-100 dark:border-slate-700"
        >
          <div className="flex flex-col px-4 py-2 space-y-1">
            <button
              onClick={() => isBlogPage ? navigateToHome() : scrollToSection('home')}
              className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-100 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-100 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-100 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => {
                if (!isBlogPage) window.location.hash = 'blog';
                setIsMenuOpen(false);
              }}
              className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-100 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-colors w-full"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-900 dark:text-gray-100 font-medium py-4 text-left text-lg border-b border-gray-100 dark:border-slate-700 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Contact
            </button>

            <div className="py-4 space-y-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 rounded-lg font-semibold w-full transition-colors"
              >
                Get Free Quote
              </button>
              <a
                href="tel:+233242544549"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 dark:hover:bg-slate-800 transition-colors"
              >
                Call: +233 24 254 4549
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;