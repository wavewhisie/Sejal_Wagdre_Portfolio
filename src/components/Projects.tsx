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
      title: 'Smart Contract Security',
      description: 'Implemented Ethereum-based smart contracts for secure and verifiable license issuance',
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

        <Card className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:-translate-y-1">
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

              {/* Right side badges */}
              <div className="flex flex-col items-end gap-2">
                <Badge variant="outline" className="border-accent text-accent text-sm px-3 py-1">
                  Final Year Project
                </Badge>

                <a href="https://github.com/wavewhisie/DigiSewa" target="_blank">
                  <Badge
                    variant="outline"
                    className="cursor-pointer border-primary text-primary text-sm px-3 py-1 hover:bg-primary/10"
                  >
                    GitHub
                  </Badge>
                </a>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Built a blockchain-based system to digitize government license issuance and verification.
                  The platform uses Ethereum smart contracts and IPFS to ensure secure, tamper-proof document handling.
                  Designed to reduce manual processes and improve transparency in real-world governance systems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4 hover:-translate-y-1 hover:shadow-md">
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
              <div className="pt-4">
                <a href="https://doi.org/10.22214/ijraset.2025.75095" target="_blank">
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 cursor-pointer">
                    Research Published – IJRASET 2025 (View Paper)
                  </Badge>
                </a>
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
        <Card className="mt-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:-translate-y-1">
          <CardHeader className="border-b border-border">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-2xl mb-2">
                  Milestone Enterprises Management System
                </CardTitle>
                <p className="text-muted-foreground">
                  Backend system for managing business operations
                </p>
              </div>
              <Badge variant="outline" className="border-accent text-accent text-sm px-3 py-1">Backend Project</Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            <p className="text-foreground/80">
              Developed a scalable backend system for managing products, clients, vendors, and projects.
              Implemented secure authentication and role-based access control for efficient business operations.
            </p>

            <div>
              <h3 className="font-semibold mb-2">My Contribution</h3>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>• Built REST APIs using Node.js and Express.js</li>
                <li>• Implemented JWT authentication and RBAC</li>
                <li>• Designed MongoDB schemas with indexing</li>
                <li>• Developed modular backend using MVC architecture</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'MongoDB'].map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
