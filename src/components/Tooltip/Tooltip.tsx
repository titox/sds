'use client';

import React, { useState } from 'react';

// ── Tooltip ─────────────────────────────────────────────────────────────────────
// Wrapper component that shows a tooltip on hover.
// Specs: cornerRadius=8, pad=8/12, bg=--background-default-default,
//         border=--border-default-secondary, Title 16px/600 + Body 14px/400
// Beak: 8×8 rotated square (diamond) at the edge, matching bg + border
// Placements: top | bottom | left | right

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  title?: string;
  content: string;
  placement?: TooltipPlacement;
  children: React.ReactElement;
}

// Tooltip container position relative to the trigger
const CONTAINER_CLS: Record<TooltipPlacement, string> = {
  top:    'bottom-full left-1/2 -translate-x-1/2 mb-[10px]',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-[10px]',
  left:   'right-full top-1/2 -translate-y-1/2 mr-[10px]',
  right:  'left-full top-1/2 -translate-y-1/2 ml-[10px]',
};

// Beak (rotated square) absolute position within the tooltip container
// The beak is a 10×10 square rotated 45deg, visually appearing as an arrow
type BeakStyle = Record<string, string | number>;
const BEAK_STYLE: Record<TooltipPlacement, BeakStyle> = {
  top:    { bottom: '-5px', left: '50%',  transform: 'translateX(-50%) rotate(45deg)' },
  bottom: { top:    '-5px', left: '50%',  transform: 'translateX(-50%) rotate(45deg)' },
  left:   { right:  '-5px', top:  '50%',  transform: 'translateY(-50%) rotate(45deg)' },
  right:  { left:   '-5px', top:  '50%',  transform: 'translateY(-50%) rotate(45deg)' },
};

// Which borders of the beak diamond to show (the ones on the "outside" edge)
const BEAK_BORDERS: Record<TooltipPlacement, BeakStyle> = {
  top:    { borderBottom: '1px solid var(--border-default-secondary)', borderRight: '1px solid var(--border-default-secondary)' },
  bottom: { borderTop:    '1px solid var(--border-default-secondary)', borderLeft:  '1px solid var(--border-default-secondary)' },
  left:   { borderTop:    '1px solid var(--border-default-secondary)', borderRight: '1px solid var(--border-default-secondary)' },
  right:  { borderBottom: '1px solid var(--border-default-secondary)', borderLeft:  '1px solid var(--border-default-secondary)' },
};

export function Tooltip({ title, content, placement = 'top', children }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <span
          role="tooltip"
          className={`absolute z-50 ${CONTAINER_CLS[placement]} min-w-[88px] max-w-[240px] rounded-[8px] px-[12px] py-[8px] flex flex-col gap-[4px] pointer-events-none whitespace-nowrap`}
          style={{
            backgroundColor: 'var(--background-default-default)',
            border: '1px solid var(--border-default-secondary)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          {title && (
            <span className="text-[16px] font-[600] text-[var(--text-default-default)] leading-snug">
              {title}
            </span>
          )}
          <span className="text-[14px] font-[400] text-[var(--text-default-default)] leading-snug">
            {content}
          </span>

          {/* Beak / arrow — rotated square matching bg + border */}
          <span
            className="absolute w-[10px] h-[10px]"
            style={{
              backgroundColor: 'var(--background-default-default)',
              ...BEAK_STYLE[placement],
              ...BEAK_BORDERS[placement],
            }}
          />
        </span>
      )}
    </span>
  );
}
