'use client';

import React, { useRef, useEffect } from 'react';

// ── Checkbox ───────────────────────────────────────────────────────────────────

export interface CheckboxProps {
  label: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (checked: boolean) => void;
}

function CheckIcon() {
  return (
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4L4 7L10 1" stroke="var(--text-brand-on-brand)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1h8" stroke="var(--text-brand-on-brand)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Checkbox({
  label,
  description,
  checked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  id,
  onChange,
}: CheckboxProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [internal, setInternal] = React.useState(defaultChecked);
  const isChecked = checked ?? internal;
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInternal(e.target.checked);
    onChange?.(e.target.checked);
  }

  const isFilled = isChecked || indeterminate;

  const boxClasses = [
    'flex items-center justify-center w-[16px] h-[16px] shrink-0 rounded-[4px] border transition-colors',
    isFilled
      ? 'bg-[var(--background-brand-default)] border-[var(--background-brand-default)]'
      : 'bg-[var(--background-default-default)] border-[var(--border-default-default)]',
  ].join(' ');

  return (
    <div className={['flex flex-col gap-0', disabled ? 'opacity-40' : ''].join(' ')}>
      <label htmlFor={inputId} className="flex items-center gap-[12px] cursor-pointer select-none">
        {/* Hidden native checkbox */}
        <input
          ref={ref}
          type="checkbox"
          id={inputId}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
        />
        {/* Visual box */}
        <span className={boxClasses}>
          {indeterminate && <DashIcon />}
          {!indeterminate && isChecked && <CheckIcon />}
        </span>
        <span className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug">
          {label}
        </span>
      </label>
      {description && (
        <div className="flex gap-[12px]">
          <div className="w-[16px] shrink-0" />
          <span className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-snug">
            {description}
          </span>
        </div>
      )}
    </div>
  );
}

// ── CheckboxGroup ──────────────────────────────────────────────────────────────

export interface CheckboxGroupOption {
  label: string;
  description?: string;
  value: string;
}

export interface CheckboxGroupProps {
  options: CheckboxGroupOption[];
  value?: string[];
  defaultValue?: string[];
  disabled?: boolean;
  onChange?: (values: string[]) => void;
}

export function CheckboxGroup({
  options,
  value,
  defaultValue = [],
  disabled = false,
  onChange,
}: CheckboxGroupProps) {
  const [internal, setInternal] = React.useState<string[]>(defaultValue);
  const selected = value ?? internal;

  function toggle(v: string) {
    const next = selected.includes(v)
      ? selected.filter(s => s !== v)
      : [...selected, v];
    setInternal(next);
    onChange?.(next);
  }

  return (
    <div className="flex flex-col gap-[8px]">
      {options.map(opt => (
        <Checkbox
          key={opt.value}
          label={opt.label}
          description={opt.description}
          checked={selected.includes(opt.value)}
          disabled={disabled}
          onChange={() => toggle(opt.value)}
        />
      ))}
    </div>
  );
}
