import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you deliver nationwide?',
      answer: 'Yes! We deliver to all regions across Ghana. Whether you are in Accra, Kumasi, Tamale, or any rural farming community, we can get quality agricultural inputs to your farm. Delivery times vary by location, typically 1-3 business days for major cities and 3-5 days for remote areas.'
    },
    {
      question: 'What crops do you support?',
      answer: 'We support a wide variety of crops including maize, rice, vegetables (tomatoes, peppers, cabbage), legumes (beans, groundnuts), cassava, yam, and cash crops like cocoa. Our team provides tailored recommendations based on your soil type, climate, and farming goals.'
    },
    {
      question: 'How do I place an order?',
      answer: 'You can place an order through multiple channels: (1) Click the WhatsApp button on our website for instant chat, (2) Call us directly at +233 24 254 4549, (3) Fill out the contact form on our website, or (4) Visit our office. Our team will confirm your order and arrange delivery.'
    },
    {
      question: 'Do you provide farming advice?',
      answer: 'Absolutely! Our expert agronomists provide free advisory services with every purchase. We offer guidance on seed selection, fertilizer application, pest management, and best farming practices. Join our QUALISEED WhatsApp channel for regular farming tips and updates.'
    },
    {
      question: 'Do you supply in bulk?',
      answer: 'Yes, we specialize in bulk supplies for commercial farms, cooperatives, and agribusinesses. Bulk orders enjoy discounted pricing and priority delivery. Contact us for a custom quote based on your volume requirements and crop type.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our products and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 ${
                openIndex === index ? 'border-teal-200' : 'border-transparent'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
