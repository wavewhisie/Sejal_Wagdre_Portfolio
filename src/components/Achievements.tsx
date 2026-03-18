import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Music, Cpu } from 'lucide-react';

const Achievements = () => {
  const categories = [
  {
    title: 'Technical Achievements',
    icon: Cpu,
    items: [
      'Published research paper in IJRASET (2025) on blockchain-based system',
      'Developed blockchain-based government license system (DIGISEWA)',
      'Built 10+ REST APIs during backend internship',
      'Participated in Smart India Hackathon (SIH), developing real-world solution in a team environment',
      'Participated in college-level hackathon, applying backend and problem-solving skills',
    ],
  },

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
        <p className="text-center text-muted-foreground mb-8">
Highlights of my technical journey and achievements
</p>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed"
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
Along with strong technical skills, I bring teamwork, leadership, and adaptability 
gained through extracurricular activities, enabling me to collaborate effectively 
in real-world development environments.
</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
