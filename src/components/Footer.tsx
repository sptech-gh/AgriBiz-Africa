import { Facebook, Phone, Mail, MapPin, Leaf } from 'lucide-react';

const Footer = () => {
  const navigateToSection = (sectionId: string) => {
    // Navigate to home and scroll to section
    window.location.hash = '';
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/Agribiz logo.jpg" 
                alt="Agribiz Africa" 
                className="h-16 md:h-20 w-auto transition-all duration-300"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering Ghanaian farmers with quality agricultural inputs and expert financing advisory services. 
              Together, we're building a sustainable agricultural future.
            </p>
            <div className="flex items-center space-x-2 text-lime-400">
              <Leaf className="h-5 w-5" />
              <span className="font-semibold">Food for All</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" onClick={() => navigateToSection('home')} className="text-gray-300 hover:text-teal-400 transition-colors">Home</a></li>
              <li><button onClick={() => navigateToSection('about')} className="text-gray-300 hover:text-teal-400 transition-colors">About Us</button></li>
              <li><button onClick={() => navigateToSection('services')} className="text-gray-300 hover:text-teal-400 transition-colors">Services</button></li>
              <li><button onClick={() => navigateToSection('products')} className="text-gray-300 hover:text-teal-400 transition-colors">Products</button></li>
              <li><a href="#blog" onClick={(e) => { e.preventDefault(); window.location.hash = 'blog'; }} className="text-gray-300 hover:text-teal-400 transition-colors">Farming Blog</a></li>
              <li><button onClick={() => navigateToSection('contact')} className="text-gray-300 hover:text-teal-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Products & Resources - Matches Products Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products & Resources</h3>
            <ul className="space-y-3">
              {/* Seeds & Planting Materials */}
              <li className="text-teal-400 font-medium">Seeds & Planting</li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Hybrid Maize Seeds</button></li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Rice Varieties</button></li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Vegetable Seeds</button></li>
              
              {/* Fertilizers & Nutrients */}
              <li className="text-teal-400 font-medium mt-3">Fertilizers</li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">NPK Fertilizers</button></li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Organic Compost</button></li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Liquid Fertilizers</button></li>
              
              {/* Crop Protection */}
              <li className="text-teal-400 font-medium mt-3">Crop Protection</li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Insecticides</button></li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Herbicides</button></li>
              
              {/* Farm Equipment */}
              <li className="text-teal-400 font-medium mt-3">Farm Equipment</li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Irrigation Systems</button></li>
              <li className="pl-3"><button onClick={() => navigateToSection('products')} className="text-gray-400 hover:text-teal-400 transition-colors text-sm">Hand Tools</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Emmanuel Estate Junction, Adjacent to the White, off the Akosombo Road, Accra, Ghana
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300">+233 24 254 4549</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-teal-400 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <div className="text-gray-300 text-sm">info@agribiz.africa</div>
                  <div className="text-gray-300 text-sm">sales@agribiz.africa</div>
                  <div className="text-gray-300 text-sm">support@agribiz.africa</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="h-5 w-5 text-teal-400" />
                <a 
                  href="https://www.facebook.com/agribizafricaltd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  @agribizafricaltd
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Agribiz Africa Ltd. All rights reserved. Powered by SPtech Solutions.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;