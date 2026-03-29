'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'experience', label: 'Experience', href: '/experience' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'skills', label: 'Skills', href: '/skills' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // Handle initial load routing
  useEffect(() => {
    const handleInitialLoad = () => {
      const path = window.location.pathname.replace('/', '') || 'home';
      const el = document.getElementById(path);
      if (el) {
        // slight delay to ensure layout is ready
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    };
    handleInitialLoad();
  }, []);

  // Handle scroll spy and dynamic URL updates
  useEffect(() => {
    let ignoreNextUpdate = false;

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (ignoreNextUpdate) return;

      const sections = navLinks.map((l) => l.id);
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 150) {
          if (active !== s) {
            setActive(s);
            const newPath = s === 'home' ? '/' : `/${s}`;
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
          }
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [active]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    e.preventDefault();
    setOpen(false);
    
    // Deep routing without reload
    window.history.pushState(null, '', href);
    setActive(id);
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-xl border-b'
          : 'py-5'
      }`}
      style={{
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, 'home', '/')}
          className="flex items-center gap-2 group cursor-pointer" 
          id="nav-logo"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{ background: 'var(--accent)' }}
          >
            <Code2 size={16} className="font-bold" style={{ color: 'var(--bg-main)' }} />
          </motion.div>
          <span className="font-bold text-sm tracking-wide hidden sm:block" style={{ color: 'var(--text-primary)' }}>
            Amarveer<span style={{ color: 'var(--accent)' }}>.dev</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              id={`nav-${link.id}`}
              onClick={(e) => handleNavClick(e, link.id, link.href)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                active === link.id ? 'text-accent' : 'hover:text-accent'
              }`}
              style={{
                color: active === link.id ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              {active === link.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ background: 'var(--accent-glow)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <motion.button
            id="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
          
          <motion.a
            href="mailto:amarwork6644@gmail.com"
            id="nav-hire-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary hidden sm:inline-flex text-xs px-4 py-2"
          >
            Hire Me
          </motion.a>
          
          <motion.button
            id="mobile-menu-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
            style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b overflow-hidden"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="container-custom flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  id={`mobile-nav-${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id, link.href)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                  style={{ 
                    color: active === link.id ? 'var(--accent)' : 'var(--text-secondary)',
                    background: active === link.id ? 'var(--accent-glow)' : 'transparent'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
