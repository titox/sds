'use client';

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { Footer } from '../Footer/Footer';
import { Tag } from '../Tag/Tag';
import { Avatar } from '../Avatar/Avatar';
import { Tabs } from '../Tabs/Tabs';
import { Button } from '../Button/Button';
import {
  TextTitlePage,
  TextHeading,
  TextSubheading,
  TextSmall,
  TextLink,
  TextStrong,
} from '../Text/Text';

const meta: Meta = {
  title: 'Examples/Newspaper',
  parameters: { layout: 'fullscreen' },
};
export default meta;

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Placeholder image block */
function Img({ ratio = '16/9', className = '' }: { ratio?: string; className?: string }) {
  return (
    <div
      className={`w-full bg-[var(--background-default-tertiary)] overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Subtle crosshatch pattern to suggest a photo */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hatch)" />
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.03)" />
      </svg>
    </div>
  );
}

/** Horizontal rule section divider with label */
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-[12px] py-[4px]">
      <div className="h-[2px] bg-[var(--background-default-default)] w-[8px]" style={{ background: '#1E1E1E' }} />
      <span
        className="text-[11px] font-[700] tracking-[0.12em] uppercase whitespace-nowrap"
        style={{ fontFamily: 'var(--font-sans)', color: '#1E1E1E' }}
      >
        {label}
      </span>
      <div className="flex-1 h-[1px]" style={{ background: '#1E1E1E', opacity: 0.2 }} />
    </div>
  );
}

/** Thin horizontal rule between stacked articles */
function Divider() {
  return <div className="w-full h-[1px] bg-[var(--border-default-secondary)]" style={{ background: '#E0E0E0' }} />;
}

// ── Article data ─────────────────────────────────────────────────────────────

const HERO = {
  section: 'World',
  headline: 'World Leaders Agree on Historic Carbon Reduction Deal at UN Climate Summit',
  deck: 'After three days of tense negotiations in Geneva, 196 nations signed a landmark accord pledging to cut emissions by 60% before 2040 — the most ambitious commitment in the history of international climate diplomacy.',
  author: 'Elena Vásquez',
  authorInitials: 'EV',
  time: '2 hours ago',
  label: 'EXCLUSIVE',
};

const SECONDARY_ARTICLES = [
  {
    section: 'Politics',
    headline: 'Senate Passes Sweeping Infrastructure Bill After Months of Deadlock',
    author: 'James Whitmore',
    authorInitials: 'JW',
    time: '4h ago',
  },
  {
    section: 'Technology',
    headline: 'New AI Regulation Framework Divides Silicon Valley and European Regulators',
    author: 'Aisha Patel',
    authorInitials: 'AP',
    time: '5h ago',
  },
  {
    section: 'Economy',
    headline: 'Federal Reserve Signals Rate Cuts Amid Slowing Inflation Figures',
    author: 'David Chen',
    authorInitials: 'DC',
    time: '6h ago',
  },
];

const POLITICS_ARTICLES = [
  {
    section: 'Politics',
    headline: 'Election Commission Approves New Voting Rules for Midterms',
    snippet: 'The bipartisan commission voted 5-2 to expand early voting windows across all 50 states.',
    time: '1h ago',
  },
  {
    section: 'Europe',
    headline: 'French Parliament Passes Pension Reform Despite Street Protests',
    snippet: 'Thousands took to the streets of Paris as the National Assembly approved the controversial overhaul.',
    time: '3h ago',
  },
  {
    section: 'Americas',
    headline: 'Brazil and Argentina Announce Regional Trade Alliance',
    snippet: 'The two largest South American economies join forces in a landmark economic partnership.',
    time: '5h ago',
  },
  {
    section: 'Asia',
    headline: 'South Korea Holds Emergency Security Council Over Border Tensions',
    snippet: 'Diplomatic talks resume this week as analysts warn of rising regional instability.',
    time: '7h ago',
  },
];

const OPINION_PIECES = [
  {
    author: 'Margaret Collins',
    initials: 'MC',
    title: 'The Climate Deal Is Historic. Now Comes the Hard Part.',
    snippet: 'Signing agreements is the easy step — the real test is whether governments will follow through.',
  },
  {
    author: 'Kwame Osei',
    initials: 'KO',
    title: 'Africa Cannot Afford to Wait for the West to Act on Emissions',
    snippet: 'Developing nations bear the heaviest burden of a crisis they did the least to cause.',
  },
  {
    author: 'Lena Hoffmann',
    initials: 'LH',
    title: 'Why Central Banks Are the New Frontline of Climate Policy',
    snippet: 'Green finance mechanisms may do more than any treaty to redirect capital toward sustainability.',
  },
  {
    author: 'Ricardo Fuentes',
    initials: 'RF',
    title: 'Democracy Is Stronger Than the Pessimists Would Have You Believe',
    snippet: 'A closer look at recent elections suggests voters remain committed to democratic institutions.',
  },
];

const BUSINESS_ARTICLES = [
  {
    section: 'Markets',
    headline: 'Global Stocks Rise as Investors Cheer Climate Deal',
    snippet: 'Renewable energy shares surged on news of the Geneva agreement, with solar ETFs up 8% by midday.',
    author: 'Sofia Martins',
    authorInitials: 'SM',
    time: '1h ago',
  },
  {
    section: 'Tech',
    headline: 'Chip Giant Reports Record Quarterly Earnings Amid AI Boom',
    snippet: 'Revenue from data center products soared 140% year-over-year as demand for AI accelerators continues.',
    author: 'Trevor Walsh',
    authorInitials: 'TW',
    time: '3h ago',
  },
  {
    section: 'Energy',
    headline: 'Oil Futures Fall to Lowest Level Since 2021 on Demand Outlook',
    snippet: 'Brent crude dipped below $72 a barrel as the new climate accord reinforces expectations of a peak oil era.',
    author: 'Nina Okafor',
    authorInitials: 'NO',
    time: '4h ago',
  },
];

const MOST_READ = [
  'Scientists Warn Ocean Warming Has Reached Irreversible Threshold',
  'How the Geneva Summit Almost Fell Apart at the Last Minute',
  'Inside the Backroom Deals That Saved the Climate Accord',
  'What the New Carbon Targets Mean for Your Energy Bill',
  'China\'s Role in the Climate Deal: A Closer Look',
];

// ── Masthead ─────────────────────────────────────────────────────────────────

function Masthead() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
  return (
    <header className="border-b-[3px]" style={{ borderColor: '#1E1E1E' }}>
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-[32px] py-[8px] text-[11px] font-[600] tracking-widest uppercase"
        style={{ background: '#1E1E1E', color: '#F5F5F5', fontFamily: 'var(--font-sans)' }}
      >
        <span>{today}</span>
        <span>Late Edition</span>
      </div>

      {/* Logo */}
      <div className="text-center py-[24px] px-[32px]">
        <h1
          className="text-[56px] font-[700] leading-none tracking-[-0.02em] select-none"
          style={{ fontFamily: 'var(--font-serif)', color: '#1E1E1E' }}
        >
          The Daily
        </h1>
        <p
          className="text-[11px] tracking-[0.3em] uppercase mt-[4px]"
          style={{ color: '#757575', fontFamily: 'var(--font-sans)' }}
        >
          All the news that's fit to read
        </p>
      </div>

      {/* Section nav */}
      <div className="border-t" style={{ borderColor: '#E0E0E0' }}>
        <Tabs
          labels={['Home', 'World', 'Politics', 'Business', 'Technology', 'Culture', 'Opinion', 'Science']}
          defaultActiveIndex={0}
        />
      </div>
    </header>
  );
}

// ── Breaking news bar ─────────────────────────────────────────────────────────

function BreakingBar() {
  return (
    <div className="flex items-center gap-[12px] px-[32px] py-[10px]" style={{ background: '#C41E3A' }}>
      <span
        className="text-[10px] font-[700] tracking-[0.15em] uppercase px-[8px] py-[3px] rounded-[2px] shrink-0"
        style={{ background: '#FFFFFF', color: '#C41E3A', fontFamily: 'var(--font-sans)' }}
      >
        Breaking
      </span>
      <p className="text-[14px] font-[600] truncate" style={{ color: '#FFFFFF', fontFamily: 'var(--font-sans)' }}>
        UN Secretary-General calls Geneva accord &quot;the most significant achievement in the history of climate diplomacy&quot;
      </p>
    </div>
  );
}

// ── Article card components ───────────────────────────────────────────────────

/** Hero article — large, left side */
function HeroArticle() {
  return (
    <article className="flex flex-col gap-[16px]">
      <Img ratio="4/3" />
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[8px]">
          <Tag scheme="brand" variant="secondary" label={HERO.section} />
          <span
            className="text-[10px] font-[700] tracking-widest uppercase px-[6px] py-[2px]"
            style={{ background: '#C41E3A', color: '#FFFFFF', fontFamily: 'var(--font-sans)', borderRadius: 2 }}
          >
            {HERO.label}
          </span>
        </div>
        <TextTitlePage as="h2" className="leading-tight">
          <span style={{ fontFamily: 'var(--font-serif)' }}>{HERO.headline}</span>
        </TextTitlePage>
        <TextSubheading as="h3" className="text-[var(--text-default-secondary)] leading-snug">
          {HERO.deck}
        </TextSubheading>
        <div className="flex items-center gap-[8px]">
          <Avatar type="initial" size="sm" initials={HERO.authorInitials} />
          <TextSmall className="text-[var(--text-default-secondary)]">
            By <TextLink href="#">{HERO.author}</TextLink> · {HERO.time}
          </TextSmall>
        </div>
      </div>
    </article>
  );
}

/** Small stacked article for the right rail */
function RailArticle({ article }: { article: typeof SECONDARY_ARTICLES[number] }) {
  return (
    <article className="flex gap-[12px] items-start">
      <Img ratio="4/3" className="w-[96px] shrink-0 rounded-[2px]" />
      <div className="flex flex-col gap-[6px] min-w-0">
        <Tag scheme="brand" variant="secondary" label={article.section} />
        <TextHeading as="h3" className="leading-tight text-[18px]">
          <span style={{ fontFamily: 'var(--font-serif)' }}>{article.headline}</span>
        </TextHeading>
        <TextSmall className="text-[var(--text-default-secondary)]">
          {article.author} · {article.time}
        </TextSmall>
      </div>
    </article>
  );
}

/** Medium article card for 4-column grid */
function GridArticle({ article }: { article: typeof POLITICS_ARTICLES[number] }) {
  return (
    <article className="flex flex-col gap-[10px]">
      <Img ratio="3/2" className="rounded-[2px]" />
      <Tag scheme="brand" variant="secondary" label={article.section} />
      <TextHeading as="h3" className="leading-tight text-[18px]">
        <span style={{ fontFamily: 'var(--font-serif)' }}>{article.headline}</span>
      </TextHeading>
      <p className="text-[14px] font-[400] text-[var(--text-default-secondary)] leading-relaxed line-clamp-3" style={{ fontFamily: 'var(--font-sans)' }}>
        {article.snippet}
      </p>
      <TextSmall className="text-[var(--text-default-secondary)]">{article.time}</TextSmall>
    </article>
  );
}

/** Opinion card — horizontal, with author avatar */
function OpinionCard({ piece }: { piece: typeof OPINION_PIECES[number] }) {
  return (
    <article
      className="flex flex-col gap-[12px] p-[20px] rounded-[4px] border"
      style={{ borderColor: '#E0E0E0' }}
    >
      <div className="flex items-center gap-[10px]">
        <Avatar type="initial" size="md" initials={piece.initials} />
        <div>
          <TextStrong>{piece.author}</TextStrong>
          <p className="text-[11px] uppercase tracking-widest text-[var(--text-default-secondary)]" style={{ fontFamily: 'var(--font-sans)' }}>
            Opinion
          </p>
        </div>
      </div>
      <TextHeading as="h4" className="leading-tight text-[17px]">
        <span style={{ fontFamily: 'var(--font-serif)' }}>{piece.title}</span>
      </TextHeading>
      <p className="text-[14px] text-[var(--text-default-secondary)] leading-relaxed line-clamp-2" style={{ fontFamily: 'var(--font-sans)' }}>
        {piece.snippet}
      </p>
      <TextLink href="#">Read more →</TextLink>
    </article>
  );
}

/** Business article — horizontal layout */
function BusinessArticle({ article }: { article: typeof BUSINESS_ARTICLES[number] }) {
  return (
    <article className="flex gap-[16px] items-start py-[16px] border-b" style={{ borderColor: '#E0E0E0' }}>
      <Img ratio="4/3" className="w-[120px] shrink-0 rounded-[2px]" />
      <div className="flex flex-col gap-[6px]">
        <Tag scheme="brand" variant="secondary" label={article.section} />
        <TextHeading as="h3" className="leading-tight text-[18px]">
          <span style={{ fontFamily: 'var(--font-serif)' }}>{article.headline}</span>
        </TextHeading>
        <p className="text-[14px] text-[var(--text-default-secondary)] leading-relaxed line-clamp-2" style={{ fontFamily: 'var(--font-sans)' }}>
          {article.snippet}
        </p>
        <TextSmall className="text-[var(--text-default-secondary)]">
          By {article.author} · {article.time}
        </TextSmall>
      </div>
    </article>
  );
}

// ── Full Newspaper page ───────────────────────────────────────────────────────

function NewspaperPage() {
  return (
    <div className="min-h-screen bg-[var(--background-default-default)]" style={{ fontFamily: 'var(--font-sans)' }}>
      <Masthead />
      <BreakingBar />

      <main className="max-w-[1200px] mx-auto px-[32px] py-[32px] flex flex-col gap-[48px]">

        {/* ── Hero grid: 2/3 + 1/3 ─────────────────────────────────────── */}
        <section className="flex flex-col md:flex-row gap-[32px]">
          {/* Hero */}
          <div className="flex-[2] min-w-0">
            <HeroArticle />
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block w-[1px]" style={{ background: '#E0E0E0' }} />

          {/* Right rail */}
          <div className="flex-1 min-w-0 flex flex-col gap-[20px]">
            {SECONDARY_ARTICLES.map((a, i) => (
              <React.Fragment key={a.headline}>
                {i > 0 && <Divider />}
                <RailArticle article={a} />
              </React.Fragment>
            ))}
            <Button variant="default" className="w-full justify-center mt-[8px]">
              More top stories
            </Button>
          </div>
        </section>

        {/* ── Politics section ──────────────────────────────────────────── */}
        <section className="flex flex-col gap-[20px]">
          <SectionDivider label="Politics & World" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
            {POLITICS_ARTICLES.map((a) => (
              <GridArticle key={a.headline} article={a} />
            ))}
          </div>
        </section>

        {/* ── Opinion section ───────────────────────────────────────────── */}
        <section className="flex flex-col gap-[20px]">
          <SectionDivider label="Opinion" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
            {OPINION_PIECES.map((p) => (
              <OpinionCard key={p.title} piece={p} />
            ))}
          </div>
        </section>

        {/* ── Business + Most Read ─────────────────────────────────────── */}
        <section className="flex flex-col md:flex-row gap-[40px]">
          {/* Business articles */}
          <div className="flex-[2] min-w-0 flex flex-col">
            <SectionDivider label="Business & Markets" />
            {BUSINESS_ARTICLES.map((a) => (
              <BusinessArticle key={a.headline} article={a} />
            ))}
          </div>

          {/* Most read sidebar */}
          <div className="flex-1 min-w-0">
            <SectionDivider label="Most Read" />
            <ol className="flex flex-col divide-y" style={{ borderColor: '#E0E0E0' }}>
              {MOST_READ.map((title, i) => (
                <li key={i} className="flex gap-[16px] items-start py-[14px]">
                  <span
                    className="text-[32px] font-[700] leading-none shrink-0 w-[32px] text-right"
                    style={{ color: '#E0E0E0', fontFamily: 'var(--font-serif)' }}
                  >
                    {i + 1}
                  </span>
                  <TextLink href="#">
                    <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 15, lineHeight: 1.4, display: 'block' }}>
                      {title}
                    </span>
                  </TextLink>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Newsletter signup ─────────────────────────────────────────── */}
        <section
          className="flex flex-col md:flex-row items-center justify-between gap-[24px] p-[32px] rounded-[8px]"
          style={{ background: '#1E1E1E' }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-[22px] font-[700]" style={{ color: '#F5F5F5', fontFamily: 'var(--font-serif)' }}>
              Stay informed. Read The Daily.
            </h3>
            <p className="text-[14px] mt-[4px]" style={{ color: '#9E9E9E', fontFamily: 'var(--font-sans)' }}>
              Get the top stories delivered to your inbox every morning.
            </p>
          </div>
          <div className="flex gap-[12px] shrink-0">
            <input
              type="email"
              placeholder="Your email address"
              className="px-[16px] py-[10px] rounded-[6px] text-[14px] border-none outline-none w-[240px]"
              style={{ background: '#2C2C2C', color: '#F5F5F5', fontFamily: 'var(--font-sans)' }}
            />
            <Button variant="brand">Subscribe</Button>
          </div>
        </section>
      </main>

      <Footer
        columns={[
          {
            title: 'Sections',
            links: [
              { label: 'World', href: '#' },
              { label: 'Politics', href: '#' },
              { label: 'Business', href: '#' },
              { label: 'Technology', href: '#' },
            ],
          },
          {
            title: 'More',
            links: [
              { label: 'Culture', href: '#' },
              { label: 'Science', href: '#' },
              { label: 'Opinion', href: '#' },
              { label: 'Podcasts', href: '#' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About Us', href: '#' },
              { label: 'Advertise', href: '#' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ],
          },
        ]}
      />
    </div>
  );
}

export const Default: StoryObj = {
  render: () => <NewspaperPage />,
};
