'use client';

import { ExternalLink, Github, Bot, ShoppingCart, ShieldAlert, MonitorCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'ai-video-summarizer',
    icon: Bot,
    title: 'AI Video Summarizer',
    subtitle: 'SaaS Tool',
    description:
      'Independently developed a SaaS tool using Next.js, TypeScript, and the OpenAI API to convert YouTube transcripts into structured, actionable insights for content creators and researchers.',
    tech: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    github: 'https://github.com/codewithAmarveer',
    demo: null,
    metrics: [
      { label: 'Processing', value: 'Real-time' },
      { label: 'Tech', value: 'GPT-4' },
    ],
  },
  {
    id: 'ecommerce-platform',
    icon: ShoppingCart,
    title: 'Full-Stack E-Commerce',
    subtitle: 'Web Platform',
    description:
      'Designed an e-commerce platform featuring JWT authentication, product catalog, cart functionality, and Stripe payments built with React.js, Express.js, and PostgreSQL.',
    tech: ['React.js', 'Express.js', 'PostgreSQL', 'Stripe', 'JWT'],
    github: 'https://github.com/codewithAmarveer',
    demo: null,
    metrics: [
      { label: 'Payments', value: 'Stripe' },
      { label: 'Auth', value: 'JWT' },
    ],
  },
  {
    id: 'ai-content-moderation',
    icon: ShieldAlert,
    title: 'AI Content Moderation Platform',
    subtitle: 'Automated Moderation',
    description:
      'Built an intelligent content moderation pipeline utilizing Python, FastAPI, and Redis. Features integrated React dashboard for manual review and automated GitHub Actions workflows.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'Docker'],
    github: 'https://github.com/codewithAmarveer',
    demo: null,
    metrics: [
      { label: 'Queue', value: 'Redis' },
      { label: 'Testing', value: 'pytest' },
    ],
  },
  {
    id: 'enterprise-service-portal',
    icon: MonitorCheck,
    title: 'Enterprise Service Portal',
    subtitle: 'Internal Corporate Portal',
    description:
      'Developed a centralized service portal serving internal enterprise workflows. Leveraged Next.js Server Components, strict TypeScript integration, and Tailwind CSS for rapid styling.',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind', 'Vercel'],
    github: 'https://github.com/codewithAmarveer',
    demo: null,
    metrics: [
      { label: 'Deploy', value: 'Vercel' },
      { label: 'Style', value: 'Tailwind' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="heading-lg">
            Things I&apos;ve{' '}
            <span style={{ color: 'var(--accent)' }}>Built</span>
          </h2>
          <p className="body-text mt-4 max-w-xl mx-auto">
            A selection of personal and professional projects demonstrating my breadth across
            full-stack development, AI integration, and SaaS architecture.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card p-8 flex flex-col group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      background: 'var(--accent-glow)',
                      border: '1px solid rgba(0,220,130,0.25)',
                    }}
                  >
                    <Icon size={26} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      id={`project-github-${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-black/5 dark:hover:bg-white/5"
                      style={{
                        border: '1px solid var(--border)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <Github size={16} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        id={`project-demo-${project.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:bg-black/5 dark:hover:bg-white/5"
                        style={{
                          border: '1px solid var(--border)',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & subtitle */}
                <div className="mb-3">
                  <span className="tag mb-2 inline-block">{project.subtitle}</span>
                  <h3 className="heading-md mt-1">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="body-text text-sm mb-6 flex-1">{project.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl p-3 text-center"
                      style={{ background: 'var(--bg-secondary)' }}
                    >
                      <p
                        className="text-sm font-semibold"
                        style={{ color: 'var(--accent)' }}
                      >
                        {m.value}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            id="projects-github-cta"
            href="https://github.com/codewithAmarveer"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex decoration-transparent"
          >
            <Github size={16} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
