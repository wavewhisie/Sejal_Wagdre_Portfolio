import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Music } from 'lucide-react';

const Achievements = () => {
  const categories = [
    {
      title: 'Scouts and Guides',
      icon: Award,
      items: [
        'Completed Pratham Sopan certification',
        'Completed Dwitiya Sopan certification',
        'Completed Tritiya Sopan certification',
        'Participated in Rajya Puraskar award program',
      ],
    },
    {
      title: 'Sports Excellence',
      icon: Trophy,
      items: [
        'Basketball player at cluster level',
        'Competed at regional level tournaments',
        'Represented at national level competitions',
      ],
    },
    {
      title: 'Arts & Culture',
      icon: Music,
      items: [
        'Skit participant for National Integration Festival',
        'Reached preliminary level in Kathak dance',
        'Active involvement in cultural programs',
      ],
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Achievements & Extracurriculars
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-accent transition-smooth hover:shadow-elegant"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="text-accent mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Through diverse extracurricular activities, I've developed teamwork, discipline, and 
            cultural awareness alongside my technical skills. These experiences have shaped me into 
            a well-rounded professional ready to contribute beyond just coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
