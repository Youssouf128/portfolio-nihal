import { Code, Smartphone, Globe, Palette, Zap, LineChart } from 'lucide-react';

interface ServicesProps {
  darkMode?: boolean;
}

export default function Services({ darkMode }: ServicesProps = {}) {
  const services = [
    {
      icon: Globe,
      title: 'Développement Web',
      description: 'Création de sites web modernes, réactifs et performants avec les dernières technologies.',
      features: ['Sites vitrine', 'Applications web', 'E-commerce', 'Progressive Web Apps']
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'UI/UX optimisé']
    },
    {
      icon: Code,
      title: 'API & Backend',
      description: 'Conception d\'API robustes et scalables pour vos applications.',
      features: ['REST API', 'GraphQL', 'Microservices', 'Intégrations']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design d\'interfaces modernes et intuitives centrées sur l\'expérience utilisateur.',
      features: ['Wireframes', 'Prototypes', 'Design System', 'Animation']
    },
    {
      icon: Zap,
      title: 'Optimisation',
      description: 'Amélioration des performances et optimisation SEO pour votre présence en ligne.',
      features: ['Performance', 'SEO', 'Accessibilité', 'Analytics']
    },
    {
      icon: LineChart,
      title: 'Consulting',
      description: 'Conseils stratégiques pour votre transformation digitale et choix technologiques.',
      features: ['Architecture', 'Stack technique', 'Best practices', 'Formation']
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-gray-100 dark:via-violet-400 dark:to-gray-100 text-transparent bg-clip-text">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions sur mesure pour donner vie à vos projets digitaux
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-500 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
