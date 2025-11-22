import { useEffect, useState } from 'react';

export default function MagicCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);

      // Add trail effect every few movements
      if (trailId % 2 === 0) {
        const newTrail = {
          id: trailId,
          x: e.clientX,
          y: e.clientY
        };
        setTrail(prev => [...prev.slice(-6), newTrail]);
      }
      trailId++;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Trail particles with fade out */}
      {trail.map((point, idx) => (
        <div
          key={point.id}
          className="pointer-events-none fixed w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 z-40 animate-pulse"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: (idx + 1) / trail.length * 0.4,
            transition: 'opacity 0.5s ease-out',
          }}
        />
      ))}

      {/* Main cursor dot with glow */}
      <div
        className={`pointer-events-none fixed rounded-full z-50 transition-all duration-200 ${
          isHovering 
            ? 'w-4 h-4 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500' 
            : 'w-2.5 h-2.5 bg-violet-600'
        }`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: isHovering 
            ? '0 0 30px rgba(139, 92, 246, 0.9), 0 0 60px rgba(168, 85, 247, 0.5)' 
            : '0 0 15px rgba(139, 92, 246, 0.6)',
        }}
      />

      {/* Outer ring with animation */}
      <div
        className={`pointer-events-none fixed rounded-full border-2 z-50 transition-all duration-300 ${
          isHovering 
            ? 'w-14 h-14 border-violet-400 animate-spin-slow' 
            : 'w-10 h-10 border-violet-500/50'
        }`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: isHovering ? '0 0 30px rgba(139, 92, 246, 0.5), inset 0 0 20px rgba(139, 92, 246, 0.3)' : 'none',
        }}
      />

      {/* Inner pulsing ring */}
      <div
        className={`pointer-events-none fixed rounded-full border z-40 transition-all duration-300 ${
          isHovering ? 'w-8 h-8 border-yellow-400' : 'w-6 h-6 border-violet-400/30'
        }`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          animation: isHovering ? 'pulse 1s ease-in-out infinite' : 'none',
        }}
      />

      {/* Orbiting particles when hovering */}
      {isHovering && (
        <>
          {[0, 90, 180, 270].map((angle, idx) => {
            const time = Date.now() / 800;
            const radius = 25;
            const x = mousePos.x + Math.cos((angle * Math.PI) / 180 + time) * radius;
            const y = mousePos.y + Math.sin((angle * Math.PI) / 180 + time) * radius;
            
            return (
              <div
                key={idx}
                className="pointer-events-none fixed w-1.5 h-1.5 rounded-full bg-yellow-400 z-40"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: '0 0 10px rgba(250, 204, 21, 0.9)',
                  animation: 'twinkle 0.8s ease-in-out infinite',
                  animationDelay: `${idx * 0.2}s`,
                }}
              />
            );
          })}
        </>
      )}
    </>
  );
}
