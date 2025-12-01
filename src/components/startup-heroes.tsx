import { ImageWithFallback } from "./figma/ImageWithFallback";
import ashokaStambh from "figma:asset/f25881945f8e3da3e838b54f1b62241040f10317.png";

interface StartupHeroesProps {
  theme: {
    accent: string;
    heading: string;
    button: string;
  };
}

export function StartupHeroes({ theme }: StartupHeroesProps) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-32 max-w-6xl">
      <div className="relative max-w-5xl mx-auto">
        {/* Ashoka Stambh - Satyamev Jayate Logo - Slightly Bigger */}
        <div className="relative flex justify-center items-center mb-8 md:mb-12">
          <div className="w-36 h-36 md:w-40 md:h-40 flex items-center justify-center">
            <img
              src={ashokaStambh}
              alt="Satyamev Jayate"
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{ filter: 'brightness(1.2) contrast(1.1)' }}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-6 md:space-y-8">
          <h2 
            className={`text-3xl md:text-5xl ${theme.heading} font-black uppercase tracking-tight leading-tight px-4`}
            style={{ 
              fontFamily: '"Bebas Neue", Impact, "Arial Black", sans-serif',
              letterSpacing: '0.05em'
            }}
          >
            Witness The Journey Of <br />
            SME's Of Bharat Going Global
          </h2>
          
          <p className={`${theme.accent} text-base md:text-lg font-black uppercase tracking-widest px-4`}>
            From The Streets Of Bharat To Global Markets
          </p>
          
          <p className={`${theme.heading} text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium px-4`}>
            India's entrepreneurial revolution is here. From Peyush Bansal's Lenskart to Falguni Nayar's Nykaa, 
            from Aman Gupta's boAt to Vineeta Singh's Sugar Cosmetics — Bharat's SMEs are redefining success on the world stage. 
            At Culture Media Co., we're proud to be part of this movement, helping businesses craft their unique stories.
          </p>
        </div>
      </div>
    </div>
  );
}