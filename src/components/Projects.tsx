import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, AlertTriangle, Shield, Target, Database } from 'lucide-react';
import ransomwareImage from '@/assets/project-ransomware.jpg';
import honeypotImage from '@/assets/project-honeypot.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Ransomware Simulation (Kandeez)",
      role: "Payload Developer and Penetration Tester",
      image: ransomwareImage,
      icon: AlertTriangle,
      githubUrl: "https://github.com/mannat-ashish-04/Kandeez",
      challenge: "To simulate the real-world distribution and functionality of a ransomware attack within a Windows 10 environment. The goal was to understand the lifecycle of a ransomware infection, from payload execution to data encryption and exfiltration.",
      process: [
        "Developed the Kandeez.exe ransomware payload in Python to encrypt text, photos, and videos",
        "Successfully bypassed the Windows Defender Firewall",
        "Created a Kandeez dashboard using the MERN stack to monitor infected systems",
        "Automated the distribution process using Jenkins"
      ],
      finalProduct: "A fully functional ransomware simulation with a custom payload and a dashboard for monitoring, showcasing a comprehensive understanding of ransomware attack vectors and C&C (Command and Control) infrastructure.",
      technologies: ["Python", "MERN Stack", "Jenkins", "Windows Security"]
    },
    {
      title: "Threat Detection through Honeypot Data",
      role: "Security Analyst and Penetration Tester",
      image: honeypotImage,
      icon: Shield,
      githubUrl: "https://github.com/mannat-ashish-04/Honeypots",
      challenge: "To gather real-time threat intelligence by deploying an integrated honeypot environment and simulating common attacks. This project aimed to demonstrate how threat intelligence is gathered and used to improve the security of IoT-based IP cameras.",
      process: [
        "Deployed a custom honeypot in a simulated NVR environment using Docker",
        "The honeypot, written in Python with Cowrie, monitored protocols like RTSP and HTTP",
        "Used the ELK stack (Elasticsearch, Logstash, Kibana) to represent and analyze the gathered threat intelligence",
        "Simulated various attacks, including DDoS, using a custom botnet written in Python",
        "Utilized penetration testing tools like Nmap, Hydra, and Nikto to test vulnerabilities"
      ],
      finalProduct: "A robust system for gathering, analyzing, and representing threat intelligence, providing a clear demonstration of how to enhance the security of IoT devices through proactive monitoring.",
      technologies: ["Python", "Docker", "ELK Stack", "Cowrie", "Nmap", "Hydra", "Nikto"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="cyber-border mb-4">
            Security Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Digital <span className="text-cyber-blue">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world cybersecurity projects demonstrating practical application 
            of threat intelligence, penetration testing, and security analysis.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <div className="absolute inset-0 bg-cyber-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-xl cyber-border hover-glow transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="p-2 bg-cyber-blue/20 backdrop-blur-sm rounded-lg">
                      <project.icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-cyber-blue/20 backdrop-blur-sm rounded-lg">
                      <Github className="w-5 h-5 text-cyber-blue" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <Badge variant="outline" className="border-cyber-blue text-cyber-blue mb-3">
                    {project.role}
                  </Badge>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                      {project.title}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>

                <Card className="cyber-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-cyber-blue flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      The Challenge
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.challenge}</p>
                  </CardContent>
                </Card>

                <Card className="cyber-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-cyber-blue flex items-center gap-2">
                      <Database className="w-5 h-5" />
                      Implementation Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {project.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="border-cyber-blue/30 text-cyber-blue font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4 text-muted-foreground">
                  <strong className="text-cyber-blue">Final Product:</strong> {project.finalProduct}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;