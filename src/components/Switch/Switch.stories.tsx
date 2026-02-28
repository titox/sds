import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta = {
  title: 'Components/Inputs/Switch',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

export const Unchecked: StoryObj = {
  render: () => <Switch label="Label" />,
};

export const Checked: StoryObj = {
  render: () => <Switch label="Label" defaultChecked />,
};

export const WithDescription: StoryObj = {
  render: () => <Switch label="Label" description="Description" />,
};

export const CheckedWithDescription: StoryObj = {
  render: () => <Switch label="Label" description="Description" defaultChecked />,
};

export const DisabledUnchecked: StoryObj = {
  render: () => <Switch label="Label" description="Description" disabled />,
};

export const DisabledChecked: StoryObj = {
  render: () => <Switch label="Label" description="Description" defaultChecked disabled />,
};
