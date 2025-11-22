import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogProps {
  darkMode?: boolean;
}

export default function Blog({ darkMode }: BlogProps = {}) {
  const articles = [
    {
      title: 'Les tendances du développement web en 2024',
      excerpt: 'Découvrez les technologies et frameworks qui domineront le développement web cette année.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Développement',
      date: '15 Nov 2024',
      readTime: '5 min'
    },
    {
      title: 'React vs Vue : Quel framework choisir ?',
      excerpt: 'Comparaison détaillée entre React et Vue pour vous aider à faire le bon choix pour votre projet.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Comparatif',
      date: '10 Nov 2024',
      readTime: '8 min'
    },
    {
      title: 'Optimisation des performances web',
      excerpt: 'Techniques avancées pour améliorer la vitesse de chargement et l\'expérience utilisateur.',
      image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Performance',
      date: '5 Nov 2024',
      readTime: '6 min'
    },
    {
      title: 'Introduction à TypeScript',
      excerpt: 'Pourquoi TypeScript devient incontournable dans le développement JavaScript moderne.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tutorial',
      date: '1 Nov 2024',
      readTime: '7 min'
    },
    {
      title: 'Design patterns en JavaScript',
      excerpt: 'Les patterns de conception essentiels pour écrire du code JavaScript maintenable.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Best Practices',
      date: '28 Oct 2024',
      readTime: '10 min'
    },
    {
      title: 'Sécurité des applications web',
      excerpt: 'Les meilleures pratiques pour protéger vos applications contre les vulnérabilités courantes.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Sécurité',
      date: '25 Oct 2024',
      readTime: '9 min'
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-gray-100 dark:via-violet-400 dark:to-gray-100 text-transparent bg-clip-text">
            Blog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Articles, tutoriels et réflexions sur le développement web
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <article
              key={article.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 100}ms`,
                opacity: 0
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-violet-600 text-white text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <button className="flex items-center gap-2 text-violet-600 font-semibold hover:gap-3 transition-all duration-300">
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
}
