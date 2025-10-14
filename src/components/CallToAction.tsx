import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { Heart, Users } from "lucide-react";

const CTACard = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  buttonLink,
  variant = "primary"
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: "primary" | "secondary";
}) => {
  return (
    <div className={`rounded-lg p-8 text-center shadow-card-hover transition-all duration-300 hover:scale-105 ${
      variant === "primary" ? "bg-gradient-hero" : "bg-gradient-cta"
    }`}>
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 p-4 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-white/90 mb-8 text-lg leading-relaxed">
        {description}
      </p>
      <Button
        size="lg"
        className="bg-white hover:bg-white/90 text-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        asChild
      >
        <a href={buttonLink}>{buttonText}</a>
      </Button>
    </div>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
          <CTACard
            icon={<Heart className="w-12 h-12 text-white" />}
            title={siteConfig.donation.title}
            description={siteConfig.donation.description}
            buttonText={siteConfig.donation.buttonText}
            buttonLink={siteConfig.donation.buttonLink}
            variant="primary"
          />
          
          <CTACard
            icon={<Users className="w-12 h-12 text-white" />}
            title={siteConfig.volunteer.title}
            description={siteConfig.volunteer.description}
            buttonText={siteConfig.volunteer.buttonText}
            buttonLink={siteConfig.volunteer.buttonLink}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
