import { Card, CardContent } from '@/components/ui/card';
import { Code2, Users, TrendingUp, MessageSquare } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Passionate about technology and real-world applications',
    },
    {
      icon: MessageSquare,
      title: 'Strong Communicator',
      description: 'Effective at conveying ideas and collaborating with teams',
    },
    {
      icon: Users,
      title: 'Natural Leader',
      description: 'Adaptable and outgoing with proven leadership experience',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learner',
      description: 'Dedicated to growth and staying current with technology',
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-foreground/90 leading-relaxed text-center">
            I'm an enthusiastic Computer Science undergraduate with a passion for technology 
            and its real-world applications. Currently seeking internships or entry-level roles 
            in software development or IT, I bring strong communication skills, natural leadership, 
            and an unwavering dedication to continuous learning and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-smooth hover:shadow-glow"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
