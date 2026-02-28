'use client';

import React from 'react';

// ── Card ────────────────────────────────────────────────────────────────────────
// Figma: AssetType(Icon|Image|None) × Variant(Default|Stroke) × Direction(H|V)
// Default variant: no bg, no border, no padding (flat)
// Stroke variant:  bg=white, cr=8, border, pad=24
// Title: 24px/600 · Body: 16px/400 --text-default-secondary · Buttons: 40px h, cr=8

export type CardAssetType = 'icon' | 'image' | 'none';
export type CardVariant = 'default' | 'stroke';
export type CardDirection = 'horizontal' | 'vertical';

export interface CardAction {
  label: string;
  onClick?: () => void;
}

export interface CardProps {
  title: string;
  body: string;
  assetType?: CardAssetType;
  icon?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  variant?: CardVariant;
  direction?: CardDirection;
  primaryAction?: CardAction;
  secondaryAction?: CardAction;
  className?: string;
}

export function Card({
  title,
  body,
  assetType = 'icon',
  icon,
  imageSrc,
  imageAlt = '',
  variant = 'default',
  direction = 'horizontal',
  primaryAction,
  secondaryAction,
  className = '',
}: CardProps) {
  const isHorizontal = direction === 'horizontal';
  const isStroke = variant === 'stroke';

  const wrapperCls = [
    'flex',
    isHorizontal ? 'flex-row items-start' : 'flex-col',
    'gap-[24px]',
    isStroke
      ? 'bg-[var(--background-default-default)] rounded-[8px] border border-[var(--border-default-secondary)] p-[24px]'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const renderAsset = () => {
    if (assetType === 'icon' && icon) {
      return (
        <span className="flex items-center justify-center w-[32px] h-[32px] shrink-0 text-[var(--icon-default-default)]">
          {icon}
        </span>
      );
    }
    if (assetType === 'image') {
      const imgCls = isHorizontal
        ? 'w-[160px] h-[160px] shrink-0'
        : 'w-full h-[160px]';
      return (
        <div
          className={`${imgCls} rounded-[4px] bg-[var(--background-default-secondary)] overflow-hidden`}
        >
          {imageSrc && (
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={wrapperCls}>
      {renderAsset()}
      <div className="flex flex-col gap-[16px] flex-1 min-w-0">
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-[24px] font-[600] leading-tight text-[var(--text-default-default)]">
            {title}
          </h3>
          <p className="text-[16px] font-[400] leading-normal text-[var(--text-default-secondary)]">
            {body}
          </p>
        </div>

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-row gap-[16px] items-center flex-wrap">
            {primaryAction && (
              <button
                type="button"
                onClick={primaryAction.onClick}
                className="h-[40px] px-[12px] rounded-[8px] text-[16px] font-[400] bg-[var(--background-default-secondary)] text-[var(--text-default-default)] cursor-pointer hover:bg-[var(--background-default-default-hover)] transition-colors"
              >
                {primaryAction.label}
              </button>
            )}
            {secondaryAction && (
              <button
                type="button"
                onClick={secondaryAction.onClick}
                className="h-[40px] px-[12px] rounded-[8px] text-[16px] font-[400] bg-[var(--background-default-secondary)] text-[var(--text-default-default)] cursor-pointer hover:bg-[var(--background-default-default-hover)] transition-colors"
              >
                {secondaryAction.label}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
