import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import WhatsAppChannel from './components/WhatsAppChannel';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <FAQ />
      <WhatsAppChannel />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;