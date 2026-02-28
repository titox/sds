import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta = {
  title: 'Components/Inputs/Select',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
  { label: 'Option 4', value: 'option-4' },
];

export const Default: StoryObj = {
  render: () => <Select label="Label" options={options} placeholder="Select an option" />,
};

export const WithValue: StoryObj = {
  render: () => <Select label="Label" options={options} defaultValue="option-1" />,
};

export const WithDescription: StoryObj = {
  render: () => (
    <Select
      label="Label"
      description="Description"
      options={options}
      placeholder="Select an option"
    />
  ),
};

export const WithError: StoryObj = {
  render: () => (
    <Select
      label="Label"
      description="Description"
      options={options}
      placeholder="Select an option"
      error="This field is required."
    />
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <Select
      label="Label"
      description="Description"
      options={options}
      defaultValue="option-1"
      disabled
    />
  ),
};

export const DisabledPlaceholder: StoryObj = {
  render: () => (
    <Select
      label="Label"
      options={options}
      placeholder="Select an option"
      disabled
    />
  ),
};
