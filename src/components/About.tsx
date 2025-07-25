import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Expertise",
      description: "Proficient in Java, JavaScript, and modern frameworks"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Advanced skills in MySQL, Hibernate, and Spring JPA"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Experience with AWS and scalable system architecture"
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimizing backend systems for maximum efficiency"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building <span className="gradient-text">Scalable Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Passionate backend developer with expertise in creating robust, efficient systems 
              that power modern applications and deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm an experienced backend developer with a strong foundation in Java and modern 
                    web technologies. My passion lies in building scalable, efficient systems that 
                    solve real-world problems and drive business growth.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently working at SoftLink Technology, I've contributed to major projects 
                    including the AgroPanch app and scalable E-Commerce platforms, focusing on 
                    REST API development, WebSocket implementations, and payment gateway integrations.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Core Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Spring Boot', 'Hibernate', 'REST APIs', 'WebSocket', 
                      'Payment Gateways', 'System Design', 'MySQL', 'AWS'
                    ].map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-background">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="animate-fade-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="card-elegant group">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon size={24} className="text-primary" />
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;