'use client';

import React from 'react';

// ── Helpers ────────────────────────────────────────────────────────────────────

function getPageItems(current: number, total: number, siblings = 1): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const left = Math.max(2, current - siblings);
  const right = Math.min(total - 1, current + siblings);
  const showLeft = left > 2;
  const showRight = right < total - 1;

  const pages: (number | '...')[] = [1];
  if (showLeft) pages.push('...');
  for (let i = left; i <= right; i++) pages.push(i);
  if (showRight) pages.push('...');
  pages.push(total);
  return pages;
}

// ── Arrow icons ────────────────────────────────────────────────────────────────

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Pagination ─────────────────────────────────────────────────────────────────

export interface PaginationProps {
  total: number;
  current: number;
  siblingCount?: number;
  onChange: (page: number) => void;
}

export function Pagination({
  total,
  current,
  siblingCount = 1,
  onChange,
}: PaginationProps) {
  const pages = getPageItems(current, total, siblingCount);
  const isFirst = current === 1;
  const isLast = current === total;

  const navBtnCls = (disabled: boolean) => [
    'flex items-center gap-[8px] h-[32px] px-[12px] rounded-[8px] text-[16px] font-[400] transition-colors',
    disabled
      ? 'text-[var(--text-default-secondary)] cursor-not-allowed'
      : 'text-[var(--text-default-default)] hover:bg-[var(--background-default-default-hover)] cursor-pointer',
  ].join(' ');

  const pageBtnCls = (isCurrent: boolean) => [
    'flex items-center justify-center min-w-[32px] h-[32px] px-[12px] rounded-[8px] text-[16px] font-[400] transition-colors cursor-pointer',
    isCurrent
      ? 'bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)]'
      : 'text-[var(--text-default-default)] hover:bg-[var(--background-default-default-hover)]',
  ].join(' ');

  return (
    <div className="flex items-center gap-[8px]">
      {/* Previous */}
      <button
        type="button"
        disabled={isFirst}
        onClick={() => !isFirst && onChange(current - 1)}
        className={navBtnCls(isFirst)}
        aria-label="Previous page"
      >
        <ArrowLeft />
        <span>Previous</span>
      </button>

      {/* Page list */}
      <div className="flex items-center gap-[2px]">
        {pages.map((page, i) =>
          page === '...' ? (
            <span
              key={`gap-${i}`}
              className="flex items-center justify-center w-[47px] h-[38px] text-[16px] font-[700] text-[var(--text-default-default)]"
            >
              …
            </span>
          ) : (
            <button
              key={page}
              type="button"
              onClick={() => onChange(page)}
              className={pageBtnCls(page === current)}
              aria-label={`Page ${page}`}
              aria-current={page === current ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        type="button"
        disabled={isLast}
        onClick={() => !isLast && onChange(current + 1)}
        className={navBtnCls(isLast)}
        aria-label="Next page"
      >
        <span>Next</span>
        <ArrowRight />
      </button>
    </div>
  );
}
