'use client';

import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const links = [
  { id: 'footer-github', href: 'https://github.com/codewithAmarveer', icon: Github, label: 'GitHub' },
  { id: 'footer-linkedin', href: 'https://www.linkedin.com/in/amarveer-singh-9a6b63251', icon: Linkedin, label: 'LinkedIn' },
  { id: 'footer-email', href: 'mailto:amarwork6644@gmail.com', icon: Mail, label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--accent)' }}
            >
              <Code2 size={14} className="text-black" />
            </div>
            <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              Amarveer<span style={{ color: 'var(--accent)' }}>.dev</span>
            </span>
          </div>

          {/* Copyright */}
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: 'var(--text-muted)' }}
          >
            © {year} Amarveer Singh · Built with
            <Heart size={12} className="inline" style={{ color: 'var(--accent)' }} />
            using Next.js & Tailwind
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {links.map(({ id, href, icon: Icon, label }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{
                  border: '1px solid var(--border)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'var(--accent)';
                  el.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.color = 'var(--text-muted)';
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
