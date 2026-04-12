import { Phone, FileText, Users } from 'lucide-react';

const MobileStickyCTA = () => {
  const openWhatsAppChannel = () => {
    window.open('https://whatsapp.com/channel/0029VaF9ceT4IBhEZAVEsm12', '_blank');
  };

  const makeCall = () => {
    window.open('tel:+233242544549', '_blank');
  };

  const scrollToQuote = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 shadow-lg md:hidden">
      <div className="flex items-center justify-around py-2 px-2">
        {/* WhatsApp Channel Button */}
        <button
          onClick={openWhatsAppChannel}
          className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg bg-green-600 active:bg-green-700 transition-colors"
          aria-label="Join our WhatsApp Channel"
          title="Join our WhatsApp Channel for updates"
        >
          <Users className="h-5 w-5 text-white" />
          <span className="text-xs font-medium text-white">Channel</span>
        </button>

        {/* Call Now Button */}
        <button
          onClick={makeCall}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg bg-teal-600 active:bg-teal-700 transition-colors"
        >
          <Phone className="h-5 w-5 text-white" />
          <span className="text-xs font-medium text-white">Call Now</span>
        </button>

        {/* Get Quote Button */}
        <button
          onClick={scrollToQuote}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-700 active:bg-gray-200 dark:active:bg-slate-600 border border-gray-300 dark:border-slate-600 transition-colors"
        >
          <FileText className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Get Quote</span>
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
