import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-center animate-fade-in">
        <h1 className="mb-6 text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">
          {siteConfig.hero.title}
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto drop-shadow-md">
          {siteConfig.hero.subtitle}
        </p>
        <Button 
          size="lg"
          className="bg-secondary hover:bg-secondary-light text-secondary-foreground text-lg px-8 py-6 shadow-card-hover transition-all duration-300 hover:scale-105"
          asChild
        >
          <a href={siteConfig.hero.ctaLink}>
            {siteConfig.hero.ctaButton}
          </a>
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
