import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-cyber.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-slide-up">
          <div className="flex items-center justify-center mb-6">
            <Badge variant="secondary" className="cyber-border px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2 text-cyber-blue" />
              Cybersecurity Professional
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
            <span className="text-foreground">Mannat Ashish</span>
            <br />
            <span className="text-cyber-blue animate-glow">Nayak</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium typewriter">
              Aspiring Cybersecurity Analyst | Specializing in Threat Intelligence & Cyber Forensics
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-cyber-blue hover:bg-cyber-blue-dark text-background font-semibold px-8 py-3 hover-glow transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg"
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-background font-semibold px-8 py-3 cyber-border transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a 
              href="https://github.com/mannat-ashish-04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-blue transition-colors duration-300 hover-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mannat-ashish-nayak-04dec04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyber-blue transition-colors duration-300 hover-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mannatashishnayak@gmail.com"
              className="text-muted-foreground hover:text-cyber-blue transition-colors duration-300 hover-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyber-blue rounded-full opacity-60 animate-cyber-pulse float" />
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-cyber-blue rounded-full opacity-40 animate-cyber-pulse float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-cyber-blue rounded-full opacity-80 animate-cyber-pulse float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;