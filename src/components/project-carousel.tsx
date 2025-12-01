import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCarouselProps {
  slides: string[];
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
  };
}

export function ProjectCarousel({ slides, theme }: ProjectCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      {/* Main Image - Smaller container to show full posters */}
      <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-contain bg-black/20"
        />
        
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${theme.button} rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110`}
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className={`absolute right-4 top-1/2 -translate-y-1/2 ${theme.button} rounded-full w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110`}
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        {/* Slide Counter */}
        <div className={`absolute bottom-6 right-6 ${theme.button} px-4 py-2 rounded-full`}>
          <span className={theme.accent}>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide
                ? `${theme.button} scale-125`
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}