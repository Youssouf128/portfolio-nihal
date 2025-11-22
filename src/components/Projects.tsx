import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode?: boolean;
}

export default function Projects({ darkMode }: ProjectsProps = {}) {
  const projects = [
    {
      title: 'E-Commerce Fashion',
      description: 'Plateforme e-commerce complète avec paiement intégré, gestion des stocks et système de recommandation.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'E-commerce'
    },
    {
      title: 'Task Flow Pro',
      description: 'Application de gestion de tâches collaborative en temps réel avec notifications push et analytics.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'],
      category: 'Productivité'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard analytique avec visualisation de données complexes et rapports personnalisables.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'Express', 'MongoDB'],
      category: 'Data Viz'
    },
    {
      title: 'Social Connect API',
      description: 'API REST robuste et scalable pour application de réseau social avec authentification JWT.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Django', 'Redis', 'Docker'],
      category: 'Backend'
    },
    {
      title: 'Fitness Tracker Mobile',
      description: 'Application mobile de suivi sportif avec GPS, statistiques et programmes d\'entraînement.',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      category: 'Mobile'
    },
    {
      title: 'Restaurant Booking',
      description: 'Système de réservation en ligne pour restaurants avec gestion des tables et menu digital.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Twilio'],
      category: 'Web App'
    },
    {
      title: 'Learning Platform',
      description: 'Plateforme d\'apprentissage en ligne avec cours vidéo, quiz interactifs et certificats.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Prisma', 'AWS', 'Stripe'],
      category: 'E-learning'
    },
    {
      title: 'Real Estate Portal',
      description: 'Portail immobilier avec recherche avancée, visite virtuelle 360° et système de messagerie.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'GraphQL', 'PostgreSQL', 'Mapbox'],
      category: 'Immobilier'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-gray-100 dark:via-violet-400 dark:to-gray-100 text-transparent bg-clip-text">
            Projets Réalisés
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une sélection de projets qui illustrent mon expertise et ma créativité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors duration-200 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-lg transition-all duration-200 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
