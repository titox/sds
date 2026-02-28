import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Menu, MenuItem, MenuHeader, MenuHeading, MenuSeparator } from './Menu';

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2L14 5L5 14H2V11L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4h12M5 4V2h6v2M6 7v5M10 7v5M3 4l1 10h8l1-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 5V3.5A1.5 1.5 0 009.5 2h-7A1.5 1.5 0 001 3.5v7A1.5 1.5 0 002.5 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const meta: Meta = {
  title: 'Components/Menu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};
export default meta;

export const Default: StoryObj = {
  name: 'Default',
  render: () => (
    <Menu>
      <MenuItem label="Edit" onClick={() => {}} />
      <MenuItem label="Duplicate" onClick={() => {}} />
      <MenuItem label="Delete" onClick={() => {}} />
    </Menu>
  ),
};

export const WithIcons: StoryObj = {
  name: 'With icons',
  render: () => (
    <Menu>
      <MenuItem label="Edit" icon={<EditIcon />} onClick={() => {}} />
      <MenuItem label="Copy" icon={<CopyIcon />} onClick={() => {}} />
      <MenuItem label="Delete" icon={<TrashIcon />} onClick={() => {}} />
    </Menu>
  ),
};

export const WithShortcuts: StoryObj = {
  name: 'With shortcuts',
  render: () => (
    <Menu>
      <MenuItem label="Edit" shortcut="⌘E" onClick={() => {}} />
      <MenuItem label="Copy" shortcut="⌘C" onClick={() => {}} />
      <MenuItem label="Paste" shortcut="⌘V" onClick={() => {}} />
      <MenuItem label="Delete" shortcut="⌫" onClick={() => {}} />
    </Menu>
  ),
};

export const WithDescriptions: StoryObj = {
  name: 'With descriptions',
  render: () => (
    <Menu>
      <MenuItem
        label="Move to project"
        description="Reassign this item to a different project"
        icon={<EditIcon />}
        onClick={() => {}}
      />
      <MenuItem
        label="Duplicate"
        description="Create an identical copy"
        icon={<CopyIcon />}
        onClick={() => {}}
      />
      <MenuItem
        label="Delete permanently"
        description="This cannot be undone"
        icon={<TrashIcon />}
        onClick={() => {}}
      />
    </Menu>
  ),
};

export const WithHeader: StoryObj = {
  name: 'With header',
  render: () => (
    <Menu>
      <MenuHeader title="John Doe" subtitle="Account" />
      <MenuSeparator />
      <MenuItem label="Profile" onClick={() => {}} />
      <MenuItem label="Settings" onClick={() => {}} />
      <MenuSeparator />
      <MenuItem label="Sign out" onClick={() => {}} />
    </Menu>
  ),
};

export const WithSections: StoryObj = {
  name: 'With sections',
  render: () => (
    <Menu>
      <MenuHeading>Edit</MenuHeading>
      <MenuItem label="Cut" shortcut="⌘X" onClick={() => {}} />
      <MenuItem label="Copy" shortcut="⌘C" onClick={() => {}} />
      <MenuItem label="Paste" shortcut="⌘V" onClick={() => {}} />
      <MenuSeparator />
      <MenuHeading>Actions</MenuHeading>
      <MenuItem label="Rename" onClick={() => {}} />
      <MenuItem label="Delete" onClick={() => {}} />
    </Menu>
  ),
};

export const WithDisabledItems: StoryObj = {
  name: 'With disabled items',
  render: () => (
    <Menu>
      <MenuItem label="Edit" onClick={() => {}} />
      <MenuItem label="Cut" disabled />
      <MenuItem label="Paste" disabled />
      <MenuSeparator />
      <MenuItem label="Delete" onClick={() => {}} />
    </Menu>
  ),
};

export const FullKitchenSink: StoryObj = {
  name: 'Full kitchen sink',
  render: () => (
    <Menu>
      <MenuHeader title="workspace-name" subtitle="Team" />
      <MenuSeparator />
      <MenuHeading>File</MenuHeading>
      <MenuItem label="New file" shortcut="⌘N" icon={<EditIcon />} onClick={() => {}} />
      <MenuItem label="Duplicate" shortcut="⌘D" icon={<CopyIcon />} onClick={() => {}} />
      <MenuItem
        label="Export"
        description="Export to various formats"
        onClick={() => {}}
      />
      <MenuSeparator />
      <MenuHeading>Danger zone</MenuHeading>
      <MenuItem label="Delete project" icon={<TrashIcon />} onClick={() => {}} />
      <MenuItem label="Archived item" disabled />
    </Menu>
  ),
};
