import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    university: "SAGE University",
    location: "Indore, Madhya Pradesh",
    year: "2023",
    cgpa: "8.48",
    maxCgpa: "10.0"
  };

  const certifications = [
    "Java Programming Certification",
    "Spring Framework Certification",
    "AWS Cloud Practitioner",
    "MySQL Database Administration"
  ];

  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks",
    "Operating Systems",
    "Web Technologies",
    "System Design",
    "Object-Oriented Programming"
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Education
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Academic <span className="gradient-text">Background</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Strong foundation in computer science with excellent academic performance 
              and continuous learning through certifications.
            </p>
          </div>

          <div className="space-y-8">
            {/* Main Education Card */}
            <Card className="card-elegant animate-scale-in">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold mb-2">
                        {education.degree}
                      </CardTitle>
                      <p className="text-lg text-primary font-semibold mb-2">
                        {education.field}
                      </p>
                      <p className="text-muted-foreground font-medium">
                        {education.university}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={16} />
                      {education.year}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      {education.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* CGPA */}
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award size={20} className="text-primary" />
                    <span className="font-semibold">CGPA</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{education.cgpa}</span>
                    <span className="text-muted-foreground">/{education.maxCgpa}</span>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Relevant Coursework</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {coursework.map((course, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="justify-center p-2 text-center bg-background hover:bg-primary/10 transition-colors"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;