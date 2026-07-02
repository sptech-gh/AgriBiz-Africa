import { MessageCircle, Users, BookOpen, Sprout, ArrowRight } from 'lucide-react';

const WhatsAppChannel = () => {
  const channelUrl = 'https://whatsapp.com/channel/0029Vb7GjUw6LwHqyuALcO2P';

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-700 rounded-3xl shadow-xl overflow-hidden">
          {/* Header with WhatsApp Branding */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-semibold text-sm uppercase tracking-wider">
                WhatsApp Channel
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              {/* Left: Channel Info */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Join Agribiz Hub
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  Redefining seed access for farmers across Ghana. Get trusted seed knowledge,
                  practical farming tips, crop production guides, and updates on high-performing
                  varieties to help you grow more and grow better.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Sprout className="h-4 w-4 text-green-500 dark:text-green-400" />
                    <span>Seed Knowledge</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <BookOpen className="h-4 w-4 text-green-500 dark:text-green-400" />
                    <span>Farming Tips</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Users className="h-4 w-4 text-green-500 dark:text-green-400" />
                    <span>Farmer Community</span>
                  </div>
                </div>
              </div>

              {/* Right: CTA Button */}
              <div className="flex-shrink-0">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Join Channel</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
                  Free to join • Instant updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppChannel;
