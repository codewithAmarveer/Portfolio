'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, Code2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <Link href="#home" className="flex items-center gap-2 group" id="nav-logo">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{ background: 'var(--accent)' }}
          >
            <Code2 size={16} className="text-black font-bold" />
          </motion.div>
          <span className="font-bold text-sm tracking-wide hidden sm:block" style={{ color: 'var(--text-primary)' }}>
            Amarveer<span style={{ color: 'var(--accent)' }}>.dev</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                active === link.href.slice(1)
                  ? 'text-accent'
                  : 'hover:text-accent'
              }`}
              style={{
                color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              {active === link.href.slice(1) && (
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
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
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
                  key={link.href}
                  href={link.href}
                  id={`mobile-nav-${link.label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{ 
                    color: active === link.href.slice(1) ? 'var(--accent)' : 'var(--text-secondary)',
                    background: active === link.href.slice(1) ? 'var(--accent-glow)' : 'transparent'
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
