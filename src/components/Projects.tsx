import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Database, Lock, Users } from 'lucide-react';

const Projects = () => {
  const techStack = [
    'Ethereum',
    'Solidity',
    'Ether.js',
    'ReactJS',
    'IPFS',
    'Meta Mask',
    'Hardhat',
    'Node.js',
    'PostgreSQL',
  ];

  const features = [
    {
      icon: Shield,
      title: 'Blockchain Security',
      description: 'Ethereum smart contracts for secure license issuance',
    },
    {
      icon: Lock,
      title: 'Advanced Encryption',
      description: 'AES RSA encryption for document protection',
    },
    {
      icon: Database,
      title: 'Decentralized Storage',
      description: 'IPFS Pinata for secure file storage',
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'JWT Firebase authentication with custom dashboards',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured Project
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <Card className="bg-card border-border shadow-elegant hover:shadow-glow transition-smooth">
          <CardHeader className="border-b border-border">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-2xl md:text-3xl mb-2">
                  DIGISEWA
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Blockchain-Based Digital Government License Registration System
                </p>
              </div>
              <Badge variant="outline" className="border-accent text-accent text-sm px-3 py-1">
                Final Year Project
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Developed a decentralized platform for secure government license issuance and verification 
                  using Ethereum smart contracts. The system ensures data integrity, prevents tampering, and 
                  provides transparent verification processes. Built collaboratively by a team of 4 engineers, 
                  DIGISEWA represents a modern approach to digital governance with enhanced security and scalability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-smooth"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-xl font-semibold mb-2">Impact & Benefits</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Enhanced transparency in government license issuance processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Improved security through blockchain technology and encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Scalable architecture supporting growing user demands</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Tamper-proof record keeping with immutable audit trails</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
