import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta: Meta = { title: 'Components/Card', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4l3.1 7.6H27l-6.2 4.5 2.4 7.5L16 19.3l-7.2 4.3 2.4-7.5L5 11.6h7.9L16 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function RocketIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 3c7 0 11 5 11 13l-5 3-3-3-3 3-3-3-3 3-5-3C5 8 9 3 16 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 19v6l6-3 6 3v-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function GridIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="18" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const sampleBody = 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, or anecdotes.';
const actions = { primaryAction: { label: 'Button' }, secondaryAction: { label: 'Button' } };

// ── Flat (Default variant) ─────────────────────────────────────────────────────
export const IconHorizontal: StoryObj = {
  name: 'Icon · horizontal · default',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="icon" icon={<StarIcon />} title="Title" body={sampleBody} {...actions} />
    </div>
  ),
};

export const IconVertical: StoryObj = {
  name: 'Icon · vertical · default',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="icon" icon={<StarIcon />} direction="vertical" title="Title" body={sampleBody} {...actions} />
    </div>
  ),
};

// ── Stroke variant ─────────────────────────────────────────────────────────────
export const IconHorizontalStroke: StoryObj = {
  name: 'Icon · horizontal · stroke',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="icon" icon={<RocketIcon />} variant="stroke" title="Title" body={sampleBody} {...actions} />
    </div>
  ),
};

export const IconVerticalStroke: StoryObj = {
  name: 'Icon · vertical · stroke',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="icon" icon={<GridIcon />} variant="stroke" direction="vertical" title="Title" body={sampleBody} {...actions} />
    </div>
  ),
};

// ── Image variant ──────────────────────────────────────────────────────────────
export const ImageHorizontal: StoryObj = {
  name: 'Image · horizontal · default',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="image" title="Title" body={sampleBody} {...actions} />
    </div>
  ),
};

export const ImageVertical: StoryObj = {
  name: 'Image · vertical · default',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="image" direction="vertical" title="Title" body={sampleBody} {...actions} />
    </div>
  ),
};

export const ImageVerticalStroke: StoryObj = {
  name: 'Image · vertical · stroke',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="image" variant="stroke" direction="vertical" title="Title" body={sampleBody} {...actions} />
    </div>
  ),
};

// ── No actions ─────────────────────────────────────────────────────────────────
export const NoActions: StoryObj = {
  name: 'No actions',
  render: () => (
    <div className="w-[440px]">
      <Card assetType="icon" icon={<StarIcon />} variant="stroke" title="Feature Highlight" body="A concise description of this feature and why it matters to the user." />
    </div>
  ),
};

// ── Grid ───────────────────────────────────────────────────────────────────────
export const CardGrid: StoryObj = {
  name: 'Card grid',
  render: () => (
    <div className="grid grid-cols-3 gap-[48px] max-w-[1072px]">
      {[{ icon: <StarIcon />, title: 'Performance' }, { icon: <RocketIcon />, title: 'Speed' }, { icon: <GridIcon />, title: 'Flexibility' }].map(({ icon, title }) => (
        <Card key={title} assetType="icon" icon={icon} variant="stroke" title={title} body={sampleBody} primaryAction={{ label: 'Learn more' }} />
      ))}
    </div>
  ),
  parameters: { layout: 'padded' },
};
