import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      specialization: "Cybersecurity",
      institution: "NIIT University",
      year: "2026 (expected)",
      status: "Current",
      description: "Focused curriculum in cybersecurity fundamentals, network security, and ethical hacking practices."
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Kendriya Vidyalaya",
      year: "2022",
      status: "Completed",
      description: "Strong foundation in science and mathematics, laying groundwork for technical education."
    },
    {
      degree: "Secondary School Education (Class X)",
      institution: "Kendriya Vidyalaya",
      year: "2020",
      status: "Completed",
      description: "Comprehensive education with focus on analytical thinking and problem-solving skills."
    }
  ];

  const certifications = [
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "December 25, 2024",
      icon: "🛡️",
      status: "Active"
    },
    {
      title: "Cybersecurity Assessment",
      issuer: "LearnTube",
      date: "August 15, 2025",
      icon: "🔍",
      status: "Active"
    },
    {
      title: "Python Beginner Level Novice",
      issuer: "TECHGIG",
      date: "August 15, 2025",
      icon: "🐍",
      status: "Active"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="cyber-border mb-4">
            Academic Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Learning <span className="text-cyber-blue">Pathway</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through structured education and industry-recognized certifications
            in cybersecurity and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-cyber-blue" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="cyber-border hover-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-foreground mb-2">
                          {edu.degree}
                          {edu.specialization && (
                            <span className="text-cyber-blue"> ({edu.specialization})</span>
                          )}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.year}
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant={edu.status === 'Current' ? 'default' : 'secondary'}
                        className={edu.status === 'Current' ? 'bg-cyber-blue text-background' : ''}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-cyber-blue" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="cyber-border hover-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                        <p className="text-sm text-cyber-blue font-medium mb-2">{cert.issuer}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </div>
                          <Badge variant="outline" className="border-cyber-blue/30 text-cyber-blue text-xs">
                            {cert.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Academic Achievement Stats */}
            <Card className="cyber-border mt-8">
              <CardHeader>
                <CardTitle className="text-lg text-cyber-blue">Academic Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyber-blue">2026</div>
                    <div className="text-xs text-muted-foreground">Expected Graduation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyber-blue">3</div>
                    <div className="text-xs text-muted-foreground">Active Certifications</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline visualization */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-cyber-blue/30"></div>
            <div className="space-y-8">
              {[2020, 2022, 2024, 2026].map((year, index) => (
                <div key={year} className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyber-blue rounded-full border-4 border-background"></div>
                  <div className="text-cyber-blue font-bold bg-background px-4">{year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;