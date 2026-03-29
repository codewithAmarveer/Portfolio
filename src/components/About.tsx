'use client';

import { GraduationCap, Award, MapPin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const certifications = [
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic'
  },
  {
    title: 'Azure Developer Associate (AZ-204)',
    issuer: 'Microsoft Certified'
  },
  {
    title: 'Certified React Developer',
    issuer: 'Coursera'
  },
  {
    title: 'Continuous Delivery and Managing Builds',
    issuer: 'Azure DevOps'
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="section-label mb-4">About Me</p>
            <h2 className="heading-lg mb-6">
              Building the web,{' '}
              <span style={{ color: 'var(--accent)' }}>one component</span> at a time.
            </h2>
            <p className="body-text mb-6">
              I&apos;m a Software Engineer based in Bangalore, India, passionate about creating
              intuitive and high-performing web applications. I specialize in transforming complex
              requirements into beautifully crafted, scalable solutions.
            </p>
            <p className="body-text mb-8">
              Currently at <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>C5i</span>, I
              build full-stack AI insights platforms, real-time analytics dashboards, and lead
              front-end performance optimizations that have measurably improved user engagement and
              development velocity.
            </p>

            {/* Location badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <MapPin size={14} style={{ color: 'var(--accent)' }} />
              Bangalore, India
            </div>
          </motion.div>

          {/* Right — Cards */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Current role card */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,220,130,0.2)' }}
                >
                  <Code2 size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                      Software Engineer · C5i
                    </p>
                    <span className="glow-dot" />
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    July 2023 – Present · Bangalore, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education card */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,220,130,0.2)' }}
                >
                  <GraduationCap size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                    B.Tech — Computer Science & Engineering
                  </p>
                  <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>
                    AMC Engineering College, VTU
                  </p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                    2019 – 2023
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,220,130,0.2)' }}
                >
                  <Award size={22} style={{ color: 'var(--accent)' }} />
                </div>
                <div className="w-full">
                  <p className="font-semibold mb-3 border-b pb-2" style={{ color: 'var(--text-primary)', borderColor: 'var(--border)' }}>
                    Licenses & Certifications
                  </p>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx}>
                        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {cert.title}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          {cert.issuer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
