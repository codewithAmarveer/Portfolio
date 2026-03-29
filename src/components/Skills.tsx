'use client';

import { motion } from 'framer-motion';

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

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } }
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
          className="grid md:grid-cols-3 gap-6 mb-16"
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
                      <span className="text-xs font-mono" style={{ color: 'var(--accent)' }}>
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
                          background: `linear-gradient(90deg, var(--accent), #7fffcf)`,
                          boxShadow: '0 0 8px rgba(0,220,130,0.4)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech badge cloud */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ color: 'var(--text-muted)' }}>
              All Technologies
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={badgeContainerVariants}
          >
            {techBadges.map((tech) => (
              <motion.span
                key={tech}
                variants={badgeVariants}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-default"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  background: 'var(--bg-card)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.borderColor = 'var(--accent)';
                  el.style.color = 'var(--accent)';
                  el.style.background = 'var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.color = 'var(--text-secondary)';
                  el.style.background = 'var(--bg-card)';
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
