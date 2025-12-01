import { Linkedin, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import founderPhoto from "figma:asset/01f0005d5885e9e4e8000eac6f41aa717714c2f9.png";
import awardPhoto from "figma:asset/a2e1e9e567c970695cd933d8d7d354c49a81e8c3.png";

interface FounderSectionProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
    pattern?: string;
  };
}

const journeyMilestones = [
  {
    year: 2017,
    title: "The Beginning",
    description: "Hosted events for a community — Sayings of My Heart — a platform giving voice to young artists across India",
    quote: "Every voice deserves to be heard",
  },
  {
    year: 2018,
    title: "National Recognition",
    description: "Honored with Karmaveer Chakra Award — youngest recipient at the Global Youth Leadership Forum",
    quote: "Excellence knows no age",
  },
  {
    year: 2019,
    title: "Community Builder",
    description: "Hosted 50+ events including Chai Pe Charcha and Talk with IAS Tina Dabi, bridging generations",
    quote: "Bridges are built through conversation",
  },
  {
    year: 2020,
    title: "Author & Speaker",
    description: "Published 'A Nonsense Life' and delivered 10+ public talks on life integration",
    quote: "Words shape worlds",
  },
  {
    year: 2021,
    title: "Academic Leadership",
    description: "President of Humans of Manipal and Cultural Union while pursuing Psychology (Hons.) at MUJ",
    quote: "Leadership is service",
  },
  {
    year: 2022,
    title: "Revolutionary Ideas",
    description: "Submitted 'Hierarchy of Needs — All the Way from India' challenging Western psychology frameworks",
    quote: "Bharat's wisdom deserves global recognition",
  },
  {
    year: 2023,
    title: "Social Impact",
    description: "Youth Minister & Co-founder at SRB Charitable Trust, focusing on education and human rights",
    quote: "True success is measured in lives touched",
  },
  {
    year: 2024,
    title: "Business Builder",
    description: "Joined family business group, handling real estate, marble export, and education ventures",
    quote: "Business is the vehicle for change",
  },
  {
    year: 2025,
    title: "Culture Media Co.",
    description: "Founded to bridge Bharat's SMEs with global excellence through design and storytelling",
    quote: "From Bharat's soil to global recognition",
  },
];

const philosophies = [
  {
    text: "From Bharat's soil to global recognition — every SME deserves to shine",
    context: "On SME Empowerment",
  },
  {
    text: "Creativity is tradition, business is emotion — this is Bharat's superpower",
    context: "On Indian Entrepreneurship",
  },
  {
    text: "We're not building brands, we're building bridges between capability and expectations",
    context: "On Vision",
  },
];

export function FounderSection({ theme }: FounderSectionProps) {
  return (
    <div className={`${theme.button} py-20`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 
          className={`text-4xl md:text-5xl ${theme.heading} text-center mb-16 font-black uppercase tracking-tight break-words px-4`}
          style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
        >
          The Founder
        </h2>
        <p className={`text-center ${theme.accent} text-xl mb-16 uppercase tracking-wider font-medium`}>
          Akshat Vyas — Builder, Speaker, Changemaker
        </p>

        {/* Hero Section with Photo */}
        <div className="mb-20">
          <div className="flex flex-col justify-center space-y-6 max-w-3xl mx-auto text-center">
            <h2 
              className={`text-4xl ${theme.heading} font-black`}
              style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
            >
              Akshat Vyas
            </h2>
            <p className={`text-xl ${theme.accent} font-bold`}>
              Founder & Chief Visionary
            </p>
            <p className="text-white/90 text-base leading-relaxed font-medium">
              A journey of creation, communication, and contribution. From building communities to winning national awards, 
              from writing books to shaping businesses — every chapter has led to Culture Media Co.'s mission of elevating 
              Bharat's businesses to global standards.
            </p>
            <a
              href="https://www.linkedin.com/in/akshat-vyas-2970b02ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.button} inline-flex items-center gap-3 px-6 py-3 rounded-lg hover:scale-105 transition-transform mx-auto`}
            >
              <Linkedin className="text-white" size={18} />
              <span className={theme.accent + " font-bold text-sm"}>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Philosophy Quotes */}
        <div className="mb-20 grid md:grid-cols-3 gap-6">
          {philosophies.map((philosophy, index) => (
            <div key={index} className={`${theme.button} p-6 rounded-2xl`}>
              <p className={`${theme.heading} text-lg mb-3 italic leading-relaxed font-bold`}>
                "{philosophy.text}"
              </p>
              <p className={`${theme.accent} text-sm uppercase tracking-wider font-black`}>
                — {philosophy.context}
              </p>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div>
          <h2 
            className={`text-6xl ${theme.heading} text-center mb-4 font-black uppercase tracking-tight`}
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            THE JOURNEY
          </h2>
          <p className={`text-center ${theme.accent} mb-16 uppercase tracking-wider font-medium`}>
            2017 - 2025: Building Impact, One Step at a Time
          </p>

          <div className="space-y-6 relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20"></div>

            {journeyMilestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year Badge */}
                <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full ${theme.button} flex items-center justify-center z-10 border-4 border-white/30`}>
                  <span className={`${theme.accent} text-sm font-black`}>{milestone.year}</span>
                </div>

                {/* Content Card */}
                <div className={`${theme.button} p-6 rounded-2xl flex-1 ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                } hover:scale-[1.02] transition-all`}>
                  <div className="flex items-start gap-4">
                    <ChevronRight className={`${theme.accent.replace("text-", "text-")} flex-shrink-0 mt-1`} size={24} />
                    <div className="flex-grow">
                      <h3 
                        className={`text-2xl ${theme.heading} mb-2 font-black`}
                        style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
                      >
                        {milestone.title}
                      </h3>
                      <p className="text-white/80 mb-3 font-medium">
                        {milestone.description}
                      </p>
                      <p className={`${theme.accent} italic text-sm font-bold`}>
                        "{milestone.quote}"
                      </p>
                    </div>
                    {milestone.image && (
                      <div className="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden shadow-xl">
                        <ImageWithFallback
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`${theme.button} p-12 rounded-2xl text-center mt-20`}>
          <h3 
            className={`text-4xl ${theme.heading} mb-6 font-black uppercase`}
            style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
          >
            Book a Consultation with Akshat
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto font-medium">
            Get personalized guidance on brand strategy, business growth, and creative direction. 
            Whether you're a startup or scaling up, let's transform your vision into reality.
          </p>
          <a
            href="mailto:akshatvyas27@gmail.com?subject=Consultation Request"
            className={`${theme.accent.replace("text-", "bg-")} text-gray-900 px-8 py-4 rounded-lg hover:scale-105 transition-transform inline-block font-black uppercase tracking-wider`}
          >
            Schedule Your Session
          </a>
        </div>
      </div>
    </div>
  );
}