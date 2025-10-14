import { siteConfig } from "@/config/siteConfig";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{siteConfig.siteName}</h3>
            <p className="text-background/80 leading-relaxed">
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {siteConfig.footer.links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a 
                href={siteConfig.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.contact.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={siteConfig.contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
