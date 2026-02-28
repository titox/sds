import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  error,
  hint,
  disabled,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const inputClasses = [
    'w-full px-[12px] py-[8px] text-[16px] rounded-[8px] outline-none transition-colors duration-150',
    'bg-[var(--background-default-default)] text-[var(--text-default-default)]',
    error
      ? 'border border-[var(--border-danger-default)] focus:ring-2 focus:ring-[var(--border-danger-default)]'
      : 'border border-[var(--border-default-default)] focus:border-[var(--border-brand-default)] focus:ring-2 focus:ring-[var(--border-brand-default)]',
    disabled
      ? 'bg-[var(--background-disabled-default)] text-[var(--text-disabled-default)] border-[var(--border-disabled-default)] cursor-not-allowed'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col gap-[4px]">
      {label && (
        <label
          htmlFor={inputId}
          className="text-[14px] font-[500] text-[var(--text-default-default)]"
        >
          {label}
        </label>
      )}
      <input id={inputId} disabled={disabled} className={inputClasses} {...props} />
      {error && (
        <p className="text-[12px] text-[var(--text-danger-default)]">{error}</p>
      )}
      {hint && !error && (
        <p className="text-[12px] text-[var(--text-default-tertiary)]">{hint}</p>
      )}
    </div>
  );
}
