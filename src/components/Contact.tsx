import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, MapPin, Phone, Download } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Personal Email",
      value: "mannatashishnayak@gmail.com",
      href: "mailto:mannatashishnayak@gmail.com",
      primary: true
    },
    {
      icon: Mail,
      title: "Academic Email",
      value: "mannat.nayak22@st.niituniversity.in",
      href: "mailto:mannat.nayak22@st.niituniversity.in",
      primary: false
    },
    {
      icon: Linkedin,
      title: "LinkedIn Profile",
      value: "mannat-ashish-nayak-04dec04",
      href: "https://www.linkedin.com/in/mannat-ashish-nayak-04dec04",
      primary: true
    },
    {
      icon: Github,
      title: "GitHub Repository",
      value: "mannat-ashish-04",
      href: "https://github.com/mannat-ashish-04",
      primary: true
    }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 24hrs" },
    { label: "Availability", value: "Full-time" },
    { label: "Location", value: "India" },
    { label: "Status", value: "Open to Work" }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="cyber-border mb-4">
            Let's Connect
          </Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Start a <span className="text-cyber-blue">Conversation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to your cybersecurity team. Let's discuss how I can help 
            strengthen your organization's digital defenses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Get In Touch
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index} 
                  className={`cyber-border hover-glow transition-all duration-300 cursor-pointer ${
                    method.primary ? 'ring-2 ring-cyber-blue/20' : ''
                  }`}
                  onClick={() => window.open(method.href, '_blank')}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-cyber-blue/10 rounded-lg">
                        <method.icon className="w-5 h-5 text-cyber-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground truncate">{method.value}</p>
                        {method.primary && (
                          <Badge variant="outline" className="mt-2 border-cyber-blue/30 text-cyber-blue text-xs">
                            Primary
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <Card className="cyber-border bg-gradient-to-r from-cyber-blue/5 to-transparent">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-heading font-semibold text-foreground">
                    Ready to Collaborate?
                  </h4>
                  <p className="text-muted-foreground">
                    I'm excited to bring my passion for cybersecurity and fresh perspective 
                    to your team. Let's discuss opportunities and how I can contribute to your security initiatives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-cyber-blue hover:bg-cyber-blue-dark text-background hover-glow"
                      onClick={() => window.open('mailto:mannatashishnayak@gmail.com', '_blank')}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-background"
                      onClick={() => window.open('https://www.linkedin.com/in/mannat-ashish-nayak-04dec04', '_blank')}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-data-green text-data-green hover:bg-data-green hover:text-background"
                      onClick={() => window.open('https://drive.google.com/file/d/1qSOfeFwPrVlydOlfnlyS6aqbHEF0aKYr/view?usp=drivesdk', '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Quick Info
            </h3>
            
            <Card className="cyber-border">
              <CardHeader>
                <CardTitle className="text-lg text-cyber-blue">Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                    <span className="font-semibold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="cyber-border">
              <CardHeader>
                <CardTitle className="text-lg text-cyber-blue">Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full" />
                    <span className="text-sm text-muted-foreground">Threat Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full" />
                    <span className="text-sm text-muted-foreground">Penetration Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full" />
                    <span className="text-sm text-muted-foreground">Cyber Forensics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full" />
                    <span className="text-sm text-muted-foreground">Security Research</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Animated Status Indicator */}
            <Card className="cyber-border">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-data-green rounded-full animate-cyber-pulse" />
                  <span className="font-semibold text-data-green">Available for Hire</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Currently seeking cybersecurity opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Code snippet footer */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card/50 rounded-lg p-4 border border-border code-line">
            <pre className="text-sm font-mono text-cyber-blue">
              {`// Let's build a more secure digital world together\nconst collaboration = await connect('mannat-ashish-nayak');`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;