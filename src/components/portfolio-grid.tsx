import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { FileText, MessageCircle, X, Sparkles } from "lucide-react";

interface PortfolioGridProps {
  images: string[];
  onGuideMe?: () => void;
  theme?: {
    accent: string;
    button: string;
    heading: string;
  };
}

export function PortfolioGrid({ images, onGuideMe, theme }: PortfolioGridProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="space-y-8">
      <div className="relative flex justify-center items-center h-80 max-w-3xl mx-auto">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute w-52 h-64 rounded-lg overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            dragElastic={0.5}
            dragTransition={{ 
              bounceStiffness: 300, 
              bounceDamping: 20,
              power: 0.2
            }}
            whileDrag={{
              scale: 1.15,
              rotate: index % 2 === 0 ? -8 : 8,
              zIndex: 50,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              zIndex: 40,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
              }
            }}
            initial={{
              x: index === 0 ? -100 : index === 2 ? 100 : 0,
              y: index === 1 ? -20 : 0,
              rotate: index === 0 ? -12 : index === 2 ? 12 : 0,
              scale: 1,
              zIndex: index === 1 ? 30 : 20
            }}
            animate={{
              x: index === 0 ? -100 : index === 2 ? 100 : 0,
              y: index === 1 ? -20 : 0,
              rotate: index === 0 ? -12 : index === 2 ? 12 : 0,
              scale: 1,
              zIndex: index === 1 ? 30 : 20
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              restDelta: 0.001,
              mass: 0.8
            }}
            style={{
              transformOrigin: 'center center',
              filter: index === 1 ? 'brightness(1.1)' : 'brightness(0.95)'
            }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            <ImageWithFallback
              src={image}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-full object-cover pointer-events-none select-none"
            />
          </motion.div>
        ))}
      </div>

      {/* Guide Me Button */}
      {onGuideMe && theme && (
        <div className="flex justify-center">
          <button
            onClick={onGuideMe}
            className={`${theme.button} px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg border-2 border-white/20`}
          >
            <span className={`${theme.accent} font-black uppercase tracking-wider text-sm`}>
              Guide Me
            </span>
          </button>
        </div>
      )}
    </div>
  );
}