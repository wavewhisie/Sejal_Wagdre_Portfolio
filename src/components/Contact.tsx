import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sejalwagdre355@gmail.com',
      href: 'mailto:sejalwagdre355@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8767903013',
      href: 'tel:+918767903013',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sejal-wagdre',
      href: 'https://www.linkedin.com/in/sejal-wagdre',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nagpur, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get in Touch
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently seeking internships or entry-level roles in software development or IT.
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold mb-1">{item.label}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === 'LinkedIn' ? '_blank' : undefined}
                        rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                        className="text-accent hover:underline transition-smooth break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center">
          <a
            href="mailto:sejalwagdre355@gmail.com"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
            </Button>
          </a>
        </div> */}
        <div className="text-center">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sejalwagdre355@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
