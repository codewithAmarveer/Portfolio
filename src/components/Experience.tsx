'use client';

import { Briefcase, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 'c5i',
    company: 'C5i',
    role: 'Software Engineer',
    period: 'July 2023 – Present',
    location: 'Bangalore, India',
    current: true,
    highlights: [
      'Architected and launched a full-stack AI insights platform (React, TypeScript, Node.js, Python/Flask, PostgreSQL) from greenfield to 500+ active users, improving operational efficiency by 24.8%',
      'Built 15+ RESTful APIs with optimized SQL queries, improving response times and system throughput.',
      'Created real-time analytics dashboards using Chart.js and Highcharts with drill-down filters and data export.',
      'Revamped a Next.js application with SSR and lazy loading, reducing load time by 44% and achieving 95+ Lighthouse score.',
      'Maintained 80%+ test coverage (Jest, pytest) with a TDD-first approach across frontend and backend services, reducing production defects by 35%, awarded Best Team Award FY 2023–24 for zero P0 incidents',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Experience</p>
          <h2 className="heading-lg">Where I&apos;ve <span style={{ color: 'var(--accent)' }}>Worked</span></h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} id={`exp-${exp.id}`} className="relative" variants={itemVariants}>
              {/* Timeline line */}
              <div
                className="absolute left-6 top-14 bottom-0 w-px hidden sm:block"
                style={{ background: 'var(--border)' }}
              />

              <div className="flex gap-6">
                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-1"
                  style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,220,130,0.3)' }}
                >
                  <Briefcase size={20} style={{ color: 'var(--accent)' }} />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-6 mb-8 hover:-translate-y-1 transition-transform duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="heading-md mb-1">{exp.role}</h3>
                      <p className="font-semibold" style={{ color: 'var(--accent)' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        {exp.current && <span className="glow-dot" />}
                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color: 'var(--accent)' }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
