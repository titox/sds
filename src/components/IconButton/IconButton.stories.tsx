import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';
import {
  Settings, Plus, X, Search, Heart, Star, Bell, Trash2, Edit, Download,
  Upload, Share, Copy, MoreHorizontal, ArrowLeft, ArrowRight, Check,
} from 'lucide-react';

const meta: Meta = {
  title: 'Components/Buttons/Icon Button',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

export const PrimaryMedium: StoryObj = {
  name: 'Primary / Medium',
  render: () => <IconButton variant="primary" size="md" icon={<Settings />} label="Settings" />,
};

export const PrimarySmall: StoryObj = {
  name: 'Primary / Small',
  render: () => <IconButton variant="primary" size="sm" icon={<Settings />} label="Settings" />,
};

export const NeutralMedium: StoryObj = {
  name: 'Neutral / Medium',
  render: () => <IconButton variant="neutral" size="md" icon={<Settings />} label="Settings" />,
};

export const NeutralSmall: StoryObj = {
  name: 'Neutral / Small',
  render: () => <IconButton variant="neutral" size="sm" icon={<Settings />} label="Settings" />,
};

export const SubtleMedium: StoryObj = {
  name: 'Subtle / Medium',
  render: () => <IconButton variant="subtle" size="md" icon={<Settings />} label="Settings" />,
};

export const SubtleSmall: StoryObj = {
  name: 'Subtle / Small',
  render: () => <IconButton variant="subtle" size="sm" icon={<Settings />} label="Settings" />,
};

export const Disabled: StoryObj = {
  render: () => (
    <div className="flex items-center gap-[16px]">
      <IconButton variant="primary" size="md" icon={<Settings />} label="Settings" disabled />
      <IconButton variant="neutral" size="md" icon={<Settings />} label="Settings" disabled />
      <IconButton variant="subtle" size="md" icon={<Settings />} label="Settings" disabled />
    </div>
  ),
};

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-[24px]">
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">Primary</p>
        <div className="flex items-center gap-[12px]">
          <IconButton variant="primary" size="md" icon={<Plus />} label="Add" />
          <IconButton variant="primary" size="md" icon={<X />} label="Close" />
          <IconButton variant="primary" size="md" icon={<Search />} label="Search" />
          <IconButton variant="primary" size="md" icon={<Heart />} label="Like" />
          <IconButton variant="primary" size="md" icon={<Star />} label="Favorite" />
          <IconButton variant="primary" size="sm" icon={<Plus />} label="Add" />
          <IconButton variant="primary" size="sm" icon={<X />} label="Close" />
          <IconButton variant="primary" size="sm" icon={<Bell />} label="Notifications" />
        </div>
      </div>
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">Neutral</p>
        <div className="flex items-center gap-[12px]">
          <IconButton variant="neutral" size="md" icon={<Edit />} label="Edit" />
          <IconButton variant="neutral" size="md" icon={<Trash2 />} label="Delete" />
          <IconButton variant="neutral" size="md" icon={<Download />} label="Download" />
          <IconButton variant="neutral" size="md" icon={<Upload />} label="Upload" />
          <IconButton variant="neutral" size="md" icon={<Share />} label="Share" />
          <IconButton variant="neutral" size="sm" icon={<Edit />} label="Edit" />
          <IconButton variant="neutral" size="sm" icon={<Copy />} label="Copy" />
          <IconButton variant="neutral" size="sm" icon={<MoreHorizontal />} label="More" />
        </div>
      </div>
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">Subtle</p>
        <div className="flex items-center gap-[12px]">
          <IconButton variant="subtle" size="md" icon={<ArrowLeft />} label="Back" />
          <IconButton variant="subtle" size="md" icon={<ArrowRight />} label="Forward" />
          <IconButton variant="subtle" size="md" icon={<Check />} label="Confirm" />
          <IconButton variant="subtle" size="md" icon={<MoreHorizontal />} label="More" />
          <IconButton variant="subtle" size="sm" icon={<ArrowLeft />} label="Back" />
          <IconButton variant="subtle" size="sm" icon={<ArrowRight />} label="Forward" />
        </div>
      </div>
    </div>
  ),
};

export const SizeComparison: StoryObj = {
  name: 'Size Comparison',
  render: () => (
    <div className="flex items-center gap-[24px]">
      <div className="flex flex-col items-center gap-[8px]">
        <IconButton variant="primary" size="md" icon={<Settings />} label="Settings" />
        <span className="text-[12px] text-[var(--text-default-secondary)]">Medium 44×44</span>
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <IconButton variant="primary" size="sm" icon={<Settings />} label="Settings" />
        <span className="text-[12px] text-[var(--text-default-secondary)]">Small 36×36</span>
      </div>
    </div>
  ),
};
