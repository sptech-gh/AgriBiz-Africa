import React from 'react';
import { Check, Phone, MessageCircle, Truck, Award, Users, Sprout } from 'lucide-react';

// SEO Landing Page for Seeds
export const SeedsPage: React.FC = () => {
  const openWhatsApp = () => {
    const phone = '233242544549';
    const message = 'Hi, I want to buy quality seeds in Ghana. Please assist me.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+233242544549', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-emerald-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Seeds Ghana – High Yield Maize, Rice & Vegetable Seeds
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Buy certified seeds in Ghana from trusted suppliers. Hybrid maize seeds, quality rice varieties, and vegetable seeds with nationwide delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Order Seeds on WhatsApp
            </button>
            <button
              onClick={makeCall}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call: +233 24 254 4549
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Quality Seeds for Ghanaian Farmers
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Finding the right seeds is the foundation of successful farming in Ghana. At Agribiz Africa, we supply certified, high-yielding seeds specifically selected for Ghana's diverse agro-ecological zones. From hybrid maize varieties that deliver 6-8 tonnes per hectare to drought-resistant rice seeds and premium vegetable varieties, we have everything you need to maximize your farm's productivity.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Maize Seeds for High Yield Farming
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Maize is Ghana's most important staple crop, and choosing the right variety can mean the difference between average and exceptional yields. We stock popular hybrid varieties including Obaatanpa, Pioneer P3812W, and P3506 – all proven to perform well in Ghanaian conditions. These varieties offer excellent drought tolerance, disease resistance, and early maturity (90-100 days), making them ideal for both major and minor growing seasons.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Rice Seeds for Maximum Production
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            For rice farmers in the Northern, Volta, and other suitable regions, we supply Nerica and Jasmine varieties known for their high yields and excellent grain quality. Our rice seeds are carefully selected for their performance in both upland and lowland conditions common across Ghana's rice-growing areas.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Vegetable Seeds for Commercial Farming
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Commercial vegetable farmers rely on our quality seeds for tomatoes, peppers, cabbage, lettuce, okra, and garden eggs. We source from international breeders to ensure you get varieties with high germination rates, disease resistance, and excellent market appeal.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 my-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Buy Seeds from Agribiz Africa?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Certified seeds with 85%+ germination rates</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Expert agronomic advice on variety selection</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Nationwide delivery to all regions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Competitive wholesale and retail pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Trusted by 1000+ Ghanaian farmers</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            How to Order Seeds in Ghana
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Ordering from Agribiz Africa is simple. Click the WhatsApp button to chat with our team, call us directly, or visit our store. We'll help you select the right varieties for your location, calculate quantities needed, and arrange prompt delivery to your farm anywhere in Ghana.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Ready to Buy Quality Seeds?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of Ghanaian farmers who trust Agribiz Africa for certified seeds and expert advice. Get the right seeds for your farm and start maximizing your yields today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </button>
            <button
              onClick={makeCall}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call: +233 24 254 4549
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// SEO Landing Page for Fertilizer
export const FertilizerPage: React.FC = () => {
  const openWhatsApp = () => {
    const phone = '233242544549';
    const message = 'Hi, I want to buy fertilizer in Ghana. Please assist me.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+233242544549', '_blank');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Best Fertilizers in Ghana – NPK, Urea & Organic Options
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Buy quality fertilizers for maximum crop yield. NPK 15-15-15, urea, sulfate of ammonia, and organic options with expert application advice and nationwide delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Order Fertilizer on WhatsApp
            </button>
            <button
              onClick={makeCall}
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call: +233 24 254 4549
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Quality Fertilizers for Maximum Yields
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Fertilizer is essential for maximizing crop yields in Ghana's diverse agricultural landscape. At Agribiz Africa, we supply a comprehensive range of fertilizers including NPK compounds, nitrogen fertilizers, phosphates, and potassium sources – all formulated to meet the specific nutritional needs of Ghana's major crops.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            NPK Fertilizers for Balanced Nutrition
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Our NPK fertilizers provide the three essential macronutrients in balanced formulations. NPK 15-15-15 is perfect for general crop production and serves as an excellent basal dressing for maize, rice, and vegetables. For crops needing more nitrogen during vegetative growth, we recommend NPK 23-10-5. Root crops and fruiting vegetables benefit from NPK 12-12-17 with its higher potassium content for quality development.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Nitrogen Fertilizers for Vigorous Growth
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Urea (46% nitrogen) is the most concentrated nitrogen source available and perfect for top dressing cereal crops like maize and rice. For sulfur-deficient soils or flooded rice fields, sulfate of ammonia provides both nitrogen and essential sulfur with lower volatilization risk than urea.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Phosphate and Potassium Fertilizers
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Single Super Phosphate (SSP) and Triple Super Phosphate (TSP) provide essential phosphorus for root development, especially important during early growth stages. Muriate of Potash (MOP) and Sulfate of Potash (SOP) supply potassium critical for fruit development, disease resistance, and overall crop quality – particularly important for export-oriented production.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Organic Fertilizer Options
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            For organic farming systems or farmers building long-term soil health, we supply quality compost, poultry manure, and bone meal. These organic options improve soil structure, water retention, and provide slow-release nutrition that feeds crops throughout the growing season.
          </p>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 my-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Crop-Specific Fertilizer Programs
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Maize</h4>
                <p className="text-sm text-gray-600">NPK 15-15-15 + Urea top dressing</p>
                <p className="text-sm text-teal-600 font-medium mt-1">40-60% yield increase</p>
              </div>
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Rice</h4>
                <p className="text-sm text-gray-600">NPK basal + Split urea application</p>
                <p className="text-sm text-teal-600 font-medium mt-1">35-50% yield increase</p>
              </div>
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Vegetables</h4>
                <p className="text-sm text-gray-600">NPK 15-15-15 + Regular side dressing</p>
                <p className="text-sm text-teal-600 font-medium mt-1">50-70% yield increase</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Expert Fertilizer Advice Included
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Every fertilizer purchase from Agribiz Africa includes free agronomic advice. Our experts help you determine the right products, calculate application rates, and schedule applications for maximum efficiency. We consider your soil type, target crop, and budget to create a customized fertilization program that delivers results.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get Your Custom Fertilizer Program
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Stop guessing and start maximizing. Our agronomists will design a fertilizer program specific to your crops and soil conditions. Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Consultation
            </button>
            <button
              onClick={makeCall}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call for Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// SEO Landing Page for Farm Consulting
export const ConsultingPage: React.FC = () => {
  const openWhatsApp = () => {
    const phone = '233242544549';
    const message = 'Hi, I need farm consulting services in Ghana. Please assist me.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const makeCall = () => {
    window.open('tel:+233242544549', '_blank');
  };

  const services = [
    {
      icon: Sprout,
      title: 'Crop Planning & Management',
      description: 'Expert guidance on crop selection, rotation planning, and season optimization for maximum yields.'
    },
    {
      icon: Award,
      title: 'Soil Analysis & Fertilizer Programs',
      description: 'Professional soil testing and customized fertilization plans based on your field conditions.'
    },
    {
      icon: Users,
      title: 'Pest & Disease Management',
      description: 'Integrated pest management strategies to protect your crops and maximize quality yields.'
    },
    {
      icon: Truck,
      title: 'Post-Harvest & Marketing',
      description: 'Advice on storage, processing, and connecting with buyers for better farmgate prices.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Farm Consulting Ghana – Expert Agricultural Advisory Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Professional farm consulting services for Ghanaian farmers. Get expert advice on crop management, fertilizer programs, pest control, and maximizing your yields.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Book Free Consultation
            </button>
            <button
              onClick={makeCall}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call: +233 24 254 4549
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Farm Consulting Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive agricultural advisory services designed to help Ghanaian farmers achieve record yields and sustainable profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="bg-teal-100 dark:bg-teal-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="h-7 w-7 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Why Ghanaian Farmers Need Professional Consulting
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Ghanaian agriculture is evolving rapidly, with new technologies, improved varieties, and changing market demands. Many farmers are achieving only 30-40% of their crops' genetic yield potential due to knowledge gaps in best practices. Professional farm consulting bridges this gap, providing personalized guidance that can double or triple farm productivity.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Free Initial Consultation
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Every farmer who contacts Agribiz Africa receives a free initial consultation. Our agronomists discuss your farming goals, current challenges, and land conditions to provide immediate actionable advice. There's no obligation – we're committed to supporting Ghana's agricultural sector through knowledge sharing.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Consulting for All Farm Sizes
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Whether you manage 2 acres or 200, our consulting services scale to meet your needs. Smallholder farmers benefit from cost-effective solutions and group advisory programs, while commercial operations receive detailed farm plans, precision agriculture guidance, and dedicated account management.
          </p>

          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 my-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What to Expect from Our Consulting
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">On-site farm assessment and soil sampling</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Customized crop and fertilizer recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Pest scouting and management plans</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Season-long support via WhatsApp/phone</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Post-harvest handling and marketing advice</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Success Stories from Our Consulting
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Farmers who have implemented our recommendations consistently report 50-100% yield increases. From maize farmers in Ejura doubling their production to vegetable growers in Techiman accessing premium markets through quality improvements, our consulting delivers measurable results. Many clients see their investment in advisory services pay for itself within the first growing season.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-8">
            Ongoing Support Through Agribiz Hub
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Beyond one-on-one consulting, we offer ongoing support through our Agribiz Hub WhatsApp channel. Farmers receive weekly tips, market price updates, weather advisories, and early warnings about pest outbreaks. This community of 1000+ farmers shares knowledge and experiences, creating a supportive network for agricultural success in Ghana.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Book Your Free Farm Consultation Today
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Don't leave your farm's potential untapped. Our agronomists are ready to visit your farm, analyze your conditions, and create a personalized plan for maximum yields. The consultation is free, and the advice could transform your farming operation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp: Book Consultation
            </button>
            <button
              onClick={makeCall}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call: +233 24 254 4549
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default { SeedsPage, FertilizerPage, ConsultingPage };
