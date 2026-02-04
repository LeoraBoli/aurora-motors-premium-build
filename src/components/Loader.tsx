import { useState, useEffect } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onLoadingComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-all duration-600 ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Logo Container */}
      <div className="relative mb-12">
        {/* Glow Effect */}
        <div className="absolute inset-0 blur-3xl opacity-30 bg-primary rounded-full scale-150" />
        
        {/* Logo */}
        <div className="relative animate-pulse">
          <div className="flex items-center space-x-3">
            <span className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
              AURORA
            </span>
            <span className="text-4xl md:text-5xl font-light tracking-widest text-primary">
              MOTORS
            </span>
          </div>
        </div>

        {/* Animated Line */}
        <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      </div>

      {/* Progress Bar */}
      <div className="w-64 md:w-80">
        <div className="h-0.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-gold-light to-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex justify-between mt-3 text-xs text-muted-foreground font-medium tracking-wider uppercase">
          <span>Carregando</span>
          <span>{Math.round(Math.min(progress, 100))}%</span>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
