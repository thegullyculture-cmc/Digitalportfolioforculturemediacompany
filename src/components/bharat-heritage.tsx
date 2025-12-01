import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BharatHeritageProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
    pattern?: string;
  };
}

const coins = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1643823062941-e61f7fa6c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwaW5kaWFuJTIwZ29sZCUyMGNvaW5zfGVufDF8fHx8MTc2MzcyODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Ancient Gold Coins",
    description: "Pure gold coins from ancient Indian kingdoms showcasing exceptional craftsmanship and intricate designs.",
    dynasty: "Various Kingdoms",
    period: "300 BCE - 600 CE",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWdoYWwlMjBlbXBpcmUlMjBjb2luc3xlbnwxfHx8fDE3NjM3NTM3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Mughal Empire",
    description: "Intricate coins featuring Persian and Indian artistic fusion, representing cosmopolitan culture.",
    dynasty: "Mughal Empire",
    period: "1526 - 1857 CE",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1645690364326-1f80098eca66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndXB0YSUyMGR5bmFzdHklMjBjb2luc3xlbnwxfHx8fDE3NjM3NTM3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Gupta Dynasty",
    description: "Golden Age of India - advanced metallurgy and artistic excellence that influenced Asia.",
    dynasty: "Gupta Empire",
    period: "320 - 550 CE",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1642062171116-6b5d4eb924e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXVyeWFuJTIwZW1waXJlJTIwY29pbnN8ZW58MXx8fHwxNzYzNzUzNzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Mauryan Coins",
    description: "Punch-marked silver from Emperor Ashoka's reign, earliest standardized currency.",
    dynasty: "Mauryan Empire",
    period: "322 - 185 BCE",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1657214005798-86b35114fc0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwaW5kaWFuJTIwY29pbnN8ZW58MXx8fHwxNzYzNzUyNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Indo-Greek",
    description: "Bilingual coins reflecting Greek-Indian cultural exchange and civilization fusion.",
    dynasty: "Indo-Greek Kingdom",
    period: "180 BCE - 10 CE",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1643823062941-e61f7fa6c725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwaW5kaWFuJTIwZ29sZCUyMGNvaW5zfGVufDF8fHx8MTc2MzcyODIyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Chola Dynasty",
    description: "South Indian maritime power's currency that facilitated Indian Ocean trade.",
    dynasty: "Chola Empire",
    period: "300 BCE - 1279 CE",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1670602328279-82c100b3dfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWdoYWwlMjBlbXBpcmUlMjBjb2luc3xlbnwxfHx8fDE3NjM3NTM3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Vijayanagara",
    description: "Gold pagodas from the empire of prosperity, South India's economic golden age.",
    dynasty: "Vijayanagara",
    period: "1336 - 1646 CE",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1645690364326-1f80098eca66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndXB0YSUyMGR5bmFzdHklMjBjb2luc3xlbnwxfHx8fDE3NjM3NTM3MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Maratha Empire",
    description: "Warrior kingdom's symbolic currency representing military prowess.",
    dynasty: "Maratha Empire",
    period: "1674 - 1818 CE",
  },
];

export function BharatHeritage({ theme }: BharatHeritageProps) {
  const [selectedCoin, setSelectedCoin] = useState<typeof coins[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Endless auto-scroll
  const autoScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 2;
      
      // Reset to beginning when reaching end for endless effect
      if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth / 2) {
        scrollContainerRef.current.scrollLeft = 0;
      }
    }
    animationFrameRef.current = requestAnimationFrame(autoScroll);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Duplicate coins for endless scroll effect
  const duplicatedCoins = [...coins, ...coins, ...coins];

  return (
    <>
      <div className="w-full py-20 overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <h2 
            className={`text-6xl sm:text-7xl ${theme.heading} text-center mb-8 font-black uppercase`}
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '0.02em' }}
          >
            BHARAT'S LEGACY
          </h2>
          <p className={`text-center ${theme.accent} mb-8 text-xl tracking-wide font-black`}>
            Drawing inspiration from centuries of innovation and creativity
          </p>
          <p className={`text-center ${theme.accent} text-sm uppercase tracking-wider font-black`}>
            Click Coins to Read More • Endless Auto-Scroll
          </p>
        </div>

        {/* Curved Grid with Endless Scrolling */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden overflow-y-hidden hide-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
              {duplicatedCoins.map((coin, index) => (
                <button
                  key={`${coin.id}-${index}`}
                  onClick={() => setSelectedCoin(coin)}
                  className={`flex-shrink-0 group relative ${theme.button} rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl`}
                  style={{ 
                    width: '300px', 
                    height: '350px',
                    transform: `perspective(1000px) rotateY(${Math.sin(index * 0.5) * 5}deg)`
                  }}
                >
                  <div className="w-full h-full">
                    <ImageWithFallback
                      src={coin.image}
                      alt={coin.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5">
                    <div className={`bg-white text-gray-900 inline-block px-3 py-1 rounded-full text-xs mb-2 uppercase tracking-widest font-black`}>
                      {coin.dynasty}
                    </div>
                    <h3 
                      className="text-white text-xl mb-1 font-black uppercase"
                      style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                    >
                      {coin.title}
                    </h3>
                    <p className="text-white/80 text-xs italic font-bold">
                      {coin.period}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Coin Detail Modal */}
      {selectedCoin && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 overflow-y-auto"
          onClick={() => setSelectedCoin(null)}
        >
          <div 
            className={`${theme.button} rounded-3xl max-w-4xl w-full my-8 relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCoin(null)}
              className="absolute top-6 right-6 text-white hover:scale-110 transition-transform z-10 bg-black/50 rounded-full p-2"
            >
              <X size={28} />
            </button>
            
            <div className="p-8 md:p-12">
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                <ImageWithFallback
                  src={selectedCoin.image}
                  alt={selectedCoin.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="bg-white text-gray-900 inline-block px-4 py-2 rounded-full text-xs mb-4 uppercase tracking-widest font-black">
                {selectedCoin.dynasty}
              </div>
              <h2 
                className={`${theme.heading} text-5xl mb-4 font-black uppercase`}
                style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
              >
                {selectedCoin.title}
              </h2>
              <p className={`${theme.accent} text-lg mb-6 italic font-black`}>
                {selectedCoin.period}
              </p>
              <p className="text-white/90 text-xl leading-relaxed font-bold">
                {selectedCoin.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
