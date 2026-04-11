import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about our products and services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border ${
                openIndex === index ? 'border-teal-200' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 py-4 text-left flex items-center justify-between focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
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
                <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3 text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-3">Still have questions?</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
          >
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
