'use client';

import { Github, Linkedin, Mail, MapPin, ArrowRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: '2+', label: 'Years\nExperience' },
  { value: '15+', label: 'APIs\nBuilt' },
  { value: '500+', label: 'Active\nUsers' },
  { value: '95+', label: 'Lighthouse\nScore' },
];

const socialLinks = [
  {
    id: 'hero-github',
    href: 'https://github.com/codewithAmarveer',
    label: 'GitHub',
    icon: Github,
  },
  {
    id: 'hero-linkedin',
    href: 'https://linkedin.com/in/amarveer-singh',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    id: 'hero-email',
    href: 'mailto:amarwork6644@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-grid"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,220,130,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Animated floating orbs */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-10 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="container-custom w-full pt-32 pb-20">
        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-medium"
            style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
          >
            <span className="glow-dot" />
            <MapPin size={12} style={{ color: 'var(--accent)' }} />
            Available for opportunities · Bangalore, India
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={itemVariants}
            className="heading-xl mb-6"
          >
            Hi, I&apos;m{' '}
            <span className="shimmer-text">Amarveer Singh</span>
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>Software Engineer</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Delivering scalable web applications with a focus on{' '}
            <span style={{ color: 'var(--accent)' }}>modern front-end technologies</span>{' '}
            and seamless user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a href="#projects" id="hero-view-work" className="btn-primary">
              View My Work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" id="hero-contact" className="btn-secondary">
              Get In Touch
            </a>
            <a
              href="/Amarveer_Singh CV.pdf"
              download="Amarveer_Singh CV.pdf"
              id="hero-resume"
              className="btn-secondary"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: 'var(--accent)' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs leading-tight whitespace-pre-line"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              Find me on
            </span>
            <div className="flex gap-3">
              {socialLinks.map(({ id, href, label, icon: Icon }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.05, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-xs">Scroll down</span>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: 'var(--border)' }}>
          <motion.div
            className="absolute top-0 left-0 w-full rounded-full"
            style={{ background: 'var(--accent)', height: '40%' }}
            animate={{ top: ['-40%', '140%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
