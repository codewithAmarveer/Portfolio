'use client';

import { motion } from 'framer-motion';
import TechMarquee from './TechMarquee';

const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Redux Toolkit', level: 82 },
      { name: 'Material-UI', level: 80 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Testing',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Jest / pytest', level: 82 },
      { name: 'React Testing Library', level: 80 },
    ],
  },
];

const techBadges = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Python', 'Node.js',
  'PostgreSQL', 'Tailwind CSS', 'Redux', 'Chart.js', 'FastAPI',
  'Jest', 'Docker', 'Git', 'Azure', 'REST APIs', 'SQL',
];

// Split the badges into two rows for the marquee effect
const topRow = techBadges.slice(0, Math.ceil(techBadges.length / 2));
const bottomRow = techBadges.slice(Math.ceil(techBadges.length / 2));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Skills</p>
          <h2 className="heading-lg">
            My <span style={{ color: 'var(--accent)' }}>Tech Stack</span>
          </h2>
          <p className="body-text mt-4 max-w-lg mx-auto">
            Technologies and tools I use to bring ideas to life — from pixel-perfect
            interfaces to robust backend systems.
          </p>
        </motion.div>

        {/* Skill bars */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {skillGroups.map((group) => (
            <motion.div 
              key={group.id} 
              id={`skills-${group.id}`} 
              className="glass-card p-6"
              variants={cardVariants}
            >
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-5"
                style={{ color: 'var(--accent)' }}>
                {group.label}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: 'var(--border)' }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        style={{
                          background: `linear-gradient(90deg, var(--bg-card), var(--accent))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Horizontal Tech Marquee */}
      <div className="text-center w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-8"
             style={{ color: 'var(--text-muted)' }}>
            All Technologies
          </p>
        </motion.div>

        {/* Full-width container ignoring container max-width constraints */}
        <div className="w-full relative flex flex-col gap-2">
          {/* Top Row Marquee */}
          <TechMarquee items={topRow} speed={30} />
          {/* Bottom Row Marquee moving in reverse */}
          <TechMarquee items={bottomRow} speed={35} reverse={true} />
        </div>
      </div>
    </section>
  );
}
