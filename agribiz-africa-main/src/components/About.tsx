import { Target, Eye, Award, Users, Shield, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Agribiz Africa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Dedicated to transforming agriculture in Ghana through quality inputs,
            expert advisory services, and unwavering commitment to farmer success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize agriculture in Ghana, Agribiz Africa has grown 
              from a small agricultural inputs dealer to a comprehensive agricultural solutions provider. 
              We understand the challenges facing Ghanaian farmers and are committed to providing 
              innovative solutions that drive productivity and profitability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines deep agricultural expertise with modern business practices to deliver 
              exceptional value to our clients. From smallholder farmers to large agricultural enterprises, 
              we provide tailored solutions that meet diverse needs and drive sustainable growth.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in-up">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="h-7 w-7 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Our Mission</h4>
                <p className="text-xs text-gray-600">Empowering farmers with quality inputs</p>
              </div>

              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-emerald-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-7 w-7 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Our Vision</h4>
                <p className="text-xs text-gray-600">Leading agricultural transformation</p>
              </div>

              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-lime-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-7 w-7 text-lime-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Quality Assured</h4>
                <p className="text-xs text-gray-600">Premium products from trusted suppliers</p>
              </div>

              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-7 w-7 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Community First</h4>
                <p className="text-xs text-gray-600">Supporting local farming communities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-teal-600 rounded-2xl p-8 md:p-12 text-white animate-fade-in-up">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Our Core Values</h3>
            <p className="text-teal-100 max-w-2xl mx-auto">
              The fundamental principles that guide our mission and shape every interaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-semibold mb-1">Integrity</h4>
              <p className="text-sm text-teal-100">
                Honest and ethical business practices
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-semibold mb-1">Excellence</h4>
              <p className="text-sm text-teal-100">
                Quality products and services
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-semibold mb-1">Innovation</h4>
              <p className="text-sm text-teal-100">
                Embracing new technologies
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-semibold mb-1">Community</h4>
              <p className="text-sm text-teal-100">
                Supporting farmer growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;