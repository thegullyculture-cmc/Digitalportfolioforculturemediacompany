import { X, FileText, MessageCircle, Sparkles, ChevronRight } from "lucide-react";

interface GuideMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
  };
}

export function GuideMeModal({ isOpen, onClose, theme }: GuideMeModalProps) {
  if (!isOpen) return null;

  const handleFormClick = () => {
    window.open("https://forms.gle/sYSh66opuKeQ1zk7A", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("http://wa.me/919116356899", "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative ${theme.button} rounded-3xl p-6 sm:p-8 md:p-10 max-w-2xl w-full mx-auto shadow-2xl border-2 border-white/20 animate-in fade-in zoom-in duration-300`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
        >
          <X className="text-white group-hover:rotate-90 transition-transform" size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 mb-4 sm:mb-6">
            <Sparkles className="text-white" size={32} />
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-black ${theme.heading} mb-3 uppercase tracking-tight`}
            style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
            }}
          >
            2 STEPS TO PROFITS
          </h2>
          <p className={`${theme.accent} text-sm sm:text-base font-medium`}>
            Let's get your journey started!
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 sm:space-y-5 mb-8">
          {/* Step 1 */}
          <button
            onClick={handleFormClick}
            className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 rounded-2xl p-5 sm:p-6 text-left transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Step Number */}
              <div className={`${theme.accent.replace("text-", "bg-")} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <span className="text-gray-900 font-black text-xl sm:text-2xl">1</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className={theme.heading.replace("text-", "text-")} size={24} />
                  <h3 className={`${theme.heading} font-black text-lg sm:text-xl uppercase`}>
                    Fill This Greeting Form
                  </h3>
                </div>
                <p className="text-white/70 text-sm sm:text-base font-medium mb-2">
                  Share your details & requirements with us
                </p>
                <div className="flex items-center gap-2">
                  <span className={`${theme.accent} text-xs sm:text-sm font-bold uppercase`}>
                    Click to Open Form
                  </span>
                  <ChevronRight className={theme.accent.replace("text-", "text-")} size={16} />
                </div>
              </div>
            </div>
          </button>

          {/* Step 2 */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-white/40 rounded-2xl p-5 sm:p-6 text-left transition-all hover:scale-[1.02] group"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Step Number */}
              <div className={`${theme.accent.replace("text-", "bg-")} w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <span className="text-gray-900 font-black text-xl sm:text-2xl">2</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className={theme.heading.replace("text-", "text-")} size={24} />
                  <h3 className={`${theme.heading} font-black text-lg sm:text-xl uppercase`}>
                    Pin Us on WhatsApp
                  </h3>
                </div>
                <p className="text-white/70 text-sm sm:text-base font-medium mb-2">
                  Quick direct access for instant communication
                </p>
                <div className="flex items-center gap-2">
                  <span className={`${theme.accent} text-xs sm:text-sm font-bold uppercase`}>
                    Click to Open WhatsApp
                  </span>
                  <ChevronRight className={theme.accent.replace("text-", "text-")} size={16} />
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Footer Message */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className={`${theme.accent} text-base sm:text-lg font-black uppercase tracking-wide`}>
            We'll Call You Soon
          </p>
        </div>
      </div>
    </div>
  );
}