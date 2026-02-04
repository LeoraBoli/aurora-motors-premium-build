import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            setTimeout(onLoadingComplete, 800);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          {/* Animated Background Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
                style={{ top: `${20 + i * 15}%` }}
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '100%', opacity: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>

          {/* Logo Container */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 blur-3xl bg-primary rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 1.5 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            />

            {/* Logo */}
            <div className="relative flex items-center space-x-3">
              <motion.span
                className="text-4xl md:text-6xl font-black tracking-tight text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                AURORA
              </motion.span>
              <motion.span
                className="text-4xl md:text-6xl font-light tracking-widest text-primary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                MOTORS
              </motion.span>
            </div>

            {/* Animated Underline */}
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="w-72 md:w-96"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="h-0.5 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-gold-light to-primary"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
            <div className="flex justify-between mt-4 text-xs text-muted-foreground font-medium tracking-[0.2em] uppercase">
              <span>Carregando experiência</span>
              <motion.span
                key={Math.round(progress)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {Math.round(Math.min(progress, 100))}%
              </motion.span>
            </div>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  left: `${10 + (i * 7) % 80}%`,
                  top: `${15 + (i * 11) % 70}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + (i % 3),
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Corner Decorations */}
          <motion.div
            className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/30"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
