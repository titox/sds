'use client';

import React from 'react';

export interface DateInputValue {
  day: string;
  month: string;
  year: string;
}

export interface DateInputProps {
  label?: string;
  description?: string;
  value?: DateInputValue;
  defaultValue?: Partial<DateInputValue>;
  error?: string;
  disabled?: boolean;
  onChange?: (value: DateInputValue) => void;
}

const fieldClasses = (error: boolean, disabled: boolean) => [
  'w-[75px] h-[40px] px-[16px] py-[12px] text-[16px] font-[400] rounded-[8px] border outline-none transition-colors text-center',
  'bg-[var(--background-default-default)] text-[var(--text-default-default)] placeholder:text-[var(--text-default-tertiary)]',
  error
    ? 'border-[var(--border-danger-default)] focus:ring-2 focus:ring-[var(--border-danger-default)]'
    : 'border-[var(--border-default-secondary)] focus:border-[var(--border-brand-default)] focus:ring-2 focus:ring-[var(--border-brand-default)]',
  disabled
    ? 'bg-[var(--background-disabled-default)] text-[var(--text-disabled-default)] border-[var(--border-disabled-default)] cursor-not-allowed'
    : '',
].join(' ');

export function DateInput({
  label,
  description,
  value,
  defaultValue = {},
  error,
  disabled = false,
  onChange,
}: DateInputProps) {
  const [internal, setInternal] = React.useState<DateInputValue>({
    day: defaultValue.day ?? '',
    month: defaultValue.month ?? '',
    year: defaultValue.year ?? '',
  });
  const current = value ?? internal;

  function update(field: keyof DateInputValue, val: string) {
    const next = { ...current, [field]: val };
    setInternal(next);
    onChange?.(next);
  }

  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-[8px]">
      {label && (
        <span className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug">
          {label}
        </span>
      )}
      {description && (
        <span className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-snug">
          {description}
        </span>
      )}
      <div className="flex gap-[8px]">
        <input
          type="text"
          inputMode="numeric"
          maxLength={2}
          placeholder="DD"
          value={current.day}
          disabled={disabled}
          onChange={e => update('day', e.target.value)}
          className={fieldClasses(hasError, disabled)}
          aria-label="Day"
        />
        <input
          type="text"
          inputMode="numeric"
          maxLength={2}
          placeholder="MM"
          value={current.month}
          disabled={disabled}
          onChange={e => update('month', e.target.value)}
          className={fieldClasses(hasError, disabled)}
          aria-label="Month"
        />
        <input
          type="text"
          inputMode="numeric"
          maxLength={4}
          placeholder="YYYY"
          value={current.year}
          disabled={disabled}
          onChange={e => update('year', e.target.value)}
          className={fieldClasses(hasError, disabled)}
          aria-label="Year"
          style={{ width: 90 }}
        />
      </div>
      {error && (
        <span className="text-[16px] font-[400] text-[var(--text-danger-default)] leading-snug">
          {error}
        </span>
      )}
    </div>
  );
}
