import React from 'react';

export type AvatarType = 'initial' | 'image';
export type AvatarSize = 'sm' | 'md' | 'lg';
export type AvatarShape = 'circle' | 'square';
export type AvatarGroupSpacing = 'overlap' | 'spaced';

// ── Avatar ───────────────────────────────────────────────────────────────────

export interface AvatarProps {
  type?: AvatarType;
  size?: AvatarSize;
  shape?: AvatarShape;
  /** Initials to display when type="initial" (1–2 chars) */
  initials?: string;
  /** Image src when type="image" */
  src?: string;
  alt?: string;
  className?: string;
}

const sizeMap: Record<AvatarSize, { px: string; text: string }> = {
  sm: { px: 'w-[24px] h-[24px]', text: 'text-[10px]' },
  md: { px: 'w-[32px] h-[32px]', text: 'text-[13px]' },
  lg: { px: 'w-[40px] h-[40px]', text: 'text-[16px]' },
};

export function Avatar({
  type = 'initial',
  size = 'md',
  shape = 'circle',
  initials = '?',
  src,
  alt = '',
  className = '',
}: AvatarProps) {
  const { px, text } = sizeMap[size];
  const radius = shape === 'circle' ? 'rounded-full' : 'rounded-none';
  const base = `inline-flex items-center justify-center shrink-0 overflow-hidden ${px} ${radius}`;

  if (type === 'image' && src) {
    return (
      <div className={`${base} ${className}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`${base} bg-[var(--background-brand-default)] ${className}`}
    >
      <span
        className={`${text} font-[400] text-[var(--text-brand-on-brand)] leading-none select-none uppercase`}
      >
        {initials.slice(0, 2)}
      </span>
    </div>
  );
}

// ── AvatarGroup ───────────────────────────────────────────────────────────────

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  /** Max visible before showing overflow count */
  max?: number;
  spacing?: AvatarGroupSpacing;
  size?: AvatarSize;
  shape?: AvatarShape;
}

export function AvatarGroup({
  avatars,
  max = 3,
  spacing = 'overlap',
  size = 'lg',
  shape = 'circle',
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - visible.length;

  const { px, text } = sizeMap[size];
  const radius = shape === 'circle' ? 'rounded-full' : 'rounded-none';

  const overlapStyle =
    spacing === 'overlap'
      ? { marginLeft: '-8px' }
      : undefined;

  const gap = spacing === 'spaced' ? 'gap-[8px]' : '';

  return (
    <div className={`flex items-center ${gap}`}>
      {visible.map((av, i) => (
        <div
          key={i}
          className="ring-2 ring-[var(--background-default-default)]"
          style={i > 0 ? overlapStyle : undefined}
        >
          <Avatar {...av} size={size} shape={shape} />
        </div>
      ))}
      {overflow > 0 && (
        <div
          className={`inline-flex items-center justify-center ${px} ${radius} bg-[var(--background-neutral-default)] ring-2 ring-[var(--background-default-default)]`}
          style={overlapStyle}
        >
          <span className={`${text} font-[400] text-[var(--text-neutral-on-neutral)] leading-none`}>
            +{overflow}
          </span>
        </div>
      )}
    </div>
  );
}
