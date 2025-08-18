import MatrixBackground from '@/components/MatrixBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <MatrixBackground />
      
      <div className="relative z-10">
        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-muted-foreground border-t border-border">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm">
              © 2024 Mannat Ashish Nayak. Crafted with precision and security in mind.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
