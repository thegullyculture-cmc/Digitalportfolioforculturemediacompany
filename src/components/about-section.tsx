interface AboutSectionProps {
  theme: {
    bg: string;
    accent: string;
    button: string;
    heading: string;
    subheading: string;
    pattern?: string;
  };
}

export function AboutSection({ theme }: AboutSectionProps) {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20 max-w-5xl">
      <h1 className={`text-[10vw] sm:text-8xl leading-none font-black ${theme.heading} text-center mb-16`}>
        ABOUT US
      </h1>

      <div className="space-y-8 text-white text-lg leading-relaxed">
        <p className="text-2xl">
          Culture Media Co. is built on a simple belief — <span className={theme.heading}>Bharat's SMEs aren't small.</span> They're powerful, ambitious, and ready to play on a global stage.
        </p>
        
        <p className="text-xl opacity-90">
          We exist to make that happen.
        </p>

        <p>
          We merge luxury design thinking with Gen-Z clarity, crafting brands that feel premium, modern, and unapologetically rooted in Bharat's identity. Our work reflects the new era of Indian entrepreneurship — fast, fearless, and future-ready.
        </p>

        <p>
          From brand identities that look world-class to Shopify stores and Figma websites that convert quietly and effortlessly, everything we create has one core purpose: <span className={theme.heading}>to elevate Bharat's businesses into brands with culture, confidence, and global presence.</span>
        </p>

        <p>
          Our founder's journey comes from seeing the raw talent, resilience, and potential that lives inside India's small and mid-sized businesses. The goal wasn't just to build an agency — <span className={theme.heading}>it was to build a bridge.</span> A bridge between Bharat's capability and the world's expectations.
        </p>

        <div className={`${theme.button} rounded-2xl p-8 my-12`}>
          <p className="text-xl mb-4">At Culture Media Co., we blend:</p>
          <ul className={`space-y-3 ${theme.accent}`}>
            <li className="flex items-center gap-3">
              <span className="text-2xl">◆</span>
              <span>Luxury-level design</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">◆</span>
              <span>Gen-Z storytelling</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-2xl">◆</span>
              <span>Bharat-first understanding</span>
            </li>
          </ul>
        </div>

        <div className="text-center space-y-4 py-8">
          <p className={`text-3xl ${theme.heading}`}>We're young.</p>
          <p className={`text-3xl ${theme.heading}`}>We're sharp.</p>
          <p className={`text-3xl ${theme.heading}`}>We're proudly rooted in the land where creativity is tradition and business is emotion.</p>
        </div>

        <p className="text-2xl text-center py-8">
          If you're a Bharat-born brand dreaming bigger — <span className={theme.heading}>we're the team that brings your identity to life.</span>
        </p>

        <div className="text-center pt-8">
          <p className={`text-4xl font-black ${theme.heading} mb-4`}>Culture Media Co.</p>
          <p className={`text-xl ${theme.accent}`}>Where Bharat's ambition becomes global culture.</p>
        </div>
      </div>
    </div>
  );
}
