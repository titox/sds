'use client';

import React, { useState } from 'react';

// ── Chevron icons ────────────────────────────────────────────────────────────
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── AccordionItem ────────────────────────────────────────────────────────────
export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: AccordionItemProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const toggle = () => {
    const next = !isOpen;
    setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <div
      className="rounded-[8px] border border-[var(--border-default-secondary)] bg-[var(--background-default-default)] overflow-hidden"
      style={{ borderWidth: 1 }}
    >
      {/* Title row */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-[8px] px-[16px] py-[16px] text-left cursor-pointer"
      >
        <span className="text-[16px] font-[600] text-[var(--text-default-default)] leading-snug flex-1">
          {title}
        </span>
        <ChevronDown
          className={`shrink-0 text-[var(--icon-default-default)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {/* Content */}
      {isOpen && (
        <div className="px-[16px] pb-[16px]">
          <div className="pt-[8px] text-[16px] font-[400] text-[var(--text-default-secondary)] leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Accordion ────────────────────────────────────────────────────────────────
export interface AccordionProps {
  children: React.ReactNode;
  /** Allow multiple items open at once (default: false) */
  multiple?: boolean;
  className?: string;
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return (
    <div className={`flex flex-col gap-[16px] ${className}`}>
      {children}
    </div>
  );
}
