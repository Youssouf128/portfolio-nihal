import { Zap, Code2, Cpu, GitBranch, Train, Star } from 'lucide-react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line
          x1="0"
          y1="200"
          x2="1200"
          y2="200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="animate-pulse-slow"
        />
        <line
          x1="0"
          y1="400"
          x2="1200"
          y2="400"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          className="animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
        <circle cx="200" cy="150" r="30" fill="none" stroke="#a855f7" strokeWidth="2" className="animate-orbit" />
        <circle cx="600" cy="500" r="25" fill="none" stroke="#7c3aed" strokeWidth="2" className="animate-orbit" style={{ animationDelay: '3s' }} />
      </svg>

      <div className="absolute top-10 left-10 animate-float" style={{ animationDelay: '0s' }}>
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-500/30 to-violet-500/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center transform hover:scale-110 transition-transform">
          <Code2 className="w-10 h-10 text-purple-300" />
        </div>
      </div>

      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500/25 to-fuchsia-500/15 backdrop-blur-sm border border-violet-400/30 flex items-center justify-center">
          <Zap className="w-12 h-12 text-violet-300" />
        </div>
      </div>

      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-pink-500/20 backdrop-blur-sm border border-fuchsia-400/30 flex items-center justify-center">
          <Cpu className="w-10 h-10 text-fuchsia-300" />
        </div>
      </div>

      <div className="absolute bottom-20 right-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500/25 to-purple-500/15 backdrop-blur-sm border border-pink-400/30 flex items-center justify-center">
          <GitBranch className="w-12 h-12 text-pink-300" />
        </div>
      </div>

      <div className="absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: '3s' }}>
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/10 backdrop-blur-sm border border-purple-400/20 flex items-center justify-center">
          <Train className="w-8 h-8 text-purple-200" />
        </div>
      </div>

      <div className="absolute bottom-1/4 left-1/3 animate-twinkle">
        <Star className="w-8 h-8 text-purple-300" fill="currentColor" />
      </div>

      <div className="absolute top-1/4 right-1/4 animate-twinkle" style={{ animationDelay: '1.5s' }}>
        <Star className="w-6 h-6 text-violet-300" fill="currentColor" />
      </div>

      <div className="absolute bottom-1/3 right-1/4 animate-twinkle" style={{ animationDelay: '2.5s' }}>
        <Star className="w-7 h-7 text-fuchsia-300" fill="currentColor" />
      </div>

      <div className="absolute top-20 right-1/3 animate-pulse-slow">
        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
      </div>

      <div className="absolute bottom-1/4 left-1/4 animate-pulse-slow" style={{ animationDelay: '1s' }}>
        <div className="w-2 h-2 rounded-full bg-violet-400"></div>
      </div>
    </div>
  );
}
