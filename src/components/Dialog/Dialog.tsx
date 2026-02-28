'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '../Button/Button';

export type DialogType = 'card' | 'sheet';

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  type?: DialogType;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  /** Replace default footer with custom content */
  children?: React.ReactNode;
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Dialog({
  open,
  onClose,
  type = 'card',
  title = 'Dialog heading',
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  children,
}: DialogProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const maxH = type === 'sheet' ? 'max-h-[288px]' : 'max-h-[191px]';

  return (
    /* Scrim */
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'var(--background-utilities-scrim)' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Dialog panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className={`relative w-[466px] ${maxH} bg-[var(--background-default-default)] rounded-[8px] border border-[var(--border-default-secondary)] flex flex-col gap-[24px] p-[32px] shadow-lg overflow-auto`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-[16px] right-[16px] w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-[var(--icon-default-default)] hover:bg-[var(--background-default-default-hover)] transition-colors"
        >
          <XIcon />
        </button>

        {/* Text */}
        <div className="flex flex-col gap-[12px] pr-[44px]">
          <h2
            id="dialog-title"
            className="text-[24px] font-[600] text-[var(--text-default-default)] leading-snug"
          >
            {title}
          </h2>
          {description && (
            <p className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>

        {/* Button group */}
        <div className="flex items-center gap-[12px]">
          <Button variant="brand" onClick={onConfirm ?? onClose} className="flex-1">
            {confirmLabel}
          </Button>
          <Button variant="default" onClick={onClose} className="flex-1">
            {cancelLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
