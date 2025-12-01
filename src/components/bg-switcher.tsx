import { Sparkles } from "lucide-react";
import { useState } from "react";

interface BgSwitcherProps {
  currentBg: string;
  onBgChange: (bg: string) => void;
  backgrounds: string[];
}

export function BgSwitcher({ currentBg, onBgChange, backgrounds }: BgSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const bgStyles = {
    geometric: {
      name: "Geometric",
      color: "from-blue-500 to-purple-600"
    },
    waves: {
      name: "Waves",
      color: "from-cyan-500 to-blue-600"
    },
    dots: {
      name: "Dots",
      color: "from-pink-500 to-orange-500"
    },
    grid: {
      name: "Grid",
      color: "from-green-500 to-teal-600"
    },
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 flex items-end gap-2">
      {isOpen && (
        <div className="flex gap-2 mb-1">
          {backgrounds.map((bg) => (
            <button
              key={bg}
              onClick={() => {
                onBgChange(bg);
                setIsOpen(false);
              }}
              className={`w-7 h-7 rounded-full shadow-lg hover:scale-110 transition-all border-2 ${
                currentBg === bg ? 'border-white' : 'border-white/30'
              } bg-gradient-to-br ${bgStyles[bg as keyof typeof bgStyles].color}`}
              title={bgStyles[bg as keyof typeof bgStyles].name}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:scale-110 transition-all flex items-center justify-center border-2 border-white/30"
      >
        <Sparkles className="text-white" size={20} />
      </button>
    </div>
  );
}
