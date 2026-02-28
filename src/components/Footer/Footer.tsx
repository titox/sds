'use client';

import React from 'react';

// ── Footer ──────────────────────────────────────────────────────────────────────
// Figma: Desktop 1200×468px · bg=white · pad=32 · HORIZONTAL gap=16
//   Column 1 (262px): Logo + social icon buttons (4 icons in a row)
//   Columns 2-4 (262px each): TextLinkList — title (16px/600) + 7 link items (16px/400)
// Mobile: VERTICAL gap=64 · Logo+socials row SPACE_BETWEEN · stacked link columns

// ── Default logo ───────────────────────────────────────────────────────────────
function DefaultLogo() {
  return (
    <span className="flex items-center justify-center w-[40px] h-[35px] rounded-[6px] bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)] text-[14px] font-[700] select-none">
      SDS
    </span>
  );
}

// ── Social icon placeholders ───────────────────────────────────────────────────
function SocialButton({ label, href = '#', children }: { label: string; href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-[24px] h-[24px] flex items-center justify-center text-[var(--icon-default-secondary)] hover:text-[var(--icon-default-default)] transition-colors"
    >
      {children}
    </a>
  );
}

function XSocialIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function GithubIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.35c-2.23.48-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.83-2.14-.08-.2-.36-1.01.08-2.1 0 0 .67-.22 2.2.82a7.66 7.66 0 012 0c1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.52.56.83 1.27.83 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.14.46.55.38A8 8 0 0010 2z" fill="currentColor" /></svg>;
}
function LinkedinIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M6 8.5v5M6 6v.5M10 8.5v5M10 11a2.5 2.5 0 015 0v2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}
function YoutubeIcon() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" /><path d="M8.5 8l4 2-4 2V8Z" fill="currentColor" /></svg>;
}

// ── Footer link column ─────────────────────────────────────────────────────────

export interface FooterLinkItem {
  label: string;
  href?: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLinkItem[];
}

function LinkColumn({ col }: { col: FooterLinkColumn }) {
  return (
    <div className="flex flex-col gap-[12px] flex-1 min-w-[160px]">
      <span className="text-[16px] font-[600] text-[var(--text-default-default)]">{col.title}</span>
      <ul className="flex flex-col gap-[8px]">
        {col.links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href ?? '#'}
              className="text-[16px] font-[400] text-[var(--text-default-secondary)] underline hover:text-[var(--text-default-default)] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────

export interface FooterProps {
  logo?: React.ReactNode;
  columns?: FooterLinkColumn[];
  socialLinks?: { label: string; href?: string; icon: 'x' | 'github' | 'linkedin' | 'youtube' }[];
}

const DEFAULT_COLUMNS: FooterLinkColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' }, { label: 'Pricing', href: '#' }, { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' }, { label: 'Documentation', href: '#' }, { label: 'Status', href: '#' }, { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' }, { label: 'Contact', href: '#' }, { label: 'Legal', href: '#' }, { label: 'Privacy', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#' }, { label: 'Community', href: '#' }, { label: 'API', href: '#' },
      { label: 'Integrations', href: '#' }, { label: 'Tools', href: '#' }, { label: 'Templates', href: '#' }, { label: 'Examples', href: '#' },
    ],
  },
];

const SOCIAL_ICONS = {
  x: <XSocialIcon />,
  github: <GithubIcon />,
  linkedin: <LinkedinIcon />,
  youtube: <YoutubeIcon />,
};

const DEFAULT_SOCIALS: FooterProps['socialLinks'] = [
  { label: 'X / Twitter', href: '#', icon: 'x' },
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
];

export function Footer({
  logo,
  columns = DEFAULT_COLUMNS,
  socialLinks = DEFAULT_SOCIALS,
}: FooterProps) {
  const LogoNode = logo ?? <DefaultLogo />;

  return (
    <footer className="w-full bg-[var(--background-default-default)] border-t border-[var(--border-default-secondary)]">
      <div className="max-w-[1200px] mx-auto px-[32px] py-[32px]">
        {/* Desktop: horizontal row */}
        <div className="flex flex-col md:flex-row gap-[64px] md:gap-[16px]">
          {/* Branding column */}
          <div className="flex flex-col gap-[24px] md:w-[262px] shrink-0">
            {LogoNode}
            <div className="flex items-center gap-[16px]">
              {socialLinks?.map(({ label, href, icon }) => (
                <SocialButton key={label} label={label} href={href}>
                  {SOCIAL_ICONS[icon]}
                </SocialButton>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-col md:flex-row gap-[24px] md:gap-[16px] flex-1">
            {columns.map((col, i) => (
              <LinkColumn key={i} col={col} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
