import { Code, Database, Globe, Server } from 'lucide-react';

interface SkillsProps {
  darkMode?: boolean;
}

export default function Skills({ darkMode }: SkillsProps = {}) {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['Vue.js', 'Bootstrap', 'TailwindCSS', 'Three.js', 'HTML/CSS'],
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js (Express)', 'Spring Boot', 'Java EE', 'API REST', 'Python'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: ['MySQL', 'Oracle', 'AWS (EC2/S3)', 'Hibernate', 'JDBC'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'DevOps & Data',
      icon: Code,
      skills: ['Jenkins CI/CD', 'Git/GitHub', 'ML (ARIMA/Prophet)', 'Pandas/NumPy', 'Agile/Scrum'],
      color: 'from-blue-500 to-violet-500'
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-gray-100 dark:via-violet-400 dark:to-gray-100 text-transparent bg-clip-text">
            Compétences
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies maîtrisées pour créer des solutions web complètes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-500 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">{category.title}</h3>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-violet-50 dark:hover:bg-violet-900/30 hover:text-violet-700 dark:hover:text-violet-300 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
