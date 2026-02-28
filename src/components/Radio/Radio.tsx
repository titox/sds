'use client';

import React from 'react';

// ── Radio ──────────────────────────────────────────────────────────────────────

export interface RadioProps {
  label: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  id?: string;
  onChange?: () => void;
}

export function Radio({
  label,
  description,
  checked,
  defaultChecked = false,
  disabled = false,
  name,
  value,
  id,
  onChange,
}: RadioProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isChecked = checked ?? internal;
  const inputId = id ?? `${name ?? 'radio'}-${(value ?? label).toLowerCase().replace(/\s+/g, '-')}`;

  function handleChange() {
    setInternal(true);
    onChange?.();
  }

  const circleClasses = [
    'flex items-center justify-center w-[16px] h-[16px] shrink-0 rounded-full border-2 transition-colors',
    'bg-[var(--background-default-secondary)]',
    isChecked
      ? 'border-[var(--background-brand-default)]'
      : 'border-[var(--border-default-default)]',
  ].join(' ');

  return (
    <div className={['flex flex-col gap-0', disabled ? 'opacity-40' : ''].join(' ')}>
      <label htmlFor={inputId} className="flex items-center gap-[12px] cursor-pointer select-none">
        <input
          type="radio"
          id={inputId}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className="sr-only"
        />
        <span className={circleClasses}>
          {isChecked && (
            <span className="w-[8px] h-[8px] rounded-full bg-[var(--icon-default-default)]" />
          )}
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

// ── RadioGroup ─────────────────────────────────────────────────────────────────

export interface RadioGroupOption {
  label: string;
  description?: string;
  value: string;
}

export interface RadioGroupProps {
  name: string;
  options: RadioGroupOption[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export function RadioGroup({
  name,
  options,
  value,
  defaultValue,
  disabled = false,
  onChange,
}: RadioGroupProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? '');
  const selected = value ?? internal;

  return (
    <div className="flex flex-col gap-[8px]">
      {options.map(opt => (
        <Radio
          key={opt.value}
          name={name}
          label={opt.label}
          description={opt.description}
          value={opt.value}
          checked={selected === opt.value}
          disabled={disabled}
          onChange={() => {
            setInternal(opt.value);
            onChange?.(opt.value);
          }}
        />
      ))}
    </div>
  );
}
