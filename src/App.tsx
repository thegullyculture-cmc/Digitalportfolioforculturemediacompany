import { useState } from "react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { PortfolioGrid } from "./components/portfolio-grid";
import { ThemeSwitcher } from "./components/theme-switcher";
import { BgSwitcher } from "./components/bg-switcher";
import { CreativeMenu } from "./components/creative-menu";
import { GameModal } from "./components/game-modal";
import { GuideMeModal } from "./components/guide-me-modal";
import { AboutSection } from "./components/about-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import { ServicesSection } from "./components/services-section";
import { FounderSection } from "./components/founder-section";
import { FeaturedWork } from "./components/featured-work";
import { NewsSection } from "./components/news-section";
import { BharatTimeline } from "./components/bharat-timeline";
import { CurrencyTimeline } from "./components/currency-timeline";
import { StartupHeroes } from "./components/startup-heroes";
import { Mail, Phone, MapPin, Gamepad2 } from "lucide-react";
import imgOfflimits from "figma:asset/5d11137b1630d949bf4b5019929259e76b34244f.png";
import imgSrbEstates from "figma:asset/8d5ab5f3bece78fbd12a49a448dcb72cdbf4ddbb.png";
import imgSabarmatiSocials from "figma:asset/ae949dcb8704f066c973063f7908279fa2e4fde0.png";
import ashokaStambh from "figma:asset/f25881945f8e3da3e838b54f1b62241040f10317.png";

