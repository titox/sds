import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

const meta: Meta = {
  title: 'Components/Buttons/Button Group',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};
export default meta;

export const Start: StoryObj = {
  render: () => (
    <ButtonGroup align="start">
      <Button variant="brand">Save</Button>
      <Button variant="default">Cancel</Button>
    </ButtonGroup>
  ),
};

export const End: StoryObj = {
  render: () => (
    <ButtonGroup align="end">
      <Button variant="default">Cancel</Button>
      <Button variant="brand">Save</Button>
    </ButtonGroup>
  ),
};

export const Center: StoryObj = {
  render: () => (
    <ButtonGroup align="center">
      <Button variant="default">Cancel</Button>
      <Button variant="brand">Confirm</Button>
    </ButtonGroup>
  ),
};

export const Justify: StoryObj = {
  render: () => (
    <div style={{ width: 400 }}>
      <ButtonGroup align="justify">
        <Button variant="default">Cancel</Button>
        <Button variant="brand">Save Changes</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Stack: StoryObj = {
  render: () => (
    <div style={{ width: 320 }}>
      <ButtonGroup align="stack">
        <Button variant="brand">Primary Action</Button>
        <Button variant="default">Secondary Action</Button>
        <Button variant="danger">Delete</Button>
      </ButtonGroup>
    </div>
  ),
};

export const AllAlignments: StoryObj = {
  name: 'All Alignments',
  render: () => (
    <div className="flex flex-col gap-[32px]" style={{ width: 480 }}>
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">Start</p>
        <ButtonGroup align="start">
          <Button variant="brand">Save</Button>
          <Button variant="default">Cancel</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">End</p>
        <ButtonGroup align="end">
          <Button variant="default">Cancel</Button>
          <Button variant="brand">Save</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">Center</p>
        <ButtonGroup align="center">
          <Button variant="default">Cancel</Button>
          <Button variant="brand">Confirm</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">Justify (stretch to fill)</p>
        <ButtonGroup align="justify">
          <Button variant="default">Cancel</Button>
          <Button variant="brand">Save Changes</Button>
        </ButtonGroup>
      </div>
      <div>
        <p className="text-[12px] text-[var(--text-default-secondary)] mb-[12px] font-[600] uppercase tracking-wider">Stack (full width, column)</p>
        <ButtonGroup align="stack">
          <Button variant="brand">Primary Action</Button>
          <Button variant="default">Secondary Action</Button>
          <Button variant="danger">Delete</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
};

export const ThreeButtons: StoryObj = {
  name: 'Three Buttons — Justify',
  render: () => (
    <div style={{ width: 480 }}>
      <ButtonGroup align="justify">
        <Button variant="danger">Delete</Button>
        <Button variant="default">Cancel</Button>
        <Button variant="brand">Save</Button>
      </ButtonGroup>
    </div>
  ),
};
