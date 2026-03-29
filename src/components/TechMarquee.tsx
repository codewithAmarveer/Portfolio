'use client';

import { motion } from 'framer-motion';

interface TechMarqueeProps {
  items: string[];
  speed?: number; // duration in seconds
  reverse?: boolean;
}

export default function TechMarquee({ items, speed = 40, reverse = false }: TechMarqueeProps) {
  // We duplicate the items array so the marquee seamlessly restarts
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 flex items-center">
      {/* Edge Gradients for smooth fade-in/fade-out */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }}
      />

      {/* Marquee Track */}
      <motion.div
        className="flex w-max space-x-4 pl-4"
        animate={{
          x: reverse ? ['-33.33%', '0%'] : ['0%', '-33.33%'],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        // GPU acceleration override
        style={{ willChange: "transform" }}
      >
        {marqueeItems.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="px-5 py-2.5 rounded-2xl text-sm font-medium transition-colors duration-300"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              background: 'var(--bg-card)',
            }}
          >
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
