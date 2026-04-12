import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import { getBlogPostBySlug, BlogPost } from './data/blogData';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load below-the-fold components for better initial load performance
const Services = lazy(() => import('./components/Services'));
const Products = lazy(() => import('./components/Products'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat'));
const WhatsAppChannel = lazy(() => import('./components/WhatsAppChannel'));
const LeadCapture = lazy(() => import('./components/LeadCapture'));
const MobileStickyCTA = lazy(() => import('./components/MobileStickyCTA'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const BlogArticle = lazy(() => import('./components/BlogArticle'));
const About = lazy(() => import('./components/About'));
const OurWork = lazy(() => import('./components/OurWork'));

// Lazy load SEO pages (rarely accessed on initial visit)
const SeedsPage = lazy(() => import('./components/SEOPages').then(m => ({ default: m.SeedsPage })));
const FertilizerPage = lazy(() => import('./components/SEOPages').then(m => ({ default: m.FertilizerPage })));
const ConsultingPage = lazy(() => import('./components/SEOPages').then(m => ({ default: m.ConsultingPage })));

// Loading fallback for lazy components
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-pulse text-teal-600 dark:text-teal-400">Loading...</div>
  </div>
);

type PageView = 'home' | 'seeds' | 'fertilizer' | 'consulting' | 'blog';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Handle URL hash changes for SEO pages and blog articles
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');

      if (hash === 'seeds-ghana' || hash === 'seeds') {
        setCurrentView('seeds');
        setSelectedArticle(null);
      } else if (hash === 'fertilizer-ghana' || hash === 'fertilizer') {
        setCurrentView('fertilizer');
        setSelectedArticle(null);
      } else if (hash === 'farm-consulting-ghana' || hash === 'consulting') {
        setCurrentView('consulting');
        setSelectedArticle(null);
      } else if (hash === 'blog') {
        setCurrentView('blog');
        setSelectedArticle(null);
      } else if (hash.startsWith('blog/')) {
        // Handle blog article URLs like #blog/slug
        const slug = hash.replace('blog/', '');
        const article = getBlogPostBySlug(slug);
        if (article) {
          setCurrentView('blog');
          setSelectedArticle(article);
        } else {
          setCurrentView('blog');
          setSelectedArticle(null);
        }
      } else if (hash === '' || hash === 'home') {
        setCurrentView('home');
        setSelectedArticle(null);
      }
    };

    // Handle popstate (back/forward buttons) since we use pushState
    const handlePopState = () => {
      handleHashChange();
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes and popstate
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Update document title and scroll to top when view changes
  useEffect(() => {
    const titles: Record<PageView, string> = {
      home: 'Agribiz Africa — Premium Seeds, Fertilizers & Farm Support Ghana',
      seeds: 'Premium Seeds Ghana – High Yield Maize, Rice & Vegetable Seeds | Agribiz Africa',
      fertilizer: 'Best Fertilizers in Ghana – NPK, Urea & Organic Options | Agribiz Africa',
      consulting: 'Farm Consulting Ghana – Expert Agricultural Advisory Services | Agribiz Africa',
      blog: 'Farming Insights & Tips – Agribiz Africa Blog'
    };
    document.title = titles[currentView];
    
    // Scroll to top when navigating to any page view
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleArticleClick = (slug: string) => {
    const article = getBlogPostBySlug(slug);
    if (article) {
      setSelectedArticle(article);
      // Update URL without triggering hashchange
      window.history.pushState(null, '', `#blog/${slug}`);
    }
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    window.history.pushState(null, '', '#blog');
  };

  const handleReadAnother = (slug: string) => {
    const article = getBlogPostBySlug(slug);
    if (article) {
      setSelectedArticle(article);
      window.history.pushState(null, '', `#blog/${slug}`);
      window.scrollTo(0, 0);
    }
  };

  // Render appropriate view with Suspense for lazy-loaded components
  const renderContent = () => {
    switch (currentView) {
      case 'seeds':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <SeedsPage />
          </Suspense>
        );
      case 'fertilizer':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <FertilizerPage />
          </Suspense>
        );
      case 'consulting':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <ConsultingPage />
          </Suspense>
        );
      case 'blog':
        return (
          <Suspense fallback={<LoadingFallback />}>
            <BlogSection onArticleClick={handleArticleClick} />
            <WhatsAppChannel />
            <Contact />
            <Footer />
          </Suspense>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <TrustSection />
            <Suspense fallback={<LoadingFallback />}>
              <About />
              <Services />
              <Products />
              <Testimonials />
              <LeadCapture />
              <FAQ />
              <BlogSection onArticleClick={handleArticleClick} />
              <OurWork />
              <WhatsAppChannel />
              <Contact />
              <Footer />
            </Suspense>
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        {renderContent()}
        <Suspense fallback={null}>
          <MobileStickyCTA />
          <WhatsAppFloat />
        </Suspense>
        
        {/* Blog Article Modal */}
        {selectedArticle && (
          <Suspense fallback={<LoadingFallback />}>
            <BlogArticle
              post={selectedArticle}
              onClose={handleCloseArticle}
              onReadAnother={handleReadAnother}
            />
          </Suspense>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;