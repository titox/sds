'use client';

import React from 'react';

// ── Tab ─────────────────────────────────────────────────────────────────────────
// Figma specs: 66×30px, text 16px/400
//   Active=On:  text=--text-default-default, 2px bottom border
//   Active=Off: text=--text-default-secondary
//   Hover:      bg=--background-default-default-hover (#F5F5F5)

export interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Tab({ label, active = false, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'flex items-center justify-center h-[30px] px-[12px] text-[16px] font-[400] leading-none whitespace-nowrap cursor-pointer transition-colors',
        'hover:bg-[var(--background-default-default-hover)]',
        active
          ? 'text-[var(--text-default-default)] border-b-[2px] border-[var(--border-default-default)] rounded-t-[4px]'
          : 'text-[var(--text-default-secondary)] rounded-[4px]',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

// ── Tabs ────────────────────────────────────────────────────────────────────────
// Row of Tab components with a bottom border on the container.
// Tabs component: 6 instances, first is active by default.

export interface TabsProps {
  labels: string[];
  activeIndex?: number;
  defaultActiveIndex?: number;
  onSelect?: (index: number) => void;
}

export function Tabs({ labels, activeIndex, defaultActiveIndex = 0, onSelect }: TabsProps) {
  const [internal, setInternal] = React.useState(defaultActiveIndex);
  const current = activeIndex ?? internal;

  return (
    <div className="flex flex-row border-b border-[var(--border-default-secondary)]">
      {labels.map((label, i) => (
        <Tab
          key={i}
          label={label}
          active={current === i}
          onClick={() => {
            setInternal(i);
            onSelect?.(i);
          }}
        />
      ))}
    </div>
  );
}
