import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';

const meta: Meta = { title: 'Components/Tooltip', tags: ['autodocs'], parameters: { layout: 'centered' } };
export default meta;

const TriggerButton = ({ label = 'Hover me' }: { label?: string }) => (
  <button
    type="button"
    className="px-[16px] h-[36px] rounded-[8px] bg-[var(--background-default-secondary)] text-[var(--text-default-default)] text-[14px] font-[400] cursor-pointer"
  >
    {label}
  </button>
);

// ── Placements ────────────────────────────────────────────────────────────────
export const Top: StoryObj = {
  render: () => (
    <div className="pt-[80px]">
      <Tooltip title="Tooltip" content="Body text here." placement="top">
        <TriggerButton />
      </Tooltip>
    </div>
  ),
};

export const Bottom: StoryObj = {
  render: () => (
    <div className="pb-[80px]">
      <Tooltip title="Tooltip" content="Body text here." placement="bottom">
        <TriggerButton />
      </Tooltip>
    </div>
  ),
};

export const Left: StoryObj = {
  render: () => (
    <div className="pl-[200px]">
      <Tooltip title="Tooltip" content="Body text here." placement="left">
        <TriggerButton />
      </Tooltip>
    </div>
  ),
};

export const Right: StoryObj = {
  render: () => (
    <div className="pr-[200px]">
      <Tooltip title="Tooltip" content="Body text here." placement="right">
        <TriggerButton />
      </Tooltip>
    </div>
  ),
};

// ── Without title ─────────────────────────────────────────────────────────────
export const NoTitle: StoryObj = {
  name: 'No title',
  render: () => (
    <div className="pt-[80px]">
      <Tooltip content="Quick tip shown on hover." placement="top">
        <TriggerButton label="No title tooltip" />
      </Tooltip>
    </div>
  ),
};

// ── All placements ─────────────────────────────────────────────────────────────
export const AllPlacements: StoryObj = {
  name: 'All placements',
  render: () => (
    <div className="grid grid-cols-2 gap-[80px] p-[100px]">
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => (
        <Tooltip key={placement} title="Tooltip" content={`Placement: ${placement}`} placement={placement}>
          <TriggerButton label={placement} />
        </Tooltip>
      ))}
    </div>
  ),
};
