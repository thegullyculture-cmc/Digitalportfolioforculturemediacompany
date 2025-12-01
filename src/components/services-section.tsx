import { useState } from "react";
import { ChevronDown, Calendar, Sparkles, TrendingUp, Palette, Code, Users } from "lucide-react";

interface ServicesSectionProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
    pattern?: string;
  };
  onDecideForMe: () => void;
}

interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

interface ServicePackage {
  id: string;
  title: string;
  icon: any;
  tagline: string;
  services: ServiceItem[];
}

const servicePackages: ServicePackage[] = [
  {
    id: "brand",
    title: "Brand Building & Consultation",
    icon: TrendingUp,
    tagline: "Build a brand that stands out in the global market",
    services: [
      { name: "Logo + Colors + Typography", price: "₹20,000", description: "Core visual identity" },
      { name: "Full Brand Kit", price: "₹80,000", description: "Logo + Story + Positioning + Style Guide" },
      { name: "Single Strategy Call", price: "₹4,999", description: "30-45 minute consultation" },
      { name: "Monthly Business Consulting", price: "₹30,000/month", description: "Ongoing strategic support" },
    ],
  },
  {
    id: "creatives",
    title: "Creatives & Campaigns",
    icon: Palette,
    tagline: "Content that captures attention & drives engagement",
    services: [
      { name: "Static Poster / Ad Creative", price: "₹1,000", description: "Single creative design" },
      { name: "Carousel (5-8 slides)", price: "₹2,000", description: "Multi-slide social content" },
      { name: "Influencer Thumbnail", price: "₹600", description: "YouTube/social thumbnails" },
      { name: "Monthly Creative Pack", price: "₹12,000/month", description: "10-20 posts per month" },
      { name: "Campaign Ideas (Concept + Script)", price: "₹12,000", description: "Strategy only, no production" },
      { name: "Campaign Bundle (3 Campaigns)", price: "₹25,000", description: "Complete campaign concepts" },
    ],
  },
  {
    id: "web",
    title: "Site Development",
    icon: Code,
    tagline: "Static sites & Shopify stores that convert",
    services: [
      { name: "1-Page Static Website", price: "₹8,999", description: "Landing page or portfolio" },
      { name: "Business Website (3-5 pages)", price: "₹19,999", description: "Complete business presence" },
      { name: "Shopify Store (Basic)", price: "₹16,999", description: "Theme setup + 10 products" },
      { name: "Shopify Advanced", price: "₹1,00,000", description: "Custom features & integrations" },
      { name: "Monthly Website Maintenance", price: "₹8,000/month", description: "Updates & support" },
    ],
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    icon: Users,
    tagline: "Leverage creators to amplify your brand message",
    services: [
      { name: "Influencer Selection & Negotiation", price: "Custom Quote", description: "Find the perfect creators for your brand" },
      { name: "Content Planning & Scripting", price: "Custom Quote", description: "Reel concepts & creative direction" },
      { name: "Campaign Strategy & Scheduling", price: "Custom Quote", description: "End-to-end campaign management" },
      { name: "Performance Reporting", price: "Custom Quote", description: "Views, CTR, sales, leads tracking" },
      { name: "Micro Influencers (10k-50k)", price: "₹2,000 - ₹8,000/reel", description: "Influencer fee estimate" },
      { name: "Mid-tier (100k-500k)", price: "₹15,000 - ₹60,000/reel", description: "Influencer fee estimate" },
      { name: "Major (1M+)", price: "₹1,00,000+/reel", description: "Influencer fee estimate" },
    ],
  },
];

