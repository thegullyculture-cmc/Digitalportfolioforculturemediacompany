import { Droplet } from "lucide-react";
import { useState } from "react";

interface ThemeSwitcherProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
  themes: string[];
  theme: {
    accent: string;
    button: string;
  };
}

export function ThemeSwitcher({ currentTheme, onThemeChange, themes, theme }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    beige: "from-amber-400 to-orange-400",
    blue: "from-blue-600 to-blue-800",
    green: "from-green-600 to-green-800",
    purple: "from-purple-600 to-purple-800",
    orange: "from-orange-500 to-orange-700",
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-end gap-2">
      {isOpen && (
        <div className="flex gap-2 mb-1">
          {themes.map((themeName) => (
            <button
              key={themeName}
              onClick={() => {
                onThemeChange(themeName);
                setIsOpen(false);
              }}
              className={`w-7 h-7 rounded-full shadow-lg hover:scale-110 transition-all border-2 ${
                currentTheme === themeName ? 'border-white' : 'border-white/30'
              } bg-gradient-to-br ${themeColors[themeName as keyof typeof themeColors]}`}
              title={themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            />
          ))}
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-lg hover:scale-110 transition-all flex items-center justify-center border-2 border-white/30"
      >
        <Droplet className="text-white" size={20} />
      </button>
    </div>
  );
}
