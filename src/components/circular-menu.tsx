import { useState } from "react";
import { Menu, X } from "lucide-react";

interface CircularMenuProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  theme: {
    accent: string;
    button: string;
  };
}

const menuItems = [
  { id: "home", label: "Home", angle: 0 },
  { id: "about", label: "About", angle: 60 },
  { id: "projects", label: "Projects", angle: 120 },
  { id: "services", label: "Services", angle: 180 },
  { id: "founder", label: "Founder", angle: 240 },
  { id: "contact", label: "Contact", angle: 300 },
];

export function CircularMenu({ currentSection, onSectionChange, theme }: CircularMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLabels, setShowLabels] = useState(false);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsExpanded(false);
    setShowLabels(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Main Menu Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${theme.button} shadow-2xl hover:scale-110 transition-all flex items-center justify-center border-2 border-white/30`}
        style={{ filter: 'brightness(1.2)' }}
      >
        {isExpanded ? (
          <X className="text-white" size={28} />
        ) : (
          <Menu className="text-white" size={28} />
        )}
      </button>

      {/* Menu Title */}
      <button
        onClick={() => setShowLabels(!showLabels)}
        className={`${theme.accent} text-center mt-2 text-xs font-black uppercase tracking-wider cursor-pointer hover:scale-105 transition-transform`}
      >
        {showLabels ? "Hide" : "Menu"}
      </button>

      {/* Circular Menu Items */}
      {isExpanded && (
        <div className="absolute top-0 right-0">
          {menuItems.map((item, index) => {
            const radius = 100;
            const angleRad = (item.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <button
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className={`absolute w-12 h-12 rounded-full shadow-xl hover:scale-125 transition-all ${
                  currentSection === item.id 
                    ? `${theme.accent.replace('text-', 'bg-')} text-gray-900` 
                    : 'bg-white/20 text-white backdrop-blur-md'
                } border-2 border-white/30 flex items-center justify-center font-black text-xs`}
                style={{
                  right: `${x}px`,
                  top: `${y}px`,
                  animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`
                }}
              >
                {item.label.slice(0, 1)}
              </button>
            );
          })}
        </div>
      )}

      {/* Labels Menu */}
      {showLabels && !isExpanded && (
        <div className={`absolute top-24 right-0 ${theme.button} rounded-xl p-3 shadow-2xl min-w-[150px]`}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionChange(item.id)}
              className={`${theme.accent} block w-full text-left px-4 py-2 hover:opacity-80 transition-opacity font-black text-sm ${
                currentSection === item.id ? 'underline' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
