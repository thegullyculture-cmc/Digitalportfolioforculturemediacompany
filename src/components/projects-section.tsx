import { useState } from "react";
import imgSrbEstatesNew from "figma:asset/2155e60dc2ff27888c602719f667e2111d04577f.png";
import imgOffLimitsNew from "figma:asset/cd876309779a1685274d04bec4bceb3932c93fa8.png";
import imgSabarmatiSocialsNew from "figma:asset/bfeb0151f61a6144be0e874bd34f6e20fcdc2aa4.png";

interface ProjectsSectionProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
    pattern?: string;
  };
}

const projectsList = [
  "Oma Essentials",
  "Lockdown App",
  "Thelas Hardware",
  "UNGOS Project",
  "Gullyculturestores",
  "Ice & Spice",
  "SRB Minerals",
  "SRB Estates",
  "Sabarmati Socials",
  "Off Limits",
  "SRB Charitable Trust",
  "Kissebaazi",
  "Flam Pvt. Ltd",
  "Thickies",
  "Thelas.com",
  "Yogue.com",
];

const projects = [
  {
    id: "srb-estates",
    name: "SRB ESTATES",
    location: "Bhilwara, Rajasthan",
    image: imgSrbEstatesNew,
    description: "A real estate builder from Bhilwara, Rajasthan approached us to rebrand his traditional Shri Rambhakt Construction Company. He wanted a modern, premium identity without losing his cultural roots. We understood his vision and transformed the brand into a refined, high-end luxury estates company, delivering a clean, elegant, future-ready look that matched his ambitions.",
  },
  {
    id: "sabarmati-socials",
    name: "SABARMATI SOCIALS",
    location: "Ahemdabad (Sindhu Bhavan)",
    image: imgSabarmatiSocialsNew,
    description: "A loving family from Gujarat approached us to create a heartfelt restaurant brand for the elite food court at Sindhu Bhavan. They wanted something authentic, emotional, and proudly Indian. We understood their vision and crafted a warm yet premium identity that reflects their roots and elevates their dream.",
  },
  {
    id: "off-limits",
    name: "OFF LIMITS",
    location: "Paldi, Bhilwara",
    image: imgOffLimitsNew,
    description: "A family from Bhilwara wanted to turn their farm into a pickleball café. They wanted a place that combined sport, leisure, and community while keeping it exclusive and fun. We created 'Off Limits', transforming their farm into a lively, memorable space where people can play, relax, and enjoy a unique experience.",
  },
];

export function ProjectsSection({ theme }: ProjectsSectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-32 pb-12 sm:pb-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-20">
        <h1 
          className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-none ${theme.heading} mb-4 sm:mb-6 font-black uppercase break-words px-2`}
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif', letterSpacing: '-0.02em' }}
        >
          OUR PROJECTS
        </h1>
        <p className={`${theme.accent} text-base sm:text-xl uppercase tracking-wider font-medium px-2`}>
          Transforming Ideas into Impact
        </p>
      </div>

      {/* Featured Projects - Mobile Optimized */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${theme.button} rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-white/10`}
            >
              {/* Mobile: Stacked Layout */}
              <div className="block sm:hidden">
                {/* Image - Clickable */}
                <div 
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 
                    className={`text-2xl ${theme.heading} mb-2 font-black uppercase tracking-tight`}
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    {project.name}
                  </h2>

                  <p className={`${theme.accent} text-xs mb-3 uppercase tracking-widest font-bold flex items-center gap-1`}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </p>

                  <p className="text-white/85 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Desktop/Tablet: Side by Side Layout */}
              <div className="hidden sm:grid sm:grid-cols-5 gap-0">
                {/* Image - Smaller, Clickable */}
                <div 
                  className="col-span-2 relative cursor-pointer overflow-hidden group"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/0 group-hover:bg-white/20 backdrop-blur-0 group-hover:backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-all duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <h2 
                    className={`text-3xl md:text-4xl lg:text-5xl ${theme.heading} mb-3 font-black uppercase tracking-tight leading-tight`}
                    style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                  >
                    {project.name}
                  </h2>

                  <p className={`${theme.accent} text-sm mb-4 uppercase tracking-widest font-bold flex items-center gap-2`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </p>

                  <p className="text-white/90 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Button - Guide Me Style */}
      <div className="flex justify-center mb-12 sm:mb-20">
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

      {/* Clients Portfolio - Professional Grid */}
      <div className="max-w-6xl mx-auto">
        <div className={`${theme.button} rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-xl`}>
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <h3 
              className={`text-2xl sm:text-3xl md:text-4xl ${theme.heading} font-black uppercase tracking-tight`}
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Our Complete Portfolio
            </h3>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
            {projectsList.map((project, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 h-full flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all duration-300 group-hover:scale-105">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 sm:h-1 ${theme.accent.replace('text-', 'bg-')} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg sm:rounded-t-xl`} />
                  
                  <span className="text-white text-center text-xs sm:text-sm font-bold uppercase tracking-wide leading-tight">
                    {project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Project"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}