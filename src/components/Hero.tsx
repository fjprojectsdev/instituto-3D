import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
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
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient with warm colors */}
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #10b981 50%, #3b82f6 75%, #fbbf24 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite'
          }}
        />
        
        {/* Floating elements simulating people and movement */}
        <div className="absolute inset-0">
          {/* Floating circles representing people/community */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}} />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-yellow-300/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}} />
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-green-300/25 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}} />
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-300/30 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}} />
          <div className="absolute bottom-1/4 right-1/5 w-4 h-4 bg-orange-300/25 rounded-full animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.2s'}} />
          
          {/* Gentle wave patterns */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
              animation: 'float 8s ease-in-out infinite'
            }}
          />
        </div>
      </div>
      
      {/* Soft overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 text-center max-w-4xl">
        {/* Main Welcome Title */}
        <div className="mb-6">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-light text-[#f8f5f2] transition-opacity duration-1500 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.5)',
              fontWeight: '300',
              letterSpacing: '0.5px'
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
