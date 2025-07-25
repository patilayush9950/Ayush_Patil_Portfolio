import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: ["Java", "Spring Boot", "Hibernate", "Spring JPA"]
    },
    {
      title: "Database & APIs", 
      skills: ["MySQL", "REST APIs", "WebSocket", "Swagger"]
    },
    {
      title: "Frontend & Tools",
      skills: ["JavaScript", "Angular", "Git", "Postman"]
    },
    {
      title: "Cloud & Integration",
      skills: ["AWS", "Payment Gateway Integration", "System Design"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Technical Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Technical</span> Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Technologies and frameworks I work with in backend development.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="card-elegant animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;