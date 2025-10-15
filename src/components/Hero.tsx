import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-['Poppins',_sans-serif]"
    >
      {/* Animated Realistic Background */}
      <div className="absolute inset-0 z-0">
        {/* Morning sunlight gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, #fbbf24 0%, #f59e0b 20%, #10b981 40%, #3b82f6 60%, #fbbf24 80%, #f59e0b 100%)',
            backgroundSize: '300% 300%',
            animation: 'morningLight 20s ease-in-out infinite'
          }}
        />
        
        {/* Simulated people and community elements */}
        <div className="absolute inset-0">
          {/* Volunteers (larger moving elements) */}
          <div className="absolute top-1/4 left-0 w-8 h-12 bg-gradient-to-b from-orange-400/40 to-yellow-500/30 rounded-full" style={{animation: 'walkRight 15s linear infinite'}} />
          <div className="absolute top-1/3 right-0 w-6 h-10 bg-gradient-to-b from-green-400/35 to-blue-400/25 rounded-full" style={{animation: 'walkLeft 18s linear infinite'}} />
          
          {/* Children playing (smaller bouncing elements) */}
          <div className="absolute bottom-1/3 left-1/4 w-4 h-6 bg-gradient-to-b from-yellow-400/50 to-orange-400/40 rounded-full" style={{animation: 'playBounce 3s ease-in-out infinite'}} />
          <div className="absolute bottom-1/4 right-1/3 w-3 h-5 bg-gradient-to-b from-blue-400/45 to-green-400/35 rounded-full" style={{animation: 'playBounce 2.5s ease-in-out infinite', animationDelay: '1s'}} />
          
          {/* Hugging/gathering groups (pulsing circles) */}
          <div className="absolute top-1/2 left-1/3 w-12 h-8 bg-gradient-radial from-orange-300/30 to-transparent rounded-full" style={{animation: 'gentleGather 6s ease-in-out infinite'}} />
          <div className="absolute bottom-1/2 right-1/4 w-10 h-6 bg-gradient-radial from-green-300/25 to-transparent rounded-full" style={{animation: 'gentleGather 7s ease-in-out infinite', animationDelay: '2s'}} />
          
          {/* Wind effects (moving particles) */}
          <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-white/20 rounded-full" style={{animation: 'windDrift 12s linear infinite'}} />
          <div className="absolute top-2/3 left-3/4 w-1 h-1 bg-yellow-200/30 rounded-full" style={{animation: 'windDrift 10s linear infinite', animationDelay: '3s'}} />
          
          {/* Sunlight rays */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: 'conic-gradient(from 45deg at 80% 20%, transparent 0deg, rgba(251, 191, 36, 0.2) 30deg, transparent 60deg, rgba(245, 158, 11, 0.15) 90deg, transparent 120deg)',
              animation: 'sunRays 25s linear infinite'
            }}
          />
        </div>
      </div>
      
      {/* Soft morning overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-amber-900/20 via-transparent to-orange-900/15" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center max-w-4xl">
        {/* Main Welcome Title */}
        <div className="mb-6">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-[#f8f5f2] transition-all duration-2000 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.4), 0 2px 6px rgba(251, 191, 36, 0.2)',
              fontWeight: '300',
              letterSpacing: '0.5px',
              animation: isVisible ? 'welcomeFloat 5s ease-in-out infinite, welcomeGlow 4s ease-in-out infinite' : 'none'
            }}
          >
            Seja bem-vindo ao Instituto 3D
          </h1>
        </div>
        
        {/* Subtitle */}
        <div 
          className={`mb-8 transition-all duration-1500 delay-500 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <p 
            className="text-lg md:text-xl font-light tracking-wide lowercase"
            style={{
              color: 'rgba(248, 245, 242, 0.85)',
              textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            levamos alimento, fé e esperança
          </p>
        </div>
        
        {/* Description */}
        <div 
          className={`mb-10 transition-all duration-1500 delay-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <p 
            className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light"
            style={{
              color: 'rgba(248, 245, 242, 0.9)',
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
            }}
          >
            {siteConfig.hero.subtitle}
          </p>
        </div>
        
        {/* CTA Button */}
        <div 
          className={`transition-all duration-1500 delay-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg transition-all duration-300 ease-out hover:shadow-xl border-0"
            style={{
              fontWeight: '500',
              letterSpacing: '0.3px'
            }}
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {siteConfig.hero.ctaButton}
          </Button>
        </div>
      </div>
      
      {/* Gentle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className={`w-6 h-10 border-2 rounded-full flex justify-center transition-all duration-1500 delay-1200 ${
            isVisible ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            borderColor: 'rgba(248, 245, 242, 0.4)'
          }}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-pulse"
            style={{
              backgroundColor: 'rgba(248, 245, 242, 0.6)'
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
