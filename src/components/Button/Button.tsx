import React from 'react';

export type ButtonVariant = 'default' | 'brand' | 'positive' | 'warning' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    'bg-[var(--background-default-secondary)] text-[var(--text-default-default)] border border-[var(--border-default-default)] hover:bg-[var(--background-default-default-hover)] active:bg-[var(--background-default-secondary-hover)]',
  brand:
    'bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)] border border-[var(--border-brand-default)] hover:bg-[var(--background-brand-hover)] active:bg-[var(--background-brand-hover)]',
  positive:
    'bg-[var(--background-positive-default)] text-[var(--text-positive-on-positive)] border border-[var(--border-positive-default)] hover:bg-[var(--background-positive-hover)] active:bg-[var(--background-positive-hover)]',
  warning:
    'bg-[var(--background-warning-default)] text-[var(--text-warning-on-warning)] border border-[var(--border-warning-default)] hover:bg-[var(--background-warning-hover)] active:bg-[var(--background-warning-hover)]',
  danger:
    'bg-[var(--background-danger-default)] text-[var(--text-danger-on-danger)] border border-[var(--border-danger-default)] hover:bg-[var(--background-danger-hover)] active:bg-[var(--background-danger-hover)]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-[12px] py-[6px] text-[14px] rounded-[4px]',
  md: 'px-[16px] py-[8px] text-[16px] rounded-[8px]',
  lg: 'px-[24px] py-[12px] text-[16px] rounded-[8px]',
};

const disabledStyles =
  'bg-[var(--background-disabled-default)] text-[var(--text-disabled-default)] border-[var(--border-disabled-default)] cursor-not-allowed pointer-events-none';

export function Button({
  variant = 'default',
  size = 'md',
  disabled,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-[8px] font-[600] leading-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-brand-default)] focus-visible:ring-offset-2';

  const classes = [
    base,
    disabled ? disabledStyles : variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
