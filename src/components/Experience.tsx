import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building2, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: "SoftLink Technology",
    position: "Backend Developer",
    location: "Pune, Maharashtra",
    duration: "September 2024 – Present",
    type: "Full-time",
    achievements: [
      "Contributed to the development of AgroPanch app, improving agricultural data management efficiency by 40%",
      "Built scalable E-Commerce platform backend serving 10,000+ concurrent users",
      "Developed robust REST APIs and WebSocket implementations for real-time communication",
      "Integrated multiple payment gateways with 99.9% transaction success rate",
      "Optimized backend systems for enhanced scalability and performance",
      "Collaborated with Angular frontend team to deliver seamless user experiences",
      "Implemented microservices architecture reducing system response time by 35%",
      "Designed and optimized database schemas for improved query performance"
    ],
    technologies: [
      "Java", "Spring Boot", "Hibernate", "Spring JPA", "MySQL", 
      "REST APIs", "WebSocket", "Payment Gateways", "Angular", "AWS"
    ]
  };

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Professional Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Career <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              My professional experience building scalable backend systems and 
              contributing to innovative projects.
            </p>
          </div>

          {/* Experience Card */}
          <Card className="card-elegant animate-scale-in">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl font-bold mb-2">{experience.position}</CardTitle>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Building2 size={18} />
                    {experience.company}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {experience.location}
                  </div>
                </div>
              </div>
              <Badge variant="outline" className="w-fit">{experience.type}</Badge>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Achievements & Responsibilities</h4>
                <div className="grid gap-3">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Concurrent Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Transaction Success</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;