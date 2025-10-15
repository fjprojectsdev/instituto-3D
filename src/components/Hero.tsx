import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const welcomeText = "Seja Bem-vindo ao Instituto 3D";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let index = 0;
    const timer = setInterval(() => {
      if (index < welcomeText.length) {
        setTypedText(welcomeText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center max-w-5xl">
        {/* Main Welcome Title with Typing Effect */}
        <div className="mb-4">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {typedText}
            <span className="animate-pulse text-orange-500">|</span>
          </h1>
        </div>
        
        {/* Subtitle with fade animation */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg md:text-xl text-white/80 mb-8 font-light tracking-wide lowercase italic">
            levamos alimento, fé e esperança
          </p>
        </div>
        
        {/* Description */}
        <div className={`transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            {siteConfig.hero.subtitle}
          </p>
        </div>
        
        {/* CTA Button with hover animations */}
        <div className={`transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-2 border-white/20 backdrop-blur-sm"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-2">
              {siteConfig.hero.ctaButton}
              <span className="text-xl">❤️</span>
            </span>
          </Button>
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
