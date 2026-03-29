'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactLinks = [
  {
    id: 'contact-email',
    icon: Mail,
    label: 'Email',
    value: 'amarwork6644@gmail.com',
    href: 'mailto:amarwork6644@gmail.com',
  },
  {
    id: 'contact-github',
    icon: Github,
    label: 'GitHub',
    value: 'github.com/codewithAmarveer',
    href: 'https://github.com/codewithAmarveer',
  },
  {
    id: 'contact-linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amarveer-singh',
    href: 'https://linkedin.com/in/amarveer-singh',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a submission delay, then open mailto
    setTimeout(() => {
      const mailto = `mailto:amarwork6644@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
      window.open(mailto);
      setSent(true);
      setLoading(false);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="heading-lg">
            Let&apos;s <span style={{ color: 'var(--accent)' }}>Work Together</span>
          </h2>
          <p className="body-text mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;m always open to discussing
            new opportunities and interesting challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Location */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-2"
              style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            >
              <MapPin size={14} style={{ color: 'var(--accent)' }} />
              Bangalore, India · Open to Remote
            </div>

            <p className="body-text text-base leading-relaxed">
              I&apos;m currently open to new full-time roles, freelance collaborations, and
              interesting side projects. Whether you have a question or a proposal — my inbox
              is always open.
            </p>

            <div className="space-y-3 pt-2">
              {contactLinks.map(({ id, icon: Icon, label, value, href }) => (
                <motion.a
                  key={id}
                  id={id}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 glass-card group transition-colors duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: 'var(--accent-glow)',
                      border: '1px solid rgba(0,220,130,0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>
                      {label}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-8"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'var(--accent-glow)', border: '1px solid rgba(0,220,130,0.3)' }}
                >
                  <CheckCircle2 size={32} style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="heading-md mb-2">Message Sent!</h3>
                <p className="body-text text-sm">
                  Your email client should have opened. I&apos;ll get back to you soon!
                </p>
                <button
                  id="contact-reset-btn"
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="btn-secondary mt-6 text-sm"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5" suppressHydrationWarning>
                <div suppressHydrationWarning>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    suppressHydrationWarning
                  />
                </div>

                <div suppressHydrationWarning>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    suppressHydrationWarning
                  />
                </div>

                <div suppressHydrationWarning>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hi!"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    suppressHydrationWarning
                  />
                </div>

                <motion.button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center"
                  suppressHydrationWarning
                >
                  {loading ? (
                    <>
                      <div
                        className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: 'rgba(0,0,0,0.3)', borderTopColor: 'transparent' }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
