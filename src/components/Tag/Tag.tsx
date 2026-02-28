'use client';

import React from 'react';

// ── Tag ─────────────────────────────────────────────────────────────────────────
// 32px h, cornerRadius=8, pad=8, gap=8, 16px/400 label + optional 16px X icon
// Schemes: brand | danger | positive | warning | neutral
// Variants: primary (filled) | secondary (light bg)

export type TagScheme = 'brand' | 'danger' | 'positive' | 'warning' | 'neutral';
export type TagVariant = 'primary' | 'secondary';

interface SchemeTokens {
  bg: string;
  text: string;
}

const PRIMARY_TOKENS: Record<TagScheme, SchemeTokens> = {
  brand:    { bg: 'var(--background-brand-default)',    text: 'var(--text-brand-on-brand)' },
  danger:   { bg: 'var(--background-danger-default)',   text: 'var(--text-danger-on-danger)' },
  positive: { bg: 'var(--background-positive-default)', text: 'var(--text-positive-on-positive)' },
  warning:  { bg: 'var(--background-warning-default)',  text: 'var(--text-warning-on-warning)' },
  neutral:  { bg: 'var(--background-default-secondary)', text: 'var(--text-default-default)' },
};

const SECONDARY_TOKENS: Record<TagScheme, SchemeTokens> = {
  brand:    { bg: 'var(--background-default-tertiary)', text: 'var(--text-brand-default)' },
  danger:   { bg: 'var(--background-danger-subtle)',    text: 'var(--text-danger-default)' },
  positive: { bg: 'var(--background-positive-subtle)',  text: 'var(--text-positive-default)' },
  warning:  { bg: 'var(--background-warning-subtle)',   text: 'var(--text-warning-default)' },
  neutral:  { bg: 'var(--background-default-tertiary)', text: 'var(--text-default-secondary)' },
};

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export interface TagProps {
  label: string;
  scheme?: TagScheme;
  variant?: TagVariant;
  onRemove?: () => void;
}

export function Tag({ label, scheme = 'brand', variant = 'primary', onRemove }: TagProps) {
  const tokens = variant === 'primary' ? PRIMARY_TOKENS[scheme] : SECONDARY_TOKENS[scheme];
  return (
    <span
      className="inline-flex items-center gap-[8px] h-[32px] px-[8px] rounded-[8px] text-[16px] font-[400] leading-none whitespace-nowrap"
      style={{ backgroundColor: tokens.bg, color: tokens.text }}
    >
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove ${label}`}
          className="flex items-center justify-center w-[16px] h-[16px] opacity-70 hover:opacity-100 transition-opacity"
          style={{ color: tokens.text }}
        >
          <XIcon />
        </button>
      )}
    </span>
  );
}

// ── TagToggle ───────────────────────────────────────────────────────────────────
// On: brand primary (dark bg, white text, checkmark icon)
// Off: light bg, secondary text, no icon

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export interface TagToggleProps {
  label: string;
  on?: boolean;
  defaultOn?: boolean;
  onChange?: (on: boolean) => void;
}

export function TagToggle({ label, on, defaultOn = false, onChange }: TagToggleProps) {
  const [internal, setInternal] = React.useState(defaultOn);
  const isOn = on ?? internal;

  const toggle = () => {
    const next = !isOn;
    setInternal(next);
    onChange?.(next);
  };

  const tokens = isOn
    ? { bg: 'var(--background-brand-default)', text: 'var(--text-brand-on-brand)' }
    : { bg: 'var(--background-default-tertiary)', text: 'var(--text-default-secondary)' };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex items-center gap-[8px] h-[32px] px-[8px] rounded-[8px] text-[16px] font-[400] leading-none whitespace-nowrap cursor-pointer transition-colors"
      style={{ backgroundColor: tokens.bg, color: tokens.text }}
    >
      {isOn && <CheckIcon />}
      {label}
    </button>
  );
}

// ── TagToggleGroup ──────────────────────────────────────────────────────────────

export interface TagToggleGroupProps {
  labels: string[];
  defaultOn?: number[];
  onChange?: (activeIndices: number[]) => void;
}

export function TagToggleGroup({ labels, defaultOn = [], onChange }: TagToggleGroupProps) {
  const [active, setActive] = React.useState<Set<number>>(new Set(defaultOn));

  const toggle = (i: number) => {
    setActive(prev => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      onChange?.([...next]);
      return next;
    });
  };

  return (
    <div className="inline-flex flex-wrap gap-[8px]">
      {labels.map((label, i) => (
        <TagToggle key={i} label={label} on={active.has(i)} onChange={() => toggle(i)} />
      ))}
    </div>
  );
}
