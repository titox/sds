import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';

const meta: Meta = {
  title: 'Components/Dialog',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

// ── Helpers ────────────────────────────────────────────────────────────────────

function DialogDemo(props: Omit<React.ComponentProps<typeof Dialog>, 'open' | 'onClose'>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="brand" onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog {...props} open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />
    </>
  );
}

// Renders the dialog panel directly (no scrim, no fixed overlay) for static preview
function DialogPanel({ type = 'card', title = 'Dialog heading', description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', children }: Omit<React.ComponentProps<typeof Dialog>, 'open' | 'onClose'>) {
  const maxH = type === 'sheet' ? 'max-h-[288px]' : 'max-h-[191px]';
  return (
    <div className={`relative w-[466px] ${maxH} bg-[var(--background-default-default)] rounded-[8px] border border-[var(--border-default-secondary)] flex flex-col gap-[24px] p-[32px] shadow-lg overflow-auto`}>
      {/* Close button */}
      <button type="button" aria-label="Close" className="absolute top-[16px] right-[16px] w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-[var(--icon-default-default)] hover:bg-[var(--background-default-default-hover)] transition-colors">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </button>
      {/* Text */}
      <div className="flex flex-col gap-[12px] pr-[44px]">
        <h2 className="text-[24px] font-[600] text-[var(--text-default-default)] leading-snug">{title}</h2>
        {description && <p className="text-[16px] font-[400] text-[var(--text-default-secondary)] leading-relaxed">{description}</p>}
        {children}
      </div>
      {/* Buttons */}
      <div className="flex items-center gap-[12px]">
        <Button variant="brand" className="flex-1">{confirmLabel}</Button>
        <Button variant="default" className="flex-1">{cancelLabel}</Button>
      </div>
    </div>
  );
}

// ── Static (panel-only) stories ────────────────────────────────────────────────

export const Card: StoryObj = {
  name: 'Card',
  render: () => (
    <DialogPanel
      type="card"
      title="Dialog heading"
      description="This is a short description that provides additional context about this dialog."
      confirmLabel="Confirm"
      cancelLabel="Cancel"
    />
  ),
};

export const Sheet: StoryObj = {
  name: 'Sheet',
  render: () => (
    <DialogPanel
      type="sheet"
      title="Sheet dialog"
      description="Sheet dialogs have a taller max-height, useful for more content-heavy interactions."
      confirmLabel="Save changes"
      cancelLabel="Discard"
    />
  ),
};

export const NoDescription: StoryObj = {
  name: 'No description',
  render: () => (
    <DialogPanel title="Are you sure?" confirmLabel="Delete" cancelLabel="Cancel" />
  ),
};

export const CustomContent: StoryObj = {
  name: 'Custom content',
  render: () => (
    <DialogPanel title="Enter your name" confirmLabel="Submit" cancelLabel="Cancel">
      <input
        type="text"
        placeholder="Full name"
        className="w-full px-[16px] py-[12px] border border-[var(--border-default-secondary)] rounded-[8px] text-[16px] text-[var(--text-default-default)] bg-[var(--background-default-default)] outline-none focus:border-[var(--border-brand-default)]"
      />
    </DialogPanel>
  ),
};

// ── Interactive (with scrim) stories ───────────────────────────────────────────

export const InteractiveCard: StoryObj = {
  name: 'Interactive · Card',
  render: () => (
    <DialogDemo
      type="card"
      title="Dialog heading"
      description="Click the button to open the dialog with scrim overlay."
      confirmLabel="Confirm"
      cancelLabel="Cancel"
    />
  ),
};

export const InteractiveSheet: StoryObj = {
  name: 'Interactive · Sheet',
  render: () => (
    <DialogDemo
      type="sheet"
      title="Sheet dialog"
      description="Sheet dialogs have a taller max-height."
      confirmLabel="Save changes"
      cancelLabel="Discard"
    />
  ),
};
