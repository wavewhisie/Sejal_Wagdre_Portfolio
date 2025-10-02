import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'G.H. Raisoni University, Nagpur',
      period: '2022 - 2026',
      status: 'In Progress',
    },
    {
      degree: 'Higher Secondary Certification (Class XII)',
      institution: 'CBSE Board',
      period: '2022',
      score: '75.6%',
    },
    {
      degree: 'Senior Secondary Certification (Class X)',
      institution: 'CBSE Board',
      period: '2020',
      score: '85.04%',
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <Card
                key={index}
                className="relative md:ml-20 bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[4.5rem] top-8 w-8 h-8 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-primary-foreground" />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                      <p className="text-muted-foreground">{item.institution}</p>
                    </div>
                    {(item.score || item.status) && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                        {item.score || item.status}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
