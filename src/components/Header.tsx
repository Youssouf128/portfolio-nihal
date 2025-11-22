import { useState } from 'react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#hero', icon: '🏠' },
    { label: 'À propos', href: '#about', icon: '👤' },
    { label: 'Services', href: '#services', icon: '⚡' },
    { label: 'Compétences', href: '#skills', icon: '💎' },
    { label: 'Expériences', href: '#experience', icon: '💼' },
    { label: 'Projets', href: '#projects', icon: '🚀' },
    { label: 'Blog', href: '#blog', icon: '📝' },
    { label: 'FAQ', href: '#faq', icon: '❓' },
    { label: 'Contact', href: '#contact', icon: '✉️' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 backdrop-blur-lg shadow-2xl border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo avec animation */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="group flex items-center gap-1.5 sm:gap-2 text-xl sm:text-2xl font-bold text-white hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
            <span className="relative">
              NB
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="group relative px-2.5 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-sm group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark Mode Toggle - Amélioré */}
            <button
              onClick={toggleDarkMode}
              className="relative group flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl backdrop-blur-sm"
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                {/* Sun icon */}
                <Sun 
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 transition-all duration-500 ${
                    darkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                {/* Moon icon */}
                <Moon 
                  className={`absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 text-blue-200 transition-all duration-500 ${
                    darkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </div>
              <span className="hidden lg:inline text-xs sm:text-sm font-medium text-white">
                {darkMode ? 'Dark' : 'Light'}
              </span>
            </button>

            {/* CTA Button - Hidden on small mobile */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="hidden sm:inline-block relative px-4 sm:px-6 py-2 sm:py-2.5 bg-white text-violet-600 rounded-full text-sm font-bold hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 overflow-hidden group whitespace-nowrap"
            >
              <span className="relative z-10">Me contacter</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="bg-gradient-to-b from-purple-600 to-indigo-600 border-t border-white/10 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="flex items-center gap-3 px-4 sm:px-6 py-3 text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              <span className="text-base sm:text-lg">{item.icon}</span>
              {item.label}
            </a>
          ))}
          <div className="px-4 sm:px-6 pt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="block w-full px-4 sm:px-6 py-3 bg-white text-violet-600 text-center rounded-full font-bold hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Me contacter
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
