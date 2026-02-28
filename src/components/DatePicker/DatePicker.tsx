import React from 'react';

export interface DatePickerProps {
  label?: string;
  description?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (value: string) => void;
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function DatePicker({
  label,
  description,
  value,
  defaultValue,
  placeholder = 'DD/MM/YYYY',
  error,
  disabled = false,
  id,
  onChange,
}: DatePickerProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const inputClasses = [
    'w-full h-[40px] pl-[16px] pr-[40px] text-[16px] font-[400] rounded-[8px] border outline-none transition-colors',
    'bg-[var(--background-default-default)] text-[var(--text-default-default)]',
    '[color-scheme:light]',
    error
      ? 'border-[var(--border-danger-default)] focus:ring-2 focus:ring-[var(--border-danger-default)]'
      : 'border-[var(--border-default-secondary)] focus:border-[var(--border-brand-default)] focus:ring-2 focus:ring-[var(--border-brand-default)]',
    disabled
      ? 'bg-[var(--background-disabled-default)] text-[var(--text-disabled-default)] border-[var(--border-disabled-default)] cursor-not-allowed'
      : 'cursor-pointer',
  ].join(' ');

  return (
    <div className="flex flex-col gap-[8px]">
      {label && (
        <label htmlFor={inputId} className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug">
          {label}
        </label>
      )}
      {description && (
        <span className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-snug">
          {description}
        </span>
      )}
      <div className="relative">
        <input
          id={inputId}
          type="date"
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          placeholder={placeholder}
          onChange={e => onChange?.(e.target.value)}
          className={inputClasses}
        />
        <span className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[var(--icon-default-default)]">
          <CalendarIcon />
        </span>
      </div>
      {error && (
        <span className="text-[16px] font-[400] text-[var(--text-danger-default)] leading-snug">
          {error}
        </span>
      )}
    </div>
  );
}
