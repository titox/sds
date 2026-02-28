import React from 'react';

// ── MenuSeparator ─────────────────────────────────────────────────────────────

export function MenuSeparator() {
  return (
    <div className="px-[16px] py-[8px]">
      <div className="h-[1px] bg-[var(--border-default-secondary)]" />
    </div>
  );
}

// ── MenuHeader ────────────────────────────────────────────────────────────────

export interface MenuHeaderProps {
  title: string;
  subtitle?: string;
}

export function MenuHeader({ title, subtitle }: MenuHeaderProps) {
  return (
    <div className="px-[16px] pt-[8px] pb-[4px] flex flex-col gap-0">
      {subtitle && (
        <span className="text-[12px] font-[400] text-[var(--text-default-tertiary)] leading-snug">
          {subtitle}
        </span>
      )}
      <span className="text-[16px] font-[600] text-[var(--text-default-default)] leading-snug">
        {title}
      </span>
    </div>
  );
}

// ── MenuHeading ───────────────────────────────────────────────────────────────

export interface MenuHeadingProps {
  children: React.ReactNode;
}

export function MenuHeading({ children }: MenuHeadingProps) {
  return (
    <div className="px-[16px] pt-[8px] pb-[4px]">
      <span className="text-[16px] font-[600] text-[var(--text-default-default)] leading-snug">
        {children}
      </span>
    </div>
  );
}

// ── MenuItem ──────────────────────────────────────────────────────────────────

export interface MenuItemProps {
  label: string;
  description?: string;
  shortcut?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export function MenuItem({
  label,
  description,
  shortcut,
  icon,
  disabled = false,
  onClick,
}: MenuItemProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        'w-full flex items-start gap-[12px] px-[16px] py-[12px] text-left transition-colors',
        disabled
          ? 'opacity-40 cursor-not-allowed'
          : 'hover:bg-[var(--background-default-default-hover)] cursor-pointer',
      ].join(' ')}
    >
      {/* Icon */}
      {icon && (
        <span className="shrink-0 w-[20px] h-[20px] flex items-center justify-center text-[var(--icon-default-default)] mt-[1px]">
          {icon}
        </span>
      )}

      {/* Body */}
      <div className="flex flex-col gap-[4px] flex-1 min-w-0">
        {/* Label row */}
        <div className="flex items-center justify-between gap-[4px]">
          <span className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug truncate">
            {label}
          </span>
          {shortcut && (
            <span className="text-[12px] font-[400] text-[var(--text-default-tertiary)] shrink-0">
              {shortcut}
            </span>
          )}
        </div>
        {/* Description */}
        {description && (
          <span className="text-[14px] font-[400] text-[var(--text-default-secondary)] leading-snug">
            {description}
          </span>
        )}
      </div>
    </button>
  );
}

// ── Menu ──────────────────────────────────────────────────────────────────────

export interface MenuProps {
  children: React.ReactNode;
  className?: string;
}

export function Menu({ children, className = '' }: MenuProps) {
  return (
    <div
      className={[
        'w-[320px] py-[8px]',
        'bg-[var(--background-default-default)]',
        'border border-[var(--border-default-secondary)]',
        'rounded-[8px]',
        'shadow-[0_8px_16px_var(--color-black-300)]',
        'overflow-hidden',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}