export function ServicesSection({ theme, onDecideForMe }: ServicesSectionProps) {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);

  const togglePackage = (packageId: string) => {
    setExpandedPackage(expandedPackage === packageId ? null : packageId);
  };

  const handleScheduleMeet = () => {
    window.open("https://calendly.com/culture-media-co", "_blank");
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1
          className={`text-6xl sm:text-8xl lg:text-9xl leading-none font-black ${theme.heading} mb-4 sm:mb-6 uppercase tracking-tight`}
          style={{
            fontFamily: 'Impact, "Arial Black", sans-serif',
          }}
        >
          SERVICES
        </h1>
        <p className={`${theme.accent} text-base sm:text-xl uppercase tracking-widest font-black`}>
          Practical Packages for Indian Market
        </p>
      </div>

      {/* Not Sure Box */}
      <div className={`${theme.button} p-6 sm:p-8 rounded-2xl mb-12 sm:mb-16 text-center max-w-3xl mx-auto border-2 border-white/20`}>
        <Sparkles className="text-white mx-auto mb-4" size={40} />
        <h3 className="text-2xl sm:text-3xl text-white mb-3 sm:mb-4 font-black uppercase">
          Not Sure What You Need?
        </h3>
        <p className="text-white mb-6 font-medium text-sm sm:text-base">
          Let our experts analyze your business and recommend the perfect solution
        </p>
        <button
          onClick={onDecideForMe}
          className={`${theme.accent.replace("text-", "bg-")} text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:scale-105 transition-transform font-black uppercase text-sm sm:text-base`}
        >
          Let Us Decide For You
        </button>
      </div>

      {/* Service Packages */}
      <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto mb-12 sm:mb-16">
        {servicePackages.map((pkg) => {
          const Icon = pkg.icon;
          const isExpanded = expandedPackage === pkg.id;

          return (
            <div
              key={pkg.id}
              className={`${theme.button} rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                isExpanded ? "border-white/40 shadow-2xl" : "border-white/10"
              }`}
            >
              {/* Package Header - Clickable */}
              <button
                onClick={() => togglePackage(pkg.id)}
                className="w-full p-6 sm:p-8 text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    {/* Icon */}
                    <div className={`${theme.accent.replace("text-", "bg-")} p-3 sm:p-4 rounded-xl flex-shrink-0`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title & Tagline */}
                    <div className="flex-1 min-w-0">
                      <h2
                        className={`text-xl sm:text-2xl lg:text-3xl font-black ${theme.heading} mb-2 uppercase tracking-tight`}
                        style={{
                          fontFamily: 'Impact, "Arial Black", sans-serif',
                        }}
                      >
                        {pkg.title}
                      </h2>
                      <p className={`${theme.accent} text-xs sm:text-sm font-medium`}>
                        {pkg.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <ChevronDown
                    className={`${theme.accent.replace("text-", "text-")} flex-shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    size={28}
                  />
                </div>
              </button>

              {/* Package Content - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                  <div className="h-px bg-white/10 mb-6" />

                  {/* Services Grid */}
                  <div className="grid gap-3 sm:gap-4">
                    {pkg.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-white/5 hover:bg-white/10 p-4 sm:p-5 rounded-xl transition-colors border border-white/5 hover:border-white/20 group"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                          {/* Service Name & Description */}
                          <div className="flex-1 min-w-0">
                            <h3 className={`${theme.heading} font-black text-sm sm:text-base mb-1 uppercase tracking-wide`}>
                              {service.name}
                            </h3>
                            {service.description && (
                              <p className="text-white/60 text-xs sm:text-sm font-medium">
                                {service.description}
                              </p>
                            )}
                          </div>

                          {/* Price */}
                          <div
                            className={`${theme.accent} font-black text-base sm:text-lg whitespace-nowrap flex-shrink-0`}
                          >
                            {service.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Portfolio Button - Only for Creatives & Campaigns */}
                  {pkg.id === "creatives" && (
                    <div className="flex justify-center mt-6">
                      <a
                        href="https://drive.google.com/file/d/1T8Lp97_4XCe70iucoKaUmS295FIr4C9i/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${theme.button} px-8 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg border-2 border-white/20`}
                      >
                        <span className={`${theme.accent} font-black uppercase tracking-wider text-sm`}>
                          PORTFOLIO
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Schedule a Meet Button */}
      <div className="text-center">
        <button
          onClick={onDecideForMe}
          className={`${theme.accent.replace("text-", "bg-")} text-gray-900 px-8 sm:px-12 py-4 sm:py-5 rounded-xl hover:scale-105 transition-transform font-black uppercase text-base sm:text-lg shadow-2xl border-2 border-white/20`}
        >
          Guide Me
        </button>
        <p className={`${theme.accent} text-xs sm:text-sm mt-4 font-medium`}>
          Let's discuss your project and get you a custom quote
        </p>
      </div>
    </div>
  );
}