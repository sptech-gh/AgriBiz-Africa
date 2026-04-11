import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import WhatsAppChannel from './components/WhatsAppChannel';
import LeadCapture from './components/LeadCapture';
import MobileStickyCTA from './components/MobileStickyCTA';
import BlogSection from './components/BlogSection';
import BlogArticle from './components/BlogArticle';
import About from './components/About';
import OurWork from './components/OurWork';
import { SeedsPage, FertilizerPage, ConsultingPage } from './components/SEOPages';
import { getBlogPostBySlug, BlogPost } from './data/blogData';
import { ThemeProvider } from './context/ThemeContext';

type PageView = 'home' | 'seeds' | 'fertilizer' | 'consulting' | 'blog';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  // Handle URL hash changes for SEO pages and blog articles
  useEffect(() => {
    const handleHashChange = () => {
      console.log('Hash changed to:', window.location.hash);
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
      console.log('PopState triggered, hash:', window.location.hash);
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

  // Update document title based on current view
  useEffect(() => {
    const titles: Record<PageView, string> = {
      home: 'Agribiz Africa — Premium Seeds, Fertilizers & Farm Support Ghana',
      seeds: 'Premium Seeds Ghana – High Yield Maize, Rice & Vegetable Seeds | Agribiz Africa',
      fertilizer: 'Best Fertilizers in Ghana – NPK, Urea & Organic Options | Agribiz Africa',
      consulting: 'Farm Consulting Ghana – Expert Agricultural Advisory Services | Agribiz Africa',
      blog: 'Farming Insights & Tips – Agribiz Africa Blog'
    };
    document.title = titles[currentView];
  }, [currentView]);

  const handleArticleClick = (slug: string) => {
    console.log('Opening article:', slug);
    const article = getBlogPostBySlug(slug);
    if (article) {
      setSelectedArticle(article);
      // Update URL without triggering hashchange
      window.history.pushState(null, '', `#blog/${slug}`);
      console.log('Article modal should open for:', article.title);
    } else {
      console.error('Article not found:', slug);
    }
  };

  const handleCloseArticle = () => {
    console.log('Closing article modal');
    setSelectedArticle(null);
    window.history.pushState(null, '', '#blog');
  };

  const handleReadAnother = (slug: string) => {
    console.log('Reading another article:', slug);
    const article = getBlogPostBySlug(slug);
    if (article) {
      setSelectedArticle(article);
      window.history.pushState(null, '', `#blog/${slug}`);
      window.scrollTo(0, 0);
    }
  };

  // Render appropriate view
  const renderContent = () => {
    switch (currentView) {
      case 'seeds':
        return <SeedsPage />;
      case 'fertilizer':
        return <FertilizerPage />;
      case 'consulting':
        return <ConsultingPage />;
      case 'blog':
        return (
          <>
            <BlogSection onArticleClick={handleArticleClick} />
            <WhatsAppChannel />
            <Contact />
            <Footer />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Hero />
            <TrustSection />
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
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />
        {renderContent()}
        <MobileStickyCTA />
        <WhatsAppFloat />
        
        {/* Blog Article Modal */}
        {selectedArticle && (
          <>
            {console.log('Rendering BlogArticle modal for:', selectedArticle.title)}
            <BlogArticle
              post={selectedArticle}
              onClose={handleCloseArticle}
              onReadAnother={handleReadAnother}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;