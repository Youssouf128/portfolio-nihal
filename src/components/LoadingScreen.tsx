import { Sparkles, Zap, Rocket } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="relative text-center space-y-8 z-10">
        {/* Animated logo/icon */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 border-4 border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-24 h-24 border-4 border-white/30 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-violet-600 animate-spin-slow" />
          </div>
        </div>

        {/* Loading text with icons */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Zap className="w-6 h-6 text-yellow-300 animate-bounce" />
            <h2 className="text-4xl font-bold text-white neon-glow">
              Chargement
            </h2>
            <Rocket className="w-6 h-6 text-pink-300 animate-bounce animation-delay-2000" />
          </div>

          <p className="text-white/80 text-lg">Préparation de votre expérience...</p>

          {/* Animated dots */}
          <div className="flex gap-3 justify-center">
            <div className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce-soft" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-pink-300 rounded-full animate-bounce-soft" style={{ animationDelay: '200ms' }}></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full animate-bounce-soft" style={{ animationDelay: '400ms' }}></div>
            <div className="w-3 h-3 bg-green-300 rounded-full animate-bounce-soft" style={{ animationDelay: '600ms' }}></div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 rounded-full animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
