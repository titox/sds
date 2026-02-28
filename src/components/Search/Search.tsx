'use client';

import React from 'react';

export interface SearchProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7M7 1L1 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Search({
  value,
  defaultValue = '',
  placeholder = 'Search…',
  disabled = false,
  id,
  onChange,
  onClear,
}: SearchProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value ?? internal;
  const hasValue = current.length > 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInternal(e.target.value);
    onChange?.(e.target.value);
  }

  function handleClear() {
    setInternal('');
    onChange?.('');
    onClear?.();
  }

  return (
    <div className="relative flex items-center">
      <input
        id={id}
        type="text"
        value={current}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        className={[
          'w-full h-[40px] pl-[16px] pr-[40px] text-[16px] font-[400] rounded-full border outline-none transition-colors',
          'bg-[var(--background-default-default)] text-[var(--text-default-default)] placeholder:text-[var(--text-default-tertiary)]',
          'border-[var(--border-default-secondary)] focus:border-[var(--border-brand-default)] focus:ring-2 focus:ring-[var(--border-brand-default)]',
          disabled
            ? 'bg-[var(--background-disabled-default)] text-[var(--text-disabled-default)] border-[var(--border-disabled-default)] cursor-not-allowed'
            : '',
        ].join(' ')}
      />
      <span className="pointer-events-none absolute right-[14px] text-[var(--icon-default-default)] flex items-center">
        {hasValue && !disabled ? (
          <button
            type="button"
            onClick={handleClear}
            className="pointer-events-auto text-[var(--icon-default-default)] hover:text-[var(--icon-default-secondary)]"
            aria-label="Clear search"
          >
            <XIcon />
          </button>
        ) : (
          <SearchIcon />
        )}
      </span>
    </div>
  );
}
