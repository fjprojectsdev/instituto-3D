import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import educationImage from "@/assets/project-education.jpg";
import healthImage from "@/assets/project-health.jpg";
import environmentImage from "@/assets/project-environment.jpg";
import { useAdminImages } from "@/hooks/useAdminImages";

const projectImages: Record<string, string> = {
  education: educationImage,
  health: healthImage,
  environment: environmentImage,
};

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  link,
  projectIndex
}: { 
  title: string; 
  description: string; 
  image: string; 
  link: string;
  projectIndex: number;
}) => {
  const adminImages = useAdminImages();
  
  const getProjectImage = () => {
    const adminKey = `project${projectIndex + 1}` as keyof typeof adminImages;
    return adminImages[adminKey] || projectImages[image];
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group">
      <div className="overflow-hidden">
        <img 
          src={getProjectImage()} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Button 
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          asChild
        >
          <a href={link}>Saiba Mais</a>
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça as iniciativas que estão transformando vidas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {siteConfig.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              projectIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
