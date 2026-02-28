'use client';

import React from 'react';

// ── Inline text components ──────────────────────────────────────────────────────
// All based on Figma "Text" page specs. Default color: --text-default-default.

export function Text({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[16px] font-[400] text-[var(--text-default-default)] font-sans ${className}`}>
      {children}
    </span>
  );
}

export function TextStrong({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <strong className={`text-[16px] font-[600] text-[var(--text-default-default)] font-sans ${className}`}>
      {children}
    </strong>
  );
}

export function TextEmphasis({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[16px] font-[400] text-[var(--text-default-default)] font-sans ${className}`} style={{ fontStyle: 'italic' }}>
      {children}
    </span>
  );
}

export function TextSmall({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[14px] font-[400] text-[var(--text-default-default)] font-sans ${className}`}>
      {children}
    </span>
  );
}

export function TextLink({
  children,
  href = '#',
  className = '',
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a href={href} className={`text-[16px] font-[400] underline text-[var(--text-default-default)] font-sans ${className}`}>
      {children}
    </a>
  );
}

export function TextCode({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={`text-[16px] font-[400] text-[var(--text-default-default)] font-mono ${className}`}>
      {children}
    </code>
  );
}

// ── Heading variants ───────────────────────────────────────────────────────────

export function TextHeading({
  children,
  as: Tag = 'h2',
  className = '',
}: {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}) {
  return (
    <Tag className={`text-[24px] font-[600] text-[var(--text-default-default)] font-sans leading-tight ${className}`}>
      {children}
    </Tag>
  );
}

export function TextSubheading({
  children,
  as: Tag = 'h3',
  className = '',
}: {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}) {
  return (
    <Tag className={`text-[20px] font-[400] text-[var(--text-default-default)] font-sans leading-tight ${className}`}>
      {children}
    </Tag>
  );
}

export function TextSubtitle({
  children,
  as: Tag = 'h4',
  className = '',
}: {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}) {
  return (
    <Tag className={`text-[32px] font-[400] text-[var(--text-default-default)] font-sans leading-tight ${className}`}>
      {children}
    </Tag>
  );
}

export function TextTitlePage({
  children,
  as: Tag = 'h1',
  className = '',
}: {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) {
  return (
    <Tag className={`text-[48px] font-[700] text-[var(--text-default-default)] font-sans leading-tight ${className}`}>
      {children}
    </Tag>
  );
}

export function TextTitleHero({
  children,
  as: Tag = 'h1',
  className = '',
}: {
  children: React.ReactNode;
  as?: 'h1' | 'h2';
  className?: string;
}) {
  return (
    <Tag className={`text-[72px] font-[700] text-[var(--text-default-default)] font-sans leading-none ${className}`}>
      {children}
    </Tag>
  );
}

// ── Text Price ─────────────────────────────────────────────────────────────────
// Large: "$" 24px/700 + amount 48px/700 + period 14px/400
// Small: "$" 16px/600 + amount 24px/600 + period 14px/400

export interface TextPriceProps {
  amount: number | string;
  currency?: string;
  period?: string;
  size?: 'large' | 'small';
}

export function TextPrice({ amount, currency = '$', period = '/ mo', size = 'large' }: TextPriceProps) {
  if (size === 'large') {
    return (
      <span className="inline-flex items-end gap-[2px] font-sans">
        <span className="text-[24px] font-[700] text-[var(--text-default-default)] leading-none pb-[4px]">{currency}</span>
        <span className="text-[48px] font-[700] text-[var(--text-default-default)] leading-none">{amount}</span>
        <span className="text-[14px] font-[400] text-[var(--text-default-default)] pb-[6px]">{period}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-end gap-[2px] font-sans">
      <span className="text-[16px] font-[600] text-[var(--text-default-default)] leading-none pb-[2px]">{currency}</span>
      <span className="text-[24px] font-[600] text-[var(--text-default-default)] leading-none">{amount}</span>
      <span className="text-[14px] font-[400] text-[var(--text-default-default)] pb-[2px]">{period}</span>
    </span>
  );
}

// ── Text List ──────────────────────────────────────────────────────────────────
// Text List: title (TextStrong) + list items at 16px/400 color=--text-default-secondary
// Text Link List: same but items are underlined links
// Density: default = 16px gap, tight = 8px gap

export interface TextListItemData {
  text: string;
  href?: string;
}

export interface TextListProps {
  title?: string;
  items: TextListItemData[];
  density?: 'default' | 'tight';
  linkList?: boolean;
}

export function TextList({ title, items, density = 'default', linkList = false }: TextListProps) {
  const gap = density === 'tight' ? 'gap-[8px]' : 'gap-[16px]';
  return (
    <div className="flex flex-col gap-[8px]">
      {title && (
        <strong className="text-[16px] font-[600] text-[var(--text-default-default)] font-sans">
          {title}
        </strong>
      )}
      <ul className={`flex flex-col ${gap}`}>
        {items.map((item, i) => (
          <li key={i} className="text-[16px] font-[400] text-[var(--text-default-secondary)] font-sans">
            {linkList && item.href ? (
              <a href={item.href} className="underline text-[var(--text-default-secondary)]">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
