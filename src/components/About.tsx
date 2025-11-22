import { User, Briefcase, GraduationCap, Award } from 'lucide-react';

interface AboutProps {
  darkMode?: boolean;
}

export default function About({ darkMode }: AboutProps = {}) {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-gray-100 dark:via-violet-400 dark:to-gray-100 text-transparent bg-clip-text">
            À propos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionné par le développement et l'innovation technologique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl transition-colors duration-500">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl">
                <User className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">Développeuse Full Stack</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                Passionnée par le développement web et la data science, je crée des applications innovantes avec Vue.js, Node.js et technologies cloud
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expérience Professionnelle</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Actuellement développeuse full stack chez IRT-Railenium, spécialisée en Vue.js, Node.js,
                    Machine Learning et déploiement cloud (AWS). Projets d'optimisation ferroviaire et data science.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Formation & Compétences</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Master Web et Science de Données (ULCO). Stack technique : Vue.js, Node.js, Spring Boot,
                    Python (ML), MySQL, AWS. Méthodologies Agile, CI/CD avec Jenkins, analyse de données.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Recherche d'opportunités</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    À la recherche d'un CDI pour contribuer à des projets innovants. Motivée par les
                    environnements collaboratifs, les défis techniques et l'apprentissage continu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