export default function App() {
  const [currentTheme, setCurrentTheme] = useState("blue");
  const [currentBg, setCurrentBg] = useState("geometric");
  const [currentSection, setCurrentSection] = useState("home");
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isGuideMeOpen, setIsGuideMeOpen] = useState(false);

  const themes = {
    beige: {
      bg: "from-amber-50 via-orange-50 to-yellow-50",
      accent: "text-amber-900",
      button: "bg-amber-700/90 hover:bg-amber-600",
      heading: "text-amber-950",
      subheading: "text-amber-800",
    },
    blue: {
      bg: "from-blue-700 via-blue-800 to-blue-900",
      accent: "text-yellow-300",
      button: "bg-blue-950/90 hover:bg-blue-900",
      heading: "text-white",
      subheading: "text-blue-300",
    },
    green: {
      bg: "from-green-600 via-green-700 to-green-800",
      accent: "text-lime-200",
      button: "bg-green-900/90 hover:bg-green-800",
      heading: "text-white",
      subheading: "text-green-200",
    },
    purple: {
      bg: "from-purple-600 via-purple-700 to-purple-800",
      accent: "text-yellow-200",
      button: "bg-purple-950/90 hover:bg-purple-900",
      heading: "text-white",
      subheading: "text-purple-200",
    },
    orange: {
      bg: "from-orange-500 via-orange-600 to-orange-700",
      accent: "text-yellow-100",
      button: "bg-orange-900/90 hover:bg-orange-800",
      heading: "text-white",
      subheading: "text-orange-200",
    },
  };

  const backgrounds = {
    geometric: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    waves: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 25, 50 50 T 100 50 V 100 H 0 Z' fill='%23ffffff' fill-opacity='0.08'/%3E%3C/svg%3E")`,
    dots: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
    grid: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v1H0V0zm0 20h40v1H0v-1z' fill='%23ffffff' fill-opacity='0.08'/%3E%3Cpath d='M0 0v40h1V0H0zm20 0v40h1V0h-1z' fill='%23ffffff' fill-opacity='0.08'/%3E%3C/svg%3E")`,
  };

  const theme = themes[currentTheme as keyof typeof themes];

  const renderSection = () => {
    switch (currentSection) {
      case "about":
        return <AboutSection theme={theme} />;
      case "projects":
        return <ProjectsSection theme={theme} />;
      case "contact":
        return <ContactSection theme={theme} onGuideMe={() => setIsGuideMeOpen(true)} />;
      case "services":
        return (
          <ServicesSection
            theme={theme}
            onDecideForMe={() => setIsGuideMeOpen(true)}
          />
        );
      case "founder":
        return <FounderSection theme={theme} />;
      default:
        return (
          <>
            {/* Hero Section - Spacious & Clean */}
            <div className="container mx-auto px-6 pt-24 pb-12 max-w-5xl">
              <p
                className={`text-center ${theme.accent} text-[10px] uppercase tracking-[0.4em] mb-4 font-black`}
              >
                A Consulting Agency
              </p>
              <h1
                className={`text-5xl leading-none ${theme.heading} text-center mb-4 font-black uppercase`}
                style={{
                  fontFamily:
                    'Impact, "Arial Black", sans-serif',
                  letterSpacing: "0.02em",
                }}
              >
                CULTURE MEDIA CO.
              </h1>
              <p
                className={`text-center ${theme.accent} text-base mb-3 font-bold tracking-widest uppercase`}
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                "We Make Impact Visible"
              </p>
              <p
                className={`text-center ${theme.accent} text-[10px] uppercase tracking-wider mb-16 font-medium opacity-80`}
              >
                Bharat's Ambition to Global Stage
              </p>
            </div>

            {/* Portfolio Grid - Spacious */}
            <div className="container mx-auto px-6 pb-16 max-w-5xl">
              <PortfolioGrid
                images={[
                  imgSabarmatiSocials,
                  imgSrbEstates,
                  imgOfflimits,
                ]}
                onGuideMe={() => setIsGuideMeOpen(true)}
                theme={theme}
              />
            </div>

            {/* Creative Agency Line - Spacious */}
            <div className="container mx-auto px-6 py-12 max-w-4xl text-center">
              <h2
                className={`text-2xl leading-tight ${theme.heading} mb-8 font-black uppercase tracking-tight`}
                style={{
                  fontFamily:
                    'Impact, "Arial Black", sans-serif',
                  backgroundImage: `linear-gradient(90deg, ${theme.heading.includes("white") ? "#ffffff" : "#1a1a1a"} 0%, ${theme.heading.includes("white") ? "rgba(255,255,255,0.5)" : "rgba(26,26,26,0.5)"} 50%, ${theme.heading.includes("white") ? "#ffffff" : "#1a1a1a"} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Creative Agency · Brand Builders · Storytellers
              </h2>

              {/* Divider Line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-16" />
            </div>

            {/* Game Button - Centered */}
            <div className="container mx-auto px-6 py-16 max-w-4xl flex justify-center">
              <button
                onClick={() => setIsGameOpen(true)}
                className={`${theme.button} inline-flex items-center gap-3 px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg border-2 border-white/20`}
              >
                <Gamepad2
                  className={theme.accent.replace(
                    "text-",
                    "text-",
                  )}
                  size={20}
                />
                <div className="text-left">
                  <p
                    className={`${theme.accent} text-base font-black uppercase`}
                    style={{
                      fontFamily:
                        'Impact, "Arial Black", sans-serif',
                    }}
                  >
                    CULTURE
                  </p>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-wider">
                    A Game for Indians
                  </p>
                </div>
              </button>
            </div>

            {/* Bharat Timeline */}
            <BharatTimeline theme={theme} />

            {/* Currency Timeline */}
            <CurrencyTimeline theme={theme} />

            {/* News Section */}
            <NewsSection theme={theme} />

            {/* Featured Work Section */}
            <FeaturedWork theme={theme} />

            {/* Clients Section - Spacious & Professional */}
            <div className="container mx-auto px-6 py-24 max-w-5xl">
              <h3
                className={`${theme.heading} text-3xl mb-8 font-black uppercase text-center tracking-tight`}
                style={{
                  fontFamily:
                    'Impact, "Arial Black", sans-serif',
                }}
              >
                Trusted By
              </h3>
              <div
                className={`${theme.accent} text-center max-w-3xl mx-auto`}
              >
                <p
                  className="text-sm leading-loose font-medium tracking-wide"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Oma Essentials · Lockdown App · Thelas
                  Hardware · UNGOS Project · Gullyculturestores
                  · Ice & Spice · SRB Minerals · SRB Estates ·
                  Sabarmati Socials · Off Limits · SRB
                  Charitable Trust · Kissebaazi · Flam Pvt. Ltd
                  · Thickies · Thelas.com · Yogue.com
                </p>
              </div>
            </div>

            {/* Startup Heroes Section */}
            <StartupHeroes theme={theme} />

            {/* Contact Section - Redesigned - Fully Visible & Clean Mobile */}
            <div
              className={`${theme.button} py-12 md:py-20 border-t border-white/10`}
            >
              <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Contact Header */}
                <div className="mb-10 md:mb-16">
                  <h2
                    className={`text-4xl md:text-6xl lg:text-8xl ${theme.heading} text-center mb-4 font-black uppercase tracking-wider md:tracking-[0.3em]`}
                    style={{
                      fontFamily:
                        'Impact, "Arial Black", sans-serif',
                    }}
                  >
                    CONTACT
                  </h2>
                  <p
                    className={`text-center ${theme.accent} text-lg md:text-xl font-black uppercase tracking-widest`}
                  >
                    +91 9116356899
                  </p>
                </div>

                {/* Contact Details - Clean Mobile Layout */}
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-8 max-w-4xl mx-auto">
                  {/* Email */}
                  <a
                    href="mailto:culturemediateam@gmail.com"
                    className="flex items-center gap-3 hover:scale-105 transition-transform group w-full md:w-auto justify-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <Mail
                        className={theme.accent.replace(
                          "text-",
                          "text-",
                        )}
                        size={20}
                      />
                    </div>
                    <p
                      className={`${theme.accent} font-medium text-sm`}
                    >
                      culturemediateam@gmail.com
                    </p>
                  </a>

                  {/* Phone - Mobile Only */}
                  <a
                    href="tel:+919116356899"
                    className="flex items-center gap-3 hover:scale-105 transition-transform group w-full md:w-auto justify-start"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <Phone
                        className={theme.accent.replace(
                          "text-",
                          "text-",
                        )}
                        size={20}
                      />
                    </div>
                    <p
                      className={`${theme.accent} font-medium text-sm`}
                    >
                      +91 91163 56899
                    </p>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 w-full md:w-auto justify-start">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin
                        className={theme.accent.replace(
                          "text-",
                          "text-",
                        )}
                        size={20}
                      />
                    </div>
                    <p
                      className={`${theme.accent} font-medium text-sm`}
                    >
                      Jaipur, Rajasthan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${theme.bg} relative overflow-x-hidden transition-colors duration-500`}
    >
      {/* Background Pattern */}
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage:
            backgrounds[currentBg as keyof typeof backgrounds],
          opacity: 0.5,
        }}
      />

      {/* Ashoka Stambh - Top Left */}
      <div className="fixed top-6 left-6 z-40">
        <ImageWithFallback
          src={ashokaStambh}
          alt="Ashoka Stambh"
          className="w-12 h-14 object-contain drop-shadow-2xl"
          style={{ filter: "brightness(1.2) contrast(1.3)" }}
        />
      </div>

      {/* Creative Menu - Top Right */}
      <CreativeMenu
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        theme={theme}
      />

      {/* Background Switcher - Bottom Left */}
      <BgSwitcher
        currentBg={currentBg}
        onBgChange={setCurrentBg}
        backgrounds={Object.keys(backgrounds)}
      />

      {/* Theme Switcher - Bottom Right */}
      <ThemeSwitcher
        currentTheme={currentTheme}
        onThemeChange={setCurrentTheme}
        themes={Object.keys(themes)}
        theme={theme}
      />

      {/* Game Modal */}
      <GameModal
        isOpen={isGameOpen}
        onClose={() => setIsGameOpen(false)}
        theme={theme}
      />

      {/* Guide Me Modal */}
      <GuideMeModal
        isOpen={isGuideMeOpen}
        onClose={() => setIsGuideMeOpen(false)}
        theme={theme}
      />

      {/* Main Content */}
      <div className="relative z-10">{renderSection()}</div>
    </div>
  );
}