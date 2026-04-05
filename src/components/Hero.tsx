'use client';

import { Github, Linkedin, Mail, MapPin, ArrowRight, Download } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

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
    href: 'https://www.linkedin.com/in/amarveer-singh-9a6b63251',
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
  // 3D Tilt Effect Setup for Profile Image
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the spring physics for that premium feel
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-150, 150], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Center coordinates
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Difference bounds and sets
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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
            'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
        }}
      />

      {/* Animated floating orbs */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(35px)',
          opacity: 0.15
        }}
      />
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-32 left-10 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(25px)',
          opacity: 0.1
        }}
      />

      <div className="container-custom w-full pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Text Content */}
          <motion.div
            className="lg:col-span-8"
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
              className="heading-xl mb-6 relative z-10"
            >
              Hi, I&apos;m{' '}
              <span className="shimmer-text">Amarveer Singh</span>
              <br />
              <span style={{ color: 'var(--text-secondary)' }}>Software Engineer</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl pr-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Crafting web applications using{' '}
              <span style={{ color: 'var(--accent)' }}>
                modern front-end technologies and robust backend integrations
              </span>{' '}
              to deliver seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '/projects'); }} id="hero-view-work" className="btn-primary">
                View My Work
                <ArrowRight size={16} />
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', '/contact'); }} id="hero-contact" className="btn-secondary">
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
                    className="text-3xl font-bold mb-1 tracking-tight"
                    style={{ color: 'var(--accent)' }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs leading-tight whitespace-pre-line uppercase font-medium tracking-wider"
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
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
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
                      background: 'var(--bg-card)'
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Profile Image (3D Tilt) */}
          <motion.div
            className="lg:col-span-4 flex justify-center lg:justify-end mt-16 lg:-mt-20 relative lg:-ml-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* 3D Wrapper */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl cursor-pointer perspective-container"
            >
              {/* Subtle animated gradient border behind image */}
              <div className="absolute -inset-1 rounded-3xl animate-pulse blur-md"
                style={{ background: 'linear-gradient(45deg, var(--accent), transparent, var(--border))', zIndex: -1 }}></div>

              {/* Profile Image Container */}
              <div
                className="w-full h-full rounded-3xl overflow-hidden relative"
                style={{
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  transform: 'translateZ(30px)' // Elevate image pop
                }}
              >
                {/* 
                  IMPORTANT: Replace this src with your actual profile image filename
                  Ensure the image is placed in your Next.js 'public' directory (e.g., /profile.jpg)
                */}
                <img
                  src="/profile pic.jpeg"
                  alt="Amarveer Singh Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Optional dynamic lighting overlay mapped to mouse */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background: useTransform(
                    () =>
                      `radial-gradient(circle at ${x.get() + 150}px ${y.get() + 150
                      }px, rgba(255,255,255,0.1), transparent 50%)`
                  ),
                  transform: 'translateZ(40px)'
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 relative overflow-hidden rounded-full" style={{ background: 'var(--border)' }}>
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
