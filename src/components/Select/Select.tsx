'use client';

import React from 'react';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label?: string;
  description?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (value: string) => void;
}

function ChevronDownIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Select({
  label,
  description,
  options,
  value,
  defaultValue,
  placeholder = 'Select an option',
  error,
  disabled = false,
  id,
  onChange,
}: SelectProps) {
  const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const selectClasses = [
    'w-full appearance-none h-[40px] pl-[16px] pr-[40px] py-[12px]',
    'text-[16px] font-[400] rounded-[8px] border outline-none transition-colors',
    'bg-[var(--background-default-default)] leading-none',
    error
      ? 'border-[var(--border-danger-default)] focus:ring-2 focus:ring-[var(--border-danger-default)]'
      : 'border-[var(--border-default-secondary)] focus:border-[var(--border-brand-default)] focus:ring-2 focus:ring-[var(--border-brand-default)]',
    disabled
      ? 'bg-[var(--background-disabled-default)] text-[var(--text-disabled-default)] border-[var(--border-disabled-default)] cursor-not-allowed'
      : 'text-[var(--text-default-default)] cursor-pointer',
  ].join(' ');

  return (
    <div className="flex flex-col gap-[8px]">
      {label && (
        <label htmlFor={selectId} className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug">
          {label}
        </label>
      )}
      {description && (
        <span className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-snug">
          {description}
        </span>
      )}
      <div className="relative">
        <select
          id={selectId}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={e => onChange?.(e.target.value)}
          className={selectClasses}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron icon overlay */}
        <span className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[var(--icon-default-default)]">
          <ChevronDownIcon />
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
