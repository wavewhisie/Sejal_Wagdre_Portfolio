import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import pythonIcon from '@/assets/tech/python.png';
import reactIcon from '@/assets/tech/react.png';
import nodejsIcon from '@/assets/tech/nodejs.png';
import mongodbIcon from '@/assets/tech/mongodb.png';
// import ethereumIcon from '@/assets/tech/ethereum.png';
import sqlIcon from '@/assets/tech/sql.png';
import htmlIcon from '@/assets/tech/html.png';
import cssIcon from '@/assets/tech/css.png';
import postgresqlIcon from '@/assets/tech/postgresql.png';
import mysqlIcon from '@/assets/tech/mysql.png';
import vscodeIcon from '@/assets/tech/vscode.png';
import javascriptIcon from '@/assets/tech/javascript.png'
import postmanIcon from '@/assets/tech/postman.png'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: pythonIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'SQL', icon: sqlIcon },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'ReactJS', icon: reactIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
      ],
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: nodejsIcon },
        { name: 'MongoDB', icon: mongodbIcon },
        { name: 'PostgreSQL', icon: postgresqlIcon },
        { name: 'MySQL', icon: mysqlIcon },
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'VS Code', icon: vscodeIcon },
        { name: 'Postman', icon: postmanIcon },

      ],
    },
  ];

  const softSkills = [
  'Problem Solving',
  'Adaptability',
  'Team Collaboration',
  'Communication',
];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Technologies and tools I work with
        </p>
        <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:-translate-y-2"
            >
              <CardHeader>
                <CardTitle className="text-xl text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 hover:-translate-y-1 transition-all duration-300 transition-smooth"
                    >
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12 object-contain"
                        />
                      )}
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl text-center">Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-smooth text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
