import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Database, Zap, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AgroPanch Application",
      description: "Comprehensive agricultural management platform connecting farmers with agricultural services, market data, and expert consultations. Features real-time crop monitoring and marketplace integration.",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Angular", "WebSocket"],
      features: [
        "Real-time crop monitoring system",
        "Marketplace for agricultural products",
        "Expert consultation booking",
        "Weather data integration",
        "Mobile-responsive interface"
      ],
      icon: Globe,
      github: "https://github.com/patilayush9950",
      demo: "#",
      category: "Web Application"
    },
    {
      title: "E-Commerce Platform Backend",
      description: "Scalable e-commerce backend system handling high-traffic loads with microservices architecture. Supports multiple payment gateways and real-time inventory management.",
      technologies: ["Spring Boot", "Hibernate", "MySQL", "Payment Gateways", "AWS", "Microservices"],
      features: [
        "Microservices architecture",
        "Multiple payment gateway integration",
        "Real-time inventory management",
        "Order processing workflow",
        "Admin dashboard APIs"
      ],
      icon: Database,
      github: "https://github.com/patilayush9950",
      demo: "#",
      category: "Backend System"
    },
    {
      title: "WebSocket Chat System",
      description: "Real-time messaging system with WebSocket implementation supporting group chats, file sharing, and message history. Built for high concurrency and scalability.",
      technologies: ["Java", "WebSocket", "Spring Boot", "MySQL", "Redis", "JWT"],
      features: [
        "Real-time messaging",
        "Group chat functionality",
        "File sharing support",
        "Message history",
        "User authentication"
      ],
      icon: Zap,
      github: "https://github.com/patilayush9950",
      demo: "#",
      category: "Real-time Application"
    },
    {
      title: "Payment Gateway Integration Suite",
      description: "Comprehensive payment processing system with multiple gateway integrations, transaction monitoring, and automated reconciliation features.",
      technologies: ["Spring Boot", "Payment APIs", "MySQL", "Swagger", "JWT", "REST APIs"],
      features: [
        "Multiple payment gateway support",
        "Transaction monitoring",
        "Automated reconciliation",
        "Refund management",
        "Analytics dashboard"
      ],
      icon: Code,
      github: "https://github.com/patilayush9950",
      demo: "#",
      category: "Integration System"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              A showcase of my recent work and contributions to scalable backend systems, 
              real-time applications, and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="card-elegant group animate-scale-in">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon size={20} className="text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                          </a>
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="flex-1 group/btn">
                        <Github size={16} className="mr-2 group-hover/btn:animate-pulse" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 group/btn">
                        <ExternalLink size={16} className="mr-2 group-hover/btn:rotate-45 transition-transform" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View More */}
          <div className="text-center mt-12 animate-fade-in">
            <Button variant="outline" size="lg" className="group">
              <Github size={20} className="mr-2 group-hover:animate-bounce" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;