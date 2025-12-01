import { useState } from "react";
import { Home, Info, Briefcase, Wrench, User, Mail, Folder, X, Menu } from "lucide-react";

interface CreativeMenuProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  theme: {
    accent: string;
    button: string;
    heading: string;
  };
}

const menuItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "founder", label: "Founder", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export function CreativeMenu({ currentSection, onSectionChange, theme }: CreativeMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-6 right-6 z-50 ${theme.button} w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg border border-white/20`}
        aria-label="Menu"
      >
        {isOpen ? <X className="text-white" size={20} /> : <Menu className="text-white" size={20} />}
      </button>

      {/* Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <div className="text-center" onClick={(e) => e.stopPropagation()}>
            <h2 
              className={`${theme.heading} text-3xl mb-8 font-black uppercase tracking-wider`}
              style={{ fontFamily: '"Courier New", monospace', letterSpacing: '0.2em' }}
            >
              Navigate
            </h2>
            <div className="space-y-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-4 px-8 py-4 rounded-lg transition-all hover:scale-105 w-64 ${
                      currentSection === item.id
                        ? `${theme.button} border-2 border-white/40`
                        : "bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    <Icon 
                      className={currentSection === item.id ? theme.accent.replace("text-", "text-") : "text-white/70"} 
                      size={18}
                    />
                    <span 
                      className={`${currentSection === item.id ? theme.accent : "text-white"} font-bold uppercase tracking-widest text-sm`}
                      style={{ fontFamily: '"Courier New", monospace' }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}