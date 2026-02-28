'use client';

import React from 'react';

export interface SwitchProps {
  label: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  id?: string;
  onChange?: (checked: boolean) => void;
}

export function Switch({
  label,
  description,
  checked,
  defaultChecked = false,
  disabled = false,
  id,
  onChange,
}: SwitchProps) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isChecked = checked ?? internal;
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInternal(e.target.checked);
    onChange?.(e.target.checked);
  }

  return (
    <div className="flex flex-col gap-0">
      {/* Label + Switch row */}
      <div className={['flex items-center justify-between gap-[12px]', disabled ? 'opacity-40' : ''].join(' ')}>
        <label
          htmlFor={inputId}
          className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug cursor-pointer select-none"
        >
          {label}
        </label>

        {/* Toggle */}
        <div className="relative shrink-0 w-[40px] h-[24px]">
          <input
            type="checkbox"
            id={inputId}
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            className="sr-only"
          />
          <label
            htmlFor={inputId}
            className={[
              'block w-[40px] h-[24px] rounded-full cursor-pointer transition-colors duration-200',
              disabled ? 'cursor-not-allowed' : '',
              isChecked
                ? 'bg-[var(--background-brand-default)]'
                : 'bg-[var(--background-default-secondary)]',
            ].join(' ')}
          >
            {/* Knob */}
            <span
              className={[
                'absolute top-[3px] w-[18px] h-[18px] rounded-full transition-transform duration-200',
                isChecked
                  ? 'translate-x-[19px] bg-[var(--background-default-default)]'
                  : 'translate-x-[3px] bg-[var(--background-default-default)]',
              ].join(' ')}
            />
          </label>
        </div>
      </div>

      {/* Description */}
      {description && (
        <span className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-snug">
          {description}
        </span>
      )}
    </div>
  );
}
