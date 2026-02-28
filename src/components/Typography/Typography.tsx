import React from 'react';

export type TypographyVariant =
  | 'title-hero'
  | 'title-page'
  | 'heading'
  | 'subheading'
  | 'subtitle'
  | 'body'
  | 'code';

export type TypographySize = 'sm' | 'md' | 'lg';

export interface TypographyProps {
  variant?: TypographyVariant;
  size?: TypographySize;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const variantDefaults: Record<TypographyVariant, React.ElementType> = {
  'title-hero': 'h1',
  'title-page': 'h1',
  heading: 'h2',
  subheading: 'h3',
  subtitle: 'h4',
  body: 'p',
  code: 'code',
};

const variantStyles: Record<TypographyVariant, Record<TypographySize, string>> = {
  'title-hero': {
    sm: 'text-[40px] font-[700] font-sans leading-tight tracking-tight',
    md: 'text-[48px] font-[700] font-sans leading-tight tracking-tight',
    lg: 'text-[72px] font-[700] font-sans leading-tight tracking-tight',
  },
  'title-page': {
    sm: 'text-[40px] font-[700] font-sans leading-tight',
    md: 'text-[48px] font-[700] font-sans leading-tight',
    lg: 'text-[64px] font-[700] font-sans leading-tight',
  },
  heading: {
    sm: 'text-[20px] font-[600] font-sans leading-snug',
    md: 'text-[24px] font-[600] font-sans leading-snug',
    lg: 'text-[32px] font-[600] font-sans leading-snug',
  },
  subheading: {
    sm: 'text-[16px] font-[400] font-sans leading-normal',
    md: 'text-[20px] font-[400] font-sans leading-normal',
    lg: 'text-[24px] font-[400] font-sans leading-normal',
  },
  subtitle: {
    sm: 'text-[24px] font-[400] font-sans leading-normal',
    md: 'text-[32px] font-[400] font-sans leading-normal',
    lg: 'text-[40px] font-[400] font-sans leading-normal',
  },
  body: {
    sm: 'text-[14px] font-[400] font-sans leading-relaxed',
    md: 'text-[16px] font-[400] font-sans leading-relaxed',
    lg: 'text-[20px] font-[400] font-sans leading-relaxed',
  },
  code: {
    sm: 'text-[14px] font-[400] font-mono leading-relaxed',
    md: 'text-[16px] font-[400] font-mono leading-relaxed',
    lg: 'text-[20px] font-[400] font-mono leading-relaxed',
  },
};

export function Typography({
  variant = 'body',
  size = 'md',
  as,
  className = '',
  children,
}: TypographyProps) {
  const Tag = as ?? variantDefaults[variant];

  const classes = [
    'text-[var(--text-default-default)]',
    variantStyles[variant][size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Tag className={classes}>{children}</Tag>;
}
