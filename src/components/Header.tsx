import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'MODELS', href: '#carros' },
    { name: 'PERFORMANCE', href: '#empresa' },
    { name: 'GALLERY', href: '#galeria' },
    { name: 'CONTACT', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[hsl(0_0%_0%/0.95)] backdrop-blur-md border-b border-primary/10'
            : 'bg-[hsl(0_0%_0%/0.8)] backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo — Left */}
            <a href="#home" className="flex-shrink-0 select-none">
              <span className="text-xl md:text-2xl font-bold tracking-[0.25em] text-primary uppercase">
                AURORA <span className="font-light text-foreground">MOTORS</span>
              </span>
            </a>

            {/* Nav Links — Center (desktop) */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-medium tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA — Right (desktop) */}
            <div className="hidden lg:block">
              <a
                href="#carros"
                className="text-[13px] font-semibold tracking-[0.15em] uppercase px-6 py-2.5 border border-primary text-primary rounded-none hover:bg-primary hover:text-background transition-all duration-300"
              >
                Explore Models
              </a>
            </div>

            {/* Hamburger — Mobile */}
            <button
              className="lg:hidden text-foreground p-2 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="text-2xl font-semibold tracking-[0.2em] text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#carros"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 text-sm font-semibold tracking-[0.15em] uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Models
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
