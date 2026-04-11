import React, { useState } from 'react';
import { Send, User, Phone, Mail, ChevronDown } from 'lucide-react';

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    farmingInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const farmingOptions = [
    { value: '', label: 'Select your farming interest' },
    { value: 'Seeds', label: 'Seeds & Planting Materials' },
    { value: 'Fertilizer', label: 'Fertilizers & Nutrients' },
    { value: 'Farm Consulting', label: 'Farm Consulting & Advisory' },
    { value: 'Bulk Purchase', label: 'Bulk Purchase (Commercial)' },
    { value: 'Other', label: 'Other Services' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const phone = '233242544549';
    const message = `New Agribiz Lead
Name: ${formData.fullName}
Phone: ${formData.phone}
Interest: ${formData.farmingInterest}
Email: ${formData.email || 'Not provided'}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');

    // Reset form
    setTimeout(() => {
      setFormData({ fullName: '', phone: '', email: '', farmingInterest: '' });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-teal-600 to-emerald-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-fade-in-up">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Request a Free Consultation
            </h2>
            <p className="text-gray-600">
              Fill in your details and our team will contact you via WhatsApp within 24 hours
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+233 XX XXX XXXX"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Email (Optional) */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-gray-400">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Farming Interest Dropdown */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Farming Interest <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  <select
                    name="farmingInterest"
                    value={formData.farmingInterest}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none bg-white"
                  >
                    {farmingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? 'Opening WhatsApp...' : 'Request Consultation'}
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting, you agree to be contacted via WhatsApp. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
