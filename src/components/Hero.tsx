import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Rocket, Zap } from 'lucide-react';

interface HeroProps {
  darkMode?: boolean;
}

export default function Hero({ darkMode }: HeroProps = {}) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-violet-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Animated floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 w-12 h-12 text-violet-300/30 animate-float" />
        <Rocket className="absolute top-40 right-20 w-16 h-16 text-pink-300/30 animate-float animation-delay-2000" />
        <Zap className="absolute bottom-40 left-20 w-10 h-10 text-yellow-300/30 animate-float animation-delay-4000" />
        <Sparkles className="absolute bottom-20 right-40 w-14 h-14 text-blue-300/30 animate-spin-slow" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200/30 dark:bg-violet-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-200/20 to-blue-200/20 dark:from-pink-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 z-20 text-center pt-20">
        <div className="space-y-8">
          {/* Profile Image with animated border */}
          <div className="flex justify-center mb-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64 group">
              {/* Animated rotating border */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-pink-500 to-blue-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse-glow"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 rounded-3xl animate-spin-slow opacity-75" style={{ animationDuration: '8s' }}></div>
              
              {/* Image container */}
              <div className="absolute inset-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl backdrop-blur-xl border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/nihal-profile.png"
                  alt="Nihal Bouchlaghmi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating particles */}
              <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-400 animate-bounce-soft" />
              <Zap className="absolute -bottom-4 -left-4 w-8 h-8 text-pink-400 animate-bounce-soft animation-delay-2000" />
            </div>
          </div>

          {/* Name with gradient animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-violet-700 to-gray-900 dark:from-white dark:via-violet-300 dark:to-white text-transparent bg-clip-text animate-gradient">
            Nihal Bouchlaghmi
          </h1>

          {/* Title with icons */}
          <div className="relative inline-flex items-center gap-3">
            <Code2 className="w-8 h-8 text-violet-600 dark:text-violet-400 animate-pulse" />
            <p className="text-3xl md:text-5xl bg-gradient-to-r from-violet-700 to-purple-700 dark:from-violet-400 dark:to-purple-400 text-transparent bg-clip-text font-semibold neon-glow">
              Full Stack Developer
            </p>
            <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400 animate-bounce-soft" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            <Sparkles className="inline w-5 h-5 text-yellow-500 animate-spin-slow" />
            {' '}Création d'expériences numériques innovantes avec passion et expertise technique{' '}
            <Zap className="inline w-5 h-5 text-pink-500 animate-pulse" />
          </p>

          {/* Social Links with hover effects */}
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="https://github.com/N-Bouchlaghmi"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-125 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Github className="w-6 h-6 group-hover:animate-spin-slow" />
            </a>
            <a
              href="https://www.linkedin.com/in/nihal-bouchlaghmi-20b6a319a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-125 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Linkedin className="w-6 h-6 group-hover:animate-bounce-soft" />
            </a>
            <a
              href="mailto:nihalbouchlaghmi2001@gmail.com"
              className="group w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-2xl hover:shadow-violet-500/50 hover:scale-125 transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <Mail className="w-6 h-6 group-hover:animate-pulse" />
            </a>
          </div>

          {/* CTA Buttons with futuristic effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50 animate-gradient"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:animate-bounce-soft" />
                Me contacter
                <Sparkles className="w-4 h-4 group-hover:animate-spin-slow" />
              </span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-2 border-violet-600 dark:border-violet-400 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5 group-hover:animate-bounce-soft" />
                Voir mes projets
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="w-8 h-8 text-violet-600 dark:text-violet-400 animate-pulse" />
          <div className="w-1 h-16 bg-gradient-to-b from-violet-600 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
