import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  darkMode?: boolean;
}

export default function Experience({ darkMode }: ExperienceProps = {}) {
  const experiences = [
    {
      company: 'IRT - Railenium',
      position: 'Développeuse Web Full Stack',
      period: 'Mars 2024 - Aujourd\'hui',
      description: 'Développement d\'une application web d\'aide à la décision pour le projet TELLi, visant à optimiser les lignes ferroviaires à desserte fine du territoire (LDFT).',
      achievements: [
        'Front-end Vue.js + TailwindCSS + Bootstrap pour interface moderne et ergonomique',
        'Back-end Node.js (Express.js) avec API REST et base de données MySQL',
        'Développement de modèles ML (ARIMA, Prophet) pour prédiction de fréquentation',
        'Simulation Monte Carlo et optimisation multi-critères des scénarios',
        'Déploiement AWS (EC2, S3) avec pipeline CI/CD via Jenkins'
      ],
      color: 'violet'
    },
    {
      company: 'VALTRONIC',
      position: 'Développeuse d\'applications',
      period: 'Mai 2021 - Juillet 2021',
      description: 'Conception et développement d\'une application desktop en Java pour centraliser les informations de tests de cartes électroniques et prévenir les défauts qualité.',
      achievements: [
        'Application desktop Java pour gestion qualité production',
        'Centralisation des données de tests électroniques',
        'Prévention des défauts qualité en production'
      ],
      color: 'purple'
    },
    {
      company: 'Université du Littoral Côte d\'Opale',
      position: 'Master Web et Science de Données',
      period: '2022 - 2024',
      description: 'Formation avancée en développement web, mobile et data science. Méthodologies agiles et bonnes pratiques de développement.',
      achievements: [
        'Développement Web & Mobile (Android Studio)',
        'Machine Learning, analyse de séries temporelles',
        'Méthodologies Agile (Scrum, Kanban), TDD, BDD',
        'Tests automatisés (Cypress, Selenium)'
      ],
      color: 'indigo'
    },
    {
      company: 'Université du Littoral Côte d\'Opale',
      position: 'Licence Sciences et Technologies',
      period: '2021 - 2022',
      description: 'Licence Sciences Pour l\'Ingénieur spécialité Informatique. Bases solides en programmation et systèmes.',
      achievements: [
        'Programmation orientée objet avancée',
        'Algorithmes et structures de données',
        'Bases de données et systèmes d\'information'
      ],
      color: 'violet'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-gray-100 dark:via-violet-400 dark:to-gray-100 text-transparent bg-clip-text">
            Expérience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Parcours professionnel et formation en développement web
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-200 via-purple-200 to-violet-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${idx * 150}ms`,
                  opacity: 0
                }}
              >
                {/* Content */}
                <div className="md:w-1/2 flex flex-col">
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                    idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${exp.color}-600 to-purple-600 flex items-center justify-center`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                          <p className="text-violet-600 dark:text-violet-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Réalisations clés :</p>
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-violet-600 rounded-full mt-2 flex-shrink-0"></span>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 border-4 border-white shadow-lg z-10"></div>

                {/* Empty space for timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
