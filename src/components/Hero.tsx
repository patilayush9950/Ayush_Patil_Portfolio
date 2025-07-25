import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Mail, Phone, FileText, ExternalLink } from 'lucide-react';

const Hero = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'patilayush9950@gmail.com',
      href: 'mailto:patilayush9950@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8208156093',
      href: 'tel:+918208156093'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/patilayush9950',
      href: 'https://github.com/patilayush9950'
    },
    {
      icon: FileText,
      label: 'Naukri Profile',
      value: 'View Profile',
      href: '#'
    }
  ];

  return (
    <section id="home" className="min-h-screen hero-gradient section-padding flex items-center">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Heading */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              Backend Developer
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="gradient-text">Ayush Patil</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Experienced Backend Developer specializing in <span className="text-primary font-semibold">Java</span>, <span className="text-primary font-semibold">Spring Boot</span>, and <span className="text-primary font-semibold">scalable systems</span>. 
              Building robust APIs and seamless integrations.
            </p>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-elegant p-4 group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground">{link.label}</p>
                      <p className="text-sm font-semibold truncate">{link.value}</p>
                    </div>
                    <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all duration-300">
              <Mail size={20} className="mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group">
              <FileText size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
              View Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;