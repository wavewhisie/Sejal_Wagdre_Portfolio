import { Card, CardContent } from '@/components/ui/card';
import { Code2, Users, TrendingUp, MessageSquare } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Built 10+ REST APIs using Node.js, Express.js, and MongoDB',
    },
    {
      icon: TrendingUp,
      title: 'System Design',
      description: 'Designed scalable backend architectures with authentication and RBAC',
    },
    {
      icon: Users,
      title: 'Blockchain Project',
      description: 'Developed decentralized license system using Ethereum & IPFS',
    },
    {
      icon: MessageSquare,
      title: 'Research Publication',
      description: 'Published paper in IJRASET (2025) on blockchain-based system',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Backend Developer | API Developer | Blockchain Enthusiast
        </p>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="max-w-3xl mx-auto mb-16">
          {/* <p className="text-lg text-foreground/90 leading-relaxed text-center text-base md:text-lg"> */}
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-center max-w-2xl mx-auto">
            Backend-focused Computer Science Engineering student (CGPA: 9.14) with hands-on experience
            in building scalable REST APIs using <span className="text-primary font-semibold tracking-wide">Node.js, Express.js, and MongoDB.</span> Developed 10+ APIs
            during internship and built a blockchain-based government license system with secure document
            handling using IPFS and encryption. Published research in IJRASET (2025).
            <br /><br />
            I am passionate about backend development, system design, and building real-world applications
            that solve meaningful problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              // className="bg-card border-border hover:border-accent transition-smooth hover:shadow-glow"
              className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
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
