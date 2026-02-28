'use client';

import React, { useState } from 'react';

// ── Calendar ────────────────────────────────────────────────────────────────────
// Figma: 318×308px · bg=white · cr=16 · pad=16
// Header: prev/next buttons (36×36 cr=32) + month/year display (16px/600)
// Table: 7-col grid · Thead=day labels (14px/400) · Tbody=5 rows × 7 days
// Day cell (CalendarButton): 40×40 · cr=8
//   Default:        no fill · text=--text-default-default
//   Hover:          fill=white (subtle shadow) · text=--text-default-default
//   Active:         fill=--background-brand-default (#2C2C2C) · text=--text-brand-on-brand
//   Hidden (prev/next month): text=--text-default-tertiary (dimmed)
//   Disabled:       text=--text-default-disabled
//   Range:          fill=--background-default-default-hover · text=--text-default-default

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstWeekdayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay(); // 0=Sun
  return day === 0 ? 6 : day - 1; // Mon=0 … Sun=6
}

interface CalendarDay {
  day: number;
  date: Date;
  type: 'prev' | 'current' | 'next';
}

function buildCalendarGrid(year: number, month: number): CalendarDay[] {
  const days: CalendarDay[] = [];
  const daysInMonth = getDaysInMonth(year, month);
  const firstWeekday = getFirstWeekdayOfMonth(year, month);
  const prevMonthDays = getDaysInMonth(year, month - 1);

  // Leading days from previous month
  for (let i = firstWeekday - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    days.push({ day: d, date: new Date(year, month - 1, d), type: 'prev' });
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({ day: d, date: new Date(year, month, d), type: 'current' });
  }
  // Trailing days from next month (always fill to 35 = 5 rows × 7)
  let n = 1;
  while (days.length < 35) {
    days.push({ day: n, date: new Date(year, month + 1, n), type: 'next' });
    n++;
  }
  return days;
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function ChevronIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {dir === 'left'
        ? <path d="M13 16l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        : <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
    </svg>
  );
}

export interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
}

export function Calendar({ value, defaultValue, onChange, minDate, maxDate }: CalendarProps) {
  const today = new Date();
  const initialDate = value ?? defaultValue ?? today;

  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth());
  const [selected, setSelected] = useState<Date | undefined>(defaultValue);

  const current = value ?? selected;

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const handleSelect = (d: CalendarDay) => {
    const date = d.date;
    if (minDate && date < minDate) return;
    if (maxDate && date > maxDate) return;
    setSelected(date);
    onChange?.(date);
    if (d.type === 'prev') { prevMonth(); }
    else if (d.type === 'next') { nextMonth(); }
  };

  const grid = buildCalendarGrid(viewYear, viewMonth);

  return (
    <div
      className="w-[318px] bg-[var(--background-default-default)] rounded-[16px] p-[16px] border border-[var(--border-default-secondary)]"
      style={{ fontFamily: 'var(--font-sans, Inter, sans-serif)' }}
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-[16px] h-[36px]">
        <button
          type="button"
          onClick={prevMonth}
          aria-label="Previous month"
          className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[var(--icon-default-default)] hover:bg-[var(--background-default-default-hover)] transition-colors cursor-pointer"
        >
          <ChevronIcon dir="left" />
        </button>

        <span className="flex-1 text-center text-[16px] font-[600] text-[var(--text-default-default)]">
          {MONTHS[viewMonth]} {viewYear}
        </span>

        <button
          type="button"
          onClick={nextMonth}
          aria-label="Next month"
          className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-[var(--icon-default-default)] hover:bg-[var(--background-default-default-hover)] transition-colors cursor-pointer"
        >
          <ChevronIcon dir="right" />
        </button>
      </div>

      {/* ── Table ── */}
      <div className="mt-[16px]">
        {/* Day labels */}
        <div className="grid grid-cols-7 gap-x-[1px] mb-[1px]">
          {DAY_LABELS.map(d => (
            <div key={d} className="h-[20px] flex items-center justify-center text-[12px] font-[400] text-[var(--text-default-secondary)]">
              {d}
            </div>
          ))}
        </div>

        {/* Day rows */}
        <div className="grid grid-cols-7 gap-[1px]">
          {grid.map((d, i) => {
            const isActive = current && isSameDay(d.date, current);
            const isDisabled =
              (minDate && d.date < minDate) ||
              (maxDate && d.date > maxDate);
            const isOtherMonth = d.type !== 'current';

            let dayCls = 'w-[40px] h-[40px] flex items-center justify-center rounded-[8px] text-[16px] font-[400] cursor-pointer transition-colors select-none';

            if (isActive) {
              dayCls += ' bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)]';
            } else if (isDisabled) {
              dayCls += ' text-[var(--text-default-disabled)] cursor-not-allowed';
            } else if (isOtherMonth) {
              dayCls += ' text-[var(--text-default-tertiary)] hover:bg-[var(--background-default-default-hover)]';
            } else {
              dayCls += ' text-[var(--text-default-default)] hover:bg-[var(--background-default-default-hover)]';
            }

            return (
              <button
                key={i}
                type="button"
                onClick={() => !isDisabled && handleSelect(d)}
                className={dayCls}
                tabIndex={isOtherMonth ? -1 : 0}
                aria-label={d.date.toDateString()}
                aria-pressed={!!isActive}
              >
                {d.day}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
