import React from 'react';

export type IconButtonVariant = 'primary' | 'neutral' | 'subtle';
export type IconButtonSize = 'md' | 'sm';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  icon: React.ReactNode;
  label: string; // required for accessibility (aria-label)
}

const variantStyles: Record<IconButtonVariant, string> = {
  primary:
    'bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)] hover:bg-[#1E1E1E] active:bg-[#1E1E1E]',
  neutral:
    'bg-[var(--background-default-secondary)] text-[var(--text-default-default)] hover:bg-[#E6E6E6] active:bg-[#E6E6E6]',
  subtle:
    'bg-transparent text-[var(--text-default-default)] hover:bg-[var(--background-default-secondary)] active:bg-[var(--background-default-secondary)]',
};

const sizeStyles: Record<IconButtonSize, string> = {
  md: 'w-[44px] h-[44px] p-[12px]',
  sm: 'w-[36px] h-[36px] p-[8px]',
};

const disabledStyles =
  'bg-[#D9D9D9] text-[var(--text-disabled-default)] cursor-not-allowed pointer-events-none';

export function IconButton({
  variant = 'primary',
  size = 'md',
  icon,
  label,
  disabled,
  className = '',
  ...props
}: IconButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-brand-default)] focus-visible:ring-offset-2 shrink-0';

  const classes = [
    base,
    disabled ? disabledStyles : variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} disabled={disabled} aria-label={label} {...props}>
      <span className="w-[20px] h-[20px] flex items-center justify-center [&>svg]:w-[20px] [&>svg]:h-[20px]">
        {icon}
      </span>
    </button>
  );
}
