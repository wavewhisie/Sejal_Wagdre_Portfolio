import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      
      <footer className="bg-card border-t border-border py-8 text-center text-muted-foreground">
        <p>© 2025 Sejal Wagdre. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
