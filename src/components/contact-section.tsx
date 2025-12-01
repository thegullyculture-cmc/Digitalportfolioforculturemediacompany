import { Mail, Phone, Linkedin } from "lucide-react";

interface ContactSectionProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
  };
  onGuideMe?: () => void;
}

export function ContactSection({ theme, onGuideMe }: ContactSectionProps) {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20 max-w-5xl">
      <h1 className={`text-[10vw] sm:text-8xl leading-none font-black ${theme.heading} text-center mb-8`}>
        LET'S CONNECT
      </h1>
      <p className={`text-center ${theme.accent} text-xl mb-16 uppercase tracking-wider`}>
        Start Your Journey with Us
      </p>

      <div className="max-w-2xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className={`${theme.button} p-8 rounded-2xl`}>
            <h3 className={`text-2xl ${theme.heading} mb-6`}>Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className={theme.accent.replace("text-", "text-")} size={24} />
                <div>
                  <p className={`${theme.accent} text-sm uppercase tracking-wider mb-1`}>
                    Connect with the Team
                  </p>
                  <a 
                    href="mailto:culturemediateam@gmail.com"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    culturemediateam@gmail.com
                  </a>
                  <p className="text-white/60 text-sm mt-1">
                    For any suggestions or consultations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className={theme.accent.replace("text-", "text-")} size={24} />
                <div>
                  <p className={`${theme.accent} text-sm uppercase tracking-wider mb-1`}>
                    Company Contact
                  </p>
                  <a 
                    href="tel:+919116356899"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    +91 9116356899
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Linkedin className={theme.accent.replace("text-", "text-")} size={24} />
                <div>
                  <p className={`${theme.accent} text-sm uppercase tracking-wider mb-1`}>
                    Connect on LinkedIn
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/akshat-vyas-2970b02ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-80 transition-opacity"
                  >
                    Akshat Vyas
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`${theme.button} p-8 rounded-2xl`}>
            <p className={`${theme.heading} text-lg mb-4`}>
              "From Bharat's soil to global recognition — every SME deserves to shine."
            </p>
            <p className="text-white/80 text-sm italic">
              — Founder, Culture Media Co.
            </p>
          </div>
        </div>
      </div>

      {/* Guide Me Button */}
      {onGuideMe && (
        <div className="text-center mt-16">
          <button
            onClick={onGuideMe}
            className={`${theme.accent.replace("text-", "bg-")} text-gray-900 px-8 sm:px-12 py-4 sm:py-5 rounded-xl hover:scale-105 transition-transform font-black uppercase text-base sm:text-lg shadow-2xl border-2 border-white/20`}
          >
            Guide Me
          </button>
          <p className={`${theme.accent} text-xs sm:text-sm mt-4 font-medium`}>
            Get personalized recommendations for your business
          </p>
        </div>
      )}
    </div>
  );
}