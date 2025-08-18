import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Shield, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Security Focused",
      description: "Specializing in threat intelligence and cyber forensics"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in Python, Bash, and security tools"
    },
    {
      icon: Target,
      title: "Penetration Testing",
      description: "Hands-on experience with vulnerability assessment"
    },
    {
      icon: Zap,
      title: "Ready to Learn",
      description: "Eager to contribute and grow in professional environment"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="cyber-border mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Crafting Digital <span className="text-cyber-blue">Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey into cybersecurity began with fascination for iconic movies like Tron and Mr. Robot, 
            evolving into a dedicated pursuit of protecting the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="code-line">
              <h3 className="text-2xl font-heading font-semibold mb-4 text-foreground">
                The Story Behind the Code
              </h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My fascination with cybersecurity began at a young age, sparked by iconic movies like 
                <span className="text-cyber-blue font-medium"> Tron </span> and the captivating world of 
                <span className="text-cyber-blue font-medium"> Mr. Robot</span>. These stories piqued my 
                interest in the intricate dynamics of networking and the art of ethical hacking.
              </p>
              
              <p>
                As a B.Tech Computer Science Engineering student at 
                <span className="text-cyber-blue font-medium"> NIIT University</span>, I have cultivated 
                a strong academic foundation in core security disciplines, including cyber forensics and 
                threat intelligence.
              </p>
              
              <p>
                While I am a new graduate and don't yet have professional work experience, I have dedicated 
                myself to applying my theoretical knowledge through hands-on academic projects. I am excited 
                to transition from theoretical understanding to a professional environment, where I can 
                contribute my analytical skills and proactive approach to a security team.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-cyber-blue font-semibold">
                Ready to learn, grow, and help create a more secure digital world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="cyber-border hover-glow group transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-cyber-blue/10 group-hover:bg-cyber-blue/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                  </div>
                  <h4 className="font-heading font-semibold mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;