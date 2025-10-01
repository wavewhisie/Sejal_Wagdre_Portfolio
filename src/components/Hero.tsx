import { Mail, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent gradient-primary">
            Sejal Wagdre
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Aspiring Corporate Professional | Computer Science Undergraduate
          </p>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about technology and real-world applications. Strong communicator, natural leader, 
            and dedicated to continuous learning and growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
            >
              Get in Touch
            </Button>
            <a
              href="https://www.linkedin.com/in/sejal-wagdre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-secondary transition-smooth"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <a
              href="mailto:sejalwagdre355@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-smooth"
            >
              <Mail className="h-5 w-5" />
              <span>sejalwagdre355@gmail.com</span>
            </a>
            <a
              href="tel:+918767903013"
              className="flex items-center gap-2 hover:text-accent transition-smooth"
            >
              <Phone className="h-5 w-5" />
              <span>+91 8767903013</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
