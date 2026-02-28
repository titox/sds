'use client';

import React from 'react';

// ── NavButton ──────────────────────────────────────────────────────────────────
// Direction: column = icon on top, label below · row = icon left, label right
// Size: sm = 14px label · md = 16px label
// Active: icon + label use default (dark) colour · Default: secondary (muted)

export type NavButtonDirection = 'column' | 'row';
export type NavButtonSize = 'sm' | 'md';

export interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  direction?: NavButtonDirection;
  size?: NavButtonSize;
  active?: boolean;
  onClick?: () => void;
}

export function NavButton({
  icon,
  label,
  direction = 'column',
  size = 'sm',
  active = false,
  onClick,
}: NavButtonProps) {
  const isCol = direction === 'column';

  const containerCls = [
    'flex items-center p-[8px] transition-colors cursor-pointer rounded-[4px]',
    isCol ? 'flex-col gap-[8px]' : 'flex-row gap-[6px]',
    active
      ? 'text-[var(--icon-default-default)]'
      : 'text-[var(--icon-default-secondary)] hover:text-[var(--icon-default-default)]',
  ].join(' ');

  const labelCls = [
    'font-[600] leading-none',
    size === 'sm' ? 'text-[14px]' : 'text-[16px]',
    active
      ? 'text-[var(--text-default-default)]'
      : 'text-[var(--text-default-secondary)]',
  ].join(' ');

  return (
    <button type="button" onClick={onClick} className={containerCls}>
      <span className="flex items-center justify-center w-[24px] h-[24px] shrink-0">
        {icon}
      </span>
      <span className={labelCls}>{label}</span>
    </button>
  );
}

// ── NavButtonList ──────────────────────────────────────────────────────────────

export interface NavButtonItem {
  icon: React.ReactNode;
  label: string;
}

export interface NavButtonListProps {
  items: NavButtonItem[];
  direction?: NavButtonDirection;
  size?: NavButtonSize;
  activeIndex?: number;
  defaultActiveIndex?: number;
  onSelect?: (index: number) => void;
}

export function NavButtonList({
  items,
  direction = 'column',
  size = 'sm',
  activeIndex,
  defaultActiveIndex = 0,
  onSelect,
}: NavButtonListProps) {
  const [internal, setInternal] = React.useState(defaultActiveIndex);
  const current = activeIndex ?? internal;

  const containerCls = direction === 'row'
    ? 'flex flex-row items-center'
    : 'flex flex-col';

  return (
    <div className={containerCls}>
      {items.map((item, i) => (
        <NavButton
          key={i}
          icon={item.icon}
          label={item.label}
          direction={direction}
          size={size}
          active={current === i}
          onClick={() => { setInternal(i); onSelect?.(i); }}
        />
      ))}
    </div>
  );
}

// ── NavigationPill ─────────────────────────────────────────────────────────────
// Simple pill tab — 32px height, cornerRadius=8, text 16px/400

export interface NavigationPillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function NavigationPill({ label, active = false, onClick }: NavigationPillProps) {
  const cls = [
    'flex items-center justify-center px-[8px] h-[32px] rounded-[8px] text-[16px] font-[400] leading-none cursor-pointer transition-colors whitespace-nowrap',
    'text-[var(--text-default-default)]',
    active
      ? 'bg-[var(--background-default-default-hover)]'
      : 'hover:bg-[var(--background-default-default-hover)]',
  ].join(' ');

  return (
    <button type="button" onClick={onClick} className={cls}>
      {label}
    </button>
  );
}

// ── NavigationPillList ─────────────────────────────────────────────────────────

export interface NavigationPillListProps {
  items: string[];
  direction?: 'row' | 'column';
  activeIndex?: number;
  defaultActiveIndex?: number;
  onSelect?: (index: number) => void;
}

export function NavigationPillList({
  items,
  direction = 'row',
  activeIndex,
  defaultActiveIndex = 0,
  onSelect,
}: NavigationPillListProps) {
  const [internal, setInternal] = React.useState(defaultActiveIndex);
  const current = activeIndex ?? internal;

  const containerCls = direction === 'row'
    ? 'flex flex-row items-center gap-[0px]'
    : 'flex flex-col';

  return (
    <div className={containerCls}>
      {items.map((label, i) => (
        <NavigationPill
          key={i}
          label={label}
          active={current === i}
          onClick={() => { setInternal(i); onSelect?.(i); }}
        />
      ))}
    </div>
  );
}
