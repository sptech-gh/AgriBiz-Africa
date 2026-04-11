import { useState } from 'react';
import { Send, User, Phone, Mail, ChevronDown, Loader2, CheckCircle } from 'lucide-react';

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    farmingInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    // Show success state
    setIsSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setFormData({ fullName: '', phone: '', email: '', farmingInterest: '' });
      setIsSubmitting(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 animate-fade-in-up">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Request a Free Consultation
            </h2>
            <p className="text-gray-600 text-lg">
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
              disabled={isSubmitting || isSubmitted}
              className={`w-full font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-teal-600 hover:bg-teal-700 text-white'
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="h-5 w-5" />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Request Consultation
                </>
              )}
            </button>

            <p className="text-sm text-gray-500 text-center">
              By submitting, you agree to be contacted via WhatsApp. We respect your privacy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
