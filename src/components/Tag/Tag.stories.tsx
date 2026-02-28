import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tag, TagToggle, TagToggleGroup } from './Tag';

const meta: Meta = { title: 'Components/Tag', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

// ── Tag – Primary variants ─────────────────────────────────────────────────────
export const BrandPrimary: StoryObj = { name: 'Brand · primary', render: () => <Tag label="Brand" scheme="brand" variant="primary" /> };
export const DangerPrimary: StoryObj = { name: 'Danger · primary', render: () => <Tag label="Danger" scheme="danger" variant="primary" /> };
export const PositivePrimary: StoryObj = { name: 'Positive · primary', render: () => <Tag label="Positive" scheme="positive" variant="primary" /> };
export const WarningPrimary: StoryObj = { name: 'Warning · primary', render: () => <Tag label="Warning" scheme="warning" variant="primary" /> };
export const NeutralPrimary: StoryObj = { name: 'Neutral · primary', render: () => <Tag label="Neutral" scheme="neutral" variant="primary" /> };

// ── Tag – Secondary variants ───────────────────────────────────────────────────
export const BrandSecondary: StoryObj = { name: 'Brand · secondary', render: () => <Tag label="Brand" scheme="brand" variant="secondary" /> };
export const DangerSecondary: StoryObj = { name: 'Danger · secondary', render: () => <Tag label="Danger" scheme="danger" variant="secondary" /> };
export const PositiveSecondary: StoryObj = { name: 'Positive · secondary', render: () => <Tag label="Positive" scheme="positive" variant="secondary" /> };
export const WarningSecondary: StoryObj = { name: 'Warning · secondary', render: () => <Tag label="Warning" scheme="warning" variant="secondary" /> };
export const NeutralSecondary: StoryObj = { name: 'Neutral · secondary', render: () => <Tag label="Neutral" scheme="neutral" variant="secondary" /> };

// ── Tag – With remove button ───────────────────────────────────────────────────
export const Removable: StoryObj = {
  name: 'With remove button',
  render: () => (
    <div className="flex gap-[8px] flex-wrap">
      <Tag label="Brand" scheme="brand" onRemove={() => {}} />
      <Tag label="Danger" scheme="danger" onRemove={() => {}} />
      <Tag label="Positive" scheme="positive" onRemove={() => {}} />
      <Tag label="Warning" scheme="warning" onRemove={() => {}} />
      <Tag label="Neutral" scheme="neutral" onRemove={() => {}} />
    </div>
  ),
};

// ── Tag – All schemes side-by-side ─────────────────────────────────────────────
export const AllSchemes: StoryObj = {
  name: 'All schemes',
  render: () => (
    <div className="flex flex-col gap-[12px]">
      <div className="flex gap-[8px]">
        {(['brand', 'danger', 'positive', 'warning', 'neutral'] as const).map(s => (
          <Tag key={s} label={s.charAt(0).toUpperCase() + s.slice(1)} scheme={s} variant="primary" />
        ))}
      </div>
      <div className="flex gap-[8px]">
        {(['brand', 'danger', 'positive', 'warning', 'neutral'] as const).map(s => (
          <Tag key={s} label={s.charAt(0).toUpperCase() + s.slice(1)} scheme={s} variant="secondary" />
        ))}
      </div>
    </div>
  ),
};

// ── TagToggle ──────────────────────────────────────────────────────────────────
export const ToggleOff: StoryObj = { name: 'Toggle · off', render: () => <TagToggle label="Design" /> };
export const ToggleOn: StoryObj = { name: 'Toggle · on', render: () => <TagToggle label="Design" defaultOn /> };

// ── TagToggleGroup ─────────────────────────────────────────────────────────────
export const ToggleGroup: StoryObj = {
  name: 'Toggle group',
  render: () => (
    <TagToggleGroup
      labels={['Design', 'Engineering', 'Product', 'Research', 'Marketing']}
      defaultOn={[0, 2]}
    />
  ),
};
