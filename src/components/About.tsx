import { siteConfig } from "@/config/siteConfig";
import aboutImage from "@/assets/about-us.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {siteConfig.about.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {siteConfig.about.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <img 
              src={aboutImage} 
              alt="Sobre Nós"
              className="rounded-lg shadow-card-hover w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-up">
            {siteConfig.about.description.map((paragraph, index) => (
              <p 
                key={index}
                className="text-lg text-foreground/80 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
