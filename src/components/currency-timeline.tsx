import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CurrencyTimelineProps {
  theme: {
    accent: string;
    heading: string;
    button: string;
  };
}

const currencies = [
  {
    id: 1,
    era: "600 BCE",
    name: "Punch-Marked Coins",
    description: "Silver coins with symbols punched on them, used during Mahajanapadas period",
    image: "https://images.unsplash.com/photo-1657214005798-86b35114fc0b?w=800"
  },
  {
    id: 2,
    era: "320 CE",
    name: "Gupta Gold Dinars",
    description: "Pure gold coins featuring deities and rulers, peak of ancient Indian coinage",
    image: "https://images.unsplash.com/photo-1625563089394-1f74158c199f?w=800"
  },
  {
    id: 3,
    era: "1526 CE",
    name: "Mughal Rupiya",
    description: "Silver rupee standardized by Sher Shah Suri, adopted by Mughals",
    image: "https://images.unsplash.com/photo-1665888111461-6c98379622ab?w=800"
  },
  {
    id: 4,
    era: "1862 CE",
    name: "British India Rupee",
    description: "Paper currency introduced by British, portrait of Queen Victoria",
    image: "https://images.unsplash.com/photo-1509602742943-0bf62bd36166?w=800"
  },
  {
    id: 5,
    era: "1950 CE",
    name: "Republic India Notes",
    description: "First currency of independent India with Ashoka Pillar emblem",
    image: "https://images.unsplash.com/photo-1509602742943-0bf62bd36166?w=800"
  },
  {
    id: 6,
    era: "2016 CE",
    name: "New Series Currency",
    description: "Modern polymer notes with enhanced security features and Mahatma Gandhi",
    image: "https://images.unsplash.com/photo-1565514160046-79d8ca6510b6?w=800"
  },
  {
    id: 7,
    era: "2025 CE",
    name: "Digital Rupee (CBDC)",
    description: "India's central bank digital currency for the future of finance",
    image: "https://images.unsplash.com/photo-1641580559176-d4b2b44863b4?w=800"
  }
];

export function CurrencyTimeline({ theme }: CurrencyTimelineProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<typeof currencies[0] | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame: number;
    let lastTime = Date.now();

    const autoScroll = () => {
      if (!isDragging && !selectedCurrency) {
        const currentTime = Date.now();
        const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

        const scrollSpeed = 0.15; // Slowed down from 0.5 to 0.15
        const newScroll = scrollContainer.scrollLeft + (scrollSpeed * deltaTime);
        
        if (newScroll >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = newScroll;
        }
        
        setScrollPosition(scrollContainer.scrollLeft);
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging, selectedCurrency]);

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = container.scrollWidth / currencies.length;
      container.scrollLeft = itemWidth * index;
      setIsDragging(true);
      setTimeout(() => setIsDragging(false), 2000);
    }
  };

  const totalWidth = scrollRef.current?.scrollWidth || 1;
  const visibleWidth = scrollRef.current?.clientWidth || 1;
  const progress = Math.min(scrollPosition / (totalWidth - visibleWidth), 1);

  return (
    <>
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        <h3 
          className={`text-3xl ${theme.heading} text-center mb-4 font-black uppercase tracking-tight`}
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
        >
          Currency Journey
        </h3>
        <p className={`text-center ${theme.accent} mb-10 text-xs font-medium uppercase tracking-wider`}>
          2600 Years of Bharat's Economic Evolution
        </p>

        {/* Scrolling Images in Arch Layout */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setTimeout(() => setIsDragging(false), 1000)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setTimeout(() => setIsDragging(false), 1000)}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing items-end"
            style={{ scrollBehavior: isDragging ? 'smooth' : 'auto' }}
          >
            {[...currencies, ...currencies, ...currencies].map((currency, idx) => {
              const position = idx % currencies.length;
              const totalItems = currencies.length;
              const centerIndex = Math.floor(totalItems / 2);
              const distanceFromCenter = Math.abs(position - centerIndex);
              const verticalOffset = distanceFromCenter * 8;
              
              return (
                <button
                  key={`${currency.id}-${idx}`}
                  onClick={() => setSelectedCurrency(currency)}
                  className="flex-shrink-0 group"
                  style={{ marginTop: `${verticalOffset}px` }}
                >
                  <div className="w-36 h-24 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all border-2 border-white/20">
                    <ImageWithFallback
                      src={currency.image}
                      alt={currency.name}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className={`${theme.accent} text-[10px] font-black uppercase`}>
                      {currency.era}
                    </p>
                    <p className="text-white/90 text-[9px] font-bold mt-1">
                      {currency.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Arch Progress Line with Dots */}
        <div className="mt-8 max-w-4xl mx-auto relative">
          <svg viewBox="0 0 800 100" className="w-full h-20">
            {/* Arch Path */}
            <path
              d="M 50 80 Q 400 20, 750 80"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              fill="none"
            />
            
            {/* Progress Indicator */}
            {currencies.map((currency, index) => {
              const totalDots = currencies.length;
              const angle = (index / (totalDots - 1)) * Math.PI;
              const x = 50 + (700 * index / (totalDots - 1));
              const y = 80 - (60 * Math.sin(angle));
              
              return (
                <circle
                  key={currency.id}
                  cx={x}
                  cy={y}
                  r="6"
                  fill={`rgba(255,255,255,${progress >= index / totalDots ? 0.9 : 0.3})`}
                  className="cursor-pointer hover:r-8 transition-all"
                  onClick={() => handleDotClick(index)}
                />
              );
            })}
          </svg>
          
          <p className={`text-center ${theme.accent} text-xs font-medium mt-2 opacity-60`}>
            Tap dots to navigate · Swipe to explore
          </p>
        </div>
      </div>

      {/* Currency Detail Modal */}
      {selectedCurrency && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCurrency(null)}
        >
          <div 
            className={`${theme.button} rounded-2xl max-w-2xl w-full relative border-2 border-white/20`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCurrency(null)}
              className="absolute top-4 right-4 text-white hover:scale-110 transition-transform z-10 bg-black/50 rounded-full p-2"
            >
              <X size={20} />
            </button>
            
            <div className="p-8">
              <div className="rounded-xl overflow-hidden shadow-2xl mb-6">
                <ImageWithFallback
                  src={selectedCurrency.image}
                  alt={selectedCurrency.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className={`${theme.accent} text-sm font-black uppercase mb-2 tracking-wider`}>
                {selectedCurrency.era}
              </div>

              <h2 
                className={`${theme.heading} text-3xl mb-4 font-black uppercase`}
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                {selectedCurrency.name}
              </h2>
              
              <p className="text-white/90 text-base leading-relaxed font-medium">
                {selectedCurrency.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}