import React from 'react';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  label?: string;
  description?: string;
  hint?: string;
  error?: string;
  id?: string;
}

export function Textarea({
  label,
  description,
  hint,
  error,
  disabled,
  id,
  className = '',
  ...props
}: TextareaProps) {
  const textareaId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const textareaClasses = [
    'w-full px-[16px] py-[12px] text-[16px] font-[400] rounded-[8px] outline-none transition-colors resize-y min-h-[80px]',
    'bg-[var(--background-default-default)] text-[var(--text-default-default)] placeholder:text-[var(--text-default-tertiary)]',
    error
      ? 'border border-[var(--border-danger-default)] focus:ring-2 focus:ring-[var(--border-danger-default)]'
      : 'border border-[var(--border-default-secondary)] focus:border-[var(--border-brand-default)] focus:ring-2 focus:ring-[var(--border-brand-default)]',
    disabled
      ? 'bg-[var(--background-disabled-default)] text-[var(--text-disabled-default)] border-[var(--border-disabled-default)] cursor-not-allowed'
      : '',
    className,
  ].filter(Boolean).join(' ');

  const bottomText = error ?? hint;
  const bottomColor = error
    ? 'text-[var(--text-danger-default)]'
    : 'text-[var(--text-default-secondary)]';

  return (
    <div className="flex flex-col gap-[8px]">
      {label && (
        <label htmlFor={textareaId} className="text-[16px] font-[400] text-[var(--text-default-default)] leading-snug">
          {label}
        </label>
      )}
      {description && (
        <span className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-snug">
          {description}
        </span>
      )}
      <textarea
        id={textareaId}
        disabled={disabled}
        className={textareaClasses}
        {...props}
      />
      {bottomText && (
        <span className={`text-[16px] font-[400] leading-snug ${bottomColor}`}>
          {bottomText}
        </span>
      )}
    </div>
  );
}
