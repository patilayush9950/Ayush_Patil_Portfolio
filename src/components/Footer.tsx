import { Button } from '@/components/ui/button';
import { Github, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/patilayush9950',
      label: 'GitHub'
    },
    { 
      icon: Mail, 
      href: 'mailto:patilayush9950@gmail.com',
      label: 'Email'
    },
    { 
      icon: Phone, 
      href: 'tel:+918208156093',
      label: 'Phone'
    }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold gradient-text mb-4">Ayush Patil</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Backend Developer passionate about building scalable systems and 
                innovative solutions. Always ready for new challenges and opportunities.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="group"
                      asChild
                    >
                      <a 
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={social.label}
                      >
                        <Icon size={16} className="group-hover:animate-bounce" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 block py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-muted-foreground">
                <p className="hover:text-primary transition-colors cursor-pointer">
                  patilayush9950@gmail.com
                </p>
                <p className="hover:text-primary transition-colors cursor-pointer">
                  +91 8208156093
                </p>
                <p>Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© 2024 Ayush Patil. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp size={16} className="mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;