import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  darkMode?: boolean;
}

export default function FAQ({ darkMode }: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quels types de projets réalisez-vous ?',
      answer: 'Je réalise une large gamme de projets web et mobile : sites vitrine, e-commerce, applications web complexes, applications mobiles, API, dashboards, et bien plus. Chaque projet est personnalisé selon vos besoins spécifiques.'
    },
    {
      question: 'Quel est votre processus de développement ?',
      answer: 'Mon processus comprend 5 étapes : 1) Analyse des besoins et définition du cahier des charges, 2) Design et prototypage, 3) Développement itératif avec feedback régulier, 4) Tests et optimisation, 5) Déploiement et formation. Je privilégie une approche agile avec une communication transparente.'
    },
    {
      question: 'Combien de temps prend un projet ?',
      answer: 'La durée dépend de la complexité du projet. Un site vitrine simple peut prendre 2-3 semaines, une application web complexe 2-4 mois, et une application mobile 3-6 mois. Je fournis toujours un planning détaillé après l\'analyse initiale.'
    },
    {
      question: 'Proposez-vous de la maintenance après livraison ?',
      answer: 'Oui, absolument ! Je propose des contrats de maintenance mensuels incluant : corrections de bugs, mises à jour de sécurité, optimisations, et support technique. Je reste également disponible pour des évolutions futures de votre projet.'
    },
    {
      question: 'Quelles technologies utilisez-vous ?',
      answer: 'J\'utilise les technologies les plus modernes et adaptées à chaque projet : React, Next.js, TypeScript pour le frontend, Node.js, Python pour le backend, PostgreSQL, MongoDB pour les bases de données, et AWS, Vercel pour l\'hébergement. Je choisis toujours la stack la plus appropriée.'
    },
    {
      question: 'Comment se déroule la tarification ?',
      answer: 'Je propose deux modèles : forfait fixe pour les projets bien définis, ou régie horaire pour les projets évolutifs. Après notre première discussion, je vous fournis un devis détaillé gratuit. Des facilités de paiement en plusieurs fois sont possibles.'
    },
    {
      question: 'Travaillez-vous avec des clients internationaux ?',
      answer: 'Oui, je travaille avec des clients du monde entier. Je suis parfaitement à l\'aise en français et en anglais. Les réunions peuvent se faire en visioconférence, et j\'adapte mes horaires de travail selon les fuseaux horaires.'
    },
    {
      question: 'Puis-je modifier mon site/app après livraison ?',
      answer: 'Oui ! Je développe des solutions avec des interfaces d\'administration intuitives qui vous permettent de gérer le contenu facilement. Je fournis également une formation complète et une documentation détaillée. Pour des modifications plus complexes, je reste disponible.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-gray-100 dark:via-violet-400 dark:to-gray-100 text-transparent bg-clip-text">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vous avez des questions ? Voici les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-violet-200 dark:hover:border-violet-600 transition-all duration-300"
              style={{
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${idx * 50}ms`,
                opacity: 0
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-violet-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-violet-100 dark:border-gray-600">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Vous ne trouvez pas la réponse ?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            N'hésitez pas à me contacter directement, je serai ravi de répondre à toutes vos questions.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
