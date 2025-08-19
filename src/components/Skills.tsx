import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Network, Code, Shield, Settings, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Operating Systems",
      icon: Monitor,
      skills: ["Kali Linux", "Ubuntu", "Parrot OS", "BlackArch", "Exodia OS", "Tails OS", "Windows 10/11"],
      description: "Expert proficiency across security-focused and general purpose operating systems"
    },
    {
      title: "Networking",
      icon: Network,
      skills: ["TCP/IP", "OSI Model", "Wireshark", "NMap", "Subnetting", "Firewalls"],
      description: "Deep understanding of network protocols and security infrastructure"
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      skills: ["Python", "Bash", "JavaScript"],
      description: "Versatile programming skills for automation and security tool development"
    },
    {
      title: "Version Control",
      icon: Code,
      skills: ["GitHub", "Git"],
      description: "Code versioning and collaborative development platforms"
    },
    {
      title: "Security Tools & Platforms",
      icon: Shield,
      skills: ["Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Aircrack-ng"],
      description: "Hands-on experience with industry-standard penetration testing tools"
    },
    {
      title: "Task Automation",
      icon: Settings,
      skills: ["Jenkins"],
      description: "Continuous integration and deployment automation for security projects"
    },
    {
      title: "Project Management",
      icon: Briefcase,
      skills: ["Jira", "Asana"],
      description: "Project management and workplace management for collaborative development"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="cyber-border mb-4">
            Technical Arsenal
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Security <span className="text-cyber-blue">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of cybersecurity, 
            from penetration testing to threat analysis and system hardening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="cyber-border hover-glow group transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyber-blue/10 group-hover:bg-cyber-blue/20 transition-colors duration-300">
                    <category.icon className="w-5 h-5 text-cyber-blue" />
                  </div>
                  <CardTitle className="text-xl font-heading text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10 transition-colors duration-300 font-mono text-xs"
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
    </section>
  );
};

export default Skills;