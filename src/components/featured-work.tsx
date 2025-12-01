import imgOfflimits from "figma:asset/5d11137b1630d949bf4b5019929259e76b34244f.png";
import imgSrbEstates from "figma:asset/8d5ab5f3bece78fbd12a49a448dcb72cdbf4ddbb.png";
import imgIceSpice from "figma:asset/1c22de8879cbe61e4cbaa8abece48f5b61d92a43.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeaturedWorkProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
  };
}

const workItems = [
  { id: 1, image: imgSrbEstates, title: "SRB Estates", description: "Premium real estate brand identity" },
  { id: 2, image: imgOfflimits, title: "Off Limits", description: "Bold streetwear brand strategy" },
  { id: 3, image: imgIceSpice, title: "Ice & Spice", description: "Modern F&B brand design" },
];

export function FeaturedWork({ theme }: FeaturedWorkProps) {
  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl">
      <h2 
        className={`text-3xl md:text-3xl ${theme.heading} text-center mb-4 font-black uppercase tracking-tight break-words px-4`}
        style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
      >
        Featured Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {workItems.map((item) => (
          <div
            key={item.id}
            className="group relative"
          >
            <div className="w-44 h-56 rounded-lg overflow-hidden shadow-xl hover:scale-105 transition-all duration-300">
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h3 
                  className="text-white text-xs font-black uppercase"
                  style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-white/90 text-[10px] font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pitch Section */}
      <div className={`${theme.button} rounded-lg p-6 max-w-3xl mx-auto border border-white/20`}>
        <h3 
          className={`${theme.heading} text-2xl mb-3 font-black uppercase text-center`}
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
        >
          Transform Your Brand Story
        </h3>
        <p className={`${theme.heading} text-center text-sm leading-relaxed mb-4 font-medium`}>
          At Culture Media Co., we don't just create designs — we architect brand experiences that resonate with India's ambitious spirit. 
          From strategic positioning to visual storytelling, we elevate SMEs and D2C brands to compete on the global stage.
        </p>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className={`${theme.accent} text-xl font-black`}>12+</p>
            <p className={`${theme.heading} text-[10px] font-bold uppercase`}>Brands Built</p>
          </div>
          <div>
            <p className={`${theme.accent} text-xl font-black`}>5+</p>
            <p className={`${theme.heading} text-[10px] font-bold uppercase`}>Years Experience</p>
          </div>
          <div>
            <p className={`${theme.accent} text-xl font-black`}>100%</p>
            <p className={`${theme.heading} text-[10px] font-bold uppercase`}>Bharat First</p>
          </div>
        </div>
      </div>
    </div>
  );
}