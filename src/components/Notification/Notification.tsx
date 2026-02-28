import React from 'react';

export type NotificationVariant = 'message' | 'alert';

export interface NotificationProps {
  variant?: NotificationVariant;
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
  onClose?: () => void;
  className?: string;
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Notification({
  variant = 'message',
  title,
  body,
  actionLabel,
  onAction,
  onClose,
  className = '',
}: NotificationProps) {
  const isAlert = variant === 'alert';

  const wrapperCls = [
    'flex items-start gap-[12px] w-[300px] p-[16px] rounded-[8px] border',
    isAlert
      ? 'bg-[var(--background-danger-subtle)] border-[var(--border-danger-default)]'
      : 'bg-[var(--background-default-default)] border-[var(--border-default-default)]',
    className,
  ].join(' ');

  const iconCls = isAlert
    ? 'text-[var(--icon-danger-default)] shrink-0 mt-[1px]'
    : 'text-[var(--icon-default-default)] shrink-0 mt-[1px]';

  const titleCls = [
    'text-[16px] font-[600] leading-snug',
    isAlert ? 'text-[var(--text-danger-default)]' : 'text-[var(--text-default-default)]',
  ].join(' ');

  const bodyCls = [
    'text-[16px] font-[400] leading-snug',
    isAlert ? 'text-[var(--text-danger-default)]' : 'text-[var(--text-default-default)]',
  ].join(' ');

  const actionCls = [
    'inline-flex items-center h-[32px] px-[8px] rounded-[8px] text-[16px] font-[400] transition-colors cursor-pointer',
    isAlert
      ? 'bg-[var(--background-danger-default)] text-[var(--text-danger-on-danger)] hover:opacity-90'
      : 'bg-[var(--background-brand-default)] text-[var(--text-brand-on-brand)] hover:opacity-90',
  ].join(' ');

  const closeCls = [
    'flex items-center justify-center w-[36px] h-[36px] rounded-full shrink-0 transition-colors cursor-pointer',
    isAlert
      ? 'text-[var(--icon-danger-default)] hover:bg-[var(--background-danger-subtle-hover)]'
      : 'text-[var(--icon-default-default)] hover:bg-[var(--background-default-default-hover)]',
  ].join(' ');

  return (
    <div className={wrapperCls}>
      {/* Icon */}
      <InfoIcon className={iconCls} />

      {/* Content stack */}
      <div className="flex flex-col gap-[16px] flex-1 min-w-0">
        <div className="flex flex-col gap-[4px]">
          <p className={titleCls}>{title}</p>
          <p className={bodyCls}>{body}</p>
        </div>
        {actionLabel && (
          <button type="button" onClick={onAction} className={actionCls}>
            {actionLabel}
          </button>
        )}
      </div>

      {/* Close button */}
      {onClose && (
        <button type="button" onClick={onClose} aria-label="Close notification" className={closeCls}>
          <XIcon />
        </button>
      )}
    </div>
  );
}
