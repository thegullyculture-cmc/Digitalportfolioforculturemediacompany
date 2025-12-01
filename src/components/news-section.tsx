import { ExternalLink } from "lucide-react";

interface NewsSectionProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
  };
}

const newsArticles = [
  {
    id: 1,
    title: "Shark Tank India's D2C Revolution: Peyush Bansal, Anupam Mittal & More",
    excerpt: "India's startup ecosystem transformed as entrepreneurs pitch revolutionary D2C brands to sharks, creating unicorns and household names.",
    link: "https://www.forbes.com/sites/anuradhavaranasi/2023/01/30/shark-tank-india-season-2-kicks-off-with-a-bang/",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: 2,
    title: "Mamaearth's Unicorn Journey: From Startup to ₹8000 Cr IPO Success",
    excerpt: "Ghazal & Varun Alagh build India's first clean beauty unicorn, revolutionizing personal care with toxin-free products.",
    link: "https://economictimes.indiatimes.com/tech/startups/honasa-consumer-mamaearth-parent-shares-list-at-premium-on-stock-exchanges/articleshow/104881714.cms",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    title: "boAt Lifestyle: Aman Gupta's ₹1500 Cr Wearables Empire",
    excerpt: "From startup to market leader, boAt dominates India's audio market with stylish, affordable wearables loved by Gen-Z.",
    link: "https://www.business-standard.com/companies/news/boat-lifestyle-clocks-rs-1-500-crore-revenue-eyes-ipo-route-123102500893_1.html",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: 4,
    title: "Lenskart's Omnichannel Mastery: $5 Billion Valuation Milestone",
    excerpt: "Peyush Bansal revolutionizes eyewear retail with 1000+ stores, blending online convenience with offline experience.",
    link: "https://www.livemint.com/companies/start-ups/lenskart-valuation-hits-5-billion-in-new-funding-round-11703074847256.html",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 5,
    title: "Sugar Cosmetics: Vineeta Singh's Bold Beauty Disruption",
    excerpt: "Breaking beauty norms with cruelty-free, India-first products - Sugar reaches 40,000+ retail touchpoints nationwide.",
    link: "https://yourstory.com/2023/01/sugar-cosmetics-vineeta-singh-revenue-growth-profitability",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    id: 6,
    title: "Nykaa's E-Commerce Triumph: Falguni Nayar's Billion Dollar Story",
    excerpt: "From investment banker to beauty mogul - India's first woman-led unicorn IPO creates history at ₹50,000+ crores.",
    link: "https://www.cnbc.com/2021/11/10/nykaa-ipo-falguni-nayar-becomes-indias-wealthiest-self-made-woman.html",
    gradient: "from-pink-500 to-rose-600",
  },
];

export function NewsSection({ theme }: NewsSectionProps) {
  return (
    <div className="container mx-auto px-6 py-20 max-w-6xl">
      <h2 
        className={`text-4xl ${theme.heading} text-center mb-4 font-black uppercase tracking-tight`}
        style={{ fontFamily: 'Impact, "Arial Black", sans-serif' }}
      >
        News
      </h2>
      <p className={`text-center ${theme.accent} mb-12 text-xs font-medium uppercase tracking-wider`}>
        D2C Success Stories Shaping Bharat's Future
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {newsArticles.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-br ${article.gradient} backdrop-blur-sm rounded-xl p-5 hover:scale-105 transition-all duration-300 group border border-white/10 shadow-lg flex flex-col`}
          >
            <h3 
              className="text-white text-[11px] mb-3 font-black uppercase leading-tight tracking-wide"
              style={{ fontFamily: '"Bebas Neue", Impact, "Arial Black", sans-serif' }}
            >
              {article.title}
            </h3>
            
            <p className="text-white/90 text-[10px] mb-4 font-medium leading-relaxed flex-grow">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-2 text-white/80 font-bold uppercase text-[9px] pt-3 border-t border-white/20">
              <span>Read Story</span>
              <ExternalLink size={10} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}