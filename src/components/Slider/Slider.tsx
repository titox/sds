'use client';

import React from 'react';

export interface SliderProps {
  label?: string;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  prefix?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (value: number) => void;
}

export function Slider({
  label,
  description,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue = 0,
  prefix,
  disabled = false,
  id,
  onChange,
}: SliderProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value ?? internal;
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : 'slider');

  const pct = ((current - min) / (max - min)) * 100;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(e.target.value);
    setInternal(v);
    onChange?.(v);
  }

  return (
    <div className={['flex flex-col gap-[12px]', disabled ? 'opacity-40' : ''].join(' ')}>
      {/* Label row */}
      {(label != null || description != null) && (
        <div className="flex items-center justify-between gap-[4px]">
          {label && (
            <label htmlFor={inputId} className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug">
              {label}
            </label>
          )}
          <div className="flex items-baseline gap-[1px]">
            {prefix && (
              <span className="text-[14px] font-[400] text-[var(--text-default-default)]">{prefix}</span>
            )}
            <span className="text-[14px] font-[400] text-[var(--text-default-default)]">{current}</span>
          </div>
        </div>
      )}

      {/* Slider track */}
      <div className="relative flex items-center h-[16px]">
        {/* Track background */}
        <div className="absolute w-full h-[8px] rounded-full bg-[var(--background-default-secondary)] overflow-hidden">
          {/* Filled portion */}
          <div
            className="h-full rounded-full bg-[var(--background-brand-default)]"
            style={{ width: `${pct}%` }}
          />
        </div>
        {/* Native range input (invisible but interactive) */}
        <input
          id={inputId}
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          disabled={disabled}
          onChange={handleChange}
          className="absolute w-full opacity-0 cursor-pointer h-[16px] disabled:cursor-not-allowed"
          style={{ zIndex: 1 }}
        />
        {/* Visible thumb */}
        <div
          className="absolute w-[16px] h-[16px] rounded-full bg-[var(--background-brand-default)] pointer-events-none -translate-x-1/2"
          style={{ left: `calc(${pct}% + ${(1 - pct / 100) * 16}px - 8px)` }}
        />
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
