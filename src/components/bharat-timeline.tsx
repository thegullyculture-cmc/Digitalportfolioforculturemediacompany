import { ArrowRight } from "lucide-react";

interface BharatTimelineProps {
  theme: {
    accent: string;
    heading: string;
    button: string;
  };
}

const timeline = [
  { era: "3000 BCE", achievement: "Indus Valley - Urban Planning & Trade" },
  { era: "1500 BCE", achievement: "Vedic Era - Philosophy & Mathematics" },
  { era: "600 BCE", achievement: "Buddhism & Jainism - Spiritual Revolution" },
  { era: "300 BCE", achievement: "Mauryan Empire - Pan-India Governance" },
  { era: "500 CE", achievement: "Golden Age - Science, Art & Literature" },
  { era: "1200 CE", achievement: "Temple Architecture - Engineering Marvels" },
  { era: "2025 CE", achievement: "Modern Bharat - Global Innovation Hub" },
];

export function BharatTimeline({ theme }: BharatTimelineProps) {
  return (
    <div className="container mx-auto px-6 py-24 max-w-6xl">
      <h2 
        className={`text-3xl ${theme.heading === 'text-white' ? 'text-white' : theme.heading === 'text-amber-950' ? 'text-amber-950' : theme.heading} text-center mb-4 font-black uppercase tracking-tight break-words px-4`}
        style={{ 
          fontFamily: 'Impact, "Arial Black", sans-serif',
          color: theme.heading === 'text-amber-950' ? '#451a03' : undefined
        }}
      >
        Bharat's Legacy
      </h2>
      <p className={`text-center ${theme.accent} mb-10 text-xs font-medium uppercase tracking-wider`}>
        5000 Years of Civilization, Creativity & Commerce
      </p>

      <div className="relative">
        {/* Timeline Container - Horizontally Scrollable */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex items-center justify-start min-w-max gap-4 px-4">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center group">
                  <div className={`${theme.button} w-20 h-20 rounded-full flex items-center justify-center border-2 border-white/30 hover:scale-110 transition-all`}>
                    <p className={`${theme.accent} text-xs font-black text-center leading-tight`}>
                      {item.era}
                    </p>
                  </div>
                  <div className="mt-4 text-center w-32">
                    <p 
                      className={`text-[10px] font-bold leading-tight`}
                      style={{ 
                        color: theme.heading === 'text-amber-950' ? '#451a03' : 'rgba(255, 255, 255, 0.9)'
                      }}
                    >
                      {item.achievement}
                    </p>
                  </div>
                </div>
                
                {index < timeline.length - 1 && (
                  <ArrowRight className={`${theme.accent.replace('text-', 'text-')} mx-2 flex-shrink-0`} size={16} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`mt-16 max-w-3xl mx-auto text-center ${theme.accent}`}>
        <p className="text-sm font-medium leading-relaxed">
          From ancient trade routes to digital marketplaces, Bharat has always been a leader in commerce and creativity. 
          Today's D2C revolution is simply the next chapter in our timeless entrepreneurial story.
        </p>
      </div>

      {/* Scroll hint for mobile */}
      <div className="flex justify-center mt-6">
        <p className={`${theme.accent} text-xs font-bold uppercase tracking-wider opacity-60`}>
          ← Swipe to explore timeline →
        </p>
      </div>
    </div>
  );
}